---
sidebar: 'auto'
---

# Git

## git install

### 安装

1. 可以直接用命令行安装
2. 可以去 Git 官网上下载 Git 安装程序 安装

### 检测是否安装成功

验证是否安装成功

打开命令行输入

```bash
git --version
```

注意是两个‘-’符号

### 配置用户信息

配置你的 Git 用户和邮箱

```bash
# "用户名字"
git config --global user.name
# "邮箱"
git config --global user.email
```

### 生产密匙

生产秘匙

1. 首先我们先检测电脑曾经是否生成过秘匙

```bash
cd ~/.ssh
```

2. 若显示没有此文件：

```bash
-bash: cd: /Users/mac/.ssh: No such file or directory
```

3. 生成秘匙

```bash
ssh-keygen -t rsa -C "macbookpro"
```

命令要求输入密码 在此我们可以敲三个回车跳过，不用输

执行成功过后我们在输入命令

```bash
cd ~/.ssh
```

进入到文件夹以后 输入

```bash
ls
```

可以查看文件列表

查看公钥

```bash
cat id_rsa.pub
```

会出现一段编码 ，全部复制

### GitHub 配置 ssh

登陆我们的 GitHub 进入设置(setting),选择 ssh，添加新的秘钥

## git bash

### 远程操作

```bash
git remote add pb https://github.com/paulboone/ticgit  # 添加远程分支[name] [url]
git remote # 查看远程仓库
git remote -v # 查看远程仓库详情地址
```

### 分支操作

```bash
git br # 查看本地分支
git br -v   # 查看分支提交版本
git br -av # 查看所有分支和提交版本
```

### 找到 Git 提交的 ID 值

记录每次命令的 操作的 ID

```bash
git reflog
```

### 更新远程

记录每次命令的 操作的 ID

```bash
git fetch # 获取更新 需要手动merge origin/dev | master

git fetch orgin :temp # 获取更新并且新建分支temp 需要merge temp

git pull  # 获取更新并且自动合并
```

### Git 撤销修改

撤销工作区的修改

```bash
# 注意是‘--’ 如果换成一个‘-’会是切换分支的意思
git checkout -- file
```

撤销对暂存区的修改

```bash
# 这样将会回回到工作区，在执行一遍 git checkout --file 可以撤销工作区修改
git reset HEAD file
```

版本回退，撤销已经 commit 但是还没有 push 的撤销

```bash
# 表示上一版本  HEAD^^ 上两个版本  HEAD~100 上一百个版本
1. git reset --hard HEAD^
# ID 获取ID可以用git reflog
2. git reset --hard 3628164
```

```bash
git reset HEAD^ --soft #（保存更改，返回上次提交）

git reset HEAD^ --hard #（放弃更改，返回上次提交）
```

### 分支的 upstream

```bash
# upstream的设置
git branch --set-upstream-to origin/master
git branch -u origin/master
# 在推送的同时，同时设置upstream
git push --set-upstream origin master # 新建分支
git push -u origin master # 简写
```

:::tip 加上了-u 参数
由于远程库是空的，我们第一次推送 master 分支时，加上了-u 参数，Git 不但会把本地的 master 分支内容推送的远程新的 master 分支，还会把本地的 master 分支和远程的 master 分支关联起来，在以后的推送或者拉取时就可以简化命令。
:::

### 分支合并

```bash
# 这样合并分支没有记录信息
1. git merge dev
# 这样合并分支有分支合并记录  有commit
2. git merge --no-ff -m "merge with no-ff" dev
```

### 暂存开发

:::tip 技巧
保存当前开发进度，用来新建分支解决 bug
:::

```bash
# 缓存
1. git stash

# 查看缓存开发进度保存
git stash list  /
# 恢复
2. git stash apply
# 恢复并删除暂存
3. git stash pop
# 删除全部缓存
4. git stash clear
# 删除单个缓存
4. git stash drop stash@{0}
```

查看文件历史记录

```bash
git log --follow -p file
```

## 忽略已经提交 git 的文件或者文件夹

```bash

# 已提交到git远程仓库的文件
# 如果当前文件是已经commit ,push到远程仓库后了，.gitignore里面再配置是不起作用的，此时需要清除对此文件的追踪
# 文件
git rm –cached xxx
# 文件夹名称取消追踪
git rm -r –cached

# 在.gitignored中添加需要过滤的文件
# commit, push提交.gitignore
```

### 多人协作模式

1. 首先，可以试图用 git push [origin][branch-name] 推送自己的修改；
2. 如果推送失败，则因为远程分支比你的本地更新，需要先用 git pull 试图合并；
3. 如果合并有冲突，则解决冲突，并在本地提交；
4. 没有冲突或者解决掉冲突后，再用 git push origin branch-name 推送就能成功！

::: tip 注意
如果 git pull 提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令 git branch --set-upstream branch-name origin/branch-name。
:::

## git 命令简写配置

### git 自定义命令简介

我们可以设置一些 简化版 例如：

```bash
# 这样 git st == git status 具体

git config --global alias.st status # 仓库状态
git config --global alias.co checkout #切换分支
git config --global alias.ci commit #commit
git config --global alias.br branch #分支信息
git config --global alias.unstage 'reset HEAD' #重置某文件
git config --global alias.last 'log -1' #查看最后一次提交
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"#变态好看的提交记录
```

::: tip 执行多行命令
多个命令一起执行 加个 &&
命令折行执行（容易观看） \
:::

### git 简写配置

```bash
git config --global alias.s status &&
git config --global alias.co checkout &&
git config --global alias.ci commit &&
git config --global alias.br branch &&
git config --global alias.unstage 'reset HEAD' &&
git config --global alias.last 'log -1' &&
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

## git 查看/修改用户名和邮箱地址

### 用户名和邮箱地址的作用

    用户名和邮箱地址是本地git客户端的一个变量，不随git库而改变。

    每次commit都会用用户名和邮箱纪录。

    github的contributions统计就是按邮箱来统计的。

### 查看用户名和邮箱地址

```
git config user.name  # 如果不显示就是没有设置

git config user.email
```

### 修改用户名和邮箱地址

```
git config --global user.name "username"

git config --global user.email "email"
```

### 查看 Git 全局配置

```
git config --list

git config --global credential.helper store
```

## 删除大的 依赖文件 的 git 监听

```bash
例如：node_moudel
git rm --cached stupid.txt //从版本库中rm 文件，working dicrectory中仍然保留，如果要删除目录下所有文件包括子目录中的

git rm -r --cached node_moudel
在.gitignore中添加要忽略的文件
commit
push
其他成员pull，working directory中对应的文件会删除，所以如果文件重要，要提前备份。
```

## 服务器 git

```bash
groupadd git
adduser git -g git


cd /home/git
mkdir .ssh
chmod 700 .ssh
touch .ssh/authorized_keys
chmod 600 .ssh/authorized_keys
cd /home
chown -R git:git git #把仓库所属用户改为git。

cd /home
mkdir gitrepo
chown git:git gitrepo  #把仓库所属用户改为git。

cd gitrepo
git init --bare sample.git # 创建项目

chown -R git:git sample.git #把仓库所属用户改为git。

# 克隆问题 git-upload-pack: command not found
# because the server  git is not the default address
ln -s /usr/local/git/bin/git-upload-pack /usr/bin/git-upload-pack
ln -s /usr/local/git/bin/git-receive-pack /usr/bin/git-receive-pack

git clone git@47.100.26.246:/home/gitrepo/starry-server.git
```

[Centos 服务器 ssh 免密登录以及搭建私有 git 服务器](https://www.cnblogs.com/luozx207/p/9628195.html)
