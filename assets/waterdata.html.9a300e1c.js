import{_ as r,r as p,o as l,c,d as a,w as e,e as i,a as s,b as n}from"./app.5ad16c82.js";const u={},d=i(`<h1 id="get-waterdata" tabindex="-1"><a class="header-anchor" href="#get-waterdata" aria-hidden="true">#</a> Get waterdata</h1><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h3><div class="language-text ext-text"><pre class="language-text"><code>GET {{server_url}}/users/waterdata/{{year}}
</code></pre></div><h3 id="query-params" tabindex="-1"><a class="header-anchor" href="#query-params" aria-hidden="true">#</a> Query params</h3><div class="language-text ext-text"><pre class="language-text"><code>?start_key={{start_key}}&amp;limit={{limit}}&amp;months={{months_array}}
</code></pre></div><h3 id="stored-procedure" tabindex="-1"><a class="header-anchor" href="#stored-procedure" aria-hidden="true">#</a> \u2733\uFE0F Stored Procedure</h3><div class="custom-container tip"><p>usp_get_user_water_data</p></div><h3 id="response-200" tabindex="-1"><a class="header-anchor" href="#response-200" aria-hidden="true">#</a> Response - 200</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Fetched water data successfully.&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;field_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;new field edited&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;acres_utilized&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;inches_acres&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;crop&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tillage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;business_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Salvino D&#39;Sa&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;farm_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Salvino D&#39;Sa&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;field_id&quot;</span><span class="token operator">:</span> <span class="token number">2754</span><span class="token punctuation">,</span>
        <span class="token property">&quot;irrig_unit_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TP1295&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;crop_id&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;farm_practice_id&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;year&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total_acres&quot;</span><span class="token operator">:</span> <span class="token string">&quot;146.25&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_shared_field&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;acres&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gpm&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;irrig_unit_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TP0079&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pump_rate&quot;</span><span class="token operator">:</span> <span class="token number">953</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;irrig_unit_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TP0276&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pump_rate&quot;</span><span class="token operator">:</span> <span class="token number">1023</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;inches_per_acre&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;inches&quot;</span><span class="token operator">:</span> <span class="token number">16.746696</span><span class="token punctuation">,</span>
        <span class="token property">&quot;field_id&quot;</span><span class="token operator">:</span> <span class="token number">2775</span><span class="token punctuation">,</span>
        <span class="token property">&quot;farm_practice_id&quot;</span><span class="token operator">:</span> <span class="token number">9</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;inches&quot;</span><span class="token operator">:</span> <span class="token number">13.390117</span><span class="token punctuation">,</span>
        <span class="token property">&quot;field_id&quot;</span><span class="token operator">:</span> <span class="token number">2779</span><span class="token punctuation">,</span>
        <span class="token property">&quot;farm_practice_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message_code&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-400" tabindex="-1"><a class="header-anchor" href="#response-400" aria-hidden="true">#</a> Response - 400</h3>`,10),k=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Email-id is not present in the database."'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),v=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Start key or Limit is invalid."'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function m(q,b){const t=p("CodeGroupItem"),o=p("CodeGroup");return l(),c("div",null,[d,a(o,null,{default:e(()=>[a(t,{title:"Invalid User",active:""},{default:e(()=>[k]),_:1}),a(t,{title:"Invalid Key/Limit"},{default:e(()=>[v]),_:1})]),_:1})])}var h=r(u,[["render",m],["__file","waterdata.html.vue"]]);export{h as default};
