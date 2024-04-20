---
isOriginal: true
category: Python 教程
tag:
    - Python
date: 2021-04-03
---
# 条件判断、循环以及循环的终止

::: info 共勉
不要哀求，学会争取。若是如此，终有所获。
:::

## 条件判断

条件语句是用来判断给定条件是否满足，并根据判断所得结果从而决定所要执行的操作，通常的逻辑思路如下图；

![](assets/70-20230927211958111-5820798.webp)

### 单次判断
- 形式

```python
if <判断条件>：
	<执行>
else：
	<执行>
```

- 例子

```python
age = int(input("输入你的年龄："))
if age < 18:
	print("未成年")
else:
	print("已成年")
```
![](assets/70.webp)
### 多次判断

- 形式

```python
if <判断条件1>:
    <执行1>
elif <判断条件2>:
    <执行2>
elif <判断条件3>:
    <执行3>
else:
    <执行4>
...
```

- 例子

```python
age = int(input("输入你的年龄："))
if age >= 18:
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('kid')
```
![](assets/70-20230927211958121.webp)

注意，`if` 语句是从上往下判断的；

## 循环
## while循环
当条件满足时，就不断循环，直到条件不再满足时即退出循环；

- 例子

```python
count = 50
while count > 0:
	print(str(count))
	count -= 2
print("循环结束")
```
![](assets/70-20230927211958117.webp)
### for...in 循环
- 例子

```python
sum = 0
for num in range(1, 10):
	sum += num
print(str(sum))
```
其中```range()```函数用于生成一个整数序列；

### 终止循环

- break
用于提前终止循环；

```python
num = 1
while num <= 100:
	if num >= 10:
		break
	print(num)
	num += 2
print("结束")
```
![](assets/70-20230927211958111.webp)

- continue

用于跳出当前循环，进入下一次循环；

```python
num = 0
while num < 20:
    num += 1
    if num % 2 == 0: 
        continue 
    print(num)
```
![](assets/70-20230927211958101.webp)

## 总结

本次相关 Python 中的 if 条件判断、for 循环、while 循环以及如何终止 for 或者 while 循环的介绍就到这里，如果你有更好的想法，欢迎评论共同交流！

## ⏳ 联系

想解锁更多知识？不妨关注我的微信公众号：**村雨遥（id：JavaPark）**。

扫一扫，探索另一个全新的世界。

![](/contact/wechatpublic.svg =150x)

<Share colorful />