<template><div><h1 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/3WU5l37DpPkR6o7CnFiStA" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/3WU5l37DpPkR6o7CnFiStA<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>我们在 <a href="https://mp.weixin.qq.com/s/49KRDz8bpcGdPlU15OJD0g" target="_blank" rel="noopener noreferrer">上一篇文章<ExternalLinkIcon/></a> 中讲了各种操作符的使用技巧，接上一篇文章中的内容，本次文章主要将流程控制，文章主要内容安排如下：</p>
<ul>
<li><strong>输入输出</strong></li>
<li><strong>顺序结构</strong></li>
<li><strong>分支结构</strong></li>
<li><strong>循环结构</strong></li>
</ul>
<h2 id="输入输出" tabindex="-1"><a class="header-anchor" href="#输入输出" aria-hidden="true">#</a> 输入输出</h2>
<p>之前的学习中，我们会发现都是通过定义变量并赋初值的方式来得到一个实现固定好值得变量。加入我们现在不想再以这种方式获取变量值，而想要直接控制变量值，又该怎么做呢？这就涉及到 Java 中的输入输出相关知识了，以下就先来看看，如何实现从控制台输入，并从控制台输出吧。</p>
<h3 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h3>
<p>先来看一个实例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 13:53
 * <span class="token keyword">@description</span> : 输入
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入整型"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入的整型："</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入字符型"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入的字符型："</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入浮点型"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">float</span> floatNum <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextFloat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入的字符型："</span> <span class="token operator">+</span> floatNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> doubleNum <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入的字符型："</span> <span class="token operator">+</span> doubleNum<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220707-control-process/input.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>要实现从控制台输入并读取到我们的程序中时，需要借助 <code v-pre>Scanner</code> 类，它属于标准输入流，其步骤总结如下：</p>
<ol>
<li>首先，需要导入 <code v-pre>Scanner</code> 类。即 <code v-pre>import java.util.Scanner</code>，其中 <code v-pre>import</code> 表示导入某个类，并且只能放在程序的开头。</li>
<li>然后创建 <code v-pre>Scanner</code> 对象。这里需要注意，创建时需要传入 <code v-pre>System.in</code>，表示标准输入流，与之对应的 <code v-pre>System.out</code> 则代表标准输出流。</li>
<li>最后就是读取用户输入即可。这里读取时，调用不同的方法 <code v-pre>Scanner</code> 会自动转换数据类型，不用我们去进行手动转换。</li>
</ol>
<p>从控制台获取不同类型的输入，其常用方法如下：</p>
<table>
<thead>
<tr>
<th>返回值</th>
<th>方法名</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>boolean</code></td>
<td><code v-pre>hasNext()</code></td>
<td>如果还有输入，则返回 <code v-pre>true</code>，否则返回 <code v-pre>false</code></td>
</tr>
<tr>
<td><code v-pre>String</code></td>
<td><code v-pre>next()</code></td>
<td>返回输入的字符串，以空格为分隔符</td>
</tr>
<tr>
<td><code v-pre>String</code></td>
<td><code v-pre>nextLine()</code></td>
<td>返回输入的字符串，以换行为分隔符</td>
</tr>
<tr>
<td><code v-pre>int</code></td>
<td><code v-pre>nextInt()</code></td>
<td>输入整型数</td>
</tr>
<tr>
<td><code v-pre>long</code></td>
<td><code v-pre>nextLong()</code></td>
<td>输入长整型数</td>
</tr>
<tr>
<td><code v-pre>float</code></td>
<td><code v-pre>nextFloat()</code></td>
<td>输入单精度数</td>
</tr>
<tr>
<td><code v-pre>double</code></td>
<td><code v-pre>nextDouble</code></td>
<td>输入双精度数</td>
</tr>
</tbody>
</table>
<p>这里值得注意的是 <code v-pre>next()</code> 和 <code v-pre>nextLine</code> 两个方法，虽然他们的作用都是用于获取输入的 <code v-pre>String</code> 类型的内容，但是它们具体的处理机制又会有所区别。<br>
针对 <code v-pre>next()</code> 而言，它会自动消除有效字符前的空格，从而只返回输入的字符，得到的字符串都不会带有空格。也就是说，当使用 <code v-pre>next()</code> 时，如果遇到空格，此时就会停止录入，只录入空格前的内容，而空格后的内容则会保留到缓冲区。除了空格之外，<code v-pre>next()</code> 也会对制表符和换行符采用同样的处理方式。<br>
而对 <code v-pre>nextLine()</code> 来说，它会返回换行符之前的所有内容，甚至是带空格的字符串。</p>
<p>因此，在使用时一定要注意它们之间的区别，合理搭配使用，从而得到自己想要的结果。</p>
<h3 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h3>
<p>其实从一开始的 <code v-pre>hello world</code> 到目前的代码中，我们已经接触过输出了，也就是我们的 <code v-pre>System.out.println()</code>。</p>
<p>其中 <code v-pre>println</code> 表示输出并换行，如果我们不想换行，则使用 <code v-pre>print</code> 就可以了。</p>
<p>通过上述方式所输出的内容都是挤在一起的，十分不方便我们阅读。为了更加清晰的打印出我们所需要的结果，可以使用格式化输出。</p>
<p>要使用格式化输出，需要使用 <code v-pre>System.out.printf()</code> 或者 <code v-pre>System.out.format()</code> 搭配占位符，然后在后面的参数格式化成指定格式即可，两者达成的效果是等价的。常见的占位符如下：</p>
<table>
<thead>
<tr>
<th>占位符</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>%d</code></td>
<td>格式化输出整数</td>
</tr>
<tr>
<td><code v-pre>%f</code></td>
<td>格式化输出浮点数</td>
</tr>
<tr>
<td><code v-pre>%s</code></td>
<td>格式化输出字符串</td>
</tr>
<tr>
<td><code v-pre>%x</code></td>
<td>格式化输出十六进制整数</td>
</tr>
<tr>
<td><code v-pre>%e</code></td>
<td>格式化输出科学计数法表示的浮点数</td>
</tr>
</tbody>
</table>
<p>此外，我们还可以使用各种转义字符来使得我们的输出更为简洁，常见的转义字符及意义如下表所示。</p>
<table>
<thead>
<tr>
<th>转义字符</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>\n</code></td>
<td>换行</td>
</tr>
<tr>
<td><code v-pre>\t</code></td>
<td>水平制表符</td>
</tr>
<tr>
<td><code v-pre>\\</code></td>
<td>表示一个反斜杠</td>
</tr>
<tr>
<td><code v-pre>\'</code></td>
<td>表示一个单引号</td>
</tr>
<tr>
<td><code v-pre>\&quot;</code></td>
<td>表示一个双引号</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 14:48
 * <span class="token keyword">@description</span> : 输出
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> num2 <span class="token operator">=</span> <span class="token number">34.9</span><span class="token punctuation">;</span>
        <span class="token keyword">float</span> num3 <span class="token operator">=</span> <span class="token number">3.34f</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>

        <span class="token comment">//        换行及不换行输出</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"公众号："</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"公众号："</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//        格式化输出</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"格式化输出："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"num1 = %d\n"</span><span class="token punctuation">,</span> num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"num2 = %f\t num3 = %f\n"</span><span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"name = %s\n"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"name = %s\n"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220707-control-process/output.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="顺序结构" tabindex="-1"><a class="header-anchor" href="#顺序结构" aria-hidden="true">#</a> 顺序结构</h2>
