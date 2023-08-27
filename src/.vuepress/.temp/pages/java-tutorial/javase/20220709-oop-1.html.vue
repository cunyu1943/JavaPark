<template><div><h1 id="面向对象的-3、5-知识点" tabindex="-1"><a class="header-anchor" href="#面向对象的-3、5-知识点" aria-hidden="true">#</a> 面向对象的 3、5 知识点</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/Z4F7tsjLkPbTGy4_gJPQTw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/Z4F7tsjLkPbTGy4_gJPQTw<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>前面已经讲了 Java 的一些环境搭建、IDE 使用、变量及数据类型、操作符、控制流程以及数组操作，今天就来看看 Java 里边的一个核心思想 - <strong>面向对象编程</strong>。</p>
<h2 id="什么是面向对象" tabindex="-1"><a class="header-anchor" href="#什么是面向对象" aria-hidden="true">#</a> 什么是面向对象？</h2>
<p>所谓面向对象，是一种通过对象的方式，将现实中的事物映射到计算机模型的一种编程方法。</p>
<p>对象的含义指的是具体的某一个事物，即我们在现实生活中能够看得见摸得着的。在面向对象程序设计中，对象指的是计算机系统中的某一个成分，主要有两层含义。一个是指 <strong>数据</strong>，另一个则是 <strong>动作</strong>。即对象是两者的结合体，通过对象不仅能够进行操作，还能对操作的结果进行记录。</p>
<p>在这之前，另一种编程方式是 <strong>面向过程</strong>，用一个具体的例子来讲，可以描述成下面这样：</p>
<blockquote>
<p>假如有一天你很想吃酸菜鱼，那么你该怎么办呢？下面就以面向对象和面向过程给你两个选择，让你决定来选哪一个！</p>
<ol>
<li><strong>面向对象</strong>：打开手机，打开外卖软件，搜索酸菜鱼，然后下单，等着外卖送到家就行！</li>
<li><strong>面向过程</strong>：先去买菜，鱼、酸菜、调料……，然后回家杀鱼、切酸菜、切调料……，再接着开始炒，最后做好盛到盘子里！</li>
</ol>
</blockquote>
<p>对比可以发现两者的优缺点：</p>
<ul>
<li><strong>面向过程</strong>
<ul>
<li><strong>优点</strong>：性能好；以例子来说自己做比起点外卖，经济又实惠，还吃得放心。</li>
<li><strong>缺点</strong>：不易维护、不易复用、不易扩展；以例子来讲，要是我们自己做，临时又想吃其他的菜，又得跑去买材料啥的，麻烦！但外卖就不一样了，直接打开手机再点就是。</li>
</ul>
</li>
<li><strong>面向对象</strong>
<ul>
<li><strong>优点</strong>：易维护、易复用、易扩展，也就是面向过程的缺点。</li>
<li><strong>缺点</strong>：性能较差；比起自己做，点外卖成本啥的可能就比较高了。</li>
</ul>
</li>
</ul>
<h2 id="面向对象的-5-大原则" tabindex="-1"><a class="header-anchor" href="#面向对象的-5-大原则" aria-hidden="true">#</a> 面向对象的 5 大原则</h2>
<ol>
<li><strong>单一职责原则 SRP</strong></li>
</ol>
<p>又称为单一功能原则，它规定了一个类应该只有一个发生变化的原因。也就是说类的功能要单一，不能太复杂。</p>
<p>举个例子来说，学校里边有学生、老师、管理员，如果将这些人统一封装在一个类中，那么到时候难以对他们的身份作区分，那么此时按照 SRP 原则，我们就可以将他们各自分为一个类，从而方便管理。</p>
<ol start="2">
<li><strong>开放封闭原则 OCP</strong></li>
</ol>
<p>指一个模块对于扩展是开放的，但对于修改则是封闭的。也就是说可以增加功能，但是不能修改功能。</p>
<p>也就是说，一个类可以进行扩展（添加属性或者方法），但是对于类中已有的属性和方法，不要修改它们。</p>
<ol start="3">
<li><strong>里氏替换原则 LSP</strong></li>
</ol>
<p>指子类能够替换父类出现在父类能够出现的任何地方。</p>
<p>假设有两个类 <code v-pre>Father</code> 和 <code v-pre>Child</code>，其中 <code v-pre>Father</code> 是 <code v-pre>Child</code> 的父类，那么在进行调用时，<code v-pre>Father</code> 类可以引用 <code v-pre>Child</code> 类，反之却不行。</p>
<ol start="4">
<li><strong>依赖倒置原则 DIP</strong></li>
</ol>
<p>高层次的模块不应该依赖于低层次的模块，而应该都依赖于抽象。抽象不应该依赖于具体实现，但具体实现应该依赖于抽象。</p>
<p>也就是说，我们可以将同类事物的共性抽取出来，将其作为这一类事物的“高层次模块”，然后由“低层次模块”来继承或者实现“高层次模块”。</p>
<ol start="5">
<li><strong>接口分离原则 ISP</strong></li>
</ol>
<p>指设计时可以采用多个与特定客户类相关的接口，而不是采用一个通用的接口。</p>
<h2 id="面向对象的-3-大特性" tabindex="-1"><a class="header-anchor" href="#面向对象的-3-大特性" aria-hidden="true">#</a> 面向对象的 3 大特性</h2>
<h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3>
<p>利用抽象数据类型把数据和方法封装在一起，然后共同构成一个相互关联的对象。从而隐藏对象的属性和实现细节，只对外提供访问的接口，提高代码的复用性和安全性。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> skill<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSkill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> skill<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSkill</span><span class="token punctuation">(</span><span class="token class-name">String</span> skill<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>skill <span class="token operator">=</span> skill<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于以上的 <code v-pre>Hero</code> 类，它封装了 <code v-pre>name</code> 、<code v-pre>skill</code> 等属性，如果我们想要获取 <code v-pre>Hero</code> 的 <code v-pre>name</code> 和 <code v-pre>skill</code> 属性值，那么就只能通过 <code v-pre>get()</code> 方法来获取，而如果我们想要改变这两个属性值，也只能通过 <code v-pre>set()</code> 方法来进行设置。</p>
<p>封装时，需要注意其原则，对象代码表什么，就封装对应的数据，并提供数据所对应的行为。</p>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<p>定义父类之后，子类可以从基础类进行继承，这样一来，子类就可以获得父类中非 <code v-pre>private</code> 的属性和方法，从而提高了代码的复用性。</p>
<p>继承实现了 <code v-pre>IS-A</code> 关系，假设我们现在有一个类 <code v-pre>Shooter</code> 继承自 <code v-pre>Hero</code>，那么此时我们就可以定义一个父类引用，然后将该引用指向它的子类对象。</p>
<p><code v-pre>Java</code> 中提供了一个关键字 <code v-pre>extends</code>，从而让一个类和另一个类建立起继承关系，其格式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> 子类 <span class="token keyword">extends</span> 父类<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Shooter</span> <span class="token keyword">extends</span> <span class="token class-name">Hero</span><span class="token punctuation">{</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，被继承的类叫做父类（也叫超类或基类），如上述代码中的 <code v-pre>Hero</code>，另外一个类则叫做子类（也叫派生类），比如上面的 <code v-pre>Shooter</code>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Hero</span> shooter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shooter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是要注意一点：<strong>在 Java 中，类只能单继承</strong>。</p>
<h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3>
<p>所谓多态，就是同类型的对象，表现出的不同形态，表现形式为：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>父类类型 对象名 <span class="token operator">=</span> 子类对象<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指的是父类或者接口定义的引用变量可以指向子类或具体实现类的实例对象，提高程序的扩展性。</p>
<p>多态又可以分为编译时多态和运行时多态，其中，编译时多态是指方法的重载，而运行时多态则指的是程序中定义的对象引用所指向的具体类型在运行期间才能确定下来。</p>
<p>要确定一个多态是编译时还是运行时多态，可以通过以下三个条件来区分：</p>
<ul>
<li><strong>继承</strong></li>
<li><strong>覆盖（重写）</strong></li>
<li><strong>向上转型</strong></li>
</ul>
<p>如果同时满足以上三个条件，那么此时多态是运行时多态。</p>
<p>多态中，调用成员变量和成员方法时，遵循以下原则。</p>
<ol>
<li><strong>调用成员变量：编译看左边，运行也看左边</strong>：指 <code v-pre>javac</code>  编译时，会看左边的父类中是否有该变量，如果有则编译成功，如果没有就会编译失败。而用 <code v-pre>java</code>  运行代码时，实际获取的成员变量是父类中的值。</li>
<li><strong>调用成员方法：编译看左边，运行看右边</strong>：指 <code v-pre>javac</code> 编译时，会看左边的父类中是否有该方法，如果有则编译成功，如果没有就会编译失败。而用 <code v-pre>java</code> 运行代码时，实际调用的是子类中的方法。</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>以上就是关于面向对象编程思想的一些简单知识介绍了，主要讲了面向对象的概念，面向对象的 3 大特性以及面向对象的 5 大原则。如果觉得本文对你有所帮助，那就来个一键三连再走吧！</p>
<Share colorful /></div></template>


