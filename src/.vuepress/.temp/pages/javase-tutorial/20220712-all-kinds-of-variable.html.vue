<template><div><h1 id="成员变量、实例变量、静态变量、局部变量" tabindex="-1"><a class="header-anchor" href="#成员变量、实例变量、静态变量、局部变量" aria-hidden="true">#</a> 成员变量、实例变量、静态变量、局部变量</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>学习 Java 的过程中，一开始很容易被这些各种变量绕晕，这篇博客主要介绍了这几种变量之间的关系和区别。</p>
<h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu<span class="token punctuation">.</span>demo</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>  <span class="token comment">//成员变量、实例变量</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>  <span class="token comment">//成员变量、实例变量</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token constant">ID</span><span class="token punctuation">;</span>  <span class="token comment">//成员变量、实例变量</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> school <span class="token operator">=</span> <span class="token string">"卡塞尔学院"</span><span class="token punctuation">;</span>  <span class="token comment">//成员变量、静态变量(类变量)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> level <span class="token operator">=</span> <span class="token string">"SSS"</span><span class="token punctuation">;</span>    <span class="token comment">//成员变量、静态变量(类变量)</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">ID</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token constant">ID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">ID</span> <span class="token operator">=</span> <span class="token constant">ID</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">String</span> subject1 <span class="token operator">=</span> <span class="token string">"屠龙"</span><span class="token punctuation">;</span>  <span class="token comment">//局部变量</span>
            <span class="token class-name">String</span> subject2 <span class="token operator">=</span> <span class="token string">"炼金术"</span><span class="token punctuation">;</span> <span class="token comment">//局部变量</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"学习科目： "</span> <span class="token operator">+</span> subject1 <span class="token operator">+</span> <span class="token string">"、"</span> <span class="token operator">+</span> subject2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Demo</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        demo<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        demo<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">14000001</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        demo<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"楚子航"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ID: "</span> <span class="token operator">+</span> demo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"Age: "</span> <span class="token operator">+</span> demo<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"Name: "</span> <span class="token operator">+</span> demo<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"主修科目： "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        demo<span class="token punctuation">.</span><span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"学院："</span> <span class="token operator">+</span> <span class="token class-name">Demo</span><span class="token punctuation">.</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"等级："</span> <span class="token operator">+</span> <span class="token class-name">Demo</span><span class="token punctuation">.</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="各变量联系与区别" tabindex="-1"><a class="header-anchor" href="#各变量联系与区别" aria-hidden="true">#</a> 各变量联系与区别</h2>
<h3 id="成员变量" tabindex="-1"><a class="header-anchor" href="#成员变量" aria-hidden="true">#</a> 成员变量</h3>
<p>作用范围是整个类，相当于 C 语言中的全局变量，定义在方法体和语句块之外，一般定义在类的声明之下；成员变量包括实例变量和静态变量(类变量)。</p>
<h3 id="实例变量" tabindex="-1"><a class="header-anchor" href="#实例变量" aria-hidden="true">#</a> 实例变量</h3>
<p>独立于与方法之外的变量，无 <code v-pre>static</code> 修饰，声明在一个类中，但在方法、构造方法和语句块之外，数值型变量默认值为 0，布尔型默认值为 <code v-pre>false</code>，引用类型默认值为 <code v-pre>null</code>。</p>
<h3 id="静态变量-类变量" tabindex="-1"><a class="header-anchor" href="#静态变量-类变量" aria-hidden="true">#</a> 静态变量(类变量)</h3>
<p>独立于方法之外的变量，用 <code v-pre>static</code> 修饰，默认值与实例变量相似，一个类中只有一份，属于对象共有，存储在静态存储区，经常被声明为常量，调用一般是类名.静态变量名，也可以用对象名.静态变量名调用。</p>
<h3 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h3>
<p>类的方法中的变量，访问修饰符不能用于局部变量，声明在方法、构造方法或语句块中，在栈上分配，无默认值，必须经初始化。</p>
<h3 id="成员变量-vs-局部变量" tabindex="-1"><a class="header-anchor" href="#成员变量-vs-局部变量" aria-hidden="true">#</a> 成员变量 VS 局部变量</h3>
<table>
<thead>
<tr>
<th>区别</th>
<th>成员变量</th>
<th>局部变量</th>
</tr>
</thead>
<tbody>
<tr>
<td>类中位置不同</td>
<td>类中、方法外</td>
<td>方法中</td>
</tr>
<tr>
<td>初始化值不同</td>
<td>有初始值，无需初始化</td>
<td>无默认值，使用前需完成赋值</td>
</tr>
<tr>
<td>内存位置不同</td>
<td>堆内存</td>
<td>栈内存</td>
</tr>
<tr>
<td>生命周期不同</td>
<td>随对象创建而存在，随对象的消失而消失</td>
<td>随方法的调用而存在，随方法的运行结束而消失</td>
</tr>
<tr>
<td>作用域</td>
<td></td>
<td>所属大括号</td>
</tr>
</tbody>
</table>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>以上就是关于 Java 编程中，静态变量、类变量、实例变量、局部变量以及成员变量之间的相关区别了。读完本文，你是否对这几个变量之间能进行一定程度上的区分了呢？</p>
<p><strong>关注公众号，获取最新文章更新</strong></p>
<div style="text-align:center">
<figure><img src="https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif" alt="" width="200" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<Share colorful /></div></template>


