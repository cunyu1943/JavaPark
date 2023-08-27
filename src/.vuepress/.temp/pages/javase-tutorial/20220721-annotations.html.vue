<template><div><h1 id="深入浅出-java-注解" tabindex="-1"><a class="header-anchor" href="#深入浅出-java-注解" aria-hidden="true">#</a> 深入浅出 Java 注解</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<h2 id="注解简介" tabindex="-1"><a class="header-anchor" href="#注解简介" aria-hidden="true">#</a> 注解简介</h2>
<p>所谓注解，其实就像一种拥有特定作用的注释，自 JDK1.5 及之后版本所引入的特性，它是放在 Java 源码的类、方法、字段、参数前的一种用作标注的“元数据”，与类、接口、枚举处于同一个层次中。</p>
<p>通过其作用的不同，我们常常将注解分为如下 3 类：</p>
<ol>
<li><strong>编写文档</strong>：通过代码中标识的注解生成对应文档（即类似于 Java doc 的文档）；</li>
<li><strong>代码分析</strong>：通过代码中标识的注解对代码进行分析（使用反射）；</li>
<li><strong>编译检查</strong>：通过代码中标识的注解让编译器能实现基本的编译检查（<code v-pre>@Override</code>）；</li>
</ol>
<h2 id="常用的预定义注解" tabindex="-1"><a class="header-anchor" href="#常用的预定义注解" aria-hidden="true">#</a> 常用的预定义注解</h2>
<h3 id="override" tabindex="-1"><a class="header-anchor" href="#override" aria-hidden="true">#</a> <code v-pre>@Override</code></h3>
<p>一般是用在方法上，表示重写该父类的方法，比如我们使用最多的 <code v-pre>toString()</code> 方法，它是 <code v-pre>Object</code> 类的一个方法，而我们的写的类都是继承自 <code v-pre>Object</code> 类，所以我们自定义的所有类都是有 <code v-pre>toString()</code> 方法的。但是如果我们自定义类中的方法在父类中没有，则不能使用该注解，否则会导致无法编译通过。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@email</span> : 747731461@qq.com
 * <span class="token keyword">@website</span> : https://cunyu1943.github.io
 * <span class="token keyword">@date</span> : 2021/6/20 10:04
 * <span class="token keyword">@project</span> : JavaWeb
 * <span class="token keyword">@package</span> : com.cunyu
 * <span class="token keyword">@className</span> : OverrideTest
 * <span class="token keyword">@description</span> :
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverrideTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">OverrideTest</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token string">"OverrideTest{"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"id="</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">", name='"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">'\''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">'}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> id <span class="token operator">=</span> <span class="token number">101</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
        <span class="token class-name">OverrideTest</span> overrideTest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OverrideTest</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>overrideTest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220721-annotations/override.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="deprecated" tabindex="-1"><a class="header-anchor" href="#deprecated" aria-hidden="true">#</a> <code v-pre>@Deprecated</code></h3>
