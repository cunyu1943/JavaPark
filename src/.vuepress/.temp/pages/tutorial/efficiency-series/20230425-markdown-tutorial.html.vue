<template><div><h1 id="如何用-markdown-写出好看的文章" tabindex="-1"><a class="header-anchor" href="#如何用-markdown-写出好看的文章" aria-hidden="true">#</a> 如何用 Markdown 写出好看的文章</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/qIptV_MEGjsUjw_zqvGn_A" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/qIptV_MEGjsUjw_zqvGn_A<ExternalLinkIcon/></a></p>
</div>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<h3 id="什么是-markdown" tabindex="-1"><a class="header-anchor" href="#什么是-markdown" aria-hidden="true">#</a> 什么是 Markdown</h3>
<p>欢迎来到这篇 <code v-pre>Markdown</code> 语法教程！<code v-pre>Markdown</code> 是一种轻量级标记语言，很多写作者喜欢使用它来编写文档、博客、笔记等。<code v-pre>Markdown</code> 语法简单易懂、规范明确，适合快速书写和修改文本。学习 <code v-pre>Markdown</code> 语法可以帮助作者更好地组织文本结构、添加格式、插入图片等，让文本更加清晰易读。在这篇教程中，我们将一步步地介绍 <code v-pre>Markdown</code> 的基本语法和应用方法，帮助您更快地了解和掌握这种语言。无论您是初学者还是有经验的用户，都可以从这篇教程中获得新的知识和技能，加强你的学习和写作能力。</p>
<h3 id="markdown-的优点" tabindex="-1"><a class="header-anchor" href="#markdown-的优点" aria-hidden="true">#</a> Markdown 的优点</h3>
<p>相比于其他格式，<code v-pre>Markdown</code> 具有以下优点：</p>
<ul>
<li>语法简洁易学，且功能比纯文本强大</li>
<li>格式转换方便，兼容性强，可读性极好</li>
<li>专注内容写作而不用关注排版样式</li>
<li>能导出 <code v-pre>PDF</code>、<code v-pre>HTML</code> 等格式的文件</li>
<li>迁移、反复编辑不会导致格式错乱</li>
</ul>
<h3 id="markdown-的应用场景" tabindex="-1"><a class="header-anchor" href="#markdown-的应用场景" aria-hidden="true">#</a> Markdown 的应用场景</h3>
<p>如果你经常逛 <code v-pre>Github</code>，你会发现大多数项目下边都会有一个 <code v-pre>README.md</code> 的项目说明文件，而它就是利用 <code v-pre>Markdown</code> 来进行编写的。而现在的大多数博客平台如 <code v-pre>CSDN</code>、博客园、掘金等，基本都支持 <code v-pre>Markdown</code> 格式，如果你有多平台发布文章的需求，那么学会用 <code v-pre>Markdown</code> 来编写内容未尝不是一个好的方法。</p>
<p>而且就算微信公众号，我们也可以借助第三方工具来进行排版，比起之前用 <code v-pre>Word</code> 来排版的方式省去了很多麻烦，实现一文多发变得更加容易，不用再去调格式适应不同平台。</p>
<h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h2>
<h3 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h3>
<p>在标题书写时不同数量的 <code v-pre>#</code> 对应不同的标题。一到六级标题如下，每多一级则多加一个<code v-pre>#</code>号。<strong>注意</strong>：符号和标题内容间的空格不能省略，而且最多支持到六级标题。具体语法格式及实例如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>不同数量的 # + 空格 + 标题内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 一级标题</span>

<span class="token title important"><span class="token punctuation">##</span> 二级标题</span>

<span class="token title important"><span class="token punctuation">###</span> 三级标题</span>

<span class="token title important"><span class="token punctuation">####</span> 四级标题</span>

<span class="token title important"><span class="token punctuation">#####</span> 五级标题</span>

