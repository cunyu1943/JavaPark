<template><div><h1 id="包和-jar-文件的创建" tabindex="-1"><a class="header-anchor" href="#包和-jar-文件的创建" aria-hidden="true">#</a> 包和 jar 文件的创建</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/l4O4bhDMgHamQ5DVPcqUYA" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/l4O4bhDMgHamQ5DVPcqUYA<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>在之前的文章中，讲到了面向的 3 大特性（<strong>封装、继承、多态</strong>）和面向对象设计的 5 大原则（SRP、OCP、LSP、DIP、ISP）。此外，我们还讲了如何创建一个类，并且在创建类后如何构造一个对象。然后还介绍了类中的属性和方法，并对构造方法和引用也做了简单的讲解。</p>
<p>有了上面的基础之后，今天我们来继续学习面向对象的相关知识，主要内容预告如下：</p>
<ul>
<li><strong>包</strong></li>
<li><strong>注释</strong></li>
<li><strong>jar 文件的创建</strong></li>
</ul>
<h2 id="包" tabindex="-1"><a class="header-anchor" href="#包" aria-hidden="true">#</a> 包</h2>
<p>假设现在有这么一种情况，诸葛亮、周瑜、曹操共同开发一款程序。其中，周瑜和曹操均在自己代码模块中写了一个 <code v-pre>PublicUtil</code> 类，现在诸葛亮要调用周瑜和曹操模块中代码，需要同时用到他们中的 <code v-pre>PublicUtil</code> 类，这时候就犯难了，诸葛亮在他的代码中使用 <code v-pre>PublicUtil</code> 类时，该怎么区分是调用周瑜的，还是调用的曹操的呢？</p>
<p>针对这个问题，开发 Java 的前辈们当然也想到了。于是，他们在 Java 中定义了一种名字空间，也就是我们今天要讲的包：<code v-pre>package</code>。通过使用包机制，就十分容易区别类名的命名空间了。</p>
<p>一般包名的规则为：公司域名反写 + 包的作用，而且全部都要用英文小写。</p>
<p>假设曹操的 <code v-pre>PublicUtil</code> 类代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 申明包名</span>
<span class="token keyword">package</span> <span class="token namespace">caocao</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PublicUtil</span><span class="token punctuation">{</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>周瑜的 <code v-pre>PublicUtil</code> 类代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 申明包名</span>
<span class="token keyword">package</span> <span class="token namespace">zhouyu</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PublicUtil</span><span class="token punctuation">{</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，如果诸葛亮要同时使用他们俩代码中的 <code v-pre>PublicUtil</code> 类，此时就可以通过引入他们俩的包，然后通过使用 <code v-pre>包名.类名</code> 的引用方式来进行区分即可。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">zhugeliang</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">caocao</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">zhouyu</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Util</span><span class="token punctuation">{</span>
    <span class="token comment">// 使用周瑜代码</span>
    <span class="token class-name"><span class="token namespace">zhouyu<span class="token punctuation">.</span></span>PublicUtil</span><span class="token punctuation">.</span><span class="token function">xxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ……
    <span class="token comment">// 使用曹操代码</span>
    <span class="token class-name"><span class="token namespace">caocao<span class="token punctuation">.</span></span>PublicUtil</span><span class="token punctuation">.</span><span class="token function">xxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码中的 <code v-pre>import</code> 你可能也在其他代码中见到过，但你不知道啥作用。其实它就是为了包的使用而生，如果我要使用另一个人的包，那该怎么做呢？其实很简单，只需要在程序中使用关键字 <code v-pre>import</code> 即可完成包的导入。</p>
<p>通过使用包，可以达到以下的作用：</p>
<ol>
<li>将功能类似或或相关的类以及接口组织放在同一个包中，方便类的查找与使用。</li>
<li>包也像文件夹一样，采用了树形目录的存储方式。同一个包中的类名不同，不同包中的类名可以相同。当同时调用两个不同包中的同一类名的类时，通过加上完整的包名就可以加以区分，从而避免类名冲突。</li>
<li>同时包也限定了访问权限，只有拥有包访问权限的类才能间接去访问包中的类。</li>
</ol>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2>
<p>所谓注释，就是写在程序里边对代码进行结束说明的文字，既方便自己也方便他人查看，更快理解程序含义。而且注释是不影响程序的执行的，在我们对 Java 源代码进行编译后，字节码文件中不含源代码中的注释内容。</p>
<p>在 Java 中，通常支持三种注释方式，它们分别是：</p>
<ul>
<li><code v-pre>//</code>：单行注释</li>
<li><code v-pre>/* */</code>：多行注释</li>
<li><code v-pre>/** */</code>：文档注释</li>
</ul>
<h3 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释" aria-hidden="true">#</a> 单行注释</h3>
<p>单行注释是以双斜杠 <code v-pre>//</code> 来标识，表示只注释当前行内容，一般用在需要注释的内容较少的地方，以下就是一个单行注释的实例。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 第一个 Java 程序</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行注释" tabindex="-1"><a class="header-anchor" href="#多行注释" aria-hidden="true">#</a> 多行注释</h3>
<p>通常我们把要注释的内容放在 <code v-pre>/*</code> 和 <code v-pre>*/</code> 之间，表示在两者之间的内容都是我们的注释内容，以下是一个多行注释的实例。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">/*
* 第一个 Java 程序
* 这是许多初学者都会写的一个程序
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档注释" tabindex="-1"><a class="header-anchor" href="#文档注释" aria-hidden="true">#</a> 文档注释</h3>
<p>文档注释和多行注释很像，它是将我们所需要注释的内容包含在 <code v-pre>/**</code> 和 <code v-pre>*/</code> 之间。而文档注释和其他两种注释最大的区别就在于：我们可以利用 <code v-pre>javadoc</code> 工具来提取文档注释，然后生成一个 HTML 文档，类似于 Java 官网所提供的 API 文档，以下是一个文档注释的实例。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* 第一个 Java 程序
* 这是许多初学者都会写的一个程序
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    * 主函数
    * <span class="token keyword">@param</span> <span class="token parameter">args</span> 主函数参数列表
    */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们通过终端，使用 <code v-pre>javadoc</code> 命令就可以为上述文件生成一个 HTML 文档。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>javadoc HelloWorld.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而文档注释相比于其他两种注释，也有更多值得注意的地方，下面就分别来看看需要留意的地方。</p>
<ol>
<li><strong>常用文档注释分类</strong></li>
</ol>
<ul>
<li><strong>类注释</strong></li>
</ul>
<p>顾名思义，所谓类注释，就是针对整个类的说明，它必须放在 <code v-pre>import</code> 之后，但又必须放在类定义之前。以下是一个类注释的实例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* Animal，动物类
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要注意的是，在 <code v-pre>/**</code> 和 <code v-pre>*/</code> 之间的其他行注释，<code v-pre>*</code> 是可有可无的，之所以加上，更大情况出于美观的考虑，上面的实例写成如下样式也是合法的。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
  Animal，动物类
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>方法注释</strong></li>
</ul>
<p>同样的，方法注释也就是针对类中方法的注释，它必须放在所描述的方法之前。而一般情况下，除开说明该方法的功能之外，我们经常使用如下标记来对方法进行注释。</p>
<table>
<thead>
<tr>
<th>标记</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@param variable description</code></td>
<td>用于介绍当前方法的参数，可以占据多行</td>
</tr>
<tr>
<td><code v-pre>@return description</code></td>
<td>用于描述当前方法的返回值，可以跨多行</td>
</tr>
<tr>
<td><code v-pre>@throws class description</code></td>
<td>用于表示该方法有可能抛出的异常</td>
</tr>
</tbody>
</table>
<p>以下就是一个方法注释的实例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* 求两数之h
* <span class="token keyword">@param</span> <span class="token parameter">num1</span> 加数1
* <span class="token keyword">@param</span> <span class="token parameter">num2</span> 加数2
@ return 两数之和
*/</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>字段注释</strong></li>
</ul>
<p>字段注释顾名思义，也就是对于类中字段的说明，用于描述字段的含义，以下是一个字段注释的例子。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cunyu</span><span class="token punctuation">{</span>
	<span class="token doc-comment comment">/**
	* 公众号
	*/</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> wePublic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，如果你不喜欢把一个字段的注释分成多行的话，也可以写成以下格式。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cunyu</span><span class="token punctuation">{</span>
	<span class="token doc-comment comment">/**公众号*/</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> wePublic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两种方式都是可以的，也没有优劣之分，可以根据自己的风格来选择。但是在 IntelliJ IDEA 等 IDE 中，如果对代码进行格式化，IDEA 会将第二种方式格式化成第一种方式，这一点需要注意。</p>
<ol start="2">
<li><strong>如何提取文档注释</strong></li>
</ol>
<p>假设有以下一段代码，我们需要生成关于代码的文档说明。那么就可以使用 JDK 中所提供的 <code v-pre>javadoc</code> 命令来提取代码的文档注释。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* 第一个 Java 程序
* 这是初学者基本都会写的一个程序
* <span class="token keyword">@author</span> 村雨遥
* <span class="token keyword">@version</span> 1.0
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    * 主函数：程序入口
    * <span class="token keyword">@param</span> <span class="token parameter">args</span> 主函数参数列表
    */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后利用以下命令就可以生成我们的文档注释。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>javadoc <span class="token parameter variable">-d</span> helloworld <span class="token parameter variable">-author</span> <span class="token parameter variable">-version</span> <span class="token parameter variable">-encoding</span> UTF-8 HelloWorld.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令的意思就是，对名为 <code v-pre>HelloWorld.java</code> 的提取其中的文档注释，并将输出的文件放在 <code v-pre>helloworld</code> 文件夹下，并且在文档中包含程序作者和版本，编码方式为 <code v-pre>UTF-8</code>。</p>
<figure><img src="@source/java-tutorial/javase-series/assets/20220711-oop-3/javadoc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>生成的文件列表详情见下图，打开其中的 <code v-pre>index.html</code> 就可以查看提取的文档注释。</p>
<figure><img src="@source/java-tutorial/javase-series/assets/20220711-oop-3/index.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/java-tutorial/javase-series/assets/20220711-oop-3/class.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="jar-文件的创建" tabindex="-1"><a class="header-anchor" href="#jar-文件的创建" aria-hidden="true">#</a> jar 文件的创建</h2>
<p>其实关于这个，我在之前的文章也写过。不过我是利用 IntelliJ IDEA 来对进行代码的打包，如果感兴趣，可以点击下方传送门去看看。</p>
<blockquote>
<p><a href="https://cunyu1943.github.io/JavaPark/dev-tools/idea/java-quick-start-with-idea" title="如何利用 IntelliJ IDEA 创建 Java 入门应用" target="_blank" rel="noopener noreferrer">如何利用 IntelliJ IDEA 创建 Java 入门应用<ExternalLinkIcon/></a></p>
</blockquote>
<p>不过那是借助工具来生成的，今天我们来看看如何利用 JDK 所提供的命令行工具，来创建一个能打印出 <code v-pre>Hello World!</code> 的 <code v-pre>jar</code> 包。</p>
<p>同样的，我们仍然是需要先准备一个能输出 <code v-pre>Hello World!</code> 的 Java 源代码，命名为 <code v-pre>HelloWorld.java</code>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，利用 <code v-pre>javac</code> 命令对该文件进行编译，然后会生成 <code v-pre>HelloWorld.class</code> 字节码文件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>javac HelloWorld.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，利用 <code v-pre>jar</code> 命令来对生成的字节码文件进行打包。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jar <span class="token parameter variable">-cvf</span> hello.jar HelloWorld.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code v-pre>c</code> 表示创建一个新 <code v-pre>jar</code> 包，<code v-pre>v</code> 表示创建过程中打印创建过程中的信息，<code v-pre>f</code> 则表示对新生成的 <code v-pre>jar</code> 命名。</p>
<p>最后，利用以下命令来运行 <code v-pre>jar</code> 包。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>java <span class="token operator">-</span>jar hello<span class="token punctuation">.</span>jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过并不会顺利出现我们想要的结果，此时会报错 <code v-pre>hello.jar</code> 中没有主清单属性。这是因为我们还没有在 <code v-pre>MENIFEST.MF</code> 文件中添加 <code v-pre>Main-Class</code> 属性。<br>
<img src="@source/java-tutorial/javase-series/assets/20220711-oop-3/compile.png" alt="" loading="lazy"></p>
<p>用压缩软件打开刚创建的 <code v-pre>hello.jar</code>，里边除了 <code v-pre>HelloWorld.class</code> 文件之外，还会多一个 <code v-pre>META-INF</code> 文件夹，里边还有一个 <code v-pre>MENIFEST.MF</code> 文件，此时我们只需要用编辑器打开该文件，然后在文件中加入以下代码。（<strong>记得添加之后要保证整个文件最后保留一行空行</strong>）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Main-Class: HelloWorld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220711-oop-3/main-class.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>添加完成之后，再次运行 <code v-pre>java -jar hello.jar</code> ，就可以成功在控制台打印 <code v-pre>Hello World!</code> 了。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>以上就是今天博客的所有内容了，如果您觉得本文不错，那就来个一键三连吧，您的关注就是我坚持的不懈动力！</p>
<p><strong>关注公众号，获取最新文章更新</strong></p>
<div style="text-align:center">
<figure><img src="https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif" alt="" width="200" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<Share colorful /></div></template>


