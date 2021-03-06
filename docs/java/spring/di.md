## 依赖注入的方式

如果要想一个类中传递数据，我们常用的可以通过构造方法来传递，而另一种就是常用的 `getter\setter` 方法。

之前说过依赖注入描述了容器中 Bean 和 Bean 之间的依赖关系，但如果 Bean 在运行中书需要的不是对象，而是其他类型的数据比如数字或者字符串呢？

因此，依赖注入也提供了其他类型数据的注入方式，这里同样可以分为 `setter` 注入和构造器注入的方式。

## setter 注入

首先是引用类型的注入。

```java
public class HeroServiceImpl implements HeroService {
    private HeroDao heroDao;

    @Override
    public void attack() {
        System.out.println("hero service attack");
    }

    public void setHeroDao(HeroDao heroDao) {
        this.heroDao = heroDao;
    }
}
```

接着在 Spring 配置文件 `applicationContext.xml` 中，使用 `property` 标签的 `ref` 属性注意引用类型的对象即可。

```xml
<bean id="heroDao" class="com.cunyu.dao.impl.HeroDaoImpl"/>
<bean id="heroService" class="com.cunyu.service.impl.HeroServiceImpl">
    <property name="heroDao" ref="heroDao"/>
</bean>
```

