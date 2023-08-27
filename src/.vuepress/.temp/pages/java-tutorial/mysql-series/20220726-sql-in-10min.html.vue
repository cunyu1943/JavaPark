<template><div><h1 id="《sql-必知必会》全解析" tabindex="-1"><a class="header-anchor" href="#《sql-必知必会》全解析" aria-hidden="true">#</a> 《SQL 必知必会》全解析</h1>
<div class="hint-container info">
<p class="hint-container-title">共勉</p>
<p>不要哀求，学会争取。若是如此，终有所获。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">原文</p>
<p><a href="https://mp.weixin.qq.com/s/zbOqyAtsWsocarsFIGdGgw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/zbOqyAtsWsocarsFIGdGgw<ExternalLinkIcon/></a></p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>你是否还在烦恼 SQL 该从何学起，或者学了 SQL 想找个地方练练手？好巧不巧，最近在工作之余登上牛客，发现了牛客不知道啥时候上线了<a href="https://www.nowcoder.com/exam/oj/ta?tpId=298" target="_blank" rel="noopener noreferrer">SQL 必知必会<ExternalLinkIcon/></a>的练习题。</p>
<p>《SQL 必知必会》作为麻省理工学院、伊利诺伊大学等众多大学的参考教材，由浅入深地讲解了SQL的基本概念和语法。涉及数据的排序、过滤和分组，以及表、视图、联结、子查询、游标、存储过程和触发器等内容。实例丰富，方便查阅，可以说作为一个 CRUD BOY/GIRL 必读书目。</p>
<p>想着正好给它刷一遍，然后将自己刷题的一些想法总结下，于是有了今天这篇文章，希望能给需要的小伙伴一点点帮助。</p>
<h2 id="sql1-从-customers-表中检索所有的-id" tabindex="-1"><a class="header-anchor" href="#sql1-从-customers-表中检索所有的-id" aria-hidden="true">#</a> SQL1 从 Customers 表中检索所有的 ID</h2>
<h3 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h3>
<p>现有表Customers如下：</p>
<table>
<thead>
<tr>
<th>cust_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
</tr>
<tr>
<td>B</td>
</tr>
<tr>
<td>C</td>
</tr>
</tbody>
</table>
<h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，从 Customers 表中检索所有的 cust_id。</p>
<h3 id="示例答案" tabindex="-1"><a class="header-anchor" href="#示例答案" aria-hidden="true">#</a> 示例答案</h3>
<p>返回 cust_id 列的内容</p>
<table>
<thead>
<tr>
<th>cust_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
</tr>
<tr>
<td>B</td>
</tr>
<tr>
<td>C</td>
</tr>
</tbody>
</table>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'C'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答" tabindex="-1"><a class="header-anchor" href="#解答" aria-hidden="true">#</a> 解答</h3>
<p>考察最简单的查询语句，因为 <code v-pre>Customers</code> 表中仅有 <code v-pre>cust_id</code> 一列，所以我们可以使用以下两种解答方式。</p>
<ul>
<li>第一种方式，选择特定列进行输出，这也是我们在工作中更加推荐使用的一种方式，将需要输出的列名全部描述出来。</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_id <span class="token keyword">FROM</span> Customers<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>第二种方式，使用 <code v-pre>*</code> 对表中所有列进行输出，因为 <code v-pre>Customers</code> 表中仅有一列，所以可以使用该方式。但在日常工作中，就算查询结果列中包含了数据库表的所有字段，也不要直接使用 <code v-pre>*</code>.</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Customers<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql2-检索并列出已订购产品的清单" tabindex="-1"><a class="header-anchor" href="#sql2-检索并列出已订购产品的清单" aria-hidden="true">#</a> SQL2 检索并列出已订购产品的清单</h2>
<h3 id="描述-1" tabindex="-1"><a class="header-anchor" href="#描述-1" aria-hidden="true">#</a> 描述</h3>
<p>表OrderItems含有非空的列prod_id代表商品id，包含了所有已订购的商品（有些已被订购多次）。</p>
<table>
<thead>
<tr>
<th>prod_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
</tr>
<tr>
<td>a2</td>
</tr>
<tr>
<td>a3</td>
</tr>
<tr>
<td>a4</td>
</tr>
<tr>
<td>a5</td>
</tr>
<tr>
<td>a6</td>
</tr>
<tr>
<td>a7</td>
</tr>
</tbody>
</table>
<h3 id="问题-1" tabindex="-1"><a class="header-anchor" href="#问题-1" aria-hidden="true">#</a> 问题</h3>
<p>编写SQL 语句，检索并列出所有已订购商品（prod_id）的去重后的清单。</p>
<h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品id'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a6'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a6'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-1" tabindex="-1"><a class="header-anchor" href="#解答-1" aria-hidden="true">#</a> 解答</h3>
<p>要对结果去重，可以使用 <code v-pre>DISTINCT</code> 关键字。使用时，在后边跟上需要去重的字段即可保证这些去重字段的查询结果不重复。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> prod_id <span class="token keyword">FROM</span> OrderItems<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外还可以使用 <code v-pre>GROUP BY</code> 关键字，改关键字支持在去重的同时，同步返回其他字段的信息。</p>
<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre v-pre class="language-SQL"><code>SELECT prod_id FROM OrderItems GROUP BY prod_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql3-检索所有列" tabindex="-1"><a class="header-anchor" href="#sql3-检索所有列" aria-hidden="true">#</a> SQL3 检索所有列</h2>
<h3 id="描述-2" tabindex="-1"><a class="header-anchor" href="#描述-2" aria-hidden="true">#</a> 描述</h3>
<p>现在有 Customers 表（表中含有列 cust_id 代表客户 id，cust_name 代表客户姓名） 。</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>andy</td>
</tr>
<tr>
<td>a2</td>
<td>ben</td>
</tr>
<tr>
<td>a3</td>
<td>tony</td>
</tr>
<tr>
<td>a4</td>
<td>tom</td>
</tr>
<tr>
<td>a5</td>
<td>an</td>
</tr>
<tr>
<td>a6</td>
<td>lee</td>
</tr>
<tr>
<td>a7</td>
<td>hex</td>
</tr>
</tbody>
</table>
<h3 id="问题-2" tabindex="-1"><a class="header-anchor" href="#问题-2" aria-hidden="true">#</a> 问题</h3>
<p>需要编写 SQL语句，检索所有列。</p>
<h3 id="示例结果" tabindex="-1"><a class="header-anchor" href="#示例结果" aria-hidden="true">#</a> 示例结果</h3>
<p>返回所有列 cust_id 和 cust_name。</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>andy</td>
</tr>
<tr>
<td>a2</td>
<td>ben</td>
</tr>
<tr>
<td>a3</td>
<td>tony</td>
</tr>
<tr>
<td>a4</td>
<td>tom</td>
</tr>
<tr>
<td>a5</td>
<td>an</td>
</tr>
<tr>
<td>a6</td>
<td>lee</td>
</tr>
<tr>
<td>a7</td>
<td>hex</td>
</tr>
</tbody>
</table>
<h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户id'</span><span class="token punctuation">,</span>
	cust_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户姓名'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'andy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'ben'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a3'</span><span class="token punctuation">,</span><span class="token string">'tony'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'tom'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token string">'an'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a6'</span><span class="token punctuation">,</span><span class="token string">'lee'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token string">'hex'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-2" tabindex="-1"><a class="header-anchor" href="#解答-2" aria-hidden="true">#</a> 解答</h3>
<p>类似于第一题，最简单的查询语句，只不过相比第一题多了一列，所以同样可以使用两种方式。</p>
<ul>
<li>使用 <code v-pre>*</code> 表示所有列。</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Customers<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>将需要打印出的列详细列出。</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_id<span class="token punctuation">,</span> cust_name <span class="token keyword">FROM</span> Customers<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql4-检索顾客名称并且排序" tabindex="-1"><a class="header-anchor" href="#sql4-检索顾客名称并且排序" aria-hidden="true">#</a> SQL4 检索顾客名称并且排序</h2>
<h3 id="描述-3" tabindex="-1"><a class="header-anchor" href="#描述-3" aria-hidden="true">#</a> 描述</h3>
<p>有表 Customers，cust_id 代表客户 id，cust_name 代表客户姓名。</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>andy</td>
</tr>
<tr>
<td>a2</td>
<td>ben</td>
</tr>
<tr>
<td>a3</td>
<td>tony</td>
</tr>
<tr>
<td>a4</td>
<td>tom</td>
</tr>
<tr>
<td>a5</td>
<td>an</td>
</tr>
<tr>
<td>a6</td>
<td>lee</td>
</tr>
<tr>
<td>a7</td>
<td>hex</td>
</tr>
</tbody>
</table>
<h3 id="问题-3" tabindex="-1"><a class="header-anchor" href="#问题-3" aria-hidden="true">#</a> 问题</h3>
<p>从 Customers 中检索所有的顾客名称（cust_name），并按从 Z 到 A 的顺序显示结果。</p>
<h3 id="示例结果-1" tabindex="-1"><a class="header-anchor" href="#示例结果-1" aria-hidden="true">#</a> 示例结果</h3>
<p>返回客户姓名 cust_name</p>
<table>
<thead>
<tr>
<th>cust_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>tony</td>
</tr>
<tr>
<td>tom</td>
</tr>
<tr>
<td>lee</td>
</tr>
<tr>
<td>hex</td>
</tr>
<tr>
<td>ben</td>
</tr>
<tr>
<td>andy</td>
</tr>
<tr>
<td>an</td>
</tr>
</tbody>
</table>
<h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户id'</span><span class="token punctuation">,</span>
	cust_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户姓名'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'andy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'ben'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a3'</span><span class="token punctuation">,</span><span class="token string">'tony'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'tom'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token string">'an'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a6'</span><span class="token punctuation">,</span><span class="token string">'lee'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token string">'hex'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-3" tabindex="-1"><a class="header-anchor" href="#解答-3" aria-hidden="true">#</a> 解答</h3>
