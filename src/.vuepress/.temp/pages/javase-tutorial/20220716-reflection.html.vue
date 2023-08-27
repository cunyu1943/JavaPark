<template><div><h1 id="反射机制详解" tabindex="-1"><a class="header-anchor" href="#反射机制详解" aria-hidden="true">#</a> 反射机制详解</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/f0sJpAhgI6B7oirsJfv9jQ" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/f0sJpAhgI6B7oirsJfv9jQ<ExternalLinkIcon/></a></p>
</div>
<h2 id="反射概述" tabindex="-1"><a class="header-anchor" href="#反射概述" aria-hidden="true">#</a> 反射概述</h2>
<h3 id="什么是反射" tabindex="-1"><a class="header-anchor" href="#什么是反射" aria-hidden="true">#</a> 什么是反射</h3>
<p>将类的各个组成部分封装为其他对象的过程就叫做 <strong>反射</strong>，其中 <strong>组成部分</strong> 指的是我们类的 <strong>成员变量（Field）</strong>、<strong>构造方法（Constructor）</strong>、<strong>成员方法（Method）</strong>。</p>
<h3 id="使用反射的优缺点" tabindex="-1"><a class="header-anchor" href="#使用反射的优缺点" aria-hidden="true">#</a> 使用反射的优缺点</h3>
<ul>
<li>
<p><strong>优点</strong></p>
<ol>
<li>在 <strong>程序运行过程中</strong> 可以操作类对象，增加了程序的灵活性；</li>
<li>解耦，从而提高程序的可扩展性，提高代码的复用率，方便外部调用；</li>
<li>对于任何一个类，当知道它的类名后，就能够知道这个类的所有属性和方法；而对于任何一个对象，都能够调用它的一个任意方法。</li>
</ol>
</li>
<li>
<p><strong>缺点</strong></p>
<ol>
<li><strong>性能问题</strong>：Java 反射中包含了一些动态类型，JVM 无法对这些动态代码进行优化，因此通过反射来操作的方式要比正常操作效率更低。</li>
<li><strong>安全问题</strong>：使用反射时要求程序必须在一个没有安全限制的环境中运行，如果程序有安全限制，就不能使用反射。</li>
<li><strong>程序健壮性</strong>：反射允许代码执行一些平常不被允许的操作，破坏了程序结构的抽象性，导致平台发生变化时抽象的逻辑结构无法被识别。</li>
</ol>
</li>
</ul>
<h2 id="class-对象的获取及使用" tabindex="-1"><a class="header-anchor" href="#class-对象的获取及使用" aria-hidden="true">#</a> Class 对象的获取及使用</h2>
<h3 id="获取-class-对象的方式" tabindex="-1"><a class="header-anchor" href="#获取-class-对象的方式" aria-hidden="true">#</a> 获取 Class 对象的方式</h3>
<ol>
<li><code v-pre>Class.forName(&quot;全类名&quot;)</code></li>
</ol>
<p>源代码阶段，它能将字节码文件加载进内存中，然后返回 <code v-pre>Class</code> 对象，多用于 <strong>配置文件</strong> 中，将类名定义在配置文件中，通过读取配置文件来加载类。</p>
<ol start="2">
<li><code v-pre>类名.class</code></li>
</ol>
<p>类对象阶段，通过类名的 <code v-pre>class</code> 属性来获取，多用于 <strong>参数的传递</strong>。</p>
<ol start="3">
<li><code v-pre>对象.getClass()</code></li>
</ol>
<p>运行时阶段，<code v-pre>getClass()</code> 定义在 <code v-pre>Object</code> 类中，表明所有类都能使用该方法，多用于 <strong>对象的获取字节码</strong> 的方式。</p>
<p>我们首先定义一个 <code v-pre>Person</code> 类，用于后续反射功能的测试；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Person
 * <span class="token keyword">@date</span> : 2021/4/7 22:37
 * <span class="token keyword">@description</span> : Person 类
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> grade<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">float</span> score<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> rank<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">long</span> id<span class="token punctuation">,</span> <span class="token keyword">long</span> grade<span class="token punctuation">,</span> <span class="token keyword">float</span> score<span class="token punctuation">,</span> <span class="token keyword">int</span> rank<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rank <span class="token operator">=</span> rank<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getGrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> grade<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setGrade</span><span class="token punctuation">(</span><span class="token keyword">long</span> grade<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScore</span><span class="token punctuation">(</span><span class="token keyword">float</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getRank</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> rank<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRank</span><span class="token punctuation">(</span><span class="token keyword">int</span> rank<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rank <span class="token operator">=</span> rank<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token string">"Person{"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"age="</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">", name='"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">'\''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">", id="</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">", grade="</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>grade<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">", score="</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">", rank="</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>rank<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">'}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义好 <code v-pre>Person</code> 类之后，我们尝试用 3 种不同的方式来获取 <code v-pre>Class</code> 对象，并比较它们是否相同。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Demo1
 * <span class="token keyword">@date</span> : 2021/4/7 23:29
 * <span class="token keyword">@description</span> : Class 对象的获取
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
<span class="token comment">//        第一种方式，Class.forName("全类名")</span>
        <span class="token class-name">Class</span> class1 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.cunyu.Person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>class1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        第二种方式，类名.class</span>
        <span class="token class-name">Class</span> class2 <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>class2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        第三种方式，对象.getName()</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span> class3 <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>class3<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        比较三个对象是否相同</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>class1 <span class="token operator">==</span> class2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>class1 <span class="token operator">==</span> class3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220716-reflection/class-obj.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>上述代码中，会发现最后输出的比较结果返回的是两个 <code v-pre>true</code>，说明通过上述三种方式获取的 <code v-pre>Class</code> 对象都是同一个，<strong>同一个字节码文件（<code v-pre>*.class</code>）在一次运行过程中只会被加载一次</strong>。</p>
<h3 id="class-对象的使用" tabindex="-1"><a class="header-anchor" href="#class-对象的使用" aria-hidden="true">#</a> Class 对象的使用</h3>
<h4 id="获取成员变量" tabindex="-1"><a class="header-anchor" href="#获取成员变量" aria-hidden="true">#</a> 获取成员变量</h4>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>Field[] getFields()</code></td>
<td>返回包含一个数组 <code v-pre>Field</code>对象反射由此表示的类或接口的所有可访问的公共字段类对象</td>
</tr>
<tr>
<td><code v-pre>Field getField(String name)</code></td>
<td>返回一个 <code v-pre>Field</code>对象，它反映此表示的类或接口的指定公共成员字段类对象</td>
</tr>
<tr>
<td><code v-pre>Field[] getDeclaredFields()</code></td>
<td>返回的数组 <code v-pre>Field</code>对象反映此表示的类或接口声明的所有字段类对象</td>
</tr>
<tr>
<td><code v-pre>Field getDeclaredField(String name)</code></td>
<td>返回一个 <code v-pre>Field</code>对象，它反映此表示的类或接口的指定已声明字段类对象</td>
</tr>
</tbody>
</table>
<ul>
<li><code v-pre>Field[] getFields()</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Demo2
 * <span class="token keyword">@date</span> : 2021/4/7 23:39
 * <span class="token keyword">@description</span> : Class 对象的使用
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> class1 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.cunyu.Person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fields <span class="token operator">=</span> class1<span class="token punctuation">.</span><span class="token function">getFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Field</span> field <span class="token operator">:</span> fields<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220716-reflection/class-attr.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>回顾下我们的 <code v-pre>Person</code> 类，可以发现 <code v-pre>id</code>、<code v-pre>grade</code> 成员变量都是被 <code v-pre>public</code> 所修饰的，说明该方法是用于获取类中所有被 <code v-pre>public</code> 所修饰的成员变量（<strong>包括父类</strong>）。</p>
<ul>
<li><code v-pre>Field getField(String name)</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Demo2
 * <span class="token keyword">@date</span> : 2021/4/7 23:39
 * <span class="token keyword">@description</span> : Class 对象的使用
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">NoSuchFieldException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> class1 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.cunyu.Person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Field</span> field1 <span class="token operator">=</span> class1<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Field</span> field2 <span class="token operator">=</span> class1<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Field</span> field3 <span class="token operator">=</span> class1<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">"rank"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220716-reflection/attr-fail1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/javase-tutorial/assets/20220716-reflection/attr-fail2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>从上面的结果分析可知，该方法只能用于获取类中指定名称的 <code v-pre>public</code> 所修饰的成员变量，对于 <code v-pre>protected</code>、<code v-pre>private</code> 所修饰的成员变量，该方法是无法获取的（<strong>包括父类</strong>）。而获取或设置成员变量值时，可以通过 <code v-pre>get/set</code> 方法来操作，具体操作方法如下。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 假设我们获取到的 Field 为上面的 id，获取和设置 id 的值就可以通过如下操作来进行</span>
<span class="token comment">// 1. 获取</span>
<span class="token class-name">Field</span> idField <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Object</span> idValue <span class="token operator">=</span> idField<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"id："</span> <span class="token operator">+</span> idValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2. 设置</span>
idField<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">"1312120"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"person："</span> <span class="token operator">+</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>Field[] getDeclaredFields()</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Demo2
 * <span class="token keyword">@date</span> : 2021/4/7 23:39
 * <span class="token keyword">@description</span> : Class 对象的使用
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">NoSuchFieldException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> class1 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.cunyu.Person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fields <span class="token operator">=</span> class1<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Field</span> field <span class="token operator">:</span> fields<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220716-reflection/field.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>观察上面的结果可知，该方法可用于获取所有的成员变量，不用考虑修饰符的限制（<strong>不包括父类</strong>）。</p>
<ul>
<li><code v-pre>Field getDeclaredField(String name)</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Demo2
 * <span class="token keyword">@date</span> : 2021/4/7 23:39
 * <span class="token keyword">@description</span> : Class 对象的使用
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">NoSuchFieldException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> class1 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.cunyu.Person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Field</span> field1 <span class="token operator">=</span> class1<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Field</span> field3 <span class="token operator">=</span> class1<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"rank"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Field</span> field2 <span class="token operator">=</span> class1<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220716-reflection/getDeclaredField.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>观察上面的结果可知，该方法可用于获取指定的成员变量，不用考虑成员变量修饰符的限制（<strong>不包括父类</strong>）。但是在利用 <code v-pre>set</code>、<code v-pre>get</code> 方法来获取和设置 <code v-pre>private</code>、<code v-pre>protected</code> 修饰的成员变量时，需要利用 <code v-pre>setAccessible()</code> 来忽略访问全新啊修饰符的安全检查，否则程序将会报错。</p>
<h4 id="获取构造方法" tabindex="-1"><a class="header-anchor" href="#获取构造方法" aria-hidden="true">#</a> 获取构造方法</h4>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>Constructor&lt;?&gt;[] getConstructors()</code></td>
<td>返回包含一个数组 <code v-pre>Constructor</code>对象反射由此表示的类的所有公共构造类对象</td>
</tr>
<tr>
<td><code v-pre>Constructor&lt;T&gt; getConstructor(类&lt;?&gt;... parameterTypes)</code></td>
<td>返回一个 <code v-pre>Constructor</code> 对象，该对象反映 <code v-pre>Constructor</code>对象表示的类的指定的公共类函数</td>
</tr>
<tr>
<td><code v-pre>Constructor&lt;?&gt;[] getDeclaredConstructors()</code></td>
<td>返回一个反映 <code v-pre>Constructor</code> 对象表示的类声明的所有 <code v-pre>Constructor</code> 对象的数组类</td>
</tr>
<tr>
<td><code v-pre>Constructor&lt;T&gt; getDeclaredConstructor(类&lt;?&gt;... parameterTypes)</code></td>
<td>返回一个 <code v-pre>Constructor</code> 对象，该对象反映 <code v-pre>Constructor</code> 对象表示的类或接口的指定类函数</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Constructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationTargetException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Demo3
 * <span class="token keyword">@date</span> : 2021/4/8 13:28
 * <span class="token keyword">@description</span> : 构造对象获取
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">NoSuchMethodException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span><span class="token punctuation">,</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> <span class="token class-name">InstantiationException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> personClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.cunyu.Person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        1. 获取所有构造方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"所有构造方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Constructor</span><span class="token punctuation">[</span><span class="token punctuation">]</span> constructors <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Constructor</span> constructor <span class="token operator">:</span> constructors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

<span class="token comment">//        2. 获取指定构造方法</span>

<span class="token comment">//        空参构造方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"空参构造方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Constructor</span> constructor1 <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>constructor1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        带参构造方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"带参构造方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Constructor</span> constructor2 <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">long</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">long</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">float</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>constructor2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        获取构造方法后，可以利用它来创建对象</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"空参创建对象"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        第一种方法</span>
        <span class="token class-name">Object</span> person <span class="token operator">=</span> constructor1<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        第二种方法</span>
        <span class="token class-name">Object</span> person1 <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"带参创建对象"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> object <span class="token operator">=</span> constructor2<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"村雨遥"</span><span class="token punctuation">,</span> <span class="token number">1312020</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">99.0F</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220716-reflection/constructor.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>
<p><code v-pre>Constructor&lt;?&gt;[] getConstructors()</code></p>
<p>类似于通过 <code v-pre>Class</code> 实例来获取成员变量，该方法用于获取所有 <code v-pre>public</code> 所修饰的构造方法（<strong>包括父类</strong>）；</p>
</li>
<li>
<p><code v-pre>Constructor&lt;T&gt; getConstructor(类&lt;?&gt;... parameterTypes)</code></p>
</li>
</ul>
<p>该方法用于获取某一指定参数类型后的 <code v-pre>public</code> 所修饰的构造方法（<strong>包括父类</strong>）；</p>
<ul>
<li><code v-pre>Constructor&lt;?&gt;[] getDeclaredConstructors()</code></li>
</ul>
<p>该方法用于获取所有 <code v-pre>public</code> 所修饰的构造方法（<strong>不包括父类</strong>）；</p>
<ul>
<li><code v-pre>Constructor&lt;T&gt; getDeclaredConstructor(类&lt;?&gt;... parameterTypes)</code></li>
</ul>
<p>该方法用于获取某一指定参数类型后的 <code v-pre>public</code> 所修饰的构造方法（<strong>不包括父类</strong>）；</p>
<p>而获取到构造方法之后，我们就可以利用 <code v-pre>newInstance()</code> 方法来创建类的实例。特殊的，如果我们的构造方法是无参的，此时则可以直接利用 <code v-pre>Class.newInstance()</code> 来构造实例。</p>
<h4 id="获取成员方法" tabindex="-1"><a class="header-anchor" href="#获取成员方法" aria-hidden="true">#</a> 获取成员方法</h4>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>Method[] getMethods()</code></td>
<td>返回包含一个数组 方法对象反射由此表示的类或接口的所有公共方法 类对象，包括那些由类或接口和那些从超类和超接口继承的声明</td>
</tr>
<tr>
<td><code v-pre>Method getMethod(String name, 类&lt;?&gt;... parameterTypes)</code></td>
<td>返回一个方法对象，它反映此表示的类或接口的指定公共成员方法 类对象</td>
</tr>
<tr>
<td><code v-pre>Method[] getDeclaredMethods()</code></td>
<td>返回包含一个数组方法对象反射的类或接口的所有声明的方法，通过此表示 类对象，包括公共，保护，默认（包）访问和私有方法，但不包括继承的方法</td>
</tr>
<tr>
<td><code v-pre>Method getDeclaredMethod(String name, 类&lt;?&gt;... parameterTypes)</code></td>
<td>返回一个方法对象，它反映此表示的类或接口的指定声明的方法类对象</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationTargetException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Demo4
 * <span class="token keyword">@date</span> : 2021/4/8 13:51
 * <span class="token keyword">@description</span> : 成员方法获取
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo4</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">NoSuchMethodException</span><span class="token punctuation">,</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> personClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.cunyu.Person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        获取所有 public 成员方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"获取所有成员方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

<span class="token comment">//        获取指定名称的方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"获取指定名称的方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Method</span> getAgeMethod <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"getAge"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>getAgeMethod<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        执行方法</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"村雨遥"</span><span class="token punctuation">,</span> <span class="token number">1312020</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">99.0F</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> getAgeMethod<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220716-reflection/getMethods.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li><code v-pre>Method[] getMethods()</code></li>
</ul>
<p>用于获取当前类的所有 <code v-pre>public</code> 所修饰的成员方法（<strong>包括父类</strong>）。</p>
<ul>
<li><code v-pre>Method getMethod(String name, 类&lt;?&gt;... parameterTypes)</code></li>
</ul>
<p>用于获取当前类的某一个指定名称 <code v-pre>public</code> 所修饰的成员方法（<strong>包括父类</strong>）。</p>
<ul>
<li><code v-pre>Method[] getDeclaredMethods()</code></li>
</ul>
<p>用于获取当前类的所有 <code v-pre>public</code> 所修饰的成员方法（<strong>不包括父类</strong>）。</p>
<ul>
<li><code v-pre>Method getDeclaredMethod(String name, 类&lt;?&gt;... parameterTypes)</code></li>
</ul>
<p>用于获取当前类的某一个指定名称 <code v-pre>public</code> 所修饰的成员方法（<strong>不包括父类</strong>）。</p>
<p>而当我们获取到类的成员方法后，如果要执行某一个方法，可以使用 <code v-pre>invoke()</code> 方法来执行该方法。</p>
<h4 id="获取类名" tabindex="-1"><a class="header-anchor" href="#获取类名" aria-hidden="true">#</a> 获取类名</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Demo5
 * <span class="token keyword">@date</span> : 2021/4/8 14:06
 * <span class="token keyword">@description</span> : 获取类名
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo5</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span> personClass <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> className <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220716-reflection/getName.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li><code v-pre>String getName()</code></li>
</ul>
<p>从上述程序的结果可知，当我们获取到 <code v-pre>Class</code> 对象之后，如果不知道类的全名，就可以使用 <code v-pre>getName()</code> 来获取该类的全名。</p>
<h2 id="反射实例" tabindex="-1"><a class="header-anchor" href="#反射实例" aria-hidden="true">#</a> 反射实例</h2>
<p>假设我们有如下需求：在不改变类的代码的前提下，我们能够创建任意类的对象，并执行其中的方法。</p>
<p>此时，我们可以通过 <strong>配置文件 + 反射</strong> 的方式来实现这一效果，而这也就是我们现在所用框架中的基础，当我们使用反射后，只需要通过修改配置文件中的内容就能够不用去改代码就实现对应的功能。</p>
<p>假设我们有两个类，一个 <code v-pre>Student</code>，一个 <code v-pre>Teacher</code>，两者的定义如下；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Teacher
 * <span class="token keyword">@date</span> : 2021/4/8 15:15
 * <span class="token keyword">@description</span> : 教师类
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">teach</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"教书育人……"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Student
 * <span class="token keyword">@date</span> : 2021/4/8 15:16
 * <span class="token keyword">@description</span> : 学生类
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> score<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"好好学习，天天向上……"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要实现我们的需求，通常需要如下步骤：</p>
<ol>
<li>将要创建对象的全类名和要执行的方法都配置在配置文件中；</li>
</ol>
<p>定义的配置文件 <code v-pre>prop.properties</code> ，其中主要内容包括 <code v-pre>className</code> 和 <code v-pre>methodName</code> 两个属性，分别代表类的全类名和要调用方法的名字。一个具体实例如下，分别代表名为 <code v-pre>Student</code> 的类和名为 <code v-pre>study</code> 的方法。</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">className</span><span class="token punctuation">=</span><span class="token value attr-value">com.cunyu.Student</span>
<span class="token key attr-name">methodName</span><span class="token punctuation">=</span><span class="token value attr-value">study</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>然后在主方法中加载读取配置文件；</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//        创建配置文件对象</span>
<span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        加载配置文件</span>
<span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> <span class="token class-name">ReflectTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> classLoader<span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"prop.properties"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        获取配置文件中定义的数据</span>
<span class="token class-name">String</span> className <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"className"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> methodName <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"methodName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>利用反射技术将类加载到内存中；</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//        加载进内存</span>
<span class="token class-name">Class</span> name <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>接着利用 <code v-pre>newInstance()</code> 方法创建对象；</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//        创建实例</span>
<span class="token class-name">Object</span> object <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>最后则是利用 <code v-pre>invoke()</code> 方法来执行方法；</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//        获取并执行方法</span>
<span class="token class-name">Method</span> method <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span>methodName<span class="token punctuation">)</span><span class="token punctuation">;</span>
method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将整个流程汇总起来就是：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationTargetException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : ReflectTest
 * <span class="token keyword">@date</span> : 2021/4/8 15:27
 * <span class="token keyword">@description</span> : 测试
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReflectTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span><span class="token punctuation">,</span> <span class="token class-name">InstantiationException</span><span class="token punctuation">,</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> <span class="token class-name">NoSuchMethodException</span> <span class="token punctuation">{</span>
<span class="token comment">//        创建配置文件对象</span>
        <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        加载配置文件</span>
        <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> <span class="token class-name">ReflectTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> classLoader<span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"prop.properties"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        获取配置文件中定义的数据</span>
        <span class="token class-name">String</span> className <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"className"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> methodName <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"methodName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        加载进内存</span>
        <span class="token class-name">Class</span> name <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        创建实例</span>
        <span class="token class-name">Object</span> object <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        获取并执行方法</span>
        <span class="token class-name">Method</span> method <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span>methodName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，我们只需要改动配置文件 <code v-pre>prop.properties</code> 中的配置即可输出不同结果；</p>
<figure><img src="@source/javase-tutorial/assets/20220716-reflection/prop.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/javase-tutorial/assets/20220716-reflection/reflecttest.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>好了，感谢耐心看到这里的各位。如果您觉得本文对您有所帮助，那就给我点个赞吧！</p>
<p>最后，对于文中知识点有错误或欠缺的地方，还请大家见谅，欢迎大家评论留言给我指正~</p>
<p><strong>关注公众号，获取最新文章更新</strong></p>
<div style="text-align:center">
<figure><img src="https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif" alt="" width="200" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<Share colorful /></div></template>


