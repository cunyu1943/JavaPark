<template><div><h1 id="变量与数据类型" tabindex="-1"><a class="header-anchor" href="#变量与数据类型" aria-hidden="true">#</a> 变量与数据类型</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>原文：<a href="https://mp.weixin.qq.com/s/Yz41IdWSNTgqgj0R-Ffgqw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/Yz41IdWSNTgqgj0R-Ffgqw<ExternalLinkIcon/></a></p>
</div>
<h2 id="前情回顾" tabindex="-1"><a class="header-anchor" href="#前情回顾" aria-hidden="true">#</a> 前情回顾</h2>
<p>在之前的文章中，我们已经介绍了如何搭建 Java 开发环境以及如何使用 IDEA，现在就开始正式学习 Java 语言的相关语法吧！😎</p>
<p>本期内容预告如下：</p>
<ol>
<li><strong>变量</strong></li>
<li><strong>数据类型</strong></li>
<li><strong>变量作用域</strong></li>
<li><strong>常量</strong></li>
</ol>
<p>本文将主要从以上四个方面出发，带领大家来看一下 Java 中的变量和数据类型。</p>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<h3 id="什么是变量" tabindex="-1"><a class="header-anchor" href="#什么是变量" aria-hidden="true">#</a> 什么是变量？</h3>
<p>所谓变量，就是用来命名一个数据的标识符，其定义格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>数据类型 变量名称 <span class="token operator">=</span> 初始值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中数据类型是用于限制存储数据的形式，后面会讲到 Java 中的常见数据类型；变量名称是用于代表变量的一个符号，就好比我们每个人的名字；初始值则代表该变量存储时的初始数据。</p>
<p>在 Java 中，变量主要分为两种：</p>
<ul>
<li><strong>基本类型的变量</strong></li>
<li><strong>引用类型的变量</strong></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 基本类型的变量</span>
<span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// 引用类型的变量</span>
<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code v-pre>int</code> 是基本数据类型，表示这是一个整型数；而 <code v-pre>String</code> 则是引用类型，表示这是一个引用类型；</p>
<p><code v-pre>id</code> 和 <code v-pre>name</code> 则是标识符，也就是我们所说的 <strong>变量</strong>；</p>
<p><code v-pre>=</code> 则是赋值操作符，而 <code v-pre>1</code> 则是基本类型的值，<code v-pre>村雨遥</code> 则是引用类型的值；</p>
<h3 id="变量的特点" tabindex="-1"><a class="header-anchor" href="#变量的特点" aria-hidden="true">#</a> 变量的特点</h3>
<p>在使用变量时，需要注意以下的几个问题。</p>
<ol>
<li>变量一定要先声明然后再使用。</li>
<li>声明一个变量的类型后，不能用它来存储其类型的数据。</li>
<li>变量定义时可以不赋初始值，但是在使用时必须赋值。</li>
<li>变量是有使用范围的，在同一使用范围内，不能重复定义同一个变量。</li>
<li>变量最重要的一个特点就是可以重新赋值。</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 定义int类型变量id，并赋予初始值1</span>
        <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token comment">// 打印该变量的值，观察是否为1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
 		<span class="token comment">// 重新赋值为2</span>
        id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token comment">// 打印该变量的值，观察是否为2</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量命名规则" tabindex="-1"><a class="header-anchor" href="#变量命名规则" aria-hidden="true">#</a> 变量命名规则</h3>
