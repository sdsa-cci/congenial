import{_ as r,r as o,o as p,c,d as e,w as a,e as i,a as s,b as n}from"./app.5ad16c82.js";const u={},d=i(`<h1 id="add-share-field" tabindex="-1"><a class="header-anchor" href="#add-share-field" aria-hidden="true">#</a> Add share field</h1><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h3><div class="language-text ext-text"><pre class="language-text"><code>POST {{server_url}}/fields/share
</code></pre></div><h3 id="stored-procedure" tabindex="-1"><a class="header-anchor" href="#stored-procedure" aria-hidden="true">#</a> \u2733\uFE0F Stored Procedure</h3><div class="custom-container tip"><p>usp_share_user_field</p></div><h3 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> Request</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;secondary_user_email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;riya.banaulikar@creativecapsule.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;share_fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;field_id&quot;</span><span class="token operator">:</span> <span class="token number">2506</span><span class="token punctuation">,</span>
      <span class="token property">&quot;field_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SFN-8888&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;editor&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-200" tabindex="-1"><a class="header-anchor" href="#response-200" aria-hidden="true">#</a> Response - 200</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Field(s) shared successfully.&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message_code&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-400" tabindex="-1"><a class="header-anchor" href="#response-400" aria-hidden="true">#</a> Response - 400</h3>`,10),k=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Email-id is not present in the database."'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),m=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"The field(s) you are trying to share are already shared"'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"data"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token number"},"2506"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),v=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Field ids have duplicate values."'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),b=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Selected share field id(s) are invalid."'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function h(g,_){const t=o("CodeGroupItem"),l=o("CodeGroup");return p(),c("div",null,[d,e(l,null,{default:a(()=>[e(t,{title:"Invalid User",active:""},{default:a(()=>[k]),_:1}),e(t,{title:"Already Shared",active:""},{default:a(()=>[m]),_:1}),e(t,{title:"Duplicate Fields"},{default:a(()=>[v]),_:1}),e(t,{title:"Invalid Fields"},{default:a(()=>[b]),_:1})]),_:1})])}var y=r(u,[["render",h],["__file","add.html.vue"]]);export{y as default};
