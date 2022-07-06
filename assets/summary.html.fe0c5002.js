import{_ as r,r as a,o as l,c,d as e,w as t,e as u,a as s,b as n}from"./app.5ad16c82.js";const i={},d=u(`<h1 id="get-well-summary" tabindex="-1"><a class="header-anchor" href="#get-well-summary" aria-hidden="true">#</a> Get well summary</h1><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h3><div class="language-text ext-text"><pre class="language-text"><code>GET {{server_url}}/wells/{{wellID}}/summary-statistics
</code></pre></div><h3 id="stored-procedure" tabindex="-1"><a class="header-anchor" href="#stored-procedure" aria-hidden="true">#</a> \u2733\uFE0F Stored Procedure</h3><div class="custom-container tip"><p>geo_get_well_summary</p></div><h3 id="response-200" tabindex="-1"><a class="header-anchor" href="#response-200" aria-hidden="true">#</a> Response - 200</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Fetched well summary successfully&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;wellRegistrationID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;G-061965&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;wellIrrigUnitID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TP2179&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;wellConnectedMeter&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;wellAuditPumpRate&quot;</span><span class="token operator">:</span> <span class="token number">1094</span><span class="token punctuation">,</span>
    <span class="token property">&quot;auditPumpRateUpdated&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-10-02&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;wellDistrictPumpRate&quot;</span><span class="token operator">:</span> <span class="token number">1100</span><span class="token punctuation">,</span>
    <span class="token property">&quot;districtPumpRateUpdated&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-10-08&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;location&quot;</span><span class="token operator">:</span> <span class="token string">&quot;POINT(-101.0453 41.0981)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;electric&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;irrigationUnitGeometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MULTIPOLYGON(((-101.047377739284 41.101158586282,-101.047478398874 41.1007646788256,-101.047538330269 41.1003442086564,-101.047458259163 41.0999384557099,-101.047327157756 41.0995304293433,-101.047094790853 41.0991808235047,-101.046448469159 41.0985779229154,-101.045953413633 41.0981798317232,-101.045194605932 41.0978275567821,-101.044550731599 41.0976993548348,-101.044156304291 41.097678428915,-101.043850563661 41.097739708331,-101.04362025054 41.097858314014,-101.043214769674 41.097872005998,-101.042773453264 41.0979263777094,-101.042298694762 41.0980930492691,-101.041910030462 41.0982581925364,-101.041500796817 41.0985540221083,-101.041247304961 41.0988151672941,-101.040841726823 41.0995245196619,-101.040825263569 41.1013772808622,-101.041223554554 41.1019194458788,-101.041954231348 41.1024650267011,-101.042601896032 41.1027141904032,-101.043430310913 41.1028391297029,-101.043966129595 41.1030530339186,-101.044483875996 41.1030810793454,-101.044987305152 41.1030442152237,-101.045414624233 41.1029342283682,-101.045742386511 41.1027887749494,-101.046166524757 41.1025764442429,-101.0469262206 41.1019293925883,-101.047205674533 41.1015619271201,-101.047377739284 41.101158586282),(-101.047399737172 41.0957308724815,-101.047430690381 41.0957063294938,-101.04798933316 41.0953125142744,-101.048433900228 41.0932892232306,-101.048027462009 41.0924567094623,-101.047107198385 41.0914173912338,-101.045887124784 41.0909352238589,-101.043540897716 41.0909528833916,-101.042688083631 41.0910639825161,-101.041875131283 41.0914382882052,-101.04107405003 41.0921962593749,-101.040811055062 41.0929206999555,-101.040708249345 41.0947219740935,-101.041497957129 41.0956436919473,-101.042596496387 41.0962960117134,-101.043906537626 41.0966086664961,-101.045173733322 41.0965621786973,-101.046562506209 41.0963455692876,-101.047399737172 41.0957308724815)))&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;wellRegistered&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;registeredPumpRate&quot;</span><span class="token operator">:</span> <span class="token number">1100</span><span class="token punctuation">,</span>
    <span class="token property">&quot;registeredUpdated&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-01-14&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;registeredUserDetails&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;registeredUser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Dennis Brown&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;registeredFieldName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pivot5&amp;7&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;acresYear&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;year&quot;</span><span class="token operator">:</span> <span class="token number">2022</span><span class="token punctuation">,</span>
        <span class="token property">&quot;acres&quot;</span><span class="token operator">:</span> <span class="token number">147.61</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;year&quot;</span><span class="token operator">:</span> <span class="token number">2021</span><span class="token punctuation">,</span>
        <span class="token property">&quot;acres&quot;</span><span class="token operator">:</span> <span class="token number">147.61</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;year&quot;</span><span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span>
        <span class="token property">&quot;acres&quot;</span><span class="token operator">:</span> <span class="token number">147.61</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;year&quot;</span><span class="token operator">:</span> <span class="token number">2019</span><span class="token punctuation">,</span>
        <span class="token property">&quot;acres&quot;</span><span class="token operator">:</span> <span class="token number">147.61</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message_code&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-400" tabindex="-1"><a class="header-anchor" href="#response-400" aria-hidden="true">#</a> Response - 400</h3>`,8),k=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"message"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Requested well was not found. Please provide a valid well id."'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"400"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"message_code"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function m(v,q){const o=a("CodeGroupItem"),p=a("CodeGroup");return l(),c("div",null,[d,e(p,null,{default:t(()=>[e(o,{title:"Invalid Well ID",active:""},{default:t(()=>[k]),_:1})]),_:1})])}var y=r(i,[["render",m],["__file","summary.html.vue"]]);export{y as default};