<p>一般用在方法之前，表示该方法已经过期，不建议再继续使用（但是仍然有效，只不过可能有更新的版本，推荐使用更新的版本）。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@email</span> : 747731461@qq.com
 * <span class="token keyword">@website</span> : https://cunyu1943.github.io
 * @公众号 : 村雨遥
 * <span class="token keyword">@date</span> : 2021/6/20 10:07
 * <span class="token keyword">@project</span> : JavaWeb
 * <span class="token keyword">@package</span> : com.cunyu
 * <span class="token keyword">@className</span> : DeprecateTest
 * <span class="token keyword">@description</span> :
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeprecateTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">newSayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello，Welcome to Java !"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">newSayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220721-annotations/deprecated.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="suppresswarnings" tabindex="-1"><a class="header-anchor" href="#suppresswarnings" aria-hidden="true">#</a> <code v-pre>@SuppressWarnings</code></h3>
<p>表示忽略警告信息，常用的值以及含义如下表：</p>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>deprecation</code></td>
<td>使用了不赞成使用的类或方法时的警告</td>
</tr>
<tr>
<td><code v-pre>unchecked</code></td>
<td>使用了未经检查的转换时的警告</td>
</tr>
<tr>
<td><code v-pre>fallthrough</code></td>
<td>当 <code v-pre>switch</code> 程序块直接通往下一种情况而没有 <code v-pre>break</code> 时的警告</td>
</tr>
<tr>
<td><code v-pre>path</code></td>
<td>在类路径、源文件路径等中有不存在的路径时的警告</td>
</tr>
<tr>
<td><code v-pre>serial</code></td>
<td>当在可序列化的类上缺少 <code v-pre>serialVersionUID</code> 定义时的警告</td>
</tr>
<tr>
<td><code v-pre>finally</code></td>
<td>任何 <code v-pre>finally</code> 子句不能正常完成时的警告</td>
</tr>
<tr>
<td><code v-pre>rawtypes</code></td>
<td>泛型类型未指明</td>
</tr>
<tr>
<td><code v-pre>unused</code></td>
<td>引用定义了，但是没有被使用</td>
</tr>
<tr>
<td><code v-pre>all</code></td>
<td>关闭以上所有情况的警告</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@email</span> : 747731461@qq.com
 * <span class="token keyword">@website</span> : https://cunyu1943.github.io
 * @公众号 : 村雨遥
 * <span class="token keyword">@date</span> : 2021/6/20 10:07
 * <span class="token keyword">@project</span> : JavaWeb
 * <span class="token keyword">@package</span> : com.cunyu
 * <span class="token keyword">@className</span> : SuppressWarningsTest
 * <span class="token keyword">@description</span> :
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuppressWarningsTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> item <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
        <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"rawtypes"</span><span class="token punctuation">)</span>
        <span class="token class-name">List</span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        items<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220721-annotations/suppressWarnings.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="自定义注解" tabindex="-1"><a class="header-anchor" href="#自定义注解" aria-hidden="true">#</a> 自定义注解</h2>
