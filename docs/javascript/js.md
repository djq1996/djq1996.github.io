# Js

## for 循环

### for in

所以 for in 更适合遍历对象，不要使用 for in 遍历数组。

### for of

for of 遍历的只是数组内的元素，而不包括数组的原型属性 method 和索引 name

### for of vs for in

::: tip 注意
for in 是遍历索引（键名），而 for of 是遍历键值。
:::

## Array

### splice

1. splice 三个参数 会改变原数组 万能方法

### slice

2. slice 切割数组，不会改变原数组

### split

3. split 将字符串切割成数组，可以自定义分隔符号 不会改变原数组

::: tip 注意  
如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。
String.split() 执行的操作与 Array.join 执行的操作是相反的。
:::

## regular expression

### 量词匹配

- 匹配量的：\* + ? {n} {n,} {n,m} .

1.  **“\*”** 没有或者多个
2.  **“+”** 一个或者多个
3.  **“?”** 没有或者一个

### 匹配位置条件

- 匹配位置的：^ $
- 匹配并且需要支持分组的时候需要括号来包裹：(匹配的模式)
- 匹配条件的：|
- 匹配集合的：[]
- 匹配非集合的：[^]
- 惰性模式 例如\*？匹配 0 次或者多次 会尽量少的匹配 同理 个数后面+？即为惰性模式
- () 集合模式

### 正则 api

1. 我想得到匹配后的数组
   exec
   match 匹配符合的内容

2. 我想得到是否匹配
   test
3. 我想按照匹配拆分字符串
   split
4. 我只想得到第一次匹配的位置
   search 匹配符合的位置
5. 我想按照匹配覆盖字符串
   replace

6. .(点) 代表任意字符
7. \d,\w,\s 分别代表数字，英文+下划线+数字，
8. \D,\W,\S 上面三种转义对立事件

### 替换换行符，回车符 为空格

str.replace(/[\r\n]/g, ' ') // \r 回车，\n 换行
str.replace(/\s+/, ',') // \s 匹配回车，换行，制表符等 除了空格
str.split(' , ') 分割成为数据

## 事件委托

### PC 端事件委托

```javascript
$(document).on('click', function(e) {
  var e = e || window.event; //浏览器兼容性
  var elem = e.target || e.srcElement;
  if (elem.className.indexOf('think') > 0) {
    return;
  }
  while (elem) {
    //循环判断至跟节点，防止点击的是div子元素
    if (elem.className && elem.className.indexOf('message') > 0) {
      return;
    }
    elem = elem.parentNode;
  }
  $('.message').css('display', 'none'); //点击的不是div或其子元素
});
```

### 移动端事件委托

```javascript
var _this = this;
var ulBox = document.querySelector("#commodity");
var dli = ulBox.querySelectorAll("li")[0],
    pageXend, pageXStart;
ulBox.addEventListener('touchstart', function (ev) {
    console.log('手指落下')
    var ev = ev || event;
    var target = ev.target;
    var disX = ev.touches[0].pageX - dli.offsetLeft;
    var disY = ev.touches[0].pageY - dli.offsetTop;
    pageXStart = ev.touches[0].pageX;
    while (target) { //循环判断至跟节点，防止点击的是div子元素

        if (target.className && target.className == 'firstOne') {


            target.addEventListener("touchmove", function (ev) {
                console.log('手指移动')
                var ev = ev || event;
                pageXend = ev.touches[0].pageX;
                target.style.left = ev.touches[0].pageX - disX + 'px';
                target.style.top = ev.touches[0].pageY - disY + 'px';
            }, false);

            return
        }
        target = target.parentNode;
    }


}, false)
ulBox.addEventListener('touchend', function () {
    console.log('手指抬起');
    var ev = ev || event;
    var target = ev.target;

    while (target) { //循环判断至跟节点，防止点击的是div子元素

        if (target.className && target.className == 'firstOne') {


            if (pageXend - pageXStart < 100) {
                console.log('<100');
                target.style.cssText = `
                                        "transition-duration": "0.5s",
                                        "transform": "translate3d(0px,0px,0px)"`
            }
            if (pageXend - pageXStart > 100) {
                console.log('右滑')
                window.location.href = _this.images[0].promotionUrl;
                target.style.cssText = `
                                        "transition-duration": "0.5s",
                                        "transform": "translate3d(0px,0px,0px)"`
            }
            if (pageXend - pageXStart < -100) {
                _this.shiftGoods();
                console.log('左滑')
                target.style.cssText = `
                                        "transition-duration": "0.5s",
                                        "transform": "translate3d(0px,0px,0px)"`
            }

            return
        }
        target = target.parentNode;
    }

})

}
```

## 闭包

[闭包，你是真的美](https://mp.weixin.qq.com/s/w6vtbt8D3dQza3KVwmjm-A)

## funtion

<!-- ![小花花送给你](../.vuepress/public/imgs/logo.png) -->

typeof 运算符用于一个函数的时候将会返回字符串“function”,但是函数确实是 JavaScript 对象的一种特殊类型。既然函数也是对象，它们就应该可以具有属性。

### 属性 length

函数对象的 length 属性是形式参数的个数；
arguments 伪变量的 length 属性是某次调用的实际参数的个数。

我们已经知道，在函数主体中，arguments 数组的 length 属性指定了传递给该函数的实参数目。但是函数自身的 length 属性的含义却并非如此，它是只读特性，返回的是函数需要的实参的数目，也就是在函数的形参列表中声明的形参的数目。调用函数时可以传递给它任意数目的实参，函数能够从 arguments 数组中得到这些参数，而无需考虑它所声明的形参的数目。Function 对象的 length 属性确切说明了一个函数声明的形参的个数。注意和 arguments.length 不同，这个 length 属性在函数体的内部和外部都有效。

下面的代码定义了一个名为 check( )函数，它通过比较 arguments.length 和 arguments.callee.length 来判断传递给该函数的参数个数是否符合要求。函数 check( )后是一个检测函数 f( )。代码如下：

```HTML
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <script>
            function check(args){
                var actual=args.length;
                var expected=args.callee.length;
                if(actual!=expected){
                alert("wrong number of arguments !");
                }
            }

            function f(x,y,z){
                check(arguments);
                return (x+y+z);
            }
        </script>
    </head>
    <body>

        <a href="javascript:f(1,2);void 0;">参数个数不正确时的函数调用</a><br>
        <a href="javascript:f(1,2,3);">参数个数正确时的函数调用</a>
    </body>
</html>
```

## 获取 URL 参数信息

```js
function getUrlParam(name) {
  //构造一个含有目标参数的正则表达式对象
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  //匹配目标参数
  var r = window.location.search.substr(1).match(reg);
  //返回参数值
  if (r != null) {
    return decodeURI(r[2]); //decodeURL编码一致
  }
  return null;
}
```
