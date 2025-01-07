import{_ as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.QrrBmjNq.js";import{_ as r}from"./chunks/CustomLink.efBt-4JR.js";import{_ as i,c,j as a,a as l,G as n,a6 as p,o as m}from"./chunks/framework.8Xbk4tT3.js";import"./chunks/theme.VasyDUoe.js";const f=JSON.parse('{"title":"环境的准备","description":"","frontmatter":{},"headers":[],"relativePath":"frame/angular/chapter01.md","filePath":"frame/angular/chapter01.md","lastUpdated":1711371965000}'),d={name:"frame/angular/chapter01.md"};function y(g,s,u,b,C,h){const o=r,e=t;return m(),c("div",null,[s[8]||(s[8]=a("h1",{id:"环境的准备",tabindex:"-1"},[l("环境的准备 "),a("a",{class:"header-anchor",href:"#环境的准备","aria-label":'Permalink to "环境的准备"'},"​")],-1)),s[9]||(s[9]=a("p",null,"开发Web网站，使用合适的工具和环境会极大的提升开发的效率。本章将讲述如何准备用于AngularJS项目开发的环境。",-1)),s[10]||(s[10]=a("p",null,"本书将会使用如下工具和库：",-1)),a("ul",null,[a("li",null,[n(o,{title:"WebStorm",href:"https://www.jetbrains.com/webstorm/"}),s[0]||(s[0]=l(" - 前端开发"))]),a("li",null,[n(o,{title:"Chrome",href:"https://www.google.com/chrome/browser/desktop/index.html?standalone=1"}),s[1]||(s[1]=l(" - Google Chrome浏览器"))]),a("li",null,[n(o,{title:"AngularJS",href:"https://angularjs.org/"}),s[2]||(s[2]=l(" - 前端JS框架"))]),a("li",null,[n(o,{title:"Angular Material",href:"https://material.angularjs.org/latest/"}),s[3]||(s[3]=l(" - 前端界面框架"))]),a("li",null,[n(o,{title:"bower",href:"http://bower.io/"}),s[4]||(s[4]=l(" - 获取包括AngularJS在内的各种开发库"))])]),s[11]||(s[11]=a("p",null,"为了使用bower，您可能还需要安装如下工具：",-1)),a("ul",null,[a("li",null,[n(o,{title:"cnpm",href:"http://npm.taobao.org/"}),s[5]||(s[5]=l(" - 国内用户推荐，淘宝的npm加速服务"))]),a("li",null,[n(o,{title:"npm",href:"https://www.npmjs.com/"}),s[6]||(s[6]=l(" - Node.js的包管理软件"))]),a("li",null,[n(o,{title:"Node.js",href:"https://nodejs.org/en/"}),s[7]||(s[7]=l(" - 基于Chrome V8引擎的本地/服务端JS运行环境"))])]),s[12]||(s[12]=p(`<div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>以上内容除去WebStorm外，都可以免费获得。WebStorm可以获取免费试用30天的版本。</span></span>
<span class="line"><span>因此，您在学习本书的过程中，并不需要花费购买任何软件。</span></span></code></pre></div><h2 id="webstorm" tabindex="-1">WebStorm <a class="header-anchor" href="#webstorm" aria-label="Permalink to &quot;WebStorm&quot;">​</a></h2>`,2)),n(e,{readTime:"4",words:"1.4k"}),s[13]||(s[13]=p('<p>在过去的开发中，WebStorm一直是我对编辑器的首选。WebStorm是商业化的产品，如果长期使用，需要花钱购买（目前已经支持支付宝购买）。价格的话，如果你是一名专职的前端工作人员，可以自行购买或者要求公司购买，个人购买的费用是第一年$59美金，我个人认为还是非常超值的（对比工作效率的提升而言）。另外，出于个人习惯，我使用的是英文版的WebStorm，目前网络上也存在有汉化包，如果希望使用汉化界面的朋友可以自行搜索尝试。</p><p>在学习本书的过程中，您可以使用WebStorm的30天尝试版本（直接下载安装即可）。30天的时间对于学习AngularJS和进行一些初级的开发尝试完全足够了。</p><p>本书写作时使用的WebStorm版本是11.0.3。</p><blockquote><p>WebStorm自8.x版本起就可以正确的开发AngularJS网站（再往前的版本没有评估）。 使用最新的11.0.3版本是在准备本书内容过程中，评估了Angular 2。 而WebStorm是从11版本才开始部分支持Angular 2的TypeScript开发。</p></blockquote><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>另：使用哪种编辑器更多的是个人的偏好。如果您有其它喜欢的编辑器，可以自行选择。</span></span></code></pre></div><h2 id="chrome" tabindex="-1">Chrome <a class="header-anchor" href="#chrome" aria-label="Permalink to &quot;Chrome&quot;">​</a></h2><p>Chrome浏览器的开发者工具可以极大的方便开发时的调试工作，目前国内大量浏览器也是基于Chrome的开源内核开发，在通用性上也有保证。另外，Chrome上有支持WebStorm的插件“JetBrains IDE Support”。</p><p>由于国内网络原因，Chrome浏览器必须要连接至国外路由才能下载。另外推荐您点击以下链接进行下载，这样可以直接下载完整的安装包（直接在Google搜索Chrome的官网页面下载的是一个小型下载器，在国内无法正确安装）。</p>',8)),n(o,{title:"Chrome完整版本下载链接",href:"https://www.google.com/chrome/browser/desktop/index.html?standalone=1"}),s[14]||(s[14]=p(`<p>本书写作时使用的Chrome版本是47.0.2526.106 m。</p><blockquote><p>Chrome的版本对于应用AngularJS并不关键，本书特意安装目前的最新版本，是因为要同时评估Angular 2， 而Angular 2必须要在非常新的浏览器上才能正确运行（v 46+）。</p></blockquote><h2 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h2><p>Node.js在本书中主要的使用用途是运行bower工具，用以安装AngularJS极其相关的库文件。通过官网可以直接下载Node.js的安装包（Windows/OS X都有对应的安装包）。</p><p>本书使用的Node.js版本是5.4.1（目前最新的Stable稳定版本）。推荐安装较新的稳定版本。</p><h2 id="其它工具" tabindex="-1">其它工具 <a class="header-anchor" href="#其它工具" aria-label="Permalink to &quot;其它工具&quot;">​</a></h2><p>在安装好Node.js后，可以通过Node.js的npm命令安装最新版本的npm/cnpm/bower(如果已经存在，自动安装最新版本)。</p><p>使用命令如下：</p><p>Windows上打开cmd，OS X上打开Terminal。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">//Windows</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> npm install -g npm --registry</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> npm install -g cnpm --registry</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> npm install -g bower --registry</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//可选，将npm默认设置从淘宝服务器上获取数据</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> npm config set registry </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://registry.npm.taobao.org</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//OS</span><span style="color:#C3E88D;"> X</span><span style="color:#C3E88D;"> （会需要您输入本机的密码）</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#C3E88D;"> sudo</span><span style="color:#C3E88D;"> npm</span><span style="color:#C3E88D;"> install</span><span style="color:#C3E88D;"> -g</span><span style="color:#C3E88D;"> npm</span><span style="color:#C3E88D;"> --registry=https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#C3E88D;"> sudo</span><span style="color:#C3E88D;"> npm</span><span style="color:#C3E88D;"> install</span><span style="color:#C3E88D;"> -g</span><span style="color:#C3E88D;"> cnpm</span><span style="color:#C3E88D;"> --registry=https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#C3E88D;"> sudo</span><span style="color:#C3E88D;"> npm</span><span style="color:#C3E88D;"> install</span><span style="color:#C3E88D;"> -g</span><span style="color:#C3E88D;"> bower</span><span style="color:#C3E88D;"> --registry=https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//可选，将npm默认设置从淘宝服务器上获取数据</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#C3E88D;"> npm</span><span style="color:#C3E88D;"> config</span><span style="color:#C3E88D;"> set</span><span style="color:#C3E88D;"> registry</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">https://registry.npm.taobao.org</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>所有命令后面都跟上了一个<code>--registry=https://registry.npm.taobao.org</code>标志，这是使用了淘宝提供的npm镜像服务来安装所需的软件，这样访问的速度会加快非常多。 如果您优先运行了后面的可选的命令，那么之前三个命令的此标志项都可以去除。</p><p>OS X的命令和Windows类似，但是前面都加了一个sudo，用于提权后把这些工具安装到Node.js的公共库中。</p><p>安装完成后，请手动命令确认这几个工具的版本。（如果您安装时不成功，请先确认Node.js工具的版本是否是最新的）</p><p>安装好后，您的几个工具的版本应该如下（或者更高）：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#C3E88D;"> npm</span><span style="color:#C3E88D;"> -v</span></span>
<span class="line"><span style="color:#FFCB6B;">3.5.3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#C3E88D;"> cnpm</span><span style="color:#C3E88D;"> -v</span></span>
<span class="line"><span style="color:#FFCB6B;">3.4.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#C3E88D;"> bower</span><span style="color:#C3E88D;"> -v</span></span>
<span class="line"><span style="color:#FFCB6B;">1.7.2</span></span></code></pre></div><h2 id="其它工具和库" tabindex="-1">其它工具和库 <a class="header-anchor" href="#其它工具和库" aria-label="Permalink to &quot;其它工具和库&quot;">​</a></h2><p>其它的工具和库，我们将不再需要从网站上下载安装，直接通过bower在项目内进行下载使用。</p>`,17))])}const w=i(d,[["render",y]]);export{f as __pageData,w as default};