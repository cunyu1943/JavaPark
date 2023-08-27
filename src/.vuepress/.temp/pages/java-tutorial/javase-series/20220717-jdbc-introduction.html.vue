<template><div><h1 id="jdbc-入门指南" tabindex="-1"><a class="header-anchor" href="#jdbc-入门指南" aria-hidden="true">#</a> JDBC 入门指南</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/DOXFxk5dk9WBfAVK0UJUng" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/DOXFxk5dk9WBfAVK0UJUng<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>在我们日常使用的 APP 或网站中，往往需要存取数据，比如在微信中，需要存储我们的用户名、手机号、用户密码…… 等一系列信息。依靠之前所学习的 Java 相关知识已经无法满足这一需求。现在的应用程序中最基本、应用最广的也就是关系型数据库，如 MySQL。Java 语言中为了实现与关系型数据库的通信，制定了标准的访问接口，即 JDBC（Java Database Connectivity）。本文主要介绍在 Java 中使用 JDBC 的相关知识，主要内容如下：</p>
<ul>
<li><strong>JDBC 简介</strong></li>
<li><strong>数据的增删改查</strong></li>
<li><strong>事务</strong></li>
<li><strong>连接池</strong></li>
</ul>
<h2 id="jdbc-简介" tabindex="-1"><a class="header-anchor" href="#jdbc-简介" aria-hidden="true">#</a> JDBC 简介</h2>
<p>JDBC（Java Database Connectivity），即 Java 数据库连接。是 Java 语言中用于规范客户端程序如何来访问数据库的应用程序接口，它是面向关系型数据库的，提供了查询和更新数据库中数据的方法。</p>
<p>本文以 MySQL 来演示如何使用 JDBC，所以需要事先在你的机器上准备好 MySQL，而且最好是懂一些 MySQL 的使用。</p>
<p>首先我们需要建立 MySQL 与 Java 程序间的联系，所以需要事先好 mysql-connector-java 这个第三方包，下载地址：<a href="https://downloads.mysql.com/archives/c-j/" target="_blank" rel="noopener noreferrer">https://downloads.mysql.com/archives/c-j/<ExternalLinkIcon/></a></p>
<h3 id="导入驱动包" tabindex="-1"><a class="header-anchor" href="#导入驱动包" aria-hidden="true">#</a> 导入驱动包</h3>
<p>以在 IDEA 中导入 jar 包为例，当我们建立好项目后，导包过程如下：</p>
<ol>
<li>首先依次打开 <code v-pre>File -&gt; Project Structure -&gt; Modules -&gt; Dependencies</code>；</li>
</ol>
<figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/pro-structure.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>然后点击 <code v-pre>+</code> 号，选择 <code v-pre>1 JARs or Directories</code>，找到你下载好的 jar 包导入；</li>
</ol>
<figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/module.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>导入成功，点击 <code v-pre>OK</code> 即可；</li>
</ol>
<figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/dependency.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/import.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="初始化并建立连接" tabindex="-1"><a class="header-anchor" href="#初始化并建立连接" aria-hidden="true">#</a> 初始化并建立连接</h3>
<p>导入我们的 jar 包之后，就需要进行初始化工作。新建一个类，用于初始化并连接。先将驱动类加载到 JVM 中，加载过程中会执行其中的静态初始化块，从而完成驱动的初始化工作。然后建立数据库与程序之间的连接，此时需要提供数据库的 IP 地址、端口号、数据库名、编码方式、用户名、用户密码等信息。</p>
<p>首先，我们在数据库中建立一个表 <code v-pre>student</code>，建表语句如下，用于后续实践。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 创建数据库 javalearning</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">if</span> <span class="token operator">not</span> <span class="token keyword">exists</span> javalearning<span class="token punctuation">;</span>
<span class="token comment">-- 创建表 students</span>
<span class="token keyword">USE</span> javalearning<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> students <span class="token punctuation">(</span>
  id <span class="token keyword">BIGINT</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token comment">-- 学号</span>
  name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token comment">-- 姓名</span>
  gender <span class="token keyword">TINYINT</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token comment">-- 性别</span>
  grade <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token comment">-- 年级</span>
  score <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token comment">-- 分数</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token comment">-- 主键</span>
<span class="token punctuation">)</span> <span class="token keyword">Engine</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>UTF8<span class="token punctuation">;</span>

