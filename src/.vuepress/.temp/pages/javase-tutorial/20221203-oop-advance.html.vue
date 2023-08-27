<template><div><h1 id="static-和-final-小课堂" tabindex="-1"><a class="header-anchor" href="#static-和-final-小课堂" aria-hidden="true">#</a> static 和 final 小课堂</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>学习了面向对象的一些知识点后，在看别人的代码中经常会看到 <code v-pre>static</code> 和 <code v-pre>final</code> 两个关键字，那你知道它俩都是做什么用的么，使用的时候需要注意啥呢？</p>
<p>今天的内容就来一起了解下，<code v-pre>static</code> 和 <code v-pre>final</code> 关键字的使用。</p>
<h2 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h2>
<p>静态的意思，是 <code v-pre>Java</code> 中常用的修饰符，既可以用它来修饰成员变量，也可以用它来修饰成员方法。</p>
<h3 id="静态变量" tabindex="-1"><a class="header-anchor" href="#静态变量" aria-hidden="true">#</a> 静态变量</h3>
<p>静态变量就是用 <code v-pre>static</code> 来修饰的成员变量，最重要的特点就是一个类中的静态变量被类中的所有对象所共享。它不属于任何一个对象，而是属于类。其生命周期同类一样，共生共存，是优先于对象的。</p>
<p>和成员变量不同的是，成员变量只能通过新建对象，然后用对象名来进行调用。而静态变量不仅仅可以用这种方式，还可以直接通过类名来进行调用，而这也是更为推荐的方式。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 成员变量 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 静态变量 */</span>
    pubic <span class="token keyword">static</span> <span class="token class-name">String</span> game<span class="token punctuation">;</span>

    <span class="token comment">// 各种 setter 和 getter</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><strong>成员变量调用</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Hero</span> hero <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hero</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hero<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"赵怀真"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>静态变量调用</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
       	<span class="token comment">// 第一种方式</span>
        <span class="token class-name">Hero</span> hero <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hero</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hero<span class="token punctuation">.</span><span class="token function">setGame</span><span class="token punctuation">(</span><span class="token string">"王者荣耀"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 第二种方式，更为推荐</span>
        <span class="token class-name">Hero</span><span class="token punctuation">.</span><span class="token function">setGame</span><span class="token punctuation">(</span><span class="token string">"王者荣耀"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h3>
<p>静态方法就是类中用 <code v-pre>static</code> 来修饰的成员方法，一般用来修饰公共的工具类或者测试类。</p>
<p>同样的，静态方法既可以用通过新建对象，然后用对象名来调用的方式，也可以直接通过类名来调用的方式，这也是更为推荐的方式。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Util</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Util</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    pubilc <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"攻击"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Util</span><span class="token punctuation">.</span><span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<p>使用 <code v-pre>static</code> 修饰方法或变量后，需要注意以下的小细节。</p>
<ul>
<li>一个静态方法中<strong>只能</strong>访问静态变量和其他的静态方法。而不能访问非静态的变量和方法。</li>
<li>但一个非静态方法一方面既可以访问静态变量，也可以访问非静态变量；另一方面，也既可以访问静态方法，也可以访问非静态方法。</li>
<li>不同于成员方法，静态方式中是不存在 <code v-pre>this</code> 关键字的。</li>
</ul>
<h3 id="静态代码块" tabindex="-1"><a class="header-anchor" href="#静态代码块" aria-hidden="true">#</a> 静态代码块</h3>
<p>在代码中用 <code v-pre>static{}</code> 包裹起来的代码叫做静态代码块，它会随着类的加载而加载，而且会自动触发，只执行一次，一般用来对一些数据初始化。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token keyword">static</span><span class="token punctuation">{</span>
        password <span class="token operator">=</span> <span class="token string">"123456"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="final" tabindex="-1"><a class="header-anchor" href="#final" aria-hidden="true">#</a> final</h2>
<h3 id="修饰变量" tabindex="-1"><a class="header-anchor" href="#修饰变量" aria-hidden="true">#</a> 修饰变量</h3>
<p>用 <code v-pre>final</code> 修饰的变量叫做常量，说明它只能被赋值一次。</p>
<p>实际开发中，一般用常量来作为系统的配置信息，一方面既方便维护，另一方面又可以提高代码可读性。</p>
<p>对常量进行命名时，一般遵循以下的规范：</p>
<ul>
<li>如果是单个单词，那么将它全部大写即可。</li>
<li>如果是多个单词，那么将每个单词都大写，并且单词之间用下划线 <code v-pre>_</code> 隔开。</li>
</ul>
<p>此外，对于修饰的变量的类型不同，含义也是不一样的。</p>
<p>如果修饰的变量是一个基本类型，那么表示的是该变量存储的<strong>数据值</strong>不可改变。而如果修饰的变量是一个引用类型，则表示该变量存储的<strong>地址值</strong>不能改变，但是对象内部是可以发生变化的。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Comic</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> type<span class="token punctuation">;</span>
    <span class="token comment">// setter、getter、Constructor 省略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">SIZE</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

        <span class="token comment">// 此时会报错</span>
        <span class="token comment">// SIZE = 10;</span>

        <span class="token keyword">final</span> <span class="token class-name">Comic</span> comic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comic</span><span class="token punctuation">(</span><span class="token string">"灌篮高手"</span><span class="token punctuation">,</span> <span class="token string">"运动"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 不会报错，因为地址值未变，变的是对象内部</span>
        comic<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"海贼王"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comic<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token string">"冒险"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰方法" tabindex="-1"><a class="header-anchor" href="#修饰方法" aria-hidden="true">#</a> 修饰方法</h3>
<p>说明该方法是最终方法，不能再被重写。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"行走"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token comment">// 会报错，因为 final 修饰的方法不能再被重写</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"行走"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰类" tabindex="-1"><a class="header-anchor" href="#修饰类" aria-hidden="true">#</a> 修饰类</h3>
<p>说明这个类时最终类，不能够再被继承。也就是说，如果一个类被 <code v-pre>final</code> 所修饰，那么这个类不能作为其他任意类的福来。如果试图对一个用 <code v-pre>final</code> 修饰的类进行继承，则在编译期间可能会发生错误。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 继承用 final 修饰的类，此时会报错</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>今天的内容到此就结束了，首先介绍了 <code v-pre>static</code> 用来修饰符变量和方法的应用场景，还额外补充了静态代码块相关的知识点。另外，我们也对 <code v-pre>final</code> 用来修饰变量、方法和类时的场景进行了回顾。</p>
<p>码字不易，如果本文对你所有帮助，那就来个一键三连吧！</p>
<Share colorful /></div></template>


