<template><div><h1 id="网站访问太慢-不妨试试这些-cdn" tabindex="-1"><a class="header-anchor" href="#网站访问太慢-不妨试试这些-cdn" aria-hidden="true">#</a> 网站访问太慢，不妨试试这些 CDN</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>原文：<a href="https://mp.weixin.qq.com/s/WDOc5kI0jVtsbxgWwCoJkQ" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/WDOc5kI0jVtsbxgWwCoJkQ<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>前端开发时，为了让网站的资源快速响应，提高网站的响应速度，我们通常会使用到 CDN。CDN 又叫做内容分发网络，原理是将服务内容分发到全网加速节点，让用户优先从最近的服务器节点上获取内容，从而加速网站访问速度。大多服务商，比如阿里云、腾讯云、又拍云、七牛云等的 CDN 都是按量收费的，但也有一些服务商体用了免费的 CDN 服务。今天就来看看，我从网上给大家找到的一些免费可用的 CDN！</p>
<h2 id="cdnjs-com" tabindex="-1"><a class="header-anchor" href="#cdnjs-com" aria-hidden="true">#</a> <a href="http://cdnjs.com" target="_blank" rel="noopener noreferrer">cdnjs.com<ExternalLinkIcon/></a></h2>
<figure><img src="@source/tutorial/dev-series/assets/83ebc1e6678e4f0989c8e228838597b2-20230604211027089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>官网：<a href="https://cdnjs.com/" target="_blank" rel="noopener noreferrer">https://cdnjs.com/<ExternalLinkIcon/></a></li>
</ul>
<p>作为全球最为著名的开源 CDN 库，想必每个从事前端的工作的小伙伴都对他有所了解吧。该网站使用 <code v-pre>CloudFlare</code> 分发，如果你是在国外使用，那速度没的说，嗖嗖的。不过要是在国内，那还是优先考虑下其他的吧，因为它在国内访问时实在是太慢了！</p>
<h2 id="字节跳动" tabindex="-1"><a class="header-anchor" href="#字节跳动" aria-hidden="true">#</a> 字节跳动</h2>
<figure><img src="@source/tutorial/dev-series/assets/da0eab7486904e278dfd00048d0476d0-20230604211027149.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>官网：<a href="http://cdn.bytedance.com/" target="_blank" rel="noopener noreferrer">http://cdn.bytedance.com/<ExternalLinkIcon/></a></li>
</ul>
<p>由国内字节跳动公司所出品的公共库，同步 <code v-pre>cdnjs.com</code>，但有时候可能针对部分库未及时更新到最新版本，需要注意这一点，否则在使用时可能会导致一些莫名的错误。</p>
<h2 id="jsdelivr" tabindex="-1"><a class="header-anchor" href="#jsdelivr" aria-hidden="true">#</a> jsDelivr</h2>
<figure><img src="@source/tutorial/dev-series/assets/7a6c1e4b8e7c4a2f8db15a928353a0cc-20230604211027213.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>官网：<a href="https://www.jsdelivr.com/" target="_blank" rel="noopener noreferrer">https://www.jsdelivr.com/<ExternalLinkIcon/></a></li>
</ul>
<p>jsDelivr 是一个免费开源的 CDN 解决方案，用于帮助开发者和站长。包含 JavaScript 库、jQuery 插件、CSS 框架、字体等等 Web 上常用的静态资源。想必这个 CDN 大家都不会陌生吧，没准儿在看博客的各位就一直在用着它。</p>
<p>当然，除了以上作用之外，它还可以作为我们图床的加速器，这里不用说，想必许多作者可能都搭配着 Github + jsDelivr 搭建了自己的图床吧。</p>
<h2 id="unpkg" tabindex="-1"><a class="header-anchor" href="#unpkg" aria-hidden="true">#</a> UNPKG</h2>
<figure><img src="@source/tutorial/dev-series/assets/538c9ecafd5141dfbb5bfc6985226785-20230604211027130.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>官网：<a href="https://unpkg.com/" target="_blank" rel="noopener noreferrer">https://unpkg.com/<ExternalLinkIcon/></a></li>
</ul>
<p>unpkg 是一个快速的全球内容交付网络，适用于 npm 中的所有内容。通过使用它，能够使用以下类似的 URL 就能快速轻松地从任何包加载任何文件！</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>unpkg.com/:package@:version/:file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="bootcdn" tabindex="-1"><a class="header-anchor" href="#bootcdn" aria-hidden="true">#</a> BootCDN</h2>
<figure><img src="@source/tutorial/dev-series/assets/a7293d618a104caeb8a596a0a7fea8b7-20230604211027140.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>官网：<a href="https://www.bootcdn.cn/" target="_blank" rel="noopener noreferrer">https://www.bootcdn.cn/<ExternalLinkIcon/></a></li>
</ul>
<p>BootCDN 是极兔云联合 Bootstrap 中文网共同支持并维护的前端开源项目免费 CDN 服务，致力于为 Bootstrap、jQuery、React、Vue.js 等优秀的前端开源项目提供稳定、快速的免费 CDN 加速服务。BootCDN 所收录的开源项目主要同步于 cdnjs 开源项目仓库，截止文章写作时共收录了 <strong>4256</strong> 个前端开源项目。而且自 2013 年以来已经累计为仅百万网站提供稳定可靠的免费 CDN 加速服务，可以说是相当靠谱了！</p>
<h2 id="_75-cdn" tabindex="-1"><a class="header-anchor" href="#_75-cdn" aria-hidden="true">#</a> 75 CDN</h2>
<figure><img src="@source/tutorial/dev-series/assets/8c96a38af82240a2bffd07db526d01ba-20230604211027130.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>官网：<a href="https://cdn.baomitu.com" target="_blank" rel="noopener noreferrer">https://cdn.baomitu.com<ExternalLinkIcon/></a></li>
</ul>
<p>谐音于奇舞，是由 360 前端奇舞团支持并维护的开源项目免费 CDN 服务，支持 HTTPS 和 HTTP/2，囊括了上千个前端资源库和 Google 字体库。而且是首个支持 HTTP/2 的 CDN 服务，共收录了 4275 个开源项目，均同步于 cdnjs！</p>
<h2 id="staticfile-cdn" tabindex="-1"><a class="header-anchor" href="#staticfile-cdn" aria-hidden="true">#</a> Staticfile CDN</h2>
<figure><img src="@source/tutorial/dev-series/assets/d406b53ec2af4ee09e0911b977387a3b-20230604211027205.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>官网：<a href="https://staticfile.org/" target="_blank" rel="noopener noreferrer">https://staticfile.org/<ExternalLinkIcon/></a></li>
</ul>
<p>这是一个免费、快速、开放的 CDN 服务。你可能没听过这个 CDN，不过没关系，它背后的双引擎：七牛云和掘金想必你不会陌生吧。该网站由七牛云提供 CDN 加速，由技术社区掘金支持。</p>
<p>网站的目标是提供这样一个仓库，让它尽可能全面收录优秀的开源库，并免费为之提供 CDN 加速服务，使之有更好的访问速度和稳定的环境。同时，也提供开源库源接入的入口，让所有人都能够提交开源库，包括 JavaScript、CSS、图片和 swf 等静态文件。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>以上就是今天分享的所有内容了，如果你正好在开发你的个人网站，但是又苦于响应速度太慢，不妨去试试使用这些 CDN，看看会不会加速网站响应速度呢？</p>
</div></template>


