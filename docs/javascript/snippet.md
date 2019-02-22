# Function

## 获取当前日期 （yyyy-MM-dd HH:MM:SS）

```bash
const getNowFormatDate = () => {
  const date = new Date();
  const seperator1 = '-';
  const seperator2 = ':';
  const month = date.getMonth() + 1;
  const strDate = date.getDate();
  const fill = num => {
    return num >= 10 ? num : '0' + num;
  };
  const currentdate = date.getFullYear() + seperator1 + fill(month) + seperator1 + fill(strDate)
          + ' ' + fill(date.getHours()) + seperator2 + fill(date.getMinutes())
          + seperator2 + fill(date.getSeconds());
  return currentdate;
};
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
// 补零
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


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

## 检测是否微信浏览器

```js
var wx = (function() {
  return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
})();
if (wx) {
  alert('是微信');
} else {
  alert('不是微信');
}
```

## Json 根据 key 值 排序

```javascript
var people = [
  {
    name: 'a75',
    item1: false,
    item2: false
  },
  {
    name: 'z32',
    item1: true,
    item2: false
  },
  {
    name: 'e77',
    item1: false,
    item2: false
  }
];
function sortByKey(array, key) {
  return array.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}
people = sortByKey(people, 'name');
```

## 收藏 48 个 JavaScript！

[实用代码 ==>飞机票](http://codebay.cn/post/7452.html)

## 导出 Excel 表格

```javascript
  // wopts: XLSX.WritingOptions = { bookType: 'xlsx',
  //   bookSST: false,
  //   type: 'binary'
  // };

exportXlsx(): void {
    this.campaignsFilter(this.filterSelect, 0).then((campaignData: any) => {
      console.log(campaignData);
      /* generate worksheet */
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(campaignData);
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      /* save to file */
      // XLSX.writeFile(wb, `数据表.xlsx`);
      XLSX.writeFile(wb, `campaigns ${this.httpbody.dataBody.startTime} - ${this.httpbody.dataBody.endTime} 数据表.xlsx`);
    });
  }
```
