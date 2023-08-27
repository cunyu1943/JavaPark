<template><div><div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>原文：<a href="https://mp.weixin.qq.com/s/Mhc7tygE6Fl5_3h8mz7A9g" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/Mhc7tygE6Fl5_3h8mz7A9g<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>在开发大型项目时，通常都是由团队来进行开发。此时，每个人有每个人的代码编写风格和提交习惯，如果放任自由发挥，那么代码质量和代码提交日志就难免风格各异，导致项目代码质量难以保持统一。针对这一问题，往往公司在以项目组进行开发时，在进入正式编码前，都会制定一个标准的流程，用来规范代码提交前的流程，同时对提交日志进行规范化。从而最大程度上保持项目的代码风格统一，提高代码可读性。</p>
<p>以下就给大家介绍一下最常见的代码提交前的规范化流程，以及如何模板化我们的代码提交日志。</p>
<h2 id="代码提交前检查流程" tabindex="-1"><a class="header-anchor" href="#代码提交前检查流程" aria-hidden="true">#</a> 代码提交前检查流程</h2>
<h3 id="推荐插件" tabindex="-1"><a class="header-anchor" href="#推荐插件" aria-hidden="true">#</a> 推荐插件</h3>
<h4 id="p3c" tabindex="-1"><a class="header-anchor" href="#p3c" aria-hidden="true">#</a> p3c</h4>
<ul>
<li><strong>下载地址</strong></li>
</ul>
<blockquote>
<p><a href="https://plugins.jetbrains.com/plugin/10046-alibaba-java-coding-guidelines/versions" target="_blank" rel="noopener noreferrer">https://plugins.jetbrains.com/plugin/10046-alibaba-java-coding-guidelines/versions<ExternalLinkIcon/></a></p>
</blockquote>
<ul>
<li><strong>安装及使用</strong></li>
</ul>
<blockquote>
<p><a href="https://github.com/alibaba/p3c/wiki/IDEA%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/p3c/wiki/IDEA插件使用文档<ExternalLinkIcon/></a></p>
</blockquote>
<h4 id="sonarlint" tabindex="-1"><a class="header-anchor" href="#sonarlint" aria-hidden="true">#</a> SonarLint</h4>
<ul>
<li><strong>下载地址</strong></li>
</ul>
<blockquote>
<p><a href="https://plugins.jetbrains.com/plugin/7973-sonarlint/versions" target="_blank" rel="noopener noreferrer">https://plugins.jetbrains.com/plugin/7973-sonarlint/versions<ExternalLinkIcon/></a></p>
</blockquote>
<ul>
<li><strong>安装及使用</strong></li>
</ul>
<blockquote>
<p><a href="https://www.cnblogs.com/cocoxu1992/p/11336723.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/cocoxu1992/p/11336723.html<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="提交前的配置项" tabindex="-1"><a class="header-anchor" href="#提交前的配置项" aria-hidden="true">#</a> 提交前的配置项</h3>
<figure><img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/before-commit.png" alt="提交前的配置" tabindex="0" loading="lazy"><figcaption>提交前的配置</figcaption></figure>
<h4 id="alibaba-code-guidelines" tabindex="-1"><a class="header-anchor" href="#alibaba-code-guidelines" aria-hidden="true">#</a> Alibaba Code Guidelines</h4>
<p>安装 <code v-pre>p3c</code> 插件后，才会有该选项。在提交代码改动之前，如果勾选此选项，则会去扫描代码中不符合 <code v-pre>p3c</code> 规则中的代码，然后弹窗提示存在可疑代码，此时可以到控制台查看存疑的代码。然后只需要根据控制台中提示的去修改代码即可。</p>
<ul>
<li>代码存疑弹窗<br>
<img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/ali-code-analyze.png" alt="" loading="lazy"></li>
<li>控制台中存疑的代码提示<br>
<img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/console-ali.png" alt="" loading="lazy"></li>
</ul>
<h4 id="reformat-code" tabindex="-1"><a class="header-anchor" href="#reformat-code" aria-hidden="true">#</a> Reformat code</h4>
<p>提交前格式化代码，假设我们在代码中写了如下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们在提交前勾选了此选项，提交时 <code v-pre>IDEA</code> 就会自动对此行代码进行格式化，变成以下的格式，从而大大提高代码可读性。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="rearrange-code" tabindex="-1"><a class="header-anchor" href="#rearrange-code" aria-hidden="true">#</a> Rearrange code</h4>
<p>重新编排代码，IntelliJ IDEA 支持各种复杂的编排设置选项，当我们在 IDEA 中设置好了编码功能之后，这里就可以尝试勾选这个进行自动编排。不过一般没有去做特定的编码功能设置，因此建议不勾选。</p>
<h4 id="optimize-imports" tabindex="-1"><a class="header-anchor" href="#optimize-imports" aria-hidden="true">#</a> Optimize imports</h4>
<p>优化导包（删除无用的导包）。假如在写代码时一开始引入了 <code v-pre>Scanner</code> 包，但后续又没有用到，此时勾选此选项 <code v-pre>IDEA</code> 就会自动将引入的 <code v-pre>Scanner</code> 包删除。</p>
<ul>
<li>勾选前</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>勾选后</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="analyze-code" tabindex="-1"><a class="header-anchor" href="#analyze-code" aria-hidden="true">#</a> Analyze code</h4>
<p>勾选该选项后，<code v-pre>IDEA</code> 会用默认的配置文件去扫描我们所写代码的质量。如果扫描发现问题，则会弹出以下类似的弹窗，此时只要点击 <code v-pre>Review</code> 就可以对代码中存在问题的地方进行 <code v-pre>Review</code>，根据所给提示对代码进行修改。<br>
<img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/code-analysis.png" alt="" loading="lazy"></p>
<figure><img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/code-analysis-res.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="check-todo" tabindex="-1"><a class="header-anchor" href="#check-todo" aria-hidden="true">#</a> Check TODO</h4>
<p>检查代码中存在 <code v-pre>@todo</code> 注解的地方并给出提示。一般在代码中添加 <code v-pre>@todo</code> 表示此时代码中还有未完成的功能，此时可以提醒你去补全还未完成的功能代码。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//@todo</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们新增的代码如上，此时如果在提交点前勾选 <code v-pre>Check TODO</code> 选项，就会弹窗提示。</p>
<figure><img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/todo.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>此时点击 <code v-pre>Review</code> 就可以去查看对应分析结果，然后去找到对应 <code v-pre>todo</code> 所在的代码对它进行补充。<br>
<img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/review.png" alt="" loading="lazy"></p>
<h4 id="cleanup" tabindex="-1"><a class="header-anchor" href="#cleanup" aria-hidden="true">#</a> Cleanup</h4>
<p>清除下版本控制系统，去掉一些版本控制系统的错误信息，主要针对 SVN，Git 不适用，一般建议不勾选。</p>
<h4 id="update-copyright" tabindex="-1"><a class="header-anchor" href="#update-copyright" aria-hidden="true">#</a> Update copyright</h4>
<p>如果代码需要版权标识时，需要提前在 <code v-pre>IDEA</code> 中配置相关版权信息。配置的流程 <code v-pre>settings-&gt;Editor-&gt;copyright-&gt;copyright profiles</code>，然后添加类似于以下的版权信息：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Copyright</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token number">2002</span><span class="token operator">-</span><span class="token number">2022</span><span class="token punctuation">,</span> xxx 有限公司
项目名称<span class="token operator">:</span>$project<span class="token punctuation">.</span>name
文件名称<span class="token operator">:</span>$file<span class="token punctuation">.</span>fileName
<span class="token class-name">Date</span><span class="token operator">:</span>$today
<span class="token class-name">Author</span><span class="token operator">:</span>xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后，当提交你的代码更改时，勾选该选项可以检查更新版权，这样提交后更改的文件将有它们的版权更新。</p>
<h4 id="perform-sonarlint-analysis" tabindex="-1"><a class="header-anchor" href="#perform-sonarlint-analysis" aria-hidden="true">#</a> Perform SonarLint analysis</h4>
<p>安装 <code v-pre>SonarLint</code> 插件后才会有的选项。勾选该选项后，<code v-pre>SonarLint</code> 会对代码进行检查，发现代码中的一些 bug、漏洞、异味。然后根据控制台中的提示信息对代码进行修改后再次提交，能够一定程度上提高代码质量。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> a<span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">//@todo</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/review-sonar-res.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/sonar-res.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="提交日志模板化-git-commit-template" tabindex="-1"><a class="header-anchor" href="#提交日志模板化-git-commit-template" aria-hidden="true">#</a> 提交日志模板化（Git Commit Template）</h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3>
<p>通过使用该插件，能够规范在使用 <code v-pre>IDEA</code> 提交代码时的注释说明。通过模板化后的日志，便于快速查找，回溯之前的工作。</p>
<h3 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装" aria-hidden="true">#</a> 下载安装</h3>
<ol>
<li><strong>下载地址</strong></li>
</ol>
<blockquote>
<p><a href="https://plugins.jetbrains.com/plugin/9861-git-commit-template/versions" target="_blank" rel="noopener noreferrer">https://plugins.jetbrains.com/plugin/9861-git-commit-template/versions<ExternalLinkIcon/></a></p>
</blockquote>
<ol start="2">
<li><strong>安装</strong></li>
</ol>
<blockquote>
<p><a href="https://blog.csdn.net/m0_46636892/article/details/122116712" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_46636892/article/details/122116712<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="使用教程" tabindex="-1"><a class="header-anchor" href="#使用教程" aria-hidden="true">#</a> 使用教程</h3>
<h4 id="提交信息的模板" tabindex="-1"><a class="header-anchor" href="#提交信息的模板" aria-hidden="true">#</a> 提交信息的模板</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;type 类型>(&lt;scope 可选作用域>): &lt;subject 描述>
// 空行
&lt;body 可选的正文>
// 空行
&lt;footer 可选的脚注>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要分为三部分：</p>
<ul>
<li>Head（<code v-pre>&lt;type 类型&gt;(&lt;scope 可选作用域&gt;): &lt;subject 描述&gt;</code>）</li>
<li>Body（<code v-pre>&lt;body 可选的正文&gt;</code>）</li>
<li>Footer（<code v-pre>&lt;footer 可选的脚注&gt;</code>）</li>
</ul>
<h4 id="head-参数说明" tabindex="-1"><a class="header-anchor" href="#head-参数说明" aria-hidden="true">#</a> Head 参数说明</h4>
<ol>
<li><strong>type（必填）</strong></li>
</ol>
<table>
<thead>
<tr>
<th>类型</th>
<th style="text-align:left">英文</th>
<th>中文说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>feat</code></td>
<td style="text-align:left"><code v-pre>A new feature</code></td>
<td>新功能</td>
</tr>
<tr>
<td><code v-pre>fix</code></td>
<td style="text-align:left"><code v-pre>A bug fix</code></td>
<td><code v-pre>bug</code> 修复</td>
</tr>
<tr>
<td><code v-pre>docs</code></td>
<td style="text-align:left"><code v-pre>Documention only</code></td>
<td>文档注释</td>
</tr>
<tr>
<td><code v-pre>style</code></td>
<td style="text-align:left"><code v-pre>Changes that do not affect the meaning of the code(white-space、formatting、missing semi-colons、etc)</code></td>
<td>不影响代码运行的变动（格式化、去空格等）</td>
</tr>
<tr>
<td><code v-pre>refactor</code></td>
<td style="text-align:left"><code v-pre>A code change that neither fixes a bug nor adds a feature</code></td>
<td>重构、优化（既不增加新功能，也不是修复 <code v-pre>bug</code>）</td>
</tr>
<tr>
<td><code v-pre>perf</code></td>
<td style="text-align:left"><code v-pre>A code change that improves performance</code></td>
<td>性能优化</td>
</tr>
<tr>
<td><code v-pre>test</code></td>
<td style="text-align:left"><code v-pre>Adding missing tests or correcting existing tests</code></td>
<td>增加测试</td>
</tr>
<tr>
<td><code v-pre>build</code></td>
<td style="text-align:left"><code v-pre>Changes that affect the build system or external dependencies</code></td>
<td>影响生成构建或外部依赖项的更改</td>
</tr>
<tr>
<td><code v-pre>ci</code></td>
<td style="text-align:left"><code v-pre>Changes to our CI configuration files and scripts</code></td>
<td>对配置项配置文件和脚本的更改</td>
</tr>
<tr>
<td><code v-pre>chore</code></td>
<td style="text-align:left"><code v-pre>Other changes that don't modify src or test files</code></td>
<td>其他不影响源码和测试的改动</td>
</tr>
<tr>
<td><code v-pre>revert</code></td>
<td style="text-align:left"><code v-pre>Reverts a previous commit</code></td>
<td>回退版本</td>
</tr>
</tbody>
</table>
<ol start="2">
<li><strong>scope（可选）</strong></li>
</ol>
<p>用户说明此次提交所影响的范围，常见的有数据层、控制层、视图层等，这个需要根据自己的项目来具体定义。</p>
<ol start="3">
<li><strong>subject（必填）</strong></li>
</ol>
<p>此次提交的概括，一般建议不超过 50 字，结尾不加任何标点符号。</p>
<h4 id="body-参数说明" tabindex="-1"><a class="header-anchor" href="#body-参数说明" aria-hidden="true">#</a> Body 参数说明</h4>
<p>对此次提交的详细描述，可以分为多行，每行建议控制在 72 个字以内，以条目的形式给出，范例如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>- 修复 bug1
- 修复 bug2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="footer-参数说明" tabindex="-1"><a class="header-anchor" href="#footer-参数说明" aria-hidden="true">#</a> Footer 参数说明</h4>
<p>主要用于两种情况：</p>
<ol>
<li>不兼容的变动，对应具体使用部分图中的 <code v-pre>Breaking changes</code>.</li>
<li>关闭 <code v-pre>Issue</code>，对应具体使用部分图中的 <code v-pre>Closed issues</code>.</li>
</ol>
<h4 id="具体使用" tabindex="-1"><a class="header-anchor" href="#具体使用" aria-hidden="true">#</a> 具体使用</h4>
<ol>
<li>安装完成后，在代码提交界面会有以下图标，点击进行参数配置。</li>
</ol>
<figure><img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/para-setting.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>根据自己的需求进行相关配置。</li>
</ol>
<figure><img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/para-fill.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/fix-setting.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="3">
<li>完成配置之后，点击右下角的 <code v-pre>ok</code>，就会自动根据模板生成提交的具体信息，最后进行提交即可，一个自动生成的具体示例如下：</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token function">fix</span><span class="token punctuation">(</span>改动生效的范围<span class="token punctuation">)</span><span class="token operator">:</span> 代码改动的简述

代码改动的具体描述<span class="token number">1</span>

<span class="token constant">BREAKING</span> <span class="token constant">CHANGE</span><span class="token operator">:</span> 不兼容的变更

<span class="token class-name">Closes</span> 关闭的issue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cunyu1943.github.io/static/imgs/article/idea-tutorial/gene-res.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>可能屏幕前的你所在的项目组并没有这么多的流程和提交规范，但养成良好的编码习惯总归是好的。代码不仅仅是写给自己看的，一个高手不仅仅是能够实现复杂的功能，能把代码编写得能让人看着简洁清爽也是一种艺术。</p>
<p>好了，今天的文章到此就结束了，感谢大家赏脸阅读。对于文中如果有描述不清的地方，或者有什么建议我改进的建议，欢迎与我讨论交流。</p>
</div></template>