<p>要对数据库中的数据进行排序，需要使用关键字 <code v-pre>ORDER BY</code>。此外，默认情况下，SQL 中列的结果默认是正序排列的，即实际情况下以下语句执行结果是一样的。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_name <span class="token keyword">FROM</span> Customers<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_name <span class="token keyword">FROM</span> Customers <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name <span class="token keyword">ASC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而要对查询结果逆序输出，则需要用到 <code v-pre>DESC</code> 关键字，表示逆序输出。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_name <span class="token keyword">FROM</span> Customers <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql5-对顾客id和日期排序" tabindex="-1"><a class="header-anchor" href="#sql5-对顾客id和日期排序" aria-hidden="true">#</a> SQL5 对顾客ID和日期排序</h2>
<h3 id="描述-4" tabindex="-1"><a class="header-anchor" href="#描述-4" aria-hidden="true">#</a> 描述</h3>
<p>有 Orders 表</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>order_num</th>
<th>order_date</th>
</tr>
</thead>
<tbody>
<tr>
<td>andy</td>
<td>aaaa</td>
<td>2021-01-01 00:00:00</td>
</tr>
<tr>
<td>andy</td>
<td>bbbb</td>
<td>2021-01-01 12:00:00</td>
</tr>
<tr>
<td>bob</td>
<td>cccc</td>
<td>2021-01-10 12:00:00</td>
</tr>
<tr>
<td>dick</td>
<td>dddd</td>
<td>2021-01-11 00:00:00</td>
</tr>
</tbody>
</table>
<h3 id="问题-4" tabindex="-1"><a class="header-anchor" href="#问题-4" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，从 Orders 表中检索顾客 ID（cust_id）和订单号（order_num），并先按顾客 ID 对结果进行排序，再按订单日期倒序排列。</p>
<h3 id="示例答案-1" tabindex="-1"><a class="header-anchor" href="#示例答案-1" aria-hidden="true">#</a> 示例答案</h3>
<p>返回 2 列，cust_id 和 order_num</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>andy</td>
<td>bbbb</td>
</tr>
<tr>
<td>andy</td>
<td>aaaa</td>
</tr>
<tr>
<td>bob</td>
<td>cccc</td>
</tr>
<tr>
<td>dick</td>
<td>dddd</td>
</tr>
</tbody>
</table>
<h3 id="示例解析" tabindex="-1"><a class="header-anchor" href="#示例解析" aria-hidden="true">#</a> 示例解析</h3>
<p>首先根据 cust_id 进行排列，andy 在 bob 和 dick 前，再根据 order_date 进行排列，订单号 bbbb 的订单时间是 &quot;2021-01-01 12:00:00&quot; 大于订单号 aaaa 的时间 &quot;2021-01-01 00:00:00&quot;</p>
<h3 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>cust_id<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客 ID'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>order_num<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'订单号'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>order_date<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'订单时间'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'andy'</span><span class="token punctuation">,</span><span class="token string">'aaaa'</span><span class="token punctuation">,</span><span class="token string">'2021-01-01 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'andy'</span><span class="token punctuation">,</span><span class="token string">'bbbb'</span><span class="token punctuation">,</span><span class="token string">'2021-01-01 12:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'bob'</span><span class="token punctuation">,</span><span class="token string">'cccc'</span><span class="token punctuation">,</span><span class="token string">'2021-01-10 12:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'dick'</span><span class="token punctuation">,</span><span class="token string">'dddd'</span><span class="token punctuation">,</span><span class="token string">'2021-01-11 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-4" tabindex="-1"><a class="header-anchor" href="#解答-4" aria-hidden="true">#</a> 解答</h3>
<p>要对列进行排序，则需要使用 <code v-pre>ORDER BY</code> 关键字，此外就是正序和倒序输出。</p>
<ul>
<li><code v-pre>ASC</code>：正序输出，也是默认输出的情况。</li>
<li><code v-pre>DESC</code>：倒序输出。</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_id<span class="token punctuation">,</span> order_num <span class="token keyword">FROM</span> Orders <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_id<span class="token punctuation">,</span> order_date <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql6-按照数量和价格排序" tabindex="-1"><a class="header-anchor" href="#sql6-按照数量和价格排序" aria-hidden="true">#</a> SQL6 按照数量和价格排序</h2>
<h3 id="描述-5" tabindex="-1"><a class="header-anchor" href="#描述-5" aria-hidden="true">#</a> 描述</h3>
<p>假设有一个 OrderItems 表</p>
<table>
<thead>
<tr>
<th>quantity</th>
<th>item_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>100</td>
</tr>
<tr>
<td>10</td>
<td>1003</td>
</tr>
<tr>
<td>2</td>
<td>500</td>
</tr>
</tbody>
</table>
<h3 id="问题-5" tabindex="-1"><a class="header-anchor" href="#问题-5" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，显示 OrderItems 表中的数量（quantity）和价格（item_price），并按数量由多到少、价格由高到低排序。</p>
<h3 id="示例答案-2" tabindex="-1"><a class="header-anchor" href="#示例答案-2" aria-hidden="true">#</a> 示例答案</h3>
<p>返回 quantity 和 item_price</p>
<h3 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>quantity<span class="token punctuation">`</span></span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'数量'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>item_price<span class="token punctuation">`</span></span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'订单价格'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">1003</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-5" tabindex="-1"><a class="header-anchor" href="#解答-5" aria-hidden="true">#</a> 解答</h3>
<p>同样是查询语句，要对查询结果进行排序，则需要使用  <code v-pre>ORDER BY</code> 关键字，最后则是需要注意是正序还是倒序，题目中由多到少和由高到低都是属于倒序，所以需要使用关键字 <code v-pre>DESC</code>。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> quantity<span class="token punctuation">,</span> item_price <span class="token keyword">FROM</span> OrderItems <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> quantity <span class="token keyword">DESC</span><span class="token punctuation">,</span> item_price <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql7-检查sql语句" tabindex="-1"><a class="header-anchor" href="#sql7-检查sql语句" aria-hidden="true">#</a> SQL7 检查SQL语句</h2>
<h3 id="描述-6" tabindex="-1"><a class="header-anchor" href="#描述-6" aria-hidden="true">#</a> 描述</h3>
<p>有 Vendors 表</p>
<table>
<thead>
<tr>
<th>vend_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>海底捞</td>
</tr>
<tr>
<td>小龙坎</td>
</tr>
<tr>
<td>大龙燚</td>
</tr>
</tbody>
</table>
<h3 id="问题-6" tabindex="-1"><a class="header-anchor" href="#问题-6" aria-hidden="true">#</a> 问题</h3>
<p>下面的 SQL 语句有问题吗？尝试将它改正确，使之能够正确运行，并且返回结果根据 vend_name 逆序排列</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> vend_name<span class="token punctuation">,</span> 
<span class="token keyword">FROM</span> Vendors 
<span class="token keyword">ORDER</span> vend_name <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例展示" tabindex="-1"><a class="header-anchor" href="#示例展示" aria-hidden="true">#</a> 示例展示</h3>
<p>返回 vend_name</p>
<table>
<thead>
<tr>
<th>vend_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>海底捞</td>
</tr>
<tr>
<td>小龙坎</td>
</tr>
<tr>
<td>大龙燚</td>
</tr>
</tbody>
</table>
<h3 id="示例-6" tabindex="-1"><a class="header-anchor" href="#示例-6" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'vend名称'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'海底捞'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'小龙坎'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'大龙燚'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-6" tabindex="-1"><a class="header-anchor" href="#解答-6" aria-hidden="true">#</a> 解答</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> vend_name<span class="token punctuation">,</span> <span class="token keyword">FROM</span> Vendors <span class="token keyword">ORDER</span> vend_name <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>主要存在两处错误，首先是选取需要展示的列 <code v-pre>vend_name</code> 后，后面并没有跟上需要展示的其他列，所以此处多了一个 <code v-pre>,</code>。另外，对选取列进行排序使用的关键字是 <code v-pre>ORDER BY</code>，而题目中只是给出了 <code v-pre>ORDER</code>，忘记了 <code v-pre>BY</code>，所以会导致查询结果错误。针对这两处错误改正后，得到的正确的语句如下所示。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> vend_name <span class="token keyword">FROM</span> Vendors <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql8-返回固定价格的产品" tabindex="-1"><a class="header-anchor" href="#sql8-返回固定价格的产品" aria-hidden="true">#</a> SQL8 返回固定价格的产品</h2>
<h3 id="描述-7" tabindex="-1"><a class="header-anchor" href="#描述-7" aria-hidden="true">#</a> 描述</h3>
<p>有表 Products</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>prod_name</th>
<th>prod_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0018</td>
<td>sockets</td>
<td>9.49</td>
</tr>
<tr>
<td>a0019</td>
<td>iphone13</td>
<td>600</td>
</tr>
<tr>
<td>b0018</td>
<td>gucci t-shirts</td>
<td>1000</td>
</tr>
</tbody>
</table>
<h3 id="问题-7" tabindex="-1"><a class="header-anchor" href="#问题-7" aria-hidden="true">#</a> 问题</h3>
<p>从 Products 表中检索产品 ID（prod_id）和产品名称（prod_name），只返回价格为 9.49 美元的产品。</p>
<h3 id="示例结果-2" tabindex="-1"><a class="header-anchor" href="#示例结果-2" aria-hidden="true">#</a> 示例结果</h3>
<p>返回 prod_id 和 prod_name</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>prod_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0018</td>
<td>sockets</td>
</tr>
</tbody>
</table>
<h3 id="示例-7" tabindex="-1"><a class="header-anchor" href="#示例-7" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>prod_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>prod_price<span class="token punctuation">`</span></span> <span class="token keyword">DOUBLE</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品价格'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0018'</span><span class="token punctuation">,</span><span class="token string">'sockets'</span><span class="token punctuation">,</span><span class="token number">9.49</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0019'</span><span class="token punctuation">,</span><span class="token string">'iphone13'</span><span class="token punctuation">,</span><span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token string">'gucci t-shirts'</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-7" tabindex="-1"><a class="header-anchor" href="#解答-7" aria-hidden="true">#</a> 解答</h3>
<p>查询符合指定条件的数据，可以使用关键字 <code v-pre>WHERE</code> 对条件进行限制，然后就是对条件的实现，这里可以使用两种方式。</p>
<p>第一种，直接利用 <code v-pre>=</code>，既然条件是需要价格为 <code v-pre>9.49</code> 美元的产品，则我们将价格列设置为 <code v-pre>prod_price = 9.49</code> 即可。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> prod_name <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_price <span class="token operator">=</span> <span class="token number">9.49</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二种，除开 <code v-pre>=</code> 之外，我们也可以使用 <code v-pre>in</code>，表示价格只要在指定的数据之中，我们将价格列设置为 <code v-pre>in (9.49)</code> 即可，但是此时要注意不要忽略 <code v-pre>()</code>，否则语句会报错。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> prod_name <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_price <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">9.49</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql9-返回更高价格的产品" tabindex="-1"><a class="header-anchor" href="#sql9-返回更高价格的产品" aria-hidden="true">#</a> SQL9 返回更高价格的产品</h2>
<h3 id="描述-8" tabindex="-1"><a class="header-anchor" href="#描述-8" aria-hidden="true">#</a> 描述</h3>
<p>Products 表</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>prod_name</th>
<th>prod_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0018</td>
<td>sockets</td>
<td>9.49</td>
</tr>
<tr>
<td>a0019</td>
<td>iphone13</td>
<td>600</td>
</tr>
<tr>
<td>b0019</td>
<td>gucci t-shirts</td>
<td>1000</td>
</tr>
</tbody>
</table>
<h3 id="问题-8" tabindex="-1"><a class="header-anchor" href="#问题-8" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，从 Products 表中检索产品 ID（prod_id）和产品名称（prod_name），只返回价格为 9 美元或更高的产品。</p>
<h3 id="示例答案-3" tabindex="-1"><a class="header-anchor" href="#示例答案-3" aria-hidden="true">#</a> 示例答案</h3>
<p>返回 prod_id 商品 id 和 prod_name 商品名称</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>prod_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0018</td>
<td>sockets</td>
</tr>
<tr>
<td>a0019</td>
<td>iphone13</td>
</tr>
<tr>
<td>b0019</td>
<td>gucci t-shirts</td>
</tr>
</tbody>
</table>
<h3 id="示例-8" tabindex="-1"><a class="header-anchor" href="#示例-8" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_price<span class="token punctuation">`</span></span> <span class="token keyword">DOUBLE</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品价格'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0011'</span><span class="token punctuation">,</span><span class="token string">'usb'</span><span class="token punctuation">,</span><span class="token number">9.49</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0019'</span><span class="token punctuation">,</span><span class="token string">'iphone13'</span><span class="token punctuation">,</span><span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token string">'gucci t-shirts'</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-8" tabindex="-1"><a class="header-anchor" href="#解答-8" aria-hidden="true">#</a> 解答</h3>
<p>条件查询语句，查询格式：</p>
<blockquote>
<p>SELECT [列名] FROM [表名] WHERE 判断条件 …</p>
</blockquote>
<p>既然判断条件是要产品价格不低于 9 美元，则产品需要大于等于 9 美元，可以将产品价格设置为 <code v-pre>prod_price &gt;= 9</code> 即可。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> prod_name <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_price <span class="token operator">>=</span> <span class="token number">9</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，我们还可以将 <code v-pre>&gt;=</code> 拆分为两个条件，一个是 <code v-pre>prod_price &gt; 9</code>，而另一个则是 <code v-pre>prod_price = 9</code>，然后满足任一条件即可，则利用关键字 <code v-pre>OR</code> 将两个条件进行连接。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> prod_name <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_price <span class="token operator">></span> <span class="token number">9</span> <span class="token operator">OR</span> prod_price <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql10-返回产品并且按照价格排序" tabindex="-1"><a class="header-anchor" href="#sql10-返回产品并且按照价格排序" aria-hidden="true">#</a> SQL10 返回产品并且按照价格排序</h2>
<h3 id="描述-9" tabindex="-1"><a class="header-anchor" href="#描述-9" aria-hidden="true">#</a> 描述</h3>
<p>有 Products 表</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>prod_name</th>
<th>prod_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0011</td>
<td>egg</td>
<td>3</td>
</tr>
<tr>
<td>a0019</td>
<td>sockets</td>
<td>4</td>
</tr>
<tr>
<td>b0019</td>
<td>coffee</td>
<td>15</td>
</tr>
</tbody>
</table>
<h3 id="问题-9" tabindex="-1"><a class="header-anchor" href="#问题-9" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，返回 Products 表中所有价格在 3 美元到 6 美元之间的产品的名称（prod_name）和价格（prod_price），然后按价格对结果进行排序</p>
<h3 id="示例结果-3" tabindex="-1"><a class="header-anchor" href="#示例结果-3" aria-hidden="true">#</a> 示例结果</h3>
<p>返回商品名称 prod_name 和商品价格 prod_price</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>prod_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>egg</td>
<td>3</td>
</tr>
<tr>
<td>sockets</td>
<td>4</td>
</tr>
</tbody>
</table>
<p>注：不需要考虑商品价格相同的情况</p>
<h3 id="示例-9" tabindex="-1"><a class="header-anchor" href="#示例-9" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_price<span class="token punctuation">`</span></span> <span class="token keyword">DOUBLE</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品价格'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0011'</span><span class="token punctuation">,</span><span class="token string">'egg'</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0019'</span><span class="token punctuation">,</span><span class="token string">'sockets'</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token string">'coffee'</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-9" tabindex="-1"><a class="header-anchor" href="#解答-9" aria-hidden="true">#</a> 解答</h3>
<p>条件查询，通过将条件拆分为 <code v-pre>prod_price &gt;= 3</code> 和 <code v-pre>prod_price &lt;= 6</code> 两个条件，然后利用关键字  <code v-pre>AND</code> 将两个条件串联起来，同时满足两个条件的数据则进行输出。然后要对价格进行排序，则可以使用关键字 <code v-pre>ORDER BY</code>。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_price <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_price <span class="token operator">>=</span> <span class="token number">3</span> <span class="token operator">AND</span> prod_price <span class="token operator">&lt;=</span><span class="token number">6</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除开上述将两个条件拆分开然后利用关键字 <code v-pre>AND</code> 串联起来之外，其实 SQL 还提供了关键字 <code v-pre>BETWEEN … AND …</code>，可以将满足介于两者之间的数进行筛选输出。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_price <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_price <span class="token operator">BETWEEN</span> <span class="token number">3</span> <span class="token operator">AND</span> <span class="token number">6</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql11-返回更多的产品" tabindex="-1"><a class="header-anchor" href="#sql11-返回更多的产品" aria-hidden="true">#</a> SQL11 返回更多的产品</h2>
<h3 id="描述-10" tabindex="-1"><a class="header-anchor" href="#描述-10" aria-hidden="true">#</a> 描述</h3>
<p>OrderItems 表含有：订单号 order_num，quantity 产品数量</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>105</td>
</tr>
<tr>
<td>a2</td>
<td>1100</td>
</tr>
<tr>
<td>a2</td>
<td>200</td>
</tr>
<tr>
<td>a4</td>
<td>1121</td>
</tr>
<tr>
<td>a5</td>
<td>10</td>
</tr>
<tr>
<td>a2</td>
<td>19</td>
</tr>
<tr>
<td>a7</td>
<td>5</td>
</tr>
</tbody>
</table>
<h3 id="问题-10" tabindex="-1"><a class="header-anchor" href="#问题-10" aria-hidden="true">#</a> 问题</h3>
<p>从 OrderItems 表中检索出所有不同且不重复的订单号（order_num），其中每个订单都要包含 100 个或更多的产品。</p>
<h3 id="示例结果-4" tabindex="-1"><a class="header-anchor" href="#示例结果-4" aria-hidden="true">#</a> 示例结果</h3>
<p>返回订单号列 order_num</p>
<table>
<thead>
<tr>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
</tr>
<tr>
<td>a2</td>
</tr>
<tr>
<td>a4</td>
</tr>
</tbody>
</table>
<h3 id="示例-10" tabindex="-1"><a class="header-anchor" href="#示例-10" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
	quantity <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'105'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'1100'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'200'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'1121'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token string">'10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'19'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token string">'5'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-10" tabindex="-1"><a class="header-anchor" href="#解答-10" aria-hidden="true">#</a> 解答</h3>
<p>要筛选指定列中不重复的数据，则需要使用关键字 <code v-pre>DISTINCT</code>。此外，要筛选出满足指定条件的数据，则需要关键字 <code v-pre>WHERE</code>，然后根据题意，可以将条件写到一起，也可以将条件进行拆分后用关键字 <code v-pre>OR</code> 并联。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> order_num <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> quantity <span class="token operator">>=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> order_num <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> quantity <span class="token operator">></span> <span class="token number">100</span> <span class="token operator">OR</span> quantity <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql12-检索供应商名称" tabindex="-1"><a class="header-anchor" href="#sql12-检索供应商名称" aria-hidden="true">#</a> SQL12 检索供应商名称</h2>
<h3 id="描述-11" tabindex="-1"><a class="header-anchor" href="#描述-11" aria-hidden="true">#</a> 描述</h3>
<p>Vendors 表有字段供应商名称（vend_name）、供应商国家（vend_country）、供应商州（vend_state）</p>
<table>
<thead>
<tr>
<th>vend_name</th>
<th>vend_country</th>
<th>vend_state</th>
</tr>
</thead>
<tbody>
<tr>
<td>apple</td>
<td>USA</td>
<td>CA</td>
</tr>
<tr>
<td>vivo</td>
<td>CNA</td>
<td>shenzhen</td>
</tr>
<tr>
<td>huawei</td>
<td>CNA</td>
<td>xian</td>
</tr>
</tbody>
</table>
<h3 id="问题-11" tabindex="-1"><a class="header-anchor" href="#问题-11" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，从 Vendors 表中检索供应商名称（vend_name），仅返回加利福尼亚州的供应商（这需要按国家[USA]和州[CA]进行过滤，没准其他国家也存在一个 CA）</p>
<h3 id="示例答案-4" tabindex="-1"><a class="header-anchor" href="#示例答案-4" aria-hidden="true">#</a> 示例答案</h3>
<p>返回供应商名称 vend_name</p>
<table>
<thead>
<tr>
<th>vend_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>apple</td>
</tr>
</tbody>
</table>
<h3 id="示例-11" tabindex="-1"><a class="header-anchor" href="#示例-11" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'vend名称'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_country<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'vend国家'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_state<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'vend州'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'apple'</span><span class="token punctuation">,</span><span class="token string">'USA'</span><span class="token punctuation">,</span><span class="token string">'CA'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'vivo'</span><span class="token punctuation">,</span><span class="token string">'CNA'</span><span class="token punctuation">,</span><span class="token string">'shenzhen'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'huawei'</span><span class="token punctuation">,</span><span class="token string">'CNA'</span><span class="token punctuation">,</span><span class="token string">'xian'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-11" tabindex="-1"><a class="header-anchor" href="#解答-11" aria-hidden="true">#</a> 解答</h3>
<p>既然要筛选出加利福利亚州的提供商，则首要条件是满足 <code v-pre>vend_state = 'CA'</code>。另外，除开美国有加利福利亚州之外，有可能其他国家也有加利福利亚州，所以需要对国家也进行限定，设置条件为 <code v-pre>vend_country = 'USA'</code>。然后用关键字  <code v-pre>AND</code> 将条件串联，满足这两个条件的数据则进行输出。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> vend_name <span class="token keyword">FROM</span> Vendors <span class="token keyword">WHERE</span> vend_country <span class="token operator">=</span> <span class="token string">'USA'</span> <span class="token operator">AND</span> vend_state <span class="token operator">=</span> <span class="token string">'CA'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql13-检索并列出已订购产品的清单" tabindex="-1"><a class="header-anchor" href="#sql13-检索并列出已订购产品的清单" aria-hidden="true">#</a> SQL13 检索并列出已订购产品的清单</h2>
<h3 id="描述-12" tabindex="-1"><a class="header-anchor" href="#描述-12" aria-hidden="true">#</a> 描述</h3>
<p>OrderItems 表包含了所有已订购的产品（有些已被订购多次）。</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>order_num</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>BR01</td>
<td>a1</td>
<td>105</td>
</tr>
<tr>
<td>BR02</td>
<td>a2</td>
<td>1100</td>
</tr>
<tr>
<td>BR02</td>
<td>a2</td>
<td>200</td>
</tr>
<tr>
<td>BR03</td>
<td>a4</td>
<td>1121</td>
</tr>
<tr>
<td>BR017</td>
<td>a5</td>
<td>10</td>
</tr>
<tr>
<td>BR02</td>
<td>a2</td>
<td>19</td>
</tr>
<tr>
<td>BR017</td>
<td>a7</td>
<td>5</td>
</tr>
</tbody>
</table>
<h3 id="问题-12" tabindex="-1"><a class="header-anchor" href="#问题-12" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，查找所有订购了数量至少 100 个的 BR01、BR02 或 BR03 的订单。你需要返回 OrderItems 表的订单号（order_num）、产品 ID（prod_id）和数量（quantity），并按产品 ID 和数量进行过滤。</p>
<h3 id="示例答案-5" tabindex="-1"><a class="header-anchor" href="#示例答案-5" aria-hidden="true">#</a> 示例答案</h3>
<p>返回商品 id prod_id、订单 order_num、数量 quantity。</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>prod_id</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>BR01</td>
<td>105</td>
</tr>
<tr>
<td>a2</td>
<td>BR02</td>
<td>1100</td>
</tr>
<tr>
<td>a2</td>
<td>BR02</td>
<td>200</td>
</tr>
<tr>
<td>a4</td>
<td>BR03</td>
<td>1121</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-1" tabindex="-1"><a class="header-anchor" href="#示例解析-1" aria-hidden="true">#</a> 示例解析</h3>
<p>返回的结果中，数量满足大于等于 100，且满足 prod_id 是 &quot;BR01&quot;，“BR02”，“BR03&quot; 中的任意一个。</p>
<h3 id="示例-12" tabindex="-1"><a class="header-anchor" href="#示例-12" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>

	prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品号'</span><span class="token punctuation">,</span>
	order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
	quantity <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'BR01'</span><span class="token punctuation">,</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'105'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR02'</span><span class="token punctuation">,</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'1100'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR02'</span><span class="token punctuation">,</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'200'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR03'</span><span class="token punctuation">,</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'1121'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR017'</span><span class="token punctuation">,</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token string">'10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR02'</span><span class="token punctuation">,</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'19'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR017'</span><span class="token punctuation">,</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token string">'5'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-12" tabindex="-1"><a class="header-anchor" href="#解答-12" aria-hidden="true">#</a> 解答</h3>
<p>多条件查询，将两个条件进行拆分，然后将两个查询条件进行串联即可。</p>
<p>数量满足大于等于 100，则设置为 <code v-pre>quantyty &gt;= 100</code>。</p>
<p>产品 id 满足 &quot;BR01&quot;，“BR02”，“BR03” 中的任意一个，则使用关键字 <code v-pre>in</code>。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> order_num<span class="token punctuation">,</span> prod_id<span class="token punctuation">,</span> quantity <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> quantity <span class="token operator">>=</span> <span class="token number">100</span> <span class="token operator">AND</span> prod_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">'BR01'</span><span class="token punctuation">,</span> <span class="token string">'BR02'</span><span class="token punctuation">,</span> <span class="token string">'BR03'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql14-返回所有价格在-3-美元到-6-美元之间的产品的名称和价格" tabindex="-1"><a class="header-anchor" href="#sql14-返回所有价格在-3-美元到-6-美元之间的产品的名称和价格" aria-hidden="true">#</a> SQL14 返回所有价格在 3 美元到 6 美元之间的产品的名称和价格</h2>
<h3 id="描述-13" tabindex="-1"><a class="header-anchor" href="#描述-13" aria-hidden="true">#</a> 描述</h3>
<p>有表 Products</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>prod_name</th>
<th>prod_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0011</td>
<td>egg</td>
<td>3</td>
</tr>
<tr>
<td>a0019</td>
<td>sockets</td>
<td>4</td>
</tr>
<tr>
<td>b0019</td>
<td>coffee</td>
<td>15</td>
</tr>
</tbody>
</table>
<h3 id="问题-13" tabindex="-1"><a class="header-anchor" href="#问题-13" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，返回所有价格在 3 美元到 6 美元之间的产品的名称（prod_name）和价格（prod_price），使用 AND 操作符，然后按价格对结果进行升序排序</p>
<h3 id="示例结果-5" tabindex="-1"><a class="header-anchor" href="#示例结果-5" aria-hidden="true">#</a> 示例结果</h3>
<p>返回商品名称 prod_name 和商品价格 prod_price</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>prod_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>egg</td>
<td>3</td>
</tr>
<tr>
<td>sockets</td>
<td>4</td>
</tr>
</tbody>
</table>
<p>注：不需要考虑价格相同时的排序问题</p>
<h3 id="示例-13" tabindex="-1"><a class="header-anchor" href="#示例-13" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_price<span class="token punctuation">`</span></span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品价格'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0011'</span><span class="token punctuation">,</span><span class="token string">'egg'</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0019'</span><span class="token punctuation">,</span><span class="token string">'sockets'</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token string">'coffee'</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-13" tabindex="-1"><a class="header-anchor" href="#解答-13" aria-hidden="true">#</a> 解答</h3>
<p>两个条件，首先是价格介于 3 到 6 美元，则可以使用关键字 <code v-pre>BETWEEN … AND …</code>。另外，按价格升序排序，则使用关键字 <code v-pre>ORDER BY</code>。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_price <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_price <span class="token operator">BETWEEN</span> <span class="token number">3</span> <span class="token operator">AND</span> <span class="token number">6</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>题目中指定需要使用关键字 <code v-pre>AND</code>，则需要将价格条件替换成 <code v-pre>prod_price &gt;= 3</code> 和 <code v-pre>prod_price &lt;= 6</code> 两个条件，然后将其串联。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_price <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_price <span class="token operator">>=</span> <span class="token number">3</span> <span class="token operator">AND</span> prod_price <span class="token operator">&lt;=</span> <span class="token number">6</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql15-纠错2" tabindex="-1"><a class="header-anchor" href="#sql15-纠错2" aria-hidden="true">#</a> SQL15 纠错2</h2>
<h2 id="描述-14" tabindex="-1"><a class="header-anchor" href="#描述-14" aria-hidden="true">#</a> 描述</h2>
<p>供应商表 Vendors 有字段供应商名称 vend_name、供应商国家 vend_country、供应商省份 vend_state</p>
<table>
<thead>
<tr>
<th>vend_name</th>
<th>vend_country</th>
<th>vend_state</th>
</tr>
</thead>
<tbody>
<tr>
<td>apple</td>
<td>USA</td>
<td>CA</td>
</tr>
<tr>
<td>vivo</td>
<td>CNA</td>
<td>shenzhen</td>
</tr>
<tr>
<td>huawei</td>
<td>CNA</td>
<td>xian</td>
</tr>
</tbody>
</table>
<h3 id="问题-14" tabindex="-1"><a class="header-anchor" href="#问题-14" aria-hidden="true">#</a> 问题</h3>
<p>修改正确下面 sql，使之正确返回</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> vend_name 
<span class="token keyword">FROM</span> Vendors 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name 
<span class="token keyword">WHERE</span> vend_country <span class="token operator">=</span> <span class="token string">'USA'</span> <span class="token operator">AND</span> vend_state <span class="token operator">=</span> <span class="token string">'CA'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例结果-6" tabindex="-1"><a class="header-anchor" href="#示例结果-6" aria-hidden="true">#</a> 示例结果</h3>
<p>结果返回 vend_name</p>
<table>
<thead>
<tr>
<th>vend_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>apple</td>
</tr>
</tbody>
</table>
<h3 id="示例-14" tabindex="-1"><a class="header-anchor" href="#示例-14" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'vend名称'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_country<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'vend国家'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_state<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'vend州'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'apple'</span><span class="token punctuation">,</span><span class="token string">'USA'</span><span class="token punctuation">,</span><span class="token string">'CA'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'beef noodle king'</span><span class="token punctuation">,</span><span class="token string">'USA'</span><span class="token punctuation">,</span><span class="token string">'CA'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'vivo'</span><span class="token punctuation">,</span><span class="token string">'CNA'</span><span class="token punctuation">,</span><span class="token string">'shenzhen'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'huawei'</span><span class="token punctuation">,</span><span class="token string">'CNA'</span><span class="token punctuation">,</span><span class="token string">'xian'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-14" tabindex="-1"><a class="header-anchor" href="#解答-14" aria-hidden="true">#</a> 解答</h3>
<p>主要是一处错误，搞错了关键字 <code v-pre>WHERE</code> 和 <code v-pre>ORDER BY</code> 的先后顺序，正确的 SQL 语句格式为：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">[</span>列名<span class="token punctuation">]</span> FOMR <span class="token punctuation">[</span>表名<span class="token punctuation">]</span> <span class="token keyword">WHERE</span> <span class="token punctuation">[</span>条件<span class="token punctuation">]</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">[</span>列名<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> vend_name <span class="token keyword">FROM</span> Vendors <span class="token keyword">WHERE</span> vend_country <span class="token operator">=</span> <span class="token string">'USA'</span> <span class="token operator">AND</span> vend_state <span class="token operator">=</span> <span class="token string">'CA'</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql16-检索产品名称和描述-一" tabindex="-1"><a class="header-anchor" href="#sql16-检索产品名称和描述-一" aria-hidden="true">#</a> SQL16 检索产品名称和描述（一）</h2>
<h3 id="描述-15" tabindex="-1"><a class="header-anchor" href="#描述-15" aria-hidden="true">#</a> 描述</h3>
<p>Products表</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>prod_desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0011</td>
<td>usb</td>
</tr>
<tr>
<td>a0019</td>
<td>iphone13</td>
</tr>
<tr>
<td>b0019</td>
<td>gucci t-shirts</td>
</tr>
<tr>
<td>c0019</td>
<td>gucci toy</td>
</tr>
<tr>
<td>d0019</td>
<td>lego toy</td>
</tr>
</tbody>
</table>
<h3 id="问题-15" tabindex="-1"><a class="header-anchor" href="#问题-15" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，从 Products 表中检索产品名称（prod_name）和描述（prod_desc），仅返回描述中包含 toy 一词的产品名称</p>
<h3 id="示例结果-7" tabindex="-1"><a class="header-anchor" href="#示例结果-7" aria-hidden="true">#</a> 示例结果</h3>
<p>返回产品名称和产品描述</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>prod_desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>c0019</td>
<td>gucci toy</td>
</tr>
<tr>
<td>d0019</td>
<td>lego toy</td>
</tr>
</tbody>
</table>
<h3 id="示例-15" tabindex="-1"><a class="header-anchor" href="#示例-15" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_desc<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0011'</span><span class="token punctuation">,</span><span class="token string">'usb'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0019'</span><span class="token punctuation">,</span><span class="token string">'iphone13'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token string">'gucci t-shirts'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'c0019'</span><span class="token punctuation">,</span><span class="token string">'gucci toy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'d0019'</span><span class="token punctuation">,</span><span class="token string">'lego toy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-15" tabindex="-1"><a class="header-anchor" href="#解答-15" aria-hidden="true">#</a> 解答</h3>
<p>模糊查询，主要产品描述中含有 <code v-pre>toy</code> 一词，就需要返回这时候需要用到模糊查询关键字 <code v-pre>LIKE</code> 然后是通配符，题目中并没有明确说明 <code v-pre>toy</code> 前后包含多少个字符，所以用 <code v-pre>%</code>。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_desc <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_desc <span class="token operator">LIKE</span> <span class="token string">'%toy%'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql17-检索产品名称和描述-二" tabindex="-1"><a class="header-anchor" href="#sql17-检索产品名称和描述-二" aria-hidden="true">#</a> SQL17 检索产品名称和描述（二）</h2>
<h3 id="描述-16" tabindex="-1"><a class="header-anchor" href="#描述-16" aria-hidden="true">#</a> 描述</h3>
<p>Products 表</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>prod_desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0011</td>
<td>usb</td>
</tr>
<tr>
<td>a0019</td>
<td>iphone13</td>
</tr>
<tr>
<td>b0019</td>
<td>gucci t-shirts</td>
</tr>
<tr>
<td>c0019</td>
<td>gucci toy</td>
</tr>
<tr>
<td>d0019</td>
<td>lego toy</td>
</tr>
</tbody>
</table>
<h3 id="问题-16" tabindex="-1"><a class="header-anchor" href="#问题-16" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，从 Products 表中检索产品名称（prod_name）和描述（prod_desc），仅返回描述中未出现 toy 一词的产品，最后按”产品名称“对结果进行排序。</p>
<h3 id="示例结果-8" tabindex="-1"><a class="header-anchor" href="#示例结果-8" aria-hidden="true">#</a> 示例结果</h3>
<p>返回产品名称和产品描述</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>prod_desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0011</td>
<td>usb</td>
</tr>
<tr>
<td>a0019</td>
<td>iphone13</td>
</tr>
<tr>
<td>b0019</td>
<td>gucci t-shirts</td>
</tr>
</tbody>
</table>
<h3 id="示例-16" tabindex="-1"><a class="header-anchor" href="#示例-16" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_desc<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0011'</span><span class="token punctuation">,</span><span class="token string">'usb'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0019'</span><span class="token punctuation">,</span><span class="token string">'iphone13'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token string">'gucci t-shirts'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'c0019'</span><span class="token punctuation">,</span><span class="token string">'gucci toy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'d0019'</span><span class="token punctuation">,</span><span class="token string">'lego toy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-16" tabindex="-1"><a class="header-anchor" href="#解答-16" aria-hidden="true">#</a> 解答</h3>
<p>这题就是 16 题的反面，那我们只要对 16 的查询语句进行取反即可，此时添加一个关键字 <code v-pre>NOT</code> 即可。此外，还需要按“产品名称”对结果排序，使用关键字 <code v-pre>ORDER BY</code> 即可。但是需要注意 <code v-pre>WHERE</code> 和 <code v-pre>ORDER BY</code> 关键字的先后顺序。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_desc <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_desc <span class="token operator">NOT</span> <span class="token operator">LIKE</span> <span class="token string">'%toy%'</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql18-检索产品名称和描述-三" tabindex="-1"><a class="header-anchor" href="#sql18-检索产品名称和描述-三" aria-hidden="true">#</a> SQL18 检索产品名称和描述（三）</h2>
<h3 id="描述-17" tabindex="-1"><a class="header-anchor" href="#描述-17" aria-hidden="true">#</a> 描述</h3>
<p>Products 表</p>
<h3 id="问题-17" tabindex="-1"><a class="header-anchor" href="#问题-17" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，从 Products 表中检索产品名称（prod_name）和描述（prod_desc），仅返回描述中同时出现 toy 和 carrots 的产品。有好几种方法可以执行此操作，但对于这个挑战题，请使用 AND 和两个 LIKE 比较。</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>prod_desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0011</td>
<td>usb</td>
</tr>
<tr>
<td>a0019</td>
<td>iphone13</td>
</tr>
<tr>
<td>b0019</td>
<td>gucci t-shirts</td>
</tr>
<tr>
<td>c0019</td>
<td>gucci toy</td>
</tr>
<tr>
<td>d0019</td>
<td>lego carrots toy</td>
</tr>
</tbody>
</table>
<h3 id="示例结果-9" tabindex="-1"><a class="header-anchor" href="#示例结果-9" aria-hidden="true">#</a> 示例结果</h3>
<p>返回产品名称和产品描述</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>prod_desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>d0019</td>
<td>lego carrots toy</td>
</tr>
</tbody>
</table>
<h3 id="示例-17" tabindex="-1"><a class="header-anchor" href="#示例-17" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_desc<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0011'</span><span class="token punctuation">,</span><span class="token string">'usb'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0019'</span><span class="token punctuation">,</span><span class="token string">'iphone13'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token string">'gucci t-shirts'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'c0019'</span><span class="token punctuation">,</span><span class="token string">'gucci toy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'d0019'</span><span class="token punctuation">,</span><span class="token string">'lego carrots toy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-17" tabindex="-1"><a class="header-anchor" href="#解答-17" aria-hidden="true">#</a> 解答</h3>
<p>题目中明确要求使用 <code v-pre>LIKE</code> 和 <code v-pre>AND</code> 关键字，那么可以将条件拆分为两个模糊查询，一个是描述中含有 <code v-pre>toy</code> 的产品，一个是描述中含有 <code v-pre>carrots</code> 的产品，然后利用关键字 <code v-pre>AND</code> 将两个条件串联就可以了。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_desc <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_desc <span class="token operator">LIKE</span> <span class="token string">'%toy%'</span> <span class="token operator">AND</span> prod_desc <span class="token operator">LIKE</span> <span class="token string">'%carrots%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql19-检索产品名称和描述-四" tabindex="-1"><a class="header-anchor" href="#sql19-检索产品名称和描述-四" aria-hidden="true">#</a> SQL19 检索产品名称和描述（四）</h2>
<h3 id="描述-18" tabindex="-1"><a class="header-anchor" href="#描述-18" aria-hidden="true">#</a> 描述</h3>
<p>Products 表</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>prod_desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0011</td>
<td>usb</td>
</tr>
<tr>
<td>a0019</td>
<td>iphone13</td>
</tr>
<tr>
<td>b0019</td>
<td>gucci t-shirts</td>
</tr>
<tr>
<td>c0019</td>
<td>gucci toy</td>
</tr>
<tr>
<td>d0019</td>
<td>lego toy carrots</td>
</tr>
</tbody>
</table>
<h3 id="问题-18" tabindex="-1"><a class="header-anchor" href="#问题-18" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，从 Products 表中检索产品名称（prod_name）和描述（prod_desc），仅返回在描述中以先后顺序同时出现 toy 和 carrots 的产品。提示：只需要用带有三个 % 符号的 LIKE 即可。</p>
<h3 id="示例结果-10" tabindex="-1"><a class="header-anchor" href="#示例结果-10" aria-hidden="true">#</a> 示例结果</h3>
<p>返回产品名称和产品描述</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>prod_desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>d0019</td>
<td>lego toy carrots</td>
</tr>
</tbody>
</table>
<h3 id="示例-18" tabindex="-1"><a class="header-anchor" href="#示例-18" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_desc<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0011'</span><span class="token punctuation">,</span><span class="token string">'usb'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0019'</span><span class="token punctuation">,</span><span class="token string">'iphone13'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token string">'gucci t-shirts'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'c0019'</span><span class="token punctuation">,</span><span class="token string">'gucci toy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'d0019'</span><span class="token punctuation">,</span><span class="token string">'lego toy carrots '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-18" tabindex="-1"><a class="header-anchor" href="#解答-18" aria-hidden="true">#</a> 解答</h3>
<p>题目中已经进行了提示，要查询产品描述中以先后顺序同时出现 <code v-pre>toy</code> 和 <code v-pre>carrots</code> 的产品，但没有说他们两者之间存在的字符以及 <code v-pre>toy</code> 前面和 <code v-pre>carrots</code> 后边所包含的字符，那么需要使用通配符 <code v-pre>%</code> ，得到最终的结果  <code v-pre>%toy%carrots%</code>。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_desc <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_desc <span class="token operator">LIKE</span> <span class="token string">'%toy%carrots%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql20-别名" tabindex="-1"><a class="header-anchor" href="#sql20-别名" aria-hidden="true">#</a> SQL20 别名</h2>
<h3 id="描述-19" tabindex="-1"><a class="header-anchor" href="#描述-19" aria-hidden="true">#</a> 描述</h3>
<p>别名的常见用法是在检索出的结果中重命名表的列字段（为了符合特定的报表要求或客户需求）。有表 Vendors 代表供应商信息，vend_id 供应商 id、vend_name 供应商名称、vend_address 供应商地址、vend_city 供应商城市。</p>
<table>
<thead>
<tr>
<th>vend_id</th>
<th>vend_name</th>
<th>vend_address</th>
<th>vend_city</th>
</tr>
</thead>
<tbody>
<tr>
<td>a001</td>
<td>tencent cloud</td>
<td>address1</td>
<td>shenzhen</td>
</tr>
<tr>
<td>a002</td>
<td>huawei cloud</td>
<td>address2</td>
<td>dongguan</td>
</tr>
<tr>
<td>a003</td>
<td>aliyun cloud</td>
<td>address3</td>
<td>hangzhou</td>
</tr>
<tr>
<td>a003</td>
<td>netease cloud</td>
<td>address4</td>
<td>guangzhou</td>
</tr>
</tbody>
</table>
<h3 id="问题-19" tabindex="-1"><a class="header-anchor" href="#问题-19" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，从 Vendors 表中检索 vend_id、vend_name、vend_address 和 vend_city，将 vend_name 重命名为 vname，将 vend_city 重命名为 vcity，将 vend_address 重命名为 vaddress，按供应商名称对结果进行升序排序。</p>
<h3 id="示例结果-11" tabindex="-1"><a class="header-anchor" href="#示例结果-11" aria-hidden="true">#</a> 示例结果</h3>
<p>返回 vend_id 供应商 id、vname 供应商名称、vaddress 供应商地址、vcity 供应商城市。</p>
<table>
<thead>
<tr>
<th>vend_id</th>
<th>vname</th>
<th>vaddress</th>
<th>vcity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a003</td>
<td>aliyun cloud</td>
<td>address3</td>
<td>hangzhou</td>
</tr>
<tr>
<td>a002</td>
<td>huawei cloud</td>
<td>address2</td>
<td>dongguan</td>
</tr>
<tr>
<td>a003</td>
<td>netease cloud</td>
<td>address4</td>
<td>guangzhou</td>
</tr>
<tr>
<td>a001</td>
<td>tencent cloud</td>
<td>address1</td>
<td>shenzhen</td>
</tr>
</tbody>
</table>
<h3 id="示例-19" tabindex="-1"><a class="header-anchor" href="#示例-19" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'供应商id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'供应商名称'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_address<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'供应商地址'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_city<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'供应商城市'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a001'</span><span class="token punctuation">,</span><span class="token string">'tencent cloud'</span><span class="token punctuation">,</span><span class="token string">'address1'</span><span class="token punctuation">,</span><span class="token string">'shenzhen'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a002'</span><span class="token punctuation">,</span><span class="token string">'huawei cloud'</span><span class="token punctuation">,</span><span class="token string">'address2'</span><span class="token punctuation">,</span><span class="token string">'dongguan'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a003'</span><span class="token punctuation">,</span><span class="token string">'aliyun cloud'</span><span class="token punctuation">,</span><span class="token string">'address3'</span><span class="token punctuation">,</span><span class="token string">'alibaba'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-19" tabindex="-1"><a class="header-anchor" href="#解答-19" aria-hidden="true">#</a> 解答</h3>
<p>SQL 中，要对列取别名，需要用到关键字 <code v-pre>AS</code>，使用格式如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>列名 <span class="token keyword">AS</span> 别名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过对题目中的三个字段取别名，然后使用 <code v-pre>ORDER BY</code> 关键字，按照供应商名称列对结果进行升序排序。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> vend_id<span class="token punctuation">,</span> vend_name <span class="token keyword">AS</span> vname<span class="token punctuation">,</span> vend_address <span class="token keyword">AS</span> vaddress<span class="token punctuation">,</span> vend_city <span class="token keyword">AS</span> vcity <span class="token keyword">FROM</span> Vendors <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，<code v-pre>AS</code> 其实可要可不要，你也可以写成以下的方式，在列名之后跟上别名即可，实现的效果和上面语句一致。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> vend_id<span class="token punctuation">,</span> vend_name vname<span class="token punctuation">,</span> vend_address vaddress<span class="token punctuation">,</span> vend_city vcity <span class="token keyword">FROM</span> Vendors <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql21-打折" tabindex="-1"><a class="header-anchor" href="#sql21-打折" aria-hidden="true">#</a> SQL21 打折</h2>
<h3 id="描述-20" tabindex="-1"><a class="header-anchor" href="#描述-20" aria-hidden="true">#</a> 描述</h3>
<p>我们的示例商店正在进行打折促销，所有产品均降价 10%。Products 表包含 prod_id产品 id、prod_price 产品价格</p>
<h3 id="问题-20" tabindex="-1"><a class="header-anchor" href="#问题-20" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL语句，从 Products 表中返回 prod_id、prod_price 和 sale_price。sale_price 是一个包含促销价格的计算字段。提示：可以乘以 0.9，得到原价的 90%（即 10%的折扣）</p>
<h3 id="示例结果-12" tabindex="-1"><a class="header-anchor" href="#示例结果-12" aria-hidden="true">#</a> 示例结果</h3>
<p>返回产品 id prod_id、产品价格 prod_price、销售价格 sale_price</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>prod_price</th>
<th>sale_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0011</td>
<td>9.49</td>
<td>8.541</td>
</tr>
<tr>
<td>a0019</td>
<td>600</td>
<td>540</td>
</tr>
<tr>
<td>b0019</td>
<td>1000</td>
<td>900</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-2" tabindex="-1"><a class="header-anchor" href="#示例解析-2" aria-hidden="true">#</a> 示例解析</h3>
<p>sale_price 的价格是 prod_price 的 90%</p>
<h3 id="示例-20" tabindex="-1"><a class="header-anchor" href="#示例-20" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_price<span class="token punctuation">`</span></span> <span class="token keyword">DOUBLE</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品价格'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0011'</span><span class="token punctuation">,</span><span class="token number">9.49</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0019'</span><span class="token punctuation">,</span><span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-20" tabindex="-1"><a class="header-anchor" href="#解答-20" aria-hidden="true">#</a> 解答</h3>
<p>此题考察了取别名以及如何在 SQL 中直接使用算数运算，<code v-pre>sale_price</code> 不是表中的数据，而是通过 <code v-pre>prod_price</code> 而来，所以需要通过关键字 <code v-pre>AS</code> 来进行取别名，最终的实现语句如下。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> prod_price<span class="token punctuation">,</span> prod_price <span class="token operator">*</span> <span class="token number">0.9</span> <span class="token keyword">AS</span> sale_price <span class="token keyword">FROM</span> Products<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql22-顾客登录名" tabindex="-1"><a class="header-anchor" href="#sql22-顾客登录名" aria-hidden="true">#</a> SQL22 顾客登录名</h2>
<h3 id="描述-21" tabindex="-1"><a class="header-anchor" href="#描述-21" aria-hidden="true">#</a> 描述</h3>
<p>我们的商店已经上线了，正在创建顾客账户。所有用户都需要登录名，默认登录名是其名称和所在城市的组合。</p>
<p>给出 Customers 表 如下：</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_name</th>
<th>cust_contact</th>
<th>cust_city</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>Andy Li</td>
<td>Andy Li</td>
<td>Oak Park</td>
</tr>
<tr>
<td>a2</td>
<td>Ben Liu</td>
<td>Ben Liu</td>
<td>Oak Park</td>
</tr>
<tr>
<td>a3</td>
<td>Tony Dai</td>
<td>Tony Dai</td>
<td>Oak Park</td>
</tr>
<tr>
<td>a4</td>
<td>Tom Chen</td>
<td>Tom Chen</td>
<td>Oak Park</td>
</tr>
<tr>
<td>a5</td>
<td>An Li</td>
<td>An Li</td>
<td>Oak Park</td>
</tr>
<tr>
<td>a6</td>
<td>Lee Chen</td>
<td>Lee Chen</td>
<td>Oak Park</td>
</tr>
<tr>
<td>a7</td>
<td>Hex Liu</td>
<td>Hex Liu</td>
<td>Oak Park</td>
</tr>
</tbody>
</table>
<h3 id="问题-21" tabindex="-1"><a class="header-anchor" href="#问题-21" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，返回顾客 ID（cust_id）、顾客名称（cust_name）和登录名（user_login），其中登录名全部为大写字母，并由顾客联系人的前两个字符（cust_contact）和其所在城市的前三个字符（cust_city）组成。提示：需要使用函数、拼接和别名。</p>
<h3 id="示例结果-13" tabindex="-1"><a class="header-anchor" href="#示例结果-13" aria-hidden="true">#</a> 示例结果</h3>
<p>返回顾客 id cust_id，顾客名称 cust_name，顾客登录名 user_login</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_name</th>
<th>user_login</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>Andy Li</td>
<td>ANOAK</td>
</tr>
<tr>
<td>a2</td>
<td>Ben Liu</td>
<td>BEOAK</td>
</tr>
<tr>
<td>a3</td>
<td>Tony Dai</td>
<td>TOOAK</td>
</tr>
<tr>
<td>a4</td>
<td>Tom Chen</td>
<td>TOOAK</td>
</tr>
<tr>
<td>a5</td>
<td>An Li</td>
<td>ANOAK</td>
</tr>
<tr>
<td>a6</td>
<td>Lee Chen</td>
<td>LEOAK</td>
</tr>
<tr>
<td>a7</td>
<td>Hex Liu</td>
<td>HEOAK</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-3" tabindex="-1"><a class="header-anchor" href="#示例解析-3" aria-hidden="true">#</a> 示例解析</h3>
<p>例如，登录名是 ANOAK（Andy Li，居住在 Oak Park）</p>
<h3 id="示例-21" tabindex="-1"><a class="header-anchor" href="#示例-21" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户id'</span><span class="token punctuation">,</span>
	cust_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户姓名'</span><span class="token punctuation">,</span>
	cust_contact <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户联系人'</span><span class="token punctuation">,</span>
	cust_city <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户城市'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'Andy Li'</span><span class="token punctuation">,</span><span class="token string">'Andy Li'</span><span class="token punctuation">,</span><span class="token string">'Oak Park'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'Ben Liu'</span><span class="token punctuation">,</span><span class="token string">'Ben Liu'</span><span class="token punctuation">,</span><span class="token string">'Oak Park'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a3'</span><span class="token punctuation">,</span><span class="token string">'Tony Dai'</span><span class="token punctuation">,</span><span class="token string">'Tony Dai'</span><span class="token punctuation">,</span><span class="token string">'Oak Park'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'Tom Chen'</span><span class="token punctuation">,</span><span class="token string">'Tom Chen'</span><span class="token punctuation">,</span><span class="token string">'Oak Park'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token string">'An Li'</span><span class="token punctuation">,</span><span class="token string">'An Li'</span><span class="token punctuation">,</span><span class="token string">'Oak Park'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a6'</span><span class="token punctuation">,</span><span class="token string">'Lee Chen'</span><span class="token punctuation">,</span><span class="token string">'Lee Chen'</span><span class="token punctuation">,</span><span class="token string">'Oak Park'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token string">'Hex Liu'</span><span class="token punctuation">,</span><span class="token string">'Hex Liu'</span><span class="token punctuation">,</span><span class="token string">'Oak Park'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-21" tabindex="-1"><a class="header-anchor" href="#解答-21" aria-hidden="true">#</a> 解答</h3>
<p>根据题意以及示例结果，可以看到登录名全是大写，所以需要用到函数 <code v-pre>upper()</code>，然后需要将顾客联系人前两个字符和所在城市的前三个字符相拼接，则需要用到函数 <code v-pre>concat()</code>，再接着就是需要从 <code v-pre>cust_name</code> 和 <code v-pre>cust_city</code> 中截取字符串，则需要用到 <code v-pre>substring()</code>，最后则是通过将字符串拼接转换之后取别名为 <code v-pre>user_login</code>，需要用到关键字 <code v-pre>AS</code>。以上提到的三个函数用法如下：</p>
<ul>
<li><code v-pre>upper(字符串)</code>：将字符串中所有字符转换为大写。</li>
<li><code v-pre>substring(字符串, 起始位置, 截取的字符数)</code>，需要注意的是起始位置是从 1 开始的。</li>
<li><code v-pre>concat(字符串 1, 字符串 2, 字符串 3, …)</code></li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_id<span class="token punctuation">,</span> cust_name<span class="token punctuation">,</span> upper<span class="token punctuation">(</span>concat<span class="token punctuation">(</span>substring<span class="token punctuation">(</span>cust_name<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> substring<span class="token punctuation">(</span>cust_city<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> user_login <span class="token keyword">FROM</span> Customers<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql23-返回-2020-年-1-月的所有订单的订单号和订单日期" tabindex="-1"><a class="header-anchor" href="#sql23-返回-2020-年-1-月的所有订单的订单号和订单日期" aria-hidden="true">#</a> SQL23 返回 2020 年 1 月的所有订单的订单号和订单日期</h2>
<h3 id="描述-22" tabindex="-1"><a class="header-anchor" href="#描述-22" aria-hidden="true">#</a> 描述</h3>
<p>Orders 订单表</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>order_date</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>2020-01-01 00:00:00</td>
</tr>
<tr>
<td>a0002</td>
<td>2020-01-02 00:00:00</td>
</tr>
<tr>
<td>a0003</td>
<td>2020-01-01 12:00:00</td>
</tr>
<tr>
<td>a0004</td>
<td>2020-02-01 00:00:00</td>
</tr>
<tr>
<td>a0005</td>
<td>2020-03-01 00:00:00</td>
</tr>
</tbody>
</table>
<h3 id="问题-22" tabindex="-1"><a class="header-anchor" href="#问题-22" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，返回 2020 年 1 月的所有订单的订单号（order_num）和订单日期（order_date），并按订单日期升序排序</p>
<p>【示例结果】</p>
<p>返回订单号 order_num，和 order_date 订单时间</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>order_date</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>2020-01-01 00:00:00</td>
</tr>
<tr>
<td>a0003</td>
<td>2020-01-01 12:00:00</td>
</tr>
<tr>
<td>a0002</td>
<td>2020-01-02 00:00:00</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-4" tabindex="-1"><a class="header-anchor" href="#示例解析-4" aria-hidden="true">#</a> 示例解析</h3>
<p>a0001、a0002、a0003 时间属于 2020 年 1 月</p>
<h3 id="示例-22" tabindex="-1"><a class="header-anchor" href="#示例-22" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'订单号'</span><span class="token punctuation">,</span>
	order_date <span class="token keyword">TIMESTAMP</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'订单日期'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'2020-01-01 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'2020-01-02 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'2020-01-01 12:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0004'</span><span class="token punctuation">,</span><span class="token string">'2020-02-01 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0005'</span><span class="token punctuation">,</span><span class="token string">'2020-03-01 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-22" tabindex="-1"><a class="header-anchor" href="#解答-22" aria-hidden="true">#</a> 解答</h3>
<p>其实我们依然可以将本题看做模糊查询，只要订单日期满足对应条件即可，可以使用关键字 <code v-pre>WHERE … LIKE …</code> 来实现。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> order_num<span class="token punctuation">,</span> order_date <span class="token keyword">FROM</span> Orders <span class="token keyword">WHERE</span> order_date <span class="token operator">LIKE</span> <span class="token string">'2020-01%'</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> order_date<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，SQL 中也提供了对于日期的操作函数 <code v-pre>date_format()</code>，用于返回日期的一部分。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> order_num<span class="token punctuation">,</span> order_date <span class="token keyword">FROM</span> Orders <span class="token keyword">WHERE</span> date_format<span class="token punctuation">(</span>order_date<span class="token punctuation">,</span> <span class="token string">'%Y-%m'</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">'2020-01'</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> order_date<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外，我们还可以单独提取出日期中的年份和月份，然后将两个条件串联，筛选出同时满足两个条件的数据。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> order_num<span class="token punctuation">,</span> order_date <span class="token keyword">FROM</span> Orders <span class="token keyword">WHERE</span> <span class="token keyword">year</span><span class="token punctuation">(</span>order_date<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2020</span> <span class="token operator">AND</span> <span class="token keyword">month</span><span class="token punctuation">(</span>order_date<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> order_date<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql24-确定已售出产品的总数" tabindex="-1"><a class="header-anchor" href="#sql24-确定已售出产品的总数" aria-hidden="true">#</a> SQL24 确定已售出产品的总数</h2>
<h3 id="描述-23" tabindex="-1"><a class="header-anchor" href="#描述-23" aria-hidden="true">#</a> 描述</h3>
<p>OrderItems 表代表售出的产品，quantity 代表售出商品数量。</p>
<table>
<thead>
<tr>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>10</td>
</tr>
<tr>
<td>100</td>
</tr>
<tr>
<td>1000</td>
</tr>
<tr>
<td>10001</td>
</tr>
<tr>
<td>2</td>
</tr>
<tr>
<td>15</td>
</tr>
</tbody>
</table>
<h3 id="问题-23" tabindex="-1"><a class="header-anchor" href="#问题-23" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，确定已售出产品的总数。</p>
<h3 id="示例结果-14" tabindex="-1"><a class="header-anchor" href="#示例结果-14" aria-hidden="true">#</a> 示例结果</h3>
<p>返回 items_ordered 列名，表示已售出商品的总数。</p>
<table>
<thead>
<tr>
<th>items_ordered</th>
</tr>
</thead>
<tbody>
<tr>
<td>11128</td>
</tr>
</tbody>
</table>
<h3 id="示例-23" tabindex="-1"><a class="header-anchor" href="#示例-23" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	quantity <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">10001</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-23" tabindex="-1"><a class="header-anchor" href="#解答-23" aria-hidden="true">#</a> 解答</h3>
<p>考察求和函数以及取别名两个知识点，取别名需要关键字 <code v-pre>AS</code>，而且可要可不要。</p>
<p>而求和函数则是 <code v-pre>SUM(列名)</code> ，它会统计列中所有记录的综合。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span> items_ordered <span class="token keyword">FROM</span> OrderItems<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql25-确定已售出产品项-br01-的总数" tabindex="-1"><a class="header-anchor" href="#sql25-确定已售出产品项-br01-的总数" aria-hidden="true">#</a> SQL25 确定已售出产品项 BR01 的总数</h2>
<h3 id="描述-24" tabindex="-1"><a class="header-anchor" href="#描述-24" aria-hidden="true">#</a> 描述</h3>
<p>OrderItems 表代表售出的产品，quantity 代表售出商品数量，产品项为 prod_id。</p>
<table>
<thead>
<tr>
<th>quantity</th>
<th>prod_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>10</td>
<td>AR01</td>
</tr>
<tr>
<td>100</td>
<td>AR10</td>
</tr>
<tr>
<td>1000</td>
<td>BR01</td>
</tr>
<tr>
<td>10001</td>
<td>BR010</td>
</tr>
</tbody>
</table>
<h3 id="问题-24" tabindex="-1"><a class="header-anchor" href="#问题-24" aria-hidden="true">#</a> 问题</h3>
<p>修改创建的语句，确定已售出产品项（prod_id）为 &quot;BR01&quot; 的总数。</p>
<h3 id="示例结果-15" tabindex="-1"><a class="header-anchor" href="#示例结果-15" aria-hidden="true">#</a> 示例结果</h3>
<p>返回商品项已订购订单数</p>
<table>
<thead>
<tr>
<th>items_ordered</th>
</tr>
</thead>
<tbody>
<tr>
<td>1000</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-5" tabindex="-1"><a class="header-anchor" href="#示例解析-5" aria-hidden="true">#</a> 示例解析</h3>
<p>已订购商品 BR01 的数量 quantity 为 1000。</p>
<h3 id="示例-24" tabindex="-1"><a class="header-anchor" href="#示例-24" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	quantity <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span><span class="token punctuation">,</span>
	prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品项'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">'AR01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token string">'AR10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token string">'BR01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">10001</span><span class="token punctuation">,</span><span class="token string">'BR010'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-24" tabindex="-1"><a class="header-anchor" href="#解答-24" aria-hidden="true">#</a> 解答</h3>
<p>主要考察的知识点：</p>
<ul>
<li>求和函数：<code v-pre>SUM()</code></li>
<li>取别名：<code v-pre>AS</code></li>
<li>条件查询：<code v-pre>WHERE</code></li>
</ul>
<p>需要注意的是 SQL 语句中关键字的先后顺序，否则可能会导致语句出错。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span> <span class="token keyword">AS</span> items_ordered <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> prod_id <span class="token operator">=</span> <span class="token string">'BR01'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql26-确定-products-表中价格不超过-10-美元的最贵产品的价格" tabindex="-1"><a class="header-anchor" href="#sql26-确定-products-表中价格不超过-10-美元的最贵产品的价格" aria-hidden="true">#</a> SQL26 确定 Products 表中价格不超过 10 美元的最贵产品的价格</h2>
<h3 id="描述-25" tabindex="-1"><a class="header-anchor" href="#描述-25" aria-hidden="true">#</a> 描述</h3>
<p>Products 表</p>
<table>
<thead>
<tr>
<th>prod_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>9.49</td>
</tr>
<tr>
<td>600</td>
</tr>
<tr>
<td>1000</td>
</tr>
</tbody>
</table>
<h3 id="问题-25" tabindex="-1"><a class="header-anchor" href="#问题-25" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，确定 Products 表中价格不超过 10 美元的最贵产品的价格（prod_price）。将计算所得的字段命名为 max_price。</p>
<h3 id="示例结果-16" tabindex="-1"><a class="header-anchor" href="#示例结果-16" aria-hidden="true">#</a> 示例结果</h3>
<p>返回 max_price</p>
<table>
<thead>
<tr>
<th>max_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>9.49</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-6" tabindex="-1"><a class="header-anchor" href="#示例解析-6" aria-hidden="true">#</a> 示例解析</h3>
<p>返回十元以下最高价格 max_price。</p>
<h3 id="示例-25" tabindex="-1"><a class="header-anchor" href="#示例-25" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_price<span class="token punctuation">`</span></span> <span class="token keyword">DOUBLE</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品价格'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">9.49</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-25" tabindex="-1"><a class="header-anchor" href="#解答-25" aria-hidden="true">#</a> 解答</h3>
<p>考察知识点：</p>
<ul>
<li><strong>条件查询</strong>：使用关键字 <code v-pre>WHERE</code>，将产品价格不超过 10 美元的产品筛选出来。</li>
<li><strong>MAX(列名)</strong>：找出列中的最大值。</li>
<li><strong>取别名</strong>：通过关键字 <code v-pre>AS</code> 将不超过 10 美元的产品中价格最高的记录筛选出来后重命名。</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>prod_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> max_price <span class="token keyword">FROM</span> Products <span class="token keyword">WHERE</span> prod_price <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql27-返回每个订单号各有多少行数" tabindex="-1"><a class="header-anchor" href="#sql27-返回每个订单号各有多少行数" aria-hidden="true">#</a> SQL27 返回每个订单号各有多少行数</h2>
<h3 id="描述-26" tabindex="-1"><a class="header-anchor" href="#描述-26" aria-hidden="true">#</a> 描述</h3>
<p>OrderItems 表包含每个订单的每个产品</p>
<table>
<thead>
<tr>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>a002</td>
</tr>
<tr>
<td>a002</td>
</tr>
<tr>
<td>a002</td>
</tr>
<tr>
<td>a004</td>
</tr>
<tr>
<td>a007</td>
</tr>
</tbody>
</table>
<h3 id="问题-26" tabindex="-1"><a class="header-anchor" href="#问题-26" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，返回每个订单号（order_num）各有多少行数（order_lines），并按 order_lines 对结果进行升序排序。</p>
<h3 id="示例结果-17" tabindex="-1"><a class="header-anchor" href="#示例结果-17" aria-hidden="true">#</a> 示例结果</h3>
<p>返回订单号 order_num 和对应订单号的行数 order_lines</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>order_lines</th>
</tr>
</thead>
<tbody>
<tr>
<td>a004</td>
<td>1</td>
</tr>
<tr>
<td>a007</td>
<td>1</td>
</tr>
<tr>
<td>a002</td>
<td>3</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-7" tabindex="-1"><a class="header-anchor" href="#示例解析-7" aria-hidden="true">#</a> 示例解析</h3>
<p>订单号 a002 有 3 行订单记录也是最多的订单号故排在最后一位返回，相同订单行数的订单无需过多处理。</p>
<h3 id="示例-26" tabindex="-1"><a class="header-anchor" href="#示例-26" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a002'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a002'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a002'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a004'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a007'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-26" tabindex="-1"><a class="header-anchor" href="#解答-26" aria-hidden="true">#</a> 解答</h3>
<p>考察知识点：</p>
<ul>
<li><code v-pre>COUNT(列名)</code>：返回指定列的值的数目。</li>
<li><code v-pre>AS</code>：取别名。</li>
<li><code v-pre>GROUP BY</code>：根据指定列或者表达式的值将行进行分组。</li>
<li><code v-pre>ORDER BY</code>：根据尾随的列名进行排序，<code v-pre>ASC</code> 表示正序，也是默认排序，<code v-pre>DESC</code> 表示倒序。</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> order_num<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>order_num<span class="token punctuation">)</span> <span class="token keyword">AS</span> order_lines <span class="token keyword">FROM</span> OrderItems <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> order_num <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> order_lines<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql28-每个供应商成本最低的产品" tabindex="-1"><a class="header-anchor" href="#sql28-每个供应商成本最低的产品" aria-hidden="true">#</a> SQL28 每个供应商成本最低的产品</h2>
<h3 id="描述-27" tabindex="-1"><a class="header-anchor" href="#描述-27" aria-hidden="true">#</a> 描述</h3>
<p>有Products表，含有字段prod_price代表产品价格，vend_id代表供应商id</p>
<table>
<thead>
<tr>
<th>vend_id</th>
<th>prod_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0011</td>
<td>100</td>
</tr>
<tr>
<td>a0019</td>
<td>0.1</td>
</tr>
<tr>
<td>b0019</td>
<td>1000</td>
</tr>
<tr>
<td>b0019</td>
<td>6980</td>
</tr>
<tr>
<td>b0019</td>
<td>20</td>
</tr>
</tbody>
</table>
<h3 id="问题-27" tabindex="-1"><a class="header-anchor" href="#问题-27" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，返回名为 cheapest_item 的字段，该字段包含每个供应商成本最低的产品（使用 Products 表中的 prod_price），然后从最低成本到最高成本对结果进行升序排序。</p>
<h3 id="示例结果-18" tabindex="-1"><a class="header-anchor" href="#示例结果-18" aria-hidden="true">#</a> 示例结果</h3>
<p>返回供应商 id vend_id 和对应供应商成本最低的产品 cheapest_item。</p>
<table>
<thead>
<tr>
<th>vend_id</th>
<th>cheapest_item</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0019</td>
<td>0.1</td>
</tr>
<tr>
<td>b0019</td>
<td>20</td>
</tr>
<tr>
<td>a0011</td>
<td>100</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-8" tabindex="-1"><a class="header-anchor" href="#示例解析-8" aria-hidden="true">#</a> 示例解析</h3>
<p>例如 b0019 成本最低的价格是 20，且最后根据成本价格排序返回依次是 a0019、b0019、a0011。</p>
<h3 id="示例-27" tabindex="-1"><a class="header-anchor" href="#示例-27" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>vend_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'供应商ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_price<span class="token punctuation">`</span></span> <span class="token keyword">DOUBLE</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品价格'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0011'</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0019'</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token number">6980</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'b0019'</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-27" tabindex="-1"><a class="header-anchor" href="#解答-27" aria-hidden="true">#</a> 解答</h3>
<p>要找出各个供应商中成本最低的产品，则需要通过关键字 <code v-pre>GROUP BY</code> 来进行分组，然后借助函数 <code v-pre>MIN()</code> 找出 <code v-pre>prod_price</code> 中最小的值，接着取别名为 <code v-pre>cheapest_item</code>，最后则是按照找出的各供应商中的成本最低产品 <code v-pre>cheapest_item</code> 利用关键字 <code v-pre>ORDER BY</code> 进行升序排序。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> vend_id<span class="token punctuation">,</span> <span class="token function">MIN</span><span class="token punctuation">(</span>prod_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> cheapest_item <span class="token keyword">FROM</span> Products <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> vend_id <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cheapest_item<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql29-返回订单数量总和不小于100的所有订单的订单号" tabindex="-1"><a class="header-anchor" href="#sql29-返回订单数量总和不小于100的所有订单的订单号" aria-hidden="true">#</a> SQL29 返回订单数量总和不小于100的所有订单的订单号</h2>
<h3 id="描述-28" tabindex="-1"><a class="header-anchor" href="#描述-28" aria-hidden="true">#</a> 描述</h3>
<p>OrderItems 代表订单商品表，包括：订单号order_num 和订单数量 quantity。</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>105</td>
</tr>
<tr>
<td>a2</td>
<td>1100</td>
</tr>
<tr>
<td>a2</td>
<td>200</td>
</tr>
<tr>
<td>a4</td>
<td>1121</td>
</tr>
<tr>
<td>a5</td>
<td>10</td>
</tr>
<tr>
<td>a2</td>
<td>19</td>
</tr>
<tr>
<td>a7</td>
<td>5</td>
</tr>
</tbody>
</table>
<h3 id="问题-28" tabindex="-1"><a class="header-anchor" href="#问题-28" aria-hidden="true">#</a> 问题</h3>
<p>请编写 SQL 语句，返回订单数量总和不小于 100 的所有订单号，最后结果按照订单号升序排序。</p>
<h3 id="示例结果-19" tabindex="-1"><a class="header-anchor" href="#示例结果-19" aria-hidden="true">#</a> 示例结果</h3>
<p>返回 order_num 订单号。</p>
<table>
<thead>
<tr>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
</tr>
<tr>
<td>a2</td>
</tr>
<tr>
<td>a4</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-9" tabindex="-1"><a class="header-anchor" href="#示例解析-9" aria-hidden="true">#</a> 示例解析</h3>
<p>订单号 a1、a2、a4 的 quantity 总和都大于等于 100，按顺序为 a1、a2、a4。</p>
<h3 id="示例-28" tabindex="-1"><a class="header-anchor" href="#示例-28" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
	quantity <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token number">105</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token number">1121</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-28" tabindex="-1"><a class="header-anchor" href="#解答-28" aria-hidden="true">#</a> 解答</h3>
<p>条件查询，只是此时不再是过滤指定的行，而是需要过滤分组，所以这个时候不能再使用关键字 <code v-pre>WHERE</code>，而是需要使用到关键字 <code v-pre>HAVING</code>，它通常是和关键字 <code v-pre>GROUP BY</code> 连用。另外需要注意的是各个关键字之间的先后顺序，先是 <code v-pre>GROUP BY</code>，紧接着是 <code v-pre>HAVING</code>，最后才是 <code v-pre>ORDER BY</code>。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> order_num <span class="token keyword">FROM</span> OrderItems <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> order_num <span class="token keyword">HAVING</span> <span class="token function">SUM</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">100</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> order_num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql30-计算总和" tabindex="-1"><a class="header-anchor" href="#sql30-计算总和" aria-hidden="true">#</a> SQL30 计算总和</h2>
<h3 id="描述-29" tabindex="-1"><a class="header-anchor" href="#描述-29" aria-hidden="true">#</a> 描述</h3>
<p>OrderItems表代表订单信息，包括字段：订单号 order_num 和 item_price 商品售出价格、quantity 商品数量。</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>item_price</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>10</td>
<td>105</td>
</tr>
<tr>
<td>a2</td>
<td>1</td>
<td>1100</td>
</tr>
<tr>
<td>a2</td>
<td>1</td>
<td>200</td>
</tr>
<tr>
<td>a4</td>
<td>2</td>
<td>1121</td>
</tr>
<tr>
<td>a5</td>
<td>5</td>
<td>10</td>
</tr>
<tr>
<td>a2</td>
<td>1</td>
<td>19</td>
</tr>
<tr>
<td>a7</td>
<td>7</td>
<td>5</td>
</tr>
</tbody>
</table>
<h3 id="问题-29" tabindex="-1"><a class="header-anchor" href="#问题-29" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，根据订单号聚合，返回订单总价不小于 1000 的所有订单号，最后的结果按订单号进行升序排序。</p>
<p>提示：总价 = item_price 乘以 quantity</p>
<h3 id="示例结果-20" tabindex="-1"><a class="header-anchor" href="#示例结果-20" aria-hidden="true">#</a> 示例结果</h3>
<table>
<thead>
<tr>
<th>order_num</th>
<th>total_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>1050</td>
</tr>
<tr>
<td>a2</td>
<td>1319</td>
</tr>
<tr>
<td>a4</td>
<td>2242</td>
</tr>
</tbody>
</table>
<h3 id="示例-29" tabindex="-1"><a class="header-anchor" href="#示例-29" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
	item_price <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'售出价格'</span><span class="token punctuation">,</span>
	quantity <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">105</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1121</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-29" tabindex="-1"><a class="header-anchor" href="#解答-29" aria-hidden="true">#</a> 解答</h3>
<p>以上几题都已经将知识点讲过了，这题只是综合运用，主要涉及如下：</p>
<ul>
<li><code v-pre>SUM()</code>：对同一产品的总价求和。</li>
<li><code v-pre>AS</code>：取别名。</li>
<li><code v-pre>GROUP BY</code>：按照列进行分组。</li>
<li><code v-pre>HAVING</code>：与 <code v-pre>GROUP BY</code> 联合使用从而实现条件过滤。</li>
<li><code v-pre>ORDER BY</code>：按列进行排序。</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> order_num<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>item_price <span class="token operator">*</span> quantity<span class="token punctuation">)</span> <span class="token keyword">AS</span> total_price <span class="token keyword">FROM</span> OrderItems <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> order_num <span class="token keyword">HAVING</span> total_price <span class="token operator">>=</span> <span class="token number">1000</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> order_num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql31-纠错3" tabindex="-1"><a class="header-anchor" href="#sql31-纠错3" aria-hidden="true">#</a> SQL31 纠错3</h2>
<h3 id="描述-30" tabindex="-1"><a class="header-anchor" href="#描述-30" aria-hidden="true">#</a> 描述</h3>
<p>OrderItems 表含有 order_num 订单号</p>
<table>
<thead>
<tr>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>a002</td>
</tr>
<tr>
<td>a002</td>
</tr>
<tr>
<td>a002</td>
</tr>
<tr>
<td>a004</td>
</tr>
<tr>
<td>a007</td>
</tr>
</tbody>
</table>
<h3 id="问题-30" tabindex="-1"><a class="header-anchor" href="#问题-30" aria-hidden="true">#</a> 问题</h3>
<p>将下面代码修改正确后执行</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> order_num<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> items 
<span class="token keyword">FROM</span> OrderItems 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> items 
<span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">3</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> items<span class="token punctuation">,</span> order_num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例结果-21" tabindex="-1"><a class="header-anchor" href="#示例结果-21" aria-hidden="true">#</a> 示例结果</h3>
<p>返回订单号 order_num 和出现的次数 items</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>items</th>
</tr>
</thead>
<tbody>
<tr>
<td>a002</td>
<td>3</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-10" tabindex="-1"><a class="header-anchor" href="#示例解析-10" aria-hidden="true">#</a> 示例解析</h3>
<p>由于订单号 a002 出现了三次，所以返回3</p>
<h3 id="示例-30" tabindex="-1"><a class="header-anchor" href="#示例-30" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a002'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a002'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a002'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a004'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a007'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-30" tabindex="-1"><a class="header-anchor" href="#解答-30" aria-hidden="true">#</a> 解答</h3>
<p>最主要的错误在于 <code v-pre>GROUP BY</code> 后边跟着的是统计结果，其次在于 <code v-pre>HAVING</code> 后边的 <code v-pre>COUNT()</code> 其实是可以不用再次计算的，可以直接利用已经统计出的结果。第二处不算错误，但是改了之后能提高 SQL 语句所执行的效率。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> order_num<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> items <span class="token keyword">FROM</span> OrderItems <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> order_num <span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">3</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> items<span class="token punctuation">,</span> order_num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> order_num<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> items <span class="token keyword">FROM</span> OrderItems <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> order_num <span class="token keyword">HAVING</span> items <span class="token operator">>=</span> <span class="token number">3</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> items<span class="token punctuation">,</span> order_num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql32-返回购买价格为-10-美元或以上产品的顾客列表" tabindex="-1"><a class="header-anchor" href="#sql32-返回购买价格为-10-美元或以上产品的顾客列表" aria-hidden="true">#</a> SQL32 返回购买价格为 10 美元或以上产品的顾客列表</h2>
<h3 id="描述-31" tabindex="-1"><a class="header-anchor" href="#描述-31" aria-hidden="true">#</a> 描述</h3>
<p>OrderItems 表示订单商品表，含有字段订单号：order_num、订单价格：item_price；Orders 表代表订单信息表，含有顾客 id：cust_id 和订单号：order_num</p>
<p>OrderItems 表</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>item_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>10</td>
</tr>
<tr>
<td>a2</td>
<td>1</td>
</tr>
<tr>
<td>a2</td>
<td>1</td>
</tr>
<tr>
<td>a4</td>
<td>2</td>
</tr>
<tr>
<td>a5</td>
<td>5</td>
</tr>
<tr>
<td>a2</td>
<td>1</td>
</tr>
<tr>
<td>a7</td>
<td>7</td>
</tr>
</tbody>
</table>
<p>Orders表</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>cust_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>cust10</td>
</tr>
<tr>
<td>a2</td>
<td>cust1</td>
</tr>
<tr>
<td>a2</td>
<td>cust1</td>
</tr>
<tr>
<td>a4</td>
<td>cust2</td>
</tr>
<tr>
<td>a5</td>
<td>cust5</td>
</tr>
<tr>
<td>a2</td>
<td>cust1</td>
</tr>
<tr>
<td>a7</td>
<td>cust7</td>
</tr>
</tbody>
</table>
<h3 id="问题-31" tabindex="-1"><a class="header-anchor" href="#问题-31" aria-hidden="true">#</a> 问题</h3>
<p>使用子查询，返回购买价格为 10 美元或以上产品的顾客列表，结果无需排序。<br>
注意：你需要使用 OrderItems 表查找匹配的订单号（order_num），然后使用Order 表检索这些匹配订单的顾客 ID（cust_id）。</p>
<h3 id="示例结果-22" tabindex="-1"><a class="header-anchor" href="#示例结果-22" aria-hidden="true">#</a> 示例结果</h3>
<p>返回顾客 id cust_id</p>
<table>
<thead>
<tr>
<th>cust_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust10</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-11" tabindex="-1"><a class="header-anchor" href="#示例解析-11" aria-hidden="true">#</a> 示例解析</h3>
<p>cust10 顾客下单的订单为 a1，a1 的售出价格大于等于 10</p>
<h3 id="示例-31" tabindex="-1"><a class="header-anchor" href="#示例-31" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
    item_price <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'售出价格'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
    cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'cust10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'cust2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token string">'cust5'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token string">'cust7'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-31" tabindex="-1"><a class="header-anchor" href="#解答-31" aria-hidden="true">#</a> 解答</h3>