<span class="token title important"><span class="token punctuation">######</span> 六级标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h3>
<p>列表又分为 <strong>有序列表</strong> 和 <strong>无序列表</strong>。</p>
<ol>
<li><strong>有序列表</strong></li>
</ol>
<p>有阿拉伯数字及英文句号 <code v-pre>.</code> 后加空格后输入内容即可。具体语法格式及实例如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>阿拉伯数字 + . + 空格 + 内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> 马刺
<span class="token list punctuation">2.</span> 湖人
<span class="token list punctuation">3.</span> 独行侠
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>无序列表</strong></li>
</ol>
<p>在连线符号 <code v-pre>-</code> 后加空格后输入内容即可，具体格式以及实例如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">-</span> <span class="token list punctuation">+</span> 空格 + 内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">-</span> Apple
<span class="token list punctuation">-</span> 华为
<span class="token list punctuation">-</span> 小米
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="粗体" tabindex="-1"><a class="header-anchor" href="#粗体" aria-hidden="true">#</a> 粗体</h3>
<p>在需要加粗的内容前后分别用两个 <code v-pre>*</code> 将其包围起来，具体格式以及实例如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content"> + 内容 + </span><span class="token punctuation">**</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">公众号：村雨遥</span><span class="token punctuation">**</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="斜体" tabindex="-1"><a class="header-anchor" href="#斜体" aria-hidden="true">#</a> 斜体</h3>
<p>和加粗很类似，不过只需要将内容前后分别用一个 <code v-pre>*</code> 或者 <code v-pre>_</code> 包围起来即可，具体格式以及实例如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">*</span> <span class="token list punctuation">+</span> 内容 + *
<span class="token italic"><span class="token punctuation">_</span><span class="token content"> + 内容 + </span><span class="token punctuation">_</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token italic"><span class="token punctuation">*</span><span class="token content">公众号：村雨遥</span><span class="token punctuation">*</span></span>
<span class="token italic"><span class="token punctuation">_</span><span class="token content">公众号：村雨遥</span><span class="token punctuation">_</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除线" tabindex="-1"><a class="header-anchor" href="#删除线" aria-hidden="true">#</a> 删除线</h3>
<p>要给内容加上删除线的效果，只需要在内容前后分别用两个 <code v-pre>~</code> 将其包围即可，具体格式以及实例如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token strike"><span class="token punctuation">~~</span><span class="token content"> + 内容 + </span><span class="token punctuation">~~</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token strike"><span class="token punctuation">~~</span><span class="token content"> 公众号：村雨遥 </span><span class="token punctuation">~~</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="下划线" tabindex="-1"><a class="header-anchor" href="#下划线" aria-hidden="true">#</a> 下划线</h3>
<p>Markdown 语法中是不支持下划线的，如果要实现下划线的效果，可以借助 <code v-pre>HTML</code> 语法，具体格式以及实例如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span><span class="token punctuation">></span></span> + 内容 + <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span><span class="token punctuation">></span></span>公众号：村雨遥<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3>
<p>如果要将不同内容之间插入一条分割线，可以在一行中使用三个及以上减号 <code v-pre>-</code> 来建立一个分割线，同时需要在分割线的上面空上一行，具体格式以及实例如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>
<span class="token hr punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>公众号：村雨遥

<span class="token hr punctuation">---</span>

个人博客：https://cunyu1943.site
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h3>
<p>引用的格式是在大于符号 <code v-pre>&gt;</code> 后面接上空格以及要引用的内容即可，具体格式以及实例如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token blockquote punctuation">></span> <span class="token list punctuation">+</span> 空格 + 内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token blockquote punctuation">></span> 不要哀求，学会争取。若是如此，终有所获。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="上下标" tabindex="-1"><a class="header-anchor" href="#上下标" aria-hidden="true">#</a> 上下标</h3>
<p>当我们需要写化学公式或者需要标记上下标时，该怎么办呢？<code v-pre>Markdown</code> 同样是不支持的，所以仍然需要借助 <code v-pre>HTML</code> 的相关语法。</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> 上标
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sup</span><span class="token punctuation">></span></span> + 内容 + <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sup</span><span class="token punctuation">></span></span>

<span class="token list punctuation">2.</span> 下标
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub</span><span class="token punctuation">></span></span> + 内容 + <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> 上标

H<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sup</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sup</span><span class="token punctuation">></span></span>O

<span class="token list punctuation">2.</span> 下标

H<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub</span><span class="token punctuation">></span></span>O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高亮" tabindex="-1"><a class="header-anchor" href="#高亮" aria-hidden="true">#</a> 高亮</h3>
<p>高亮语法在有的 <code v-pre>Markdown</code> 标准中可能不支持，但在这里也给出其用法，具体格式以及实例如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>== + 内容 + ==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>==公众号：村雨遥==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表" aria-hidden="true">#</a> 任务列表</h3>
<p>任务列表是我们经常接触到的东西，比如我们的备忘录，完成的事件和未完成事件，要在 <code v-pre>Markdown</code> 中实现同样效果，具体格式以及实例如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>已完成：[x] + 内容
未完成：[] + 内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> 未完成
<span class="token list punctuation">-</span> [ ] 公众号：村雨遥
<span class="token list punctuation">-</span> [ ] 个人博客：https://cunyu1943.site

