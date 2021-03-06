---
title: Java 菜鸟入门：面向对象（上）
icon: java
tag:
  - Java
category:
  - Java 菜鸟入门
date: 2022-01-15 11:31:47
isOriginal: true
---

## 前言

前面已经讲了 Java 的一些环境搭建、IDE 使用、变量及数据类型、操作符、控制流程以及数组操作，今天就来看看 Java 里边的一个核心思想 - **面向对象编程**。内容预告如下：

-   **面向对象简介**
-   **面向对象实例**

## 面向对象

### 什么是面向对象？

所谓面向对象，是一种通过对象的方式，将现实中的事物映射到计算机模型的一种编程方法；

对象的含义指的是具体的某一个事物，即我们在现实生活中能够看得见摸得着的。在面向对象程序设计中，对象指的是计算机系统中的某一个成分，主要有两层含义。一个是指 **数据**，另一个则是 **动作**。即对象是两者的结合体，通过对象不仅能够进行操作，还能对操作的结果进行记录。

在这之前，另一种编程方式是 **面向过程**，用一个具体的例子来讲，可以描述成下面这样：

>   将如有一天你很想吃酸菜鱼，那么你该怎么办呢？下面就以面向对象和面向过程给你两个选择，让你决定来选哪一个！
>
>   1.  **面向对象**：打开手机，打开外卖软件，搜索酸菜鱼，然后下单，等着外卖送到家就行！
>   2.  **面向过程**：先去买菜，鱼、酸菜、调料……，然后回家杀鱼、切酸菜、切调料……，再接着开始炒，最后做好盛到盘子里！

对比可以发现两者的优缺点：

-   **面向过程**
    -   **优点**：性能好；以例子来说自己做比起点外卖，经济又实惠，还吃得放心；
    -   **缺点**：不易维护、不易复用、不易扩展；以例子来讲，要是我们自己做，临时又想吃其他的菜，又得跑去买材料啥的，麻烦！但外卖就不一样了，直接打开手机再点就是！
-   **面向对象**
    -   **优点**：易维护、易复用、易扩展，也就是面向过程的缺点；
    -   **缺点**：性能较差；比起自己做，点外卖成本啥的可能就比较高了；

### 面向对象的 3 大特性

1.  **封装**

隐藏对象的属性和实现细节，对外只提供访问的接口，提高复用性和安全性；

2.  **继承**

定义父类之后，子类可以从基础类进行继承，提高了代码的复用率，重要的一点：**类只能单继承**；

3.  **多态**

父类或者接口定义的引用变量可以指向子类或具体实现类的实例对象，提高了程序的扩展性；

### 面向对象的 5 大原则

1.  **单一职责原则 SRP**

类的功能要单一，不能太复杂；

2.  **开放封闭原则 OCP**

一个模块对于扩展是开放的，对于修改则是封闭的，可以增加功能，但是修改功能却不行；

3.  **里氏替换原则 LSP**

子类能够替换父类出现在父类能够出现的任何地方；

4.  **依赖倒置原则 DIP**

高层次的模块不应该依赖于低层次的模块，而应该都依赖于抽象。抽象不应该依赖于具体实现，但具体实现应该依赖于抽象；

5.  **接口分离原则 ISP**

设计时采用多个与特定客户类相关的接口比采用一个通用接口要好；

## 面向对象的具体实例

### 类与对象

以我们日常生活为例，我们现在很多人都养宠物，而宠物 **都有一些共同状态**，比如名字、毛色、年龄…… 这样一来我们就可以设计一个叫做 **类** 的东西，用来 **代表宠物** 这一类事物；

```java
public class Pet{
    // 名字
    public String name;
    
    // 毛色
    public String furColor;
    
    // 年龄
    public int age;
}
```

有了这个类之后，它就相当于我们的一个模板，根据这个模板我们就能够创建一个个具体的宠物，而这些宠物，就叫做 **对象**；

```java
public class Pet{
    // 名字
    public String name;
    
    // 毛色
    public String furColor;
    
    // 年龄
    public int age;
    
    public static void main(String[] args){
        // 创建一个对象
        Pet dog = new Pet();
        dog.name = "博美";
        dog.furColor = "white";
        dog.age = 1;
        
        Pet cat = new Pet();
        cat.name = "英短";
        cat.furColor = "orange";
        cat.age = 2;
        
    }
}
```

### 属性

每个宠物都有自己的名字、毛色和年龄等一系列状态，而这些状态就叫做一个类的 **属性**。而属性的类型既可以是基本类型（比如上述例子中的 `int`），也可以是引用类型（上述例子中的 `String`）。而在 Java 语言中，属性的命名虽然没有强制规定，但是一般都是有一套大家通用的命名方法，即：

>   若属性是一个单词组成，那么一般都是小写；
>
>   若属性是多个单词组成，那么则采用驼峰法；
>
>   关于更多的命名规定，推荐参考阿里巴巴出品的 《Java 开发手册》，下载地址：https://github.com/cunyu1943/amazing-books

### 方法

而除开属性之后，每个对象还能够有许多其他的功能，就像宠物都能吃东西、会叫……，那么这些他们能够做的事情，在类里边就可以用 **方法** 来进行表示；

```java
public class Pet{
    // 名字
    public String name;
    
    // 毛色
    public String furColor;
    
    // 年龄
    public int age;
    
    // 吃东西对应的方法
    public void eat(){
        System.out.println("吃东西！");
    }
    
    // 叫唤对应的方法
    public void bark(){
        System.out.println("叫唤！");
    }
}
```

而对于方法，也有需要注意的几点：

