import{_ as c,r as p,o as r,c as i,d as a,w as e,e as l,a as s,b as n}from"./app.5ad16c82.js";const u={},d=l(`<h1 id="user-details-on-keys" tabindex="-1"><a class="header-anchor" href="#user-details-on-keys" aria-hidden="true">#</a> User details on keys</h1><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h3><div class="language-text ext-text"><pre class="language-text"><code>POST {{server_url}}/users/user-details
</code></pre></div><h3 id="stored-procedure" tabindex="-1"><a class="header-anchor" href="#stored-procedure" aria-hidden="true">#</a> \u2733\uFE0F Stored Procedure</h3><div class="custom-container tip"><p>usp_get_user_detail_on_key</p></div><h3 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> Request</h3>`,6),k=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"search"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
    `),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"key"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"PHONE"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"xxxxxxxxxx"'),n(`
    `),s("span",{class:"token punctuation"},"}"),n(`
  `),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),m=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"search"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
    `),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"key"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"EMAIL"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"xxxxxxxxx@xxx.com"'),n(`
    `),s("span",{class:"token punctuation"},"}"),n(`
  `),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),v=l(`<h3 id="response-200" tabindex="-1"><a class="header-anchor" href="#response-200" aria-hidden="true">#</a> Response - 200</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The user details are fetched successfully.&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vasco&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_id&quot;</span><span class="token operator">:</span> <span class="token number">523</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sneha92@mailinator.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sneha&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Nagarsenker&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;legal_entities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sneha Nagarsenker&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token number">8668417759</span><span class="token punctuation">,</span>
    <span class="token property">&quot;postal_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;444111&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message_code&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-400" tabindex="-1"><a class="header-anchor" href="#response-400" aria-hidden="true">#</a> Response - 400</h3>`,3),b=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Empty fields."'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Email-id is not present in the database."'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"You cannot share this field with yourself."'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function _(q,x){const t=p("CodeGroupItem"),o=p("CodeGroup");return r(),i("div",null,[d,a(o,null,{default:e(()=>[a(t,{title:"With Phone",active:""},{default:e(()=>[k]),_:1}),a(t,{title:"With Email"},{default:e(()=>[m]),_:1})]),_:1}),v,a(o,null,{default:e(()=>[a(t,{title:"Empty Fields",active:""},{default:e(()=>[b]),_:1}),a(t,{title:"Invalid User",active:""},{default:e(()=>[h]),_:1}),a(t,{title:"Self Share"},{default:e(()=>[g]),_:1})]),_:1})])}var f=c(u,[["render",_],["__file","detailsOnKey.html.vue"]]);export{f as default};