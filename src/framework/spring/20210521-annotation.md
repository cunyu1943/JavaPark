---
isOriginal: true
category: Spring 系列
tag:
    - Spring
date: 2021-05-21
---

# Spring Bean 注解详解

## 前言

本篇博客中，我们将会讨论用于声明不同类型 Beans 的几种最常用的 Spring Bean 注解。

众所周知，Spring 容器中有许多配置 Bean 的方法，我们既可以通过 XML 配置，也可以在配置类中使用 `@Bean` 注解来声明 Beans。此外，我们还可以使用 `org.springframework.stereotype` 包中的一个注解来对类进行标记，然后把其余工作交给组件扫描即可。

## 组件扫描

在 Spring 中，一旦我们启用了组件扫描， Spring 就会自动扫描包中的 Bean。

通过使用 `@ComponentScan` ，Spring 就会自动去扫描那些带有注释配置的类，我们可以使用 `basePackages` 或者 `value` 参数（两者是一样的，`value` 只不过是 `basePackages` 的另一种称呼）来直接指定我们所要扫描的包的名称，然后 Spring 就会去扫描我们指定包下所有带有 `@Component` 注解的类，然后将其自动注册为一个 Bean。

```java
@Configuration
// 以下两者之一即可
@ComponentScan(basePackages = "com.cunyu.annotions")
// @ComponentScan(value = "com.cunyu.annotions")
class PetFactoryConfig{
    ……
}
```

此外，我们还可以使用 `basePackageClasses` 参数来指向基础包中的类。

```java
@Configuration
@ComponentScan(basePackageClasses = PetFactoryConfig.class)
class PetFactoryConfig{
    ……
}
```

`basePackages` 和 `basePackageClasses` 两个参数都是数组类型的，所以在传参时我们可以为他们提供多个包。

而如果没有为 `@ComponentScan` 指定参数，那么 Spring 就只会扫描和 `@ComponentScan` 注释的类位于同一个包的带有 `@Component` 注解的其他类，然后将它们自动创建为一个 Bean。

`@ComponentScan` 充分利用了 Java 8 中的重复注解特性，因此我们能够用它来多次标记一个类：

```java
@Configuration
@ComponentScan(basePackages = "com.cunyu.annotions")
@ComponentScan(basePackageClasses = PetFactoryConfig.class)
class PetFactoryConfig{
    ……
}
```

除开上面的方式来标记一个类外，我们还可以使用 `@CompentScans` 来将多个 `@ComponentScan` 包含起来，用于指定多个 `@ComponentScan` 配置。

```java
@Configuration
@ComponentScans({
    @ComponentScan(basePackages = "com.cunyu.annotions"),
    @ComponentScan(basePackageClasses = PetFactoryConfig.class)
})
class PetFactoryConfig{
    ……
}
```

除开使用注解的方式来实现组件扫描之外，我们还可以通过配置 XML 来进行，只需要在我们的配置文件中如下内容即可：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans";
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance";
       xmlns:context="http://www.springframework.org/schema/context";
       xmlns:c="http://www.springframework.org/schema/c";
       xmlns:p="http://www.springframework.org/schema/p";
       xsi:schemaLocation="http://www.springframework.org/schema/beanshttp://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/contexthttp://www.springframework.org/schema/context/spring-context.xsd">;

    <context:component-scan base-package="com.cunyu.dao" />
    <context:component-scan base-package="com.cunyu.service" />
    <context:component-scan base-package="com.cunyu.controller" />
