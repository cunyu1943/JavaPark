<template><div><h1 id="输入输出流" tabindex="-1"><a class="header-anchor" href="#输入输出流" aria-hidden="true">#</a> 输入输出流</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>我们日常开发过程中，有许多方面都涉及到 IO 流，比如上传下载、传输、设计模式等等。而所有的一切都是基于 IO 流来进行，所以今天就来看看 Java 中 IO 流的相关知识点。</p>
<p>本文主要内容安排如下：</p>
<ul>
<li><strong>文件对象</strong></li>
<li><strong>流简介</strong></li>
<li><strong>字节流</strong></li>
<li><strong>字符流</strong></li>
</ul>
<h2 id="文件对象" tabindex="-1"><a class="header-anchor" href="#文件对象" aria-hidden="true">#</a> 文件对象</h2>
<h3 id="文件路径" tabindex="-1"><a class="header-anchor" href="#文件路径" aria-hidden="true">#</a> 文件路径</h3>
<p>Java 标准库 <code v-pre>java.io</code> 提供了 <code v-pre>File</code> 对象用于操作文件和目录，也就是说我们的文件和目录都是可以通过 <code v-pre>File</code> 封装成对象的。构造 <code v-pre>File</code> 对象时，需要传入我们的文件或目录的路径名，常用的构造方法如下：</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>File(String pathName)</code></td>
<td>通过将给定路径名字符串转换为抽象路径名来创建新实例</td>
</tr>
<tr>
<td><code v-pre>File(String parent, String child)</code></td>
<td>从父路径名字符串和子路径名字符串创建新实例</td>
</tr>
<tr>
<td><code v-pre>File(File parent, String child)</code></td>
<td>从父抽象路径名和子路径名字符串创建新实例</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : FileObject
 * <span class="token keyword">@date</span> : 2021/4/20 9:20
 * <span class="token keyword">@description</span> : 创建 File 对象的三个构造方法
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileObject</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">File</span> file1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/1.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">File</span> file2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data"</span><span class="token punctuation">,</span> <span class="token string">"1.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">File</span> file3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> file4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>file3<span class="token punctuation">,</span> <span class="token string">"1.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/path.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>对于我们传入文件的路径，既可以使用绝对路径，也可以使用相对路径。</p>
<ul>
<li><strong>相对路径</strong>：以当前文件所在位置为参考，然后建立出另一个文件所在位置路径。我们最常用的有 <code v-pre>.</code> 和 <code v-pre>..</code>，前者表示当前目录，而后者则表示当前目录的上一级目录。假设我们当前目录为 <code v-pre>/home/cunyu1943/data</code>，则 <code v-pre>.</code> 仍然表示该目录，而 <code v-pre>..</code> 则表示 <code v-pre>/home/cunyu1943</code> 目录。</li>
<li><strong>绝对路径</strong>：又可以分为 <strong>本地绝对路径</strong> 和 <strong>网络绝对路径</strong>。本地绝对路径以根目录为参考，指文件在硬盘中真实存在的路径，比如在 Windows 系统，我们的一个绝对路径是 <code v-pre>D:\\Softwares\\Typora\\Typora.exe</code>，而在类 <code v-pre>Unix</code> 系统中则为 <code v-pre>/home/cunyu1943/IO.md</code>，此时需要注意平台间的分隔符是不一样的，但为了同一，推荐同一写成 <code v-pre>/</code>，这样程序在不同系统中迁移时也不会出现问题。而网络绝对位置则指带有网址的路径，比如 <code v-pre>https://cunyu1943.site/index.html</code>。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : FilePath
 * <span class="token keyword">@date</span> : 2021/4/20 9:55
 * <span class="token keyword">@description</span> : 文件路径
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FilePath</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"../data/1.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getCanonicalPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/relative-path.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="文件和目录操作" tabindex="-1"><a class="header-anchor" href="#文件和目录操作" aria-hidden="true">#</a> 文件和目录操作</h3>
<h4 id="创建与删除" tabindex="-1"><a class="header-anchor" href="#创建与删除" aria-hidden="true">#</a> 创建与删除</h4>
<p>既然拿到了 <code v-pre>File</code> 对象，接下来就是通过操作该对象来进行创建和删除文件或目录了，以下是一些 <code v-pre>File</code> 类常用的创建和删除方法。</p>
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
<td><code v-pre>boolean</code></td>
<td><code v-pre>createNewFile()</code></td>
<td>当具有该名称的文件不存在时，创建一个由该抽象路径名命名的新空文件；存在时，则创建失败</td>
</tr>
<tr>
<td><code v-pre>boolean</code></td>
<td><code v-pre>mkdir()</code></td>
<td>创建由此抽象路径名命名的目录</td>
</tr>
<tr>
<td><code v-pre>boolean</code></td>
<td><code v-pre>mkdirs()</code></td>
<td>创建由此抽象路径名命名的多级目录，包括任何必需但不存在的父目录</td>
</tr>
<tr>
<td><code v-pre>boolean</code></td>
<td><code v-pre>delete()</code></td>
<td>删除由此抽象路径名命名的文件或目录，删除目录的前提是该目录必须为空</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : CreateAndDelete
 * <span class="token keyword">@date</span> : 2021/4/20 10:40
 * <span class="token keyword">@description</span> : 创建&amp;删除
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CreateAndDelete</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/2.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>file1<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"创建文件成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"创建文件失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>file1<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"删除文件成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"删除文件失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">File</span> file2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/demo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>file2<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"创建文件夹成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"创建文件夹失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">File</span> file3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/JavaSE/demo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>file3<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"创建多级目录成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"创建多级目录失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/create-del.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>注意</strong>：</p>
<ul>
<li>
<p>创建文件时，调用的是 <code v-pre>createNewFile()</code> 方法，而创建目录时调用的是 <code v-pre>mkdir()</code> 或者 <code v-pre>mkdirs()</code> 方法。我们在调用时要注意区分，否则就算你的路径是文件，当调用了创建目录的方法后它也会创建成目录而非文件。对应的，就算你给定的路径是目录，当调用创建文件的方法后它也会创建成文件而非目录。</p>
</li>
<li>
<p>删除目录时，若目录中有内容（目录、文件），则 <strong>不能直接删除</strong>，而是应该先删除目录中的内容，然后才能删除目录；</p>
</li>
</ul>
<h4 id="相关属性" tabindex="-1"><a class="header-anchor" href="#相关属性" aria-hidden="true">#</a> 相关属性</h4>
<p>获取到 <code v-pre>File</code> 对象后，我们可以对其相关属性进行判断，常用方法如下：</p>
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
<td><code v-pre>long</code></td>
<td><code v-pre>length()</code></td>
<td>该抽象路径名表示的文件的所占字节大小</td>
</tr>
<tr>
<td><code v-pre>boolean</code></td>
<td><code v-pre>canRead()</code></td>
<td>该抽象路径名表示的文件是否可读</td>
</tr>
<tr>
<td><code v-pre>boolean</code></td>
<td><code v-pre>canWrite()</code></td>
<td>该抽象路径名表示的文件是否可写</td>
</tr>
<tr>
<td><code v-pre>boolean</code></td>
<td><code v-pre>canExecute()</code></td>
<td>该抽象路径名表示的文件是否可执行</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/20 11:04
 * <span class="token keyword">@description</span> : 相关属性
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/new.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">canExecute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该对象可执行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该对象不可执行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">canRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该对象可读"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该对象不可读"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">canWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该对象可写"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该对象不可写"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件大小："</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" Byte"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/path-attr.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="判断和获取" tabindex="-1"><a class="header-anchor" href="#判断和获取" aria-hidden="true">#</a> 判断和获取</h4>
<p>获取到 <code v-pre>File</code> 对象后，我们既可以用它来表示文件，也可以用来表示目录。而对于文件和目录的判断和获取功能，可以使用如下常用的方法：</p>
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
<td><code v-pre>boolean</code></td>
<td><code v-pre>isFile()</code></td>
<td>测试此抽象路径名表示的文件是否为普通文件</td>
</tr>
<tr>
<td><code v-pre>boolean</code></td>
<td><code v-pre>isDirectory()</code></td>
<td>测试此抽象路径名表示的文件是否为目录</td>
</tr>
<tr>
<td><code v-pre>boolean</code></td>
<td><code v-pre>exists()</code></td>
<td>测试此抽象路径名表示的文件或目录是否存在</td>
</tr>
<tr>
<td><code v-pre>String</code></td>
<td><code v-pre>getPath()</code></td>
<td>将抽象路径转换为路径字符串</td>
</tr>
<tr>
<td><code v-pre>String</code></td>
<td><code v-pre>getAbsolutePath()</code></td>
<td>返回此抽象路径名的绝对路径名字符串</td>
</tr>
<tr>
<td><code v-pre>String</code></td>
<td><code v-pre>getName()</code></td>
<td>返回由此抽象路径名表示的文件或目录的名称</td>
</tr>
<tr>
<td><code v-pre>String[]</code></td>
<td><code v-pre>list()</code></td>
<td>返回字符串数组，表示该抽象路径名表示目录下的文件和目录</td>
</tr>
<tr>
<td><code v-pre>File[]</code></td>
<td><code v-pre>listFiles()</code></td>
<td>返回抽象路径名数组，表示该抽象路径名表示目录下的文件</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Main
 * <span class="token keyword">@date</span> : 2021/4/20 11:15
 * <span class="token keyword">@description</span> : 判断和获取
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"目录下的文件和目录列表：（文件或目录名）"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> path <span class="token operator">:</span> file<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"目录下的文件和目录列表：（完整绝对路径）"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> path <span class="token operator">:</span> file<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/file-attr.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h3>
<p>假设我们要遍历 Windows 下 C 盘的 Windows 目录，并且列出其中文件名和文件大小，而不用列出目录名，我们可以利用如下代码来实现：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : Test
 * <span class="token keyword">@date</span> : 2021/4/20 11:40
 * <span class="token keyword">@description</span> : 遍历 C 盘 Windows 目录下的文件，并打印文件名和大小
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"C:/windows"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> item <span class="token operator">:</span> file<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件名："</span> <span class="token operator">+</span> item<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\t文件大小占："</span> <span class="token operator">+</span> item<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 字节"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/exercise.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="流" tabindex="-1"><a class="header-anchor" href="#流" aria-hidden="true">#</a> 流</h2>
<h3 id="什么是流" tabindex="-1"><a class="header-anchor" href="#什么是流" aria-hidden="true">#</a> 什么是流</h3>
<p>所谓流，就是一系列数据的组合。当我们需要进行数据交互的时候，比如在服务器和客户端之间进行数据交互时，我们此时就可以使用 Java 中的流来实现。Java 中，数据的输入和输出都是以流的形式来进行的。根据数据流方向的不同，我们可以将其分为：<strong>输入流</strong>、<strong>输出流</strong>。而根据处理的数据单位不同，可分为：<strong>字节流</strong>、<strong>字符流</strong>。两者的关系可以描述为下表：</p>
<table>
<thead>
<tr>
<th></th>
<th>字节流</th>
<th>字符流</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>输入流</strong></td>
<td><code v-pre>InputStream</code></td>
<td><code v-pre>Reader</code></td>
</tr>
<tr>
<td><strong>输出流</strong></td>
<td><code v-pre>OutputStream</code></td>
<td><code v-pre>Writer</code></td>
</tr>
</tbody>
</table>
<p>而对于字节流和字符流的选用原则，我们建议遵循如下规则：<strong>如果数据能够通过 Windows 自带笔记本软件打开并且能够读懂其中的内容，则选用字符流，否则选择字节流。而如果我们也不知道应该使用何种类型的流，则默认使用字节流</strong>。</p>
<p>下图描述了字节流和字符流的类层次图，注意：<strong>无论是字节流还是字符流，其子类名都是以其父类名作为子类名的后缀的</strong>。</p>
<figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/io-stream.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="inputstream" tabindex="-1"><a class="header-anchor" href="#inputstream" aria-hidden="true">#</a> InputStream</h3>
<figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/inputstream.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意，<code v-pre>InputStream</code> 并非是并不是一个接口，而是所有字节输入流所有类的父类。下面我们主要以 <code v-pre>FileInputStream</code> 来举例，所谓 <code v-pre>FileInputStream</code>，就是从文件流中读取数据，然后将数据从文件中读取到内存，常用方法如下：</p>
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
<td><code v-pre>int</code></td>
<td><code v-pre>available()</code></td>
<td>返回该输入流中可以读取的字节数的估计值</td>
</tr>
<tr>
<td><code v-pre>void</code></td>
<td><code v-pre>close()</code></td>
<td>关闭输入流并释放相关资源</td>
</tr>
<tr>
<td><code v-pre>int</code></td>
<td><code v-pre>read(bytep[] b)</code></td>
<td>从输入流读取一些字节数，并将其存储到缓冲区 b</td>
</tr>
</tbody>
</table>
<p>下面是一个从文件中读取数据到内存中的实例，文件内容如下：</p>
<figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/output-file.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : TestInputStream
 * <span class="token keyword">@date</span> : 2021/4/20 15:29
 * <span class="token keyword">@description</span> : InputStream 实例
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestInputStream</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/1.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token comment">//            读取输入流中可以被读的 bytes 估计值</span>
            <span class="token keyword">int</span> size <span class="token operator">=</span> inputStream<span class="token punctuation">.</span><span class="token function">available</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            根据 bytes 数创建数组</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//            数据读取到数组</span>
            inputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            数组转化为字符串</span>
            result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