<h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h3>
<p>我们可以使用 <code v-pre>@interface</code> 来自定义注解，其格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnotationName</span><span class="token punctuation">{</span>
    <span class="token comment">// 属性列表</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个简单的示例如下，其中 <code v-pre>AnnoDemo</code> 代表着我们自定义注解的名称，而 <code v-pre>name()</code>、<code v-pre>age()</code>、<code v-pre>score()</code> 则分别表示自定义注解的三个属性，而且我们利用关键字 <code v-pre>default</code> 对每个属性都赋予了默认值。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnoDemo</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> <span class="token function">score</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">60.0f</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3>
<p>注解本质上相当于一个接口，它默认继承自 <code v-pre>java.lang.annotation.Annotation</code>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AnnotationName</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span>Annotation</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3>
<p>注解的参数类似于无参的方法，通常我们推荐用 <code v-pre>default</code> 来设定一个默认值，对于方法的基本要求通常有如下几点：</p>
<ol>
<li>方法的返回值类型不可以是 <code v-pre>void</code>；</li>
<li>如果定义了方法，那么在使用时需要给方法进行赋值，赋值的规则如下：
<ol>
<li>若定义方法时，使用了关键字 <code v-pre>default</code> 对方法赋予了默认初始值，那么在使用注解时，可以不用对方法进行再次赋值；</li>
<li>若只有一个方法需要赋值，且方法名为 <code v-pre>value</code>，那么此时 <code v-pre>value</code> 可以省略，直接定义值即可；</li>
<li>数组赋值时，值需要用大括号 <code v-pre>{}</code> 包裹，若数组中只有一个值，那么此时 <code v-pre>{}</code> 可以省略；</li>
</ol>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnoDemo</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> <span class="token function">score</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">60.0f</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上述例子中，<code v-pre>name()</code>、<code v-pre>age()</code>、<code v-pre>score()</code> 就是我们自定义注解的参数。而当我们要是用该注解时，则通过如下方式来对参数进行赋值。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@AnnoDemo</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">,</span> score <span class="token operator">=</span> <span class="token number">95.0f</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元注解" tabindex="-1"><a class="header-anchor" href="#元注解" aria-hidden="true">#</a> 元注解</h2>
<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3>
<p>所谓元注解(<code v-pre>meta annotation</code>)，就是可以用来修饰其他注解的注解。</p>
<h3 id="常用的元注解" tabindex="-1"><a class="header-anchor" href="#常用的元注解" aria-hidden="true">#</a> 常用的元注解</h3>
<ol>
<li><code v-pre>@Target</code></li>
</ol>
<p>描述注解所修饰的对象范围，其取值主要有如下几种：</p>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ElementType.TYPE</code></td>
<td>表示可以作用于类或接口</td>
</tr>
<tr>
<td><code v-pre>ElementType.FIELD</code></td>
<td>表示可以作用于成员变量</td>
</tr>
<tr>
<td><code v-pre>ElementType.METHOD</code></td>
<td>表示可以作用于方法</td>
</tr>
<tr>
<td><code v-pre>ElementType.CONSTRUCTOR</code></td>
<td>表示可以作用于构造方法</td>
</tr>
<tr>
<td><code v-pre>ElementType.PARAMETER</code></td>
<td>表示可以作用于方法的参数</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnoDemo</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> <span class="token function">score</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">60.0f</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>@Retention</code></li>
</ol>
<p>用于约束注解的生命周期，其取值如下：</p>
<table>
<thead>
<tr>
<th>值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>RetentionPolicy.SOURCE</code></td>
<td style="text-align:left">表示在源代码文件中有效，注解将被编译器丢弃（注解信息仅保留在源码中，源码经编译后注解信息丢失，不再保留到字节码文件中）</td>
</tr>
<tr>
<td><code v-pre>RetentionPolicy.CLASS</code></td>
<td style="text-align:left">表示在字节码文件中有效，注解在字节码文件中可用，但会被 JVM 丢弃</td>
</tr>
<tr>
<td><code v-pre>RetentionPolicy.RUNTIME</code></td>
<td style="text-align:left">表示在运行时有效，此时可以通过反射机制来读取注解的信息</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPoicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnoDemo</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> <span class="token function">score</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">60.0f</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><code v-pre>@Documented</code></li>
</ol>
<p>描述其他类型的注解是否被抽取到 API 文档中。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPoicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnoDemo</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> <span class="token function">score</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">60.0f</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li><code v-pre>@Inherited</code></li>
</ol>
<p>这是一个标记注解，描述某个注解能够被子类继承，但是该元注解只适合已经配置了 <code v-pre>@Target(ElementType.TYPE)</code> 类型的自定义注解，而且仅针对于类的继承，而对于接口的继承则无效。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Inherited</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnoDemo</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> <span class="token function">score</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">60.0f</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li><code v-pre>@Repeatable</code></li>
</ol>
<p>该注解是从 JDK1.8 新引入的元注解，表示在同一位置能够重复相同的注解。在没有该注解之前，我们一般是无法在同一类型上使用相同注解的，但引入该注解后，我们就可以在同一类型上使用相同注解。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Repeatable</span><span class="token punctuation">(</span><span class="token class-name">AnnoDemos</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnoDemo</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> <span class="token function">score</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">60.0f</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnoDemos</span><span class="token punctuation">{</span>
	<span class="token class-name">AnnoDemo</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用 <code v-pre>@Repeatable</code> 配置自定义注解之后，我们就可以在某个类型声明处添加多个我们自定义的注解了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@AnnoDemo</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">,</span> score <span class="token operator">=</span> <span class="token number">88.0f</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@AnnoDemo</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"晓瑜"</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">27</span><span class="token punctuation">,</span> score <span class="token operator">=</span> <span class="token number">90.0f</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>总结上述的知识点，我们将自定义注解的过程归纳为如下 3 步。</p>
<ol>
<li><strong>定义一个注解</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnoDemo</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>添加参数并设置默认值</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnoDemo</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> <span class="token function">score</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">60.0f</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><strong>利用元注解来配置我们的自定义注解</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AnnoDemo</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> <span class="token function">score</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">60.0f</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实际应用过程中，利用元注解配置自定义注解时，必须设置 <code v-pre>@Target</code> 和 <code v-pre>@Retention</code> 两个元注解，而且 <code v-pre>@Retention</code> 的值通常是设置为 <code v-pre>RetentionPolicy.RUNTIME</code>。</p>
<p>好了，以上就是我们注解的相关概念以及自定义注解所需要的掌握的一些知识点了，如果你觉得对你有所帮助，那就来一波点赞关注吧！<br>
<strong>关注公众号，获取最新文章更新</strong></p>
<div style="text-align:center">
<figure><img src="https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif" alt="" width="200" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<Share colorful /></div></template>