<figure><img src="@source/javase-tutorial/assets/20220707-control-process/sequence.png" alt="顺序结构" tabindex="0" loading="lazy"><figcaption>顺序结构</figcaption></figure>
<p>顺序结构如上图所示，它可以说是最简单的，只需要按照解决问题的顺序写出对应的语句即可，其执行顺序是自上而下，依次执行的。就类似于我们求解一道数学题，你得根据题意一步一步来，直至解出最后的答案。</p>
<h2 id="分支结构" tabindex="-1"><a class="header-anchor" href="#分支结构" aria-hidden="true">#</a> 分支结构</h2>
<p><img src="@source/javase-tutorial/assets/20220707-control-process/condition.png" alt="分支结构" loading="lazy"><br>
上图是分支结构，顺序结构虽然能够处理计算、输出等问题，当遇到需要判断选择时，顺序结构已经不能很好的解决了，此时就需要使用分支结构。<br>
Java 中，分支结构相关的语句主要涉及到 <code v-pre>if</code> 和 <code v-pre>switch</code> 相关，下面就分别来看一下。</p>
<h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3>
<ol>
<li><strong>单次判断</strong></li>
</ol>
<p>当我们只进行一次判断时，可以使用一个 <code v-pre>if</code> 语句包含一个条件表达式，其语法格式如下；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
    执行语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其执行逻辑如下图所示，如果条件表达式的值为 <code v-pre>true</code>，则执行 <code v-pre>if</code> 语句块中的执行语句，否则就执行 <code v-pre>if</code> 语句块后边的代码；</p>
