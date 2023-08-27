<template><div><h1 id="最新版-intellij-idea-使用手册" tabindex="-1"><a class="header-anchor" href="#最新版-intellij-idea-使用手册" aria-hidden="true">#</a> 最新版 IntelliJ IDEA 使用手册</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>因为自己电脑最近实在是太卡了，也一直提示更新，索性就直接重装了个系统。因为需要重装下 IDEA，而现在新版本的 IDEA 和之前的版本还是有很大变化的，所以在这里写一篇博客做个记录，方便自己后续配置，也顺便分享给大家。</p>
<h2 id="idea-的优势" tabindex="-1"><a class="header-anchor" href="#idea-的优势" aria-hidden="true">#</a> IDEA 的优势</h2>
<p>为什么要使用 <code v-pre>IDEA</code> 呢？当然是因为它的强大。总结起来，<code v-pre>IDEA</code> 具有以下的主要优势：</p>
<ol>
<li><strong>功能强大</strong></li>
</ol>
<p>一方面体现在强大的整合能力，<code v-pre>IDEA</code>支持集成各种开发过程中的编程框架，最常见的有<code v-pre>git</code>、<code v-pre>JVM</code>系编程语言、<code v-pre>Spring</code> 系产品、移动开发语言框架、前端开发语言。而另一方面，通过集成版本控制系统、对多种编程语言框架的支持，同时无需额外安装插件，带给我们开箱即用的体验。</p>
<ol start="2">
<li><strong>符合人体工程学</strong></li>
</ol>
<p><code v-pre>IDEA</code> 的提示功能十分智能，提供了快速地智能代码补全、实时代码分析以及可靠的重构工具。此外 <code v-pre>IDAE</code> 的提示功能十分快速、便捷，而且提示范围也十分广泛。</p>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2>
<p>既然要安装 <code v-pre>IDEA</code>，那么首先需要前往 <code v-pre>JetBrains</code> 的官网下载最新版的 <code v-pre>IDEA</code>，下载地址如下：</p>
<p><a href="https://www.jetbrains.com/idea/download/" target="_blank" rel="noopener noreferrer">https://www.jetbrains.com/idea/download/<ExternalLinkIcon/></a></p>
<figure><img src="@source/tutorial/idea-series/assets/offcial-website.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>因为我有旗舰版的账号，所以这里就以旗舰版安装为例，其实社区版的安装也是一样的，只不过里边集成的东西有所不同。所以如果你安装的是社区版，参照此教程也是完全可以的！</p>
<figure><img src="@source/tutorial/idea-series/assets/download.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>好了，完成下载后，我们就可以开始我们的安装过程了！</p>
<ol>
<li>双击我们的安装包之后，来到 <code v-pre>IDEA</code> 的欢迎界面，我们此时只需要 <code v-pre>Next</code> 即可。</li>
</ol>
<figure><img src="@source/tutorial/idea-series/assets/welcome.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>接着就是选择我们要安装 <code v-pre>IDEA</code> 的位置，它默认的安装位置是 <code v-pre>C:\Program Files\JetBrains\IntelliJ IDEA 2021.1.2</code>，这里就是看大家自己的喜好了，你喜欢安在哪儿都可以，但是需要满足它所需要的内存。更加推荐大家安装到自己的非系统盘位置，比如我的安装位置是 <code v-pre>D:\SoftInstall\IntelliJ IDEA</code>。</li>
</ol>
<figure><img src="@source/tutorial/idea-series/assets/path-set.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>选择安装的配置，这里主要选择创建 32 还是 64 位的桌面快捷方式、是否要将其加入到系统 <code v-pre>PATH</code> 环境变量、是否关联相关后缀文件等等。可以根据自己的使用习惯来进行选择，以我个人来说，因为不喜欢弄一些桌面快捷方式以及关联相关后缀文件等操作，所以我默认全都不勾选，直接 <code v-pre>Next</code>。</li>
</ol>
<figure><img src="@source/tutorial/idea-series/assets/install-options.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>选择开始菜单中给 IDEA 的文件夹名，这里默认即可，直接点击 <code v-pre>Install</code>，然后就是漫长的等待安装过程了！</li>
</ol>
<figure><img src="@source/tutorial/idea-series/assets/start-menu.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/tutorial/idea-series/assets/installing.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>大功告成！显示此界面就说明我们的 <code v-pre>IDEA</code> 已经安装好了，直接点击 <code v-pre>Finish</code> 即可！</li>
</ol>
<figure><img src="@source/tutorial/idea-series/assets/finish.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>安装好之后，为了让我们的 IDEA 使用起来更顺手，推荐做一些个性化的配置，提高我们的工作效率。</p>
<h3 id="激活" tabindex="-1"><a class="header-anchor" href="#激活" aria-hidden="true">#</a> 激活</h3>
<p>首次打开旗舰版 <code v-pre>IDEA</code> 时，会让你激活，这里有 3 种选择：</p>
<ul>
<li>
<p>利用你的 <code v-pre>JetBrains</code> 账号登录激活；</p>
</li>
<li>
<p>利用你的 <code v-pre>IDEA</code> 激活码激活；</p>
</li>
<li>
<p>最后则是许可证服务器地址激活；</p>
</li>
</ul>
<p>当然你也可以选择 <code v-pre>Evaluate for free</code>，它是有 30 天的试用期的，你只需要在这 30 天之内激活即可，否则 30 天之后将会弹窗不可用。对于社区版，应该没有激活这一说法，因为它是免费的，我们直接打开用就可以了。</p>
<figure><img src="@source/tutorial/idea-series/assets/license.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="编码设置" tabindex="-1"><a class="header-anchor" href="#编码设置" aria-hidden="true">#</a> 编码设置</h3>
<p>一般 IDEA 的编码是和系统保持一致的，而为了通用，减少不必要的编码问题，所以一般统一设置为 UTF-8，设置入口如下，依次打开 <code v-pre>Settings -&gt; Editor -&gt; File Encodings</code>，然后将 <code v-pre>Global Encoding</code>、<code v-pre>Project Encoding</code>、<code v-pre>Default encoding for properties files</code> 均设置为 UTF-8。</p>
<figure><img src="@source/tutorial/idea-series/assets/encode-setting.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="外观设置" tabindex="-1"><a class="header-anchor" href="#外观设置" aria-hidden="true">#</a> 外观设置</h3>
<h4 id="整体-ui" tabindex="-1"><a class="header-anchor" href="#整体-ui" aria-hidden="true">#</a> 整体 UI</h4>
<p>安装并激活之后，进入 IDEA 的主界面，新版本的主界面如下图所示：</p>
<figure><img src="@source/tutorial/idea-series/assets/ui.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击 <code v-pre>Customize</code>，可以看到右侧我们可以设置主题和字体。其中主题有如下 4 种选择：</p>
<ol>
<li>
<p>IntelliJ Light</p>
</li>
<li>
<p>Windows 10 Light</p>
</li>
<li>
<p>Darcula</p>
</li>
<li>
<p>High contrast</p>
</li>
</ol>
<p>这里可以根据自己的喜好进行主题选择，也可以勾选右方的 <code v-pre>Sync with OS</code> 选项，这样 IDEA 就会根据你系统的明亮还是黑暗主题进行自动切换了。</p>
<p>而字体大小设置这边，我个人更喜欢稍微大一点（主要是小的看久了眼睛疼 😂），所以设置的是 16 号字体。</p>
<figure><img src="@source/tutorial/idea-series/assets/theme.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>而关于更多设置，可以点击下方的 <code v-pre>All settings…</code>，进入更详细的设置。比如这里 IDEA 默认界面字体是微软雅黑，我们要改成自己喜欢的字体就可以在这里进行更改，这里推荐 JetBrains 自家推出的 <code v-pre>JetBrains Mono</code> 字体。</p>
<p>设置入口，依次进入 <code v-pre>Settings -&gt; Appearance &amp; Behavior -&gt; Appearance</code>，然后在右边设置主题，字体以及字体大小即可。</p>
<figure><img src="@source/tutorial/idea-series/assets/appearance.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="编辑区" tabindex="-1"><a class="header-anchor" href="#编辑区" aria-hidden="true">#</a> 编辑区</h4>
<p>上述设置只是针对于 IDEA 整体界面风格的设置，而如果我们要对我们的代码编辑区进行设置，那么就需要进入：<code v-pre>Settings -&gt; Editor -&gt; Font</code>，然后设置字体和大小。这里依然推荐使用 <code v-pre>JetBrains Mono</code> 字体，字号 16。</p>
<figure><img src="@source/tutorial/idea-series/assets/font.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>除开上面设置编辑区字体大小的方法外，我们还可以按住 <code v-pre>Ctrl</code>，然后通过鼠标滚轮来实现字体大小的调整，但是前提是你要先打开相关设置。设置入口如下，依次进入 <code v-pre>Settings -&gt; Editor -&gt; General</code>，然后勾选 <code v-pre>Change font size with Ctrl+Mouse Wheel</code> 即可。</p>
<figure><img src="@source/tutorial/idea-series/assets/mouse-wheel.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="控制台" tabindex="-1"><a class="header-anchor" href="#控制台" aria-hidden="true">#</a> 控制台</h4>
<p>一般情况下无需调整，它会沿用编辑器一样的配置，但如果你需要自定义，可以去如下入口：<code v-pre>Settings -&gt; Editor -&gt; Color Scheme -&gt; Console Font</code>，然后勾选如下 <code v-pre>Use color scheme font instead of the default</code> 选项并进行设置即可。</p>
<figure><img src="@source/tutorial/idea-series/assets/console.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="扁平化显示及空包隐藏" tabindex="-1"><a class="header-anchor" href="#扁平化显示及空包隐藏" aria-hidden="true">#</a> 扁平化显示及空包隐藏</h3>
<p>有时候，我们项目的包结构会变成如下样式，有时会造成一定的不便，此时是因为开启了 <code v-pre>Flatten Packages</code> 所导致。</p>
<figure><img src="@source/tutorial/idea-series/assets/flatten-pkg-on.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果我们关闭此功能，则项目包结构如下所示：</p>
<figure><img src="@source/tutorial/idea-series/assets/flatten-pkg-off.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>其中 <code v-pre>Compact Middle Packages</code> 表示是否隐藏空包。</p>
<h3 id="打开文件多行显示" tabindex="-1"><a class="header-anchor" href="#打开文件多行显示" aria-hidden="true">#</a> 打开文件多行显示</h3>
<p>平常使用 IDEA 时，你可能没有注意到，一旦我们打开过多的文件时，默认会堆积在一行显示，就像浏览器打开了多个标签一样，此时需要通过右侧箭头筛选的方式来选择其他文件。为了解决这一问题，让我们打开的所有文件能以多行显示的方式方便查看。</p>
<p>设置入口：依次打开 <code v-pre>Settings -&gt; Editor -&gt; General -&gt; Editor Tabs</code>，然后将 <code v-pre>Show tabs in</code> 勾选为 <code v-pre>Multiples rows</code>。</p>
<figure><img src="@source/tutorial/idea-series/assets/mul-row.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="行号和方法分隔符" tabindex="-1"><a class="header-anchor" href="#行号和方法分隔符" aria-hidden="true">#</a> 行号和方法分隔符</h3>
<p>日常为了方便定位 Bug 所在位置，我们通常需要打开代码所对应的行号，方便我们查找。另外，如果我们代码中方法较多时，最好是在每个方法之间加一个分隔符，方便我们知道一个方法的开始和结束。而这两个功能，IDEA 都是提供的。设置入口：依次打开 <code v-pre>Settings -&gt; Editor -&gt; General -&gt; Appearance</code>，然后勾选 <code v-pre>Show line numbers</code> 和 <code v-pre>Show method separators</code>。</p>
<figure><img src="@source/tutorial/idea-series/assets/line-num.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="自动导包" tabindex="-1"><a class="header-anchor" href="#自动导包" aria-hidden="true">#</a> 自动导包</h3>
<p>日常工作中，我们会经常用到第三方的包，每次都需要我们通过手动（<code v-pre>Alt + Enter</code>） 的方式来导入，但实际上 IDEA 也是提供自动导包功能的，设置入口如下：<code v-pre>Settings -&gt; Editor -&gt; General -&gt; Auto Import</code>，将 <code v-pre>Insert imports on paste</code> 设置为 <code v-pre>Always</code>，再勾选 <code v-pre>Add unambiguous imports on the fly</code> 以及 <code v-pre>Optimize imports on the fly</code> 即可。</p>
<figure><img src="@source/tutorial/idea-series/assets/auto-import.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="忽略大小写" tabindex="-1"><a class="header-anchor" href="#忽略大小写" aria-hidden="true">#</a> 忽略大小写</h3>
<p>通常 IDEA 在导入类时大小写是全匹配的，这样一样就极大影响了我们编码的速度。此时我们就可以通过设置 IDEA，让其忽略大小写字母，提高效率。设置入口如下，依次进入 <code v-pre>Settings -&gt; Editor -&gt; General -&gt; Code Completion</code>，取消勾选 <code v-pre>Match case</code>。</p>
<figure><img src="@source/tutorial/idea-series/assets/match-case.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="自动编译" tabindex="-1"><a class="header-anchor" href="#自动编译" aria-hidden="true">#</a> 自动编译</h3>
<p>IDEA 默认是不会对代码自动编译的，需要我们手动配置。设置入口：依次打开 <code v-pre>Settings -&gt; Build,Execution,Deployment -&gt; Compiler</code>，然后勾选 <code v-pre>Build project automatically</code> 和 <code v-pre>Compole independent modules in parallel</code>。</p>
<figure><img src="@source/tutorial/idea-series/assets/build-auto.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="编译器设置" tabindex="-1"><a class="header-anchor" href="#编译器设置" aria-hidden="true">#</a> 编译器设置</h3>
<p>这里推荐使用 <code v-pre>Javac</code> 编译器，然后编译器版本最好保持和你本地使用的 JDK 版本相同。因为我本地使用的是 JDK11，所以这里版本我设置的是 11，这里最好根据你自己的实际情况进行设置。设置入口：依次打开 <code v-pre>Settings -&gt; Build,Execution,Deployment -&gt; Compiler -&gt; Java Compiler</code>，然后将 <code v-pre>Use compiler</code> 设置为 <code v-pre>Javac</code>，并将 <code v-pre>Project bytecode version</code> 设置为你本地使用的 JDK 的版本。</p>
<figure><img src="@source/tutorial/idea-series/assets/compiler.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="maven-设置" tabindex="-1"><a class="header-anchor" href="#maven-设置" aria-hidden="true">#</a> Maven 设置</h3>
<p>默认情况下，IDEA 是由绑定的 Maven 的，但是我们一般是自己设置自己所使用的 Maven。需要设置的主要有三点：</p>
<ol>
<li>
<p><strong>Maven home path</strong>：即自己本地的 Maven 所在目录；</p>
</li>
<li>
<p><strong>User settings file</strong>：即自己本地 Maven 环境下的 <code v-pre>settings.xml</code> 所在目录；</p>
</li>
<li>
<p><strong>Local repository</strong>：即自己本地的 Maven 仓库；</p>
</li>
</ol>
<p>设置入口：依次打开 <code v-pre>Settings -&gt; Build,Execution,Deployment -&gt; Build Tools -&gt; Maven</code>，然后设置以上三点即可。</p>
<figure><img src="@source/tutorial/idea-series/assets/maven-setting.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="类模板" tabindex="-1"><a class="header-anchor" href="#类模板" aria-hidden="true">#</a> 类模板</h3>
<p>当我们创建一个类时，希望每个类的前边都已经一些注释的代码，用于标识这是我们自己所写的代码。此时就需要到 <code v-pre>Settings -&gt; Editor -&gt; File and Code Templates</code>，然后在右边的 <code v-pre>Includes -&gt; File Header</code> 右边的方框中，填入如下模板。设置完成之后，以后我们每次创建新的类文件时，IDEA 都会在文件的开头添加如下信息。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 * @Project      : $<span class="token punctuation">{</span>PROJECT_NAME<span class="token punctuation">}</span>
 * @Package      : $<span class="token punctuation">{</span>PACKAGE_NAME<span class="token punctuation">}</span>
 * @ClassName    : $<span class="token punctuation">{</span>CLASS_NAME<span class="token punctuation">}</span>.java
 * <span class="token keyword">@createTime</span>   : $<span class="token punctuation">{</span>DATE<span class="token punctuation">}</span> $<span class="token punctuation">{</span>TIME<span class="token punctuation">}</span>
 * <span class="token keyword">@version</span>      : 1.0
 * <span class="token keyword">@author</span>       : 村雨遥
 * @Email        : 747731461@qq.com
 * @公众号        : 村雨遥
 * @Website      : https://cunyu1943.github.io/JavaPark
 * @Description  :
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/tutorial/idea-series/assets/class-temp.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="导入导出设置" tabindex="-1"><a class="header-anchor" href="#导入导出设置" aria-hidden="true">#</a> 导入导出设置</h3>
<p>经过我们一番调教，IDEA 用起来就十分顺手了。但这时候问题就来了，要是我们换个系统或者电脑使用啥的，难道我们又得重新设置一遍么？当然不是了！IDEA 是支持导入导出我们的配置的，我们只需要将我们的设置导出，然后换电脑或者重装系统使用时进行导入即可。</p>
<h4 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h4>
<p>导出入口：依次打开 <code v-pre>File -&gt; Manage IDE Settings -&gt; Export Settings…</code>。</p>
<figure><img src="@source/tutorial/idea-series/assets/export.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h4>
<p>导入入口，依次打开 <code v-pre>File -&gt; Manage IDE Settings -&gt; Import Settings…</code>。</p>
<figure><img src="@source/tutorial/idea-series/assets/import.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>好了，以上就是关于 IDEA 的安装以及安装之后的一些配置了。如果你觉得对你有用，那就点个赞再走吧！如果你还有更多关于 IDEA 的高级玩法，欢迎评论区留言，大家一起交流！</p>
</div></template>


