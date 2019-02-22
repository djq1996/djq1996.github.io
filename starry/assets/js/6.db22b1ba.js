(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{180:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"angular-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#angular-cli","aria-hidden":"true"}},[a._v("#")]),a._v(" angular cli")]),a._v(" "),s("h2",{attrs:{id:"安装脚手架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装脚手架","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装脚手架")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("因为国内网络限制")]),a._v(" "),s("p",[a._v("为了加快安装速度，两种解决方案。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("# 我们把node 的npm安装包换成淘宝镜像的cnpm配置")]),a._v("\n1. cnpm instll -g @angular/cli\n"),s("span",{attrs:{class:"token comment"}},[a._v("# 修改npm配置")]),a._v("\n2. "),s("span",{attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v("  -g @angular/cli  --registry"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v("https://registry.npm.taobao.org\n")])])]),s("h2",{attrs:{id:"创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建项目")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("# my-app为我们自己的项目名称，后边配置是禁止自己下载node依赖包")]),a._v("\nng new my-app --skip-install\n"),s("span",{attrs:{class:"token function"}},[a._v("cd")]),a._v(" my-app\n"),s("span",{attrs:{class:"token comment"}},[a._v("# 我们用淘宝镜像 ,下载会很快,节省时间")]),a._v("\ncnpm "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("h2",{attrs:{id:"启动项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动项目")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ng serve "),s("span",{attrs:{class:"token comment"}},[a._v("# 加上 --open 可以自动打开浏览器 简写 -o")]),a._v("\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("# ng new 常用参数")]),a._v("\n"),s("span",{attrs:{class:"token comment"}},[a._v("# 简写 --si")]),a._v("\n--skip-install\n"),s("span",{attrs:{class:"token comment"}},[a._v("# 这是加载路由")]),a._v("\n--routing\n"),s("span",{attrs:{class:"token comment"}},[a._v("# 服务多开 例如 ng serve --port 4201")]),a._v("\n--port\n")])])]),s("h2",{attrs:{id:"创建组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建组件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("# 简写 ng g c <componentname>")]),a._v("\nng generate component "),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("componentname"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{attrs:{class:"token comment"}},[a._v("# 简写 ng g c --module app 指定主模块app")]),a._v("\nng generate component "),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("componentname"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" --module app\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("# 简写 ng g c --module app 指定主模块app")]),a._v("\nng generate component "),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("componentname"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" --module app\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("# 在 src/locale 目录下创建一个文件，可以指定输出路径（output path）：")]),a._v("\n--output-path src/locale\nng xi18n --output-path src/locale\n")])])]),s("h3",{attrs:{id:"组件错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件错误","aria-hidden":"true"}},[a._v("#")]),a._v(" 组件错误")]),a._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("错误")]),a._v(" "),s("p",[a._v("Error: More than one module matches. Use skip-import option to skip importing the component into the closest module. More than one module matches. Use skip-import option to skip importing the component into the closest module.")])]),a._v(" "),s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("# 简写 ng g c --module app 指定主模块app")]),a._v("\nng generate component "),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("componentname"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" --module app\n")])])]),s("h2",{attrs:{id:"创建服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建服务")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v("#  简写 ng g s")]),a._v("\nng generate "),s("span",{attrs:{class:"token function"}},[a._v("service")]),a._v("  "),s("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("componentname"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"升级-angular-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级-angular-cli","aria-hidden":"true"}},[a._v("#")]),a._v(" 升级 angular-cli")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" -g @angular/cli\n"),s("span",{attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" @angular/cli\nng update @angular/cli\n\nng update @angular/core\n\nng update @angular/material\n\nng update @angular/cli --migrate-only --from"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v("1.7.4\n\n\n"),s("span",{attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" -g rxjs-tslint\nrxjs-5-to-6-migrate -p src/tsconfig.app.json\n")])])])])}],!1,null,null,null);t.default=e.exports}}]);