<figure><img src="@source/javase-tutorial/assets/20220707-control-process/if.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li><strong>多次判断</strong></li>
</ol>
<p>要进行多次判断时，可以使用 <code v-pre>if…else</code> 的形式，其语法格式如下；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式 <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    执行语句 <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式 <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	执行语句 <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>…<span class="token punctuation">)</span><span class="token punctuation">{</span>
    …
<span class="token punctuation">}</span>…
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其执行逻辑如下图所示，如果条件表达式 1 为 <code v-pre>true</code>，则执行执行语句 1，否则接着判断条件表达式 2，若为 <code v-pre>true</code>，则执行执行语句 2，以此类推，直到完成最后一个条件表达式的判断。</p>
<figure><img src="@source/javase-tutorial/assets/20220707-control-process/mul-if.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 15:45
 * <span class="token keyword">@description</span> : 条件判断
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请输入分数："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> score <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> score <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入的分数不在0-100之间，不符合要求"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220707-control-process/if-res.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h3>
<p>当我们需要使用 <code v-pre>if</code> 进行判断时，难免显得有些繁琐。此时，我们就可以使用 <code v-pre>switch</code> 来进行替代，通过判断一个变量所属范围，从而划分出不同的分支。</p>
<p><code v-pre>switch</code> 分支的语法格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> value1<span class="token operator">:</span>
        执行语句<span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> value2<span class="token operator">:</span>
        执行语句<span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    ……
    <span class="token keyword">default</span><span class="token operator">:</span>
        执行语句<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过判断表达式的值，然后执行对应值下的执行语句，而 <code v-pre>default</code> 下的执行语句表示如果 <code v-pre>switch</code> 表达式未匹配到对应的值时所执行的语句；</p>
<p>一个 <code v-pre>switch</code> 的实例如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 15:49
 * <span class="token keyword">@description</span> : switch
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"请输入该学生成绩："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> grade <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//定义grade且获取键盘输入的整数</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>grade <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> grade <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//输入的整数范围应为0-100</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入的成绩有误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>grade <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">10</span><span class="token operator">:</span>
            <span class="token keyword">case</span> <span class="token number">9</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该学生成绩优秀"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">8</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该学生成绩良好"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该学生成绩中等"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该学生成绩基本合格"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该学生成绩不合格"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上面的形式之外，也可以使用以下形式：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/15 15:49
 * <span class="token keyword">@description</span> : switch
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"请输入该学生成绩："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> grade <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//定义grade且获取键盘输入的整数</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>grade <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> grade <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//输入的整数范围应为0-100</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入的成绩有误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>grade <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">10</span><span class="token punctuation">,</span><span class="token number">9</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该学生成绩优秀"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">8</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该学生成绩良好"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">7</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该学生成绩中等"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">6</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该学生成绩基本合格"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该学生成绩不合格"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在使用 <code v-pre>switch</code> 分支语法时，需要遵循一定的规则：</p>
<ol>
<li><code v-pre>switch</code> 中的变量类型可以是：<code v-pre>byte</code>、<code v-pre>short</code>、<code v-pre>int</code>、<code v-pre>char</code>、<code v-pre>String</code> （自 JDK 1.7 开始）；</li>
<li><code v-pre>switch</code> 语句根据表达式的结果跳转到对应的 <code v-pre>case</code> 结果，然后执行其后跟着的语句，直到遇到 <code v-pre>break</code> 才结束执行；</li>
<li>默认情况下，一般都会跟着一个 <code v-pre>default</code> 的分支，用于未匹配到对应情况时的执行情况；</li>
</ol>
<h2 id="循环结构" tabindex="-1"><a class="header-anchor" href="#循环结构" aria-hidden="true">#</a> 循环结构</h2>
<p><img src="@source/javase-tutorial/assets/20220707-control-process/loop.png" alt="循环结构" loading="lazy"><br>
上图为循环结构示意，让程序中遇到需要反复执行某一个功能时，我们发现顺序结构以及分支结构实现起来都太过于繁琐，于是又提出了循环结构的相关概念。<br>
通过循环结构，我们就可以通过判断循环语句，然后判断是否进入循环体。Java 中，循环结构主要涉及的语句有 <code v-pre>while</code>、<code v-pre>for</code>、<code v-pre>continue</code>、<code v-pre>break</code> 等。</p>
<h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h3>
<p>假设我们现在有一个题目，需要你计算 <code v-pre>1 + 2 + 3 + …… + 50</code> 的结果，你会怎么办呢？</p>
<p>这么写么：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/16 9:35
 * <span class="token keyword">@description</span> : while
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
        sum <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        sum <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        ……
        sum <span class="token operator">+=</span> <span class="token number">50</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"1 + 2 + 3 + …… + 50 = "</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这么写就太麻烦了，计算到 50 的值就已经很多了，假如有 1000,10000 甚至更大，那我们岂不是写个好久才能写完。这个时候我们就得找找有没有简单的方法，能够只写几句就实现相同的效果呢？答案是：Yes，这就是我们这一小节将要讲到的循环。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/16 9:35
 * <span class="token keyword">@description</span> : while
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
            num<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"1 + 2 + 3 + …… + 50 = "</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220707-control-process/sum.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>从上面的实例，利用 <code v-pre>while</code> 循环，我们就能轻易达成循环的效果。其语法格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
    执行语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要表达式为 <code v-pre>true</code>，就会不断循环执行其中的执行语句，直到表达式为 <code v-pre>false</code>，此时便跳出循环，不再执行其中的执行语句。</p>
