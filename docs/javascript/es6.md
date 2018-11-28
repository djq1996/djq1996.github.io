
# Es6
<!-- ![小花花送给你](../.vuepress/public/imgs/logo.png) -->
## Es6 大纲

### 变量 let const

```javascript
var 重复声明，函数级别作用域

let 不能重复申明  块级作用域 变量

const 不能重复什么 块级作用域  常量
```

###  箭头函数

    方便

    如果有一个参数，（）可以省略

    如果只有一个 return {} 也可以省略

    修正 this

    this 相对正常

### 参数扩展

    ... 收集 扩展
    let a= [1，2，3]；...a =>[1，2，3]
    默认参数

###  数组方法

    map 映射
    retuce 汇总
    filter 过滤
    forEach 循环

###  字符串

    startsWith/endsWith
    字符串模版
    `<div>${str}</div>`

###  Promise

    封装异步操作
    Promise.all([])

### generator

   可以停止的函数，可以多个返回值

### 面向对象

```javascript
class Text(){

	costructor {
		this.xxx=
	}

	fn1(){

	}

	fn2(){

	}
}
```

9. 解构赋值
   var [a,b,c] = [1,2,3]; 左右结构一样

## ES6 - new Set()

### Set 的实例方法

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

```javascript
- add(value)：添加某个值，返回 Set 结构本身。
- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
- has(value)：返回一个布尔值，表示该值是否为Set的成员。
- clear()：清除所有成员，没有返回值。
```

### Set 技巧

:: Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。

```javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

## ES6 - new Map()

### Map Set 的实例方法

Map 结构的实例有以下属性和操作方法。

```javascript
- size： 属性返回 Map 结构的成员总数。
- set(key, value)： set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。set方法返回的是当前的Map对象，因此可以采用链式写法。

let map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

- get(key)：get方法读取key对应的键值，如果找不到key，返回undefined。
- has(key)：得到某个值，返回 Set 结构本身。
- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
- has(value)：返回一个布尔值，表示该值是否为Set的成员。
- clear()：清除所有成员，没有返回值。
```

### Map 遍历方法

Map 结构原生提供三个遍历器生成函数和一个遍历方法。

```javascript
keys()：返回键名的遍历器。
values()：返回键值的遍历器。
entries()：返回所有成员的遍历器。
forEach()：遍历 Map 的所有成员。
```

## ES6 - new Promise()

```javascript
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });
}

timeout(100).then(value => {
  console.log(value);
});
```

## ES6 - 扩展运算符 ( ... )

**扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。**

1. 复制数组
2. 合并数组
3. 与解构赋值结合
4. 字符串
5. 实现了 Iterator 接口
6. Map 和 Set 结构

## ES6 - map,reduce 妙用

```javascript
let objArray = [{ foo: 1, bar: 2 }, { foo: 3, bar: 4 }, { foo: 5, bar: 6 }];
//我想提取一个包含键值的数组，其中。foo的值[ 1, 3, 5 ]...

//我用下面的方法来完成：
var result = objArray.map(a => a.foo);

//求数组平均数

const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;

// average([1,2,3]) -> 2
```

## ES6 大纲

[ES6 - 会这些就够了](https://juejin.im/post/5abf531d6fb9a028dc412419)

## ES6 入门手册

[ECMAScript 6 入门手册](http://es6.ruanyifeng.com/#README)
