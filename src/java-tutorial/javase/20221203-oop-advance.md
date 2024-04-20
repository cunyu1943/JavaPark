---
isOriginal: true
order: 1
category:
  - Java 基础
tag:
    - Java
---
# static 和 final 小课堂

:::info 共勉
不要哀求，学会争取。若是如此，终有所获。
:::

## 前言

学习了面向对象的一些知识点后，在看别人的代码中经常会看到 `static` 和 `final` 两个关键字，那你知道它俩都是做什么用的么，使用的时候需要注意啥呢？

今天的内容就来一起了解下，`static` 和 `final` 关键字的使用。

## static

静态的意思，是 `Java` 中常用的修饰符，既可以用它来修饰成员变量，也可以用它来修饰成员方法。

### 静态变量

静态变量就是用 `static` 来修饰的成员变量，最重要的特点就是一个类中的静态变量被类中的所有对象所共享。它不属于任何一个对象，而是属于类。其生命周期同类一样，共生共存，是优先于对象的。

和成员变量不同的是，成员变量只能通过新建对象，然后用对象名来进行调用。而静态变量不仅仅可以用这种方式，还可以直接通过类名来进行调用，而这也是更为推荐的方式。

```java
public class Hero{
    /** 成员变量 */
    private String name;

    /** 静态变量 */
    pubic static String game;

    // 各种 setter 和 getter
}
```

1.  **成员变量调用**

```java
public class Main{
    public static void main(String[] args){
        Hero hero = new Hero();
        hero.setName("赵怀真");
    }
}
```

2.  **静态变量调用**

```java
public class Main{
    public static void main(String[] args){
       	// 第一种方式
        Hero hero = new Hero();
        hero.setGame("王者荣耀");

        // 第二种方式，更为推荐
        Hero.setGame("王者荣耀");
    }
}
```

### 静态方法

静态方法就是类中用 `static` 来修饰的成员方法，一般用来修饰公共的工具类或者测试类。

同样的，静态方法既可以用通过新建对象，然后用对象名来调用的方式，也可以直接通过类名来调用的方式，这也是更为推荐的方式。

```java
public class Util{
    private Util(){};

    pubilc static void attack(){
        System.out.println("攻击");
    }
}
```

```java
public class Main{
    public static void main(String[] args){
        Util.attack();
    }
}
```

### 注意

使用 `static` 修饰方法或变量后，需要注意以下的小细节。

- 一个静态方法中**只能**访问静态变量和其他的静态方法。而不能访问非静态的变量和方法。
- 但一个非静态方法一方面既可以访问静态变量，也可以访问非静态变量；另一方面，也既可以访问静态方法，也可以访问非静态方法。
- 不同于成员方法，静态方式中是不存在 `this` 关键字的。

### 静态代码块

在代码中用 `static{}` 包裹起来的代码叫做静态代码块，它会随着类的加载而加载，而且会自动触发，只执行一次，一般用来对一些数据初始化。

```java
public class Main{
    static String password;

    static{
        password = "123456";
    }
}
```

## final

### 修饰变量

用 `final` 修饰的变量叫做常量，说明它只能被赋值一次。

实际开发中，一般用常量来作为系统的配置信息，一方面既方便维护，另一方面又可以提高代码可读性。

对常量进行命名时，一般遵循以下的规范：

- 如果是单个单词，那么将它全部大写即可。
- 如果是多个单词，那么将每个单词都大写，并且单词之间用下划线 `_` 隔开。

此外，对于修饰的变量的类型不同，含义也是不一样的。

如果修饰的变量是一个基本类型，那么表示的是该变量存储的**数据值**不可改变。而如果修饰的变量是一个引用类型，则表示该变量存储的**地址值**不能改变，但是对象内部是可以发生变化的。

```java
public class Comic{
    private String name;
    private String type;
    // setter、getter、Constructor 省略
}
```

```java
public class Main{
    public static void main(String[] args){
        final int SIZE = 5;

        // 此时会报错
        // SIZE = 10;

        final Comic comic = new Comic("灌篮高手", "运动");
        // 不会报错，因为地址值未变，变的是对象内部
        comic.setName("海贼王");
        comic.setType("冒险");
    }
}
```

### 修饰方法

说明该方法是最终方法，不能再被重写。

```java
public class Person{
    public final void walk(){
        System.out.println("行走")
    }
}

public class Student extends Person{
    // 会报错，因为 final 修饰的方法不能再被重写
    @Override
    public void walk(){
        System.out.println("行走")
    }
}
```

### 修饰类

说明这个类时最终类，不能够再被继承。也就是说，如果一个类被 `final` 所修饰，那么这个类不能作为其他任意类的福来。如果试图对一个用 `final` 修饰的类进行继承，则在编译期间可能会发生错误。

```java
public final class Person{
    private String name;
}

// 继承用 final 修饰的类，此时会报错
class Student extends Person{
    ……
}
```

## 总结

今天的内容到此就结束了，首先介绍了 `static` 用来修饰符变量和方法的应用场景，还额外补充了静态代码块相关的知识点。另外，我们也对 `final` 用来修饰变量、方法和类时的场景进行了回顾。

码字不易，如果本文对你所有帮助，那就来个一键三连吧！

## ⏳ 联系

想解锁更多知识？不妨关注我的微信公众号：**村雨遥（id：JavaPark）**。

扫一扫，探索另一个全新的世界。

![](/contact/wechatpublic.svg =150x)

<Share colorful />