<span class="token list punctuation">2.</span> 已完成
<span class="token list punctuation">-</span> [x] 知乎：https://www.zhihu.com/people/cunyu1943
<span class="token list punctuation">-</span> [x] CSDN：https://blog.csdn.net/github_39655029
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3>
<p>当我们文章写完之后，想要像 <code v-pre>Word</code> 中那样自动生成目录，此时就可以使用 <code v-pre>[toc]</code> 单独占一行来实现，但是要注意，有的平台可能不支持该用法，具体格式如下：</p>
<ul>
<li><strong>语法</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>[toc]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>[toc]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3>
<p>想在 <code v-pre>Markdown</code> 中使用表格也很方便，我们可以用 <code v-pre>:</code> 来调整表格对齐的方式，具体格式如下：</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> 左对齐

<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> 平台     </span><span class="token punctuation">|</span><span class="token table-header important"> 链接                                   </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:-------</span> <span class="token punctuation">|</span> <span class="token punctuation">:-------------------------------------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> 公众号   </span><span class="token punctuation">|</span><span class="token table-data"> 村雨遥                                 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> 个人博客 </span><span class="token punctuation">|</span><span class="token table-data"> https://cunyu1943.github.io            </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> 知乎     </span><span class="token punctuation">|</span><span class="token table-data"> https://www.zhihu.com/people/cunyu1943 </span><span class="token punctuation">|</span>
</span></span>
<span class="token list punctuation">2.</span> 居中对齐

<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">   平台   </span><span class="token punctuation">|</span><span class="token table-header important">                  链接                  </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:------:</span> <span class="token punctuation">|</span> <span class="token punctuation">:------------------------------------:</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data">  公众号  </span><span class="token punctuation">|</span><span class="token table-data">                 村雨遥                 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> 个人博客 </span><span class="token punctuation">|</span><span class="token table-data">      https://cunyu1943.github.io       </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data">   知乎   </span><span class="token punctuation">|</span><span class="token table-data"> https://www.zhihu.com/people/cunyu1943 </span><span class="token punctuation">|</span>
</span></span>
<span class="token list punctuation">3.</span> 右对齐

<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">     平台 </span><span class="token punctuation">|</span><span class="token table-header important">                                   链接 </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">-------:</span> <span class="token punctuation">|</span> <span class="token punctuation">-------------------------------------:</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data">   公众号 </span><span class="token punctuation">|</span><span class="token table-data">                                 村雨遥 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> 个人博客 </span><span class="token punctuation">|</span><span class="token table-data">            https://cunyu1943.github.io </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data">     知乎 </span><span class="token punctuation">|</span><span class="token table-data"> https://www.zhihu.com/people/cunyu1943 </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="公式" tabindex="-1"><a class="header-anchor" href="#公式" aria-hidden="true">#</a> 公式</h3>
<p><code v-pre>Markdown</code> 支持 <code v-pre>LaTeX</code> 语法，可以实现行间公式和独立公式块，公式的写法和 <code v-pre>LaTeX</code> 语法一样，具体格式如下</p>
<ul>
<li>行间公式：<code v-pre>$ + 公式 + $</code></li>
<li>独立公式块：<code v-pre>$$ + 公式 + $$</code></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> 行间公式

$x_1+x_2=0$

<span class="token list punctuation">2.</span> 独立公式块

$$x^2+y^2=0$$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h3>
<p>同公式一样，代码块同样可以分为行间代码块和独立代码块，其区别在于用一个或多个 ` 将其括起来，具体语法及实例如下：</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> 行间代码块

这是一个行间代码：<span class="token code-snippet code keyword">`print("公众号：村雨遥")`</span>

<span class="token list punctuation">2.</span> 独立代码块

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">python</span>
<span class="token code-block language-python language-python language-python">print("公众号：村雨遥")</span>
<span class="token punctuation">```</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链接与图片" tabindex="-1"><a class="header-anchor" href="#链接与图片" aria-hidden="true">#</a> 链接与图片</h3>
<p>链接和图片的唯一区别在于图片需要在最前面加上一个 <code v-pre>!</code>，两个具体格式如下：</p>
<ul>
<li><strong>链接</strong>：<code v-pre>[链接说明](链接 url)</code></li>
<li><strong>图片</strong>：<code v-pre>![图片说明](图片 url)</code></li>
<li><strong>实例</strong></li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> 链接