1.  方法是可以有返回值的，如果要返回对应值，则其返回值的类型要与返回值相对于，对于不需要返回值的方法，则将其返回类型设置为 `void`；
2.  方法是可以有参数的，我们上述例子的方法中都是不带参数的，但如果我们有需要，就可以加上自己需要的参数，但此时注意要带上参数的类型；

总结起来，可以分为如下四种方法：

1.  **无参无返回值**

```java
public void methodName(){
    ……
}
```

2.  **无参有返回值**

```java
public boolean methodName(){
    ……
    return false;
}
```

3.  **有参无返回值**

```java
public void methodName(String name){
    ……
}
```

4.  **有参有返回值**

```java
public boolean methodName(String name){
    ……
    return false;
}
```



```java
public class Pet{
    // 名字
    public String name;
    
    // 毛色
    public String furColor;
    
    // 年龄
    public int age;
    
    // 具有返回值的方法
    int getAge(){
        return age;
    }

    // 带有参数的方法
    void setAge(int age){
        this.age = age;
    }
    
    // 吃东西对应的方法
    void eat(){
        System.out.println("吃东西！");
    }
    
    // 叫唤对应的方法
    void bark(){
        System.out.println("叫唤！");
    }
}
```

而对于方法命名的方式，也是有一定讲究的。因为一般而言方法都是一个类的动作行为，所以 **一般都是以动词开头，而如果有多个单词组合，则除开第一个单词全部小写之外，后面每个单词的第一个字母都要使用大写**。

### 构造方法

上面我们说了实例（也就是对象）和属性，那么当我们创建一个实例的时候，通常我们想要把它的属性也给它设置好。为了实现这一功能，这时候我们可以添加方法，从而达到这一目的，以上述设置宠物的年龄为例。

```java
// 首先创建一个实例
Pet pet = new Pet();
// 接着调用方法设置年龄
pet.setAge(3);
// 查看设置年龄是否成功
System.out.println(pet.getAge());
```

可以发现通过上述调用方法的方式是可以完成这一目的的，但假设我们需要设置的属性很多，此时要全部设置属性值时就需要调用许多次 `setter` 方法，一旦遗漏一个，则实例内部状态就紊乱了。那我们就想了，有没有一种简单点的方法，能够让我们在创建实例对象的同时就把内部属性初始化了呢？

答案是：Yes！🎉🎉🎉

这时候我们就可以用到一类特殊的方法 - **构造方法**，以下就来看看这个构造方法的特殊之处。

其实在上面我们创建实例的时候就已经调用了构造方法了，只不过它是没有带任何参数的构造方法。以上述动物类 `Pet` 为实例，我们来看看如何编写它的构造方法。

```java
public class Pet{
        // 名字
    public String name;
    
    // 毛色
    public String furColor;
    
    // 年龄
    public int age;
    
    // 无参构造方法
    public Pet(){}
    
    // 带参构造方法
    public Pet(String name, String furColor, int age){
        this.name = name;
        this.furColor = furColor;
        this.age = age;
    }
}
```

以上我们只是给出了无参的构造方法和带了所有属性的构造方法，除了上面的两个构造方法之外，我们还可以根据需要创建带有部分属性的构造方法。可以看到，相比于普通的方法，构造方法有着明显的特点：

1.  **没有返回值**：是的，无论是带参还是不带参的构造函数，它们都是没有返回值的，而它也是 **每个类默认的构造方法**；
2.  **方法名同类名一样**：必须确保构造方法的名字和类名一致，否则它就不是构造方法了；

有了构造方法之后，我们创建实例时就可以直接给它初始化了，而不用再去麻烦地调用各个 `setter` 方法来初始化实例。

```java
// 调用无参构造方法
Pet pet1 = new Pet();
// 调用有参构造方法
Pet pet2 = new Pet("柯基", "黄色", 1);
```

🎈 Tips：对于实例的属性值，在未经构造方法初始化时，各数据类型都有默认值，整型默认值为 `0`，浮点型默认值为 `0.0`，布尔类型默认值为 `false`，引用类型默认值为 `null`。

### 引用

既然知道了什么是面向对象以及面向对象中的一些关键知识点如对象、属性、方法的概念，那我们就趁热来看看啥是引用。

所谓引用，其实在之前学习的时候就已经涉及到了。你是否还记得 `String` 这个特殊的数据类型，其实在我们创建一个 `String` 对象时，也就创建了一个引用。

```java
String str = new String("村雨遥");
```

其中 `str` 既是一个变量，也是一个引用，指向一个值为 `"村雨遥"` 的 `String` 对象，后续如果我们要访问这个 `String` 对象，就需要使用 `str` 这个引用来代表它。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c6475fcddda4b19b7f1ba10ec940b09~tplv-k3u1fbpfcp-watermark.image)

以上我们说的是一个引用指向一个对象，但是我们也可以用多个引用指向同一个对象。就好比你家买了一俩车，不仅你可以开，你老婆也可以开，你爸妈也可以开。而这时候的车就好比一个“对象”，而使用它的人就是多个“引用”。

```java
// 对象 1
String str1 = new String("村雨遥");
// 对象 2
String str2 = str1;
// 对象 3
String str3 = str1;
```



![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d8d0a440f60445f9b6f8c249a79caa0~tplv-k3u1fbpfcp-watermark.image)



## 总结

XDM，今天的内容就到此结束了。主要讲了面向对象的相关概念以及特性，并对面向对象中的类、对象、属性、方法、构造方法以及引用做了介绍，关于更多面向对象的知识，我们下一篇文章中再见！

**关注公众号，获取最新文章更新**

<img src="https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif" width="200" alt="公众号" />