<p>除开上面的形式之外，还有另一种 <code v-pre>while</code> 形式：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">do</span><span class="token punctuation">{</span>
    执行语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两者的最大区别在于：<code v-pre>do……while</code> 无论 <code v-pre>表达式</code> 是否为 <code v-pre>true</code>，都至少会执行一次。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/16 9:35
 * <span class="token keyword">@description</span> : while
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
            num<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"sum = "</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220707-control-process/while.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/16 9:35
 * <span class="token keyword">@description</span> : while
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
            num<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"sum = "</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220707-control-process/dowhile.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>观察以上两个实例，在 <code v-pre>while</code> 程序中，我们定义 <code v-pre>num = 10</code>，然后假设 <code v-pre>num &lt;= 9</code> 时就进入循环体，而 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>10</mn><mo>&gt;</mo><mn>9</mn></mrow><annotation encoding="application/x-tex">10 &gt; 9</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6835em;vertical-align:-0.0391em;"></span><span class="mord">10</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">9</span></span></span></span>，所以不进入循环体，直接打印 <code v-pre>sum</code> 的值为 <code v-pre>0</code>。而在 <code v-pre>do…while</code> 程序中，我们同样定义 <code v-pre>num = 10</code>，然后假设 <code v-pre>num &lt; 10</code> 时继续循环，很明显不满足该情况，理应跳出循环，打印出 <code v-pre>sum</code> 的值为 <code v-pre>10</code>，说明此时还是进行了一次循环。</p>
