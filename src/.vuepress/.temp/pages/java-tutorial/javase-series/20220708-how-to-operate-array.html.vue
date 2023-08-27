<template><div><h1 id="数组操作的奇技淫巧" tabindex="-1"><a class="header-anchor" href="#数组操作的奇技淫巧" aria-hidden="true">#</a> 数组操作的奇技淫巧</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/2Ff14d3cwjVflhtz67k3vQ" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/2Ff14d3cwjVflhtz67k3vQ<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>前边已经讲过了 Java 中的 8 大基本数据类型，这篇文章主要就来讲讲引用类型中的数组。主要内容安排如下：</p>
<ul>
<li><strong>数组简介</strong></li>
<li><strong>遍历</strong></li>
<li><strong>排序</strong></li>
<li><strong>常用方法</strong></li>
</ul>
<h2 id="数组简介" tabindex="-1"><a class="header-anchor" href="#数组简介" aria-hidden="true">#</a> 数组简介</h2>
<p>所谓数组，其实就是多个相同数据类型的元素按一定顺序排列而成的集合。即将有限个类型相同的变量放到一个容器中，然后按照编号去访问各个元素，而这个容器的名字就叫做数组名，各个元素的编号就叫做索引位置。而其中索引位置是从 <code v-pre>0</code> 开始计数，而不是我们日常所习惯的 <code v-pre>1</code>。</p>
<p>要定义一个数组类型的遍历，其语法为 <code v-pre>数据类型 []</code>，比如 <code v-pre>int[]</code>，而且在初始化时必须指定数组大小，如 <code v-pre>int[] arr = new int[10]</code>，表示 <code v-pre>arr</code> 数组可以容纳 <code v-pre>10</code> 个 <code v-pre>int</code> 类型的元素。</p>
<p>数组的特点：</p>
<ul>
<li>数组中的元素初始化时都是有默认值的，整型对应 <code v-pre>0</code>，浮点型对应 <code v-pre>0.0</code>，而布尔型对应 <code v-pre>false</code>。</li>
<li>数组一经创建，其大小（长度）就不可再变。</li>
<li>要访问数组中的某一元素，需要用到索引，索引从 <code v-pre>0</code> 开始。</li>
<li>如果要修改数组中的某一元素，直接对对应索引位置的元素使用赋值语句即可。</li>
</ul>
<p>和变量一样，既然定义了，那么就要对数组进行初始化。所谓数组的初始化，指的是在内存中，为数组容器开辟空间，然后将数据存入容器中的过程。而常用的初始化方式主要有两种：</p>
<ul>
<li><strong>静态初始化</strong></li>
<li><strong>动态初始化</strong></li>
</ul>
<h3 id="一维数组" tabindex="-1"><a class="header-anchor" href="#一维数组" aria-hidden="true">#</a> 一维数组</h3>
<h4 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h4>
<ol>
<li><strong>静态初始化</strong></li>
</ol>
<p>所谓静态初始化，就是在定义数组的同时将其初始化。</p>
<p>静态初始化的完整格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>数据类型<span class="token punctuation">[</span><span class="token punctuation">]</span> 数组名 <span class="token operator">=</span> <span class="token keyword">new</span> 数据类型<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>元素 <span class="token number">1</span><span class="token punctuation">,</span> 元素 <span class="token number">2</span><span class="token punctuation">,</span> 元素 <span class="token number">3</span>…<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但在开发时，为了方便，也可以对上面的代码进行简写：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>数据类型<span class="token punctuation">[</span><span class="token punctuation">]</span> 数组名 <span class="token operator">=</span> <span class="token punctuation">{</span>元素 <span class="token number">1</span><span class="token punctuation">,</span> 元素 <span class="token number">2</span><span class="token punctuation">,</span> 元素 <span class="token number">3</span>…<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>两种方式最终得到的结果是一样的，但第二种更加简洁方便。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>动态初始化</strong></li>
</ol>
<p>动态初始化，就是先声明数组长度定义之后，再由系统对其分配初始值。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>数据类型<span class="token punctuation">[</span><span class="token punctuation">]</span> 数组名 <span class="token operator">=</span> <span class="token keyword">new</span> 数据类型<span class="token punctuation">[</span>数组长度<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：注意数组的索引位置不能超过数组的长度，如上面例子中的数组长度为 <code v-pre>5</code>，所以我们数组的索引位置最大只能为 <code v-pre>4</code>，否则就会报数组越界错误。</p>
<h4 id="求数组长度" tabindex="-1"><a class="header-anchor" href="#求数组长度" aria-hidden="true">#</a> 求数组长度</h4>
<p>求数组的长度，利用数组的 <code v-pre>length</code> 属性即可；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> size <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 10</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"size = "</span> <span class="token operator">+</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二维数组" tabindex="-1"><a class="header-anchor" href="#二维数组" aria-hidden="true">#</a> 二维数组</h3>
<h4 id="初始化-1" tabindex="-1"><a class="header-anchor" href="#初始化-1" aria-hidden="true">#</a> 初始化</h4>
<ol>
<li><strong>静态初始化</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li><strong>动态初始化</strong></li>
</ol>
<p>二维数组动态声明时，一种是把行和列的长度都指定，而另一种是只需要指定行的长度，不用指定列的长度，列的长度会在初始化时自动确认。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="求数组长度-1" tabindex="-1"><a class="header-anchor" href="#求数组长度-1" aria-hidden="true">#</a> 求数组长度</h4>
<p>不同于一维数组，因为二维数组有行和列，所需求长度时需要分别求。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 求行的长度</span>
<span class="token keyword">int</span> row <span class="token operator">=</span> arr<span class="token punctuation">.</span>lenght<span class="token punctuation">;</span>
<span class="token comment">// 求列的长度，此时求任意一行所在的列的长度即可</span>
<span class="token keyword">int</span> col <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态初始化和动态初始化的区别" tabindex="-1"><a class="header-anchor" href="#静态初始化和动态初始化的区别" aria-hidden="true">#</a> 静态初始化和动态初始化的区别</h3>
<p>上面分别对一维数组和二维数组进行了静态初始化和动态初始化，通过比较总结出两者的区别如下：</p>
<p><strong>动态初始化</strong>：手动指定数组长度，然后由系统给出默认初始化值。</p>
<p><strong>静态初始化</strong>：手动指定数组元素，然后系统会根据元素个数计算出数组长度。</p>
<h2 id="数组遍历" tabindex="-1"><a class="header-anchor" href="#数组遍历" aria-hidden="true">#</a> 数组遍历</h2>
<p>既然我们已经学会了数组的声明及初始化，接下来就是对数组进行操作，而最常见的则是遍历数组。所谓遍历，就是将数组中的所有元素取出来，然后操作这些取出来的元素。</p>
<p>假设我们有一个数组如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"村雨遥"</span><span class="token punctuation">,</span> <span class="token string">"海贼王"</span><span class="token punctuation">,</span> <span class="token string">"进击的巨人"</span><span class="token punctuation">,</span> <span class="token string">"鬼灭之刃"</span><span class="token punctuation">,</span> <span class="token string">"斗罗大陆"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标准-for-循环" tabindex="-1"><a class="header-anchor" href="#标准-for-循环" aria-hidden="true">#</a> 标准 for 循环</h3>
<p>首先，我们来使用标准的 <code v-pre>for</code> 循环来遍历该数组，只需要通过数组的索引位置来访问即可。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu1943
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : TraverseTest
 * <span class="token keyword">@date</span> : 2021/4/25 11:52
 * <span class="token keyword">@description</span> : 遍历
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TraverseTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"村雨遥"</span><span class="token punctuation">,</span> <span class="token string">"海贼王"</span><span class="token punctuation">,</span> <span class="token string">"进击的巨人"</span><span class="token punctuation">,</span> <span class="token string">"鬼灭之刃"</span><span class="token punctuation">,</span> <span class="token string">"斗罗大陆"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//        数组长度</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"第 "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 个元素："</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220708-how-to-operate-array/for.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="增强-for-循环" tabindex="-1"><a class="header-anchor" href="#增强-for-循环" aria-hidden="true">#</a> 增强 for 循环</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : EnforceTraverseTest
 * <span class="token keyword">@date</span> : 2021/4/26 9:14
 * <span class="token keyword">@description</span> : 增强 for 循环
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnforceTraverseTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"村雨遥"</span><span class="token punctuation">,</span> <span class="token string">"海贼王"</span><span class="token punctuation">,</span> <span class="token string">"进击的巨人"</span><span class="token punctuation">,</span> <span class="token string">"鬼灭之刃"</span><span class="token punctuation">,</span> <span class="token string">"斗罗大陆"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"第 "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 个元素："</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            index<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220708-how-to-operate-array/for-each.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>两者的区别</strong>：标准 <code v-pre>for</code> 循环是通过计数器来进行遍历，我们能够很清晰的得知每个元素所对应的索引位置，而增强 <code v-pre>for each</code> 循环则是直接访问数组中的元素值，而不关心每个元素对应的索引位置。</p>
<h3 id="标准库遍历" tabindex="-1"><a class="header-anchor" href="#标准库遍历" aria-hidden="true">#</a> 标准库遍历</h3>
<p>通过调用标准库 <code v-pre>Arrays</code> 中的 <code v-pre>toString()</code> 方法，我们可以将任意类型的数组转换为一个字符串表示形式，从而打印出来。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : StandardLibraryTest
 * <span class="token keyword">@date</span> : 2021/4/26 9:22
 * <span class="token keyword">@description</span> : 标准库遍历
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StandardLibraryTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"村雨遥"</span><span class="token punctuation">,</span> <span class="token string">"海贼王"</span><span class="token punctuation">,</span> <span class="token string">"进击的巨人"</span><span class="token punctuation">,</span> <span class="token string">"鬼灭之刃"</span><span class="token punctuation">,</span> <span class="token string">"斗罗大陆"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220708-how-to-operate-array/arrays.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>以上的遍历主要是针对一维数组，而针对二维数组，当我们要访问其中的一个元素时，可以使用 <code v-pre>array[row][col]</code> 来进行访问，而对于二维及更多维的数组，可以使用 <code v-pre>Arrays.deepToString()</code>。</p>
<h2 id="数组排序" tabindex="-1"><a class="header-anchor" href="#数组排序" aria-hidden="true">#</a> 数组排序</h2>
<h3 id="使用排序算法" tabindex="-1"><a class="header-anchor" href="#使用排序算法" aria-hidden="true">#</a> 使用排序算法</h3>
<p>排序算法多样，最常用的则有 <strong>冒泡排序、插入排序、快速排序等</strong>，进行排序时会修改数组本身；</p>
<p>冒泡排序：经过一轮循环，将最大的数置换到末尾，然后进入下一轮循环，每轮均比上一轮的结束位置靠前一位；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : BubbleSort
 * <span class="token keyword">@date</span> : 2021/4/26 10:16
 * <span class="token keyword">@description</span> : 冒泡排序
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BubbleSort</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chArray <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">'c'</span><span class="token punctuation">,</span> <span class="token char">'u'</span><span class="token punctuation">,</span> <span class="token char">'n'</span><span class="token punctuation">,</span> <span class="token char">'y'</span><span class="token punctuation">,</span> <span class="token char">'u'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// 排序前</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>chArray<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chArray<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> chArray<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 从大到小</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>chArray<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> chArray<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 交换</span>
                    <span class="token keyword">char</span> temp <span class="token operator">=</span> chArray<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    chArray<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> chArray<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    chArray<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 冒泡排序后</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>chArray<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220708-how-to-operate-array/ort.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="标准库排序" tabindex="-1"><a class="header-anchor" href="#标准库排序" aria-hidden="true">#</a> 标准库排序</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : StandardLibrarySortTest
 * <span class="token keyword">@date</span> : 2021/4/26 10:22
 * <span class="token keyword">@description</span> : 标准库排序
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StandardLibrarySortTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"村雨遥"</span><span class="token punctuation">,</span> <span class="token string">"海贼王"</span><span class="token punctuation">,</span> <span class="token string">"进击的巨人"</span><span class="token punctuation">,</span> <span class="token string">"鬼灭之刃"</span><span class="token punctuation">,</span> <span class="token string">"斗罗大陆"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//        排序前</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        标准库排序</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        排序后</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220708-how-to-operate-array/arrsys-sort.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h2>
<p>对于数组而言，Java 标准库中已经内置了许多方法，常用的有如下一些方法：</p>
<table>
<thead>
<tr>
<th>返回值</th>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>static String</code></td>
<td><code v-pre>toString(Object[] a)</code></td>
<td>输出数组的字符串形式</td>
</tr>
<tr>
<td><code v-pre>static &lt;T&gt; List&lt;T&gt;</code></td>
<td><code v-pre>asList(T…… a)</code></td>
<td>数组转 <code v-pre>List</code></td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : CommonMethodsTest
 * <span class="token keyword">@date</span> : 2021/4/26 10:37
 * <span class="token keyword">@description</span> : 常用方法
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommonMethodsTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"村雨遥"</span><span class="token punctuation">,</span> <span class="token string">"海贼王"</span><span class="token punctuation">,</span> <span class="token string">"进击的巨人"</span><span class="token punctuation">,</span> <span class="token string">"鬼灭之刃"</span><span class="token punctuation">,</span> <span class="token string">"斗罗大陆"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//        输出数组的字符串形式</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"打印数组"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        数组转列表</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"数组转列表"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"列表转数组"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"镇魂街"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"数组是否包含某一元素"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"进击的巨人"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"网球王子"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220708-how-to-operate-array/out-array.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>数组相关的内容就到此结束了，主要从 4 个方面简单介绍了数组的一些相关用法，如果你有更多想要了解的内容，欢迎评论区留言交流。最后，都看到这儿了，不给个赞和关注再走么 🤔.</p>
<p><strong>关注公众号，获取最新文章更新</strong></p>
<div style="text-align:center">
<figure><img src="https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif" alt="" width="200" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<Share colorful /></div></template>


