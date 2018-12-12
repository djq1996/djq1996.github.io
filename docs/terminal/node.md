# node

## npm

```bash

npm list -g --depth 0  # 查看全局安装过的包命令

```

## n 管理 node

### 安装，升级，切换

```bash

# 全局安装n
npm install -g n
# 查看版本列表
n
# 升级到最新稳定版
n stable
# 升级到最新版
n latest
# 升级到定制版
n v7.10.0
# 切换使用版本
n 7.10.0 (ENTER)
```

### 删除版本

```bash
n rm 7.10.0
```

## forever

```bash
sudo npm install forever -g   #安装
forever start app.js          #启动
forever stop app.js           #关闭
forever list            #列出所有服务
forever stopall            #关闭所有服务
forever start -l forever.log -o out.log -e err.log app.js   #输出日志和错误
```

## yarn

```bash
npm install taco --save     ===    yarn add taco —— taco 包立即被保存到 package.json 中。
npm uninstall taco --save   ===    yarn remove taco
npm install taco --save-dev ===    yarn add taco --dev
npm update --save           ===    yarn upgrade
npm -g           ===    yarn global
# 需要注意的是  要安装全局的  global 必须放在前面
# 如：yarn global add  [] 而不是 yarn add global []
```

## node

```bash
__dirname # 总是返回被执行的 js 所在文件夹的绝对路径

__filename # 总是返回被执行的 js 的绝对路径

process.cwd() # 总是返回运行 node 命令时所在的文件夹的绝对路径

path.dirname(__filename) # 返回路径下的文件夹部分

path.dirname(__filename) + '/path.js';  # 当前目录下

path.resolve(__dirname, '../regx/regx.js'); # 相邻目录下

./: 跟 process.cwd() 一样，返回 node 命令时所在的文件夹的绝对路径


module.exports # export 相当于 提供了一个方法
exports  ==>   var exports = module.exports; # 所以不能直接给exports 赋值

```