<p>题目已经提示使用子查询，则先用最简单的条件查询从 <code v-pre>OrderItems</code> 表中找出订单价格不低于 10 美元的订单，接着从筛选出的结果中再次筛选出对应订单的顾客 id，需要注意的一点是对顾客 id 去重，需要使用到关键字 <code v-pre>DISTINCT</code>。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> cust_id <span class="token keyword">FROM</span> Orders <span class="token keyword">WHERE</span> order_num <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> order_num <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> item_price <span class="token operator">>=</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql33-确定哪些订单购买了-prod-id-为-br01-的产品-一" tabindex="-1"><a class="header-anchor" href="#sql33-确定哪些订单购买了-prod-id-为-br01-的产品-一" aria-hidden="true">#</a> SQL33 确定哪些订单购买了 prod_id 为 BR01 的产品（一）</h2>
<h3 id="描述-32" tabindex="-1"><a class="header-anchor" href="#描述-32" aria-hidden="true">#</a> 描述</h3>
<p>表 OrderItems 代表订单商品信息表，prod_id 为产品 id；Orders 表代表订单表有 cust_id 代表顾客 id 和订单日期 order_date</p>
<p>OrderItems 表</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>BR01</td>
<td>a0001</td>
</tr>
<tr>
<td>BR01</td>
<td>a0002</td>
</tr>
<tr>
<td>BR02</td>
<td>a0003</td>
</tr>
<tr>
<td>BR02</td>
<td>a0013</td>
</tr>
</tbody>
</table>
<p>Orders表</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>cust_id</th>
<th>order_date</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>cust10</td>
<td>2022-01-01 00:00:00</td>
</tr>
<tr>
<td>a0002</td>
<td>cust1</td>
<td>2022-01-01 00:01:00</td>
</tr>
<tr>
<td>a0003</td>
<td>cust1</td>
<td>2022-01-02 00:00:00</td>
</tr>
<tr>
<td>a0013</td>
<td>cust2</td>
<td>2022-01-01 00:20:00</td>
</tr>
</tbody>
</table>
<h3 id="问题-32" tabindex="-1"><a class="header-anchor" href="#问题-32" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，使用子查询来确定哪些订单（在 OrderItems 中）购买了 prod_id 为 &quot;BR01&quot; 的产品，然后从 Orders 表中返回每个产品对应的顾客 ID（cust_id）和订单日期（order_date），按订购日期对结果进行升序排序。</p>
<h3 id="示例结果-23" tabindex="-1"><a class="header-anchor" href="#示例结果-23" aria-hidden="true">#</a> 示例结果</h3>
<p>返回顾客 id cust_id 和定单日期 order_date。</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>order_date</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust10</td>
<td>2022-01-01 00:00:00</td>
</tr>
<tr>
<td>cust1</td>
<td>2022-01-01 00:01:00</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-12" tabindex="-1"><a class="header-anchor" href="#示例解析-12" aria-hidden="true">#</a> 示例解析</h3>
<p>产品 id 为 &quot;BR01&quot; 的订单 a0001 和 a002 的下单顾客 cust10 和 cust1 的下单时间分别为 2022-01-01 00:00:00 和 2022-01-01 00:01:00</p>
<h3 id="示例-32" tabindex="-1"><a class="header-anchor" href="#示例-32" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品id'</span><span class="token punctuation">,</span>
    order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'BR01'</span><span class="token punctuation">,</span><span class="token string">'a0001'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR01'</span><span class="token punctuation">,</span><span class="token string">'a0002'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR02'</span><span class="token punctuation">,</span><span class="token string">'a0003'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR02'</span><span class="token punctuation">,</span><span class="token string">'a0013'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
    cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span><span class="token punctuation">,</span>
    order_date <span class="token keyword">TIMESTAMP</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'下单时间'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:01:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'2022-01-02 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:20:00'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-32" tabindex="-1"><a class="header-anchor" href="#解答-32" aria-hidden="true">#</a> 解答</h3>
