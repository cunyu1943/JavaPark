<template><div><h1 id="是时候拥抱-junit-单元测试了" tabindex="-1"><a class="header-anchor" href="#是时候拥抱-junit-单元测试了" aria-hidden="true">#</a> 是时候拥抱 Junit 单元测试了</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/_FWd0Bj3DlbCReex6pqJKQ" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/_FWd0Bj3DlbCReex6pqJKQ<ExternalLinkIcon/></a></p>
</div>
<h2 id="何为测试" tabindex="-1"><a class="header-anchor" href="#何为测试" aria-hidden="true">#</a> 何为测试</h2>
<p>在计算机领域中，所谓测试，描述的是一种用来鉴定软件正确性、完整性和质量的过程。而软件测试又一般可以分为黑盒测试和白盒测试，两者的相关定义如下。</p>
<h3 id="黑盒测试" tabindex="-1"><a class="header-anchor" href="#黑盒测试" aria-hidden="true">#</a> 黑盒测试</h3>
<blockquote>
<p>黑盒测试（<code v-pre>black-box testing</code>），也称黑箱测试，是软件测试方法，测试应用程序的功能，而不是其内部结构或运作。测试者不需具备应用程序的代码、内部结构和编程语言的专门知识。测试者只需知道什么是系统应该做的事，即当键入一个特定的输入，可得到一定的输出。测试案例是依应用系统应该做的功能，照规范、规格或要求等设计。测试者选择有效输入和无效输入来验证是否正确的输出。</p>
</blockquote>
<p>黑盒测试方法可适合大部分的软件测试，例如集成测试（<code v-pre>integration testing</code>）以及系统测试（<code v-pre>system testing</code>）。</p>
<h3 id="白盒测试" tabindex="-1"><a class="header-anchor" href="#白盒测试" aria-hidden="true">#</a> 白盒测试</h3>
<blockquote>
<p>白盒测试（<code v-pre>white-box testing</code>），又称透明盒测试 <code v-pre>glass box testing</code>、结构测试 <code v-pre>structural testing</code> 等）是一个测试软件的方法，测试应用程序的内部结构或运作，而不是测试应用程序的功能（即黑盒测试）。在白盒测试时，以编程语言的角度来设计测试案例。测试者输入资料验证资料流在程序中的流动路径，并确定适当的输出，类似测试电路中的节点。</p>
</blockquote>
<p>白盒测试可以应用于单元测试（<code v-pre>unit testing</code>）、集成测试（<code v-pre>integration testing</code>）和系统的软件测试流程，可测试在集成过程中每一单元之间的路径，或者主系统跟子系统中的测试。尽管这种测试的方法可以发现许多的错误或问题，它可能无法检测未使用部分的规范。</p>
<p>介绍一下黑白盒测试，主要是为了大家有一个概念，明白两者之间的区别，关于更多测试的内容，这里就不展开讲了，毕竟我们的重点是 JUnit。</p>
<h2 id="junit-简介" tabindex="-1"><a class="header-anchor" href="#junit-简介" aria-hidden="true">#</a> JUnit 简介</h2>
<h3 id="什么是-junit" tabindex="-1"><a class="header-anchor" href="#什么是-junit" aria-hidden="true">#</a> 什么是 JUnit</h3>
<blockquote>
<p>官网：<a href="https://junit.org/" target="_blank" rel="noopener noreferrer">https://junit.org/<ExternalLinkIcon/></a></p>
</blockquote>
<p>JUnit 是一个编写可重复测试的简单框架，是单元测试框架 xUnit 的一个实例，属于白盒测试。</p>
<p>针对 Java 语言而言，程序中最小的功能单元是方法，因此，对 Java 程序进行单元测试就是针对单个 Java 方法的测试。</p>
<p>在我们简单的小程序中，平常测试使用的方法是在主类中创建对象，然后调用对应方法。但是这样一来存在两个缺点：</p>
<ol>
<li>不能将测试代码和业务代码分离；</li>
<li>未打印出测试结果和期望结果；</li>
</ol>
<p>因此此时我们就需要一种新的测试框架来帮助我们编写测试，而 JUnit 则是专门针对 Java 而设计的一种标准单元测试框架。作为一个 Java 开发者，学习 JUnit 来进行测试是必备技能。</p>
<h3 id="如何安装-junit" tabindex="-1"><a class="header-anchor" href="#如何安装-junit" aria-hidden="true">#</a> 如何安装 JUnit</h3>
<ul>
<li><strong>本地安装</strong></li>
</ul>
<p>对于这种方法，我们只需要去下载 JUnit 最新的包，当前有 Junit4 和 Junit5 两个版本，可以根据自己的需要进行选择然后导入我们 IDE 的依赖文件即可，依赖文件下载地址如下：</p>
<blockquote>
<p>JUnit4：<a href="https://github.com/junit-team/junit4/releases/" target="_blank" rel="noopener noreferrer">https://github.com/junit-team/junit4/releases/<ExternalLinkIcon/></a></p>
<p>JUnit5：<a href="https://github.com/junit-team/junit5/releases/" target="_blank" rel="noopener noreferrer">https://github.com/junit-team/junit5/releases/<ExternalLinkIcon/></a></p>
</blockquote>
<p>以 IDEA 为例，依次打开 <code v-pre>File -&gt; Project Structure -&gt; Project Settings -&gt; Modules -&gt; Dependencies -&gt; 点击 + -&gt; Library... -&gt; Java</code>，最后找到下载的 JUnit 文件即可；</p>
<img src="@source/java-tutorial/javase/assets/20220718-test-with-junit/dependency.png" />
<ul>
<li><strong>Maven 安装</strong></li>
</ul>
<p>当使用 Maven 之后，我们就能十分简单地安装 JUnit 了，只需要在项目的 <code v-pre>pom.xml</code> 配置文件中导入依赖即可；</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>4.13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-junit-进行单元测试" tabindex="-1"><a class="header-anchor" href="#使用-junit-进行单元测试" aria-hidden="true">#</a> 使用 Junit 进行单元测试</h3>
<p>首先我们需要有一个主类，然后基于该类来进行测试，这里我们以简单的运算器为例；</p>
<p>创建一个简易计算机类 <code v-pre>Calc</code>，然后包括加法 <code v-pre>add</code> 和减法 <code v-pre>sub</code> 两个方法；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Calc
 * <span class="token keyword">@date</span> : 2021/3/30 10:04
 * <span class="token keyword">@description</span> : 简易计算器
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Calc</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">num1</span> 加数
     * <span class="token keyword">@param</span> <span class="token parameter">num2</span> 加数
     * <span class="token keyword">@return</span> 两数之和
     * <span class="token keyword">@description</span> 加法
     * <span class="token keyword">@date</span> 2021/3/30 10:04
     * <span class="token keyword">@author</span> cunyu
     * <span class="token keyword">@version</span> 1.0
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">num1</span> 减数
     * <span class="token keyword">@param</span> <span class="token parameter">num2</span> 被减数
     * <span class="token keyword">@return</span> 两数之差
     * <span class="token keyword">@description</span> 两数之差
     * <span class="token keyword">@date</span> 2021/3/30 10:11
     * <span class="token keyword">@author</span> cunyu
     * <span class="token keyword">@version</span> 1.0
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num1 <span class="token operator">-</span> num2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义好上述主类之后，我们来进行测试，测试步骤如下；</p>
<ol>
<li><strong>定义测试类</strong></li>
</ol>
<p>定义测试类时，我们推荐定义类名时就是 <strong>主类 Test</strong> 的形式，比如我们上面的类为 <code v-pre>Calc</code>，我们要对其进行测试，则测试类的类名为 <code v-pre>CalcTest</code>；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : CalcTest
 * <span class="token keyword">@date</span> : 2021/3/30 10:15
 * <span class="token keyword">@description</span> : 简易计算器测试
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalcTest</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>定义测试方法</strong></li>
</ol>
<p>测试类定义好之后，我们就可以定义测试方法了，而定义测试方法时，我们也有几点建议；</p>
<ul>
<li>测试方法名是在主类方法名前加上 <code v-pre>test</code>，比如我们上边的方法为 <code v-pre>add</code>，则我们对应的测试方法名为 <code v-pre>testAdd</code>；</li>
<li>针对测试方法的返回值，因为我们只需要在方法内给出结果即可，不用再供其他人调用，所以建议返回值设置为 <code v-pre>void</code>；</li>
<li>针对测试方法的参数列表，由于我们主要还是针对传统建类调用方法测试的方法，所以此时最好是保持参数列表为空；</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Assert</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : CalcTest
 * <span class="token keyword">@date</span> : 2021/3/30 10:15
 * <span class="token keyword">@description</span> : 简易计算器测试
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalcTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Calc</span> calc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> calc<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code v-pre>@Test</code> 为注解，用来注释一个普通的方法为一条测试用例。<code v-pre>assertEquals</code> 方法用于断言两个值是否相等。</p>
<p>如果测试成功，则在 IDE 中会出现如下提示。</p>
<figure><img src="@source/java-tutorial/javase/assets/20220718-test-with-junit/@test.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>一般来讲，测试成功一般是绿色，而测试失败则是红色。</p>
<ul>
<li>测试成功的界面</li>
</ul>
<figure><img src="@source/java-tutorial/javase/assets/20220718-test-with-junit/success.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>测试失败的界面</li>
</ul>
<figure><img src="@source/java-tutorial/javase/assets/20220718-test-with-junit/fail.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>总结起来，我们针对一个方法的具体测试的步骤如下：</p>
<ol>
<li>首先是创建被测试类的对象；</li>
<li>然后调用被测试的方法；</li>
<li>最后加入断言，判断调用方法得到结果和实际的结果之间是否相同；</li>
</ol>
<h2 id="junit-常用注解" tabindex="-1"><a class="header-anchor" href="#junit-常用注解" aria-hidden="true">#</a> JUnit 常用注解</h2>
<p>由于现在主要用到的有 Junit4 和 Junit5 两个版本，而两者之间也是存在一些区别的，所以在这里给出两者中常用注解的一些差异。</p>
<p>下表中，给出了 Junit4 和 Junit5 中所共有功能的对应注解：</p>
<table>
<thead>
<tr>
<th style="text-align:center">Junit4 注解</th>
<th>Junit5 注解</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>@Test</code></td>
<td><code v-pre>@Test</code></td>
<td style="text-align:left">标识一条测试用例</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>@Ignore</code></td>
<td><code v-pre>@Disable</code></td>
<td style="text-align:left">忽略的测试用例</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>@Before</code></td>
<td><code v-pre>@BeforeEach</code></td>
<td style="text-align:left">每一个测试方法之前运行</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>@After</code></td>
<td><code v-pre>@AfterEach</code></td>
<td style="text-align:left">每一个测试方法之后运行</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>@BefreClass</code></td>
<td><code v-pre>@BeforeAll</code></td>
<td style="text-align:left">所有测试开始之前运行</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>@AfterClass</code></td>
<td><code v-pre>@AfterAll</code></td>
<td style="text-align:left">所有测试结果之后运行</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>@Category</code></td>
<td><code v-pre>@Tag</code></td>
<td style="text-align:left">标记和过滤</td>
</tr>
</tbody>
</table>
<p>而相对于 Junit4，Junit5 也有做出升级，其特有的一些注解如下：</p>
<table>
<thead>
<tr>
<th>注解</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@TestFactory</code></td>
<td>测试工厂进行动态测试</td>
</tr>
<tr>
<td><code v-pre>@Nested</code></td>
<td>嵌套测试</td>
</tr>
<tr>
<td><code v-pre>@ExtendWith</code></td>
<td>注册自定义扩展</td>
</tr>
</tbody>
</table>
<h2 id="常用断言方法" tabindex="-1"><a class="header-anchor" href="#常用断言方法" aria-hidden="true">#</a> 常用断言方法</h2>
<p>而在测试中，我们经常用到断言方法。这些断言方法都来自于由继承了 <code v-pre>java.lang.Object</code> 的 <code v-pre>Assert</code> 类，用于提供编写测试。</p>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>void assertArrayEquals([String message],expected array, result array)</code></td>
<td style="text-align:left">断言预期数组和结果数组相等</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>void assertEquals([String message],expected value, actual value)</code></td>
<td style="text-align:left">断言两个值是否相等。类似于字符串比较使用的 <code v-pre>equals()</code> 方法</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>void assertNotEquals(String message], first, second)</code></td>
<td style="text-align:left">查看两个对象是否不相等</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>void assertNull(String message], object)</code></td>
<td style="text-align:left">查看对象是否为空</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>void assertNotNull(String message], object)</code></td>
<td style="text-align:left">查看对象是否不为空</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>void assertSame(String message], expected, actual)</code></td>
<td style="text-align:left">查看两个对象的引用是否相等。类似于使用 <code v-pre>==</code> 比较两个对象</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>void assertNotSame(String message], unexpected, actual)</code></td>
<td style="text-align:left">查看两个对象的引用是否不相等。类似于使用 <code v-pre>!=</code> 比较两个对象</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>void assertTrue(String message], boolean condition)</code></td>
<td style="text-align:left">查看运行结果是否为 <code v-pre>true</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>void assertFalse([String message], boolean condition)</code></td>
<td style="text-align:left">查看运行结果是否为 <code v-pre>false</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>void assertThat([String message], actual, matcher)</code></td>
<td style="text-align:left">查看实际值是否满足指定的条件</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fail()</code></td>
<td style="text-align:left">让测试失败</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cunyu</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">AfterEach</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">BeforeEach</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalcTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token string">"1943"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token string">"1943"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str5 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token function">assertEquals</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">assertSame</span><span class="token punctuation">(</span>str3<span class="token punctuation">,</span> str4<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">assertNotSame</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span> str4<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">assertNotNull</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">assertNull</span><span class="token punctuation">(</span>str5<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">assertTrue</span><span class="token punctuation">(</span>num1 <span class="token operator">==</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">assertArrayEquals</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase/assets/20220718-test-with-junit/assert.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>好了，以上就是有关单元测试 Junit 的简单使用指南了。虽说大家现在还是有很多人在使用 Junit4，但如果你之前并未接触过 Junit，个人建议那就直接学习 Junit5 吧。当然了，Junit4 了解也是很有必要的，毕竟技多不压身，多一份技能少求人嘛。</p>
<p><strong>关注公众号，获取最新文章更新</strong></p>
<Share colorful /></div></template>


