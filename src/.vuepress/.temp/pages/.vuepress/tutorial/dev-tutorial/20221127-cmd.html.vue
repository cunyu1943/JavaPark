<template><div><h1 id="黑客大神也常用的一些-cmd-命令" tabindex="-1"><a class="header-anchor" href="#黑客大神也常用的一些-cmd-命令" aria-hidden="true">#</a> 黑客大神也常用的一些 CMD 命令</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>原文：<a href="https://mp.weixin.qq.com/s/LAZY7sMiwzNwimTpmlh0rw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/LAZY7sMiwzNwimTpmlh0rw<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>作为一个程序员，可能更多的是在 <code v-pre>Linux</code> 中使用命令来操作。但在日常使用 <code v-pre>Windows</code> 的过程中，或多或少会使用到命令提示符窗口，也就是 <code v-pre>Windows</code> 中的 <code v-pre>CMD</code>。这个时候，掌握一些常用的命令就尤为重要了，一方面方便自己使用，另一方面，也方便给电脑小白露一手 👀。那接下来就来看看，<code v-pre>CMD</code> 中最常用的一些命令。</p>
<h2 id="如何打开命令提示符窗口" tabindex="-1"><a class="header-anchor" href="#如何打开命令提示符窗口" aria-hidden="true">#</a> 如何打开命令提示符窗口</h2>
<p>打开的方式很多，这里例举常用的 <code v-pre>5</code> 种。</p>
<ol>
<li><strong>方法 1</strong></li>
</ol>
<p><code v-pre>Win + R</code> 快捷键打开运行，输入 <code v-pre>cmd</code> 后回车。</p>
<ol start="2">
<li><strong>方法 2</strong></li>
</ol>
<p>依次打开开始菜单 -&gt; <code v-pre>Windows</code> 系统（<code v-pre>Windows</code> 工具） -&gt; 命令提示符。</p>
<ol start="3">
<li><strong>方法 3</strong></li>
</ol>
<p>打开资源管理器，然后在地址栏输入 <code v-pre>cmd</code> 后回车。</p>
<ol start="4">
<li><strong>方法 4</strong></li>
</ol>
<p>鼠标右键点击开始菜单的 <code v-pre>Win</code> 图标，找到命令提示符（终端）并进入。</p>
<ol start="5">
<li><strong>方法 5</strong></li>
</ol>
<p>在任务栏中的搜索栏中搜索 <code v-pre>cmd</code> 并打开。</p>
<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<h3 id="目录操作" tabindex="-1"><a class="header-anchor" href="#目录操作" aria-hidden="true">#</a> 目录操作</h3>
<ol>
<li><strong>磁盘切换</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>盘符 + 冒号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如 <code v-pre>D:</code> 就代码进入 <code v-pre>D</code> 盘。</p>
<figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/09414a722bdc4ecb919d9c12a20cbeff.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li><strong>进入指定目录</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> 目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/1ef51757d619425383bb0e847186d46b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li><strong>返回磁盘根目录</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/9ab01d4d9b7c4ecea2deb6985bd3ba9e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li><strong>返回上级目录</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/5dea8e9f04c34e91869c7356b32bfab2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li><strong>新建目录</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>md 目录名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/6617f0f262cd44b39bc6e75f7146e0e7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li><strong>查看当前目录中内容</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">dir</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/bddda2e75fb6487b9e0631b00f52b5ff.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="7">
<li><strong>查看指定目录结构</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tree 目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/aaf0e471c2434efa905e0d160b1b060e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="8">
<li><strong>删除目录</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>rd 目录名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/c422e4c274ba4e4eab773b94763c9f06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li><strong>复制文件</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>copy 源文件 目标文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/45336c8adbc94cb4ae00a8754280930e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="10">
<li><strong>删除文件</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>del 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/98b36e84ffaf4292a6cd97bdc98aa4fd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="开关机操作" tabindex="-1"><a class="header-anchor" href="#开关机操作" aria-hidden="true">#</a> 开关机操作</h3>
<ol>
<li><strong>关机</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">shutdown</span> /s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li><strong>重启</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">shutdown</span> /r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li><strong>注销</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">shutdown</span> /l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li><strong>休眠</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">shutdown</span> /h /f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li><strong>定时关机</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">shutdown</span> /s /t 时间（秒）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/e88262049fb2404894e0137de05d83b5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li><strong>取消关机</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">shutdown</span> /a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/e77917423cde4e07b1552897ee9497d7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="网络操作" tabindex="-1"><a class="header-anchor" href="#网络操作" aria-hidden="true">#</a> 网络操作</h3>
<ol>
<li><strong>测试网络延迟和丢包率</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ping</span> ip/域名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/b90c248998964ff79241b7d5a4a5dba9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li><strong>查看本机 ip 地址</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ipconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/68a68e8dc08745ee90b562feb5120de5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li><strong>清除本地 DNS 缓存</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ipconfig /flushdns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/2d7f861853f44810821c50208d9d88eb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li><strong>路由追踪</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tracert ip/域名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/280ecadf38664625b5be11c324f170c1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="进程-服务操作" tabindex="-1"><a class="header-anchor" href="#进程-服务操作" aria-hidden="true">#</a> 进程/服务操作</h3>
<ol>
<li><strong>查看当前运行的进程</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tasklist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/074848735de8420cab1ba252e95fa575.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li><strong>运行指定程序或命令</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>start 程序名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li><strong>按名称结束进程</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>taskkill /im 进程名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/39d7659d45884808b26da56f85afca97.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li><strong>按 PID 结束进程</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>taskkill /pid PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/fb1d63432bae44d18462e68655232300.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li><strong>查看当前运行的服务</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>net start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/925f0da34e374d1b8b27799209af0293.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li><strong>启动指定服务</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>net start 服务名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/4ff4342792f3439e934eb03776188aff.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="7">
<li><strong>停止指定服务</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>net stop 服务名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/867c5f3845c34e9e9332612406020dc1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="其他操作" tabindex="-1"><a class="header-anchor" href="#其他操作" aria-hidden="true">#</a> 其他操作</h3>
<ol>
<li><strong>清除屏幕</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>cls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/89af78bbcd7a48d6be489b09a0505ea0.png" alt="清除前" loading="lazy"><br>
<img src="https://cunyu1943.github.io/static/imgs/article/dev-tutorial/871450fabd614115ac62f4d8cc552871.png" alt="清楚后" loading="lazy"></p>
<ol start="2">
<li><strong>退出</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>以上就是今天所带来的 <code v-pre>Windows</code> 中常用的 <code v-pre>CMD</code> 命令了，对付日常使用完全够了，更多的一些命令用到的频率较低，可以在有需要的时候再去具体搜索。</p>
<p>如果觉得对各位朋友有用的话，不妨点个赞再走呀 ~</p>
</div></template>


