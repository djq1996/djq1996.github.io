# angular cli

## 安装脚手架

::: tip 因为国内网络限制
为了加快安装速度，两种解决方案。
:::

```bash
# 我们把node 的npm安装包换成淘宝镜像的cnpm配置
1. cnpm instll -g @angular/cli
# 修改npm配置
2. npm install  -g @angular/cli  --registry=https://registry.npm.taobao.org
```

## 创建项目

```bash
# my-app为我们自己的项目名称，后边配置是禁止自己下载node依赖包
ng new my-app --skip-install
cd my-app
# 我们用淘宝镜像 ,下载会很快,节省时间
cnpm install
```

## 启动项目

```bash
ng serve # 加上 --open 可以自动打开浏览器 简写 -o

# ng new 常用参数
# 简写 --si
--skip-install
# 这是加载路由
--routing
# 服务多开 例如 ng serve --port 4201
--port
```

## 创建组件

```bash
# 简写 ng g c <componentname>
ng generate component <componentname>
# 简写 ng g c --module app 指定主模块app
ng generate component <componentname> --module app

# 简写 ng g c --module app 指定主模块app
ng generate component <componentname> --module app

# 在 src/locale 目录下创建一个文件，可以指定输出路径（output path）：
--output-path src/locale
ng xi18n --output-path src/locale
```

### 组件错误

::: warning 错误
Error: More than one module matches. Use skip-import option to skip importing the component into the closest module. More than one module matches. Use skip-import option to skip importing the component into the closest module.
:::

### 解决方案

```bash
# 简写 ng g c --module app 指定主模块app
ng generate component <componentname> --module app
```

## 创建服务

```bash
 #  简写 ng g s
ng generate service  <componentname>
```

## 升级 angular-cli

```bash
npm install -g @angular/cli
npm install @angular/cli
ng update @angular/cli

ng update @angular/core

ng update @angular/material

ng update @angular/cli --migrate-only --from=1.7.4


npm install -g rxjs-tslint
rxjs-5-to-6-migrate -p src/tsconfig.app.json
```
