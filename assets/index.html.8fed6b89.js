import{_ as o,r as d,o as s,c as a,a as t,d as n,w as i,b as e}from"./app.5ad16c82.js";const u={},r=t("h3",{id:"geooptix-module-api-list",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#geooptix-module-api-list","aria-hidden":"true"},"#"),e(" GeoOptix Module API List")],-1),_=t("thead",null,[t("tr",null,[t("th",null,"API"),t("th",null,"Description")])],-1),c=e("Search irrig units"),h=t("td",null,"Fetches irrig unit details based on well_id / land_unit_id / irrig_unit_id",-1),p=e("Update well"),m=t("td",null,"Creates or updates a well",-1),f=e("Update land"),g=t("td",null,"Creates or updates a land unit",-1),x=e("Update irrig unit"),w=t("td",null,"Links wells & land units to a given irrigation unit",-1);function b(k,v){const l=d("RouterLink");return s(),a("div",null,[r,t("table",null,[_,t("tbody",null,[t("tr",null,[t("td",null,[n(l,{to:"/gis/search.html"},{default:i(()=>[c]),_:1})]),h]),t("tr",null,[t("td",null,[n(l,{to:"/gis/updatewell.html"},{default:i(()=>[p]),_:1})]),m]),t("tr",null,[t("td",null,[n(l,{to:"/gis/updateland.html"},{default:i(()=>[f]),_:1})]),g]),t("tr",null,[t("td",null,[n(l,{to:"/gis/updateunit.html"},{default:i(()=>[x]),_:1})]),w])])])])}var L=o(u,[["render",b],["__file","index.html.vue"]]);export{L as default};