<p>变量命名也是一门学问，并不是我们想怎么命名就怎么命名，日常开发中最常见的变量命名规则主要有如下几条：</p>
<ol>
<li><strong>强制</strong>：变量命名只能使用 <strong>字母（大小写均可）、数字、$、_</strong>；</li>
<li><strong>强制</strong>：变量名不能使用关键字（就是 Java 中内置的一些关键字，如 <code v-pre>int、for、long…</code>）；</li>
<li><strong>强制</strong>：变量第一个字符不能使用数字，只能用字母、<code v-pre>$</code>、<code v-pre>_</code>；</li>
<li>更多命名规则推荐参考阿里巴巴推出的《Java 开发手册》，下载链接：<a href="https://github.com/cunyu1943/ebooks" target="_blank" rel="noopener noreferrer">https://github.com/cunyu1943/ebooks<ExternalLinkIcon/></a></li>
</ol>
<h3 id="常见关键字" tabindex="-1"><a class="header-anchor" href="#常见关键字" aria-hidden="true">#</a> 常见关键字</h3>
<p>这是一种事先定义好的，有特定意义的标识符，也叫做保留字。对于 Java 编译器有着特殊意义，用来表示一种数据类型，或者表示程序的结构等。此外，关键字不能用作变量名、方法名、类名、包名和参数名。常见的关键字可以分为如下几类，具体的关键字如下图所示：</p>
<ul>
<li><strong>访问控制类</strong></li>
<li><strong>类、方法及变量修饰符类</strong></li>
<li><strong>程序控制类</strong></li>
<li><strong>错误处理</strong></li>
<li><strong>包相关</strong></li>
<li><strong>基本类型</strong></li>
<li><strong>变量引用</strong></li>
<li><strong>保留字</strong></li>
</ul>
<!-- ![](https://img-blog.csdnimg.cn/9f8fed4aeeda4dea9d1de0ff7677ca4a.png) -->
<figure><img src="@source/java-tutorial/javase/assets/20220704-variable-and-datatype/java-key-words.png" alt="Java 关键字" tabindex="0" loading="lazy"><figcaption>Java 关键字</figcaption></figure>
<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h3>
<p>Java 中，共有 8 种基本数据类型，由 Java 语言预定好的，每个数据类型都属于关键字，而且每种基本变量都有其对应的封装类，这 8 种基本数据类型分别是：</p>
<ul>
<li><strong>整型（4 种）</strong></li>
<li><strong>浮点型（2 种）</strong></li>
<li><strong>字符型（1 种）</strong></li>
<li><strong>布尔型（1 种）</strong></li>
</ul>
<p>下面的表就是 Java 中 8 大数据类型所占的内存空间，对应封装类，数据表示范围以及默认值的一下相关情况。</p>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>bit</th>
<th>字节</th>
<th>封装类</th>
<th>数据范围</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>byte</code></td>
<td>8</td>
<td>1</td>
<td><code v-pre>Byte</code></td>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mn>7</mn></msup></mrow><annotation encoding="application/x-tex">-2^7</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">7</span></span></span></span></span></span></span></span></span></span></span> ~ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>7</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^7-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">7</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td><code v-pre>short</code></td>
<td>16</td>
<td>2</td>
<td><code v-pre>Short</code></td>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mn>15</mn></msup></mrow><annotation encoding="application/x-tex">-2^{15}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">15</span></span></span></span></span></span></span></span></span></span></span></span> ~ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>15</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{15}-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">15</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td><code v-pre>char</code></td>
<td>16</td>
<td>2</td>
<td><code v-pre>Character</code></td>
<td><code v-pre>\u0000</code> ~ <code v-pre>\uffff</code>（<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn></mrow><annotation encoding="application/x-tex">0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> ~ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>65535</mn></mrow><annotation encoding="application/x-tex">65535</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">65535</span></span></span></span>）</td>
<td><code v-pre>u0000</code></td>
</tr>
<tr>
<td><code v-pre>int</code></td>
<td>32</td>
<td>4</td>
<td><code v-pre>Integer</code></td>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mn>31</mn></msup></mrow><annotation encoding="application/x-tex">-2^{31}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">31</span></span></span></span></span></span></span></span></span></span></span></span> ~ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>31</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{31}-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">31</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td><code v-pre>long</code></td>
<td>64</td>
<td>8</td>
<td><code v-pre>Long</code></td>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mn>63</mn></msup></mrow><annotation encoding="application/x-tex">-2^{63}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">63</span></span></span></span></span></span></span></span></span></span></span></span> ~ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>63</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{63}-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">63</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
<td><code v-pre>0L</code></td>
</tr>
<tr>
<td><code v-pre>float</code></td>
<td>32</td>
<td>4</td>
<td><code v-pre>Float</code></td>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1.4</mn><msup><mi>e</mi><mrow><mo>−</mo><mn>45</mn></mrow></msup></mrow><annotation encoding="application/x-tex">1.4e^{-45}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1.4</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">45</span></span></span></span></span></span></span></span></span></span></span></span> ~ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>3.4</mn><msup><mi>e</mi><mn>38</mn></msup></mrow><annotation encoding="application/x-tex">3.4e^{38}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">3.4</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">38</span></span></span></span></span></span></span></span></span></span></span></span></td>
<td><code v-pre>0.0f</code></td>
</tr>
<tr>
<td><code v-pre>double</code></td>
<td>64</td>
<td>8</td>
<td><code v-pre>Double</code></td>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>4.9</mn><msup><mi>e</mi><mrow><mo>−</mo><mn>324</mn></mrow></msup></mrow><annotation encoding="application/x-tex">4.9e^{-324}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">4.9</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">324</span></span></span></span></span></span></span></span></span></span></span></span> ~ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1.8</mn><msup><mi>e</mi><mn>308</mn></msup></mrow><annotation encoding="application/x-tex">1.8e^{308}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1.8</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">308</span></span></span></span></span></span></span></span></span></span></span></span></td>
<td><code v-pre>0.0D</code></td>
</tr>
<tr>
<td><code v-pre>boolean</code></td>
<td>1</td>
<td>不确定</td>
<td><code v-pre>Boolean</code></td>
<td><code v-pre>true</code> 或 <code v-pre>false</code></td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<p><strong>注意：</strong></p>
<ol>
<li><code v-pre>boolean</code> 一般用 1 <code v-pre>bit</code> 来存储，但是具体大小并未规定，JVM 在编译期将 <code v-pre>boolean</code> 类型转换为 <code v-pre>int</code>，此时 1 代表 <code v-pre>true</code>，<code v-pre>0</code> 代表 <code v-pre>false</code>。此外，JVM 还指出 <code v-pre>boolean</code> 数组，但底层是通过 <code v-pre>byte</code> 数组来实现。</li>
<li>使用 <code v-pre>long</code> 类型时，需要在后边加上 <code v-pre>L/l</code>，否则将其作为整型解析，可能会导致越界。</li>
<li>浮点数如果没有明确指定 <code v-pre>float</code> 还是 <code v-pre>double</code>，统一按 <code v-pre>double</code> 处理。</li>
<li><code v-pre>char</code> 是用 <strong>单引号 <code v-pre>''</code></strong> 将内容括起来，<strong>只能存放一个字符</strong>，相当于一个整型值（ASCII 值），能够参加表达式运算；而 <code v-pre>String</code> 是用 <strong>双引号 <code v-pre>&quot;&quot;</code></strong> 将内容括起来，代表的是一个地址值。</li>
<li><code v-pre>Java</code> 在内存中是采用 <code v-pre>Unicode</code> 表示，所以无论是一个中文字符还是英文字符，都能用 <code v-pre>char</code> 来表示。</li>
</ol>
<p>那么如何个一个基本类型变量赋值呢？</p>
<p>在 <code v-pre>Java</code> 中，基本数据类型属于 <code v-pre>Java</code> 的一种内置的特殊数据类型，不属于任何类，所以可以直接对其进行赋值；给基本类型的变量赋值的方式就叫做 <strong>字面值</strong>；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">float</span> score <span class="token operator">=</span> <span class="token number">89.0f</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用数据类型" tabindex="-1"><a class="header-anchor" href="#引用数据类型" aria-hidden="true">#</a> 引用数据类型</h3>
<h4 id="常见引用数据类型" tabindex="-1"><a class="header-anchor" href="#常见引用数据类型" aria-hidden="true">#</a> 常见引用数据类型</h4>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>数组</td>
<td><code v-pre>null</code></td>
</tr>
<tr>
<td>类</td>
<td><code v-pre>null</code></td>
</tr>
<tr>
<td>接口</td>
<td><code v-pre>null</code></td>
</tr>
</tbody>
</table>
<p>而对于引用数据类型，我们经常是需要 <code v-pre>new</code> 关键字来进行赋值，但是引用类型中的 <strong>接口是不能被实例化的，我们需要对其进行实现</strong>；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 初始化一个对象</span>
<span class="token class-name">Pet</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 初始化一个数组</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h4>
<p>对于引用数据类型中的 <code v-pre>String</code>，我们需要特别关注。</p>
<p><code v-pre>String</code> 不同于 <code v-pre>char</code>，它属于引用类型，而 <code v-pre>char</code> 属于基本数据类型。用双引号 <code v-pre>&quot;&quot;</code> 括起来表示字符串，一个字符串能够保存 0 个到任意个字符，它一旦创建就不能被改变。</p>
<p>而针对字符串，如果我们要打印一些特殊的字符，比如字符串本来就包含 <code v-pre>&quot;</code>，那么这个时候就需要借助于转义字符 <code v-pre>\</code>，最常见的转义字符主要有：</p>
<table>
<thead>
<tr>
<th>转义字符</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>\&quot;</code></td>
<td>字符 <code v-pre>&quot;</code></td>
</tr>
<tr>
<td><code v-pre>\'</code></td>
<td>字符 <code v-pre>'</code></td>
</tr>
<tr>
<td><code v-pre>\\</code></td>
<td>字符 <code v-pre>\</code></td>
</tr>
<tr>
<td><code v-pre>\n</code></td>
<td>换行符</td>
</tr>
<tr>
<td><code v-pre>\t</code></td>
<td>制表符 <code v-pre>Tab</code></td>
</tr>
<tr>
<td><code v-pre>\r</code></td>
<td>回车符</td>
</tr>
</tbody>
</table>
<blockquote>
<p>那多个字符串之间或者字符串和其他类型数据之间，该如何进行连接呢？</p>
</blockquote>
<p>Java 编译器中，对于字符串和其他数据类型之间，可以使用 <code v-pre>+</code> 进行连接，编译器会自动将其他数据类型自动转换为字符串，然后再进行连接；</p>
<blockquote>
<p><code v-pre>String</code> 既然是不可变，那有什么优点呢？</p>
</blockquote>
<ol>
<li><strong>用于缓存 <code v-pre>hash</code> 值</strong></li>
</ol>
<p>由于 <code v-pre>String</code> 的 <code v-pre>hash</code> 值被频繁使用，它的不可变性使得 <code v-pre>hash</code> 值也不可变，此时只需要进行一次计算；</p>
<ol start="2">
<li><strong>字符串常量池（String Pool）的需要</strong></li>
</ol>
<p>如果一个 <code v-pre>String</code> 对象已经被创建过，那么就会优先从字符串常量池中获取其引用，其不可变性确保了不同引用指向同一 <code v-pre>String</code> 对象；</p>
<ol start="3">
<li><strong>安全性</strong></li>
</ol>
<p>我们经常用 <code v-pre>String</code> 作为我们方法的参数，其不变性能够保证参数不可变；</p>
<ol start="4">
<li><strong>线程安全</strong></li>
</ol>
<p><code v-pre>String</code> 的不可变性让它天生 <strong>具备线程安全</strong>，能够在多个线程中方便使用而不用考虑线程安全问题。</p>
<blockquote>
<p><code v-pre>String、StringBuilder、StringBuffer</code> 对比，该如何选择？</p>
</blockquote>
<table>
<thead>
<tr>
<th></th>
<th>可变性</th>
<th>线程安全</th>
<th>适用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>String</code></td>
<td>不可变</td>
<td>安全</td>
<td>操作少量的数据</td>
</tr>
<tr>
<td><code v-pre>StringBuffer</code></td>
<td>可变</td>
<td>安全，内部使用 <code v-pre>synchronized</code> 进行同步</td>
<td>多线程操作字符串缓冲区下操作大量数据</td>
</tr>
<tr>
<td><code v-pre>StringBuilder</code></td>
<td>可变</td>
<td>不安全</td>
<td>单线程操作字符串缓冲区下操作大量数据，性能高于 <code v-pre>StringBuffer</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p>通过 <code v-pre>new String(“xxx”)</code> 创建字符串的两种情况？</p>
</blockquote>
<p>使用 <code v-pre>new</code> 的方式创建字符串对象，会有两种不同的情况：</p>
<ol>
<li><strong>String Pool 中不存在 “xxx”</strong></li>
</ol>
<p>此时会创建两个字符串对象，“xxx” 属于字符串字面量，因此在编译期会在 String Pool 中创建一个字符串对象，用于指向该字符串的字面量 “xxx”；然后 <code v-pre>new</code> 会在堆中创建一个字符串对象。</p>
<figure><img src="@source/java-tutorial/javase/assets/20220704-variable-and-datatype/string-pool.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li><strong>String Pool 中存在 “xxx”</strong></li>
</ol>
<p>此时只需要创建一个字符串对象，由于 String Pool 中已经存在指向 “xxx” 的对象，所以直接在堆中创建一个字符串对象。</p>
<figure><img src="@source/java-tutorial/javase/assets/20220704-variable-and-datatype/stringpool-exist.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换" aria-hidden="true">#</a> 数据类型转换</h3>
<p>对于基本数据类型，不同类型之间是可以相互转换的，但是需要满足一定的条件；</p>
<blockquote>
<p><strong>从小到大自动转，从大到小强制转</strong>。</p>
</blockquote>
<p>即就是，对于低精度的数据类型，如果要转换为高精度的数据类型，直接将低精度的值赋给高精度的值即可；</p>
<p>但对于高精度的数据类型，如果想要转换为低精度的数据类型，则需要采用 <strong>强制转换</strong> 的手段，但此时需要承担精度丢失的风险，就像从一个大杯子往一个小杯子里倒水，你要做好小杯子可能装不下溢出的情况；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> b <span class="token operator">=</span> <span class="token number">113</span><span class="token punctuation">;</span>
<span class="token comment">// 低精度转高精度，由于 long 的范围比 int 大，所以可以自动转</span>
b <span class="token operator">=</span> a<span class="token punctuation">;</span>
<span class="token comment">// 高精度住低精度，由于 long 的范围比 int 大，所以需要强制转</span>
a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="隐式转换-自动类型转换" tabindex="-1"><a class="header-anchor" href="#隐式转换-自动类型转换" aria-hidden="true">#</a> 隐式转换（自动类型转换）</h4>
<p>当满足如下条件时，如果将一种类型的数据赋值给另一种数据类型变量时，将执行自动类型转换：</p>
<blockquote>
<ol>
<li>两种数据类型彼此兼容；</li>
<li>目标数据类型的取值范围大于源数据类型；</li>
</ol>
</blockquote>
<p>一般而言，隐式转换的规则是从低级类型数据转换为高级类型数据，对应规则如下：</p>
<blockquote>
<ul>
<li><strong>数值类型</strong>：<code v-pre>byte -&gt; short -&gt; int -&gt; long -&gt; float -&gt; double</code></li>
<li><strong>字符类型转整型</strong>：<code v-pre>char -&gt; int</code></li>
</ul>
</blockquote>
<h4 id="显式转换-强制类型转换" tabindex="-1"><a class="header-anchor" href="#显式转换-强制类型转换" aria-hidden="true">#</a> 显式转换（强制类型转换）</h4>
<p>那既然满足上述两个条件时会发生隐式转换，那不满足我们又想进行数据类型转换时，我们该怎么办呢？</p>
<p>这个时候就需要我们的 <strong>显式转换</strong> 登场了，其语法格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token punctuation">(</span>type<span class="token punctuation">)</span> variableName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们举个例子来说下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> ans <span class="token operator">=</span> <span class="token number">5.0</span><span class="token punctuation">;</span>
<span class="token comment">// 要将 double 类型的值赋值给 int，则需要强制转换</span>
num <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>ans<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：**强制转换可能会导致精度丢失，所以一般情况下尽量能不用就不用。</p>
<h4 id="常见数据类型转换方法" tabindex="-1"><a class="header-anchor" href="#常见数据类型转换方法" aria-hidden="true">#</a> 常见数据类型转换方法</h4>
<ol>
<li><strong>字符串与其他类型之间的转换</strong></li>
</ol>
<ul>
<li><strong>其他类型 -&gt; 字符串</strong></li>
</ul>
<blockquote>
<ol>
<li>调用类的串转换方法：<code v-pre>X.toString()</code>；</li>
<li>自动转换：<code v-pre>&quot;&quot; + X</code>；</li>
<li>利用 <code v-pre>String</code> 的方法：<code v-pre>String.valueOf(X)</code>；</li>
</ol>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 方法 1</span>
<span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token keyword">long</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>flaot num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token keyword">double</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方法 2</span>
<span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">""</span> <span class="token operator">+</span> num <span class="token punctuation">;</span> <span class="token comment">// num 是 int、long、float、double 类型</span>

<span class="token comment">// 方法 3</span>
<span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">long</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">float</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">double</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>字符串 - &gt; 其他类型</strong></li>
</ul>
<ol>
<li>调用 <code v-pre>parseXXX</code> 方法，比如 <code v-pre>parseLong、parseFloat、parseDouble...</code>；</li>
<li>先调用 <code v-pre>valueOf()</code>，方法，然后再调用 <code v-pre>xxxValue()</code> 方法；</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 方法 1</span>
<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Long</span> num2 <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">parseLong</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Float</span> num3 <span class="token operator">=</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Double</span> num4 <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方法 2</span>
<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Long</span> num2 <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">longValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Float</span> num1 <span class="token operator">=</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">floatValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Double</span> num1 <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>int、float、double</strong> 之间的转换</li>
</ol>
<ul>
<li><code v-pre>float -&gt; double</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">float</span> num <span class="token operator">=</span> <span class="token number">1.0f</span><span class="token punctuation">;</span>
<span class="token class-name">Float</span> num1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> num2 <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>double -&gt; float</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">double</span> num <span class="token operator">=</span> <span class="token number">100.0</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> num1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span>num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>double -&gt; int</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">double</span> num <span class="token operator">=</span> <span class="token number">100.0</span><span class="token punctuation">;</span>
<span class="token class-name">Double</span> num1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Double</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num2 <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>int -&gt; double</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> num1 <span class="token operator">=</span> num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量作用域" tabindex="-1"><a class="header-anchor" href="#变量作用域" aria-hidden="true">#</a> 变量作用域</h2>
<p>我们已经学会了如何定义变量，也知道了使用各种数据类型来定义变量。但是还有一点不知道大家有没有注意到，如果我们的定义变量在不同的位置，其作用是不是相同的呢？</p>
<p>这就涉及到变量的作用域，一般根据其作用域的不同，可以分为：</p>
<ul>
<li><strong>成员变量</strong>：定义在方法体和语句块外，不属于任何一个方法，能在整个类中起作用；</li>
<li><strong>局部变量</strong>：定义在方法或方法体中的变量，作用域是其所在的代码块；</li>
</ul>
<h3 id="成员变量" tabindex="-1"><a class="header-anchor" href="#成员变量" aria-hidden="true">#</a> 成员变量</h3>
<p>成员变量又可以分为 <strong>全局变量（又叫实例变量）</strong> 和 <strong>静态变量（也叫类变量）</strong>，两者的区别如下：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>修饰符</th>
<th>访问方式</th>
<th>生命周期</th>
</tr>
</thead>
<tbody>
<tr>
<td>全局变量</td>
<td>无</td>
<td>对象名.变量名</td>
<td>一旦对象被引用，则实例变量就存在</td>
</tr>
<tr>
<td>静态变量</td>
<td><code v-pre>static</code></td>
<td>类名.变量名</td>
<td>同类共生死，只有当类被 GC 回收时才会被销毁</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// 成员变量，全局变量</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">// 成员变量，全局变量</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">// 成员变量，静态变量</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> wechatPublic <span class="token operator">=</span> <span class="token string">"公众号：村雨遥"</span><span class="token punctuation">;</span>
    <span class="token comment">// 成员变量，静态变量</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> website <span class="token operator">=</span> <span class="token string">"http://cunyu1943.site"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h3>
<p>成员变量指定义在方法或方法体中的变量，作用域是其所在的代码块，可以分为如下三种：</p>
<ul>
<li>形参</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token comment">// 方法中的参数</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num = "</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>方法内定义</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 声明一个 int 类型的局部变量</span>
            <span class="token keyword">int</span> tmp <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"tmp = "</span> <span class="token operator">+</span> tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num = "</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num = "</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>代码块定义</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello!Exception!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 异常处理块，参数为 Exception 类型</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3>
<p>既然有变量，那就有与之相对的常量（也就是值是固定的，不能再变）。</p>
<p>常量又叫做字面常量，是通过数据直接来表示的，在程序运行过程中不能发生改变。通常我们把 Java 中用 <code v-pre>final</code> 关键字所修饰的成员变量叫做常量，它的值一旦给定就无法再进行改变！</p>
<h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h3>
<p>Java 中使用 <code v-pre>final</code> 关键字来声明常量，其语法格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">final</span> 数据类型 常量名 <span class="token operator">=</span> 常量初始值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 声明一个常量并赋值</span>
        <span class="token keyword">final</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>

        <span class="token comment">// 再次赋值，将导致编译错误</span>
        num <span class="token operator">=</span> <span class="token number">1943</span><span class="token punctuation">;</span>

        <span class="token comment">// 声明一个常量但不赋值</span>
        <span class="token keyword">final</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
        <span class="token comment">// 因为声明时未赋值，所以可以进程初次赋值</span>
        id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">// 常量已经赋值过了，再次赋值将导致编译错误</span>
        id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常量可以分为如下 3 种类型：</p>
<ul>
<li><strong>静态常量</strong>：<code v-pre>final</code> 之前用 <code v-pre>public staic</code> 修饰，表示该常量的作用域是全局的，我们不用创建对象就能够访问它。</li>
<li><strong>成员常量</strong>：类似于成员变量，但是最大的不同在于它不能被修改。</li>
<li><strong>局部常量</strong>：作用类似于局部变量，不同之处也在于不能修改。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token comment">// 静态变量</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> dobule <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>

    <span class="token comment">// 成员常量</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 局部变量</span>
        <span class="token keyword">final</span> <span class="token keyword">long</span> count <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：<code v-pre>final</code> 修饰变量后，该变量则变为常量。而 <code v-pre>final</code> 也还可以用来修饰类和方法，修饰方法时，表示这个方法不能被重写（但可以重载）；修饰类时，则表明该类无法被继承。这些东西这时候你可能会觉得很陌生，不过等我们后续学习了面向对象之后，你就会发现其实很简单。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>以上就是本期文章的所有内容了，集中介绍了 Java 中的变量、数据类型、变量作用域以及常量等主要知识点。内容虽然蛮多的，但如果大家能够静下心来慢慢学习，掌握起来还是不难的。</p>
<p>最后，码字不易，如果觉得本文对您有所帮助，可以点赞关注，帮忙分享一波哦！🙏</p>
<p><strong>关注公众号，获取最新文章更新</strong></p>
<Share colorful /></div></template>


