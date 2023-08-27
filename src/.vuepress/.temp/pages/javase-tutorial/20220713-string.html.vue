<template><div><h1 id="string-详解" tabindex="-1"><a class="header-anchor" href="#string-详解" aria-hidden="true">#</a> String 详解</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p><code v-pre>String</code> 类代表字符串，定义的变量可以用来指向字符串对象，然后操作该字符串，同时还提供了许多用于操作字符串的功能。Java 中，所有的字符串都用双引号 <code v-pre>&quot;&quot;</code> 括起来。</p>
<p>此外，<code v-pre>String</code> 是不可变的字符串类型，它的对象一旦创建，就不能够再被更改。</p>
<p>但在实际使用过程中，给我们的实际观感可能会觉得 <code v-pre>String</code> 是可变的，但实际上 <code v-pre>String</code> 每次的修改都是产生并指向了新的字符串对象，原来的字符串对象实际上是没有改变的。</p>
<h2 id="创建对象的两种方式" tabindex="-1"><a class="header-anchor" href="#创建对象的两种方式" aria-hidden="true">#</a> 创建对象的两种方式</h2>
<ol>
<li>直接赋值</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> wepublic <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>通过构造方法创建</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 创建一个不含任何内容的空白字符串对象</span>
<span class="token class-name">String</span> wepublic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 根据传入的字符串内容创建字符串对象</span>
<span class="token class-name">String</span> wepublic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"村雨遥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>构造方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>public String()</code></td>
<td>创建一个不含任何内容的空白字符串对象</td>
</tr>
<tr>
<td><code v-pre>public String(String original)</code></td>
<td>根据传入的字符串内容来创建字符串对象</td>
</tr>
<tr>
<td><code v-pre>public String(char[] chs)</code></td>
<td>根据字符串数组的内容来创建字符串对象</td>
</tr>
<tr>
<td><code v-pre>public String(bytes[] chs)</code></td>
<td>根据字节数组的内容来创建字符串对象</td>
</tr>
</tbody>
</table>
<p>两者的区别在于，利用 <code v-pre>&quot;&quot;</code> 方式所给出的字符串对象，存储在字符串常量池中，而且相同内容只会在其中存储一份。但是通过构造方法 <code v-pre>new</code> 对象，每次 <code v-pre>new</code> 都会产生一个新对象，它们是存放在堆内存中的。</p>
<p>这里要注意，任何类型的数据与字符串相加时，得到的会是一个字符串。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token string">"cunyu"</span> <span class="token operator">+</span> <span class="token number">1943</span> <span class="token operator">=</span> <span class="token string">"cunyu1943"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="字符串常用-api" tabindex="-1"><a class="header-anchor" href="#字符串常用-api" aria-hidden="true">#</a> 字符串常用 API</h2>
<h3 id="public-boolean-equals-object-anotherobject" tabindex="-1"><a class="header-anchor" href="#public-boolean-equals-object-anotherobject" aria-hidden="true">#</a> public boolean equals(Object anotherObject)</h3>
<ol>
<li><strong>功能</strong></li>
</ol>
<p>将此字符串与指定对象比较，只关心字符串内容是否一致。</p>
<ol start="2">
<li><strong>示例</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EqualsTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">"村雨"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token string">"村雨"</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/equals.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="public-boolean-equalsignorecase-string-anotherstring" tabindex="-1"><a class="header-anchor" href="#public-boolean-equalsignorecase-string-anotherstring" aria-hidden="true">#</a> public boolean equalsIgnoreCase(String anotherString)</h3>
<ol>
<li><strong>功能</strong></li>
</ol>
<p>将此字符串与指定对象进行比较，忽略大小写比较字符串内容是否一致。</p>
<ol start="2">
<li><strong>示例</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EqualsIgnoreCaseTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">"cunyu1943"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">"CUNYU1943"</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/equalsignorecase.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="public-int-length" tabindex="-1"><a class="header-anchor" href="#public-int-length" aria-hidden="true">#</a> public int length()</h3>
<ol>
<li><strong>功能</strong></li>
</ol>
<p>求字符串长度。</p>
<ol start="2">
<li><strong>示例</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LengthTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入一个字符串"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> str <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入的字符串的长度为: "</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/lenth.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="public-char-charat-int-index" tabindex="-1"><a class="header-anchor" href="#public-char-charat-int-index" aria-hidden="true">#</a> public char charAt(int index)</h3>
<ol>
<li><strong>功能</strong></li>
</ol>
<p>获取某个索引位置处的字符。</p>
<ol start="2">
<li><strong>示例</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CharAtTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"cunyu1943"</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"索引位置为 3 的字符为: "</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/chatat.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="public-char-tochararray" tabindex="-1"><a class="header-anchor" href="#public-char-tochararray" aria-hidden="true">#</a> public char[] toCharArray()</h3>
<ol>
<li><strong>功能</strong></li>
</ol>
<p>字符串转换为字符串数组。</p>
<ol start="2">
<li><strong>示例</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ToCharArrayTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"cunyu1943"</span><span class="token punctuation">;</span>

        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> charArray <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>charArray<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/tochararray.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="public-string-substring-int-beginindex-int-endindex" tabindex="-1"><a class="header-anchor" href="#public-string-substring-int-beginindex-int-endindex" aria-hidden="true">#</a> public String substring(int beginIndex, int endIndex)</h3>
