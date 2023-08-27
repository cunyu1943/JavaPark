<template><div><h1 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> 操作符</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/49KRDz8bpcGdPlU15OJD0g" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/49KRDz8bpcGdPlU15OJD0g<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p><a href="https://mp.weixin.qq.com/s/Yz41IdWSNTgqgj0R-Ffgqw" target="_blank" rel="noopener noreferrer">之前的文章<ExternalLinkIcon/></a> 中介绍了 Java 变量和数据类型，那么如何对他们进行运算呢？这就要用到运算符的相关知识点了。所谓运算符，就是指 Java 中对变量或者字面量进行操作的符号。下面就来具体看看，常用的操作符。</p>
<p>本文主要内容预告如下：</p>
<ul>
<li><strong>算术运算符</strong></li>
<li><strong>关系运算符</strong></li>
<li><strong>位运算符</strong></li>
<li><strong>逻辑运算符</strong></li>
<li><strong>赋值运算符</strong></li>
<li><strong>条件运算符</strong></li>
</ul>
<p>好了，话不多说，开始正式内容吧！</p>
<h2 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h2>
<p>常见的算术运算符主要有下表中的几种，主要是针对整型和浮点类型的运算。</p>
<table>
<thead>
<tr>
<th style="text-align:left">操作符</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>+</code></td>
<td style="text-align:left">加法 - 相加运算符两侧的值</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>-</code></td>
<td style="text-align:left">减法 - 左操作数减去右操作数</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>*</code></td>
<td style="text-align:left">乘法 - 相乘操作符两侧的值</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>/</code></td>
<td style="text-align:left">除法 - 左操作数除以右操作数</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>％</code></td>
<td style="text-align:left">取余 - 左操作数除以右操作数的余数</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>++</code></td>
<td style="text-align:left">自增: 操作数的值增加1</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>--</code></td>
<td style="text-align:left">自减: 操作数的值减少1</td>
</tr>
</tbody>
</table>
<p><strong>注意</strong>：<code v-pre>++</code> 和 <code v-pre>--</code> 可以放在操作数之前，也可以放在操作数之后；<strong>位于操作数之前时，先自增/减，再赋值；位于操作数之后，先赋值，再自增/减</strong>；总结起来就是<strong>符号在前就先加/减，符号在后就后加/减</strong>。</p>
<p>以下是部分算术运算符的示例以及运行结果：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu1943
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 9:43
 * <span class="token keyword">@description</span> : 算术运算符演示
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num3 <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num4 <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 + num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 - num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">-</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 * num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">*</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num2 / num1 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num2 <span class="token operator">/</span> num1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num2 % num1 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num2 <span class="token operator">%</span> num1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num3 % num1 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num3 <span class="token operator">%</span> num1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1++   = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1--   = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 查看 ++ 在操作数前后位置时结果的不同</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num4++   = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num4<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"++num4   = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">++</span>num4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase/assets/20220706-operator/operator.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这里不难看出，无论是 <code v-pre>++</code> 还是 <code v-pre>--</code>，当它们单独写一行时，不管是放在变量前边还是后边，其最终结果都是一样的。但如果将它们参与运算，此时的效果就不一样了，这里需要注意。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> a<span class="token operator">++</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码中，先进行了 <code v-pre>b = a</code> 的赋值操作，所以此时 <code v-pre>b</code> 的值是 <code v-pre>10</code>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token operator">++</span>a<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而此时，先要对 <code v-pre>a</code> 进行加一的操作之后，再将 <code v-pre>a</code> 的值赋予 <code v-pre>b</code>，所以此时 <code v-pre>b</code> 的值为 <code v-pre>11</code>。</p>
<h2 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h2>
<p>关系运算符主要是指两个数据间的关系，两者之间的比较结果用逻辑值来表示，常用来比较判断两个变量或常量的大小。常见的关系运算符及含义如下表：</p>
<table>
<thead>
<tr>
<th style="text-align:left">运算符</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>==</code></td>
<td style="text-align:left">检查如果两个操作数的值是否相等，如果相等则条件为真</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>!=</code></td>
<td style="text-align:left">检查如果两个操作数的值是否相等，如果值不相等则条件为真</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&gt; </code></td>
<td style="text-align:left">检查左操作数的值是否大于右操作数的值，如果是那么条件为真</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&lt; </code></td>
<td style="text-align:left">检查左操作数的值是否小于右操作数的值，如果是那么条件为真</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&gt;=</code></td>
<td style="text-align:left">检查左操作数的值是否大于或等于右操作数的值，如果是那么条件为真</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&lt;=</code></td>
<td style="text-align:left">检查左操作数的值是否小于或等于右操作数的值，如果是那么条件为真</td>
</tr>
</tbody>
</table>
<p>以下是部分关系运算符的示例以及运行结果：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 9:45
 * <span class="token keyword">@description</span> : 关系运算符
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">220</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 == num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">==</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 != num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">!=</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 > num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">></span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num2 &lt; num1 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num2 <span class="token operator">&lt;</span> num1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num2 &lt;= num1 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num2 <span class="token operator">&lt;=</span> num1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num2 >= num1 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num2 <span class="token operator">>=</span> num1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase/assets/20220706-operator/logic.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h2>
<p>位运算符主要用来对操作数二进制的位进行运算，其运算结果是整型的。常见的位运算符及功能描述如下表所示：</p>
<table>
<thead>
<tr>
<th>操作符</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>＆</code></td>
<td>如果相对应位都是 1，则结果为 1，否则为 0</td>
</tr>
<tr>
<td><code v-pre>|</code></td>
<td>如果相对应位都是 0，则结果为 0，否则为 1</td>
</tr>
<tr>
<td><code v-pre>^</code></td>
<td>如果相对应位值相同，则结果为 0，否则为 1</td>
</tr>
<tr>
<td><code v-pre>〜</code></td>
<td>按位取反运算符翻转操作数的每一位，即 0 变成 1，1 变成 0</td>
</tr>
<tr>
<td><code v-pre>&lt;&lt;</code></td>
<td>按位左移运算符。左操作数按位左移右操作数指定的位数</td>
</tr>
<tr>
<td><code v-pre>&gt;&gt;</code></td>
<td>按位右移运算符。左操作数按位右移右操作数指定的位数</td>
</tr>
<tr>
<td><code v-pre>&gt;&gt;&gt;</code></td>
<td>按位右移补零操作符。左操作数的值按右操作数指定的位数右移，移动得到的空位以零填充</td>
</tr>
</tbody>
</table>
<p>以下是部分位运算符的示例以及运行结果：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 10:02
 * <span class="token keyword">@description</span> : 位运算符
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 &amp; num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">&amp;</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 | num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">|</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 ^ num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">^</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"~ num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">~</span>num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 &lt;&lt; 2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 >> 2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">>></span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 >>> 2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">>>></span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase/assets/20220706-operator/bit.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h2>
<p>逻辑运算符通过将关系表达式连接起来，从而组成一个复杂的逻辑表达式，从而判断程序中的表达式是否成立，其结果返回 <code v-pre>true</code> 或 <code v-pre>false</code>。</p>
<table>
<thead>
<tr>
<th style="text-align:left">操作符</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>&amp;&amp;</code></td>
<td style="text-align:left">称为逻辑与运算符。当且仅当两个操作数都为真，条件才为真</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>||</code></td>
<td style="text-align:left">称为逻辑或操作符。如果任何两个操作数任何一个为真，条件为真</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>!</code></td>
<td style="text-align:left">称为逻辑非运算符。用来反转操作数的逻辑状态。如果条件为 <code v-pre>true</code>，则逻辑非运算符将得到 <code v-pre>false</code></td>
</tr>
</tbody>
</table>
<p>以下是逻辑运算符的示例以及运行结果：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 10:07
 * <span class="token keyword">@description</span> : 逻辑运算符
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> positive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> negative <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"positive &amp;&amp; negative = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>positive <span class="token operator">&amp;&amp;</span> negative<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"positive || negative = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>positive <span class="token operator">||</span> negative<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"!(positive || negative) = "</span> <span class="token operator">+</span> <span class="token operator">!</span><span class="token punctuation">(</span>positive <span class="token operator">||</span> negative<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase/assets/20220706-operator/logic-&amp;.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h2>
<p>赋值运算符表示一个动作，将其右侧的值送到左侧的变量中。常见的赋值运算符及含义如下表所示：</p>
<table>
<thead>
<tr>
<th style="text-align:left">操作符</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>=</code></td>
<td style="text-align:left">简单的赋值运算符，将右操作数的值赋给左侧操作数</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>+=</code></td>
<td style="text-align:left">加和赋值操作符，它把左操作数和右操作数相加赋值给左操作数</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>-=</code></td>
<td style="text-align:left">减和赋值操作符，它把左操作数和右操作数相减赋值给左操作数</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>*=</code></td>
<td style="text-align:left">乘和赋值操作符，它把左操作数和右操作数相乘赋值给左操作数</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>/=</code></td>
<td style="text-align:left">除和赋值操作符，它把左操作数和右操作数相除赋值给左操作数</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>％=</code></td>
<td style="text-align:left">取模和赋值操作符，它把左操作数和右操作数取模后赋值给左操作数</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&lt;&lt; =</code></td>
<td style="text-align:left">左移位赋值运算符</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&gt;&gt;=</code></td>
<td style="text-align:left">右移位赋值运算符</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>＆=</code></td>
<td style="text-align:left">按位与赋值运算符</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>^=</code></td>
<td style="text-align:left">按位异或赋值操作符</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>|=</code></td>
<td style="text-align:left">按位或赋值操作符</td>
</tr>
</tbody>
</table>
<p>以下是部分赋值运算符的示例以及运行结果：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 10:13
 * <span class="token keyword">@description</span> : 赋值运算符
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 + num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 += num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">+=</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 - num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">-</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 -= num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">-=</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 * num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">*</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 *= num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">*=</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 &amp; num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">&amp;</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 &amp;= num2 = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">&amp;=</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase/assets/20220706-operator/assign.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="条件运算符" tabindex="-1"><a class="header-anchor" href="#条件运算符" aria-hidden="true">#</a> 条件运算符（? :）</h2>
<p>也叫作三元运算符，共有 3 个操作数，且需要判断布尔表达式的值，常用来取代某个 <code v-pre>if-else</code> 语句。其语法结构如下所示：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>关系表达式<span class="token operator">?</span>表达式 <span class="token number">1</span><span class="token operator">:</span>表达式 <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>variable x <span class="token operator">=</span> <span class="token punctuation">(</span>expression<span class="token punctuation">)</span> <span class="token operator">?</span> value <span class="token keyword">if</span> <span class="token boolean">true</span> <span class="token operator">:</span> value <span class="token keyword">if</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以下是条件运算符的示例以及运行结果：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 10:18
 * <span class="token keyword">@description</span> : 条件运算符
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> result <span class="token operator">=</span> num1 <span class="token operator">></span> num2 <span class="token operator">?</span> num1 <span class="token operator">:</span> num2<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"The max between num1 and num2 is "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase/assets/20220706-operator/condition.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2>
<p>用于操作对象实例，检查该对象是否是一个特定类型（类类型或接口类型），其语法结构如下。该知识点涉及到类与对象，此处就不做展开，等到后边学习类与对象之后，就能理解了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token punctuation">(</span> <span class="token class-name">Object</span> reference variable <span class="token punctuation">)</span> <span class="token keyword">instanceof</span>  <span class="token punctuation">(</span><span class="token keyword">class</span><span class="token operator">/</span><span class="token keyword">interface</span> type<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="运算符优先级" tabindex="-1"><a class="header-anchor" href="#运算符优先级" aria-hidden="true">#</a> 运算符优先级</h2>
<p>运算符有很多，如果我们将多个运算符组合在一起，那它们又该先计算哪一个，然后再计算哪一个呢？其实就像我们日常排队一样，运算符也是有优先级的。<br>
常用运算符的优先级如下表所示，在我们使用时，如果涉及到一个表达式中含有多个运算符，一定要注意运算符的优先级。当然了，让我们背下来这些也是挺难的。不过不要紧，我们只需要学会灵活运用 <code v-pre>()</code> 就好了。我们可以利用 <code v-pre>()</code> 将需要先计算的表达式括起来，然后再去进行下一步的运算。</p>
<table>
<thead>
<tr>
<th>优先级</th>
<th>运算符</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td><code v-pre>.</code>、<code v-pre>()</code>、<code v-pre>{}</code></td>
</tr>
<tr>
<td>2</td>
<td><code v-pre>!</code>、<code v-pre>~</code>、<code v-pre>++</code>、<code v-pre>--</code></td>
</tr>
<tr>
<td>3</td>
<td><code v-pre>*</code>、<code v-pre>/</code>、<code v-pre>%</code></td>
</tr>
<tr>
<td>4</td>
<td><code v-pre>+</code>、<code v-pre>-</code></td>
</tr>
<tr>
<td>5</td>
<td><code v-pre>&lt;&lt;</code>、<code v-pre>&gt;&gt;</code>、<code v-pre>&gt;&gt;&gt;</code></td>
</tr>
<tr>
<td>6</td>
<td><code v-pre>&lt;</code>、<code v-pre>&lt;=</code>、<code v-pre>&gt;</code>、<code v-pre>&gt;=</code>、<code v-pre>instanceof</code></td>
</tr>
<tr>
<td>7</td>
<td><code v-pre>==</code>、<code v-pre>!=</code></td>
</tr>
<tr>
<td>8</td>
<td><code v-pre>&amp;</code></td>
</tr>
<tr>
<td>9</td>
<td><code v-pre>^</code></td>
</tr>
<tr>
<td>10</td>
<td><code v-pre>|</code></td>
</tr>
<tr>
<td>11</td>
<td><code v-pre>&amp;&amp;</code></td>
</tr>
<tr>
<td>12</td>
<td><code v-pre>||</code></td>
</tr>
<tr>
<td>13</td>
<td><code v-pre>?:</code></td>
</tr>
<tr>
<td>14</td>
<td><code v-pre>=</code>、<code v-pre>+=</code>、<code v-pre>-=</code>、<code v-pre>*=</code>、<code v-pre>/=</code>、<code v-pre>%=</code>、<code v-pre>&amp;=</code></td>
</tr>
</tbody>
</table>
<h2 id="equals-和" tabindex="-1"><a class="header-anchor" href="#equals-和" aria-hidden="true">#</a> equals() 和 ==</h2>
<ul>
<li><code v-pre>==</code></li>
</ul>
<p>基本数据类型用 <code v-pre>==</code> 比较的是值，而 用于引用数据类型时判断两个对象的内存地址是否相等，即两对象是否是同一个对象；</p>
<blockquote>
<p>本质来讲，由于 Java 中只有值传递，所以不管是基本数据类型还是引用数据类型，比较的其实都是值，只不过引用类型变量存的值是对象的地址；</p>
</blockquote>
<ul>
<li><code v-pre>equals()</code></li>
</ul>
<p>作用也是判断两个对象是否相等，但是 <strong>不能用于基本数据类型变量的比较</strong>。存在于 <code v-pre>Object()</code> 类中，所以所有类都具有 <code v-pre>equals()</code> 方法存在两种使用情况：</p>
<ol>
<li><strong>类未覆盖 <code v-pre>equals()</code> 方法</strong>：此时通过 <code v-pre>equals()</code> 比较该类的两个对象时，等价于 <code v-pre>==</code> 比较这两个对象，默认使用  <code v-pre>Object</code> 类中的 <code v-pre>equals()</code> 方法；</li>
<li><strong>类覆盖了 <code v-pre>equals()</code> 方法</strong>：一旦覆盖了该方法，则用来比较两个对象的内容是否相等，如我们常用的 <code v-pre>String、BitSet、Data、File</code> 就覆盖了 <code v-pre>equals()</code> 方法；</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 13:26
 * <span class="token keyword">@description</span> : == 和 equals 用法
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num3 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"村雨遥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// == 用于基本数据类型，用于比较两者是否相等</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 == num2："</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">==</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num3 == num3："</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num2 <span class="token operator">==</span> num3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token comment">// 而用于引用类型则表示两者是否指向同一对象</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"str1 == str2："</span> <span class="token operator">+</span> <span class="token punctuation">(</span>str1 <span class="token operator">==</span> str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

        <span class="token comment">// equals 用于比较引用类型是否内容是否相同</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"str1 equals str2："</span> <span class="token operator">+</span> str1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

        <span class="token comment">// equals 不能用于基本数据类型比较</span>
        <span class="token comment">//        System.out.println(num1.equals(num2));</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase/assets/20220706-operator/equals.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>好了，以上就是有关操作符系列的相关知识点了。老规矩，如果您觉得对您有所帮助，那就点个赞吧 🥳.</p>
<p>对于文中所遗漏或者存在错误的知识点，也欢迎大家评论指正呀！</p>
<p><strong>关注公众号，获取最新文章更新</strong></p>
<div style="text-align:center">
<figure><img src="https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif" alt="" width="200" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<Share colorful /></div></template>


