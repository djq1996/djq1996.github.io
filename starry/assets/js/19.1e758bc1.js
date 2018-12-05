(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{181:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"bash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bash","aria-hidden":"true"}},[a._v("#")]),a._v(" Bash")]),a._v(" "),s("h2",{attrs:{id:"skill-note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skill-note","aria-hidden":"true"}},[a._v("#")]),a._v(" skill note")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[a._v("command")]),a._v(" + "),s("span",{attrs:{class:"token function"}},[a._v("shift")]),a._v(" + "),s("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v("#显示隐藏文件")]),a._v("\n\n\na.py "),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" a.json "),s("span",{attrs:{class:"token comment"}},[a._v("# 文件执行结果导入文件")]),a._v("\na.js "),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" a.txt "),s("span",{attrs:{class:"token comment"}},[a._v("# 同理")]),a._v("\n\n"),s("span",{attrs:{class:"token function"}},[a._v("cat")]),a._v(" *.js "),s("span",{attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("|")]),a._v(" http "),s("span",{attrs:{class:"token comment"}},[a._v("# 查看所有js文件，过滤 文件中 http")]),a._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v("'# hello world '")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" READme.md "),s("span",{attrs:{class:"token comment"}},[a._v("# 建立readme.md 文件 并且写入 hello world")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"向服务器-cp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向服务器-cp","aria-hidden":"true"}},[a._v("#")]),a._v(" 向服务器 cp")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[a._v("scp")]),a._v(" -r "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("本地地址"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("username"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ip"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v(":"),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("地址"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"vim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim","aria-hidden":"true"}},[a._v("#")]),a._v(" vim")]),a._v(" "),s("h3",{attrs:{id:"让所有用户显示行号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#让所有用户显示行号","aria-hidden":"true"}},[a._v("#")]),a._v(" 让所有用户显示行号")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vim /etc/vimrc\n"),s("span",{attrs:{class:"token keyword"}},[a._v("set")]),a._v(" nu "),s("span",{attrs:{class:"token comment"}},[a._v("# 在vimrc文件的最后添加：")]),a._v("\n：wq\n"),s("span",{attrs:{class:"token function"}},[a._v("source")]),a._v(" /etc/bashrc "),s("span",{attrs:{class:"token comment"}},[a._v("#手动加载配置：")]),a._v("\n")])])]),s("h2",{attrs:{id:"创建，移动，拷贝文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建，移动，拷贝文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建，移动，拷贝文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{attrs:{class:"token comment"}},[a._v("# copy file")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("option"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("cpname-url"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("purpose-name-url"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("cp")]),a._v(" -r\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("# moved file")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("cpname-url"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("purpose-name-url"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("# remove file")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("option"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" -r "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("file-name"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("# remove dir")]),a._v("\n\n"),s("span",{attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("option"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" -rf "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("folder"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("# 创建文件夹")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("mkdir")]),a._v("\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("# 删除文件夹 （只能删除空文件夹）")]),a._v("\nundir\n")])])]),s("h2",{attrs:{id:"bash-简写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bash-简写","aria-hidden":"true"}},[a._v("#")]),a._v(" bash 简写")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("例如： 命令常用的 "),s("span",{attrs:{class:"token function"}},[a._v("ls")]),a._v(" 命令 只能看见显式的文件，隐藏文件需要加 "),s("span",{attrs:{class:"token function"}},[a._v("ls")]),a._v(" -a ,ls -l 等等操作来显示更详细的信息，但是这些命令我门可以简写\n\nll "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l\n")])])]),s("h3",{attrs:{id:"设置步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置步骤","aria-hidden":"true"}},[a._v("#")]),a._v(" 设置步骤")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("# 编辑 ~/.bashrc 文件")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("sudo")]),a._v(" vim ~/.bashrc "),s("span",{attrs:{class:"token comment"}},[a._v("#sudo 是为了避免没权限操作，进入了vim 编辑器")]),a._v("\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("#加入简写命令")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("alias")]),a._v(" ll "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v("'ls -l'")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v("#退出vim编辑器  先按esc , 在输入 :wq 保存并退出")]),a._v("\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("#生效")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("source")]),a._v(" ~/.bashrc 或者  "),s("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v(" ~/.bashrc\n")])])]),s("h3",{attrs:{id:"查看清晰文件结构，大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看清晰文件结构，大小","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看清晰文件结构，大小")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("# -h 是文件大小显示单位M ,KB")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("ls")]),a._v(" -ahl\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("# 查看内部文件信息")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("ls")]),a._v(" -ahl /dist\n")])])]),s("h4",{attrs:{id:"编辑-hosts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑-hosts","aria-hidden":"true"}},[a._v("#")]),a._v(" 编辑 hosts")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("# 进入编辑hosts")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/hosts\n")])])]),s("h2",{attrs:{id:"tar-压缩-解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tar-压缩-解压","aria-hidden":"true"}},[a._v("#")]),a._v(" tar 压缩 解压")]),a._v(" "),s("h3",{attrs:{id:"压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩","aria-hidden":"true"}},[a._v("#")]),a._v(" 压缩")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cvf examples.tar files"),s("span",{attrs:{class:"token operator"}},[a._v("|")]),s("span",{attrs:{class:"token function"}},[a._v("dir")]),a._v("\n"),s("span",{attrs:{class:"token comment"}},[a._v("#说明：")]),a._v("\n-c, --create  create a new archive 创建一个归档文件\n-v, --verbose verbosely list files processed 显示创建归档文件的进程\n-f, --file"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v("ARCHIVE use archive "),s("span",{attrs:{class:"token function"}},[a._v("file")]),a._v(" or device ARCHIVE  后面要立刻接被处理的档案名,比如--file"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v("examples.tar\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("#举例：")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cvf file.tar file1       "),s("span",{attrs:{class:"token comment"}},[a._v("#file1文件")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cvf file.tar file1 file2 "),s("span",{attrs:{class:"token comment"}},[a._v("#file1，file2文件")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cvf file.tar "),s("span",{attrs:{class:"token function"}},[a._v("dir")]),a._v("         "),s("span",{attrs:{class:"token comment"}},[a._v("#dir目录")]),a._v("\n\n")])])]),s("h3",{attrs:{id:"解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压","aria-hidden":"true"}},[a._v("#")]),a._v(" 解压")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf examples.tar （解压至当前目录下）\n"),s("span",{attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf examples.tar  -C /path "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("/path 解压至其它路径"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("#说明：")]),a._v("\n-x, --extract, extract files from an archive 从一个归档文件中提取文件\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("#举例：")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf file.tar\n"),s("span",{attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf file.tar -C /temp  "),s("span",{attrs:{class:"token comment"}},[a._v("#解压到temp目录下")]),a._v("\n\n")])])])])}],!1,null,null,null);t.default=e.exports}}]);