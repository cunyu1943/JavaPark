<template><div><h1 id="jdk-安装及入门实例" tabindex="-1"><a class="header-anchor" href="#jdk-安装及入门实例" aria-hidden="true">#</a> JDK 安装及入门实例</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/geOWlAwVMhtmmIMvFvjSpQ" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/geOWlAwVMhtmmIMvFvjSpQ<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>作为一个入门的学习者，要进行 Java 开发，那怎么能少得了 JDK 呢，本文就先来看看如何安装并配置 JDK，为后续的学习做好铺垫。</p>
<Mermaid id="mermaid-19" code="eJxLL0osyFDwCeJyjH66p+Fp/8TnfeufLmp+NmHt0927nvZ3PW1d+nL6iucrup/u6o9V0NW1U3CKNtRTeLKj+8XevU93bnu6rvPF4lYFLxfvWC6cMmB9zkBZQ4XwzLyU/PJiQopdgLJGCrmJyf7BhJS6A2WNFSCiz2eve7p36ov1y14sXxxLvJdco430FDxSc3LyFcLzi3JSSNDqFm2sp/B8/tIX69ueN+0EWvts3oRYLgCTs695"></Mermaid><h2 id="下载并安装-jdk" tabindex="-1"><a class="header-anchor" href="#下载并安装-jdk" aria-hidden="true">#</a> 下载并安装 JDK</h2>
<p>什么是 JDK 呢？JDK（Java Development Kit）即 Java 开发者工具包，使我们学习 Java 语言必须安装的一个工具。</p>
<p>这里主要以 Windows 和 macOS 系统中 JDK 的安装为例，一来因为考虑到大家用的最多的还是 Windows 和 macOS 系统，二来则是因为手边没有安装 Linux 图形化系统。如果恰好你使用的是 Linux 系统，那么推荐你参考一下其他的资料，同样你也可以参考我的另一篇文章：<a href="https://cunyu1943.blog.csdn.net/article/details/105648148" target="_blank" rel="noopener noreferrer">手把手带你玩转 Ubuntu<ExternalLinkIcon/></a>。</p>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<ol>
<li>首先进入 <a href="https://www.oracle.com/java/technologies/javase-downloads.html" target="_blank" rel="noopener noreferrer">Oracle 官网<ExternalLinkIcon/></a>，然后找到自己想要的 JDK 版本，这边以 JDK 11 为例；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/jdk11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>点击 JDK Download 后，它会跳转到具体下载页面，然后根据自己的系统来进行选择，此处以 Windows 10 64 位为例；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/download.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>点击最后的连接后，它会让你同意协议，勾选同意，然后登陆你的 Oracle 账户即可开始下载，若是没有 Oracle 账户，点击下面的创建一个即可；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/agree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/login.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>下载完成后，进行安装即可，安装流程和我们平常安装软件的一样，就再赘述，需要注意的是要记住如下的安装路径，因为一般我们都不会安装到默认路径，所以一定要记住你所安装到的路径，这关系到后续的配置步骤；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/install-path.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="配置-jdk" tabindex="-1"><a class="header-anchor" href="#配置-jdk" aria-hidden="true">#</a> 配置 JDK</h4>
<p>好了，经过上面的配置，我们的 JDK 就已经安装好了，但是这个使用你是用不了的，我们还需要进一步的配置；</p>
<p>打开系统属性来进行环境变量配置，打开系统属性并进行配置的方式如下：</p>
<ol>
<li><strong>Windows + R</strong> 快捷键组合唤醒 Windows 运行窗口，然后输入 <code v-pre>sysdm.cpl</code>，紧接着回车即可，一般会打开如下界面，然后点击最上方的 <strong>高级</strong>；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/jdk-config.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>点击高级后，就会打开如下界面，然后打开环境变量；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/envi-vari.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>新建环境变量 <strong>JAVA_HOME</strong>，然后变量值填入刚才安装 JDK 的路径（刚才提醒过要记住！）；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/java-home.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>编辑 <strong>Path</strong> 环境变量，然后新建一个变量值，填入如下内容：<code v-pre>%JAVA_HOME%\bin</code>；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/path-bin.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>各种确定，然后突出系统属性即可，到这一步，理论上我们的 JDK 就安装并配置成功了，接下来我们就去确认一下到底安装好了没；</li>
</ol>
<h4 id="验证-jdk" tabindex="-1"><a class="header-anchor" href="#验证-jdk" aria-hidden="true">#</a> 验证 JDK</h4>
<p>按照上述步骤操作完成之后，接下来就是验证了，一般我们可以通过如下三个命令来进行验证；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看 JDK 版本</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>

<span class="token comment"># 编译命令</span>
javac