<p>使用子查询，先从 <code v-pre>OrderItems</code> 表中查询出 <code v-pre>prod_id</code> 为 <code v-pre>BR01</code> 的记录 ，然后再从 <code v-pre>Orders</code> 表中筛选出 <code v-pre>order_num</code> 为子查询结果集中的记录，最后按照 <code v-pre>order_date</code> 进行排序即可。主要是通过对条件查询语句的嵌套使用，从而实现多重筛选。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_id<span class="token punctuation">,</span> order_date <span class="token keyword">FROM</span> Orders <span class="token keyword">WHERE</span> order_num <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> order_num <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> prod_id <span class="token operator">=</span> <span class="token string">'BR01'</span><span class="token punctuation">)</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> order_date<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql34-返回购买-prod-id-为-br01-的产品的所有顾客的电子邮件-一" tabindex="-1"><a class="header-anchor" href="#sql34-返回购买-prod-id-为-br01-的产品的所有顾客的电子邮件-一" aria-hidden="true">#</a> SQL34 返回购买 prod_id 为 BR01 的产品的所有顾客的电子邮件（一）</h2>
<h3 id="描述-33" tabindex="-1"><a class="header-anchor" href="#描述-33" aria-hidden="true">#</a> 描述</h3>
<p>你想知道订购 BR01 产品的日期，有表 OrderItems 代表订单商品信息表，prod_id 为产品 id；Orders 表代表订单表有 cust_id 代表顾客 id 和订单日期order_date；Customers表含有 cust_email 顾客邮件和 cust_id 顾客 id</p>
<p>OrderItems 表</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>BR01</td>
<td>a0001</td>
</tr>
<tr>
<td>BR01</td>
<td>a0002</td>
</tr>
<tr>
<td>BR02</td>
<td>a0003</td>
</tr>
<tr>
<td>BR02</td>
<td>a0013</td>
</tr>
</tbody>
</table>
<p>Orders 表</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>cust_id</th>
<th>order_date</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>cust10</td>
<td>2022-01-01 00:00:00</td>
</tr>
<tr>
<td>a0002</td>
<td>cust1</td>
<td>2022-01-01 00:01:00</td>
</tr>
<tr>
<td>a0003</td>
<td>cust1</td>
<td>2022-01-02 00:00:00</td>
</tr>
<tr>
<td>a0013</td>
<td>cust2</td>
<td>2022-01-01 00:20:00</td>
</tr>
</tbody>
</table>
<p>Customers 表代表顾客信息，cust_id 为顾客 id，cust_email 为顾客 email</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_email</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust10</td>
<td><a href="mailto:cust10@cust.com">cust10@cust.com</a></td>
</tr>
<tr>
<td>cust1</td>
<td><a href="mailto:cust1@cust.com">cust1@cust.com</a></td>
</tr>
<tr>
<td>cust2</td>
<td><a href="mailto:cust2@cust.com">cust2@cust.com</a></td>
</tr>
</tbody>
</table>
<h3 id="问题-33" tabindex="-1"><a class="header-anchor" href="#问题-33" aria-hidden="true">#</a> 问题</h3>
<p>返回购买 prod_id 为 BR01 的产品的所有顾客的电子邮件（Customers 表中的 cust_email），结果无需排序。</p>
<p>提示：这涉及 SELECT 语句，最内层的从 OrderItems 表返回 order_num，中间的从 Customers 表返回 cust_id。</p>
<h3 id="示例结果-24" tabindex="-1"><a class="header-anchor" href="#示例结果-24" aria-hidden="true">#</a> 示例结果</h3>
<p>返回顾客 email cust_email</p>
<table>
<thead>
<tr>
<th>cust_email</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="mailto:cust10@cust.com">cust10@cust.com</a></td>
</tr>
<tr>
<td><a href="mailto:cust1@cust.com">cust1@cust.com</a></td>
</tr>
</tbody>
</table>
<h3 id="示例解析-13" tabindex="-1"><a class="header-anchor" href="#示例解析-13" aria-hidden="true">#</a> 示例解析</h3>
<p>产品 id 为 BR01 的订单 a0001 和 a002 的下单顾客 cust10 和 cust1 的顾客email cust_email 分别是：cust10@cust.com 、cust1@cust.com</p>
<h3 id="示例-33" tabindex="-1"><a class="header-anchor" href="#示例-33" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品id'</span><span class="token punctuation">,</span>
    order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'BR01'</span><span class="token punctuation">,</span><span class="token string">'a0001'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR01'</span><span class="token punctuation">,</span><span class="token string">'a0002'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR02'</span><span class="token punctuation">,</span><span class="token string">'a0003'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR02'</span><span class="token punctuation">,</span><span class="token string">'a0013'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
    cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span><span class="token punctuation">,</span>
    order_date <span class="token keyword">TIMESTAMP</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'下单时间'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:01:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'2022-01-02 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:20:00'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span><span class="token punctuation">,</span>
    cust_email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客email'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'cust10@cust.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'cust1@cust.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'cust2@cust.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-33" tabindex="-1"><a class="header-anchor" href="#解答-33" aria-hidden="true">#</a> 解答</h3>