</beans>
```

`context:component-scan` 元素将实现同注解 `@ComponentScan` 一样的效果，即扫描 `com.cunyu` 包下所有带有 `@Component` 注解的类，并将它们注册创建为 Bean。

## @Component

上一小节中我们讲了 `@ComponentScan` 会自动扫描组件过程中会去扫描那些带有 `@Component` 注解的类，并将其注册创建为 Bean，比如下面的例子：

```java
@Component
public class Cat{
    ……
}
```

其中 `Cat` 类中带有 `@Component` 注解，当 Spring 自动扫描时，就会去扫描 `Cat` 这个类，并创建一个名为 `cat` 的 Bean 实例。

**注意**：默认情况下，使用 `@ComponentScan` 去扫描 `@Component` 注解的类，生成对应类的 Bean 实例时，Bean 实例具有与类名相同的名称，但不同的是 Bean 实例的首字母是小写，而一般类名首字母是大写。

`@Component` 是任意 Spring 管理组建的通用构造型，当组件不好归类时，一般使用该注解，又可以分为如下几个常用元注解：

-   `@Repository`：位于持久层，能将数据库操作跑出的原生异常转换为 Spring 持久层异常，用于标注数据访问组件，即 DAO 组件；
-   `@Service`：位于业务逻辑层，只是标注该类位于业务层逻辑；
-   `@Configuration`：用于定义配置类，可替换 XML 配置文件，被注解的类内部包含一个或多个被 `@Bean` 注解的方法，这些方法将会被 `AnnotationConfigApplicaitonContext` 或者 `AnnotaionConfigWebApplicationContext` 类扫描，并用于构建 Bean 定义，初始化 Spring 容器；
-   `@Controller`：属于 Spring MVC 的注解，进行前端请求的处理、转发、重定向；用于标注控制层组件；

它们是针对不同使用场景而采取的带有特定功能化的注解组件，其实质功能其实和 `@Component` 一样。因此，如果一个类被 `@Component` 注解了，那么就可以根据这个类的实际功能，利用 `@Repository`、`@Service` … 等代替，而且代替后的注解会具备更多的功能。

## @Repository

DAO（Data Access Object，数据访问对象，为某种类型的数据库或其他持久性机制提供一个抽象接口的对象） 或者 Repository 类通常代表应用程序中的数据访问层，我们一般倾向于使用 `@Repository` 注解。

```java
@Repository
public class PetRepository{
    ……
}
```

通过使用 `@Repository` 注解，它将启用自动持久化异常转换。此时，当我们使用一些持久化框架，比如 Hibernate、MyBatis……时，当带有 `@Repository` 注解的类在抛出本地异常时，就会自动将其转换为 Spring 中的 `DataAccessException` 的子类。

而要启动异常转换，我们就需要自己去声明我们 `PersistenceExceptionTranslationPostProcessor` 的实例，声明的方式可以分为注解性和 XML 配置型。但是一般而言，Spring 都会自动帮我们去完成这个过程，所以我们就不再需要自己去手动声明了。

-   **注解型**

```java
@Bean
public PersistenceExceptionTranslationPostProcessor exceptionTranslation(){
    return new PersistenceExceptionTranslationPostProcessor();
}
```

-   **XML 配置型**

```xml
<bean class="org.springframework.dao.annotion.PersistenceExceptionTranslationPostProcessor" />
```

## @Service

对于应用程序中的业务逻辑，一般都是位于服务层，因此我们使用 `@Service` 注解一个类，来指明该类属于服务层。表示定义一个 Bean，自动根据所标注的组件实例化一个首字母为小写的 Bean。实例如下：

```java
@Service
public class PetService{
    ……
}
```

上述代码中 `PetService` 类被标注为一个 Bean，其名称为 `petServie`。

## @Configuration

一般用于配置类，而且还可以包含用 `@Bean` 所注解的 Bean 定义方法，实例如下：

```java
@Configuration
public class PetFactoryConfig{
    @Bean
    public Dog dog(){
        return new Dog();
    }
}
```

既然说了使用 `@Confgiuration` 可以和 XML 配置文件互换，那么以上的配置类等价于如下配置：

```xml
<beans>
    <bean id="dog" class = "com.cunyu.dao.Dog"/>
</beans>
```

注意：使用 `@Configuration` 注解时，一般需要遵循如下原则：

1.  `@Configuration` 注解的类不可以是 `final` 类型；
2.  `@Configuration` 注解的类不可以是匿名类；
3.  嵌套的 `@Configuration` 必须是静态类；

## @Controller

`@Controller` 注解是一个类级别的注解，当把它用在类上时，表示该类在 Spring MVC 中充当控制器，该类将被 Spring 自动扫描，一般我们在该类中加入 `@RequestMapping("…")`，就可以直接使用浏览器来访问对应界面进行逻辑处理了。实例如下：

```java
@Controller
public class PetController{
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String sayHello(){
		return "你好，村雨遥！";
    }
    ……
}
```

此时，当我们去浏览器中访问 `localhost:8080/hello` 时，页面中就会显示 `你好，村雨遥！` 这条信息。

注意，`@Controller` 注解的类下，我们又发现了 `RequestMapping` 注解，该注解主要 6 个属性，分别介绍如下：

-   `value` ：用于指定浏览器指定的地址；
-   `method`，指定请求的 method 类型，一般有 `GET`、`POST`、`PUT`、`DELETE`，而现在我们一般使用对应的注解 `@GetMapping`、`@PostMapping`、`@PutMapping`、`@DeleteMapping`；
-   `consumes`：用于指定处理请求的提交内容类别（`Content-Type`），如 `application/json`、`test/html`；
-   `produces`：指定返回的内容类别；
-   `params`：指定 `request` 中必须包含某些引用数值时，才能让该方法处理；
-   `headers`：指定 `request` 中必须包含某些指定 `header` 值，才能让该方法处理请求；

## 原型注解及 AOP

当我们使用 Spring 原型注解时，可以十分容易地创建一个指向所有具有特定构造型的类的切入点。

比如我们如果想要衡量一个方法在 DAO 层中的执行时间，就可以充分利用 `@Repository` 注解的特点。

```java
@Aspect
@Component
public class PerformanceAspect {
    @Pointcut("within(@org.springframework.stereotype.Repository *)")
    public void repositoryClassMethods() {};

    @Around("repositoryClassMethods()")
    public Object measureMethodExecutionTime(ProceedingJoinPoint joinPoint) 
      throws Throwable {
        long start = System.nanoTime();
        Object returnValue = joinPoint.proceed();
        long end = System.nanoTime();
        String methodName = joinPoint.getSignature().getName();
        System.out.println(
          "Execution of " + methodName + " took " + 
          TimeUnit.NANOSECONDS.toMillis(end - start) + " ms");
        return returnValue;
    }
}
```

以上实例中，我们创建了一个切入点，该切入点会去匹配带有 `@Repository` 注解的类中的所有方法。然后我们用 `@Around` 通知来定位切入点，并确定被拦截的方法调用的执行时间。通过使用这个方式，我们就可以轻松地给每个应用程序添加日志记录、性能管理、审计以及其他行为。

## 总结

好了，以上就主要介绍了 Spring 中的原型注释，并了解了它们各自所代表的意义。此外，还学习了如何使用组件扫描功能，从而告知 Spring 容器在何处能找到带有注解的类。

如果你有更多的见解，欢迎评论留言，一起交流呀！