<p>因此，当我们需要在 <code v-pre>while</code> 和 <code v-pre>do……while</code> 之间做出选择时，如果我们最少需要进行一次循环，则选择 <code v-pre>do……while</code>，其他情况下选用两者都可以。</p>
<h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3>
<ul>
<li><strong>普通 for 循环</strong></li>
</ul>
<p>除开 <code v-pre>while</code> 和 <code v-pre>do……while</code> 之外，我们还有 <code v-pre>for</code> 循环来达成同样的结果，只是表达方法不一样。同样以上面计算 <code v-pre>1 + 2 + …… + 50</code> 为例，可以写成如下的形式：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/16 10:20
 * <span class="token keyword">@description</span> : for 循环
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> num <span class="token operator">&lt;=</span> <span class="token number">50</span><span class="token punctuation">;</span> num<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"1 + 2 + …… + 50 = "</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220707-control-process/for.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>for</code> 循环的语法形式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>初始条件<span class="token punctuation">;</span>终止条件<span class="token punctuation">;</span>更新语句<span class="token punctuation">)</span><span class="token punctuation">{</span>
    循环语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>for</code> 循环的执行步骤如下：</p>
<ol>
<li>首先执行初始条件，可以声明一种类型，但可以初始化一个或多个循环控制变量，甚至可以放空。</li>
<li>接着判断终止条件，如果为 <code v-pre>true</code>，则进入循环体执行循环语句；如果为 <code v-pre>false</code>，则终止循环，执行循环体后面的语句。</li>
<li>一次循环完成后，执行更新语句来更新循环控制变量。</li>
<li>最后再次判断终止条件，循环以上三个步骤。</li>
</ol>
<p><code v-pre>for</code> 和 <code v-pre>while</code> 最大的区别就在于 <code v-pre>for</code> 循环一般都是事先知道需要循环的次数的，而 <code v-pre>while</code> 循环则不需要。</p>
<ul>
<li><strong>增强 for 循环</strong></li>
</ul>
<p>自 Java 5 后，引入了一种增强型 <code v-pre>for</code> 循环，主要用于数字遍历，其语法格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>声明语句<span class="token operator">:</span>表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// 循环语句</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/16 10:39
 * <span class="token keyword">@description</span> : 增强 for 循环
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> number <span class="token operator">:</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>number <span class="token operator">+</span> <span class="token string">"\t"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220707-control-process/for-each.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>其中，声明语句一般是声明一个同数组数据类型相同的局部变量，而表达式则是要访问的数组名或者返回值是数组的方法。</p>
<h3 id="for-和-while-的区别" tabindex="-1"><a class="header-anchor" href="#for-和-while-的区别" aria-hidden="true">#</a> for 和 while 的区别</h3>
<p>经过上面的学习，我们可以发现，基本能用 <code v-pre>for</code> 循环的，都能将其改写成 <code v-pre>while</code> 循环。而使用 <code v-pre>while</code> 循环的，也可以在一定程度上改写成 <code v-pre>for</code> 循环。两者的运行规则都是一样的，那针对什么场景该使用 <code v-pre>for</code>，什么场景又该使用 <code v-pre>while</code> 呢？</p>
<p>通常，如果我们知道循环的次数或者循环的范围，那么我们优先使用 <code v-pre>for</code> 循环。如果不知道循环的次数和范围，而只知道循环的结束条件，那么此时优先使用 <code v-pre>while</code> 循环。</p>
<h3 id="continue-break" tabindex="-1"><a class="header-anchor" href="#continue-break" aria-hidden="true">#</a> continue &amp; break</h3>
<h3 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h3>
<p>主要用在循环语句或者 <code v-pre>switch</code> 语句中，表示跳出最里层的循环，然后继续执行该循环下的语句。</p>
<p><code v-pre>break</code> 在 <code v-pre>switch</code> 语句中的用法已经见识过了，我们就来看看它在循环中的应用。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/16 10:51
 * <span class="token keyword">@description</span> : break &amp; continue
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i = "</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220707-control-process/break.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>观察结果可知，当 <code v-pre>i == 5</code> 时，我们执行了 <code v-pre>break</code> 语句，此时就直接跳出了 <code v-pre>for</code> 循环，而不再进行下一次的循环。</p>
<h3 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h3>
<p><code v-pre>continue</code> 也同样是应用在循环控制结构中，主要是让程序跳出当次循环，进而进入下一次循环的迭代。</p>
<p>在 <code v-pre>for</code> 循环中，执行 <code v-pre>continue</code> 语句后，直接跳转到更新语句，而不再执行 <code v-pre>continue</code> 后的语句。而在 <code v-pre>while</code> 或 <code v-pre>do……while</code> 循环中，执行 <code v-pre>continue</code> 语句后，直接跳转到表达式的判断。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/16 10:51
 * <span class="token keyword">@description</span> : break &amp; continue
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i = "</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220707-control-process/continue.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>观察上述结果可知，当 <code v-pre>i == 5</code> 时，我们执行了 <code v-pre>continue</code> 语句，此时便跳出了当次循环，不再进行后边的打印语句，然后继续下一次的循环，所以最终打印的结果没有 5.</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>今天的内容到此就结束了，老规矩，如果大家觉得有用的话，就给个点赞关注吧！</p>
<p>其次就是对于文中遗漏或者存在欠缺的知识点，还请大家不吝赐教，在评论区指出来！</p>
<p><strong>关注公众号，获取最新文章更新</strong></p>
<div style="text-align:center">
<figure><img src="https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif" alt="" width="200" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<Share colorful /></div></template>


