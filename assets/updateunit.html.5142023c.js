import{_ as l,r as o,o as i,c as r,d as a,w as e,e as c,a as n,b as s}from"./app.5ad16c82.js";const u={},d=c(`<h1 id="update-irrig-unit" tabindex="-1"><a class="header-anchor" href="#update-irrig-unit" aria-hidden="true">#</a> Update irrig unit</h1><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h3><div class="language-text ext-text"><pre class="language-text"><code>POST {{server_url}}/gis/irrig-units
</code></pre></div><h3 id="stored-procedure" tabindex="-1"><a class="header-anchor" href="#stored-procedure" aria-hidden="true">#</a> \u2733\uFE0F Stored Procedure</h3><div class="custom-container tip"><p>gis_add_update_irrig_units</p></div><h3 id="short-request" tabindex="-1"><a class="header-anchor" href="#short-request" aria-hidden="true">#</a> Short Request</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;irrig_units&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;irrig_unit_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TP0038&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;well_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;G-005125&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;land_unit_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;112623BC&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="long-request" tabindex="-1"><a class="header-anchor" href="#long-request" aria-hidden="true">#</a> Long Request</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;irrig_units&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;irrig_unit_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TP0038&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;well_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;G-005125&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;land_unit_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;112623BC&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;prod&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sfz_id&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ez_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;display_id&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-200" tabindex="-1"><a class="header-anchor" href="#response-200" aria-hidden="true">#</a> Response - 200</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Updated irrigation unit successfully.&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message_code&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-400" tabindex="-1"><a class="header-anchor" href="#response-400" aria-hidden="true">#</a> Response - 400</h3>`,12),k=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"message"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Cannot update irrig unit with uint_type NCORPE."'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"message_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"message"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Requested well was not found. Please provide a valid well id."'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"message_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"message"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Request land unit not found. Please provide a valid land unit id."'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"message_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"message"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Land unit ids contain deleted land units."'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"message_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"message"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Well ids contain deleted wells."'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"message_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"message"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Cannot set prod to true for irrig unit with 0 acres."'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"message_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(q,y){const t=o("CodeGroupItem"),p=o("CodeGroup");return i(),r("div",null,[d,a(p,null,{default:e(()=>[a(t,{title:"NCORPE Error",active:""},{default:e(()=>[k]),_:1}),a(t,{title:"Invalid Well"},{default:e(()=>[m]),_:1}),a(t,{title:"Invalid Land"},{default:e(()=>[v]),_:1}),a(t,{title:"Deleted Land"},{default:e(()=>[b]),_:1}),a(t,{title:"Deleted Wells"},{default:e(()=>[g]),_:1}),a(t,{title:"Zero Acres"},{default:e(()=>[h]),_:1})]),_:1})])}var j=l(u,[["render",_],["__file","updateunit.html.vue"]]);export{j as default};