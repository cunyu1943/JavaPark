<template><div><h1 id="fastjson-v2-简单使用手册" tabindex="-1"><a class="header-anchor" href="#fastjson-v2-简单使用手册" aria-hidden="true">#</a> Fastjson V2 简单使用手册</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>在日常 Java 企业级开发中，可能避不开 <code v-pre>JSON</code> 这个格式。 <code v-pre>JSON</code> 源于 1999 年的 <code v-pre>JS</code> 语言规范 <code v-pre>ECMA262</code> 的一个子集，然后又在 2003 年作为一种数据格式 <code v-pre>ECMA404</code> 发布，到了 2006 年，又作为 <code v-pre>rfc4627</code> 发布。直到现在，<code v-pre>JSON</code> 的应用已经十分广泛了。</p>
<p><code v-pre>JSON</code> 基于纯文本，所以阅读起来也十分轻松，而且规范简单，容易处理，能够做到开箱即用，最最重要的是，<code v-pre>JSON</code> 和平台无关，所以能够作为不同系统间的传输格式协议。</p>
<p><code v-pre>JSON</code> 有 7 大基本数值，分别是：<code v-pre>false</code>、<code v-pre>null</code>、<code v-pre>true</code>、<code v-pre>object</code>、<code v-pre>array</code>、<code v-pre>number</code>、<code v-pre>string</code>。其结构也非常简单，只有两种结构：一个是 <strong>数组</strong>，一个是<strong>对象中的键值对集合</strong>。其中，对象用 <code v-pre>{}</code> 来表示，其内部是 <code v-pre>key:value</code> 形式，而数组则是用 <code v-pre>[]</code> 来表示，不同值之间用逗号 <code v-pre>,</code> 分隔。</p>
<p>以下就是一个 <code v-pre>JSON</code> 的简单示例：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"baseInfo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"cunyu1943"</span><span class="token punctuation">,</span>
        <span class="token property">"wepublic"</span><span class="token operator">:</span> <span class="token string">"村雨遥"</span><span class="token punctuation">,</span>
        <span class="token property">"wechat"</span><span class="token operator">:</span> <span class="token string">"cunyu1943"</span><span class="token punctuation">,</span>
        <span class="token property">"platform"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"juejin"</span><span class="token punctuation">,</span> <span class="token string">"CSDN"</span><span class="token punctuation">,</span> <span class="token string">"Github"</span><span class="token punctuation">,</span> <span class="token string">"zhihu"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在 Java 中，主流的 <code v-pre>JSON</code> 库只要有以下三个：</p>