<ol>
<li><strong>功能</strong></li>
</ol>
<p>根据开始和结束索引进行截取得到新的子串（左闭右开）。</p>
<ol start="2">
<li><strong>示例</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubstringTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"cunyu1943"</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/substring.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="public-string-replace-charsequence-target-charsequence-replacement" tabindex="-1"><a class="header-anchor" href="#public-string-replace-charsequence-target-charsequence-replacement" aria-hidden="true">#</a> public String replace(CharSequence target, CharSequence replacement)</h3>
<ol>
<li><strong>功能</strong></li>
</ol>
<p>使用新值将字符串中的旧值替换得到新字符串。</p>
<ol start="2">
<li><strong>示例</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReplaceTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span> ch1 <span class="token operator">=</span> <span class="token char">'u'</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> ch2 <span class="token operator">=</span> <span class="token char">'x'</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"cunyu1943"</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"原字符串: "</span> <span class="token operator">+</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"替换后的字符串: "</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>ch1<span class="token punctuation">,</span> ch2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/replace.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="public-string-split-string-regex" tabindex="-1"><a class="header-anchor" href="#public-string-split-string-regex" aria-hidden="true">#</a> public String[] split(String regex)</h3>
<ol>
<li><strong>功能</strong></li>
</ol>
<p>通过正则规则切割字符串，得到字符串数组。</p>
<ol start="2">
<li><strong>示例</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SplitTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"010-110-119"</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> splitArray <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"-"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>splitArray<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/split.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="stringbuilder" tabindex="-1"><a class="header-anchor" href="#stringbuilder" aria-hidden="true">#</a> StringBuilder</h2>
<p><code v-pre>StringBuilder</code> 可以看做一个容器，创建后其中的内容可变，主要是为了提高字符串 <code v-pre>String</code> 的操作效率。</p>
<h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>public StringBuilder()</code></td>
<td>创建一个不含任何内容的空白可变字符串对象</td>
</tr>
<tr>
<td><code v-pre>public StringBuilder(String str)</code></td>
<td>根据字符串内容，创建可变字符串对象</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringBuilderConstrcutor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> stringBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"无参构造："</span> <span class="token operator">+</span> stringBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">StringBuilder</span> stringBuilder1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">"村雨遥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"有参构造："</span> <span class="token operator">+</span> stringBuilder1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/stringbuilder.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>public int length()</code></td>
<td>返回字符串长度</td>
</tr>
<tr>
<td><code v-pre>public String toString()</code></td>
<td>将 <code v-pre>StringBuilder</code> 转换为 <code v-pre>String</code></td>
</tr>
<tr>
<td><code v-pre>public StringBuilder append(Object obj)</code></td>
<td>添加数据并返回对象本身</td>
</tr>
<tr>
<td><code v-pre>public StringBuilder reverse()</code></td>
<td>反转容器中的内容</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringBuilderMethodTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> stringBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">"村雨遥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"原字符串："</span> <span class="token operator">+</span> stringBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"length(): "</span> <span class="token operator">+</span> stringBuilder<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        stringBuilder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"cunyu1943"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"append(): "</span> <span class="token operator">+</span> stringBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"toString(): "</span> <span class="token operator">+</span> stringBuilder<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"reverse(): "</span> <span class="token operator">+</span> stringBuilder<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/common-used-method.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="stringjoiner" tabindex="-1"><a class="header-anchor" href="#stringjoiner" aria-hidden="true">#</a> StringJoiner</h2>
<p>类似于 <code v-pre>StringBuilder</code>，都可以把它们看做是一个容器，而且它们里面的内容还是可变的，而它的出现也是为了提高操作字符串的效率。</p>
<h3 id="构造方法-1" tabindex="-1"><a class="header-anchor" href="#构造方法-1" aria-hidden="true">#</a> 构造方法</h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>public StringJoiner(间隔符)</code></td>
<td>创建一个 <code v-pre>StringJoiner</code> 对象并指定拼接时的间隔符</td>
</tr>
<tr>
<td><code v-pre>public StringJoiner(间隔符, 开始符号, 结束符号)</code></td>
<td>创建一个 <code v-pre>StringJoiner</code> 对象并指定拼接时的间隔符、开始符号、结束符号</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringJoiner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringJoinerConstructorTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringJoiner</span> stringJoiner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringJoiner</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stringJoiner<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stringJoiner<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"13"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stringJoiner<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">StringJoiner</span> stringJoiner1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringJoiner</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token string">"["</span><span class="token punctuation">,</span> <span class="token string">"]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stringJoiner1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stringJoiner1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"13"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stringJoiner1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/string-joiner.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="常用方法-1" tabindex="-1"><a class="header-anchor" href="#常用方法-1" aria-hidden="true">#</a> 常用方法</h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>public StringJoiner add(Object obj)</code></td>
<td>添加数据后返回对象本身</td>
</tr>
<tr>
<td><code v-pre>public int length()</code></td>
<td>返回字符串长度</td>
</tr>
<tr>
<td><code v-pre>public String toString()</code></td>
<td>将 <code v-pre>StringJoiner</code> 转换为 <code v-pre>String</code></td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringJoiner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringJoinerMethodTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringJoiner</span> stringJoiner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringJoiner</span><span class="token punctuation">(</span><span class="token string">"---"</span><span class="token punctuation">,</span> <span class="token string">"{"</span><span class="token punctuation">,</span> <span class="token string">"}"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        stringJoiner<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"cunyu"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stringJoiner<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"1943"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stringJoiner<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"村雨遥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"length(): "</span> <span class="token operator">+</span> stringJoiner<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"toString(): "</span> <span class="token operator">+</span> stringJoiner<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220713-string/string-joiner-method.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>以上就是关于 <code v-pre>Java</code> 中字符串的相关知识点了，主要介绍了 <code v-pre>String</code> 类创建对象的两种方式以及常用 <code v-pre>API</code>。此外，为了提高字符串的操作效率，还了解 <code v-pre>StringBuilder</code> 和 <code v-pre>StringJoiner</code> 的构造方法以及常用方法，方便后续编程中使用。</p>
<Share colorful /></div></template>


