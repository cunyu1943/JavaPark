<template><div><h1 id="流程控制知识大闯关" tabindex="-1"><a class="header-anchor" href="#流程控制知识大闯关" aria-hidden="true">#</a> 流程控制知识大闯关</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/K4aL8o_ND7R_W0mooNhusw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/K4aL8o_ND7R_W0mooNhusw<ExternalLinkIcon/></a></p>
</div>
<hr>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>既然已经学习了 <code v-pre>Java</code> 中的流程控制，接下来就来实际操作下，利用我们所学知识来解决实际的问题。</p>
<p>光学是没有用的，只有不断实践才能了解其中的真正含义。</p>
<h2 id="闯关" tabindex="-1"><a class="header-anchor" href="#闯关" aria-hidden="true">#</a> 闯关</h2>
<h3 id="第一关-打印折纸的次数" tabindex="-1"><a class="header-anchor" href="#第一关-打印折纸的次数" aria-hidden="true">#</a> 第一关：打印折纸的次数</h3>
<ol>
<li><strong>题目</strong></li>
</ol>
<p>已知世界上最高的山峰是珠穆朗玛峰，它的高度是 <code v-pre>8844.43</code> 米，假设有一张足够大的纸，其厚度为 <code v-pre>0.1</code> 毫米，那么请问我要折叠多少次，才能将这张纸折成珠穆朗玛峰的高度？</p>
<ol start="2">
<li><strong>解析</strong></li>
</ol>
<table>
<thead>
<tr>
<th style="text-align:center">折叠次数</th>
<th style="text-align:center">厚度</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>1</code></td>
<td style="text-align:center"><code v-pre>0.1</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>2</code></td>
<td style="text-align:center"><code v-pre>0.2</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>3</code></td>
<td style="text-align:center"><code v-pre>0.4</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>4</code></td>
<td style="text-align:center"><code v-pre>0.8</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>……</code></td>
<td style="text-align:center"><code v-pre>……</code></td>
</tr>
</tbody>
</table>
<p>可以发现，纸张初始厚度为 <code v-pre>0.1</code> 毫米，而每次折叠之后，折叠后的纸张厚度都是未折叠前的 <code v-pre>2</code> 倍。而同时，我们事先是不清楚具体要叠多少次的，所以我们选择 <code v-pre>while</code> 来进行循环。</p>
<ol start="3">
<li><strong>实现</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MountQomolangma</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">double</span> <span class="token constant">HEIGHT</span> <span class="token operator">=</span> <span class="token number">8844430</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 初始厚度</span>
        <span class="token keyword">double</span> init <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>

        <span class="token comment">// 统计次数</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>init <span class="token operator">&lt;</span> <span class="token constant">HEIGHT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            init <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"一共需要折叠 "</span> <span class="token operator">+</span> count <span class="token operator">+</span> <span class="token string">" 次"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二关-回文数" tabindex="-1"><a class="header-anchor" href="#第二关-回文数" aria-hidden="true">#</a> 第二关：回文数</h3>
