---
isOriginal: true
order: 1
category:
  - Java 基础
tag:
    - Java
---
# 流程控制知识大闯关


::: info 共勉
不要哀求，学会争取。若是如此，终有所获。
:::
::: tip 原文
https://mp.weixin.qq.com/s/K4aL8o_ND7R_W0mooNhusw

:::

---

## 前言

既然已经学习了 `Java` 中的流程控制，接下来就来实际操作下，利用我们所学知识来解决实际的问题。

光学是没有用的，只有不断实践才能了解其中的真正含义。

## 闯关

### 第一关：打印折纸的次数

1.  **题目**

已知世界上最高的山峰是珠穆朗玛峰，它的高度是 `8844.43` 米，假设有一张足够大的纸，其厚度为 `0.1` 毫米，那么请问我要折叠多少次，才能将这张纸折成珠穆朗玛峰的高度？

2.  **解析**

| 折叠次数 | 厚度  |
| :------: | :---: |
|   `1`    | `0.1` |
|   `2`    | `0.2` |
|   `3`    | `0.4` |
|   `4`    | `0.8` |
|   `……`   | `……`  |

可以发现，纸张初始厚度为 `0.1` 毫米，而每次折叠之后，折叠后的纸张厚度都是未折叠前的 `2` 倍。而同时，我们事先是不清楚具体要叠多少次的，所以我们选择 `while` 来进行循环。

3.  **实现**

```java
public class MountQomolangma {
    public static final double HEIGHT = 8844430;

    public static void main(String[] args) {
        // 初始厚度
        double init = 0.1;

        // 统计次数
        int count = 0;

        while (init < HEIGHT) {
            init *= 2;
            count++;
        }

        System.out.println("一共需要折叠 " + count + " 次");
    }
}
```

### 第二关：回文数

1.  **题目**

假设给你一个整数 `x`，如果这个数是回文数，打印 `true`，否则打印 `false`。

回文数：指正序（从左向右）和倒序（从右向左）读都是一样的整数。

2.  **解析**

既然回文数的定义是正序和倒序读都是一样，那么我们就把这个数逆转，然后比较逆转的数和原来的数是否相等，如果相等，那么说明这个数是一个回文数，否则它就不是一个回文数。

3.  **实现**

```java
import java.util.Scanner;

public class Palindromes {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("输入一个整数");

        // 输入的初始值
        int num = in.nextInt();
        // 临时记录
        int tmp = num;
        // 反转后的数
        int reverse = 0;

        while (num != 0) {
            int x = num % 10;
            num /= 10;
            reverse = reverse * 10 + x;
        }

        System.out.println(tmp + " 是一个回文数 ：" + (reverse == tmp));

    }
}
```

### 第三关：求商和余数

1.  **题目**

给定两个整数，分别是被除数和除数，然后在不使用乘法、除法和 `%` 运算符的情况下，求出商和余数。

2.  **解析**

平时如果要求两数的商，那么可以使用 `/`，而要求两数的余数则可以使用 `%`。但现在已经规定不能使用这两个运算符，那么就只想另想办法。

我们知道，其实乘除法归根结底还是加减法的简化，所以我们可以利用减法来实现求两数的商和余数。

3.  **实现**

```java
import java.util.Scanner;

public class Division {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("输入被除数：");
        int num1 = in.nextInt();

        System.out.println("输入除数：");
        int num2 = in.nextInt();

        // 商
        int quotient = 0;
        // 余数
        int remainder = 0;

        while (num1 >= num2) {
            num1 -= num2;
            quotient++;
            remainder = num1;
        }

        System.out.format("两数的商是: %d, 两数的余数是: %d\n", quotient, remainder);


    }
}
```

### 第四关：逢七必过

1.  **题目**

游戏规则：从任意一个数字开始报数，当要报的数字是包含 `7` 或 `7` 的倍数时，都要说：过。

打印出 `1 - 100` 之间的满足逢七必过规则的数据。

2.  **解析**

当一个数是 `7` 的倍数，那么这个数除以 `7` 的余数为 `0`。而如果这个数包含 `7`，那么这个数的个位或者十位是 `7`。

3.  **实现**

```java
public class SevenPass {
    public static void main(String[] args) {
        for (int i = 1; i <= 100; i++) {
            int ge = i % 10;
            int shi = i / 10;

            if (i % 7 == 0 || ge == 7 || shi == 7) {
                System.out.println("过");
            } else {
                System.out.println(i);
            }
        }
    }
}
```

### 第五关：平方根

1.  **题目**

输入一个大于等于 `2` 的整数，计算并返回这个数的平方根，结果只保留整数部分。

2.  **解析**

求一个数的平方根，通过遍历的方式，如果在不大于所给数的范围之内存在一个数的平方等于所给数，那么范围内的这个数就是所给数的平方根。而如果范围内存在一个数的平方刚好大于所给数，那么比这个数小 `1` 的数一定是所给数的平方根的整数部分，也就是我们所求的结果。

3.  **实现**

```java
import java.util.Scanner;

public class Square {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("输入一个整数");
        int num = scanner.nextInt();

        for (int i = 1; i <= num; i++) {
            if (num == i * i) {
                System.out.println(num + " 的平方根是: " + i);
                break;
            } else if (num < i * i) {
                System.out.println(num + " 的平方根是: " + (i - 1));
                break;
            }
        }
    }
}
```

### 第六关：判断一个数是否为质数

1.  **题目**

从键盘输入一个正整数，判断该数是否为质数。

2.  **解析**

所谓质数，就是指这个数只能被 `1` 和它本身整除，要注意 `1` 既不是质数也不是合数。

此时通过遍历，如果 `1` 到它之间存在一个数能被所给数整除，那么说明说给数不是一个质数。

3.  **实现**

```java
import java.util.Scanner;

public class Prime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("输入一个整数");

        int num = scanner.nextInt();

        boolean flag = true;

        for (int i = 2; i < num; i++) {
            if (0 == num % i) {
                flag = false;
                break;
            }
        }

        System.out.println(num + " 是一个质数：" + flag);
    }
}
```

### 第七关：猜数小游戏

1.  **题目**

系统随机给出一个 `1 - 100` 之间的整数，然后用程序实现才出这个数字是多少。

2.  **解析**

随机数需要用 `Random` 包，然后就是通过比较输入的数和生成的随机数大小，直到最后猜中。

3.  **实现**

```java
import java.util.Random;
import java.util.Scanner;

public class GuessNum {
    public static void main(String[] args) {
        Random rand = new Random();
        int num = rand.nextInt(100) + 1;

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("输入你猜的数");
            int tmp = scanner.nextInt();
            if (num == tmp) {
                System.out.println("你猜对了");
                break;
            } else if (num < tmp) {
                System.out.println("你猜大了，再猜");
            } else {
                System.out.println("你猜小了，再猜");
            }
        }
    }
}
```

## 总结

以上就是关于流程控制中关于 `for`、`while` 的知识测验了，你闯过了几关呢？

最后，文中所有代码已上传到 `Gitee`，有需要的朋友可以自取。

> 传送门：https://gitee.com/cunyu1943/java-in-practice

## ⏳ 联系

想解锁更多知识？不妨关注我的微信公众号：**村雨遥（id：JavaPark）**。

扫一扫，探索另一个全新的世界。

![](/contact/wechatpublic.svg =150x)

<Share colorful />