<p>多重条件查询的过滤，只要细心一点，就能做出来。拆分为 3 个条件查询后，从内向外依次查询，然后基于上一层查询结果再做条件过滤。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_email <span class="token keyword">FROM</span> Customers <span class="token keyword">WHERE</span> cust_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> cust_id <span class="token keyword">FROM</span> Orders <span class="token keyword">WHERE</span> order_num <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> order_num <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> prod_id <span class="token operator">=</span> <span class="token string">'BR01'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql35-返回每个顾客不同订单的总金额" tabindex="-1"><a class="header-anchor" href="#sql35-返回每个顾客不同订单的总金额" aria-hidden="true">#</a> SQL35 返回每个顾客不同订单的总金额</h2>
<h3 id="描述-34" tabindex="-1"><a class="header-anchor" href="#描述-34" aria-hidden="true">#</a> 描述</h3>
<p>我们需要一个顾客 ID 列表，其中包含他们已订购的总金额。</p>
<p>OrderItems 表代表订单信息，OrderItems 表有订单号：order_num 和商品售出价格：item_price、商品数量：quantity。</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>item_price</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>10</td>
<td>105</td>
</tr>
<tr>
<td>a0002</td>
<td>1</td>
<td>1100</td>
</tr>
<tr>
<td>a0002</td>
<td>1</td>
<td>200</td>
</tr>
<tr>
<td>a0013</td>
<td>2</td>
<td>1121</td>
</tr>
<tr>
<td>a0003</td>
<td>5</td>
<td>10</td>
</tr>
<tr>
<td>a0003</td>
<td>1</td>
<td>19</td>
</tr>
<tr>
<td>a0003</td>
<td>7</td>
<td>5</td>
</tr>
</tbody>
</table>
<p>Orders 表订单号：order_num、顾客 id：cust_id</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>cust_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>cust10</td>
</tr>
<tr>
<td>a0002</td>
<td>cust1</td>
</tr>
<tr>
<td>a0003</td>
<td>cust1</td>
</tr>
<tr>
<td>a0013</td>
<td>cust2</td>
</tr>
</tbody>
</table>
<h3 id="问题-34" tabindex="-1"><a class="header-anchor" href="#问题-34" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL语句，返回顾客 ID（Orders 表中的 cust_id），并使用子查询返回total_ordered 以便返回每个顾客的订单总数，将结果按金额从大到小排序。</p>
<p>提示：你之前已经使用 SUM() 计算订单总数。</p>
<h3 id="示例结果-25" tabindex="-1"><a class="header-anchor" href="#示例结果-25" aria-hidden="true">#</a> 示例结果</h3>
<p>返回顾客 id cust_id 和 total_order 下单总额</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>total_ordered</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust2</td>
<td>2242</td>
</tr>
<tr>
<td>cust1</td>
<td>1300</td>
</tr>
<tr>
<td>cust10</td>
<td>1050</td>
</tr>
<tr>
<td>cust2</td>
<td>104</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-14" tabindex="-1"><a class="header-anchor" href="#示例解析-14" aria-hidden="true">#</a> 示例解析</h3>
<p>cust2 在 Orders 里面的订单 a0013，a0013 的售出价格是 2 售出数量是 1121，总额是 2242，最后返回 cust2 的支付总额是 2242。</p>
<h3 id="示例-34" tabindex="-1"><a class="header-anchor" href="#示例-34" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
	item_price <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'售出价格'</span><span class="token punctuation">,</span>
	quantity <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">105</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1121</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
  order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
  cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'cust10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token string">'cust2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-34" tabindex="-1"><a class="header-anchor" href="#解答-34" aria-hidden="true">#</a> 解答</h3>
<p>题目要求利用子查询，则实现如下。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_id<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>item_price <span class="token operator">*</span> quantity<span class="token punctuation">)</span> <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> OrderItems<span class="token punctuation">.</span>order_num <span class="token operator">=</span> Orders<span class="token punctuation">.</span>order_num<span class="token punctuation">)</span> <span class="token keyword">AS</span> total_ordered <span class="token keyword">FROM</span> Orders <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> total_ordered <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外我们可以使用内连接方式：利用 <code v-pre>SUM()</code> 函数进行求和，求出每个顾客的订单总数，然后通过条件查询找出两个表中 <code v-pre>order_num</code> 相同记录的并通过 <code v-pre>cust_id</code> 分组，最后则是将求和的订单总数倒序排列。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_id<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>item_price <span class="token operator">*</span> quantity<span class="token punctuation">)</span> <span class="token keyword">AS</span> total_ordered <span class="token keyword">FROM</span> OrderItems<span class="token punctuation">,</span> Orders <span class="token keyword">WHERE</span> OrderItems<span class="token punctuation">.</span>order_num <span class="token operator">=</span> Orders<span class="token punctuation">.</span>order_num <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> cust_id <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> total_ordered <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<h2 id="sql36-从-products-表中检索所有的产品名称以及对应的销售总数" tabindex="-1"><a class="header-anchor" href="#sql36-从-products-表中检索所有的产品名称以及对应的销售总数" aria-hidden="true">#</a> SQL36 从 Products 表中检索所有的产品名称以及对应的销售总数</h2>
<h3 id="描述-35" tabindex="-1"><a class="header-anchor" href="#描述-35" aria-hidden="true">#</a> 描述</h3>
<p>Products 表中检索所有的产品名称：prod_name、产品 id：prod_id</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>prod_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>egg</td>
</tr>
<tr>
<td>a0002</td>
<td>sockets</td>
</tr>
<tr>
<td>a0013</td>
<td>coffee</td>
</tr>
<tr>
<td>a0003</td>
<td>cola</td>
</tr>
</tbody>
</table>
<p>OrderItems 代表订单商品表，订单产品：prod_id、售出数量：quantity</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>105</td>
</tr>
<tr>
<td>a0002</td>
<td>1100</td>
</tr>
<tr>
<td>a0002</td>
<td>200</td>
</tr>
<tr>
<td>a0013</td>
<td>1121</td>
</tr>
<tr>
<td>a0003</td>
<td>10</td>
</tr>
<tr>
<td>a0003</td>
<td>19</td>
</tr>
<tr>
<td>a0003</td>
<td>5</td>
</tr>
</tbody>
</table>
<h3 id="问题-35" tabindex="-1"><a class="header-anchor" href="#问题-35" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，从 Products 表中检索所有的产品名称（prod_name），以及名为 quant_sold 的计算列，其中包含所售产品的总数（在 OrderItems 表上使用子查询和 SUM(quantity) 检索）。</p>
<h3 id="示例结果-26" tabindex="-1"><a class="header-anchor" href="#示例结果-26" aria-hidden="true">#</a> 示例结果</h3>
<p>返回产品名称 prod_name 和产品售出数量总和</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>quant_sold</th>
</tr>
</thead>
<tbody>
<tr>
<td>egg</td>
<td>105</td>
</tr>
<tr>
<td>sockets</td>
<td>1300</td>
</tr>
<tr>
<td>coffee</td>
<td>1121</td>
</tr>
<tr>
<td>cola</td>
<td>34</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-15" tabindex="-1"><a class="header-anchor" href="#示例解析-15" aria-hidden="true">#</a> 示例解析</h3>
<p>prod_name 是 cola 的 prod_id 为 a0003，quantity 总量为 34，返回结果无需排序。</p>
<h3 id="示例-35" tabindex="-1"><a class="header-anchor" href="#示例-35" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'egg'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'sockets'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token string">'coffee'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'cola'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品id'</span><span class="token punctuation">,</span>
	quantity <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token number">105</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token number">1100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token number">1121</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-35" tabindex="-1"><a class="header-anchor" href="#解答-35" aria-hidden="true">#</a> 解答</h3>
