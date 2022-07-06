import{_ as l,r as o,o as r,c,d as a,w as e,e as u,a as s,b as n}from"./app.5ad16c82.js";const i={},d=u(`<h1 id="update-user" tabindex="-1"><a class="header-anchor" href="#update-user" aria-hidden="true">#</a> Update user</h1><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h3><div class="language-text ext-text"><pre class="language-text"><code>PUT {{server_url}}/users
</code></pre></div><h3 id="stored-procedure" tabindex="-1"><a class="header-anchor" href="#stored-procedure" aria-hidden="true">#</a> \u2733\uFE0F Stored Procedure</h3><div class="custom-container tip"><p>usp_update_user_profile</p></div><h3 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> Request</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Verna&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Riya&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Banaulikar-m&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;legal_entities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;riabusiness&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Riya Banaulikar&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token number">8390878405</span><span class="token punctuation">,</span>
  <span class="token property">&quot;postal_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;40345&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Nebraska&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Goa&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;authorized_electric_power_provider&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;cppd&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dppd&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mecc&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nplatte&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prema&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nppds&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;wbppd&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;iotPm&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nppd&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-200" tabindex="-1"><a class="header-anchor" href="#response-200" aria-hidden="true">#</a> Response - 200</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The User profile updated successfully.&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message_code&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-400" tabindex="-1"><a class="header-anchor" href="#response-400" aria-hidden="true">#</a> Response - 400</h3>`,10),k=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Empty fields."'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),v=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Email-id is not present in the database."'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function m(b,q){const t=o("CodeGroupItem"),p=o("CodeGroup");return r(),c("div",null,[d,a(p,null,{default:e(()=>[a(t,{title:"Missing Fields",active:""},{default:e(()=>[k]),_:1}),a(t,{title:"Invalid User Login"},{default:e(()=>[v]),_:1})]),_:1})])}var g=l(i,[["render",m],["__file","update.html.vue"]]);export{g as default};
