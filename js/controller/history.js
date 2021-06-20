/* global myApp */

myApp.controller("HistoryCtrl", [ '$scope', '$rootScope', 'XrpApi', 'AuthenticationFactory',
  function($scope, $rootScope, XrpApi, AuthenticationFactory) {
    $scope.history = [];
    $scope.loading = false;
    $scope.marker = null;
    
    $scope.load_more = function() {
      if ($scope.loading) { return; }
      $scope.loading = true;
      XrpApi.checkTx($scope.marker).then(data => {
        $scope.loading = false;
        $scope.error_msg = "";
        $scope.marker = data.id;
        data.transactions.forEach(tx => {
          $scope.history.push(_process(tx));
        });
        console.debug(data);
        $scope.$apply();
      }).catch(err => {
        $scope.loading = false;
        $scope.error_msg = err.message;
        $scope.$apply();
      });
    };

    $scope.refresh = function() {
      $scope.history = [];
      $scope.marker = null;
      $scope.load_more();
    };
    $scope.refresh();
    
    function _process(tx) {
      var t = {};
      if (tx.type == 'payment') {
        t.source = tx.specification.source.address;
        t.destination = tx.specification.destination.address;
        t.tag = tx.specification.destination.tag;
        if ($rootScope.address == t.source) {
          t.type = 'sent';
        } else if ($rootScope.address == t.destination) {
          t.type = 'received';
        }
        t.delivered = tx.outcome.deliveredAmount;
      }
      if (tx.type == 'trustline') {
        if ($rootScope.address == tx.specification.counterparty) {
          t.counterparty = tx.address;
          t.type = 'trusted';
        } else {
          t.counterparty = tx.specification.counterparty;
          t.type = 'trusting';
        }
        t.currency = tx.specification.currency;
        t.limit = tx.specification.limit;
      }

      t.memos = tx.specification.memos;
      t.date = tx.outcome.timestamp;
      tx.transaction = t;

      var effects = []
      //The status of the order. One of "created", "filled", "partially-filled", "cancelled".
      for (let account in tx.outcome.orderbookChanges) {
        let orders = tx.outcome.orderbookChanges[account];
        orders.forEach(order => {
          let e = {};
          e.type = 'offer_bought';
          if (order.direction == 'buy') {
            e.got = order.totalPrice;
            e.paid = order.quantity;
            e.price = order.makerExchangeRate;
          } else {
            e.got = order.quantity;
            e.paid = order.totalPrice;
            e.price = order.makerExchangeRate;
          }
          effects.push(e);
        });
      }
      tx.effects = effects;

      return tx;
    }
    
    // filter effect types
    // Show only offer_funded, offer_partially_funded, offer_cancelled,
    // offer_bought, trust_change_no_ripple side effects
    var filterEffects = function (tx) {
      if (!tx) return null;

      var event = $.extend(true, {}, tx);
      var effects = [];

      if (event.effects) {
        event.effects.forEach(effect => {
          if (effect.type == 'offer_funded'
            || effect.type == 'offer_partially_funded'
            || effect.type == 'offer_bought'
            || effect.type == 'trust_change_no_ripple'
            || effect.type === 'offer_cancelled')
          {
            if (effect.type === 'offer_cancelled' && event.transaction
              && event.transaction.type === 'offercancel') {
              return
            }
            effects.push(effect);
          } else if (effect.type == 'balance_change' & tx.tx_type == 'AccountDelete') {
            effects.push(effect);
          }
        });
        event.showEffects = effects;
      }

      if (effects.length || event.transaction) {
        return event;
      } else {
        return null;
      }
    };
    
  } ]);

