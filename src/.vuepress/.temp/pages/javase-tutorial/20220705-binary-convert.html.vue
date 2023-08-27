<template><div><h1 id="常用进制转换" tabindex="-1"><a class="header-anchor" href="#常用进制转换" aria-hidden="true">#</a> 常用进制转换</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/2f_dODoVco-tSS66lF0U5A" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/2f_dODoVco-tSS66lF0U5A<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>所谓进制转换，就是人们利用符号来计数的方法。进制转换由一组数码符号和两个基本因素“基数”和“位权”所构成。其中<strong>基数</strong>是指进位计数制中所采用的数码的个数，逢 <code v-pre>n</code> 进 1 中的 <code v-pre>n</code> 就是基数。而<strong>位权</strong>则指的是进位制中每一个固定位置所对应的单位制，而每一种进制中的某一个数的每位上都有一个权值 <code v-pre>m</code>，而且权值是位数减一，比如个位上的数的权值为 <code v-pre>0</code>（位数 1 - 1 = 0），而十位的权值为 <code v-pre>1</code>（位数 2 - 1 = 1）。</p>
<p>在 Java 学习中，我们难免会和各种进制打交道。今天就来看看，在 Java 中最常用的几个进制的相关概念，以及如何利用 Java 来实现他们之间的相互转换！</p>
<h2 id="二进制" tabindex="-1"><a class="header-anchor" href="#二进制" aria-hidden="true">#</a> 二进制</h2>
<p>二进制是计算机中采用最广泛的一种数制，用 0 和 1 两个数码来表示，其进位规则是逢二进一，而借位规则则是借一当二。</p>
<p>如果要将二进制转换为十进制，则采用 <strong>按权展开求和</strong>方法，其步骤是先将二进制的数写成加权系数展开式，然后再更具十进制的加法规则进行求和。</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mn>1011</mn><msub><mo stretchy="false">)</mo><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>∗</mo><msup><mn>2</mn><mn>3</mn></msup><mo>+</mo><mn>0</mn><mo>∗</mo><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>∗</mo><msup><mn>2</mn><mn>1</mn></msup><mo>+</mo><mn>1</mn><mo>∗</mo><msup><mn>2</mn><mn>0</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mn>11</mn><msub><mo stretchy="false">)</mo><mn>10</mn></msub></mrow><annotation encoding="application/x-tex">
(1011)_2=1*2^3+0*2^2+1*2^1+1*2^0 = (11)_{10}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1011</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.9474em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.9474em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.9474em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8641em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">11</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">10</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></p>
<h2 id="十进制" tabindex="-1"><a class="header-anchor" href="#十进制" aria-hidden="true">#</a> 十进制</h2>
<p>而一个十进制数要转换为二进制数，则需要将整数和小数部分分别转换，最后再进行组合。其中，整数部分采用<strong>除二取余，逆序排序</strong>的方法。具体方法是用 2 来整除一个十进制数，从而得到一个商和余数；然后再用 2 去除以商，从而又得到一个商和余数，重复这个步骤，直到最后得到的商小于 1 时为止。最后把按照得到余数的先后顺序，逆序依次排列，得到的数即为这个十进制数的二进制表示。</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mn>15</mn><msub><mo stretchy="false">)</mo><mn>10</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn>1111</mn><msub><mo stretchy="false">)</mo><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">
(15)_{10}=(1111)_2
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">15</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">10</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1111</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></p>
<figure><img src="@source/javase-tutorial/assets/20220705-binary-convert/int.png" alt="整数部分" tabindex="0" loading="lazy"><figcaption>整数部分</figcaption></figure>
<p>小数部分则不同于整数部分，小数部分要使用<strong>乘 2 取整法</strong>，即用十进制的小数部分乘以 2，然后取结果的整数部分，然后再用剩下的小数重复刚才的步骤，直到最后剩余的小数为 0 时停止。最后将每次得到的整数部分按照先后顺序正序排列，从而得到对应的二进制表示。</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mn>0.25</mn><msub><mo stretchy="false">)</mo><mn>10</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn>0.01</mn><msub><mo stretchy="false">)</mo><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">
(0.25)_{10}=(0.01)_2
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0.25</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">10</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0.01</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></p>
<figure><img src="@source/javase-tutorial/assets/20220705-binary-convert/decimal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="八进制" tabindex="-1"><a class="header-anchor" href="#八进制" aria-hidden="true">#</a> 八进制</h2>
<p>所谓八进制，就是每 3 位二进制作为一个单元，其中最小的数是 0，最大的数是 7，一共 8 个数字。</p>
<p>要将二进制的数转换为八进制，需要将 3 个连续的数拼成一组，然后再独立转成八进制中的数字。</p>
<p>例如，二进制的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>111101011110</mn></mrow><annotation encoding="application/x-tex">111101011110</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">111101011110</span></span></span></span> 可以转换为八进制中的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>7536</mn></mrow><annotation encoding="application/x-tex">7536</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">7536</span></span></span></span>。</p>
<figure><img src="@source/javase-tutorial/assets/20220705-binary-convert/8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="十六进制" tabindex="-1"><a class="header-anchor" href="#十六进制" aria-hidden="true">#</a> 十六进制</h2>
<p>所谓十六进制，就是每 4 位二进制作为一个单元，其中最小数是 0，最大数是 15，一共 16 个数字，分别用 0 ~ 9、A、B、C、D、E、F 表示。</p>
<p>要将二进制转换为十六进制，需要将 4 个连续的数拼成一组，然后再独立转换为十六进制中对应的数字。</p>
<p>例如，二进制的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1111100111010111</mn></mrow><annotation encoding="application/x-tex">1111100111010111</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1111100111010111</span></span></span></span> 可以转换为十六进制中的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mn>9</mn><mi>D</mi><mn>7</mn></mrow><annotation encoding="application/x-tex">F9D7</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mord">9</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord">7</span></span></span></span>。</p>
<figure><img src="@source/javase-tutorial/assets/20220705-binary-convert/16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="常用进制转换-1" tabindex="-1"><a class="header-anchor" href="#常用进制转换-1" aria-hidden="true">#</a> 常用进制转换</h2>
<p>当然，Java 中也已经将常用的进制转换方法封装好了，我们只需要调用对应方法即可。</p>
<table>
<thead>
<tr>
<th>转换</th>
<th>方法</th>
<th>返回</th>
</tr>
</thead>
<tbody>
<tr>
<td>十进制 -&gt; 二进制</td>
<td><code v-pre>Integer.toBinary(int num)</code></td>
<td>二进制字符串</td>
</tr>
<tr>
<td>十进制 -&gt; 八进制</td>
<td><code v-pre>Integer.toOctalString(int num)</code></td>
<td>八进制字符串</td>
</tr>
<tr>
<td>十进制 -&gt; 十六进制</td>
<td><code v-pre>Integer.toHexString(int num)</code></td>
<td>十六进制字符串</td>
</tr>
<tr>
<td>十进制 -&gt; N 进制</td>
<td><code v-pre>Integer.toString(int num, int N)</code></td>
<td>N 进制字符串</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">" 的二进制是:"</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toBinaryString</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">" 的八进制是:"</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toOctalString</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">" 的十六进制是:"</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">" 的三进制是:"</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220705-binary-convert/parse-200.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>相反的，如果我们要将一个 <code v-pre>N</code> 进制的字符串 <code v-pre>str</code> 转换为十进制数，那么可以使用以下方法。</p>
<table>
<thead>
<tr>
<th>转换</th>
<th>方法</th>
<th>返回</th>
</tr>
</thead>
<tbody>
<tr>
<td>N 进制 -&gt; 十进制</td>
<td><code v-pre>Integer.parseInt(String str, int N)</code></td>
<td>十进制数</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"21104"</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token string">" 的十进制是:"</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token class-name">N</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220705-binary-convert/n210.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>以上就是有关二进制、十进制、八进制、十六进制相关的知识点了。此外还介绍了 Java 中如何进行十进制向其他进制的转换方法，以及如何将其他进制转换为十进制。如果你刚好这些内容对你有所帮助，那就来个一键三连吧！</p>
<Share colorful /></div></template>


