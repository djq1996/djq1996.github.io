---
sidebar: 'auto'
---

# Python3

运行 py 文件头部所需代码

```py
#!/usr/bin/python
#encoding:utf-8
```

Python

```python
   转换 list
   getlist('key')
   for item in obj.getlist('key'):
      print(item)

   flask
   拿到传送文件，表单
   request.files
      request.files['file'].filename
   request.form
      request.form['name']
   str def

   # 左右清除空格 参数可指定移除字符，默认为空格
   # 相当于 在字符串上执行 lstrip()和 rstrip()
   strip([chars])
   str = "123abcrunoob321"
   print (str.strip( '12' ))  # 字符序列为 12
   # 3abcrunoob3

   # upper and lower
   upper()
   lower()

   # time
   import time
   time.strftime('%Y-%m-%d %H:%M:%S:')
   time.strftime('%Y-%m-%d %H:%M:%S:',time.localtime())
   # datetime
   from datetime import datetime
   datetime.now()
   datetime(2018,1,1,12,1)
```