<span class="token comment">-- 插入部分数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> students <span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> grade<span class="token punctuation">,</span> score<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">,</span><span class="token string">'小红'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> students <span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> grade<span class="token punctuation">,</span> score<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">102</span><span class="token punctuation">,</span><span class="token string">'小橙'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">89</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> students <span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> grade<span class="token punctuation">,</span> score<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">,</span><span class="token string">'小黄'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> students <span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> grade<span class="token punctuation">,</span> score<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">301</span><span class="token punctuation">,</span><span class="token string">'小绿'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/create-tb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/tb-data.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>创建好数据库及表之后，我们就可以进行初始化和连接工作了，这里的步骤主要分为如下几步：</p>
<ol>
<li>首先需要加载驱动，主要是利用 <code v-pre>Class.forName()</code> 将驱动类加载到 JVM；</li>
<li>建立程序和数据库之间的连接，主要是创建 <code v-pre>Connection</code> 对象；</li>
<li>接着是创建用于执行 SQL 语句的 <code v-pre>Statement</code> 对象；</li>
<li>最后则是关闭连接从而释放资源，先关闭 <code v-pre>Statement</code> ，再关闭 <code v-pre>Connection</code> ；</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DriverManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Statement</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : InitJDBC
 * <span class="token keyword">@date</span> : 2021/4/23 10:56
 * <span class="token keyword">@description</span> : 初始化并建立连接
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InitJDBC</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Statement</span> statement <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token comment">//            初始化，注册驱动</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            建立连接</span>
            connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">"jdbc:mysql://localhost/javalearning?characterEncoding=UTF-8"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"12345"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"连接成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            创建 Statement 用于执行 SQL 语句</span>
            statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Statement 对象："</span> <span class="token operator">+</span> statement<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> <span class="token operator">|</span> <span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>statement <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    statement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>connection <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/connection.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>对于上述关闭 <code v-pre>Connection</code> 和 <code v-pre>Statement</code> 的方式，可能略显繁琐，为了进一步简化，可以使用 <code v-pre>try-with-source</code> 的方式自动关闭，简化后的代码如下；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DriverManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Statement</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : InitJDBC2
 * <span class="token keyword">@date</span> : 2021/4/23 13:53
 * <span class="token keyword">@description</span> : 初始化与连接
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InitJDBC2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">"jdbc:mysql://localhost:3306/javalearning?characterEncoding=UTF-8"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"12345"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"连接成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"State 对象："</span> <span class="token operator">+</span> statement<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jdbc-增删改查" tabindex="-1"><a class="header-anchor" href="#jdbc-增删改查" aria-hidden="true">#</a> JDBC 增删改查</h2>
<p>当我们初始化并建立 JDBC 连接之后，我们就可以对数据库进行 CRUD （增加、查询、更新、删除）等操作。</p>
<p>在正式开始 CRUD 前，我们最好先了解下 MySQL 中的数据类型在 Java 中所对应的数据类型，以便后续操作数据。一般来讲，两者中的数据类型对应关系如下表所示。</p>
<table>
<thead>
<tr>
<th>SQL 中的数据类型</th>
<th>对应的 Java 数据类型</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>BIT</code>、<code v-pre>BOOL</code></td>
<td><code v-pre>boolean</code></td>
</tr>
<tr>
<td><code v-pre>INTEGER</code></td>
<td><code v-pre>int</code></td>
</tr>
<tr>
<td><code v-pre>BIGINT</code></td>
<td><code v-pre>long</code></td>
</tr>
<tr>
<td><code v-pre>REAL</code></td>
<td><code v-pre>float</code></td>
</tr>
<tr>
<td><code v-pre>FLOAT</code>、 <code v-pre>DOUBLE</code></td>
<td><code v-pre>double</code></td>
</tr>
<tr>
<td><code v-pre>CHAR</code>、 <code v-pre>VARCHAR</code></td>
<td><code v-pre>String</code></td>
</tr>
<tr>
<td><code v-pre>DECIMAL</code></td>
<td><code v-pre>BigDecimal</code></td>
</tr>
<tr>
<td><code v-pre>DATE</code></td>
<td><code v-pre>java.sql.Date</code>、<code v-pre>LocalDate</code></td>
</tr>
<tr>
<td><code v-pre>TIME</code></td>
<td><code v-pre>java.sql.Time</code>、 <code v-pre>LocalTime</code></td>
</tr>
</tbody>
</table>
<p>此外，虽然我们在 JDBC 的简介部分在初始化和建立连接时使用的是用 <code v-pre>Statement</code> 来创建一个对象并用于后续操作，但是在实际使用过程中时，SQL 参数基本都是从方法参数传入的，这时使用 <code v-pre>Statement</code> 就十分容易引起 SQL 注入，为了解决这一问题，大牛们提出了如下两个办法：</p>
<ol>
<li>对字符串中的参数进行转义，然后利用转义后的参数来进行操作。但是转义十分麻烦，而且一使用 SQL，我们就必须增加转义代码。</li>
<li>利用 <code v-pre>PreparedStatement</code>，它利用 <code v-pre>?</code> 作为占位符，将数据联通 SQL 本身传递给数据库，从而保证每次传给数据库的 SQL 语句都是保持一致的，每次变动的只是占位符中的数据不同。通过使用 <code v-pre>PreparedStatement</code>，我们就能够 <strong>完全避免 SQL 注入 问题</strong>。</li>
</ol>
<p>针对后续利用 JDBC 操作数据库的过程，为了尽量避免 SQL 注入问题，我们优先采用 <code v-pre>PreparedStatement</code> 而非 <code v-pre>Statement</code>.</p>
<h3 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h3>
<p>首先，我们来进行查询操作。进行查询时，可以总结为如下几个步骤：</p>
<ol>
<li>通过创建一个 <code v-pre>Connection</code> 对象从而建立连接；</li>
<li>然后利用 <code v-pre>prepareStatement()</code> 方法创建一个 <code v-pre>PreparedStatement</code> 对象并传入 SQL 语句，用于执行查询操作；</li>
<li>接着执行 <code v-pre>PreparedStatement</code> 对象所提供的 <code v-pre>executeQuery()</code> 方法，获取查询结果并返回到一个 <code v-pre>ResultSet</code> 结果集中；</li>
<li>最后则是利用 <code v-pre>ResultSet</code> 对象的 <code v-pre>next()</code> 方法去读取我们所查询返回的结果；</li>
</ol>
<blockquote>
<p>需要注意的地方：</p>
<ol>
<li>如果你不是利用 <code v-pre>try-with-source</code> 的方式，那么一定要记得在使用完连接之后记得释放资源；</li>
<li>结果集 <code v-pre>ResultSet</code> 中，索引位置是从 <code v-pre>1</code> 开始的，而不是从 <code v-pre>0</code> 开始，这一点要特别注意！</li>
</ol>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : QueryTest
 * <span class="token keyword">@date</span> : 2021/4/23 14:01
 * <span class="token keyword">@description</span> : 查询
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QueryTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql://localhost:3306/javalearning?characterEncoding=UTF-8"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"0908"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> queryString <span class="token operator">=</span> <span class="token string">"SELECT * FROM students"</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>queryString<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> preparedStatement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"连接成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"查询到的信息如下："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//                查询到的结果索引从 1 开始</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"id："</span> <span class="token operator">+</span> resultSet<span class="token punctuation">.</span><span class="token function">getLong</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\tname："</span> <span class="token operator">+</span> resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\tgender："</span> <span class="token operator">+</span> resultSet<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\tgrade："</span> <span class="token operator">+</span> resultSet<span class="token punctuation">.</span><span class="token function">getLong</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\tscore："</span> <span class="token operator">+</span> resultSet<span class="token punctuation">.</span><span class="token function">getLong</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/qry.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="增加数据" tabindex="-1"><a class="header-anchor" href="#增加数据" aria-hidden="true">#</a> 增加数据</h3>
<p>即插入一条新记录，和查询语句很像，但是区别在于最后 <code v-pre>PreparedStatement</code> 对象执行的不是 <code v-pre>executeQuery()</code>，而是 <code v-pre>executeUpdate()</code>. 插入记录的步骤总结如下：</p>
<ol>
<li>创建 <code v-pre>Connection</code> 对象从而建立连接；</li>
<li>利用 <code v-pre>prepareStatement()</code> 方法创建一个 <code v-pre>PreparedStatement</code> 对象并传入 SQL 语句，用于执行插入操作；</li>
<li>然后依次设置占位符所代表的值；</li>
<li>执行 <code v-pre>PreparedStatement</code> 对象所提供的 <code v-pre>executeUpdate()</code> 方法，此时返回的是一个 <code v-pre>int</code> 类型的数，表示插入记录的条数；</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DriverManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">PreparedStatement</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : InsertTest
 * <span class="token keyword">@date</span> : 2021/4/23 15:04
 * <span class="token keyword">@description</span> : 新增数据
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InsertTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql://localhost:3306/javalearning?characterEncoding=UTF-8"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"110120"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> insertString <span class="token operator">=</span> <span class="token string">"INSERT INTO students VALUES (?,?,?,?,?)"</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>insertString<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"连接成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//            依次插入数据</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setLong</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">302</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"小蓝"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setLong</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setLong</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"插入数据成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新增数据后，接着查询数据，得到如下结果，可以看到我们新插入的数据成功加入到了数据库中！</p>
<figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/add-qry.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h3>
<p>删除数据和新增数据的方式基本一样，两者最大的区别在于 SQL 语句的不同，删除操作利用的是 <code v-pre>DELETE</code> 语句，能一次删除若干列。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DriverManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">PreparedStatement</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : DeleteTest
 * <span class="token keyword">@date</span> : 2021/4/23 15:23
 * <span class="token keyword">@description</span> : 删除数据
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeleteTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql://localhost:3306/javalearning?charactersetEncoding=UTF-8"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"0908"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> deleteString <span class="token operator">=</span> <span class="token string">"DELETE FROM students WHERE id = ?"</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>deleteString<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"连接成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setLong</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"删除成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除数据后，接着查询数据，得到如下结果，可以看到 <code v-pre>id = 101</code> 的数据列已经被删除了，说明我们删除数据成功了！</p>
<figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/del-qry.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="修改数据" tabindex="-1"><a class="header-anchor" href="#修改数据" aria-hidden="true">#</a> 修改数据</h3>
<p>修改数据的方式同删除数据和新增数据基本一致，最大的区别在于 SQL 语句的不同，修改操作利用的是 <code v-pre>UPDATE</code> 语句，能一次更新若干列。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DriverManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">PreparedStatement</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : UpdateTest
 * <span class="token keyword">@date</span> : 2021/4/23 15:23
 * <span class="token keyword">@description</span> : 更新数据
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UpdateTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql://localhost:3306/javalearning?charactersetEncoding=UTF-8"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"0908"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> updateString <span class="token operator">=</span> <span class="token string">"UPDATE students SET name = ? WHERE id = ?"</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>updateString<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"连接成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"村雨遥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setLong</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"更新成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改数据后，接着查询数据，得到如下结果，可以看到 <code v-pre>id = 201</code> 对应的数据列中，<code v-pre>name</code> 从小黄变成了村雨遥，说明数据更新成功。</p>
<figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/update-qry.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<p>当我们的数据库表设置自增主键后，在新增数据时无需指定主键也会自动更新。但是在获取自增主键的值时，不能先插入再查询，否则可能会导致冲突。要正确获取自增主键，需要在创建 <code v-pre>PreparedStatement</code> 时，指定一个标志位 <code v-pre>RETURN_GENERATED_KEYS</code>，用于表示 JDBC 驱动必须返回插入的自增主键。</p>
<p>假设我们创建表时，设置了自增长的键：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> students<span class="token punctuation">(</span>
	id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
    …
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时无论是 <code v-pre>executeQuery()</code> 还是 <code v-pre>execureUpdate()</code> 都不会返回这个自增长的 <code v-pre>id</code>，所以需要在创建 <code v-pre>PreparedStatement</code> 对象时加入 <code v-pre>Statement.RETURN_GENERATED_KEYS</code> 参数以确保会返回自增长 ID，然后通过 <code v-pre>getGeneratedKeys</code> 获取该字段；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : QueryTest
 * <span class="token keyword">@date</span> : 2021/4/23 18:01
 * <span class="token keyword">@description</span> : 自增主键查询
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QueryTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql://localhost:3306/javalearning?characterEncoding=UTF-8"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"12345"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> queryString <span class="token operator">=</span> <span class="token string">"INSET INTO students VALUES(null,?,……)"</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>queryString<span class="token punctuation">,</span> <span class="token class-name">Statement</span><span class="token punctuation">.</span><span class="token constant">RETURN_GENERATED_KEYS</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> preparedStatement<span class="token punctuation">.</span><span class="token function">getGeneratedKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"连接成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"村雨遥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ……
            preparedStatement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"查询到的信息如下："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//                查询到的结果索引从 1 开始</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"id："</span> <span class="token operator">+</span> resultSet<span class="token punctuation">.</span><span class="token function">getLong</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdbc-工具类" tabindex="-1"><a class="header-anchor" href="#jdbc-工具类" aria-hidden="true">#</a> JDBC 工具类</h3>
<p>观察上面的代码，我们可以注意到每次都需要注册驱动、传递参数，关闭连接等操作，为了提高工具通用性，我们利用配置文件来配置数据库相关信息，然后创建一个 JDBC 工具类来简化上述操作。</p>
<ol>
<li>首先在 <code v-pre>src</code> 目录下创建一个配置文件 <code v-pre>jdbc.properties</code>，并且填入数据库的相关信息；</li>
</ol>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost/demo?characterEncoding=UTF-8</span>
<span class="token key attr-name">user</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">"12345"</span>
<span class="token key attr-name">driver</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.cj.Driver</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>创建工具类</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URL</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : JDBCUtils
 * <span class="token keyword">@date</span> : 2021/4/24 15:10
 * <span class="token keyword">@description</span> : JDBC 工具类
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCUtils</span> <span class="token punctuation">{</span>
    <span class="token comment">//    配置文件中的各个参数</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> url<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> user<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> driver<span class="token punctuation">;</span>

    <span class="token comment">//    静态代码块</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token comment">//        读取配置文件并获取参数值</span>
<span class="token comment">//        创建集合类</span>
            <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        获取配置文件所在位置</span>
            <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> <span class="token class-name">JDBCUtils</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">URL</span> resource <span class="token operator">=</span> classLoader<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">"jdbc.properties"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> path <span class="token operator">=</span> resource<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"配置文件所在位置"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        加载配置文件</span>
            properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//            获取参数的值并赋值</span>
            url <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            user <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            password <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            driver <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//            注册驱动</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> <span class="token operator">|</span> <span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span>
     * <span class="token keyword">@return</span> 连接对象
     * <span class="token keyword">@description</span> 获取连接
     * <span class="token keyword">@date</span> 2021/4/24 15:24
     * <span class="token keyword">@author</span> cunyu1943
     * <span class="token keyword">@version</span> 1.0
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> user<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">preparedStatement</span> 预声明
     * <span class="token keyword">@param</span> <span class="token parameter">connection</span>        连接对象
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@description</span> 关闭连接
     * <span class="token keyword">@date</span> 2021/4/24 15:27
     * <span class="token keyword">@author</span> cunyu1943
     * <span class="token keyword">@version</span> 1.0
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token class-name">PreparedStatement</span> preparedStatement<span class="token punctuation">,</span> <span class="token class-name">Connection</span> connection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>preparedStatement <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                preparedStatement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>connection <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">resultSet</span>         结果集
     * <span class="token keyword">@param</span> <span class="token parameter">preparedStatement</span> 预声明对象
     * <span class="token keyword">@param</span> <span class="token parameter">connection</span>        连接对象
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@description</span> 关闭连接
     * <span class="token keyword">@date</span> 2021/4/24 15:28
     * <span class="token keyword">@author</span> cunyu1943
     * <span class="token keyword">@version</span> 1.0
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token class-name">ResultSet</span> resultSet<span class="token punctuation">,</span> <span class="token class-name">PreparedStatement</span> preparedStatement<span class="token punctuation">,</span> <span class="token class-name">Connection</span> connection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>resultSet <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                resultSet<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>preparedStatement <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                preparedStatement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>connection <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jdbc-事务" tabindex="-1"><a class="header-anchor" href="#jdbc-事务" aria-hidden="true">#</a> JDBC 事务</h2>
<h3 id="事务-4-大特性" tabindex="-1"><a class="header-anchor" href="#事务-4-大特性" aria-hidden="true">#</a> 事务 4 大特性</h3>
<p>事务是一个不可分割的数据库操作序列，也是数据库并发控制的基本单位，其执行结果必须使数据库从一种一致性状态切换到另一中一致性状态。事务是逻辑上的一组操作，要么都执行，要么都不执行。事务能够在数据库提交工作时确保要么所有修改都保存，要么所有修改都不保存。<strong>即事务是逻辑上的一组操作，要么都执行，要么都不执行</strong>。</p>
<ol>
<li><strong>原子性（Atomicity）</strong></li>
</ol>
<p>原子性是整个数据库事务中不可分割的工作单位，只有事务中的所有的数据库操作都执行成功，才代表整个事务成功，如果其中任一环节执行失败，那么就算已经执行成功的 SQL 语句也必须撤销，回滚到事务执行前的状态。即原子性能够保证 <strong>动作要么全部完成，要么完全不起作用。</strong> <strong>即事务是最小的执行单位，不允许分割</strong>。</p>
<ol start="2">
<li><strong>一致性（Consistency）</strong></li>
</ol>
<p>指事务将数据库从一种一致性状态变为另一种一致性状态。在事务开始前后，数据库的完整性约束未被破坏。<strong>在事务执行前后，数据能够保持一致，多个事务对统一数据读取的结果相同</strong>。</p>
<ol start="3">
<li><strong>隔离性（Isolation）</strong></li>
</ol>
<p>并发访问数据库时，隔离性要求每个读写事务对其他事务的操作对象能够相互分离，即一个用户的事务不被其他事务所干扰，各并发事务间数据库是独立的；</p>
<ol start="4">
<li><strong>持久性（Durability）</strong></li>
</ol>
<p>表示事务一旦被提交，其结果就是永久性的，它对数据库中数据的改变是持久的，即便数据库发生故障也不应该对其产生影响；</p>
<h3 id="脏读、幻读-不可重复读" tabindex="-1"><a class="header-anchor" href="#脏读、幻读-不可重复读" aria-hidden="true">#</a> 脏读、幻读 &amp; 不可重复读</h3>
<p>了解事务隔离级别之前，先来看看这几个读的概念：</p>
<ol>
<li><strong>脏读（Dirty Read）</strong></li>
</ol>
<p>表示某一事务已经更新了一份数据，另一个事务在此时读取了同一份数据。当前一个事务撤销操作后，就会导致后一个事务所读取的数据不正确。</p>
<ol start="2">
<li><strong>幻读（Phantom Read）</strong></li>
</ol>
<p>在一个事务的两次查询中数据量不一致，假如有一个事务查询了几列数据，同时另一个事务中在此时查询了新的数据，则查询事务在后续查询中，就会发现数据比最开始的查询数据更丰富。</p>
<ol start="3">
<li><strong>不可重复读（Non-repeatable Read）</strong></li>
</ol>
<p>一个事务中两次查询数据不一致，有可能是因为两次查询过程中插入了一个更新原有数据的事务。</p>
<p><strong>注意：不可重复读和幻读的区别在于：</strong></p>
<blockquote>
<p><strong>不可重复读的重点在于修改，</strong> 比如多次读取一条记录发现其中某些列的值被修改，而 <strong>幻读的重点在于新增或删除</strong>，比如多次读取一条记录发现记录增多或减少了。</p>
</blockquote>
<h3 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别" aria-hidden="true">#</a> 隔离级别</h3>
<p>SQL 标准定义了 4 个隔离级别，隔离级别从低到高分别是：</p>
<ol>
<li><strong>READ-UNCOMMITTED（读取未提交）</strong></li>
</ol>
<p>最低的隔离级别，允许读取尚未提交的数据变更，<strong>可能导致脏读、幻读或不可重复读</strong>。</p>
<ol start="2">
<li><strong>READ-COMMITTED（读取已提交）</strong></li>
</ol>
<p>允许读取并发事务已经提交的数据，<strong>能够阻止脏读，但可能导致幻读或不可重复读</strong>。</p>
<ol start="3">
<li><strong>REPEATABLE-READ（可重复读）</strong></li>
</ol>
<p>对同一字段的多次读取结果时一致的，除非数据是被本身事务自己所修改，<strong>能够阻止脏读和不可重复读，但可能导致幻读</strong>。</p>
<ol start="4">
<li><strong>SERIALIZABLE（可串行化）</strong></li>
</ol>
<p>最高的隔离级别，完全服从 ACID 的隔离级别，所有事务依次逐个执行，这样事务之间就完全不可能产生干扰，<strong>能够防止脏读、幻读以及不可重复读</strong>。</p>
<p>以下是 SQL 隔离级别和各种读之间的关系：</p>
<table>
<thead>
<tr>
<th>隔离级别</th>
<th>脏读</th>
<th>不可重复读</th>
<th>幻读</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>READ-UNCOMMITTED</code></td>
<td>✔</td>
<td>✔</td>
<td>✔</td>
</tr>
<tr>
<td><code v-pre>READ-COMMITTED</code></td>
<td>❌</td>
<td>✔</td>
<td>✔</td>
</tr>
<tr>
<td><code v-pre>REPEATABLE-READ</code></td>
<td>❌</td>
<td>❌</td>
<td>✔</td>
</tr>
<tr>
<td><code v-pre>SERIALIZABLE</code></td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
</tbody>
</table>
<h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3>
<p>关于回滚，主要涉及 <code v-pre>Connection</code> 对象，常用的三个方法如下：</p>
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
<td><code v-pre>void</code></td>
<td><code v-pre>setAutoCommit(boolean autoCommit)</code></td>
<td>设定连接的自动提交模式，<code v-pre>true</code> 表示自动提交，<code v-pre>false</code> 表示手动提交</td>
</tr>
<tr>
<td><code v-pre>void</code></td>
<td><code v-pre>commit()</code></td>
<td>使上次提交/回滚以来所做的所有更改成为永久更改，并释放此 <code v-pre>Connection</code> 对象当前持有的所有数据库锁</td>
</tr>
<tr>
<td><code v-pre>void</code></td>
<td><code v-pre>rollback()</code></td>
<td>撤销当前十五中所做的所有更改，并释放此 <code v-pre>Connection</code> 对象当前持有的所有数据库锁</td>
</tr>
</tbody>
</table>
<p>以下是一个回滚实例，我们当我们第一次插入一条数据时，由于是新数据，所以不会报错，但是如果我们执行一次程序之后再次执行，此时按理来说就会报错，因为插入的数据重复，这时候利用事务就可以十分方便的解决这个问题，我们设置插入出错就回滚到未出错之前的状态，这样就能保证插入数据不会报错了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DriverManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">PreparedStatement</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : AffairTest
 * <span class="token keyword">@date</span> : 2021/4/23 22:35
 * <span class="token keyword">@description</span> : 事务
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AffairTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql://localhost:3306/javalearning?characterEncoding=UTF-8"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"12345"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> insertString <span class="token operator">=</span> <span class="token string">"INSERT INTO students VALUES (?,?,?,?,?)"</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            关闭自动提交</span>
            connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>insertString<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"连接成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            依次插入数据</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setLong</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"小紫"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setLong</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">setLong</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            如果没有出错，则提交事务</span>
            connection<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"插入数据成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//            一旦出错，则回滚事务</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                connection<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
<span class="token comment">//            最后关闭连接</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>connection <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>preparedStatement <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    preparedStatement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上述回滚的方式外，JDBC 还支持设置保存点的方式，我们可以使用事务回滚到指定的保存点，主要涉及的方法如下：</p>
<ul>
<li><code v-pre>setSavepoint(String savePointName)</code>：创建新的保存点，返回一个 <code v-pre>SavePoint</code> 对象；</li>
<li><code v-pre>rollback(String savePointName)</code>：回滚到指定保存点；</li>
</ul>
<h2 id="连接池" tabindex="-1"><a class="header-anchor" href="#连接池" aria-hidden="true">#</a> 连接池</h2>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3>
<p>当我们使用多线程时，每个线程如果都需要连接数据库来执行 SQL 语句，那么每个线程都得创建一个连接，然后在使用之后关闭。这个创建和关闭连接的过程是十分耗时的，一旦多线程并发时，就容易导致系统卡顿。针对这一问题，提出使用数据库连接池。数据库连接池，其实就相当于一个集合，是一个存放数据库连接的容器。当我们的系统初始化好之后，集合就被创建，集合中会申请一些连接对象，当用户来访问数据库时，从集合中获取连接对象，一旦用户访问完毕，就将连接对象返还给容器。</p>
<p>使用数据库连接池的优点：一来是节约资源，二来提高了用户访问的效率。</p>
<h3 id="常用数据库连接池" tabindex="-1"><a class="header-anchor" href="#常用数据库连接池" aria-hidden="true">#</a> 常用数据库连接池</h3>
<h4 id="c3p0" tabindex="-1"><a class="header-anchor" href="#c3p0" aria-hidden="true">#</a> C3P0</h4>
<ol>
<li>导包</li>
</ol>
<p>首先需要导包，先去下载 C3P0 对象的 jar 包，下载地址：<a href="https://sourceforge.net/projects/c3p0/%EF%BC%8C%E7%84%B6%E5%90%8E%E5%B0%86%E5%85%B6%E4%B8%AD%E7%9A%84%E5%A6%82%E4%B8%8B%E4%B8%A4%E4%B8%AA%E5%8C%85%E5%AF%BC%E5%85%A5%EF%BC%9B" target="_blank" rel="noopener noreferrer">https://sourceforge.net/projects/c3p0/，然后将其中的如下两个包导入；<ExternalLinkIcon/></a></p>
<figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/c3p0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>定义配置文件</li>
</ol>
<p>创建 C3P0 对应的配置文件，注意：配置文件一般放在 <code v-pre>src</code> 路径下，而且文件的名称要必须为以下其中的一个：</p>
<ul>
<li><code v-pre>c3p0.properties</code></li>
<li><code v-pre>c3p0-config.xml</code></li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c3p0-config</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 使用默认的配置读取连接池对象 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>default-config</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--  连接参数 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driverClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>com.mysql.cj.jdbc.Driver<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbcUrl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>jdbc:mysql://localhost:3306/javalearning?characterEncoding=UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>0908<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>

        <span class="token comment">&lt;!-- 连接池参数 --></span>
        <span class="token comment">&lt;!--    初始化申请的连接数--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>initialPoolSize<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--        最大连接数--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>maxPoolSize<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--      超时时间--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkoutTimeout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>default-config</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c3p0-config</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>创建连接池对象</p>
</li>
<li>
<p>获取连接对象</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mchange<span class="token punctuation">.</span>v2<span class="token punctuation">.</span>c3p0<span class="token punctuation">.</span></span><span class="token class-name">ComboPooledDataSource</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : C3POTest
 * <span class="token keyword">@date</span> : 2021/4/24 16:01
 * <span class="token keyword">@description</span> : C3PO 连接池
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">C3POTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        创建数据库连接池对象</span>
        <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComboPooledDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        获取连接对象</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/link.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="druid" tabindex="-1"><a class="header-anchor" href="#druid" aria-hidden="true">#</a> Druid</h4>
<ol>
<li>导包</li>
</ol>
<p>导入 Druid 的 jar 包，下载地址：<a href="https://repo1.maven.org/maven2/com/alibaba/druid/" target="_blank" rel="noopener noreferrer">https://repo1.maven.org/maven2/com/alibaba/druid/<ExternalLinkIcon/></a></p>
<ol start="2">
<li>定义配置文件</li>
</ol>
<p>配置文件名称无要求，但是后缀名为 <code v-pre>.properties</code>，而且可以存放在任意目录下；</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">driver</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token key attr-name">url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/javalearning?characterEncoding=UTF-8</span>
<span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">12345</span>
<span class="token key attr-name">initialSize</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">maxActive</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">maxWait</span><span class="token punctuation">=</span><span class="token value attr-value">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>加载配置文件</li>
<li>创建连接池对象</li>
<li>获取连接对象</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSourceFactory</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : DruidTest
 * <span class="token keyword">@date</span> : 2021/4/24 19:56
 * <span class="token keyword">@description</span> : Druid 连接池
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DruidTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token comment">//            加载配置文件</span>
            <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">InputStream</span> resourceAsStream <span class="token operator">=</span> <span class="token class-name">DruidTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"druid.properties"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>resourceAsStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            获取连接池对象</span>
            <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            获取连接</span>
            <span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220717-jdbc-introduction/druid.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>今天的内容到此就结束了，老规矩，点赞关注走一波 🧐。</p>
<p>对于文中有错或遗漏的地方，还烦请各位大佬在评论区指出来。我是村雨遥，一个技术栈主要为 Java 的菜鸟程序员，关注我，一起学习成长吧！</p>
<p><strong>关注公众号，获取最新文章更新</strong></p>
<div style="text-align:center">
<figure><img src="https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif" alt="" width="200" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<Share colorful /></div></template>