<span class="token comment"># 运行命令</span>
<span class="token function">java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开命令控制台（<strong>Windows + R，然后输入 cmd 回车</strong>），然后输入如上三个命令，如果安装成功，一般是会出现如下内容的；</p>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/java-version.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/javac.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/java.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h3>
<h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h4>
<ol>
<li>首先去 <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank" rel="noopener noreferrer">官网下载<ExternalLinkIcon/></a> 对应安装包；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/macos-jdk.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>
<p>接受相关协议并登录下载；</p>
</li>
<li>
<p>双击下载好的 <code v-pre>.dmg</code> 安装包，然后开始安装；</p>
</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/install-macos.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>安装过程中会让你输入密码，也就是你本机的密码。</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/pwd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>安装成功；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/success.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h4>
<p>不同于 Windows，macOS 下不用再去配置了，它会给你自动配置好，我们只需要去验证即可；</p>
<ol>
<li>查看 JDK 版本；</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/macos-jdk-v.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>编译命令；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/macos-javac.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>运行命令；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/macos-java.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="安装目录详解" tabindex="-1"><a class="header-anchor" href="#安装目录详解" aria-hidden="true">#</a> 安装目录详解</h3>
<p>安装好 <code v-pre>JDK</code> 之后，打开安装路径，通常情况下会有如下的目录结构：</p>
<table>
<thead>
<tr>
<th>目录</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>bin</code></td>
<td>用于存放各种工具命令，比如我们最常用额 <code v-pre>javac</code>、<code v-pre>java</code> 等</td>
</tr>
<tr>
<td><code v-pre>lib</code></td>
<td>存放工具的一些补充 <code v-pre>jar</code> 包</td>
</tr>
<tr>
<td><code v-pre>conf</code></td>
<td>存放相关配置文件</td>
</tr>
<tr>
<td><code v-pre>include</code></td>
<td>存放一些平台特定的头文件，比如 <code v-pre>Windows</code>、<code v-pre>macOS</code>、<code v-pre>Linux</code> 平台下这里的头文件是有所不同的</td>
</tr>
<tr>
<td><code v-pre>legal</code></td>
<td>存放各模块的授权文件</td>
</tr>
<tr>
<td><code v-pre>jmods</code></td>
<td>存放各种模块</td>
</tr>
</tbody>
</table>
<h2 id="你的第一个-java-程序-helloworld" tabindex="-1"><a class="header-anchor" href="#你的第一个-java-程序-helloworld" aria-hidden="true">#</a> 你的第一个 Java 程序：HelloWorld</h2>
<p>好了，经过上面的安装配置，我们就可以开始我们的第一个 Java 程序编写了。</p>
<p>要开发一个 Java 程序，主要分成 3 个步骤：</p>
<ol>
<li><strong>编写代码</strong></li>
<li><strong>编译代码</strong></li>
<li><strong>运行代码</strong></li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/sequence.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我们不需要任何的基础，只需要按照上面的步骤配置好 JDK 之后，然后以上三个步骤逐一来进行就可以了。下面就来进行具体实践：</p>
<ol>
<li>打开编辑器（推荐 <code v-pre>VS Code</code>），如果没有，记事本也成，然后写入如下内容，然后保存为 <code v-pre>Main.java</code>，这里文件名一定要是 <code v-pre>Main</code>，文件后缀名为 <code v-pre>.java</code>。</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>打开控制命令台，然后进入上述文件存放的路径，使用如下命令进行编译，然后会生成一个 <code v-pre>Main.class</code> 文件；</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>javac Main.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/helloworld.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/java-class.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>运行，使用如下命令进行运行，然后就可以看到打印出的最终结果了！</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> Main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220702-jdk-install-and-hello-world/console-compiler.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="知识点说明" tabindex="-1"><a class="header-anchor" href="#知识点说明" aria-hidden="true">#</a> 知识点说明</h2>
<p>我们的 Hello World 是打印出来了，但是你肯定对里边的代码很感兴趣，这一节就主要针对我们的 Hello World 程序进行说明；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的程序代码如上：</p>
<ul>
<li><code v-pre>public</code>：权限修饰符，表示这一个可以公开访问的类，类似的还有 <code v-pre>protected、default、private</code>，后续学习过程中再一一介绍；</li>
<li><code v-pre>class</code>：Java 关键字，表示这是一个类；</li>
<li><code v-pre>Main</code>： 表示我们的类名，在保存时文件一定要和它同名，否则你的程序是编译不了的。你可以试试，如果把我们上面的 <code v-pre>Main.java</code> 改成其他名字，你看看是不是还能编译成功呢？</li>
<li><code v-pre>public static void main(String[] args){}</code>：主方法，这是我们以后最常接触到的一个方法，每个主类当中都必须有一个 <code v-pre>main</code> 方法；</li>
<li><code v-pre>System.out.println(&quot;Hello World!&quot;)</code>：控制台输出语句，执行该语句会在控制台中输出字符串，字符串要用双引号 <code v-pre>&quot;&quot;</code> 括起来，你可以把其中的 <code v-pre>Hello Wolrd!</code> 换成你想要打印的内容试试看。</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>好了，今天的内容到此就结束了，主要介绍了如何在 Windows 和 macOS 中安装 JDK，具体过程可以总结如下：</p>
<ul>
<li>安装</li>
<li>配置</li>
<li>验证</li>
</ul>
<p>然后编写了我们的第一个 <code v-pre>Hello World</code> 程序，并利用安装好的的 JDK 对其进行编译和运行。最后，则是对我们的 <code v-pre>Hello World</code> 程序中的相关知识进行了介绍。</p>
<Share colorful /></div></template>


