<template><div><h1 id="利用-idea-进行-java-开发" tabindex="-1"><a class="header-anchor" href="#利用-idea-进行-java-开发" aria-hidden="true">#</a> 利用 IDEA 进行 Java 开发</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/Pkf1WTj-x6JH4Jo8mOr8SQ" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/Pkf1WTj-x6JH4Jo8mOr8SQ<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>上一篇中，我们讲了 <a href="https://mp.weixin.qq.com/s/geOWlAwVMhtmmIMvFvjSpQ" target="_blank" rel="noopener noreferrer">如何搭建 Java 开发环境<ExternalLinkIcon/></a>。不过既然确定了要从事 Java 开发，那怎么能少得了一个趁手的 IDE 呢。正所谓工欲善其事。必先利其器，一个趁手的 IDE 就像电视剧里的神兵利器，能让我们功力大增，大大提高我们的效率。</p>
<p>但是目前市场上那么多的 IDE，有 Eclipse、IntelliJ IDEA、NetBeans …… 我们究竟该选择哪一个呢？既然做不了决定，那我就替你选择吧！要是都没接触过，那就直接 IDEA 吧，要是你之前是个 Eclipse 的忠实粉丝，也推荐你用一下 IDEA 试试，你只需要把 IDEA 的快捷键方式设置为 Eclipse 方式即可，相信过了一开始的阵痛期之后，就会喜欢上 IDEA 这一神器。那接下来，我们就来进行 IDEA 的安装工作！</p>
<h2 id="安装前的准备工作" tabindex="-1"><a class="header-anchor" href="#安装前的准备工作" aria-hidden="true">#</a> 安装前的准备工作</h2>
<p>开始安装之前，我们需要进行一些准备，首先是<strong>社区版和旗舰版该选谁</strong>，接着是<strong>软硬件的支持</strong>。</p>
<h3 id="旗舰版-vs-社区版" tabindex="-1"><a class="header-anchor" href="#旗舰版-vs-社区版" aria-hidden="true">#</a> 旗舰版 VS 社区版</h3>
<p>对于旗舰版和社区版，我从官网给出的对比从而摘选了如下图所示的区别。可以看出旗舰版无论在 <strong>语言支持、框架支持、Build 工具、部署工具、版本控制</strong> 等多方面都比社区版更加强大，但是最大的区别也是我们最为关心的一点：<strong>旗舰版收费，而社区版免费</strong>， 所以可以根据自己的需求进行选择。</p>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/ul-vs-community.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="软件" tabindex="-1"><a class="header-anchor" href="#软件" aria-hidden="true">#</a> 软件</h3>
<ul>
<li>IntelliJ IDEA 安装包，下载地址：<a href="https://www.jetbrains.com/idea/download/%EF%BC%8C%E9%80%89%E6%8B%A9%E8%87%AA%E5%B7%B1%E7%B3%BB%E7%BB%9F%E5%AF%B9%E5%BA%94%E5%AE%89%E8%A3%85%E5%8C%85%E5%8D%B3%E5%8F%AF%E3%80%82" target="_blank" rel="noopener noreferrer">https://www.jetbrains.com/idea/download/，选择自己系统对应安装包即可。<ExternalLinkIcon/></a></li>
</ul>
<h3 id="硬件" tabindex="-1"><a class="header-anchor" href="#硬件" aria-hidden="true">#</a> 硬件</h3>
<table>
<thead>
<tr>
<th>配置项目</th>
<th style="text-align:left">最低配置</th>
<th>推荐配置</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>内存</strong></td>
<td style="text-align:left">2G +</td>
<td>8 G +</td>
</tr>
<tr>
<td><strong>硬盘</strong></td>
<td style="text-align:left">2.5 GB + 1 GB 缓存</td>
<td>至少 5GB+ 空间的 SSD</td>
</tr>
<tr>
<td><strong>显示器</strong></td>
<td style="text-align:left">1024 x 768</td>
<td>1920×1080</td>
</tr>
<tr>
<td><strong>操作系统</strong></td>
<td style="text-align:left">官方放出的 64 位操作系统：<br />1. Windows 8 +<br />2. macOS 10.13 +<br />3. Linux 的 Gnome、KDE、Unity 桌面环境的支持<br />4. 预览版系统可能支持不好</td>
<td>最新的 64 位 Windows、macOS、Linux 系统</td>
</tr>
</tbody>
</table>
<h2 id="安装工作" tabindex="-1"><a class="header-anchor" href="#安装工作" aria-hidden="true">#</a> 安装工作</h2>
<h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<ol>
<li>下载安装包，根据自己的需求选择旗舰版或是社区版</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/ubuntu-download.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>将下载好的安装包 <code v-pre>ideaIU-2020.1.1.tar.gz</code> 移动到平时存放软件的目录下进行解压缩</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> ideaIU-2020.1.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/unzip.png" alt="解压" tabindex="0" loading="lazy"><figcaption>解压</figcaption></figure>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/strucrure.png" alt="解压后的目录结构" tabindex="0" loading="lazy"><figcaption>解压后的目录结构</figcaption></figure>
<ol start="3">
<li>进入解压后的 <code v-pre>bin</code> 目录，然后在终端启动如下命令即可：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./idea.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/sh-idea.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>进入初始化启动后的设置即可。</li>
</ol>
<p>首先是 UI 主题选择，根据自己的喜好选择 Light 还是 Darcula 模式；</p>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/ui.png" alt="图片源自 IDEA 官网" tabindex="0" loading="lazy"><figcaption>图片源自 IDEA 官网</figcaption></figure>
<p>接着是否创建启动器脚本，同时选择自己的脚本保存目录</p>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/shell-path.png" alt="图片源自 IDEA 官网" tabindex="0" loading="lazy"><figcaption>图片源自 IDEA 官网</figcaption></figure>
<p>接着选择自己想要的插件和禁用无关插件，根据自己的需求安装即可，如果不知道怎么选择，默认即可。</p>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/plugin.png" alt="图片源自 IDEA 官网" tabindex="0" loading="lazy"><figcaption>图片源自 IDEA 官网</figcaption></figure>
<p>选择额外的插件支持，按需安装，默认不勾选，后续也可以自行安装。</p>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/other-pulgin.png" alt="图片源自 IDEA 官网" tabindex="0" loading="lazy"><figcaption>图片源自 IDEA 官网</figcaption></figure>
<h4 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h4>
<p>Linux 下卸载只需要将对应目录（即刚才解压后的目录）删除即可。</p>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>
<h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h4>
<p>安装过程和 Ubuntu 大致相同，只是 Windows 中的安装包是可执行文件，只需要双击进行安装即可，然后后面选择自己的安装路径即可，安装好之后的设置和 Ubuntu 一致。</p>
<h4 id="卸载-1" tabindex="-1"><a class="header-anchor" href="#卸载-1" aria-hidden="true">#</a> 卸载</h4>
<p>进入 Windows 设置，然后进入应用，然后搜索 IDEA，选择卸载即可。</p>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/uninstall.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h3>
<h4 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2" aria-hidden="true">#</a> 安装</h4>
<ol>
<li>首先去 <a href="https://www.jetbrains.com/idea/download/#section=mac" target="_blank" rel="noopener noreferrer">官网下载<ExternalLinkIcon/></a> 对应安装包；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/macos-down.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>然后双击下载好的 <code v-pre>.dmg</code> 安装包，等待验证后拖拽到 <code v-pre>Applications</code> 即可；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/macos-install.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>安装成功，打开的主页面如下图所示；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/idea-main-ui.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="卸载-2" tabindex="-1"><a class="header-anchor" href="#卸载-2" aria-hidden="true">#</a> 卸载</h4>
<p>打开访达中的 <strong>应用程序</strong>，然后找到 IDEA，将其拖到 <strong>🗑️ 废纸篓</strong> 即可，也可以单击鼠标右键，然后 <strong>移到废纸篓</strong>；</p>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/uninstall-macos.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="创建-java-项目" tabindex="-1"><a class="header-anchor" href="#创建-java-项目" aria-hidden="true">#</a> 创建 Java 项目</h2>
<p><a href="https://mp.weixin.qq.com/s/geOWlAwVMhtmmIMvFvjSpQ" target="_blank" rel="noopener noreferrer">上一篇<ExternalLinkIcon/></a> 文章中，我们介绍了如何利用编辑器写我们的 <code v-pre>Hello World</code>，接下来就讲讲如何利用 IDEA 来创建并书写我们的 <code v-pre>Hello World</code> 程序。</p>
<ol>
<li>依次进入 <code v-pre>File -&gt; New -&gt; Project</code>，然后选择左侧 Java，配置项目 JDK；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/new-project.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>下一步之后，如果勾选上面的选项，就会从模板创建一个项目（一般都是 <code v-pre>HelloWorld</code>），不勾选就是一个空项目，看自己选择；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/template.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>再接下来，就是设置项目名以及项目存储目录了；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/pro-name.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>最后点击完成，我们的普通 Java 项目就创建成功了；</li>
</ol>
<figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/finish-pro.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>项目创建成功了，我们在项目 <code v-pre>src</code> 目录上右键新建一个 Java 类文件。注意，一般来讲，我们倾向于把类的命名方式定义为首字母大写的驼峰命名法。然后填入如下代码，一个 简单的 <code v-pre>HelloWorld</code> 就完成了；</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : cunyu
 * <span class="token keyword">@version</span> : 1.0
 * <span class="token keyword">@className</span> : HelloWorld
 * <span class="token keyword">@date</span> : 2020/10/23 11:14
 * <span class="token keyword">@description</span> : HelloWorld
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220703-learn-java-with-idea/helloworld.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li>最后运行我们刚才写的代码，可以看到输出了 <code v-pre>Hello World</code>，和我们在上一篇文章中通过控制台打印出的一样！</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Hello World<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>今天的内容就到此为止了，主要介绍了 IDEA 的不同版本之间的区别，以及 IDEA 在不同系统中的安装和卸载工作，最后则是给大家演示了如何利用 IDEA 创建一个项目，编写我们最简单的 <code v-pre>Hello World!</code> 程序。</p>
<p>这里如果您想了解 IDEA 的更多使用技巧，可以关注一下，后边我会抽空写一个完整的教程系列，敬请期待吧！您要是等不及了，那就加我微信来催我更文吧！</p>
<Share colorful /></div></template>


