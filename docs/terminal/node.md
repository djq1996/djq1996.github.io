# node


## npm
```bash

npm list -g --depth 0  # 查看全局安装过的包命令

```


## forever

```bash
  $ sudo npm install forever -g   #安装
  $ forever start app.js          #启动
  $ forever stop app.js           #关闭
  $ forever list            #列出所有服务
  $ forever stopall            #关闭所有服务
  $ forever start -l forever.log -o out.log -e err.log app.js   #输出日志和错误
```
## yarn 
```bash
npm install taco --save     ===    yarn add taco —— taco 包立即被保存到 package.json 中。
npm uninstall taco --save   ===    yarn remove taco
npm install taco --save-dev ===    yarn add taco --dev
npm update --save           ===    yarn upgrade
```
