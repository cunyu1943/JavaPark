<template><div><h1 id="类的相关知识" tabindex="-1"><a class="header-anchor" href="#类的相关知识" aria-hidden="true">#</a> 类的相关知识</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/1BPFnyNuC3fdYBVxP7J3VA" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/1BPFnyNuC3fdYBVxP7J3VA<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>学习了面向对象编程的思想，今天就来看看面向对象编程思想在 Java 中的体现 - 类。以及有关类的相关知识，比如属性、方法、引用等。</p>
<h2 id="类与对象" tabindex="-1"><a class="header-anchor" href="#类与对象" aria-hidden="true">#</a> 类与对象</h2>
<p>以我们日常生活为例，我们现在很多人都养宠物，而宠物 <strong>都有一些共同状态</strong>，比如名字、毛色、年龄…… 这样一来我们就可以设计一个叫做<strong>类</strong>的东西，用来 <strong>代表宠物</strong> 这一类事物。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span><span class="token punctuation">{</span>
    <span class="token comment">// 名字</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">// 毛色</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> furColor<span class="token punctuation">;</span>

    <span class="token comment">// 年龄</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了这个类之后，它就相当于我们的一个模板，根据这个模板我们就能够创建一个个具体的宠物，而这些宠物，就叫做 <strong>对象</strong>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span><span class="token punctuation">{</span>
    <span class="token comment">// 名字</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">// 毛色</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> furColor<span class="token punctuation">;</span>

    <span class="token comment">// 年龄</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建一个对象</span>
        <span class="token class-name">Pet</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dog<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"博美"</span><span class="token punctuation">;</span>
        dog<span class="token punctuation">.</span>furColor <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">;</span>
        dog<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token class-name">Pet</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cat<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"英短"</span><span class="token punctuation">;</span>
        cat<span class="token punctuation">.</span>furColor <span class="token operator">=</span> <span class="token string">"orange"</span><span class="token punctuation">;</span>
        cat<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结起来，类就是对对象所共有特征的描述，而对象则是真实存在的具体实例。在 Java 中，必须先设计类，然后才能创建并使用对象。</p>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p>每个宠物都有自己的名字、毛色和年龄等一系列状态，而这些状态就叫做一个类的<strong>属性</strong>。而属性的类型既可以是基本类型（比如上述例子中的 <code v-pre>int</code>），也可以是引用类型（上述例子中的 <code v-pre>String</code>）。而在 Java 语言中，这些属性就叫做成员变量。成员变量的命名虽然没有强制规定，但是一般都是有一套大家通用的命名方法，即：</p>
<blockquote>
<p>若成员变量是一个单词组成，那么一般都是小写。</p>
<p>若成员变量是多个单词组成，那么则采用驼峰法。</p>
<p>关于更多的命名规定，推荐参考阿里巴巴出品的 《Java 开发手册》，下载地址：<a href="https://github.com/cunyu1943/ebooks" target="_blank" rel="noopener noreferrer">https://github.com/cunyu1943/ebooks<ExternalLinkIcon/></a></p>
</blockquote>
<p>成员变量的完整定义格式语如下，一般来说无需指定初始化值，它是存在默认值的。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>修饰符 数据类型 变量名 <span class="token operator">=</span> 初始化值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>数据类型</th>
<th>明细</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>基本类型</td>
<td><code v-pre>byte</code>、<code v-pre>short</code>、<code v-pre>char</code>、<code v-pre>int</code>、<code v-pre>long</code></td>
<td>0</td>
</tr>
<tr>
<td>基本类型</td>
<td><code v-pre>float</code>、<code v-pre>double</code></td>
<td>0.0</td>
</tr>
<tr>
<td>基本类型</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>引用类型</td>
<td>类、接口、数组、<code v-pre>String</code></td>
<td><code v-pre>null</code></td>
</tr>
</tbody>
</table>
<p>要访问属性，通常需要先创建一个对象，然后通过<strong>对象名.成员变量</strong>的方式来进行访问。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<h3 id="方法的定义" tabindex="-1"><a class="header-anchor" href="#方法的定义" aria-hidden="true">#</a> 方法的定义</h3>
<p>而除开属性之后，每个对象还能够有许多其他的功能，就像宠物都能吃东西、会叫……，那么这些他们能够做的事情，在类里边就可以用 <strong>方法</strong> 来进行表示。所谓方法就是程序中最小的执行单元，一般用于封装重复且具有独立功能的代码，从而提高代码的复用性和可维护性。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span><span class="token punctuation">{</span>
    <span class="token comment">// 名字</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">// 毛色</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> furColor<span class="token punctuation">;</span>

    <span class="token comment">// 年龄</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">// 吃东西对应的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"吃东西！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 吠叫对应的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"吠叫！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法的定义格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>修饰符 返回值类型 方法名<span class="token punctuation">(</span>形参列表<span class="token punctuation">)</span><span class="token punctuation">{</span>
    方法体代码<span class="token punctuation">(</span>需要执行的功能代码<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> 返回值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，修饰符主要有以下 4 种不同的访问权限：</p>
<ol>
<li><code v-pre>default</code>：默认什么都不写的情况，表示在同一个包内可见，主要用于修饰类、接口、变量、方法。</li>
<li><code v-pre>private</code>：表示在同一类中可见，常用于修饰变量和方法，但要注意，它不能用来修饰类（外部类）。</li>
<li><code v-pre>protected</code>：表示对同一个包内的类和所有子类可见，常用于修饰变量、方法，同样的，它也不能修饰类（外部类）。</li>
<li><code v-pre>public</code>：表示对所有类可见，常用于修饰类、接口、变量、方法。</li>
</ol>
<table>
<thead>
<tr>
<th>修饰符</th>
<th>当前类</th>
<th>同一包内</th>
<th>子类（同一包）</th>
<th>子类（不同包）</th>
<th>其他包</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>private</code></td>
<td>✅</td>
<td>❎</td>
<td>❎</td>
<td>❎</td>
<td>❎</td>
</tr>
<tr>
<td><code v-pre>default</code></td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>❎</td>
<td>❎</td>
</tr>
<tr>
<td><code v-pre>protected</code></td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>❎</td>
</tr>
<tr>
<td><code v-pre>public</code></td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
</tbody>
</table>
<p>同样的，和属性一样，如果要调用一个方法，那么也需要先创建一个 Java 对象，然后通过**对象名.方法名(……)**的形式调用。</p>
<h3 id="方法的分类" tabindex="-1"><a class="header-anchor" href="#方法的分类" aria-hidden="true">#</a> 方法的分类</h3>
<p>而对于方法，也有需要注意的几点：</p>
<ol>
<li>方法是可以有返回值的，如果要返回对应值，则其返回值的类型要与返回值相对于，对于不需要返回值的方法，则将其返回类型设置为 <code v-pre>void</code>；</li>
<li>方法是可以有参数的，我们上述例子的方法中都是不带参数的，但如果我们有需要，就可以加上自己需要的参数，但此时注意要带上参数的类型；</li>
</ol>
<p>总结起来，可以分为如下四种方法：</p>
<ol>
<li><strong>无参无返回值</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>无参有返回值</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">methodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    ……
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><strong>有参无返回值</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li><strong>有参有返回值</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">methodName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    ……
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span><span class="token punctuation">{</span>
    <span class="token comment">// 名字</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">// 毛色</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> furColor<span class="token punctuation">;</span>

    <span class="token comment">// 年龄</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">// 具有返回值的方法</span>
    <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 带有参数的方法</span>
    <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 吃东西对应的方法</span>
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"吃东西！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 叫唤对应的方法</span>
    <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"叫唤！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而对于方法命名的方式，也是有一定讲究的。因为一般而言方法都是一个类的动作行为，所以 <strong>一般都是以动词开头，而如果有多个单词组合，则除开第一个单词全部小写之外，后面每个单词的第一个字母都要使用大写</strong>。</p>
<p>注意到这里有个关键字 <code v-pre>return</code>，它主要用于设置方法的返回。</p>
<p>如果一个方法没有返回值，那么此时可以省略不写，一旦书写，那么就代表着该方法结束。比如，以下这个方法的两种书写方式最终效果都是一样的。</p>
<ul>
<li>带 <code v-pre>return</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"开火……"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>不带 <code v-pre>return</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"开火……"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而如果一个方法有返回值，那么此时 <code v-pre>return</code> 就必须写，它表示结束方法并返回结果。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重写与重载" tabindex="-1"><a class="header-anchor" href="#重写与重载" aria-hidden="true">#</a> 重写与重载</h3>
<p>此外，既然提到了方法，那肯定少不了重写和重载了，下面就来看看重写和重载之间的区别。</p>
<ol>
<li><strong>重写</strong></li>
</ol>
<p>所谓重写，其实就是子类对父类中允许访问的方法的实现过程进行加工重新编写，是面向对象编程中多态性的体现，通常发生在父类和子类之间。</p>
<p>重写时，方法的参数和返回值都不能改变。通过重写，子类可以根据自己的需要，从而去重新定义区别于父类的行为。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"战斗"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>pubilc <span class="token keyword">class</span> <span class="token class-name">Shooter</span> <span class="token keyword">extends</span> <span class="token class-name">Hero</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"远程战斗"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>重载</strong></li>
</ol>
<p>而重载则是让类以统一的方式来处理不同类型数据的一种方式。一个类中存在多个同名方法，但他们具有不同的参数个数或者类型。</p>
<p>简单来说，就是在 Java 的一个类中，我们可以创建多个相同名字的方法，但是这些方法之间的参数和返回值有所不同。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Calc</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">,</span> <span class="token keyword">int</span> num3<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2 <span class="token operator">+</span> num3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">double</span> num1<span class="token punctuation">,</span> <span class="token keyword">double</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数传递机制" tabindex="-1"><a class="header-anchor" href="#参数传递机制" aria-hidden="true">#</a> 参数传递机制</h3>
<p>了解参数传递前，先来了解下形参和实参的相关概念。</p>
<p><strong>实参</strong>，指在调用时所传递给方法的参数，可以是常量、变量、表达式、函数等。无论实参是何种类型的值，在进行方法调用时，都必须有确定的值，从而将这些值传递给形参。</p>
<p><strong>形参</strong>，在方法定义时，<code v-pre>()</code> 中所声明的参数，目的是用来接收调用方法时传入的参数。不是实际存在的变量，所以又叫做虚拟变量。</p>
<p>Java 中，方法的参数传递都是通过<strong>值传递</strong>的机制来实现的。所谓值传递，就是在传输实参给方法的形参时，并非传输的是实参变量本身，而是通过传输实参变量中所存储的值。</p>
<p>但是要注意区分的是，Java 中的<strong>基本数据类型的参数传输的是存储的数据值</strong>，而<strong>引用类型的参数传输的是存储的地址值</strong>。</p>
<h2 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h2>
<p>上面我们说了实例（也就是对象）和属性，那么当我们创建一个实例的时候，通常我们想要把它的属性也给它设置好。为了实现这一功能，这时候我们可以添加方法，从而达到这一目的，以上述设置宠物的年龄为例。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 首先创建一个实例</span>
<span class="token class-name">Pet</span> pet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 接着调用方法设置年龄</span>
pet<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 查看设置年龄是否成功</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pet<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现通过上述调用方法的方式是可以完成这一目的的，但假设我们需要设置的属性很多，此时要全部设置属性值时就需要调用许多次 <code v-pre>setter</code> 方法，一旦遗漏一个，则实例内部状态就紊乱了。那我们就想了，有没有一种简单点的方法，能够让我们在创建实例对象的同时就把内部属性初始化了呢？</p>
<p>答案是：Yes！🎉🎉🎉</p>
<p>这时候我们就可以用到一类特殊的方法 - <strong>构造方法</strong>，所谓构造方法，就是定义在类中可以用来初始化一个类的对象，并返回对象的地址，以下就来看看这个构造方法的特殊之处。构造方法的格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>修饰符 类名<span class="token punctuation">(</span>形参列表<span class="token punctuation">)</span><span class="token punctuation">{</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实在上面我们创建实例的时候就已经调用了构造方法了，只不过它是没有带任何参数的构造方法。以上述动物类 <code v-pre>Pet</code> 为实例，我们来看看如何编写它的构造方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span><span class="token punctuation">{</span>
        <span class="token comment">// 名字</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">// 毛色</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> furColor<span class="token punctuation">;</span>

    <span class="token comment">// 年龄</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">// 无参构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 带参构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> furColor<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>furColor <span class="token operator">=</span> furColor<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上我们只是给出了无参的构造方法和带了所有属性的构造方法，除了上面的两个构造方法之外，我们还可以根据需要创建带有部分属性的构造方法。</p>
<p>其中，无参构造方法（默认存在）在初始化对象时，成员变量的数据均采用的默认值，而有参构造方法在初始化对象时，同时可以接收参数来给对象赋值。</p>
<p>经过对比可以发现，相比于普通的方法，构造方法有着明显的特点：</p>
<ol>
<li><strong>没有返回值</strong>：是的，无论是带参还是不带参的构造函数，它们都是没有返回值的，而它也是 <strong>每个类默认的构造方法</strong>。</li>
<li><strong>方法名同类名一样</strong>：必须确保构造方法的名字和类名一致，否则它就不是构造方法了。</li>
</ol>
<p>有了构造方法之后，我们创建实例时就可以直接给它初始化了，而不用再去麻烦地调用各个 <code v-pre>setter</code> 方法来初始化实例。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 调用无参构造方法</span>
<span class="token class-name">Pet</span> pet1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 调用有参构造方法</span>
<span class="token class-name">Pet</span> pet2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token string">"柯基"</span><span class="token punctuation">,</span> <span class="token string">"黄色"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🎈 Tips：对于实例的属性值，在未经构造方法初始化时，各数据类型都有默认值，整型默认值为 <code v-pre>0</code>，浮点型默认值为 <code v-pre>0.0</code>，布尔类型默认值为 <code v-pre>false</code>，引用类型默认值为 <code v-pre>null</code>。</p>
<h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2>
<p>既然知道了什么是面向对象以及面向对象中的一些关键知识点如对象、属性、方法的概念，那我们就趁热来看看啥是引用。</p>
<p>所谓引用，其实在之前学习的时候就已经涉及到了。你是否还记得 <code v-pre>String</code> 这个特殊的数据类型，其实在我们创建一个 <code v-pre>String</code> 对象时，也就创建了一个引用。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"村雨遥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code v-pre>str</code> 既是一个变量，也是一个引用，指向一个值为 <code v-pre>&quot;村雨遥&quot;</code> 的 <code v-pre>String</code> 对象，后续如果我们要访问这个 <code v-pre>String</code> 对象，就需要使用 <code v-pre>str</code> 这个引用来代表它。</p>
<figure><img src="@source/java-tutorial/javase/assets/20220710-oop-2/str.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>以上我们说的是一个引用指向一个对象，但是我们也可以用多个引用指向同一个对象。就好比你家买了一辆车，不仅你可以开，你老婆也可以开，你爸妈也可以开。而这时候的车就好比一个“对象”，而使用它的人就是多个“引用”。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 对象 1</span>
<span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"村雨遥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 对象 2</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> str1<span class="token punctuation">;</span>
<span class="token comment">// 对象 3</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> str1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase/assets/20220710-oop-2/reference.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="javabean" tabindex="-1"><a class="header-anchor" href="#javabean" aria-hidden="true">#</a> JavaBean</h2>
<p><code v-pre>JavaBean</code> 也可以称为实体类，其对象可以用在程序中封装数据。对于一个标准的 <code v-pre>JavaBean</code>，定义时需要满足以下要求：</p>
<ul>
<li>成员变量均使用 <code v-pre>private</code> 修饰。</li>
<li>提供成员变量所对应的 <code v-pre>getXxx()/setXxx()</code> 方法。</li>
<li>必须提供一个标准的无参构造器，而有参构造器则是可写可不写。</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>今天的内容就到此结束了，主要对面向对象中的类、对象、属性、方法、构造方法以及引用做了介绍，关于更多面向对象的知识，我们下一篇文章再见！</p>
<Share colorful /></div></template>