<span class="token comment">//        打印字符串</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/file-demo1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="outputstream" tabindex="-1"><a class="header-anchor" href="#outputstream" aria-hidden="true">#</a> OutputStream</h3>
<figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/outputstream.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>OutputStream</code> 并非是并不是一个接口，而是所有输出字节流的所有类的父类。下面我们主要以 <code v-pre>FileOutputStream</code> 来举例，所谓 <code v-pre>FileOutputStream</code>，就是从内存中读取数据，然后将数据从内存存放到文件中，常用方法如下：</p>
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
<td><code v-pre>write(byte[] b)</code></td>
<td>将 <code v-pre>b.length</code> 个字节从指定字节数组写入此文件输出流</td>
</tr>
<tr>
<td><code v-pre>void</code></td>
<td><code v-pre>close()</code></td>
<td>关闭文件输出流并释放相关资源</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : TestOutputStream
 * <span class="token keyword">@date</span> : 2021/4/20 15:58
 * <span class="token keyword">@description</span> : OutputStream 实例
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestOutputStream</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/2.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token string">"这是一个 OutputStream 实例！"</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">OutputStream</span> outputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//            字符串转换为 byte 数组</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//            写入数据</span>
            outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"写入成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/write-success.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/file-text.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>需要注意的点：</p>
