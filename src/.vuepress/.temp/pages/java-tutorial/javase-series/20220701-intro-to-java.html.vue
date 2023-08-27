<template><div><h1 id="java-入门简介" tabindex="-1"><a class="header-anchor" href="#java-入门简介" aria-hidden="true">#</a> Java 入门简介</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/aGz8CBOK5mW8xjAlstlMQw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/aGz8CBOK5mW8xjAlstlMQw<ExternalLinkIcon/></a></p>
</div>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1. 前言</h2>
<p>既然要学习一门技术，那么就先来了解下它的历史，我们为什么要使用它，以及我们能用它来干啥。</p>
<Mermaid id="mermaid-19" code="eJxLL0osyFDwCeLySixLfL6u4cnubgVdXV07BcdoQz2Fp31tT/s3vWjueTZzfSyGEqdoIz2FJzt2Pdnd8GRnx5O9+59PWaEAUoSp1DnaWA8spfCiee/TxlkQLZjqXKJNoOqedTU8m7P+yd7JzzfvjuUCAOPtTWQ="></Mermaid><h2 id="_2-历史背景" tabindex="-1"><a class="header-anchor" href="#_2-历史背景" aria-hidden="true">#</a> 2. 历史背景</h2>
<p>1990 年代初，<code v-pre>Sun</code> 公司的詹姆斯·高斯林等人为了实现电视机、电话、闹钟等家用电器的控制和通信，开发了一套用于设置在家用电器等小型系统中的编程语言。在当时，这门语言被命名为 <code v-pre>Oka</code>。但由于市场需求不高，所以该计划被逐渐放弃。</p>
<p>随着 1990 年代互联网的发展，<code v-pre>Sun</code> 公司发现 <code v-pre>Oka</code> 语言在互联网中的应用前景广泛。于是决定对 <code v-pre>Oka</code> 进行改造，并在 1995 年 5 月以 <code v-pre>Java</code> 的名义正式发布。</p>
<p>随着互联网的迅猛发展，Java 也得以逐渐成为重要的网络编程语言，詹姆斯·高斯林也被大家公认为 <code v-pre>Java</code> 之父。</p>
<p>到了 2009 年， <code v-pre>Sun</code> 公司被 <code v-pre>Oracle</code> 公司所收购，自此 <code v-pre>Java</code> 成为 <code v-pre>Oracle</code> 公司的一大产品直至今日。</p>
<p>以下是截止到本文写作时间（2022 年 7 月 23 日）<code v-pre>Java</code> 的历史年表，累计经过了 18 次主要版本更新，目前来到了 <code v-pre>Java SE</code> 18。而 <code v-pre>Java SE</code> 19 早期预览版也已经流出，根据官方给出的发布时间表，大概会在 9 月份发布 <code v-pre>Java SE</code> 19 的 <code v-pre>GA</code> 版本。不过虽然 <code v-pre>Java</code> 已经经历了这么多版本的更新，但国内目前用的最多的应该还是 Java 1.8 版本。而出于对稳定性的考虑，企业开发更喜欢 <code v-pre>LTS</code> 版本，这也是为什么至今 <code v-pre>Java</code> 1.8 还占有如此高的市场比例。</p>
<table>
<thead>
<tr>
<th style="text-align:center">版本</th>
<th style="text-align:center">发布日期</th>
<th style="text-align:center">主要事件</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">JDK Beta</td>
<td style="text-align:center">1995</td>
<td style="text-align:center"><code v-pre>Java</code> 语言发布，用 <code v-pre>Java</code> 实现的浏览器和 <code v-pre>Java Applet</code> 被大量应用</td>
</tr>
<tr>
<td style="text-align:center">JDK 1.0</td>
<td style="text-align:center">1996 年 1 月</td>
<td style="text-align:center">奠定了 <code v-pre>JDK</code>、<code v-pre>JRE</code>、<code v-pre>JVM</code> 的体系结构</td>
</tr>
<tr>
<td style="text-align:center">JDK 1.1</td>
<td style="text-align:center">1997 年 2 月</td>
<td style="text-align:center">加入 <code v-pre>JIT</code>，提升 <code v-pre>JDK</code> 效率</td>
</tr>
<tr>
<td style="text-align:center">J2SE 1.2</td>
<td style="text-align:center">1998 年 12 月</td>
<td style="text-align:center">确立 <code v-pre>J2SE</code>、<code v-pre>J2EE</code>、<code v-pre>J2ME</code> 产品结构</td>
</tr>
<tr>
<td style="text-align:center">J2SE 1.3</td>
<td style="text-align:center">2000 年 5 月</td>
<td style="text-align:center">内置 HotSpot JVM</td>
</tr>
<tr>
<td style="text-align:center">J2SE 1.4</td>
<td style="text-align:center">2002 年 2 月</td>
<td style="text-align:center">XML 处理、断言、支持正则表达式</td>
</tr>
<tr>
<td style="text-align:center">J2SE 5.0</td>
<td style="text-align:center">2004 年 9 月</td>
<td style="text-align:center">静态导入、泛型、for-each 循环、自动拆，装箱、枚举、可变参数</td>
</tr>
<tr>
<td style="text-align:center">Java SE 6</td>
<td style="text-align:center">2006 年 12 月</td>
<td style="text-align:center">提供动态语言支持、同步垃圾回收</td>
</tr>
<tr>
<td style="text-align:center">Java SE 7</td>
<td style="text-align:center">2011 年 7 月</td>
<td style="text-align:center">字符串的 switch 语句、多异常捕抓</td>
</tr>
<tr>
<td style="text-align:center">Java SE 8 (LTS)</td>
<td style="text-align:center">2014 年 3 月</td>
<td style="text-align:center">Lambda 表达式</td>
</tr>
<tr>
<td style="text-align:center">Java SE 9</td>
<td style="text-align:center">2017 年 9 月</td>
<td style="text-align:center">轻量级 json API、垃圾收集机制更新</td>
</tr>
<tr>
<td style="text-align:center">Java SE 10</td>
<td style="text-align:center">2018 年 3 月</td>
<td style="text-align:center">局部变量类型推断，Java 后续版本快速迭代更新</td>
</tr>
<tr>
<td style="text-align:center">Java SE 11 (LTS)</td>
<td style="text-align:center">2018 年 9 月</td>
<td style="text-align:center">常用类增强，Java 11 是继 Java 8 之后的首个长期支持本版</td>
</tr>
<tr>
<td style="text-align:center">Java SE 12</td>
<td style="text-align:center">2019 年 3 月</td>
<td style="text-align:center">switch 表达式增强</td>
</tr>
<tr>
<td style="text-align:center">Java SE 13</td>
<td style="text-align:center">2019 年 9 月</td>
<td style="text-align:center">文本块支持</td>
</tr>
<tr>
<td style="text-align:center">Java SE 14</td>
<td style="text-align:center">2020 年 3 月</td>
<td style="text-align:center"><code v-pre>instanceof</code> 支持模式匹配</td>
</tr>
<tr>
<td style="text-align:center">Java SE 15</td>
<td style="text-align:center">2020 年 9 月</td>
<td style="text-align:center"><code v-pre>EdDSA</code> 数字签名算法、 密封类、隐藏类</td>
</tr>
<tr>
<td style="text-align:center">Java SE 16</td>
<td style="text-align:center">2021 年 3 月</td>
<td style="text-align:center">启用 C++ 14 语言特性、Vector API</td>
</tr>
<tr>
<td style="text-align:center"><strong>Java SE 17 (LTS)</strong></td>
<td style="text-align:center">2021 年 9 月</td>
<td style="text-align:center">恢复总是严格的浮点语义、增强型伪随机数生成器</td>
</tr>
<tr>
<td style="text-align:center">Java SE 18</td>
<td style="text-align:center">2022 年 3 月</td>
<td style="text-align:center">默认 UTF-8 编码、代码片段、简单的网络服务器</td>
</tr>
</tbody>
</table>
<h2 id="_3-为什么使用-java" tabindex="-1"><a class="header-anchor" href="#_3-为什么使用-java" aria-hidden="true">#</a> 3. 为什么使用 Java</h2>
<p>既然编程语言有那么多，那我们为什么要使用 Java 语言呢？以下就来看看 Java 被广泛使用的几个原因。</p>
<ol>
<li><strong>世界范围内流行，国内使用最为广泛的编程语言之一。</strong></li>
</ol>
<p>以下是截止 2022 年 7 月 TIOBE 统计的编程语言排行榜，可以看到 Java 处于前三的位置。而从历年编程语言所占市场份额趋势图也可以看出，Java 虽然没有一直独占鳌头，但绝大数时间都是占据领先地位。</p>
<p><img src="@source/java-tutorial/javase-series/assets/20220701-intro-to-java/language-sort.png" alt="" loading="lazy"><br>
<img src="@source/java-tutorial/javase-series/assets/20220701-intro-to-java/trending.png" alt="" loading="lazy"></p>
<ol start="2">
<li><strong>移植性高</strong></li>
</ol>
<p>由于 Java 中 JVM 的特性，所以能够做到一次编译，随处运行，其移植性也就更高。</p>
<ol start="3">
<li><strong>开发社区完善</strong></li>
</ol>
<p>社区完善也是 Java 为什么使用多的原因，各种封装 API，比起 C、C++ 语言使用起来更加方便。虽然 <code v-pre>Python</code> 的封装程度更高，但是其效率比起 <code v-pre>Java</code> 却打了折扣。毕竟封装程度和效率是成反比的，<code v-pre>Java</code> 兼具了效率高和使用方便的特点，所以更受人们青睐。</p>
<h2 id="_4-java-能做什么" tabindex="-1"><a class="header-anchor" href="#_4-java-能做什么" aria-hidden="true">#</a> 4. Java 能做什么</h2>
<p>Java 应用广泛，在我们日常中就能经常见到由 Java 所开发的程序。常见的的应用应用领域如下：</p>
<ol>
<li><strong>桌面 GUI 应用开发</strong></li>
<li><strong>服务器系统</strong></li>
<li><strong>企业级应用开发</strong></li>
<li><strong>大数据开发</strong></li>
<li><strong>移动应用开发</strong></li>
<li><strong>游戏开发</strong></li>
<li>……</li>
</ol>
<h2 id="_5-java-技术体系" tabindex="-1"><a class="header-anchor" href="#_5-java-技术体系" aria-hidden="true">#</a> 5. Java 技术体系</h2>
<p>根据传统意义上 Sun 官方定义， Java 技术体系的组成主要就是我们常说的 JDK，即以下三部分：</p>
<ol>
<li><strong>Java 程序设计语言</strong></li>
<li><strong>Java 虚拟机</strong></li>
<li><strong>Java API 类库</strong></li>
</ol>
<figure><img src="@source/java-tutorial/javase-series/assets/20220701-intro-to-java/java-system.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>同时，Java 技术体系又可以主要分为以下 3 个平台。</p>
<ol>
<li><strong>Java SE</strong></li>
</ol>
<p>Java Standard Edition，即 Java 标准版。主要是 Java 技术的核心和基础，要想学好 Java，那么首先你得掌握好这部分。主要运行在桌面级应用，如 Windows 应用程序。</p>
<ol start="2">
<li><strong>Java EE</strong></li>
</ol>
<p>Java Enterprise Editon，即 Java 企业版。从它的名字就不难看出，这是 Java 针对企业级应用开发所提供的一套解决方案，主要用于架设高性能企业网站。</p>
<ol start="3">
<li><strong>Java ME</strong></li>
</ol>
<p>Java Micro Edition，即 Java 小型版。主要是 Java 针对移动设备应用所提供的一套解决方案，主要运行在手机、pad 等移动端。</p>
<figure><img src="@source/java-tutorial/javase-series/assets/20220701-intro-to-java/java-platform.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6. 总结</h2>
<p>本文主要从 Java 历史背景、选择 Java 的理由、Java 能做什么、Java 技术体系等 4 方面对 Java 语言做了一个简单介绍。接下来的文章我们就来看看，如何搭建 Java 的开发环境以及实现一个简单的入门程序。</p>
<Share colorful /></div></template>


