---
isOriginal: true
order: 1
category:
  - Java 基础
tag:
    - Java
    - 集合
---
# ArrayList 详解

:::info 共勉
不要哀求，学会争取。若是如此，终有所获。
:::

## 概述

`ArrayList` 代表的是集合类，集合是一种容器，类似于数组。不同的是数组一旦定义后，其类型和长度就固定了，但集合的大小却是动态变化的，而且其中的元素类型也是动态的。

因此，数组更适合数据个数和类型确定的场景，而集合则更适合数据个数不确定，且需要做增删元素的场景。

## 泛型支持

`ArrayList<E>` 实际上就是一个泛型类，能够在编译阶段约束集合对象只能操作某种数据类型。而且这里的数据类型只能是引用类型，而不能是基本数据类型。

| 正确                                         | 错误                                     |
| -------------------------------------------- | ---------------------------------------- |
| `ArrayList<Integer> list = new ArrayList<>;` | `ArrayList<int> list = new ArrayList<>;` |

## 构造方法

| 方法                                          | 说明                             |
| --------------------------------------------- | -------------------------------- |
| `public ArrayList()`                          | 创建一个初始容量为 10 的空列表   |
| `public ArrayList(int initialCapacity)`       | 创建一个指定容量的空列表         |
| `public ArrayList(Collection<? extends E> c)` | 创建一个包含指定集合中元素的列表 |

## 常用方法

### 元素个数

| 方法                | 说明                 |
| ------------------- | -------------------- |
| `public int size()` | 返回集合中的元素个数 |

### 元素获取

| 方法                      | 说明                          |
| ------------------------- | ----------------------------- |
| `public E get(int index)` | 获取索引位置为 `index` 的元素 |

### 元素新增

| 方法                             | 说明                                      |
| -------------------------------- | ----------------------------------------- |
| `void add(int index, E element)` | 在指定索引位置 `index` 新增元素 `element` |
| `boolean add(E element)`         | 在列表末尾新增一个元素 `element`          |

### 元素删除

| 方法                                | 说明                                   |
| ----------------------------------- | -------------------------------------- |
| `public E remove(int index)`        | 删除指定索引处的元素并返回被删除的元素 |
| `public boolean remove(Object obj)` | 删除指定元素并返回是否删除成功         |

### 元素修改

| 方法                                 | 说明                                   |
| ------------------------------------ | -------------------------------------- |
| `public E set(int index, E element)` | 修改指定索引处的元素，返回被修改的元素 |

### 元素遍历

1.  **for 循环**

```java
import java.util.ArrayList;

public class ForTest {
    public static void main(String[] args) {

        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
    }
}
```

2.  **增强 for 循环**

```java
import java.util.ArrayList;

public class EnhanceForTest {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        for (Integer element : list) {
            System.out.println(element);
        }
    }
}
```

3.  **迭代器**

```java
import java.util.ArrayList;
import java.util.Iterator;

public class IterTest {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        Iterator<Integer> iter = list.iterator();
        while (iter.hasNext()) {
            System.out.println(iter.next());
        }
    }
}
```

## 总结

本文主要讲解了 `ArrayList` 的定义、泛型支持、构造方法以及常用方法等。主要针对的是日常中的使用，更多关于 `ArrayList`  底层原理的一些知识，抽个时间再聊吧！


## ⏳ 联系

想解锁更多知识？不妨关注我的微信公众号：**村雨遥（id：JavaPark）**。

扫一扫，探索另一个全新的世界。

![](/contact/wechatpublic.svg =150x)

<Share colorful />