<ul>
<li>字节流写入数据时如何实现换行？</li>
</ul>
<p>写入换行的转义字符的字节数组即可，但是需要注意，不同系统下换行的转义字符不同，Windows 下为 <code v-pre>\r\n</code>，macOS 下为 <code v-pre>\r</code>，而 Linux 下为 <code v-pre>\m</code>。</p>
<ul>
<li>字节流写入数据时如何实现追加？</li>
</ul>
<p>调用 <code v-pre>public FileOutputStream(String name, boolean append)</code> 这个构造方法即可，当 <code v-pre>append</code> 为 <code v-pre>true</code> 时，表示追加，默认情况下是 <code v-pre>false</code>，表示不追加。</p>
<h3 id="字符串中的编解码问题" tabindex="-1"><a class="header-anchor" href="#字符串中的编解码问题" aria-hidden="true">#</a> 字符串中的编解码问题</h3>
<h4 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h4>
<ul>
<li><code v-pre>byte[] getBytes()</code>：使用平台默认字符集将该字符串编码成一系列字节，然后将结果存储到新的字节数组中；</li>
<li><code v-pre>byte[] getBytes(String charsetName)</code>：使用指定字符集将该字符串编码为一系列字节，然后将结果存储到新的字节数组中；</li>
</ul>
<h4 id="解码" tabindex="-1"><a class="header-anchor" href="#解码" aria-hidden="true">#</a> 解码</h4>
<ul>
<li><code v-pre>String(byte[] bytes)</code>：使用平台默认字符集解码指定的字节数来构造新的字符串；</li>
<li><code v-pre>String(byte[] bytes, String charsetName)</code>：通过指定的字符集解码指定的字节数组来构造新的字符串；</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">UnsupportedEncodingException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : EncodeAndDecode
 * <span class="token keyword">@date</span> : 2021/4/21 9:37
 * <span class="token keyword">@description</span> : 编码和解码
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EncodeAndDecode</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnsupportedEncodingException</span> <span class="token punctuation">{</span>
<span class="token comment">//        编码</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"村雨遥"</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes1 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes3 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">"GBK"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>bytes1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>bytes2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>bytes3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        解码</span>
        <span class="token class-name">String</span> res1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> res2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes1<span class="token punctuation">,</span> <span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> res3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes1<span class="token punctuation">,</span> <span class="token string">"GBK"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/encode-decode.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="writer" tabindex="-1"><a class="header-anchor" href="#writer" aria-hidden="true">#</a> Writer</h3>
<figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/writer.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>当我们要写入基于字符的数据到数据源中时，需要使用写入器 <code v-pre>Writer</code>. 以其中的 <code v-pre>FileWriter</code> 具体展开，其常用方法如下：</p>
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
<td><code v-pre>close()</code></td>
<td>先刷新再关闭流，不能再写数据</td>
</tr>
<tr>
<td><code v-pre>void</code></td>
<td><code v-pre>flush()</code></td>
<td>刷新流，可以继续写数据</td>
</tr>
<tr>
<td><code v-pre>void</code></td>
<td><code v-pre>newLine()</code></td>
<td>写入行分隔符</td>
</tr>
<tr>
<td><code v-pre>void</code></td>
<td><code v-pre>write()</code></td>
<td>写入字符或字符串</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedWriter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileWriter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : TestWriter
 * <span class="token keyword">@date</span> : 2021/4/20 18:35
 * <span class="token keyword">@description</span> : Writer 实例
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestWriter</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/2.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">BufferedWriter</span> bufferedWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            bufferedWriter<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"公众号：村雨遥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            bufferedWriter<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            bufferedWriter<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"Blog：https://cunyu1943.site"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            bufferedWriter<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            bufferedWriter<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"写入成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/write-demo.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="reader" tabindex="-1"><a class="header-anchor" href="#reader" aria-hidden="true">#</a> Reader</h3>
<figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/reader.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>当我们要从数据源读取基于字符的数据时，需要使用读取器 <code v-pre>Reader</code>. 我们以 <code v-pre>FileReader</code> 实践，其常用的方法有：</p>
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
<td><code v-pre>close()</code></td>
<td>关闭流并释放相关资源</td>
</tr>
<tr>
<td><code v-pre>int</code></td>
<td><code v-pre>read()</code></td>
<td>读取一个字符</td>
</tr>
<tr>
<td><code v-pre>String</code></td>
<td><code v-pre>readLine()</code></td>
<td>读一行文字</td>
</tr>
<tr>
<td><code v-pre>boolean</code></td>
<td><code v-pre>ready()</code></td>
<td>获取该流是否准备好被读取</td>
</tr>
</tbody>
</table>
<p>我们以从文件中读取内容为例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : TestReader
 * <span class="token keyword">@date</span> : 2021/4/20 18:40
 * <span class="token keyword">@description</span> : Reader 实例
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestReader</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/2.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"内容如下："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">BufferedReader</span> bufferedReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>content <span class="token operator">=</span> bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/java-tutorial/javase-series/assets/20220715-in-out-stream/reader-demo.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>好了，关于 IO 流的知识点到此就结束了，赶紧学起来！如果你觉得本文对你有所帮助，那就点赞关注一波吧！</p>
<p>对于文中遗漏或者错误的知识点，欢迎大家评论留言，咱们评论区见！</p>
<p><strong>关注公众号，获取最新文章更新</strong></p>
<div style="text-align:center">
<figure><img src="https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif" alt="" width="200" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div>
<Share colorful /></div></template>