<p>解法类似于 35 题，同样主要有两种方式，第一种是通过内连接的方式。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span> <span class="token keyword">AS</span> quant_sold <span class="token keyword">FROM</span> OrderItems<span class="token punctuation">,</span> Products <span class="token keyword">WHERE</span> Products<span class="token punctuation">.</span>prod_id <span class="token operator">=</span> OrderItems<span class="token punctuation">.</span>prod_id <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> prod_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二种则是通过子查询的方式。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span> <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> OrderItems<span class="token punctuation">.</span>prod_id <span class="token operator">=</span> Products<span class="token punctuation">.</span>prod_id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> Products<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql37-返回顾客名称和相关订单号" tabindex="-1"><a class="header-anchor" href="#sql37-返回顾客名称和相关订单号" aria-hidden="true">#</a> SQL37 返回顾客名称和相关订单号</h2>
<h3 id="描述-36" tabindex="-1"><a class="header-anchor" href="#描述-36" aria-hidden="true">#</a> 描述</h3>
<p>Customers 表有字段顾客名称 cust_name、顾客 id cust_id</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust10</td>
<td>andy</td>
</tr>
<tr>
<td>cust1</td>
<td>ben</td>
</tr>
<tr>
<td>cust2</td>
<td>tony</td>
</tr>
<tr>
<td>cust22</td>
<td>tom</td>
</tr>
<tr>
<td>cust221</td>
<td>an</td>
</tr>
<tr>
<td>cust2217</td>
<td>hex</td>
</tr>
</tbody>
</table>
<p>Orders订单信息表，含有字段order_num订单号、cust_id顾客id</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>cust_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>cust10</td>
</tr>
<tr>
<td>a2</td>
<td>cust1</td>
</tr>
<tr>
<td>a3</td>
<td>cust2</td>
</tr>
<tr>
<td>a4</td>
<td>cust22</td>
</tr>
<tr>
<td>a5</td>
<td>cust221</td>
</tr>
<tr>
<td>a7</td>
<td>cust2217</td>
</tr>
</tbody>
</table>
<h3 id="问题-36" tabindex="-1"><a class="header-anchor" href="#问题-36" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，返回 Customers 表中的顾客名称（cust_name）和Orders 表中的相关订单号（order_num），并按顾客名称再按订单号对结果进行升序排序。你可以尝试用两个不同的写法，一个使用简单的等联结语法，另外一个使用 INNER JOIN。</p>
<h3 id="示例结果-27" tabindex="-1"><a class="header-anchor" href="#示例结果-27" aria-hidden="true">#</a> 示例结果</h3>
<p>cust_name 代表用户名称 cust_name 和订单号 order_num。</p>
<table>
<thead>
<tr>
<th>cust_name</th>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>an</td>
<td>a5</td>
</tr>
<tr>
<td>andy</td>
<td>a1</td>
</tr>
<tr>
<td>ben</td>
<td>a2</td>
</tr>
<tr>
<td>hex</td>
<td>a7</td>
</tr>
<tr>
<td>tom</td>
<td>a4</td>
</tr>
<tr>
<td>tony</td>
<td>a3</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-16" tabindex="-1"><a class="header-anchor" href="#示例解析-16" aria-hidden="true">#</a> 示例解析</h3>
<p>顾客名称为 an 的 cust_id 为 cust221，他的订单号为 a5。</p>
<h3 id="示例-36" tabindex="-1"><a class="header-anchor" href="#示例-36" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
  order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
  cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'cust10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a3'</span><span class="token punctuation">,</span><span class="token string">'cust2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'cust22'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token string">'cust221'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token string">'cust2217'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户id'</span><span class="token punctuation">,</span>
	cust_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户姓名'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'andy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'ben'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'tony'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust22'</span><span class="token punctuation">,</span><span class="token string">'tom'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust221'</span><span class="token punctuation">,</span><span class="token string">'an'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2217'</span><span class="token punctuation">,</span><span class="token string">'hex'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-36" tabindex="-1"><a class="header-anchor" href="#解答-36" aria-hidden="true">#</a> 解答</h3>
<p>考察 SQL 中的 <code v-pre>INNER JOIN</code>，其实也就是 <code v-pre>JOIN</code>。主要用于筛选出两个表中的交集部分。</p>
<figure><img src="@source/java-tutorial/mysql-series/assets/7BA735F317FA1D28FF507511833784C7.png" alt="" tabindex="0" loading="lazy"><figcaption>图片标题</figcaption></figure>
<p>使用语法如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table1
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name<span class="token operator">=</span>table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，此题使用 <code v-pre>INNER JOIN</code> 实现的方法如下。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_name<span class="token punctuation">,</span> Orders<span class="token punctuation">.</span>order_num <span class="token keyword">FROM</span> Customers <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> Orders <span class="token keyword">ON</span> Orders<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> Customers<span class="token punctuation">.</span>cust_id <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，也可以使用最常用的 <code v-pre>WHERE</code> 来进行联接。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_name<span class="token punctuation">,</span> order_num <span class="token keyword">FROM</span> Customers<span class="token punctuation">,</span> Orders <span class="token keyword">WHERE</span> Customers<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> Orders<span class="token punctuation">.</span>cust_id <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql38-返回顾客名称和相关订单号以及每个订单的总价" tabindex="-1"><a class="header-anchor" href="#sql38-返回顾客名称和相关订单号以及每个订单的总价" aria-hidden="true">#</a> SQL38 返回顾客名称和相关订单号以及每个订单的总价</h2>
<h3 id="描述-37" tabindex="-1"><a class="header-anchor" href="#描述-37" aria-hidden="true">#</a> 描述</h3>
<p>Customers 表有字段，顾客名称：cust_name、顾客 id：cust_id</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust10</td>
<td>andy</td>
</tr>
<tr>
<td>cust1</td>
<td>ben</td>
</tr>
<tr>
<td>cust2</td>
<td>tony</td>
</tr>
<tr>
<td>cust22</td>
<td>tom</td>
</tr>
<tr>
<td>cust221</td>
<td>an</td>
</tr>
<tr>
<td>cust2217</td>
<td>hex</td>
</tr>
</tbody>
</table>
<p>Orders 订单信息表，含有字段，订单号：order_num、顾客 id：cust_id</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>cust_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>cust10</td>
</tr>
<tr>
<td>a2</td>
<td>cust1</td>
</tr>
<tr>
<td>a3</td>
<td>cust2</td>
</tr>
<tr>
<td>a4</td>
<td>cust22</td>
</tr>
<tr>
<td>a5</td>
<td>cust221</td>
</tr>
<tr>
<td>a7</td>
<td>cust2217</td>
</tr>
</tbody>
</table>
<p>OrderItems 表有字段，商品订单号：order_num、商品数量：quantity、商品价格：item_price</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>quantity</th>
<th>item_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>1000</td>
<td>10</td>
</tr>
<tr>
<td>a2</td>
<td>200</td>
<td>10</td>
</tr>
<tr>
<td>a3</td>
<td>10</td>
<td>15</td>
</tr>
<tr>
<td>a4</td>
<td>25</td>
<td>50</td>
</tr>
<tr>
<td>a5</td>
<td>15</td>
<td>25</td>
</tr>
<tr>
<td>a7</td>
<td>7</td>
<td>7</td>
</tr>
</tbody>
</table>
<h3 id="问题-37" tabindex="-1"><a class="header-anchor" href="#问题-37" aria-hidden="true">#</a> 问题</h3>
<p>除了返回顾客名称和订单号，返回 Customers 表中的顾客名称（cust_name）和Orders 表中的相关订单号（order_num），添加第三列 OrderTotal，其中包含每个订单的总价，并按顾客名称再按订单号对结果进行升序排序。</p>
<h3 id="示例结果-28" tabindex="-1"><a class="header-anchor" href="#示例结果-28" aria-hidden="true">#</a> 示例结果</h3>
<p>返回顾客名称 cust_name、订单号 order_num、订单总额 OrderTotal</p>
<table>
<thead>
<tr>
<th>cust_name</th>
<th>order_num</th>
<th>OrderTotal</th>
</tr>
</thead>
<tbody>
<tr>
<td>an</td>
<td>a5</td>
<td>375</td>
</tr>
<tr>
<td>andy</td>
<td>a1</td>
<td>10000</td>
</tr>
<tr>
<td>ben</td>
<td>a2</td>
<td>2000</td>
</tr>
<tr>
<td>hex</td>
<td>a7</td>
<td>49</td>
</tr>
<tr>
<td>tom</td>
<td>a4</td>
<td>1250</td>
</tr>
<tr>
<td>tony</td>
<td>a3</td>
<td>150</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-17" tabindex="-1"><a class="header-anchor" href="#示例解析-17" aria-hidden="true">#</a> 示例解析</h3>
<p>例如顾客名称 cust_name 为 an 的顾客的订单 a5 的订单总额为 quantity*item_price = 15 * 25 = 375，最后以 cust_name 和 order_num 来进行升序排序。</p>
<h3 id="示例-37" tabindex="-1"><a class="header-anchor" href="#示例-37" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
  order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
  cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'cust10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a3'</span><span class="token punctuation">,</span><span class="token string">'cust2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'cust22'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token string">'cust221'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token string">'cust2217'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户id'</span><span class="token punctuation">,</span>
	cust_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户姓名'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'andy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'ben'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'tony'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust22'</span><span class="token punctuation">,</span><span class="token string">'tom'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust221'</span><span class="token punctuation">,</span><span class="token string">'an'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2217'</span><span class="token punctuation">,</span><span class="token string">'hex'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
  order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
  quantity <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span><span class="token punctuation">,</span>
  item_price <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品价格'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a3'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-37" tabindex="-1"><a class="header-anchor" href="#解答-37" aria-hidden="true">#</a> 解答</h3>
<p>SQL 语句先后顺序：</p>
<div class="language-SQl line-numbers-mode" data-ext="SQl"><pre v-pre class="language-SQl"><code>SELECT  ……
FROM ……
WHERE ……
GROUP BY ……
ORDER BY ……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>书写 SQL 语句时，一定要遵守以上关键字的先后顺序。然后根据题意将各个条件组合即可。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_name<span class="token punctuation">,</span> Orders<span class="token punctuation">.</span>order_num<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>quantity <span class="token operator">*</span> item_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> OrderTotal
<span class="token keyword">FROM</span> Customers<span class="token punctuation">,</span> Orders<span class="token punctuation">,</span> OrderItems
<span class="token keyword">WHERE</span> Customers<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> Orders<span class="token punctuation">.</span>cust_id <span class="token operator">AND</span> Orders<span class="token punctuation">.</span>order_num <span class="token operator">=</span> OrderItems<span class="token punctuation">.</span>order_num
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> Customers<span class="token punctuation">.</span>cust_name<span class="token punctuation">,</span> Orders<span class="token punctuation">.</span>order_num
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name<span class="token punctuation">,</span> Orders<span class="token punctuation">.</span>order_num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql39-确定哪些订单购买了-prod-id-为-br01-的产品-二" tabindex="-1"><a class="header-anchor" href="#sql39-确定哪些订单购买了-prod-id-为-br01-的产品-二" aria-hidden="true">#</a> SQL39 确定哪些订单购买了 prod_id 为 BR01 的产品（二）</h2>
<h3 id="描述-38" tabindex="-1"><a class="header-anchor" href="#描述-38" aria-hidden="true">#</a> 描述</h3>
<p>表 OrderItems 代表订单商品信息表，prod_id 为产品 id；Orders 表代表订单表有 cust_id 代表顾客id和订单日期 order_date</p>
<p>OrderItems 表</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>BR01</td>
<td>a0001</td>
</tr>
<tr>
<td>BR01</td>
<td>a0002</td>
</tr>
<tr>
<td>BR02</td>
<td>a0003</td>
</tr>
<tr>
<td>BR02</td>
<td>a0013</td>
</tr>
</tbody>
</table>
<p>Orders 表</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>cust_id</th>
<th>order_date</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>cust10</td>
<td>2022-01-01 00:00:00</td>
</tr>
<tr>
<td>a0002</td>
<td>cust1</td>
<td>2022-01-01 00:01:00</td>
</tr>
<tr>
<td>a0003</td>
<td>cust1</td>
<td>2022-01-02 00:00:00</td>
</tr>
<tr>
<td>a0013</td>
<td>cust2</td>
<td>2022-01-01 00:20:00</td>
</tr>
</tbody>
</table>
<h3 id="问题-38" tabindex="-1"><a class="header-anchor" href="#问题-38" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，使用子查询来确定哪些订单（在 OrderItems 中）购买了 prod_id 为 &quot;BR01&quot; 的产品，然后从 Orders 表中返回每个产品对应的顾客 ID（cust_id）和订单日期（order_date），按订购日期对结果进行升序排序。</p>
<p>提示：这一次使用联结和简单的等联结语法。</p>
<h3 id="示例结果-29" tabindex="-1"><a class="header-anchor" href="#示例结果-29" aria-hidden="true">#</a> 示例结果</h3>
<p>返回顾客 id cust_id 和定单日期 order_date</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>order_date</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust10</td>
<td>2022-01-01 00:00:00</td>
</tr>
<tr>
<td>cust1</td>
<td>2022-01-01 00:01:00</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-18" tabindex="-1"><a class="header-anchor" href="#示例解析-18" aria-hidden="true">#</a> 示例解析</h3>
<p>产品 id 为 BR01 的订单 a0001 和 a002 的下单顾客 cust10 和 cust1 的下单时间分别为 2022-01-01 00:00:00 和 2022-01-01 00:01:00</p>
<h3 id="示例-38" tabindex="-1"><a class="header-anchor" href="#示例-38" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品id'</span><span class="token punctuation">,</span>
    order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'BR01'</span><span class="token punctuation">,</span><span class="token string">'a0001'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR01'</span><span class="token punctuation">,</span><span class="token string">'a0002'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR02'</span><span class="token punctuation">,</span><span class="token string">'a0003'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR02'</span><span class="token punctuation">,</span><span class="token string">'a0013'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
    cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span><span class="token punctuation">,</span>
    order_date <span class="token keyword">TIMESTAMP</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'下单时间'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:01:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'2022-01-02 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:20:00'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-38" tabindex="-1"><a class="header-anchor" href="#解答-38" aria-hidden="true">#</a> 解答</h3>
<p>多个条件的组合查询，先查询出产品 id 为 <code v-pre>BR01</code> 的 <code v-pre>order_num</code>，然后从查询出的结果列中再去筛选出 <code v-pre>Orders</code> 表中 <code v-pre>order_num</code>，最后则是正序排序即可。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_id<span class="token punctuation">,</span> order_date 
<span class="token keyword">FROM</span> Orders<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> order_num <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> prod_id <span class="token operator">=</span> <span class="token string">'BR01'</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> result
<span class="token keyword">WHERE</span> result<span class="token punctuation">.</span>order_num <span class="token operator">=</span> Orders<span class="token punctuation">.</span>order_num
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> order_date<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql40-返回购买-prod-id-为-br01-的产品的所有顾客的电子邮件-二" tabindex="-1"><a class="header-anchor" href="#sql40-返回购买-prod-id-为-br01-的产品的所有顾客的电子邮件-二" aria-hidden="true">#</a> SQL40 返回购买 prod_id 为 BR01 的产品的所有顾客的电子邮件（二）</h2>
<h3 id="描述-39" tabindex="-1"><a class="header-anchor" href="#描述-39" aria-hidden="true">#</a> 描述</h3>
<p>有表 OrderItems 代表订单商品信息表，prod_id 为产品 id；Orders 表代表订单表有 cust_id 代表顾客 id 和订单日期 order_date；Customers 表含有 cust_email 顾客邮件和 cust_id 顾客 id</p>
<p>OrderItems 表</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>BR01</td>
<td>a0001</td>
</tr>
<tr>
<td>BR01</td>
<td>a0002</td>
</tr>
<tr>
<td>BR02</td>
<td>a0003</td>
</tr>
<tr>
<td>BR02</td>
<td>a0013</td>
</tr>
</tbody>
</table>
<p>Orders 表</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>cust_id</th>
<th>order_date</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>cust10</td>
<td>2022-01-01 00:00:00</td>
</tr>
<tr>
<td>a0002</td>
<td>cust1</td>
<td>2022-01-01 00:01:00</td>
</tr>
<tr>
<td>a0003</td>
<td>cust1</td>
<td>2022-01-02 00:00:00</td>
</tr>
<tr>
<td>a0013</td>
<td>cust2</td>
<td>2022-01-01 00:20:00</td>
</tr>
</tbody>
</table>
<p>Customers 表代表顾客信息，cust_id 为顾客 id，cust_email 为顾客 email</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_email</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust10</td>
<td><a href="mailto:cust10@cust.com">cust10@cust.com</a></td>
</tr>
<tr>
<td>cust1</td>
<td><a href="mailto:cust1@cust.com">cust1@cust.com</a></td>
</tr>
<tr>
<td>cust2</td>
<td><a href="mailto:cust2@cust.com">cust2@cust.com</a></td>
</tr>
</tbody>
</table>
<h3 id="问题-39" tabindex="-1"><a class="header-anchor" href="#问题-39" aria-hidden="true">#</a> 问题</h3>
<p>返回购买 prod_id 为BR01 的产品的所有顾客的电子邮件（Customers 表中的 cust_email），结果无需排序。</p>
<p>提示：涉及到 SELECT 语句，最内层的从 OrderItems 表返回 order_num，中间的从 Customers 表返回 cust_id，但是必须使用 INNER JOIN 语法。</p>
<h3 id="示例结果-30" tabindex="-1"><a class="header-anchor" href="#示例结果-30" aria-hidden="true">#</a> 示例结果</h3>
<p>返回顾客 email cust_email</p>
<table>
<thead>
<tr>
<th>cust_email</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="mailto:cust10@cust.com">cust10@cust.com</a></td>
</tr>
<tr>
<td><a href="mailto:cust1@cust.com">cust1@cust.com</a></td>
</tr>
</tbody>
</table>
<h3 id="示例解析-19" tabindex="-1"><a class="header-anchor" href="#示例解析-19" aria-hidden="true">#</a> 示例解析</h3>
<p>产品 id 为 BR01 的订单 a0001 和 a002 的下单顾客 cust10 和 cust1 的顾客 email cust_email 分别是：cust10@cust.com 、cust1@cust.com</p>
<h3 id="示例-39" tabindex="-1"><a class="header-anchor" href="#示例-39" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品id'</span><span class="token punctuation">,</span>
    order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'BR01'</span><span class="token punctuation">,</span><span class="token string">'a0001'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR01'</span><span class="token punctuation">,</span><span class="token string">'a0002'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR02'</span><span class="token punctuation">,</span><span class="token string">'a0003'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BR02'</span><span class="token punctuation">,</span><span class="token string">'a0013'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
    cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span><span class="token punctuation">,</span>
    order_date <span class="token keyword">TIMESTAMP</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'下单时间'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:01:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'2022-01-02 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'2022-01-01 00:20:00'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span><span class="token punctuation">,</span>
    cust_email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客email'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'cust10@cust.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'cust1@cust.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'cust2@cust.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-39" tabindex="-1"><a class="header-anchor" href="#解答-39" aria-hidden="true">#</a> 解答</h3>
<p>多个内联接的组合，先是筛选出 <code v-pre>OrderItems</code> 和 <code v-pre>Orders</code> 表中 <code v-pre>order_num</code> 相同的列，然后根据筛选出的结果列中的 <code v-pre>cust_id</code> 从 <code v-pre>Customers</code> 表中找对应的顾客信息即可。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span>  
    cust_email
