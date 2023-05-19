import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-33926075.js";const t="/ox-admin-doc/assets/images/img.png",i="/ox-admin-doc/assets/images/img_1.png",l="/ox-admin-doc/assets/images/img_2.png",c="/ox-admin-doc/assets/images/img_3.png",o="/ox-admin-doc/assets/images/img_4.png",p="/ox-admin-doc/assets/images/img_5.png",u="/ox-admin-doc/assets/images/img_6.png",d="/ox-admin-doc/assets/images/img_7.png",r="/ox-admin-doc/assets/images/img_8.png",m="/ox-admin-doc/assets/images/img_9.png",g={},k=e('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>正常我们利用 Vuepress 搭建一个文档博客之后，往往都是通过如下步骤来部署一篇博客：</p><ol><li>首先写文章；</li><li>写完文章之后生成静态文件，这里一般使用的是 npm run build 命令，但也有使用 yarn build 的；</li><li>将我们生成的静态文件推送到 Github Pages；</li><li>访问我们对应的网址，查看我们的推送是否成功。</li></ol><p>上述步骤看似简单，但一旦文档过多时，生成静态文件就十分耗费时间。这时候我们就想了，有不有一种方法，能够帮我们自动构建静态文件然后部署到 Github Pages 上呢。刚好，Github 官方提供了这个一个工具：Github Actions。利用它，我们就能够将重心转移到创作之后，每次创作之后推送到远程之后它就会自动后续工作，接下来我们就来看看如何利用 Github Action 实现自动部署我们的博客。</p><h2 id="github-生成-token" tabindex="-1"><a class="header-anchor" href="#github-生成-token" aria-hidden="true">#</a> Github 生成 Token</h2><p>要部署 Actions，那么它就需要有能够操作我们仓库的权限，因此需要提前设置个人访问令牌（personal access token）。设置方法如下：进入 Github 后，点击我们的头像，然后依次进入 Settings -&gt; Developer settings -&gt; Personal access tokens -&gt; Tokens (classic) -&gt; Generate new token (classic) 。接着输入 token 的名字，这个名字可以随意，不过还是推荐根据它的用途来命名，然后选 Expiration，也就是这个 Token 的有效期，如果我们要长期用，建议选为 No expiration，意思就是无期限。最后就是选权限，一般来讲这里选 repo 就够了，但是如果你不确定，那就全都选上也行。然后点击 Generate Token，会生成一个令牌，注意这里它只会出现一次，一旦刷新该网页就不见了，所以最好把它复制到你的备忘录备份一下，而且我们待会也是需要用到这个 Token 的。</p><p><img src="'+t+'" alt="GitHub Light" loading="lazy"><img src="'+i+'" alt="GitHub Light" loading="lazy"><img src="'+l+'" alt="GitHub Light" loading="lazy"><img src="'+c+'" alt="GitHub Light" loading="lazy"><img src="'+o+'" alt="GitHub Light" loading="lazy"></p><h2 id="设置-secrets" tabindex="-1"><a class="header-anchor" href="#设置-secrets" aria-hidden="true">#</a> 设置 Secrets</h2><p>进入你存放你博客源码的项目，然后依次点击 Settings -&gt; Secrets and variables -&gt; Actions，接着点击右上角的 New repository secret，新建一个 Secret。这里的名字要命名为 ACCESS_TOKEN，然后 Value 就是我们上一步中所生成的 Token。</p><p><img src="'+p+'" alt="GitHub Light" loading="lazy"><img src="'+u+'" alt="GitHub Light" loading="lazy"><img src="'+d+'" alt="GitHub Light" loading="lazy"><img src="'+r+`" alt="GitHub Light" loading="lazy"></p><h2 id="编写-action" tabindex="-1"><a class="header-anchor" href="#编写-action" aria-hidden="true">#</a> 编写 Action</h2><p>项目中创建目录 .github/workflows，让后创建文件 deploy.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># name 可以自定义</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy GitHub Pages

<span class="token comment"># 触发条件：在 push 到 main/master 分支后，新的 Github 项目 应该都是 main，而之前的项目一般都是 master</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main

<span class="token comment"># 任务</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token comment"># 服务器环境：最新版 Ubuntu</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 拉取代码</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

      <span class="token comment"># 生成静态文件</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token important">&amp;&amp;</span> npm run docs<span class="token punctuation">:</span>build

      <span class="token comment"># 部署到 GitHub Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@releases/v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 也就是我们刚才生成的 secret</span>
          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages <span class="token comment"># 部署到 gh-pages 分支，因为 main 分支存放的一般是源码，而 gh-pages 分支则用来存放生成的静态文件</span>
          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> src/.vuepress/dist <span class="token comment"># vuepress 生成的静态文件存放的地方</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2><p>提交代码就会触发ci/cd，点击Actions查看，部署完成就可以访问啦，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 如果你准备发布到 https://&lt;USERNAME&gt;.github.io/，
你必须将整个项目上传至 https://github.com/&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io 仓库。
在这种情况下你无需进行任何更改，因为 base 默认就是 &quot;/&quot;。
2. 如果你的仓库地址是一个普通的形如 https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt; 的格式，
网站将会被发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/ ，
也就是说，你需要将 base 设置为 &quot;/&lt;REPO&gt;/&quot;。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="GitHub Light" tabindex="0" loading="lazy"><figcaption>GitHub Light</figcaption></figure>',17),v=[k];function b(h,_){return s(),a("div",null,v)}const G=n(g,[["render",b],["__file","1.html.vue"]]);export{G as default};