<ol>
<li><code v-pre>Fastjson</code>：国内阿里巴巴公司所开发的 <code v-pre>JSON</code> 库，性能出众且快速。</li>
<li><code v-pre>Jackson</code>：<code v-pre>Spring</code> 默认的 <code v-pre>JSON</code> 库，社区十分活跃，更新迭代快。</li>
<li><code v-pre>Gson</code>：谷歌出品的 <code v-pre>JSON</code> 库，算是目前来说功能最全的 <code v-pre>JSON</code> 库了。</li>
</ol>
<p>得益于 <code v-pre>Fastjson</code> 的超高性能，国内的大部分公司都选择了阿里出品的 <code v-pre>Fastjson</code> 作为处理 <code v-pre>JSON</code> 的工具库。本文就来看看，<code v-pre>Fastjson</code> 的一些常用的使用技巧。</p>
<h2 id="使用技巧" tabindex="-1"><a class="header-anchor" href="#使用技巧" aria-hidden="true">#</a> 使用技巧</h2>
<p>首先，我们创建一个 <code v-pre>Maven</code> 项目，用来演示 <code v-pre>Fastjson</code> 的使用，也方便我们管理依赖。同时，这里选择 <code v-pre>Fastjson v2</code> 来作为今天的演示主角。</p>
<p>当然，首要的工作就是创建一个 <code v-pre>Maven</code> 项目，如果你还有点摸不着头脑，那可以移步先去看看前备知识：</p>
<blockquote>
<p><a href="https://cunyu1943.github.io/JavaPark/md/java/maven/20220104-maven-project-with-idea" target="_blank" rel="noopener noreferrer">Maven 教程：使用 IDEA 创建 Maven 项目<ExternalLinkIcon/></a></p>
</blockquote>
<p>当我们创建完成一个 <code v-pre>Maven</code> 项目之后，首要的工作就是在项目的 <code v-pre>pom.xml</code> 中添加 <code v-pre>Fastjson V2</code> 的依赖。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.fastjson2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>fastjson2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.0.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着我们创建一个 <code v-pre>Hero</code> 类，方便后续过程中的使用。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> profession<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java-对象序列化为-json" tabindex="-1"><a class="header-anchor" href="#java-对象序列化为-json" aria-hidden="true">#</a> Java 对象序列化为 JSON</h3>
<p>在我们的主类中创建一个 <code v-pre>Hero</code> 对象，然后利用 <code v-pre>toJSONString()</code> 方法将其转换为 <code v-pre>JSON</code> 字符串，可以看到结果正确转换了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//  Java 对象转 JSON</span>
        <span class="token class-name">Hero</span> hero <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hero</span><span class="token punctuation">(</span><span class="token string">"女"</span><span class="token punctuation">,</span> <span class="token string">"虞姬"</span><span class="token punctuation">,</span> <span class="token string">"射手"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> heroJson <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>hero<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>heroJson<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220720-fastjson2-quickstart/json.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="json-解析为-java-对象" tabindex="-1"><a class="header-anchor" href="#json-解析为-java-对象" aria-hidden="true">#</a> JSON 解析为 Java 对象</h3>
<p>假设有一个 <code v-pre>JSON</code> 字符串，我们想将其转换为 Java 对象，则可以使用 <code v-pre>parseObject()</code> 方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// JSON 字符串转 Java 对象</span>
        <span class="token class-name">String</span> shooter <span class="token operator">=</span> <span class="token string">"{"</span>name<span class="token string">":"</span>伽罗<span class="token string">","</span>profession<span class="token string">":"</span>射手<span class="token string">","</span>sex<span class="token string">":"</span>女<span class="token string">"}"</span><span class="token punctuation">;</span>
        <span class="token class-name">Hero</span> hero <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>shooter<span class="token punctuation">,</span> <span class="token class-name">Hero</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hero<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220720-fastjson2-quickstart/json2java.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="json-解析为-jsonobject" tabindex="-1"><a class="header-anchor" href="#json-解析为-jsonobject" aria-hidden="true">#</a> JSON 解析为 JSONObject</h3>
<p>将 <code v-pre>JSON</code> 解析为 <code v-pre>JSONObject</code> 的方法和将 <code v-pre>JSON</code> 转换为 Java 对象的方法类似，但是少了一个参数，这里需要注意。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// JSON 解析为 JSONObject</span>
        <span class="token class-name">String</span> shooter <span class="token operator">=</span> <span class="token string">"{"</span>name<span class="token string">":"</span>黄忠<span class="token string">","</span>profession<span class="token string">":"</span>射手<span class="token string">","</span>sex<span class="token string">":"</span>男<span class="token string">"}"</span><span class="token punctuation">;</span>
        <span class="token class-name">JSONObject</span> heroJson <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>shooter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>heroJson<span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220720-fastjson2-quickstart/json2obj.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="json-解析为-jsonarray" tabindex="-1"><a class="header-anchor" href="#json-解析为-jsonarray" aria-hidden="true">#</a> JSON 解析为 JSONArray</h3>
<p>要将 <code v-pre>JSON</code> 解析为 <code v-pre>JSONArray</code>，此时可以使用 <code v-pre>parseArray()</code> 方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// JSON 解析为 JSONArray</span>
        <span class="token class-name">String</span> platform <span class="token operator">=</span> <span class="token string">"[{"</span>name<span class="token string">":"</span><span class="token constant">CSDN</span><span class="token string">","</span>id<span class="token string">":"</span>村雨遥<span class="token string">"},{"</span>name<span class="token string">":"</span><span class="token class-name">Juejin</span><span class="token string">","</span>id<span class="token string">":"</span>村雨遥<span class="token string">"}]"</span><span class="token punctuation">;</span>
        <span class="token class-name">JSONArray</span> platformArray <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseArray</span><span class="token punctuation">(</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>platformArray<span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/javase-tutorial/assets/20220720-fastjson2-quickstart/json-array.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>以上就是日常开发中常见的 4 种其他格式和 <code v-pre>JSON</code> 格式之间的转换过程了，其中，最常用的应该莫过于 <code v-pre>JSON</code> 和 Java 对象之间的相互转换了，一定要熟练掌握！关于 <code v-pre>Fastjson V2</code> 的简单使用就介绍到这里了，关于更多 <code v-pre>Fastjson V2</code> 的高级使用技巧，等待我们后续文章再见吧！</p>
<Share colorful /></div></template>