<span class="token keyword">FROM</span>
    Customers <span class="token keyword">JOIN</span> Orders <span class="token keyword">ON</span>
    Orders<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> Customers<span class="token punctuation">.</span>cust_id   
    <span class="token keyword">JOIN</span> OrderItems  <span class="token keyword">ON</span> OrderItems<span class="token punctuation">.</span>prod_id <span class="token operator">=</span> <span class="token string">'BR01'</span> <span class="token operator">AND</span> OrderItems<span class="token punctuation">.</span>order_num <span class="token operator">=</span> Orders<span class="token punctuation">.</span>order_num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql41-确定最佳顾客的另一种方式-二" tabindex="-1"><a class="header-anchor" href="#sql41-确定最佳顾客的另一种方式-二" aria-hidden="true">#</a> SQL41 确定最佳顾客的另一种方式（二）</h2>
<h3 id="描述-40" tabindex="-1"><a class="header-anchor" href="#描述-40" aria-hidden="true">#</a> 描述</h3>
<p>OrderItems 表代表订单信息，确定最佳顾客的另一种方式是看他们花了多少钱，OrderItems 表有订单号 order_num 和 item_price 商品售出价格、quantity 商品数量</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>item_price</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>10</td>
<td>105</td>
</tr>
<tr>
<td>a2</td>
<td>1</td>
<td>1100</td>
</tr>
<tr>
<td>a2</td>
<td>1</td>
<td>200</td>
</tr>
<tr>
<td>a4</td>
<td>2</td>
<td>1121</td>
</tr>
<tr>
<td>a5</td>
<td>5</td>
<td>10</td>
</tr>
<tr>
<td>a2</td>
<td>1</td>
<td>19</td>
</tr>
<tr>
<td>a7</td>
<td>7</td>
<td>5</td>
</tr>
</tbody>
</table>
<p>Orders 表含有字段 order_num 订单号、cust_id 顾客 id</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>cust_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>cust10</td>
</tr>
<tr>
<td>a2</td>
<td>cust1</td>
</tr>
<tr>
<td>a3</td>
<td>cust2</td>
</tr>
<tr>
<td>a4</td>
<td>cust22</td>
</tr>
<tr>
<td>a5</td>
<td>cust221</td>
</tr>
<tr>
<td>a7</td>
<td>cust2217</td>
</tr>
</tbody>
</table>
<p>顾客表 Customers 有字段 cust_id 客户 id、cust_name 客户姓名</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust10</td>
<td>andy</td>
</tr>
<tr>
<td>cust1</td>
<td>ben</td>
</tr>
<tr>
<td>cust2</td>
<td>tony</td>
</tr>
<tr>
<td>cust22</td>
<td>tom</td>
</tr>
<tr>
<td>cust221</td>
<td>an</td>
</tr>
<tr>
<td>cust2217</td>
<td>hex</td>
</tr>
</tbody>
</table>
<h3 id="问题-40" tabindex="-1"><a class="header-anchor" href="#问题-40" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，返回订单总价不小于 1000 的客户名称和总额（OrderItems 表中的 order_num）。</p>
<p>提示：需要计算总和（item_price 乘以 quantity）。按总额对结果进行排序，请使用INNER JOIN 语法。</p>
<h3 id="示例结果-31" tabindex="-1"><a class="header-anchor" href="#示例结果-31" aria-hidden="true">#</a> 示例结果</h3>
<table>
<thead>
<tr>
<th>cust_name</th>
<th>total_price</th>
</tr>
</thead>
<tbody>
<tr>
<td>andy</td>
<td>1050</td>
</tr>
<tr>
<td>ben</td>
<td>1319</td>
</tr>
<tr>
<td>tom</td>
<td>2242</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-20" tabindex="-1"><a class="header-anchor" href="#示例解析-20" aria-hidden="true">#</a> 示例解析</h3>
<p>总额（item_price 乘以 quantity）大于等于 1000 的订单号，例如 a2 对应的顾客id 为 cust1，cust1 的顾客名称 cust_name 是 ben，最后返回 ben 作为 order_num a2 的quantity * item_price 总和的结果 1319。</p>
<h3 id="示例-40" tabindex="-1"><a class="header-anchor" href="#示例-40" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
	item_price <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'售出价格'</span><span class="token punctuation">,</span>
	quantity <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">105</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1121</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户id'</span><span class="token punctuation">,</span>
	cust_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户姓名'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'andy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'ben'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'tony'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust22'</span><span class="token punctuation">,</span><span class="token string">'tom'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust221'</span><span class="token punctuation">,</span><span class="token string">'an'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2217'</span><span class="token punctuation">,</span><span class="token string">'hex'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
  order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
  cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'cust10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a3'</span><span class="token punctuation">,</span><span class="token string">'cust2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'cust22'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token string">'cust221'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token string">'cust2217'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-40" tabindex="-1"><a class="header-anchor" href="#解答-40" aria-hidden="true">#</a> 解答</h3>
<p>主要考察的知识点：</p>
<ul>
<li>取别名：<code v-pre>AS</code> 关键字</li>
<li>求和：<code v-pre>SUM()</code></li>
<li><code v-pre>GROUP BY</code> 和 <code v-pre>HAVING</code> 同时使用用于过滤结果</li>
<li>排序：<code v-pre>ORDER BY</code> 关键字</li>
</ul>
<p>主要考察对多个 SQL 关键字的运用，同时还需要注意 SQL 中关键字的前后顺序。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_name<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>item_price <span class="token operator">*</span> quantity<span class="token punctuation">)</span> <span class="token keyword">AS</span> total_price
<span class="token keyword">FROM</span> OrderItems<span class="token punctuation">,</span> Orders<span class="token punctuation">,</span> Customers
<span class="token keyword">WHERE</span> OrderItems<span class="token punctuation">.</span>order_num <span class="token operator">=</span> Orders<span class="token punctuation">.</span>order_num <span class="token operator">AND</span> Orders<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> Customers<span class="token punctuation">.</span>cust_id
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> cust_name
<span class="token keyword">HAVING</span> total_price <span class="token operator">>=</span> <span class="token number">1000</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> total_price<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql42-检索每个顾客的名称和所有的订单号-一" tabindex="-1"><a class="header-anchor" href="#sql42-检索每个顾客的名称和所有的订单号-一" aria-hidden="true">#</a> SQL42 检索每个顾客的名称和所有的订单号（一）</h2>
<h3 id="描述-41" tabindex="-1"><a class="header-anchor" href="#描述-41" aria-hidden="true">#</a> 描述</h3>
<p>Customers 表代表顾客信息含有顾客 id cust_id 和顾客名称 cust_name</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust10</td>
<td>andy</td>
</tr>
<tr>
<td>cust1</td>
<td>ben</td>
</tr>
<tr>
<td>cust2</td>
<td>tony</td>
</tr>
<tr>
<td>cust22</td>
<td>tom</td>
</tr>
<tr>
<td>cust221</td>
<td>an</td>
</tr>
<tr>
<td>cust2217</td>
<td>hex</td>
</tr>
</tbody>
</table>
<p>Orders 表代表订单信息含有订单号 order_num 和顾客 id cust_id</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>cust_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>cust10</td>
</tr>
<tr>
<td>a2</td>
<td>cust1</td>
</tr>
<tr>
<td>a3</td>
<td>cust2</td>
</tr>
<tr>
<td>a4</td>
<td>cust22</td>
</tr>
<tr>
<td>a5</td>
<td>cust221</td>
</tr>
<tr>
<td>a7</td>
<td>cust2217</td>
</tr>
</tbody>
</table>
<h3 id="问题-41" tabindex="-1"><a class="header-anchor" href="#问题-41" aria-hidden="true">#</a> 问题</h3>
<p>使用 INNER JOIN 编写 SQL 语句，检索每个顾客的名称（Customers 表中的  cust_name）和所有的订单号（Orders 表中的 order_num），最后根据顾客姓名 cust_name 升序返回。</p>
<h3 id="示例结果-32" tabindex="-1"><a class="header-anchor" href="#示例结果-32" aria-hidden="true">#</a> 示例结果</h3>
<p>返回顾客名称 cust_name 和订单号 order_num</p>
<table>
<thead>
<tr>
<th>cust_name</th>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>an</td>
<td>a5</td>
</tr>
<tr>
<td>andy</td>
<td>a1</td>
</tr>
<tr>
<td>ben</td>
<td>a2</td>
</tr>
<tr>
<td>hex</td>
<td>a7</td>
</tr>
<tr>
<td>tom</td>
<td>a4</td>
</tr>
<tr>
<td>tony</td>
<td>a3</td>
</tr>
</tbody>
</table>
<h3 id="示例-41" tabindex="-1"><a class="header-anchor" href="#示例-41" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户id'</span><span class="token punctuation">,</span>
	cust_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户姓名'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'andy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'ben'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'tony'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust22'</span><span class="token punctuation">,</span><span class="token string">'tom'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust221'</span><span class="token punctuation">,</span><span class="token string">'an'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2217'</span><span class="token punctuation">,</span><span class="token string">'hex'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
  order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
  cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'cust10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a3'</span><span class="token punctuation">,</span><span class="token string">'cust2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'cust22'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token string">'cust221'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token string">'cust2217'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-41" tabindex="-1"><a class="header-anchor" href="#解答-41" aria-hidden="true">#</a> 解答</h3>
<p>主要考察 <code v-pre>INNER JOIN</code> 的用法，其使用语法如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table1
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name<span class="token operator">=</span>table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要实现本题，利用上述语法填入对应字段名和表名即可，最后则是关键字 <code v-pre>ORDER BY</code> 的使用。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_name<span class="token punctuation">,</span> Orders<span class="token punctuation">.</span>order_num <span class="token keyword">FROM</span> Customers <span class="token keyword">JOIN</span> Orders <span class="token keyword">ON</span> Orders<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> Customers<span class="token punctuation">.</span>cust_id <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql43-检索每个顾客的名称和所有的订单号-二" tabindex="-1"><a class="header-anchor" href="#sql43-检索每个顾客的名称和所有的订单号-二" aria-hidden="true">#</a> SQL43 检索每个顾客的名称和所有的订单号（二）</h2>
<h3 id="描述-42" tabindex="-1"><a class="header-anchor" href="#描述-42" aria-hidden="true">#</a> 描述</h3>
<p>Orders 表代表订单信息含有订单号 order_num和顾客 id cust_id</p>
<table>
<thead>
<tr>
<th>order_num</th>
<th>cust_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>a1</td>
<td>cust10</td>
</tr>
<tr>
<td>a2</td>
<td>cust1</td>
</tr>
<tr>
<td>a3</td>
<td>cust2</td>
</tr>
<tr>
<td>a4</td>
<td>cust22</td>
</tr>
<tr>
<td>a5</td>
<td>cust221</td>
</tr>
<tr>
<td>a7</td>
<td>cust2217</td>
</tr>
</tbody>
</table>
<p>Customers 表代表顾客信息含有顾客 id cust_id 和 顾客名称 cust_name</p>
<table>
<thead>
<tr>
<th>cust_id</th>
<th>cust_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust10</td>
<td>andy</td>
</tr>
<tr>
<td>cust1</td>
<td>ben</td>
</tr>
<tr>
<td>cust2</td>
<td>tony</td>
</tr>
<tr>
<td>cust22</td>
<td>tom</td>
</tr>
<tr>
<td>cust221</td>
<td>an</td>
</tr>
<tr>
<td>cust2217</td>
<td>hex</td>
</tr>
<tr>
<td>cust40</td>
<td>ace</td>
</tr>
</tbody>
</table>
<h3 id="问题-42" tabindex="-1"><a class="header-anchor" href="#问题-42" aria-hidden="true">#</a> 问题</h3>
<p>检索每个顾客的名称（Customers 表中的 cust_name）和所有的订单号（Orders 表中的 order_num），列出所有的顾客，即使他们没有下过订单。最后根据顾客姓名 cust_name 升序返回。</p>
<h3 id="示例结果-33" tabindex="-1"><a class="header-anchor" href="#示例结果-33" aria-hidden="true">#</a> 示例结果</h3>
<p>返回顾客名称 cust_name 和订单号 order_num</p>
<table>
<thead>
<tr>
<th>cust_name</th>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>ace</td>
<td>NULL</td>
</tr>
<tr>
<td>an</td>
<td>a5</td>
</tr>
<tr>
<td>andy</td>
<td>a1</td>
</tr>
<tr>
<td>ben</td>
<td>a2</td>
</tr>
<tr>
<td>hex</td>
<td>a7</td>
</tr>
<tr>
<td>tom</td>
<td>a4</td>
</tr>
<tr>
<td>tony</td>
<td>a3</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-21" tabindex="-1"><a class="header-anchor" href="#示例解析-21" aria-hidden="true">#</a> 示例解析</h3>
<p>基于两张表，返回订单号 a1 的顾客名称 andy 等人，没有下单的顾客 ace 也统计了进来。</p>
<h3 id="示例-42" tabindex="-1"><a class="header-anchor" href="#示例-42" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户id'</span><span class="token punctuation">,</span>
	cust_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户姓名'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'andy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'ben'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'tony'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust22'</span><span class="token punctuation">,</span><span class="token string">'tom'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust221'</span><span class="token punctuation">,</span><span class="token string">'an'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2217'</span><span class="token punctuation">,</span><span class="token string">'hex'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust40'</span><span class="token punctuation">,</span><span class="token string">'ace'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
  order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品订单号'</span><span class="token punctuation">,</span>
  cust_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Orders<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token string">'cust10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a2'</span><span class="token punctuation">,</span><span class="token string">'cust1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a3'</span><span class="token punctuation">,</span><span class="token string">'cust2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a4'</span><span class="token punctuation">,</span><span class="token string">'cust22'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a5'</span><span class="token punctuation">,</span><span class="token string">'cust221'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a7'</span><span class="token punctuation">,</span><span class="token string">'cust2217'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-42" tabindex="-1"><a class="header-anchor" href="#解答-42" aria-hidden="true">#</a> 解答</h3>
<p>根据题意，主要以 <code v-pre>Customers</code> 表中的列为主，然后取 <code v-pre>Customers</code> 和 <code v-pre>Orders</code> 中的交集。对于 <code v-pre>Orders</code> 表中不存在的列则取值 <code v-pre>null</code>。所以可以使用外联结中的 <code v-pre>LEFT JION</code>，其使用语法如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table1
<span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name<span class="token operator">=</span>table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>套用上述语法，填入对应表和列名即可实现，最后则是再加入简单的排序即可。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_name<span class="token punctuation">,</span> Orders<span class="token punctuation">.</span>order_num <span class="token keyword">FROM</span> Customers <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> Orders <span class="token keyword">On</span> Orders<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> Customers<span class="token punctuation">.</span>cust_id <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql44-返回产品名称和与之相关的订单号" tabindex="-1"><a class="header-anchor" href="#sql44-返回产品名称和与之相关的订单号" aria-hidden="true">#</a> SQL44 返回产品名称和与之相关的订单号</h2>
<h3 id="描述-43" tabindex="-1"><a class="header-anchor" href="#描述-43" aria-hidden="true">#</a> 描述</h3>
<p>Products 表为产品信息表含有字段 prod_id 产品 id、prod_name 产品名称</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>prod_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>egg</td>
</tr>
<tr>
<td>a0002</td>
<td>sockets</td>
</tr>
<tr>
<td>a0013</td>
<td>coffee</td>
</tr>
<tr>
<td>a0003</td>
<td>cola</td>
</tr>
<tr>
<td>a0023</td>
<td>soda</td>
</tr>
</tbody>
</table>
<p>OrderItems 表为订单信息表含有字段 order_num 订单号和产品 id prod_id</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>a105</td>
</tr>
<tr>
<td>a0002</td>
<td>a1100</td>
</tr>
<tr>
<td>a0002</td>
<td>a200</td>
</tr>
<tr>
<td>a0013</td>
<td>a1121</td>
</tr>
<tr>
<td>a0003</td>
<td>a10</td>
</tr>
<tr>
<td>a0003</td>
<td>a19</td>
</tr>
<tr>
<td>a0003</td>
<td>a5</td>
</tr>
</tbody>
</table>
<h3 id="问题-43" tabindex="-1"><a class="header-anchor" href="#问题-43" aria-hidden="true">#</a> 问题</h3>
<p>使用 OUTER JOIN 联结 Products 表和 OrderItems 表，返回产品名称（prod_name）和与之相关的订单号（order_num）的列表，并按照产品名称升序排序。</p>
<h3 id="示例结果-34" tabindex="-1"><a class="header-anchor" href="#示例结果-34" aria-hidden="true">#</a> 示例结果</h3>
<p>返回产品名称 prod_name 和订单号 order_num</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>coffee</td>
<td>a1121</td>
</tr>
<tr>
<td>cola</td>
<td>a5</td>
</tr>
<tr>
<td>cola</td>
<td>a19</td>
</tr>
<tr>
<td>cola</td>
<td>a10</td>
</tr>
<tr>
<td>egg</td>
<td>a105</td>
</tr>
<tr>
<td>sockets</td>
<td>a200</td>
</tr>
<tr>
<td>sockets</td>
<td>a1100</td>
</tr>
<tr>
<td>soda</td>
<td>NULL</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-22" tabindex="-1"><a class="header-anchor" href="#示例解析-22" aria-hidden="true">#</a> 示例解析</h3>
<p>返回产品和对应实际支付订单的订单号，但是无实际订单的产品 soda 也返回，最后根据产品名称升序排序。</p>
<h3 id="示例-43" tabindex="-1"><a class="header-anchor" href="#示例-43" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'egg'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'sockets'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token string">'coffee'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'cola'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0023'</span><span class="token punctuation">,</span><span class="token string">'soda'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品id'</span><span class="token punctuation">,</span>
	order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'a105'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'a1100'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'a200'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token string">'a1121'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'a10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'a19'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'a5'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-43" tabindex="-1"><a class="header-anchor" href="#解答-43" aria-hidden="true">#</a> 解答</h3>
<p>此题解法类似于 43 题，主要使用 <code v-pre>OUTER JOIN</code> 中的左联结 <code v-pre>LEFT JOIN</code>，主要清除相关语法，然后套用填入表名和列名即可。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> OrderItems<span class="token punctuation">.</span>order_num <span class="token keyword">FROM</span> Products 
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> OrderItems <span class="token keyword">ON</span> OrderItems<span class="token punctuation">.</span>prod_id <span class="token operator">=</span> Products<span class="token punctuation">.</span>prod_id
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql45-返回产品名称和每一项产品的总订单数" tabindex="-1"><a class="header-anchor" href="#sql45-返回产品名称和每一项产品的总订单数" aria-hidden="true">#</a> SQL45 返回产品名称和每一项产品的总订单数</h2>
<h3 id="描述-44" tabindex="-1"><a class="header-anchor" href="#描述-44" aria-hidden="true">#</a> 描述</h3>
<p>Products 表为产品信息表含有字段 prod_id 产品 id、prod_name 产品名称</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>prod_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>egg</td>
</tr>
<tr>
<td>a0002</td>
<td>sockets</td>
</tr>
<tr>
<td>a0013</td>
<td>coffee</td>
</tr>
<tr>
<td>a0003</td>
<td>cola</td>
</tr>
<tr>
<td>a0023</td>
<td>soda</td>
</tr>
</tbody>
</table>
<p>OrderItems 表为订单信息表含有字段 order_num 订单号和产品 id prod_id</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>order_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>a105</td>
</tr>
<tr>
<td>a0002</td>
<td>a1100</td>
</tr>
<tr>
<td>a0002</td>
<td>a200</td>
</tr>
<tr>
<td>a0013</td>
<td>a1121</td>
</tr>
<tr>
<td>a0003</td>
<td>a10</td>
</tr>
<tr>
<td>a0003</td>
<td>a19</td>
</tr>
<tr>
<td>a0003</td>
<td>a5</td>
</tr>
</tbody>
</table>
<h3 id="问题-44" tabindex="-1"><a class="header-anchor" href="#问题-44" aria-hidden="true">#</a> 问题</h3>
<p>使用 OUTER JOIN 联结 Products 表和 OrderItems 表，返回产品名称（prod_name）和每一项产品的总订单数（不是订单号），并按产品名称升序排序。</p>
<h3 id="示例结果-35" tabindex="-1"><a class="header-anchor" href="#示例结果-35" aria-hidden="true">#</a> 示例结果</h3>
<p>返回产品名称 prod_name 和订单号订单数 orders</p>
<table>
<thead>
<tr>
<th>prod_name</th>
<th>orders</th>
</tr>
</thead>
<tbody>
<tr>
<td>coffee</td>
<td>1</td>
</tr>
<tr>
<td>cola</td>
<td>3</td>
</tr>
<tr>
<td>egg</td>
<td>1</td>
</tr>
<tr>
<td>sockets</td>
<td>2</td>
</tr>
<tr>
<td>soda</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-23" tabindex="-1"><a class="header-anchor" href="#示例解析-23" aria-hidden="true">#</a> 示例解析</h3>
<p>返回产品和产品对应的实际支付的订单数，但是无实际订单的产品 soda 也返回，最后根据产品名称升序排序。</p>
<h3 id="示例-44" tabindex="-1"><a class="header-anchor" href="#示例-44" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'egg'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'sockets'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token string">'coffee'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'cola'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0023'</span><span class="token punctuation">,</span><span class="token string">'soda'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品id'</span><span class="token punctuation">,</span>
	order_num <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'a105'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'a1100'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'a200'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token string">'a1121'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'a10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'a19'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'a5'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-44" tabindex="-1"><a class="header-anchor" href="#解答-44" aria-hidden="true">#</a> 解答</h3>
