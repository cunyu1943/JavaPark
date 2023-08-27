<template><div><h1 id="hexo-github-pages博客搭建教程" tabindex="-1"><a class="header-anchor" href="#hexo-github-pages博客搭建教程" aria-hidden="true">#</a> Hexo+Github Pages博客搭建教程</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>现在市面上已经有许多博客了，比如 CSDN、掘金、博客园、简书等等。我们可以直接在上面发表内容，而且交互比较人性化，而且也能被搜索引擎检索到。但是总归是别人的平台，经常会受限，因此我们就希望能有自己的博客。之前也尝试过搭建过不同的博客类型，折腾了不少工作，最终决定定型，采用 Hexo + Github Pages 的方式。今天就带大家一起来搭建自己的博客。由于是采用 Hexo + Github Pages 的方式，所以都是免费的，只是需要有一定的动手能力！</p>
<h2 id="hexo-简介" tabindex="-1"><a class="header-anchor" href="#hexo-简介" aria-hidden="true">#</a> Hexo 简介</h2>
<p><a href="https://hexo.io/zh-cn/docs/" title="Hexo" target="_blank" rel="noopener noreferrer">Hexo<ExternalLinkIcon/></a> 是一个快速、简洁且高效的静态博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。我们只需要通过 Markdown 语法写好自己的博客内容，然后通过简单的命令就能够将生成的网页上传到 Github，然后大家都可以来访问你的网页了。既方便了自己，也给了自己一个展示自己成果的平台，是不是一举两得。</p>
<h2 id="搭建步骤" tabindex="-1"><a class="header-anchor" href="#搭建步骤" aria-hidden="true">#</a> 搭建步骤</h2>
<p>搭建之前，需要做一些准备工作，首先需要确保你的电脑上已经上安装好了 Git 和 Node.Js，然后才能开始安装 Hexo，那么首先我们先来看看如何准备这这些环境。</p>
<h3 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h3>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<ol>
<li><strong>Window</strong>：<a href="https://git-scm.com/download/win" title="下载并安装" target="_blank" rel="noopener noreferrer">下载并安装<ExternalLinkIcon/></a></li>
<li><strong>macOS</strong>：<a href="https://sourceforge.net/projects/git-osx-installer/" title="下载并安装" target="_blank" rel="noopener noreferrer">下载并安装<ExternalLinkIcon/></a></li>
<li><strong>Linux（Debian，Ubuntu）</strong>：<code v-pre>sudo apt-get install git-core</code></li>
<li><strong>Linux（Fedora、RedHat、CentOS）</strong>：<code v-pre>sudo yum install git-core</code></li>
</ol>
<h4 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h4>
<p>安装成功后，将 git 与 GitHub 账号绑定，右键打开 Git Bash，然后设置配置信息：</p>
<figure><img src="@source/tutorial/blog-series/assets/gitbash-here.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 配置用户名和邮箱</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"github 用户名"</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"github 注册邮箱"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如我的配置就是：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>name <span class="token string">"cunyu1943"</span>
git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>email <span class="token string">"747731461@qq.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接着生成 ssh 密钥文件，输入如下命令后直接三次回车即可，一般不需要设置密码；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 生成 ssh 密钥</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">"github 注册邮箱"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我生成秘钥的命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">"747731461@qq.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/tutorial/blog-series/assets/ssh-key.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>一般执行上述命令之后，会生成 <code v-pre>id_rsa</code> 和 <code v-pre>id_rsa.pub</code> 两个文件，前者是我们私有的，而后者则是对外开放的。接着找到生成的 <code v-pre>.ssh</code> 的文件夹中的 id_rsa.pub 密钥，将内容复制；</p>
<figure><img src="@source/tutorial/blog-series/assets/id-rsa.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后打开 <a href="https://github.com/settings/keys" title="GitHub-Settings-Keys" target="_blank" rel="noopener noreferrer">GitHub-Settings-Keys<ExternalLinkIcon/></a> 页面，创建一个新的 SSH key，填写 <code v-pre>Title</code> 和 <code v-pre>Key</code>，<code v-pre>Title</code> 可以随意，而 <code v-pre>Key</code> 的内容则是我们刚才复制的 <code v-pre>id_rsa.pub</code> 中的内容，最后点击 <code v-pre>Add SSH key</code> 即可；</p>
<figure><img src="@source/tutorial/blog-series/assets/add-ssh-key.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="node-js-安装" tabindex="-1"><a class="header-anchor" href="#node-js-安装" aria-hidden="true">#</a> Node.Js 安装</h3>
<h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h4>
<p>去官网下载最新的稳定版 <a href="https://nodejs.org/en/" title="Node.JS" target="_blank" rel="noopener noreferrer">Node.JS<ExternalLinkIcon/></a> ，一般推荐 64 位（大家应该现在用的电脑基本都是 64 位的吧），安装的话很简单，基本就是下一步下一步点击就好了。如果还是不知道如何安装，可以参考我的另一篇博客：<a href="https://blog.csdn.net/github_39655029/article/details/105397485" title="Windows 下 Node.js 的安装（多图版）" target="_blank" rel="noopener noreferrer">Windows 下 Node.js 的安装（多图版）<ExternalLinkIcon/></a></p>
<h4 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h4>
<p>安装完成后，要查看我们是否安装成功，可以打开命令提示符（<code v-pre>Win + R</code>），输入 <code v-pre>cmd</code> 打开控制台，输入如下命令，如果出现对应版本号，说明安装成功了；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/tutorial/blog-series/assets/node-v.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="设置-1" tabindex="-1"><a class="header-anchor" href="#设置-1" aria-hidden="true">#</a> 设置</h4>
<p>由于下载包是从国外服务器，所以速度较慢，因此我们推荐用阿里的国内镜像进行设置；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="hexo-安装" tabindex="-1"><a class="header-anchor" href="#hexo-安装" aria-hidden="true">#</a> Hexo 安装</h3>
<p>在你的硬盘上找个地儿，用来存放你的博客文件，比如我的就在 <code v-pre>D:personalFiles/github/blog</code>，这个文件夹你可以根据自己的喜好来设置。然后从命令台进入当前文件夹，接下来就是安装过程了；</p>
<ol>
<li>首先安装 Hexo</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i hexo-cli <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/tutorial/blog-series/assets/hexo-install.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>新建一个文件夹用于存放你的博客，比如我的是 <code v-pre>blog</code>，然后进入该文件夹，并用如下命令进行初始化并安装必备组件；</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>hexo init <span class="token builtin class-name">.</span>
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/tutorial/blog-series/assets/init-blog.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>初始化后，目录结构如下；</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── _config.yml <span class="token comment"># 网站配置信息</span>
├── package.json <span class="token comment"># 应用程序信息</span>
├── scaffolds <span class="token comment"># 模板文件夹</span>
├── <span class="token builtin class-name">source</span> <span class="token comment"># 存放用户资源</span>
<span class="token operator">|</span>   ├── _drafts
<span class="token operator">|</span>   └── _posts
└── themes <span class="token comment"># 主题文件夹</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>然后输入如下命令，然后在浏览器中打开 <code v-pre>http://localhost:4000</code>；</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 新建博客</span>
hexo new <span class="token string">"博客名"</span>
<span class="token comment"># 生成静态网页</span>
hexo g
<span class="token comment"># 打开本地服务器</span>
hexo s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以看到如下的界面，不过我的是经过修改过的，所以和你的会不一样。</p>
<figure><img src="@source/tutorial/blog-series/assets/blog-home.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="github-个人仓库" tabindex="-1"><a class="header-anchor" href="#github-个人仓库" aria-hidden="true">#</a> Github 个人仓库</h3>
<p>完成上面的步骤之后，我们就能在本地进行预览了，不过我们如果想要发布到网上供别人看的话，那就得利用 Github Pages 的功能了，下边就来介绍如何结合 Hexo + Github Pages ，将我们的博客推送到网上去，方便大家在任何地方访问！</p>
<blockquote>
<p>首先你得有个 GitHub 账号，如果没有的，请出门 <a href="https://github.com/" title="右转" target="_blank" rel="noopener noreferrer">右转<ExternalLinkIcon/></a> 先去注册个账号；</p>
</blockquote>
<p>有了账号之后，新建一个仓库，而且得确保你的仓库是 <code v-pre>public</code>，你要搞个 <code v-pre>private</code>，谁能访问的了？？？同时，仓库名一定要是：</p>
<blockquote>
<p><strong><a href="http://xn--eqr924avxo.github.io" target="_blank" rel="noopener noreferrer">用户名.github.io<ExternalLinkIcon/></a></strong></p>
<p><strong><a href="http://xn--eqr924avxo.github.io" target="_blank" rel="noopener noreferrer">用户名.github.io<ExternalLinkIcon/></a></strong></p>
<p><strong><a href="http://xn--eqr924avxo.github.io" target="_blank" rel="noopener noreferrer">用户名.github.io<ExternalLinkIcon/></a></strong></p>
</blockquote>
<p>这个用户名建议不要太复杂，但是又要能体现你个人特点，因为后续让别人访问你的博客时，就要通过 <code v-pre>https://用户名.github.io</code> 这个域名来访问。比如我的用户名是 <strong>cunyu1943</strong>，所以我的仓库就是 <a href="https://github.com/cunyu1943/cunyu1943.github.io" title="cunyu1943.github.io" target="_blank" rel="noopener noreferrer">cunyu1943.github.io<ExternalLinkIcon/></a>：</p>
<figure><img src="@source/tutorial/blog-series/assets/domain.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="部署到-github" tabindex="-1"><a class="header-anchor" href="#部署到-github" aria-hidden="true">#</a> 部署到 Github</h3>
<p>完成上面的步骤后，你应该能在本地进行预览了，接下来就是推送网站到 Github Pages 了，然后我们就能被其他人访问了。</p>
<p>只需要在我们刚才的博客根目录中的站点配置文件 <code v-pre>_config.yml</code> ，设置为你的个人仓库名即可：</p>
<figure><img src="@source/tutorial/blog-series/assets/config.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/tutorial/blog-series/assets/repo-setting.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完成上述步骤之后，主要使用如下命令，就能将我们本地的内容推送到远程 GitHub 仓库了，然后在浏览器中访问：</p>
<blockquote>
<p><a href="https://xn--eqr924avxo.github.io" target="_blank" rel="noopener noreferrer">https://用户名.github.io<ExternalLinkIcon/></a></p>
</blockquote>
<p>比如我的博客 <a href="https://cunyu1943.github.io/" title="村雨遥的博客" target="_blank" rel="noopener noreferrer">村雨遥的博客<ExternalLinkIcon/></a>；</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>hexo clean
hexo g
hexo d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/tutorial/blog-series/assets/blog-home.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="gitee-个人仓库" tabindex="-1"><a class="header-anchor" href="#gitee-个人仓库" aria-hidden="true">#</a> Gitee 个人仓库</h3>
<p>上面说完部署到 Github，接下来就说说怎么部署到 Gitee，老规矩，首先你得需要一个 Gitee 账号，如果没有的，出门 <a href="https://gitee.com/" title="右转" target="_blank" rel="noopener noreferrer">右转<ExternalLinkIcon/></a> 先去注册个账号。</p>
<p>然后新建一个仓库，同样有几点需要注意的：</p>
<ol>
<li>保证你的仓库是 <code v-pre>public</code>；</li>
<li>仓库名是 <strong>你的用户名</strong>，这一点和 Github 略有不同，不需要是 <strong><a href="http://xn--eqr924avxo.gitee.io" target="_blank" rel="noopener noreferrer">用户名.gitee.io<ExternalLinkIcon/></a></strong>；</li>
</ol>
<p>比如我的用户名是 <code v-pre>cunyu1943</code>，所以我的仓库名就是 <a href="https://gitee.com/cunyu1943/cunyu1943" title="cunyu1943" target="_blank" rel="noopener noreferrer">cunyu1943<ExternalLinkIcon/></a>。</p>
<figure><img src="@source/tutorial/blog-series/assets/gitee-repo.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="部署到-gitee" tabindex="-1"><a class="header-anchor" href="#部署到-gitee" aria-hidden="true">#</a> 部署到 Gitee</h3>
<p>完成上面的步骤后，你应该能在本地进行预览了，接下来就是推送网站到 Gitee Pages 了，然后我们就能被其他人访问了。这里需要注意的是，Gitee Pages 不像 Github Pages 会自动更新，它需要你每次推送后，去更新一下，如果想要自动更新，就需要开通 Gitee 的会员。</p>
<p>然后需要在我们刚才的博客根目录中的站点配置文件 <code v-pre>_config.yml</code> ，设置为你的个人仓库名即可：</p>
<figure><img src="@source/tutorial/blog-series/assets/config.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/tutorial/blog-series/assets/repo-gitee.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完成上述步骤之后，主要使用如下命令，就能将我们本地的内容推送到远程 Gitee 仓库了，去手动更新 Gitee Pages 后，然后在浏览器中访问：</p>
<blockquote>
<p><a href="https://xn--eqr924avxo.gitee.io" target="_blank" rel="noopener noreferrer">https://用户名.gitee.io<ExternalLinkIcon/></a></p>
</blockquote>
<figure><img src="@source/tutorial/blog-series/assets/gitee-home.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="如何写新博客并推送到远程" tabindex="-1"><a class="header-anchor" href="#如何写新博客并推送到远程" aria-hidden="true">#</a> 如何写新博客并推送到远程</h2>
<p>通过上面的步骤后，你的博客应该就已经搭建成功，而且能通过 <code v-pre>https://用户名.github.io</code> 的方式进行访问了。接下来如果我们要发一篇新的博客内容，又应该怎么办呢？接下来就详细讲一下如何操作。</p>
<ol>
<li>首先进入博客所在文件夹，然后右键进入控制台，用如下命令进行创建新的文章；</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>hexo n <span class="token string">"博客标题名"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/tutorial/blog-series/assets/new-blog.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>接着在 <code v-pre>blog/source/_posts</code> 目录下应该就会有创建好的以文章标题名命名的 Markdown 文件；</li>
</ol>
<figure><img src="@source/tutorial/blog-series/assets/article.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>接着打开该文件，编写你自己想要的内容即可；</li>
</ol>
<figure><img src="@source/tutorial/blog-series/assets/arti-context.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>接着在控制台使用如下命令，将其推送到远程 GitHub 仓库，等过一会儿之后，访问即可看到刚才推送的新文章了！</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>hexo g
hexo d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/tutorial/blog-series/assets/arti-demo.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="如何绑定自定义域名" tabindex="-1"><a class="header-anchor" href="#如何绑定自定义域名" aria-hidden="true">#</a> 如何绑定自定义域名</h2>
<p>通过 <code v-pre>用户名.github.io</code> 的方式来访问总归是有些不方便，如果我们需要自己的个性域名，又应该如何设置呢？那么在此之前，你需要有一个已经备案好的域名，如果没有的话，请到阿里云、腾讯云等场商购买自己的域名，然后通过该平台备案，然后添加两条解析记录，以我的腾讯云为例：</p>
<figure><img src="@source/tutorial/blog-series/assets/doman-setting.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>备好案并设置解析之后，在 Github 的博客项目中，依次点击 <code v-pre>Settings-&gt;Pages</code>，然后在 <code v-pre>Custom domain</code> 添加你的域名即可，最后 <code v-pre>Save</code> 即可，此时你的博客根目录下应该会多一个 <code v-pre>CNAME</code> 的文件，然后你就可以通过自己的域名来访问你的博客了。</p>
<p>当然，有时候可能经过上面的设置后，博客根目录下不会出现名为 <code v-pre>CNAME</code> 的文件，如果没有，我们可以通过在本地博客 <code v-pre>/source</code> 目录下手动建立一个 <code v-pre>CNAME</code> 文件（无后缀），然后把你的域名填进去并保存，最后依次执行如下命令将设置上传到 Github 即可 ~</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>hexo g
hexo d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/tutorial/blog-series/assets/page-setting.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>比如我的域名为 <code v-pre>cunyu1943.site</code>，通过设置之后，我们就可以通过 <a href="https://cunyu1943.site" target="_blank" rel="noopener noreferrer">https://cunyu1943.site<ExternalLinkIcon/></a> 来访问我的博客了。</p>
<figure><img src="@source/tutorial/blog-series/assets/blog-domain-home.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="美化" tabindex="-1"><a class="header-anchor" href="#美化" aria-hidden="true">#</a> 美化</h2>
<p>经过上面的设置之后，我们只是得到了一个简单地博客，如果你也想让你的博客像我的一样酷（zhuang）炫（bi），就要用到主题了，我采用的主题是 <a href="https://github.com/blinkfox/hexo-theme-matery" title="hexo-theme-matery" target="_blank" rel="noopener noreferrer">hexo-theme-matery<ExternalLinkIcon/></a>，一个基于材料设计和响应式设计而成的主题，而且关于如何设置它也有十分详细的文档，如果存在不懂得问题，还可以及时提交 issue，作者回复也十分及时。</p>
<p>如果你不想过于折腾，那么你完成上面的步骤之后，也可以直接采用我的博客源代码，然后把里边的个人配置改一下就 ok 了，我的博客源码地址：<a href="https://github.com/cunyu1943/hexo-theme-matery-personal" title="cunyu1943/hexo-theme-matery-personal" target="_blank" rel="noopener noreferrer">hexo-theme-matery-personal<ExternalLinkIcon/></a></p>
<p>大家直接下载下来，然后把 <code v-pre>node_modules.zip</code> 进行解压，然后修改其中的部分配置（也就是你的 Github、网名啥的呀个人信息），主要是修改根目录下的 <code v-pre>_config.yml</code> 和 <code v-pre>_config.hexo-theme-matery.yml</code>，然后就可以直接写博客了。当然，前提是你把环境啥的都搭建好了。</p>
<p>PS：我对于配置文件中的某些关键信息进行了隐藏，比如 <code v-pre>gitalk</code>、<code v-pre>gitment</code>、<code v-pre>Valine</code>、<code v-pre>baiduAnalytics</code> 等，这些需要你自己去注册并获取自己的信息，请记得修改，否则可能导致失败。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>至此，我们的博客就搭建完成了，是不是很简单，赶紧去试试吧！</p>
<p>对于文中不清楚的地方，欢迎留言，我会在看到的第一时间回复你！</p>
</div></template>


