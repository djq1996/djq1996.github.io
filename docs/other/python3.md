---
sidebar: 'auto'
---

# Python3

## python

### Python 编码

运行 py 文件头部所需代码

```py
#!/usr/bin/python
#encoding:utf-8
```

查看 Python 位置

```bash
which python  # 也可以查看node...
```

### Python 数据类型

```python code
1. str
2. list
3. tuple
4. int
5. noneType
```

## Python 常用内置方法

### lambda 匿名函数

```python
MAXIMUM = lambda x,y :  (x > y) * x + (x < y) * y
MINIMUM = lambda x,y :  (x > y) * y + (x < y) * x

if __name__ == '__main__':
a = 10
b = 20
print 'The largar one is %d' % MAXIMUM(a,b)
print 'The lower one is %d' % MINIMUM(a,b)

# The largar one is 20
# The lower one is 10
```

### range(int[,int])

```python
for i in range(10):
    print(i)
```

### enmu 枚举

```python
from enum import Enum

Month = Enum('Month',('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))
for name,menber in Month.__members__.items():
    print(name,'=>',menber,':',menber.value)
```

### TCP Client 客户端服务

```python
# 导入服务库
import socket

# 建立服务
s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

# 建立连接

s.connect(('127.0.0.1',6666))


# 接收消息
print(s.recv(1024).decode('utf-8'))
for data in [b'couple',b'conection',b'moments']:
    # 发送数据
    s.send(data)
    print(s.recv(1024).decode('utf-8'))
s.send(b'exit')
s.close()
```

### TCP Server 服务器服务

```python
# 导入服务库
import socket
import threading
import time

# 建立服务
s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

# 监听端口
s.bind(('127.0.0.1',6666))

# 开启并且设定连接个数为五个

s.listen(2)

print('waiting for conection...')

def tcplink(sock,addr):
    print('accept new connection form %s:%s...' % addr)
    sock.send(b'welcome!')
    while True:
        data = sock.recv(1024)
        time.sleep(1)
        if not data or data.decode('utf-8') == 'exit':
            break
        sock.send(('Hello, %s!' % data.decode('utf-8')).encode('utf-8'))
    sock.close()
    print('Conection from %s:%s closed' % addr)


while True:
    # 接收连接
    sock,addr = s.accept()
    # print('sock => %s addr => %s' % (sock,addr))
    # 创建新线程来处理TCP连接；
    t = threading.Thread(target = tcplink,args = (sock,addr))
    t.start()
```

### 巴拉巴拉小魔仙

```python
str.capitalize() # 首字母大写

str.upper() # 转换大写

str.lower()  # 转换小写

math.sqrt(int) #  平方根

reduce(f,list) #  高阶函数 遍历

map(f,list) #  遍历操作

set() #  唯一值，去重

sorted() #  排序

sum(list 或者 tuple) #  相加

ord(str) #  返回元素的ASCII码
```

## python 字符串

### 多行字符串

```py
# 可以用'''...'''表示 || """..."""
str = ''' ...string '''
str = """ ...string """
```