<p>考察的知识点仍然是外连接，只不过加入了 <code v-pre>COUNT()</code> 函数用于分组统计，最后同样是简单的排序。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>order_num<span class="token punctuation">)</span> <span class="token keyword">AS</span> orders
<span class="token keyword">FROM</span> Products <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> OrderItems <span class="token keyword">ON</span> OrderItems<span class="token punctuation">.</span>prod_id <span class="token operator">=</span> Products<span class="token punctuation">.</span>prod_id
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> prod_name <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql46-列出供应商及其可供产品的数量" tabindex="-1"><a class="header-anchor" href="#sql46-列出供应商及其可供产品的数量" aria-hidden="true">#</a> SQL46 列出供应商及其可供产品的数量</h2>
<h3 id="描述-45" tabindex="-1"><a class="header-anchor" href="#描述-45" aria-hidden="true">#</a> 描述</h3>
<p>有 Vendors 表含有 vend_id 供应商id.</p>
<table>
<thead>
<tr>
<th>vend_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0002</td>
</tr>
<tr>
<td>a0013</td>
</tr>
<tr>
<td>a0003</td>
</tr>
<tr>
<td>a0010</td>
</tr>
</tbody>
</table>
<p>有 Products 表含有供应商 id 和供应产品 id</p>
<table>
<thead>
<tr>
<th>vend_id</th>
<th>prod_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>egg</td>
</tr>
<tr>
<td>a0002</td>
<td>prod_id_iphone</td>
</tr>
<tr>
<td>a00113</td>
<td>prod_id_tea</td>
</tr>
<tr>
<td>a0003</td>
<td>prod_id_vivo phone</td>
</tr>
<tr>
<td>a0010</td>
<td>prod_id_huawei phone</td>
</tr>
</tbody>
</table>
<h3 id="问题-45" tabindex="-1"><a class="header-anchor" href="#问题-45" aria-hidden="true">#</a> 问题</h3>
<p>列出供应商（Vendors 表中的 vend_id）及其可供产品的数量，包括没有产品的供应商。你需要使用 OUTER JOIN 和 COUNT() 聚合函数来计算 Products 表中每种产品的数量，最后根据 vend_id 升序排序。</p>
<p>注意：vend_id 列会显示在多个表中，因此在每次引用它时都需要完全限定它。</p>
<h3 id="示例结果-36" tabindex="-1"><a class="header-anchor" href="#示例结果-36" aria-hidden="true">#</a> 示例结果</h3>
<p>返回供应商 id 和对应供应商供应的产品的个数</p>
<table>
<thead>
<tr>
<th>vend_id</th>
<th>prod_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0002</td>
<td>1</td>
</tr>
<tr>
<td>a0013</td>
<td>0</td>
</tr>
<tr>
<td>a0003</td>
<td>1</td>
</tr>
<tr>
<td>a0010</td>
<td>1</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-24" tabindex="-1"><a class="header-anchor" href="#示例解析-24" aria-hidden="true">#</a> 示例解析</h3>
<p>供应商 a00013 供应的商品不在 Products 表中所以为 0，其他供应商供应的产品为 1 个。</p>
<h3 id="示例-45" tabindex="-1"><a class="header-anchor" href="#示例-45" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>vend_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'vend名称'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Vendors<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0010'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>vend_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品 ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token string">'egg'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token string">'prod_id_iphone'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a00113'</span><span class="token punctuation">,</span><span class="token string">'prod_id_tea'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token string">'prod_id_vivo phone'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'a0010'</span><span class="token punctuation">,</span><span class="token string">'prod_id_huawei phone'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-45" tabindex="-1"><a class="header-anchor" href="#解答-45" aria-hidden="true">#</a> 解答</h3>
<p>利用 <code v-pre>COUNT()</code> 函数对 <code v-pre>Vendors</code> 中的 <code v-pre>vend_id</code> 分组并统计。</p>
<p>另外则是考察 <code v-pre>LEFT JOIN</code>，即题目中所说的 <code v-pre>OUTER JOIN</code>，其具体使用语法如下。</p>
<figure><img src="@source/java-tutorial/mysql-series/assets/0D39E534BBF4F7D451CCD1CDBDDFD56A.png" alt="" tabindex="0" loading="lazy"><figcaption>图片标题</figcaption></figure>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> table1
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name<span class="token operator">=</span>table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> Vendors<span class="token punctuation">.</span>vend_id<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>Products<span class="token punctuation">.</span>prod_id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> Vendors <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> Products <span class="token keyword">ON</span> Vendors<span class="token punctuation">.</span>vend_id <span class="token operator">=</span> Products<span class="token punctuation">.</span>vend_id <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> Vendors<span class="token punctuation">.</span>vend_id <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> Vendors<span class="token punctuation">.</span>vend_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql47-将两个-select-语句结合起来-一" tabindex="-1"><a class="header-anchor" href="#sql47-将两个-select-语句结合起来-一" aria-hidden="true">#</a> SQL47 将两个 SELECT 语句结合起来（一）</h2>
<h3 id="描述-46" tabindex="-1"><a class="header-anchor" href="#描述-46" aria-hidden="true">#</a> 描述</h3>
<p>表 OrderItems 包含订单产品信息，字段 prod_id 代表产品 id、quantity 代表产品数量</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>105</td>
</tr>
<tr>
<td>a0002</td>
<td>100</td>
</tr>
<tr>
<td>a0002</td>
<td>200</td>
</tr>
<tr>
<td>a0013</td>
<td>1121</td>
</tr>
<tr>
<td>a0003</td>
<td>10</td>
</tr>
<tr>
<td>a0003</td>
<td>19</td>
</tr>
<tr>
<td>a0003</td>
<td>5</td>
</tr>
<tr>
<td>BNBG</td>
<td>10002</td>
</tr>
</tbody>
</table>
<h3 id="问题-46" tabindex="-1"><a class="header-anchor" href="#问题-46" aria-hidden="true">#</a> 问题</h3>
<p>将两个 SELECT 语句结合起来，以便从 OrderItems 表中检索产品 id（prod_id）和 quantity。其中，一个 SELECT 语句过滤数量为 100 的行，另一个 SELECT 语句过滤 id 以 BNBG 开头的产品，最后按产品 id 对结果进行升序排序。</p>
<h3 id="示例结果-37" tabindex="-1"><a class="header-anchor" href="#示例结果-37" aria-hidden="true">#</a> 示例结果</h3>
<p>返回产品 id prod_id和产品数量 quantity</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0002</td>
<td>100</td>
</tr>
<tr>
<td>BNBG</td>
<td>10002</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-25" tabindex="-1"><a class="header-anchor" href="#示例解析-25" aria-hidden="true">#</a> 示例解析</h3>
<p>产品 id a0002 因为数量等于 100 被选取返回；BNBG 因为是以 BNBG 开头的产品所以返回；最后以产品 id 进行排序返回。</p>
<h3 id="示例-46" tabindex="-1"><a class="header-anchor" href="#示例-46" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品id'</span><span class="token punctuation">,</span>
	quantity <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token number">105</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token number">1121</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BNBG'</span><span class="token punctuation">,</span><span class="token number">10002</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-46" tabindex="-1"><a class="header-anchor" href="#解答-46" aria-hidden="true">#</a> 解答</h3>
<p>依照题意，其实我们利用一个 <code v-pre>SELECT</code> 然后搭配 <code v-pre>WHERE</code> 条件查询就能将满足题意的纪律筛选出来。但是为了练习关键字 <code v-pre>UNION</code> 的使用，可以将两个条件查询语句分开，然后用 <code v-pre>UNION</code> 联接起来，最后则是按照 <code v-pre>prod_id</code> 正序排列。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> quantity <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> quantity <span class="token operator">=</span> <span class="token string">'100'</span> <span class="token keyword">UNION</span> <span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> quantity <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> prod_id <span class="token operator">LIKE</span> <span class="token string">'BNBG%'</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql48-将两个-select-语句结合起来-二" tabindex="-1"><a class="header-anchor" href="#sql48-将两个-select-语句结合起来-二" aria-hidden="true">#</a> SQL48 将两个 SELECT 语句结合起来（二）</h2>
<h3 id="描述-47" tabindex="-1"><a class="header-anchor" href="#描述-47" aria-hidden="true">#</a> 描述</h3>
<p>表 OrderItems 包含订单产品信息，字段 prod_id 代表产品 id、quantity 代表产品数量。</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0001</td>
<td>105</td>
</tr>
<tr>
<td>a0002</td>
<td>100</td>
</tr>
<tr>
<td>a0002</td>
<td>200</td>
</tr>
<tr>
<td>a0013</td>
<td>1121</td>
</tr>
<tr>
<td>a0003</td>
<td>10</td>
</tr>
<tr>
<td>a0003</td>
<td>19</td>
</tr>
<tr>
<td>a0003</td>
<td>5</td>
</tr>
<tr>
<td>BNBG</td>
<td>10002</td>
</tr>
</tbody>
</table>
<h3 id="问题-47" tabindex="-1"><a class="header-anchor" href="#问题-47" aria-hidden="true">#</a> 问题</h3>
<p>将两个 SELECT 语句结合起来，以便从 OrderItems 表中检索产品 id（prod_id）和 quantity。其中，一个 SELECT 语句过滤数量为 100 的行，另一个 SELECT 语句过滤 id 以 BNBG 开头的产品，最后按产品 id 对结果进行升序排序。<br>
注意：这次仅使用单个 SELECT 语句。</p>
<h3 id="示例结果-38" tabindex="-1"><a class="header-anchor" href="#示例结果-38" aria-hidden="true">#</a> 示例结果</h3>
<p>返回产品 id prod_id 和产品数量 quantity</p>
<table>
<thead>
<tr>
<th>prod_id</th>
<th>quantity</th>
</tr>
</thead>
<tbody>
<tr>
<td>a0002</td>
<td>100</td>
</tr>
<tr>
<td>BNBG</td>
<td>10002</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-26" tabindex="-1"><a class="header-anchor" href="#示例解析-26" aria-hidden="true">#</a> 示例解析</h3>
<p>产品 id a0002 因为数量等于 100 被选取返回；BNBG 因为是以 BNBG 开头的产品所以返回；最后以产品 id 进行排序返回。</p>
<h3 id="示例-47" tabindex="-1"><a class="header-anchor" href="#示例-47" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	prod_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品id'</span><span class="token punctuation">,</span>
	quantity <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品数量'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>OrderItems<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'a0001'</span><span class="token punctuation">,</span><span class="token number">105</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0002'</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0013'</span><span class="token punctuation">,</span><span class="token number">1121</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'a0003'</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'BNBG'</span><span class="token punctuation">,</span><span class="token number">10002</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-47" tabindex="-1"><a class="header-anchor" href="#解答-47" aria-hidden="true">#</a> 解答</h3>
<p>根据题意仅使用单个 <code v-pre>SELECT</code> 语句，那就直接利用 <code v-pre>WHERE</code> 条件查询，然后将两个条件利用连接符 <code v-pre>OR</code> 并联即可。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> quantity <span class="token keyword">FROM</span> OrderItems <span class="token keyword">WHERE</span> prod_id <span class="token operator">LIKE</span> <span class="token string">'BNBG%'</span> <span class="token operator">OR</span> quantity <span class="token operator">=</span> <span class="token string">'100'</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql49-组合-products-表中的产品名称和-customers-表中的顾客名称" tabindex="-1"><a class="header-anchor" href="#sql49-组合-products-表中的产品名称和-customers-表中的顾客名称" aria-hidden="true">#</a> SQL49 组合 Products 表中的产品名称和 Customers 表中的顾客名称</h2>
<h3 id="描述-48" tabindex="-1"><a class="header-anchor" href="#描述-48" aria-hidden="true">#</a> 描述</h3>
<p>Products 表含有字段 prod_name 代表产品名称</p>
<table>
<thead>
<tr>
<th>prod_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>flower</td>
</tr>
<tr>
<td>rice</td>
</tr>
<tr>
<td>ring</td>
</tr>
<tr>
<td>umbrella</td>
</tr>
</tbody>
</table>
<p>Customers 表代表顾客信息，cust_name 代表顾客名称</p>
<table>
<thead>
<tr>
<th>cust_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>andy</td>
</tr>
<tr>
<td>ben</td>
</tr>
<tr>
<td>tony</td>
</tr>
<tr>
<td>tom</td>
</tr>
<tr>
<td>an</td>
</tr>
<tr>
<td>lee</td>
</tr>
<tr>
<td>hex</td>
</tr>
</tbody>
</table>
<h3 id="问题-48" tabindex="-1"><a class="header-anchor" href="#问题-48" aria-hidden="true">#</a> 问题</h3>
<p>编写 SQL 语句，组合 Products 表中的产品名称（prod_name）和 Customers 表中的顾客名称（cust_name）并返回，然后按产品名称对结果进行升序排序。</p>
<h3 id="示例结果-39" tabindex="-1"><a class="header-anchor" href="#示例结果-39" aria-hidden="true">#</a> 示例结果</h3>
<table>
<thead>
<tr>
<th>prod_name</th>
</tr>
</thead>
<tbody>
<tr>
<td>an</td>
</tr>
<tr>
<td>andy</td>
</tr>
<tr>
<td>ben</td>
</tr>
<tr>
<td>flower</td>
</tr>
<tr>
<td>hex</td>
</tr>
<tr>
<td>lee</td>
</tr>
<tr>
<td>rice</td>
</tr>
<tr>
<td>ring</td>
</tr>
<tr>
<td>tom</td>
</tr>
<tr>
<td>tony</td>
</tr>
<tr>
<td>umbrella</td>
</tr>
</tbody>
</table>
<h3 id="示例解析-27" tabindex="-1"><a class="header-anchor" href="#示例解析-27" aria-hidden="true">#</a> 示例解析</h3>
<p>拼接 cust_name 和 prod_name 并根据结果升序排序</p>
<h3 id="示例-48" tabindex="-1"><a class="header-anchor" href="#示例-48" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>prod_name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'产品名称'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>Products<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'flower'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'rice'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'ring'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'umbrella'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
	cust_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'客户姓名'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'andy'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'ben'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'tony'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'tom'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'an'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'lee'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'hex'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-48" tabindex="-1"><a class="header-anchor" href="#解答-48" aria-hidden="true">#</a> 解答</h3>
<p>同样考察 <code v-pre>UNION</code> 操作符，通过将两个 <code v-pre>SELECT</code> 语句的结果合并起来即可。</p>
<p>这里需要注意的是得出的结果是 <code v-pre>prod_name</code>，所以需要注意两个 <code v-pre>SELECT</code> 语句的先后顺序，再然后就是需要对查询出的记录按照 <code v-pre>prod_name</code> 正序排列。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> prod_name <span class="token keyword">FROM</span> Products <span class="token keyword">UNION</span> <span class="token keyword">SELECT</span> cust_name <span class="token keyword">FROM</span> Customers <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sql50-纠错4" tabindex="-1"><a class="header-anchor" href="#sql50-纠错4" aria-hidden="true">#</a> SQL50 纠错4</h2>
<h3 id="描述-49" tabindex="-1"><a class="header-anchor" href="#描述-49" aria-hidden="true">#</a> 描述</h3>
<p>表 Customers 含有字段 cust_name 顾客名、cust_contact 顾客联系方式、cust_state 顾客州、cust_email 顾客 email</p>
<table>
<thead>
<tr>
<th>cust_name</th>
<th>cust_contact</th>
<th>cust_state</th>
<th>cust_email</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust10</td>
<td>8695192</td>
<td>MI</td>
<td><a href="mailto:cust10@cust.com">cust10@cust.com</a></td>
</tr>
<tr>
<td>cust1</td>
<td>8695193</td>
<td>MI</td>
<td><a href="mailto:cust1@cust.com">cust1@cust.com</a></td>
</tr>
<tr>
<td>cust2</td>
<td>8695194</td>
<td>IL</td>
<td><a href="mailto:cust2@cust.com">cust2@cust.com</a></td>
</tr>
</tbody>
</table>
<h3 id="问题-49" tabindex="-1"><a class="header-anchor" href="#问题-49" aria-hidden="true">#</a> 问题</h3>
<p>修正下面错误的 SQL</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_name<span class="token punctuation">,</span> cust_contact<span class="token punctuation">,</span> cust_email 
<span class="token keyword">FROM</span> Customers 
<span class="token keyword">WHERE</span> cust_state <span class="token operator">=</span> <span class="token string">'MI'</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name<span class="token punctuation">;</span> 
<span class="token keyword">UNION</span> 
<span class="token keyword">SELECT</span> cust_name<span class="token punctuation">,</span> cust_contact<span class="token punctuation">,</span> cust_email 
<span class="token keyword">FROM</span> Customers 
<span class="token keyword">WHERE</span> cust_state <span class="token operator">=</span> <span class="token string">'IL'</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例结果-40" tabindex="-1"><a class="header-anchor" href="#示例结果-40" aria-hidden="true">#</a> 示例结果</h3>
<p>返回顾客名称：cust_name、顾客联系方式：cust_contact、顾客 email：cust_email</p>
<table>
<thead>
<tr>
<th>cust_name</th>
<th>cust_contact</th>
<th>cust_email</th>
</tr>
</thead>
<tbody>
<tr>
<td>cust1</td>
<td>8695193</td>
<td><a href="mailto:cust1@cust.com">cust1@cust.com</a></td>
</tr>
<tr>
<td>cust10</td>
<td>8695192</td>
<td><a href="mailto:cust10@cust.com">cust10@cust.com</a></td>
</tr>
<tr>
<td>cust2</td>
<td>8695194</td>
<td><a href="mailto:cust2@cust.com">cust2@cust.com</a></td>
</tr>
</tbody>
</table>
<h3 id="示例解析-28" tabindex="-1"><a class="header-anchor" href="#示例解析-28" aria-hidden="true">#</a> 示例解析</h3>
<p>返回住在 &quot;IL&quot; 和 &quot;MI&quot; 的顾客信息，最后根据顾客名称升序排序。</p>
<h3 id="示例-49" tabindex="-1"><a class="header-anchor" href="#示例-49" aria-hidden="true">#</a> 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
    cust_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客id'</span><span class="token punctuation">,</span>
    cust_contact <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客联系方式'</span><span class="token punctuation">,</span>
    cust_state <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客州'</span><span class="token punctuation">,</span>
    cust_email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'顾客email'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token identifier"><span class="token punctuation">`</span>Customers<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'cust10'</span><span class="token punctuation">,</span><span class="token string">'8695192'</span><span class="token punctuation">,</span><span class="token string">'MI'</span><span class="token punctuation">,</span><span class="token string">'cust10@cust.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust1'</span><span class="token punctuation">,</span><span class="token string">'8695193'</span><span class="token punctuation">,</span><span class="token string">'MI'</span><span class="token punctuation">,</span><span class="token string">'cust1@cust.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'cust2'</span><span class="token punctuation">,</span><span class="token string">'8695194'</span><span class="token punctuation">,</span><span class="token string">'IL'</span><span class="token punctuation">,</span><span class="token string">'cust2@cust.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解答-49" tabindex="-1"><a class="header-anchor" href="#解答-49" aria-hidden="true">#</a> 解答</h3>
<p>主要有两处错误，第一是 <code v-pre>UNION</code> 前多加了 <code v-pre>;</code>，<code v-pre>;</code> 表示一条 SQL 的结束，加在此处不适合。</p>
<p>第二则是只主要对 <code v-pre>cust_name</code> 排序一次即可，放在 <code v-pre>UNION</code> 前的 <code v-pre>ORDER BY</code> 关键字显然位置不对。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> cust_name<span class="token punctuation">,</span> cust_contact<span class="token punctuation">,</span> cust_email 
<span class="token keyword">FROM</span> Customers 
<span class="token keyword">WHERE</span> cust_state <span class="token operator">=</span> <span class="token string">'MI'</span>  
<span class="token keyword">UNION</span> 
<span class="token keyword">SELECT</span> cust_name<span class="token punctuation">,</span> cust_contact<span class="token punctuation">,</span> cust_email 
<span class="token keyword">FROM</span> Customers 
<span class="token keyword">WHERE</span> cust_state <span class="token operator">=</span> <span class="token string">'IL'</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cust_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="致谢" tabindex="-1"><a class="header-anchor" href="#致谢" aria-hidden="true">#</a> 致谢</h2>
<p>感谢<a href="http://nowcoder.com/" target="_blank" rel="noopener noreferrer">牛客网<ExternalLinkIcon/></a>提供的题目列表。</p>
</div></template>


