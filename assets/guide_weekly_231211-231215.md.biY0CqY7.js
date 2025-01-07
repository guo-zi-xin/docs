import{_ as o}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.Co43k6IT.js";import{_ as l,c as p,j as n,a as e,G as t,a6 as c,o as r}from"./chunks/framework.D7D3iUXQ.js";import"./chunks/theme.BzyCvZRr.js";const f=JSON.parse('{"title":"231211-231215","description":"","frontmatter":{},"headers":[],"relativePath":"guide/weekly/231211-231215.md","filePath":"guide/weekly/231211-231215.md","lastUpdated":1711372342000}'),y={name:"guide/weekly/231211-231215.md"};function F(i,s,D,d,B,u){const a=o;return r(),p("div",null,[s[0]||(s[0]=n("h1",{id:"_231211-231215",tabindex:"-1"},[e("231211-231215 "),n("a",{class:"header-anchor",href:"#_231211-231215","aria-label":'Permalink to "231211-231215"'},"​")],-1)),t(a,{readTime:"2",words:"616"}),s[1]||(s[1]=c(`<h3 id="_23-12-13-❄️" tabindex="-1">23-12-13 ❄️ <a class="header-anchor" href="#_23-12-13-❄️" aria-label="Permalink to &quot;23-12-13 ❄️&quot;">​</a></h3><h4 id="typescript中any与unknown" tabindex="-1">Typescript中<code>any</code>与<code>unknown</code> <a class="header-anchor" href="#typescript中any与unknown" aria-label="Permalink to &quot;Typescript中\`any\`与\`unknown\`&quot;">​</a></h4><ul><li><p><code>any</code></p><p><code>any</code>类型表示没有任何限制，该类型的变量可以赋予任意类型的值。</p><p>一旦设置为<code>any</code>类型， TypeScript 实际上会关闭这个变量的类型检查。即使有明显的类型错误，只要句法正确，都不会报错。</p><p><code>any</code>类型由于跳过了类型检查，它可以随意赋值， 所以可能会带来变量的污染</p></li><li><p><code>unknown</code></p><p><code>unknown</code>是 TypeScript 3.0 引入的类型，它代表了一个未知的类型。</p><p><code>unknown</code> 类型要求进行类型检查和类型断言，以便在使用前确定其实际类型。</p><p><code>unknown</code>类型不能够直接使用, 而<code>any</code>类型是可以的</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// unknown类型赋值给除了 unknown 和 any 类型不会报错， 其它都会报错</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> known</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> unknown</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 123</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> known1 </span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> v</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 报错</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> known2 </span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> v</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 报错</span></span></code></pre></div><p><code>unknown</code>类型也不能够直接调用上面的方法和属性</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> known</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> unknown</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> {</span><span style="color:#F07178;"> foo</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 123</span><span style="color:#89DDFF;"> };</span></span>
<span class="line"><span style="color:#BABED8;">known</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">foo </span><span style="color:#676E95;font-style:italic;">// 报错</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> known2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> unknown</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">known2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#BABED8;">() </span><span style="color:#676E95;font-style:italic;">// 报错</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> known3</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> unknown</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;"> n</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;"> )</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#BABED8;"> n </span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#82AAFF;">known3</span><span style="color:#BABED8;">() </span><span style="color:#676E95;font-style:italic;">// 报错</span></span></code></pre></div><p><code>unknown</code>类型变量能够进行的运算是有限的, 只支持比较运算： 运算符<code>==</code>、<code>===</code>、<code>!=</code>、<code>!==</code>、<code>||</code>、<code>&amp;&amp;</code>、<code>?</code>; 取反运算<code>!</code>、<code>typeof</code>运算符和<code>instance</code>运算符这几种， 其它都会报错</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> aa</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> unknown</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;"> 1</span><span style="color:#676E95;font-style:italic;"> // 报错</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">===</span><span style="color:#F78C6C;"> 1</span><span style="color:#676E95;font-style:italic;"> // 不报错 返回true</span></span></code></pre></div></li></ul><p><strong><code>unknown</code>使用位置</strong></p><p>我们可以通过类型守卫(<code>typeof</code>、<code>instanceof</code>操作符这些)来限制类型范围， 在操作符的加持下， 我们就可以使用<code>unknown</code>类型变量</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> aa</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> aa </span><span style="color:#89DDFF;">===</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;"> let</span><span style="color:#BABED8;"> bb</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> aa</span><span style="color:#89DDFF;"> +</span><span style="color:#F78C6C;"> 10</span><span style="color:#676E95;font-style:italic;"> // 可以正常运行</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="typescript中的never类型" tabindex="-1">Typescript中的<code>never</code>类型 <a class="header-anchor" href="#typescript中的never类型" aria-label="Permalink to &quot;Typescript中的\`never\`类型&quot;">​</a></h4><p>为了保持与<em>集合论</em>的对应关系，以及类型运算的完整性，TypeScript 还引入了“空类型”的概念，即该类型为空，不包含任何值</p><ul><li><p><strong>使用场景</strong></p><p>主要是在一些类型运算中，保证类型的完整性，例如在一个联合类型中， 通过类型守卫进行类型范围缩小后，剩余的情况就是<code>never</code>类型</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> fun </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> string</span><span style="color:#89DDFF;"> |</span><span style="color:#FFCB6B;"> number</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> value</span><span style="color:#89DDFF;"> ===</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 此时为 string 类型</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span><span style="color:#89DDFF;font-style:italic;"> else</span><span style="color:#89DDFF;font-style:italic;"> if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> value</span><span style="color:#89DDFF;"> ===</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 此时为 number 类型</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span><span style="color:#89DDFF;font-style:italic;"> else</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 此时为 never 类型</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li></ul><p><code>never</code>类型可以复制给任意其它类型</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> fun1 </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> ():</span><span style="color:#FFCB6B;">never</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;"> throw</span><span style="color:#89DDFF;"> new</span><span style="color:#82AAFF;"> Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> aa</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> fun1</span><span style="color:#BABED8;">() </span><span style="color:#676E95;font-style:italic;">//正常运行</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> bb</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> string</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> fun1</span><span style="color:#BABED8;">() </span><span style="color:#676E95;font-style:italic;">//正常运行</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> cc</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> boolean</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> fun1</span><span style="color:#BABED8;">() </span><span style="color:#676E95;font-style:italic;">//正常运行</span></span></code></pre></div><p><strong>Typescript中有两个 &quot;顶层类型&quot; (<code>any</code>与<code>unknown</code>), 只有一个&quot;底层类型&quot;(<code>never</code>)</strong></p>`,12))])}const k=l(y,[["render",F]]);export{f as __pageData,k as default};