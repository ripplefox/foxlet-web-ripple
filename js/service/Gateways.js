/* global _, myApp */

myApp.factory('Gateways', ['$rootScope', function($rootScope) {
    let _gateways = {
        "ripplefox.com" : {
          name : 'ripplefox.com',
          website : 'https://ripplefox.com/',
          deposit : 'https://ripplefox.com/deposit',
          assets : [
            {code : 'USD', issuer : 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y', list: true, name: "USDT", logo: "img/coin/usdt.svg", deposit: true, withdraw: "usdt@ripplefox.com"},
            {code : 'XLM', issuer : 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y', list: true, name: "Stellar Lumens", logo: "img/coin/xlm.png", deposit: true},
            {code : 'ULT', issuer : 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y', list: true, name: "Ultiledger", logo: "img/coin/ult.png"}
          ],
          logo : "img/gateway/ripplefox.png"
        },
        "foxcny.com" : {
          name : 'foxcny.com',
          website : 'https://foxcny.com/',
          assets : [
            {code : 'CNY', issuer : 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y', list: true, name: "CNYT"}
          ],
          logo : "img/gateway/ripplefox.png"
        },
        "iripplechina.com" : {
          name : 'iripplechina.com',
          website : 'http://wg.iripplechina.com',
          assets : [
            {code : 'CNY', issuer : 'razqQKzJRdB4UxFPWf5NEpEG3WMkmwgcXA'}
          ],
          logo : "img/gateway/ripplechina.png"
        },
        "bitstamp.net" : {
          name : 'bitstamp.net',
          website : 'https://www.bitstamp.net/',
          assets : [
            {code : 'USD', issuer : 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B', list: false},
            {code : 'BTC', issuer : 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B'}
          ],
          logo : "img/gateway/bitstamp.png"
        },
        "gatehub.net" : {
          name : 'gatehub.net',
          website : 'https://www.gatehub.net/',
          assets : [
            {code : 'USD', issuer : 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq'},
            {code : 'EUR', issuer : 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq'},
            {code : 'BTC', issuer : 'rchGBxcD1A1C2tdxF6papQYZ8kjRKMYcL', list: true}
          ],
          logo : "img/gateway/gatehub.png"
        },
        "xagfans.com" : {
          name : 'xagfans.com',
          website : 'https://xagfans.com/',
          deposit : 'https://xagfans.com/deposit',
          assets : [
            {code : 'XAG', issuer : 'rpG9E7B3ocgaKqG7vmrsu3jmGwex8W4xAG', list: true, logo : "img/coin/xag.png", deposit: true, withdraw: "xag@xagfans.com"}
          ],
          logo : "img/coin/xag.png"
        },
        "sologenic.com" : {
          name : 'sologenic.com',
          website : 'https://www.sologenic.com/',
          service : [],
          assets : [
            {code : 'SOLO', issuer : 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz', list: true}
          ],
          logo : "img/gateway/sologenic.jpg"
        },
        "dxperts.org" : {
          name : 'dxperts.org',
          website : 'https://dxperts.org/',
          service : [],
          assets : [
            {code : 'DXP', issuer : 'rM8AhEC5Zz46ecWC8KwkoMugY1KwFQqhZT'}
          ],
          logo : "img/gateway/dxperts.png"
        }
    };
    
    let _asset2gateway = {};
    for (var name in _gateways) {
      var gateway = _gateways[name];
      gateway.assets.forEach(asset =>{
        if (asset.logo) {
          _asset2gateway[key(asset.code, asset.issuer)] = {
              name : gateway.name,
              website : gateway.website,
              logo : asset.logo,
              deposit : asset.deposit ? gateway.deposit : "",
              withdraw : asset.withdraw ? asset.withdraw : asset.code.toLowerCase() + "@" + gateway.name
          };
        }
        _asset2gateway[asset.issuer] = {
            name : gateway.name,
            website : gateway.website,
            logo : gateway.logo
        }
      });
    }
    
    return {
      getGateway(code, issuer) {
        if (code === $rootScope.currentNetwork.coin.code) {
          return {
            logo : $rootScope.currentNetwork.coin.logo
          }
        }
        return _asset2gateway[key(code, issuer)] || _asset2gateway[issuer] || {logo : 'img/unknown.png'};
      },
      
      get gateways() {
        return _gateways;
      },
      
      get defaultTradeAssets() {
        return [
          {code : 'CNY', issuer : 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y'},
          {code : 'ULT', issuer : 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y'},
          {code : 'USD', issuer : 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y'},
          {code : 'XLM', issuer : 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y'}
        ]
      }
    };
  } ]);
