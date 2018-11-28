---
sidebar: 'auto'
---

# Css
## 技巧

### 元素单词首字母大写
```css
p {text-transform:capitalize;} 
```
### 字体锐化
```css
-webkit-font-smoothing: antialiased;
```
### 文字超出隐藏
```css
overflow: hidden;
text-overflow: ellipsis;
white-space: normal;
```
### 禁止选中文字
```css
moz-user-select: -moz-none; 
-moz-user-select: none; 
-o-user-select:none; 
-khtml-user-select:none; 
-webkit-user-select:none; 
-ms-user-select:none; 
user-select:none;
```
### 清除浮动
```css
.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.clearfix { display: inline-table; }
* html .clearfix { height: 1%; }//Hides from IE-mac
.clearfix { display: block; }//End hide from IE-mac
```

## 坑

### css旋转元素无效
``` css
首先，图标的实现是:before伪元素控制的

:before伪元素默认是行内元素（即display: inline）

行内元素旋转无效，所以需要给.rotate:before伪元素加上display: inline-block，使其变为行内块元素。
```
