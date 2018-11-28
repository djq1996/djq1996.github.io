---
sidebar: 'auto'
---

# bash

## skill note

```bash
a.py > a.json # 文件执行结果导入文件
a.js > a.txt # 同理

cat *.js grep | http # 查看所有js文件，过滤 文件中 http

npm # 查看全局安装过的包命令：npm list -g --depth 0

echo '# hello world ' > READme.md # 建立readme.md 文件 并且写入 hello world

command + shift + . #显示隐藏文件
```

## nginx

```bash
systemctl start nginx.service #启动  or nginx

nginx -s quit

service mysqld restart
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


## vim

### 让所有用户显示行号

```bash
vim /etc/vimrc
set nu # 在vimrc文件的最后添加：
：wq
source /etc/bashrc #手动加载配置：
```

## 创建，压缩，移动，拷贝文件

### copy file

```bash
cp [option][cpname-url] [purpose-name-url]
cp -r
```

### moved file

```bash
mv [cpname-url][purpose-name-url]
```

### remove file

remove file

```bash
1. rm [option] -r [file-name]
```

remove folder

```bash
2. rm [option] -rf [folder]
```

### compress file

```bash
zip [file-name][file-url]
```

### unzip file

```bash
unzip [file-name]
```

### open new directory

```bash
mkdir
```

### drop directory

```
undir
```

## bash 简写

```bash
例如： 命令常用的 ls 命令 只能看见显式的文件，隐藏文件需要加 ls -a ,ls -l 等等操作来显示更详细的信息，但是这些命令我门可以简写

ll => ls -l
```

### 设置步骤

```bash
# 编辑 ~/.bashrc 文件
sudo vim ~/.bashrc #sudo 是为了避免没权限操作，进入了vim 编辑器

#加入简写命令
alias ll = 'ls -l' #退出vim编辑器  先按esc , 在输入 :wq 保存并退出

#生效
source ~/.bashrc 或者  . ~/.bashrc
```

### 查看清晰文件结构，大小

```bash
# -h 是文件大小显示单位M ,KB
ls -ahl

# 查看内部文件信息
ls -ahl /dist
```

#### 编辑 hosts

```bash
# 进入编辑hosts
cat vi /etc/hosts
```

## centos
```bash
# 查看端口
 netstat -ntlp  

#  重启sshd
systemctl restart sshd.service

yum

wget 
| grep
```