<span class="token url">[<span class="token content">村雨遥</span>](<span class="token url">https://cunyu1943.site</span>)</span>

<span class="token list punctuation">2.</span> 图片

<span class="token url"><span class="token operator">!</span>[<span class="token content">村雨遥主页</span>](<span class="token url">https://cdn.pixabay.com/photo/2016/05/10/02/09/blue-1382940_1280.jpg</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具和资源" tabindex="-1"><a class="header-anchor" href="#工具和资源" aria-hidden="true">#</a> 工具和资源</h2>
<h3 id="markdown-编辑器" tabindex="-1"><a class="header-anchor" href="#markdown-编辑器" aria-hidden="true">#</a> Markdown 编辑器</h3>
<p>好了，学习了上面的之后，是不是想马上动手试试。既然如此，那就再给大家推荐几款编辑器，让你的效率更上一层楼，<code v-pre>PS</code>：<strong>多学习快捷键使用，效果更佳哦！</strong></p>
<ol>
<li><a href="https://www.typora.io/" target="_blank" rel="noopener noreferrer">Typora<ExternalLinkIcon/></a></li>
</ol>
<p>跨平台多功能编辑器，支持导出 <code v-pre>PDF</code>、<code v-pre>HTML</code> 等格式，不过目前已经开始收费，89 软妹币即可永久授权 3 台设备。</p>
<figure><img src="@source/tutorial/efficiency-series/assets/typora.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li><a href="https://marktext.app/" target="_blank" rel="noopener noreferrer">MarkText<ExternalLinkIcon/></a></li>
</ol>
<p>跨平台开源 <code v-pre>Markdown</code> 编辑器，支持斗图哦！</p>
<figure><img src="@source/tutorial/efficiency-series/assets/marktext.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code<ExternalLinkIcon/></a></li>
</ol>
<p>微软出品，相信这是许多程序员电脑上必装的一个软件了。支持超多插件，需要插件使用效果更佳哦！</p>
<figure><img src="@source/tutorial/efficiency-series/assets/vscode.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="markdown-插件" tabindex="-1"><a class="header-anchor" href="#markdown-插件" aria-hidden="true">#</a> Markdown 插件</h3>
<p>说到插件，就不得不推荐下浏览器插件 <a href="https://markdown-here.com/get.html" target="_blank" rel="noopener noreferrer">Markdown Here<ExternalLinkIcon/></a> 了。</p>
<p>通过该插件，可以用 <code v-pre>Markdown</code> 来写一封漂亮的电子邮件。通常邮件都是没有格式的，通过该插件，可以实现将 <code v-pre>Markdown</code> 语法的邮件转换为想要的效果。</p>
<p>而使用步骤也很简单：</p>
<ol>
<li>在邮件客户端的富文本编辑器中编写 <code v-pre>Markdown</code> 格式的邮件内容。</li>
<li>接着在编辑区右键后选择 <code v-pre>Markdown 转换</code> 即可。</li>
</ol>
<figure><img src="@source/tutorial/efficiency-series/assets/Markdown-here.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="markdown-在线编辑器和转换器" tabindex="-1"><a class="header-anchor" href="#markdown-在线编辑器和转换器" aria-hidden="true">#</a> Markdown 在线编辑器和转换器</h3>
<ol>
<li><a href="https://editor.mdnice.com/" target="_blank" rel="noopener noreferrer">Markdown Nice<ExternalLinkIcon/></a></li>
</ol>
<p>支持自定义样式的 <code v-pre>Markdown</code> 编辑器，支持微信公众号、知乎和稀土掘金，也是我在日常运营公众号时使用最多的转换器之一了。</p>
<figure><img src="@source/tutorial/efficiency-series/assets/markdownnice.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li><a href="https://www.zybuluo.com/mdeditor" target="_blank" rel="noopener noreferrer">Cmd Markdown<ExternalLinkIcon/></a></li>
</ol>
<p>作业部落出品的在线 <code v-pre>Markdown</code> 编辑阅读器，支持以下功能：</p>
<ul>
<li>整理知识，学习笔记</li>
<li>发布日记，杂文，所见所想</li>
<li>撰写发布技术文稿（代码支持）</li>
<li>撰写发布学术论文（<code v-pre>LaTeX</code> 公式支持）</li>
</ul>
<figure><img src="@source/tutorial/efficiency-series/assets/cmdmarkdown.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li><a href="https://doocs.gitee.io/md" target="_blank" rel="noopener noreferrer">微信 Markdown 编辑器<ExternalLinkIcon/></a></li>
</ol>
<p><code v-pre>Doocs</code> 开源社区出品的一款高度简洁的微信 <code v-pre>Markdown</code> 编辑器。</p>
<figure><img src="@source/tutorial/efficiency-series/assets/doocs.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>
<ol>
<li><code v-pre>Markdown</code>兼容<code v-pre>HTML</code>相关语法。</li>
<li>对于特殊字符，可以通过转义字符<code v-pre>\</code>将其显示出来。</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>总而言之，<code v-pre>Markdown</code> 是一种非常实用的文档编辑和网页写作语言，在多种不同的场景中都有着广泛的应用。希望本教程能够帮助初学者快速掌握 <code v-pre>Markdown</code> 的基本语法，并在实用中不断深化自己的理解。如果你有任何问题或建议，欢迎给我们留言并共同探讨。让我们一起更好地运用 <code v-pre>Markdown</code>，让文档编辑和网页写作更加高效流畅！</p>
</div></template>