<ol>
<li><strong>题目</strong></li>
</ol>
<p>假设给你一个整数 <code v-pre>x</code>，如果这个数是回文数，打印 <code v-pre>true</code>，否则打印 <code v-pre>false</code>。</p>
<p>回文数：指正序（从左向右）和倒序（从右向左）读都是一样的整数。</p>
<ol start="2">
<li><strong>解析</strong></li>
</ol>
<p>既然回文数的定义是正序和倒序读都是一样，那么我们就把这个数逆转，然后比较逆转的数和原来的数是否相等，如果相等，那么说明这个数是一个回文数，否则它就不是一个回文数。</p>
<ol start="3">
<li><strong>实现</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Palindromes</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入一个整数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 输入的初始值</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 临时记录</span>
        <span class="token keyword">int</span> tmp <span class="token operator">=</span> num<span class="token punctuation">;</span>
        <span class="token comment">// 反转后的数</span>
        <span class="token keyword">int</span> reverse <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> x <span class="token operator">=</span> num <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            num <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            reverse <span class="token operator">=</span> reverse <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tmp <span class="token operator">+</span> <span class="token string">" 是一个回文数 ："</span> <span class="token operator">+</span> <span class="token punctuation">(</span>reverse <span class="token operator">==</span> tmp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三关-求商和余数" tabindex="-1"><a class="header-anchor" href="#第三关-求商和余数" aria-hidden="true">#</a> 第三关：求商和余数</h3>
<ol>
<li><strong>题目</strong></li>
</ol>
<p>给定两个整数，分别是被除数和除数，然后在不使用乘法、除法和 <code v-pre>%</code> 运算符的情况下，求出商和余数。</p>
<ol start="2">
<li><strong>解析</strong></li>
</ol>
<p>平时如果要求两数的商，那么可以使用 <code v-pre>/</code>，而要求两数的余数则可以使用 <code v-pre>%</code>。但现在已经规定不能使用这两个运算符，那么就只想另想办法。</p>
<p>我们知道，其实乘除法归根结底还是加减法的简化，所以我们可以利用减法来实现求两数的商和余数。</p>
<ol start="3">
<li><strong>实现</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Division</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入被除数："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num1 <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入除数："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num2 <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 商</span>
        <span class="token keyword">int</span> quotient <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 余数</span>
        <span class="token keyword">int</span> remainder <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>num1 <span class="token operator">>=</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            num1 <span class="token operator">-=</span> num2<span class="token punctuation">;</span>
            quotient<span class="token operator">++</span><span class="token punctuation">;</span>
            remainder <span class="token operator">=</span> num1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"两数的商是: %d, 两数的余数是: %d\n"</span><span class="token punctuation">,</span> quotient<span class="token punctuation">,</span> remainder<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第四关-逢七必过" tabindex="-1"><a class="header-anchor" href="#第四关-逢七必过" aria-hidden="true">#</a> 第四关：逢七必过</h3>
<ol>
<li><strong>题目</strong></li>
</ol>
<p>游戏规则：从任意一个数字开始报数，当要报的数字是包含 <code v-pre>7</code> 或 <code v-pre>7</code> 的倍数时，都要说：过。</p>
<p>打印出 <code v-pre>1 - 100</code> 之间的满足逢七必过规则的数据。</p>
<ol start="2">
<li><strong>解析</strong></li>
</ol>
<p>当一个数是 <code v-pre>7</code> 的倍数，那么这个数除以 <code v-pre>7</code> 的余数为 <code v-pre>0</code>。而如果这个数包含 <code v-pre>7</code>，那么这个数的个位或者十位是 <code v-pre>7</code>。</p>
<ol start="3">
<li><strong>实现</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SevenPass</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> ge <span class="token operator">=</span> i <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> shi <span class="token operator">=</span> i <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">7</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> ge <span class="token operator">==</span> <span class="token number">7</span> <span class="token operator">||</span> shi <span class="token operator">==</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"过"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第五关-平方根" tabindex="-1"><a class="header-anchor" href="#第五关-平方根" aria-hidden="true">#</a> 第五关：平方根</h3>
<ol>
<li><strong>题目</strong></li>
</ol>
<p>输入一个大于等于 <code v-pre>2</code> 的整数，计算并返回这个数的平方根，结果只保留整数部分。</p>
<ol start="2">
<li><strong>解析</strong></li>
</ol>
<p>求一个数的平方根，通过遍历的方式，如果在不大于所给数的范围之内存在一个数的平方等于所给数，那么范围内的这个数就是所给数的平方根。而如果范围内存在一个数的平方刚好大于所给数，那么比这个数小 <code v-pre>1</code> 的数一定是所给数的平方根的整数部分，也就是我们所求的结果。</p>
<ol start="3">
<li><strong>实现</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入一个整数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> i <span class="token operator">*</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">" 的平方根是: "</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> i <span class="token operator">*</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">" 的平方根是: "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第六关-判断一个数是否为质数" tabindex="-1"><a class="header-anchor" href="#第六关-判断一个数是否为质数" aria-hidden="true">#</a> 第六关：判断一个数是否为质数</h3>
<ol>
<li><strong>题目</strong></li>
</ol>
<p>从键盘输入一个正整数，判断该数是否为质数。</p>
<ol start="2">
<li><strong>解析</strong></li>
</ol>
<p>所谓质数，就是指这个数只能被 <code v-pre>1</code> 和它本身整除，要注意 <code v-pre>1</code> 既不是质数也不是合数。</p>
<p>此时通过遍历，如果 <code v-pre>1</code> 到它之间存在一个数能被所给数整除，那么说明说给数不是一个质数。</p>
<ol start="3">
<li><strong>实现</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Prime</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入一个整数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> num <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">==</span> num <span class="token operator">%</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">" 是一个质数："</span> <span class="token operator">+</span> flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第七关-猜数小游戏" tabindex="-1"><a class="header-anchor" href="#第七关-猜数小游戏" aria-hidden="true">#</a> 第七关：猜数小游戏</h3>
<ol>
<li><strong>题目</strong></li>
</ol>
<p>系统随机给出一个 <code v-pre>1 - 100</code> 之间的整数，然后用程序实现才出这个数字是多少。</p>
<ol start="2">
<li><strong>解析</strong></li>
</ol>
<p>随机数需要用 <code v-pre>Random</code> 包，然后就是通过比较输入的数和生成的随机数大小，直到最后猜中。</p>
<ol start="3">
<li><strong>实现</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GuessNum</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Random</span> rand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> rand<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入你猜的数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> tmp <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> tmp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"你猜对了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> tmp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"你猜大了，再猜"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"你猜小了，再猜"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>以上就是关于流程控制中关于 <code v-pre>for</code>、<code v-pre>while</code> 的知识测验了，你闯过了几关呢？</p>
<p>最后，文中所有代码已上传到 <code v-pre>Gitee</code>，有需要的朋友可以自取。</p>
<blockquote>
<p>传送门：<a href="https://gitee.com/cunyu1943/java-in-practice" target="_blank" rel="noopener noreferrer">https://gitee.com/cunyu1943/java-in-practice<ExternalLinkIcon/></a></p>
</blockquote>
<Share colorful /></div></template>


