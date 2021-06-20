# Foxlet web client for Ripple

Foxlet allows you to encrypt your mnemonic/secret key and store it as a file locally on your computer.

## Key Features

- No registration. Secret key and login information stored locally.
- Sign transaction local and then submit. Protect the secret key from exposure to the Internet.
- Send/receive/convert ripples, assets and tokens.
- Buy/sell ripples, assets and tokens.
- Manage trust lines, account data.
- View balances and history.
- [Federation protocol](https://github.com/ripplefox/ripplewallet/wiki/Federation-Protocol) support.

## Build

- Run `npm install` to prepare the lib.
- Optional. Use browerify to generate the js file in js/lib.
- Deploy on your web server.

# 瑞狐网页钱包

网页形式的瑞波钱包。钱包文件与桌面钱包通用。与桌面钱包一样，钱包本身不存储任何用户信息（密码、私钥等），用户自己为安全负责，完全掌握自己的数字资产。


## 为什么需要这个钱包？

- 人民需要什么样的钱包，我们就写什么样的钱包。
- 强大的交易、兑换、发送、管理功能。而且支持[联邦协议](https://github.com/ripplefox/ripplewallet/wiki/Federation-Protocol)的Dapp。
- 安全的备份支持。
- 用最新的开发包，本地签名后再与瑞波网络交互。
- 连接最快的服务器，优化中国区的访问。
- 根据网关多年的经验，更好地服务用户。

## 开发和运行

先安装Node.js。没有安装的话，开发人员推荐使用[Node version manager](https://github.com/creationix/nvm)。

- 安装各种依赖包 `npm install`。
- 使用browerify生成js/lib里的文件，也可以跳过这一步直接使用已有的。
- 放到服务器上运行即可。