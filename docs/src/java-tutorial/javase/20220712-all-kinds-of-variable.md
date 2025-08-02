---
isOriginal: true
order: 1
category:
  - Java 基础
tag:
    - Java
---
# 成员变量、实例变量、静态变量、局部变量

:::info 共勉
不要哀求，学会争取。若是如此，终有所获。
:::



## 前言

学习 Java 的过程中，一开始很容易被这些各种变量绕晕，这篇博客主要介绍了这几种变量之间的关系和区别。

## 实例

```java
package com.cunyu.demo

public class Demo {

    private String name;  //成员变量、实例变量
    private int age;  //成员变量、实例变量
    private int ID;  //成员变量、实例变量

    public static final String school = "卡塞尔学院";  //成员变量、静态变量(类变量)
    public static String level = "SSS";    //成员变量、静态变量(类变量)

    public int getAge() {
        return age;
    }

    public int getId() {
        return ID;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setId(int ID) {
        this.ID = ID;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void study(){
            String subject1 = "屠龙";  //局部变量
            String subject2 = "炼金术"; //局部变量
            System.out.println("学习科目： " + subject1 + "、" + subject2);
        }

    public static void main(String[] args) {
        Demo demo = new Demo();
        demo.setAge(23);
        demo.setId(14000001);
        demo.setName("楚子航");
        System.out.println("ID: " + demo.getId() + "Age: " + demo.getAge() + "Name: " + demo.getName());
        System.out.print("主修科目： ");
        demo.study();
        System.out.println("学院：" + Demo.school);
        System.out.println("等级：" + Demo.level);
    }
}
```

## 各变量联系与区别

### 成员变量

作用范围是整个类，相当于 C 语言中的全局变量，定义在方法体和语句块之外，一般定义在类的声明之下；成员变量包括实例变量和静态变量(类变量)。

### 实例变量

独立于与方法之外的变量，无 `static` 修饰，声明在一个类中，但在方法、构造方法和语句块之外，数值型变量默认值为 0，布尔型默认值为 `false`，引用类型默认值为 `null`。

### 静态变量(类变量)

独立于方法之外的变量，用 `static` 修饰，默认值与实例变量相似，一个类中只有一份，属于对象共有，存储在静态存储区，经常被声明为常量，调用一般是类名.静态变量名，也可以用对象名.静态变量名调用。

### 局部变量

类的方法中的变量，访问修饰符不能用于局部变量，声明在方法、构造方法或语句块中，在栈上分配，无默认值，必须经初始化。

### 成员变量 VS 局部变量

| 区别         | 成员变量                             | 局部变量                                   |
| ------------ | ------------------------------------ | ------------------------------------------ |
| 类中位置不同 | 类中、方法外                         | 方法中                                     |
| 初始化值不同 | 有初始值，无需初始化                 | 无默认值，使用前需完成赋值                 |
| 内存位置不同 | 堆内存                               | 栈内存                                     |
| 生命周期不同 | 随对象创建而存在，随对象的消失而消失 | 随方法的调用而存在，随方法的运行结束而消失 |
| 作用域       |                                      | 所属大括号                                 |

## 总结

以上就是关于 Java 编程中，静态变量、类变量、实例变量、局部变量以及成员变量之间的相关区别了。读完本文，你是否对这几个变量之间能进行一定程度上的区分了呢？

**关注公众号，获取最新文章更新**

::: center
![](https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif =200x)
:::

## ⏳ 联系

想解锁更多知识？不妨关注我的微信公众号：**村雨遥（id：JavaPark）**。

扫一扫，探索另一个全新的世界。

![](/contact/wechatpublic.svg =150x)

<Share colorful />