<template><div><h1 id="好物周刊-8-开源镜像站" tabindex="-1"><a class="header-anchor" href="#好物周刊-8-开源镜像站" aria-hidden="true">#</a> 好物周刊#8：开源镜像站</h1>
<blockquote>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
<p>原文：<a href="https://mp.weixin.qq.com/s/4TMrFj2BR43zRIQ7H-8t2w" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/4TMrFj2BR43zRIQ7H-8t2w<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="🎈-项目" tabindex="-1"><a class="header-anchor" href="#🎈-项目" aria-hidden="true">#</a> 🎈 项目</h2>
<h3 id="chatgpt-web" tabindex="-1"><a class="header-anchor" href="#chatgpt-web" aria-hidden="true">#</a> <a href="https://github.com/Chanzhaoyu/chatgpt-web" target="_blank" rel="noopener noreferrer">ChatGPT Web<ExternalLinkIcon/></a></h3>
<p>用 <code v-pre>Express</code> 和 <code v-pre>Vue3</code> 搭建的 <code v-pre>ChatGPT</code> 演示网页，支持双模型，提供了两种非官方 <code v-pre>ChatGPT API</code> 方法。</p>
<ul>
<li>
<p><code v-pre>ChatGPTAPI</code> 使用 <code v-pre>gpt-3.5-turbo</code> 通过 <code v-pre>OpenAI</code> 官方 <code v-pre>API</code> 调用 <code v-pre>ChatGPT</code></p>
</li>
<li>
<p><code v-pre>ChatGPTUnofficialProxyAPI</code> 使用非官方代理服务器访问 <code v-pre>ChatGPT</code> 的后端<code v-pre>API</code>，绕过<code v-pre>Cloudflare</code>（依赖于第三方服务器，并且有速率限制）</p>
</li>
</ul>
<figure><img src="@source/2023/assets/image.vjlo51iydtc.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="chatglm-6b" tabindex="-1"><a class="header-anchor" href="#chatglm-6b" aria-hidden="true">#</a> <a href="https://github.com/THUDM/ChatGLM-6B" target="_blank" rel="noopener noreferrer">ChatGLM-6B<ExternalLinkIcon/></a></h3>
<p>一个开源的、支持中英双语的对话语言模型，基于 <a href="https://github.com/THUDM/GLM" target="_blank" rel="noopener noreferrer">General Language Model (GLM)<ExternalLinkIcon/></a> 架构，具有 62 亿参数。结合模型量化技术，用户可以在消费级的显卡上进行本地部署（<code v-pre>INT4</code> 量化级别下最低只需 6GB 显存）。 <code v-pre>ChatGLM-6B</code> 使用了和 <code v-pre>ChatGPT</code> 相似的技术，针对中文问答和对话进行了优化。经过约 1T 标识符的中英双语训练，辅以监督微调、反馈自助、人类反馈强化学习等技术的加持，62 亿参数的 <code v-pre>ChatGLM-6B</code> 已经能生成相当符合人类偏好的回答。</p>
<p>为了方便下游开发者针对自己的应用场景定制模型，同时实现了基于 <a href="https://github.com/THUDM/P-tuning-v2" target="_blank" rel="noopener noreferrer">P-Tuning v2<ExternalLinkIcon/></a> 的高效参数微调方法使用指南 ，<code v-pre>INT4</code> 量化级别下最低只需 7GB 显存即可启动微调。</p>
<figure><img src="@source/2023/assets/image.hfbwof03ij4.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="chatgpt-on-wechat" tabindex="-1"><a class="header-anchor" href="#chatgpt-on-wechat" aria-hidden="true">#</a> <a href="https://github.com/zhayujie/chatgpt-on-wechat" target="_blank" rel="noopener noreferrer">chatgpt-on-wechat<ExternalLinkIcon/></a></h3>
<p>使用 <code v-pre>ChatGPT</code> 搭建微信聊天机器人，基于 <code v-pre>GPT3.5/4.0</code> <code v-pre>API</code> 实现，支持个人微信、公众号、企业微信部署，能处理文本、语音和图片，访问操作系统和互联网。目前，最新版本支持如下功能：</p>
<ul>
<li><strong>多端部署：</strong> 有多种部署方式可选择且功能完备，目前已支持个人微信，微信公众号和企业微信应用等部署方式</li>
<li><strong>基础对话：</strong> 私聊及群聊的消息智能回复，支持多轮会话上下文记忆，支持 <code v-pre>GPT-3</code>，<code v-pre>GPT-3.5</code>，<code v-pre>GPT-4</code> 模型</li>
<li><strong>语音识别：</strong> 可识别语音消息，通过文字或语音回复，支持 <code v-pre>azure</code>, <code v-pre>baidu</code>, <code v-pre>google</code>, <code v-pre>openai</code> 等多种语音模型</li>
<li><strong>图片生成：</strong> 支持图片生成 和 图生图（如照片修复），可选择 <code v-pre>Dell-E</code>, <code v-pre>stable diffusion</code>, <code v-pre>replicate</code> 模型</li>
<li><strong>丰富插件：</strong> 支持个性化插件扩展，已实现多角色切换、文字冒险、敏感词过滤、聊天记录总结等插件</li>
<li><strong>Tool工具：</strong> 与操作系统和互联网交互，支持最新信息搜索、数学计算、天气和资讯查询、网页总结，基于 <code v-pre>chatgpt-tool-hub</code> 实现</li>
</ul>
<figure><img src="@source/2023/assets/image.gk0owl1ko88.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="💻-软件" tabindex="-1"><a class="header-anchor" href="#💻-软件" aria-hidden="true">#</a> 💻 软件</h2>
<h3 id="everything" tabindex="-1"><a class="header-anchor" href="#everything" aria-hidden="true">#</a> <a href="https://www.voidtools.com/zh-cn/" target="_blank" rel="noopener noreferrer">Everything<ExternalLinkIcon/></a></h3>
<p>本地文件搜索神器，本地文件名搜索软件战力天花板，不过当前仅支持 <code v-pre>Windows</code> 平台，具有如下特点：</p>
<ul>
<li>轻量安装文件</li>
<li>干净简洁的用户界面</li>
<li>快速文件索引</li>
<li>快速搜索</li>
<li>最小资源使用</li>
<li>便于文件分享</li>
<li>实时更新</li>
</ul>
<figure><img src="@source/2023/assets/JavaPark-image.366htex06yw0.webp" alt="JavaPark-image" tabindex="0" loading="lazy"><figcaption>JavaPark-image</figcaption></figure>
<h3 id="listary" tabindex="-1"><a class="header-anchor" href="#listary" aria-hidden="true">#</a> <a href="https://www.listary.com/" target="_blank" rel="noopener noreferrer">Listary<ExternalLinkIcon/></a></h3>
<p><code v-pre>Listary</code> 是一款实用的搜索工具，专注于文件搜索管理 &amp; 快速启动程序。它能给“我的电脑”（资源管理器）加上许多智能命令，含有收藏文件夹，快速打开最近浏览的文件夹，快速显示/隐藏文件扩展名等等实用功能。给你日常的收藏和整理文件提高效率。</p>
<figure><img src="@source/2023/assets/image.5e1cjl8qd6o0.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="sumatra-pdf" tabindex="-1"><a class="header-anchor" href="#sumatra-pdf" aria-hidden="true">#</a> <a href="https://www.sumatrapdfreader.org/free-pdf-reader" target="_blank" rel="noopener noreferrer">Sumatra PDF<ExternalLinkIcon/></a></h3>
<p>一款开源、免费、体积小巧、启动极为迅速的 <code v-pre>Windows</code> 平台上经典的电子书阅读器软件。它不仅支持阅读 <code v-pre>PDF</code> 格式文档，同时还能支持 <code v-pre>ePub</code>、<code v-pre>Mobi</code>、<code v-pre>CHM</code>、<code v-pre>XPS</code>、<code v-pre>DjVu</code> 文档，<code v-pre>CBZ</code>、<code v-pre>CBR</code> 漫画等众多主流电子书格式。</p>
<figure><img src="@source/2023/assets/image.6zgaz1xgh2k0.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="🕸️-网站" tabindex="-1"><a class="header-anchor" href="#🕸️-网站" aria-hidden="true">#</a> 🕸️ 网站</h2>
<h3 id="华为开源镜像站" tabindex="-1"><a class="header-anchor" href="#华为开源镜像站" aria-hidden="true">#</a> <a href="https://mirrors.huaweicloud.com/home" target="_blank" rel="noopener noreferrer">华为开源镜像站<ExternalLinkIcon/></a></h3>
<p>华为云 <code v-pre>DevCloud</code> 团队提供的全类型镜像站服务，提供主流开发语言组件、操作系统、常用工具和库等镜像，极速下载，全站 <code v-pre>CDN</code>。</p>
<figure><img src="@source/2023/assets/JavaPark-image.5mf528ww6ss0.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="阿里巴巴开源镜像站" tabindex="-1"><a class="header-anchor" href="#阿里巴巴开源镜像站" aria-hidden="true">#</a> <a href="https://developer.aliyun.com/mirror/" target="_blank" rel="noopener noreferrer">阿里巴巴开源镜像站<ExternalLinkIcon/></a></h3>
<figure><img src="@source/2023/assets/image.43w5u996vqa0.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>阿里巴巴开源镜像站，免费提供 <code v-pre>Linux</code> 镜像下载服务，拥有 <code v-pre>Ubuntu</code>、<code v-pre>CentOS</code>、<code v-pre>Deepin</code>、<code v-pre>MongoDB</code>、<code v-pre>Apache</code>、<code v-pre>Maven</code>、<code v-pre>Composer</code> 等多种开源软件镜像源。</p>
<h3 id="清华大学开源软件镜像站" tabindex="-1"><a class="header-anchor" href="#清华大学开源软件镜像站" aria-hidden="true">#</a> <a href="https://mirrors.tuna.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">清华大学开源软件镜像站<ExternalLinkIcon/></a></h3>
<figure><img src="@source/2023/assets/image.7eadg5zqpno0.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>清华大学开源软件镜像站，致力于为国内和校内用户提供高质量的开源软件镜像、<code v-pre>Linux</code> 镜像源服务，帮助用户更方便地获取开源软件。</p>
<h2 id="🔌-插件" tabindex="-1"><a class="header-anchor" href="#🔌-插件" aria-hidden="true">#</a> 🔌 插件</h2>
<h3 id="腾讯翻译" tabindex="-1"><a class="header-anchor" href="#腾讯翻译" aria-hidden="true">#</a> <a href="https://microsoftedge.microsoft.com/addons/detail/%E8%85%BE%E8%AE%AF%E7%BF%BB%E8%AF%91/bcgpmkngbhpgdgbjgbaoddljkbabdkmm?hl=zh-CN" target="_blank" rel="noopener noreferrer">腾讯翻译<ExternalLinkIcon/></a></h3>
<p>腾讯发布的一款浏览器扩展，支持划词翻译、网页翻译、双语对照等功能。</p>
<figure><img src="@source/2023/assets/image.52qhtrbgb4g0.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="智译" tabindex="-1"><a class="header-anchor" href="#智译" aria-hidden="true">#</a> <a href="https://microsoftedge.microsoft.com/addons/detail/%E6%99%BA%E8%AF%91%E7%BD%91%E9%A1%B5%E7%BF%BB%E8%AF%91%E6%8F%92%E4%BB%B6/eejfecdbpopckihnmmcncghifajgcegh" target="_blank" rel="noopener noreferrer">智译<ExternalLinkIcon/></a></h3>
<p>一款网页翻译插件，支持 <code v-pre>17</code> 种主流外语/少数民族语言，自动识别网页语言并翻译，带你享受前所未有的实时高效翻译体验！<br>
浏览网页时，它可以自动检测页面的语言，并快速地翻译为您设置的目标语言，让您在浏览外文网站时，不再不知所云。</p>
<p>智译支持十几种语言与中文的互译，既包括英语、俄语、德语、法语、西班牙语等欧美语言，也支持粤语、日语、韩语、越南语、阿拉伯语等亚洲语言；最最绝的，它还支持维语、藏语、蒙古语、壮语等少数民族语言。</p>
<p>通过使用该插件，无论是查阅资料、浏览新闻，还是网上购物，相信一定会帮你节省大量时间，提升效率。</p>
<figure><img src="@source/2023/assets/image.3krstalf07i0.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="可可翻译" tabindex="-1"><a class="header-anchor" href="#可可翻译" aria-hidden="true">#</a> <a href="https://microsoftedge.microsoft.com/addons/detail/%E5%8F%AF%E5%8F%AF%E7%BF%BB%E8%AF%91/ebkimaahhkeiplegpghijhgmlcdkeppf" target="_blank" rel="noopener noreferrer">可可翻译<ExternalLinkIcon/></a></h3>
<p>一款多合一的翻译扩展，支持多个翻译源翻译所选择的文本，可以同时展示原文与译文的网页翻译，具有以下特性：</p>
<ul>
<li>多翻译源同时翻译</li>
<li>丰富的快捷键</li>
<li>记录单个网页内的翻译历史</li>
<li>独立翻译窗口</li>
<li>自定义主题</li>
<li>文本预处理</li>
<li>翻译收藏</li>
<li>网页翻译</li>
</ul>
<figure><img src="@source/2023/assets/image.1hj203a2ojuo.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="📖-资料" tabindex="-1"><a class="header-anchor" href="#📖-资料" aria-hidden="true">#</a> 📖 资料</h2>
<h3 id="ailearning" tabindex="-1"><a class="header-anchor" href="#ailearning" aria-hidden="true">#</a> <a href="https://github.com/apachecn/ailearning" target="_blank" rel="noopener noreferrer">AiLearning<ExternalLinkIcon/></a></h3>
<p>数据分析 + 机器学习实战 + 线性代数 + <code v-pre>PyTorch</code> + <code v-pre>NLTK</code> + <code v-pre>TF2</code> 学习指南。</p>
<figure><img src="@source/2023/assets/image.3csdtlpltoo0.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="spring-实战-第-5-版" tabindex="-1"><a class="header-anchor" href="#spring-实战-第-5-版" aria-hidden="true">#</a> <a href="https://potoyang.gitbook.io/spring-in-action-v5/" target="_blank" rel="noopener noreferrer">Spring 实战（第 5 版）<ExternalLinkIcon/></a></h3>
<figure><img src="@source/2023/assets/image.2eank3ifa874.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="docker-从入门到实践" tabindex="-1"><a class="header-anchor" href="#docker-从入门到实践" aria-hidden="true">#</a> <a href="https://vuepress.mirror.docker-practice.com/" target="_blank" rel="noopener noreferrer">Docker 从入门到实践<ExternalLinkIcon/></a></h3>
<p>本书既适用于具备基础 <code v-pre>Linux</code> 知识的 <code v-pre>Docker</code> 初学者，也可供理解原理和实现的高级用户参考。同时，书中给出的实践案例，可供在进行实际部署时借鉴，大致内容如下：</p>
<ul>
<li>前 6 章为基础内容，供用户理解 <code v-pre>Docker</code> 的基本概念和操作；</li>
<li>7 ~ 9 章介绍包括数据管理、网络等高级操作；</li>
<li>10 ~ 12 章介绍了容器生态中的几个核心项目；</li>
<li>13、14 章讨论了关于 <code v-pre>Docker</code> 安全和实现技术等高级话题。</li>
<li>后续章节则分别介绍包括 <code v-pre>Etcd</code>、<code v-pre>Fedora</code> <code v-pre>CoreOS</code>、<code v-pre>Kubernetes</code>、容器云等相关热门开源项目。最后，还展示了使用容器技术的典型的应用场景和实践案例。</li>
</ul>
<figure><img src="@source/2023/assets/image.54160lg12k00.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="✍️-说明" tabindex="-1"><a class="header-anchor" href="#✍️-说明" aria-hidden="true">#</a> ✍️ 说明</h2>
<p>周刊专栏相关信息：</p>
<ul>
<li><strong>项目地址</strong>：<a href="https://github.com/cunyu1943/weekly/" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a> | <a href="https://gitee.com/cunyu1943/weekly/" target="_blank" rel="noopener noreferrer">Gitee<ExternalLinkIcon/></a> ，觉得不错麻烦给我一个<strong>Star</strong>，感谢 ❤️</li>
<li><strong>浏览地址</strong>：公众号 | <a href="https://cunyu1943.github.io/weekly" target="_blank" rel="noopener noreferrer">电子书<ExternalLinkIcon/></a></li>
</ul>
<p>如果你阅读到这里，说明我的工作没有白费。如果你想推荐项目/网站/软件/资源，欢迎提交 <strong><a href="https://github.com/cunyu1943/weekly/issues" target="_blank" rel="noopener noreferrer">issue<ExternalLinkIcon/></a></strong> 或者添加我 <strong>个人微信：cunyu1943</strong> 与我交流。</p>
<hr>
<h2 id="🎬️-广告" tabindex="-1"><a class="header-anchor" href="#🎬️-广告" aria-hidden="true">#</a> 🎬️ 广告</h2>
<p>作为程序员，掌握数据结构与算法的重要性就不言而喻了。掌握了数据结构与算法，可以说你的编程能力就会有质的飞跃。任凭各种热门技术的如何变化，只要掌握了核心技能，那都可以见招拆招，做一个“赢家”。</p>
<p>专栏共分为 4 个由浅入深的模块：</p>
<ul>
<li>入门篇</li>
<li>基础篇</li>
<li>高级篇</li>
<li>实战篇</li>
</ul>
<p>作者采用最适合工程师的学习方式，不拘泥于某一特定编程语言，从实际开发场景出发，由浅入深教你学习数据结构与算法的方法，帮你搞懂基本概念和核心理论，深入理解算法精髓，帮你提升使用数据结构和算法思维解决问题的能力。</p>
<p>想要进一步提升自己的竞争力么，那就赶紧加入和我一起学习吧！</p>
<figure><img src="@source/2023/assets/datastructure-algo.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


