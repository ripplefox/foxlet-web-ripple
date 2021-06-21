/* exported translate_cn */
var translate_cn = {
  header_wellcome : '欢迎使用瑞波，分布式价值交换网络',
  login_desc : '本钱包使用秘钥来登录已有的账户。你的秘钥加密保存在了你的电脑里，所以账户像你的个人电脑一样安全。请务必做好密钥的备份。',
  open_wallet: '打开钱包',
  create_wallet: '创造钱包',
  open_account : '打开账户',
  open_temp_act: '打开临时账户',
  select_file : '选择账户文件',
  create_new_account : '创建新账户',
  create_new_account_info : '密钥将会存在你的本地文件里，并被密码保护。你也可以考虑采用硬件钱包进一步加强安全。',
  account_password : '账户密码',
  open_existed_account : '打开已有账户',
  create_blank : '创建一个全新账户',
  create_by_secret : '用秘钥创建',
  create_by_mnemonic : '用助记词创建',
  enter_mnemonic : '请输入助记词',
  encrypt_new_file : '加密你的新账户文件',
  wallet_file : '账户文件',
  password : '密码',
  pwd_weak : '强度太低，密码最好包含字母、数字和特殊符号。',
  password_confirm : '确认密码',
  pwd_not_match : '密码不一致',
  encrypt_account : '加密账户',
  create_secret : '用秘钥创建帐户',
  enter_secret : '请输入秘钥',
  invalid_account: '账号是无效的',
  invalid_secret : '秘钥是无效的',
  invalid_mnemonic: '助记词是无效的',
  important : '重要信息：',
  security_notice : '下方的秘钥让你可以在丢失密码的小概率事件中拿回你的钱。任何拥有该秘钥的人都可以取出你的钱。所以务必将它保管在安全的地方。',
  show_password : '显示',
  hide_password : '隐藏',
  public_address : '公开地址',
  secret_key : '秘钥和助记词',
  mnemonic: '助记词',
  or: '或',
  show_secret: '显示秘钥',
  hide_secret: '隐藏秘钥',
  are_you_sure_secret: '你在一个安全的地方？没有人或摄相头在看你吧？',
  save_safe: '你把密钥/助记词保存在安全的地方了吗？',
  yes_save: '是，我已经保存好了！',
  cancel : '取消',
  back   : '返回',
  confirm: '确定',
  stop_countdown: '停止倒计时',
  
  /** Balance & Trust **/
  overview: '概况',
  balance : '余额',
  reserve   : '冻结：',
  total : '总量',
  trust : '授信',
  asset : '资产',
  no_balance  : '账户未找到，请检查到瑞波网络的连接。',
  trust_limit : '授信额度',
  add_trust : '对网关进行授信',
  trust_src : '授信后才能充值或接收他人的转账。',
  trust_note: '注意: 默认列表来源于瑞波公司的行情网站，钱包不对网关进行可靠性调查。请不要信任自己不了解的网关。',
  trust_remove : '删除授信',
  trust_noremove_desc : '无需删除授信',
  trust_removeing : '正在删除……',
  trust_add : '授信',
  fed_add : '通过联邦协议授信',
  fed_desc: '输入支持联邦协议的域名，你就能进行授信。',
  fed_url : '联邦协议 URL',
  fed_unable : '无法找到资产',
  fed_loading: '正在解析资产',
  manual_add : '手动授信',
  issuer_invalid : '发行方账号必须是有效的瑞波地址编码。',
  trust_granted  : '设置信任额度成功！',

  /** send **/
  send : '发送',
  send_money : '转账',
  name_or_address : '联系人名字或瑞波地址',
  send_note : '注意：接受者必须也授信过同样的资产。',
  recipient : '接受者',
  dest_tag  : '标签',
  tag_need  : '接受者要求发送时必须附带标签。如果你不知道，请先联系对方。',
  disallow_xrp: '对方不接受{{code}}转账！你确定你要强行发送{{code}}过去吗?',
  will_receive: '对方将收到',
  invalid_address : '必须是你的联系人或是有效的瑞波地址。',
  invalid_amount : '不是有效的金额',
  invalid_domain : '域名无响应',
  account_loading: '正在解析账号',
  sending_to   : '正在发送到',
  send_done    : '发送成功',
  not_funded   : '未激活。请发送至少20个{{code}}创建该账号。建议发31个或更多。',
  no_send_path : '找不到你和目标账户之间的路径。',
  you_sending : '你将把{{code}}发送到',

  contacts : '联系人',
  contact  : '联系人',
  address  : '地址',
  add_contact : '添加联系人',
  edit        : '编辑',
  leave_blank : '选填，可留空',
  Delete      : '删除',
  are_you_sure: '你确定要这样做？',
  no_contact  : '您目前还没有任何联系人。请点击 “添加联系人” 按钮来添加一个新的联系人。',
  error_need_contact : '请输入一个联系人',
  error_same_contact : '该联系人已存在',
  error_need_address : '请输入一个账号地址',
  error_invalid_address : '不是有效的账号地址',
  error_invalid_tag     : '不是有效的标签号',
  error_already_name    : '已有同名联系人',

  /** Convert **/
  convert       : '兑换',
  convert_title : '把一种货币转换成另一种',
  convert_input : '请输入兑换的具体信息。',
  convert_nopath: '没有合适的兑换路径。可能是账号的资金或授信不足。',
  receive       : '接收',
  calculating   : '计算中……',
  path_updated  : '路径上次更新在',
  seconds_ago   : '秒以前',
  converting    : '你正在兑换',
  converting_to : '到',
  pay_most      : '你将最多花费',
  submitting    : '正在把交易提交到 Ripple 网络',
  submitted     : '交易信息已经提交。',
  cleared       : '交易完成！',
  act_will_upd  : '您的账户会在交易完成后即时更新。',
  back_convert  : '进行另一个兑换',
  go_balance    : '返回到余额界面',

  /** History **/
  history: '历史',
  you         : '你',
  date        : '时间',
  account_id  : '账号',
  loading     : '载入中...',
  load_more   : '载入更多',
  no_more     : '没有更多的交易了',
  
  you_convert: '你请求兑换',
  you_convert_to: '到',
  you_sold: '你卖出了',
  you_sold_for: '得到', 
  you_bought: '你买到了',
  you_bought_for: '花费', 
  order_filled: '。此委托已经完全成交。',
  rest_cancel: '。剩下的委托因为资金不足被取消。',
  order_has: '。此委托还有',
  remaining: '未成交。',
  you_sell: '你创建了一个卖单，卖出',
  you_sell_for: '得到',
  you_buy: '你创建了一个买单，买入',
  you_buy_for: '花费',
  you_cancel: '你取消了委托单：',
  you_cancel_for: '花费',
  you_trust: '你把',
  you_trust_for: '的信任额度调整为',
  trust_you: '把对你的信任额度调整为',
  you_sent: '你发送了',
  you_sent_to: '给',
  sent_you: '给你发送了',
  bal_change : '你的资产变动了',
  order_cancel: '委托单（用',
  order_cancel_for: '购入',
  order_cancel_due: '）因为资金不足被取消。',
  accountset: '账号信息已更新',
  rippling: '同种货币互相置换',
  failedtx: '失败的交易',
  tx_tag: '。(标签',
  another_payment: '进行另一笔支付',
  request_quote: '正在请求报价',

  choose : '选择',
  example : '示例',
  refresh : '刷新',
  asset_code : '资产代码',
  issuer_id : '发行方账号',
  amount : '金额',
  optional : '选填',
  required : '必填',

  trade : '交易',
  normal: '标准',
  sent  : '发送',
  received : '接收',
  created : '创建',
  offer : '买卖',
  offer_cancel    : '撤单',
  offer_canceling : '撤单中...',
  type  : '类型',
  price : '价格',
  action: '动作',
  buy   : '买',
  sell  : '卖',
  fatfinger : '警告：你的委托单偏离市场价过大，请再次确认价格！',
  orderbook : '委托单',
  buy_offers : '买单',
  sell_offers: '卖单',
  no_bids : '目前该货币组合没有买单',
  no_asks : '目前该货币组合没有卖单',
  sum   : '总和',
  size  : '数量',
  ask_price : '卖出价',
  bid_price : '买入价',
  manager_offer : '管理委托',
  your_buy_offers  : '我的买单',
  your_sell_offers : '我的卖单',
  no_offers : '你没有委托单',
  you_have      : '你拥有',
  order_amount  : '数量',
  price_of_each : '单价',
  order_value   : '委托总额',
  offer_success : '下单成功',
  trade_pick : '选择交易资产',
  as_base    : '选作基础货币',
  as_counter : '选作对手方货币',
  base_asset    : '基础货币',
  counter_asset : '对手方货币',
  pick_book  : '为了交易其他资产，你可以选择',
  trade_pair : '交易对',
  pick_trade : '回到',
  trade_page : '交易页面',
  advanced   : '高级',
  show_all   : '显示所有委托单',
  buying     : '买入',
  selling    : '卖出',

  /** Setting & security **/
  settings : '设置',
  network  : '网络',
  proxy    : '代理',
  server : '服务器',
  port : '端口',
  add : '添加',
  reset : '重置',
  remove : '删除',
  selected_net    : '当前使用的网络',
  switch_net      : '瑞波网络',
  switch_net_desc : '测试网络仅用于开发、测试和研究。钱包大部分功能只适用于公共网络。如非专业人员，请勿切换成测试网络。',
  public_net : '公共网络',
  test_net   : '测试网络',
  other_net  : '自定义',
  'Ripple Public Network' : '瑞波公网',
  'Ripple Test Network' : '测试网络',
  'User defined' : '自定义',
  public_url : '瑞波公网节点',
  test_url   : '测试网络节点',
  other_url  : '网络节点',
  passphrase : '网络标识',
  max_fee     : '最大费用',
  max_fee_desc: '网络繁忙时，交易允许使用的最大费用。',
  timeout      : '网络超时',
  timeout_desc : '连接服务器节点的最大时间（秒）。',
  coin_ticket: '资产代码',
  fed_protocol: '联邦协议',
  fed_ripple  : '瑞波服务',
  fed_ripple_desc : '当你输入Ripple地址时，将自动用以下域名进行解析。',
  fed_bitcoin  : '比特币服务',
  fed_bitcoin_desc : '当你输入Bitcoin地址时，将自动用以下域名进行解析。',
  save     : '保存',
  security : '安全',

  home_domain : '域名',
  domain_desc : '账号可设置一个域名。在某些场景下，可通过域名取得更多的帮助信息。',
  domain_done : '域名设置成功',
  payment_flag: '支付标志',
  disallowxrp : '对方转账时提示，该账号不接受XRP。注意：非强制性，对方仍可强行发送。',
  requiretag  : '对方转账时提示，支付需要提供标签号。',
  setrippling : '允许资产置换（Rippling）。此为危险操作，不要打开，除非你是发行方。',
  flags_done  : '设置成功',
  messagekey_desc : '用于向该帐户发送加密消息的公钥。',
  manage_data : '数据',
  back        : '返回',
  
  AccountDelete : '删除账号',
  merge_desc     : '危险！此操作将你持有的{{code}}转移到目标账户，手续费5 {{code}}！',
  account_noclean: '账户必须不含任何依赖，如信任线等。',
  dest_account   : '目标账户',
  delete_warning : '我明白所有风险 >>',
  merge_done     : '你的账户已经被合并到了目标账户。',

  /** Deposit & withdrawl **/
  service : '服务',
  deposit_withdraw : '充提',
  deposit  : '充值',
  withdraw : '提现',
  dw_coin  : '充值和提现',
  dw_desc_line1 : '如果你要充值或提现法币和其他链上的币，你需要挑选一个网关服务。',
  dw_desc_line2 : '你可以从下面的下拉框里选择一个网关。它们是我们从社区挑选并实现了加强版联邦协议的网关。',
  gateway   : '网关',
  gateways  : '网关',
  no_trust : '请先授信此资产',
  alipay   : '支付宝',
  bank_card : '银行卡',
  fill_form : '请先完整地填写表单。',
  analyzing : '正在解析……',
  will_recv : '对方将收到',
  can_send  : '你可以发送',

  ripple : '瑞波',
  ripple_desktop_client : '瑞波桌面钱包',
  wallet_notice1 : '你的资产和钱包由数字加密算法保护，只能用你的密钥访问。',
  wallet_notice2 : '钱包文件丢失不可恢复，一定要备份钱包或密钥！',
  wallet_notice3 : '千万不要忘记密码，也不要告诉别人密码或密钥！',
  app_open_source : '钱包开源。',
  github_feedback : '可以在github提交问题。',
  qq_feedback     : '可到社区QQ群703611153里交流问题。',
  trade_volume : '24小时交易量',
  wallet : '钱包',
  version: '版本',
  logout : '注销',
  new_version_available: '发现新版本',

  /** Error **/
  NotFoundError : '瑞波网络未找到该账号，请先激活此账号。激活需要至少20 {{code}}。每个授信和委托单需要额外冻结5 {{code}}，建议至少用31 {{code}}完成激活。',
  NotConnectedError : '未连接到服务器，请过一会儿再试。',
  NoRippleTXT: '网站未提供ripple.txt文件',
  NoFederationUrl: '网站未提供联邦协议服务',
  'Invalid Email' : '电子邮箱地址不正确。'
}
