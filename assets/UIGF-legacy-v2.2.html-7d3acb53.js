import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as i,a as t,b as e,d as a,e as l}from"./app-7c7b2870.js";const c={},h=t("h1",{id:"uniformed-interchangeable-gachalog-format-standard-v2-2",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#uniformed-interchangeable-gachalog-format-standard-v2-2","aria-hidden":"true"},"#"),e(" Uniformed Interchangeable GachaLog Format Standard v2.2")],-1),p=t("h2",{id:"manifesto",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#manifesto","aria-hidden":"true"},"#"),e(" Manifesto")],-1),u=t("p",null,[e("With the conflict between Genshin Impact's popularity and its lack of software supporting, there has been variety of"),t("br"),e(" third-party Genshin Impact wish history export software. As they are getting more versatile and complex, the cost of"),t("br"),e(" switch between those software are getting much higher.")],-1),g=t("p",null,"As a result, we (list in alphabetical order):",-1),m={href:"https://github.com/biuuu/genshin-wish-export",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/DGP-Studio/Snap.Genshin",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/Scighost/KeqingNiuza",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/sunfkny/genshin-gacha-export",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/TremblingMoeNew/DodocoTales",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/voderl/genshin-gacha-analyzer",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>Make standard here together to strengthen the data exchange-ability between each Genshin-related App.</p><p>We will also make new standards if there&#39;s more data can be transferred in the further.</p><h2 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions" aria-hidden="true">#</a> Precautions</h2><blockquote><p>When adapting this format, please note that some name field may contain underline <code>_</code> or space<br> This format only adapting <strong>Simplified Chinese</strong></p></blockquote><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> Id</h3><p>Genshin&#39;s wish record contains a special field <code>id</code> which is introduced in patch 1.3,<br> all records exported before that will not have associated <code>id</code> without compatibility modification.</p><p>When exporting</p><ul><li>Make sure every item have valid <code>id</code></li><li>It is recommended that starting from the last item with a valid <code>id</code>, the value of <code>id</code> is decremented<br> forward (relative to time), and the value of each decrement should be kept as <code>1</code></li><li>Generated <code>id</code> value should not larger than <code>1612303200000000000</code></li><li>Application should not assume every <code>gacha_time</code> have a valid <code>id</code><ul><li>So the application should have ability to handle record with <code>null</code> or empty value in the <code>id</code> field</li></ul></li></ul><h3 id="gachatype" tabindex="-1"><a class="header-anchor" href="#gachatype" aria-hidden="true">#</a> GachaType</h3><p>The probabilistic wish system has a shared pity rule, so we need extra field to identify the pool.<br> In <code>UIGF</code> format, we added a <code>uigf_gacha_type</code> field addition to the original wish record data.</p><p>Please remember to add corresponding <code>uigf_gacha_type</code> field when applying <code>UIGF</code> format</p><h4 id="uigf-gacha-type-mapping" tabindex="-1"><a class="header-anchor" href="#uigf-gacha-type-mapping" aria-hidden="true">#</a> <code>uigf_gacha_type</code> Mapping</h4><table><thead><tr><th><code>uigf_gacha_type</code></th><th><code>gacha_type</code></th></tr></thead><tbody><tr><td>100</td><td>100</td></tr><tr><td>200</td><td>200</td></tr><tr><td>301</td><td>301|400</td></tr><tr><td>302</td><td>302</td></tr></tbody></table><h2 id="excel-workbook-workbook-format" tabindex="-1"><a class="header-anchor" href="#excel-workbook-workbook-format" aria-hidden="true">#</a> Excel Workbook (Workbook Format)</h2><blockquote><p>Uniformed Interchangeable GachaLog Format standard of Workbook (UIGF.W)</p></blockquote><h3 id="file-name" tabindex="-1"><a class="header-anchor" href="#file-name" aria-hidden="true">#</a> File Name</h3><p>We suggest:</p><ul><li>Contain user&#39;s <code>uid</code> in the file name</li><li>Users have choice to confirm file name before the export</li></ul><h3 id="format-of-shell" tabindex="-1"><a class="header-anchor" href="#format-of-shell" aria-hidden="true">#</a> Format of Shell</h3><ul><li>When filling the shell with data, the format should be set to string (<code>Text</code>)</li></ul><h3 id="sheet-name-and-content" tabindex="-1"><a class="header-anchor" href="#sheet-name-and-content" aria-hidden="true">#</a> Sheet Name and Content</h3><table><thead><tr><th>Sheet Name</th><th>Content</th><th>Category</th><th>Required</th></tr></thead><tbody><tr><td>统计分析</td><td>Statistical analysis content, etc.</td><td>Any</td><td>No</td></tr><tr><td>角色活动祈愿</td><td>Data of <code>gacha_type</code> : <code>301|400</code></td><td>Wish record table</td><td>No, but should have</td></tr><tr><td>武器活动祈愿</td><td>Data of <code>gacha_type</code> : <code>302</code></td><td>Wish record table</td><td>No, but should have</td></tr><tr><td>常驻祈愿</td><td>Data of <code>gacha_type</code> : <code>200</code></td><td>Wish record table</td><td>No, but should have</td></tr><tr><td>新手祈愿</td><td>Data of <code>gacha_type</code> : <code>100</code></td><td>Wish record table</td><td>No, but should have</td></tr><tr><td>原始数据</td><td>All raw data of wish history</td><td>Raw wish data</td><td><strong>Yes, see details below</strong></td></tr></tbody></table><ul><li>The order of the tables can be arbitrary</li><li>The application can hide some table to prevent user to modify the data</li><li>Sheet name should be kept same as described in the game</li></ul><blockquote><p>Application should transmit data through <strong>raw wish history data</strong></p></blockquote><h3 id="wish-record-sheet-structure" tabindex="-1"><a class="header-anchor" href="#wish-record-sheet-structure" aria-hidden="true">#</a> Wish Record Sheet Structure</h3><p>This section is to normalize analysis-related applications</p><ul><li>The content filling order corresponding to the table header needs to be arranged in strict accordance<br> with the instructions below</li><li><strong>Shared pity pool</strong> is differentiated with <code>gacha_type</code></li><li>This category of sheet allows user to view data intuitively and wish analysis can work easier</li></ul><table><thead><tr><th>Column Header</th><th>Content</th><th>Required</th></tr></thead><tbody><tr><td>时间</td><td><code>time</code> formatted in <code>yyyy-MM-dd HH:mm:ss</code></td><td>Yes</td></tr><tr><td>名称</td><td><code>name</code> Item Name</td><td>Yes</td></tr><tr><td>物品类型</td><td><code>item_type</code></td><td>Yes</td></tr><tr><td>星级</td><td><code>rank_type</code></td><td>Yes</td></tr><tr><td>祈愿类型</td><td><code>gacha_type</code> escaped name</td><td>Yes</td></tr><tr><td>...</td><td>...</td><td>No</td></tr></tbody></table><blockquote><p>You can add other column headers if you think it&#39;s necessary, but please make sure that the first few columns<br> of the header are the contents of the above table specification</p></blockquote><blockquote><p>The data in the table is usually arranged in ascending or descending order by wish ID,<br> and the analysis app should not assume that the order in the table is a specific ascending or descending order</p></blockquote><h4 id="gacha-type-escaped-name" tabindex="-1"><a class="header-anchor" href="#gacha-type-escaped-name" aria-hidden="true">#</a> <code>gacha_type</code> Escaped Name</h4><table><thead><tr><th>gacha_type</th><th>Escaped Name</th></tr></thead><tbody><tr><td>100</td><td>新手祈愿</td></tr><tr><td>200</td><td>常驻祈愿</td></tr><tr><td>301</td><td>角色活动祈愿</td></tr><tr><td>400</td><td>角色活动祈愿-2</td></tr><tr><td>302</td><td>武器活动祈愿</td></tr></tbody></table><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><table><thead><tr><th>时间</th><th>名称</th><th>类别</th><th>星级</th><th>祈愿类型</th><th>...</th></tr></thead><tbody><tr><td>2021-02-17 18:45:09</td><td>以理服人</td><td>武器</td><td>3</td><td>角色活动祈愿-2</td><td>...</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table><h3 id="raw-wish-data-sheet" tabindex="-1"><a class="header-anchor" href="#raw-wish-data-sheet" aria-hidden="true">#</a> Raw Wish Data Sheet</h3><p>When exporting</p><ul><li>Applications should ask user if they should include the raw data when exporting</li><li>Once the workbook contains <code>原始数据</code> (raw data) worksheet, it indicates that the exported data supporting this format</li><li>The raw data sheet should be filled strictly follow the instruction in this page</li><li><strong>The order of column should be set strictly follow the requirement below</strong></li><li>Existing fields are sorted in ascending <strong>dictionary order</strong>,<br> and subsequent new fields are sorted in the order of addition</li><li>If there is no special requirement, we recommend exporting all the fields contained in the JSON data</li></ul><p>When importing</p><ul><li>We strongly recommended you to write programs that do import independently of the ordinal position of the columns,<br> for maximum compatibility</li><li>If the values of some of the non-essential fields are omitted,<br> please keep the column header and the corresponding columns will be empty</li></ul><table><thead><tr><th>Column Header</th><th>Required</th></tr></thead><tbody><tr><td><code>count</code></td><td>No, but suggest to keep, may to have situation that <code>count</code> not equal to 1 in the future</td></tr><tr><td><code>gacha_type</code></td><td>Yes</td></tr><tr><td><code>id</code></td><td>Yes, but suggest to keep, most applications use it to sort record</td></tr><tr><td><code>item_id</code></td><td>No, it is deprecated field from official data set</td></tr><tr><td><code>item_type</code></td><td>Yes</td></tr><tr><td><code>lang</code></td><td>No, but suggest to keep, for internationalization usage</td></tr><tr><td><code>name</code></td><td>Yes</td></tr><tr><td><code>rank_type</code></td><td>No, but suggest to keep, for analysis-related app use purpose</td></tr><tr><td><code>time</code></td><td>No, but suggest to keep, for analysis-related app use purpose</td></tr><tr><td><code>uid</code></td><td>No, but suggest ask user if keep or not, for analysis-related app use purpose</td></tr><tr><td><code>uigf_gacha_type</code></td><td>Yes</td></tr></tbody></table><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h4><table><thead><tr><th>count</th><th>gacha_type</th><th>id</th><th>item_id</th><th>item_type</th><th>lang</th><th>name</th><th>rank_type</th><th>time</th><th>uid</th><th>uigf_gacha_type</th></tr></thead><tbody><tr><td>1</td><td>301</td><td>1613556360008291100</td><td></td><td>武器</td><td>zh-cn</td><td>以理服人</td><td>3</td><td>2021-02-17 18:45:09</td><td>123456789</td><td>301</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table><h2 id="json-format" tabindex="-1"><a class="header-anchor" href="#json-format" aria-hidden="true">#</a> Json Format</h2><blockquote><p>Uniformed Interchangeable GachaLog Format standard of Json (UIGF.J)</p></blockquote><p>We also made this standard because Json format is used by Genshin Impact&#39;s official API, and it&#39;s easier for<br> applications to import and export.</p><p>This format should only be used for data transmission between applications.</p><h3 id="exported-stucture" tabindex="-1"><a class="header-anchor" href="#exported-stucture" aria-hidden="true">#</a> Exported Stucture</h3><p>With the idea of extracting to the UIGF.W section with the same value field,<br> we have drawn up the following json format</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;info&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;uid&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;000000000&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lang&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;zh-cn&quot;</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;gacha_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;000&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;item_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;以理服人&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;item_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;武器&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;rank_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1600099200004770203&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;uigf_gacha_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;000&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> <code>info</code></h3><p>Addition to <code>uid</code> and <code>lang</code> fields extracted from <code>{gacha_item}</code>, we also recognize the following field</p><table><thead><tr><th>Field Name</th><th>Value</th><th>Note</th></tr></thead><tbody><tr><td><code>export_time</code></td><td>Exported time in format of <code>yyyy-MM-dd HH:mm:ss</code></td><td></td></tr><tr><td><code>export_timestamp</code></td><td>Exported time in UNIX timestamp</td><td>v2.2+</td></tr><tr><td><code>export_app</code></td><td>Name of export application, see details in table below</td><td></td></tr><tr><td><code>export_app_version</code></td><td>Version of export application</td><td></td></tr><tr><td><code>uigf_version</code></td><td><code>UIGF</code> version applied, keep this to prevent application not working when UIGF have breaking update</td><td></td></tr></tbody></table><h4 id="uigf-version" tabindex="-1"><a class="header-anchor" href="#uigf-version" aria-hidden="true">#</a> <code>uigf_version</code></h4><p>Valid values:</p><table><thead><tr><th>Value</th><th>Note</th><th>Compatibility</th></tr></thead><tbody><tr><td><code>v2.0</code></td><td>First public official version</td><td>v2.0</td></tr><tr><td><code>v2.1</code></td><td>Simplified in language expression, data format is completely consistent with v2.0</td><td>v2.1 and lower</td></tr><tr><td><code>v2.2</code></td><td>Add <code>info.export_timestamp</code> to fill UNIX timestamp</td><td>v2.2 and lower</td></tr></tbody></table><h4 id="export-app" tabindex="-1"><a class="header-anchor" href="#export-app" aria-hidden="true">#</a> <code>export_app</code></h4><p>Application haven&#39;t made export feature are filled with <code>-</code></p>`,57),w=t("thead",null,[t("tr",null,[t("th",null,"Export Applicaiton"),t("th",null,[t("code",null,"export_app"),e(" Value")])])],-1),x={href:"https://github.com/biuuu/genshin-wish-export",target:"_blank",rel:"noopener noreferrer"},q=t("td",null,[t("code",null,"genshin-wish-export")],-1),N={href:"https://github.com/DGP-Studio/Snap.Genshin",target:"_blank",rel:"noopener noreferrer"},G=t("td",null,[t("code",null,"Snap Genshin")],-1),S={href:"https://gtool.mukapp.top/",target:"_blank",rel:"noopener noreferrer"},I=t("td",null,[t("code",null,"MUKGenshinTool")],-1),T={href:"https://github.com/Scighost/KeqingNiuza",target:"_blank",rel:"noopener noreferrer"},W=t("td",null,"-",-1),F={href:"https://github.com/Scighost/Xunkong",target:"_blank",rel:"noopener noreferrer"},U=t("td",null,[t("code",null,"Xunkong.Desktop")],-1),M={href:"https://github.com/sunfkny/genshin-gacha-export",target:"_blank",rel:"noopener noreferrer"},D=t("td",null,[t("code",null,"genshin-gacha-export")],-1),z={href:"https://github.com/TremblingMoeNew/DodocoTales",target:"_blank",rel:"noopener noreferrer"},A=t("td",null,"-",-1),E={href:"https://github.com/voderl/genshin-gacha-analyzer",target:"_blank",rel:"noopener noreferrer"},Y=t("td",null,"-",-1);function C(V,H){const n=d("Badge"),o=d("ExternalLinkIcon");return s(),i("div",null,[h,t("blockquote",null,[t("p",null,[e("Uniformed Interchangeable GachaLog Format standard (UIGF) v2.2 "),a(n,{text:"Legacy",type:"message"})])]),p,u,g,t("ul",null,[t("li",null,[t("a",m,[e("biuuu/genshin wish export"),a(o)])]),t("li",null,[t("a",b,[e("DGP Studio/Snap.Genshin"),a(o)])]),t("li",null,[t("a",f,[e("Scighost/KeqingNiuza"),a(o)])]),t("li",null,[t("a",y,[e("sunfkny/genshin gacha export"),a(o)])]),t("li",null,[t("a",k,[e("TremblingMoeNew/DodocoTales"),a(o)])]),t("li",null,[t("a",_,[e("voderl/genshin gacha analyzer"),a(o)])])]),v,t("table",null,[w,t("tbody",null,[t("tr",null,[t("td",null,[t("a",x,[e("biuuu/genshin wish export"),a(o)])]),q]),t("tr",null,[t("td",null,[t("a",N,[e("DGP Studio/Snap.Genshin"),a(o)])]),G]),t("tr",null,[t("td",null,[t("a",S,[e("MUK/应急食品"),a(o)])]),I]),t("tr",null,[t("td",null,[t("a",T,[e("Scighost/KeqingNiuza"),a(o)])]),W]),t("tr",null,[t("td",null,[t("a",F,[e("Scighost/Xunkong"),a(o)])]),U]),t("tr",null,[t("td",null,[t("a",M,[e("sunfkny/genshin gacha export"),a(o)])]),D]),t("tr",null,[t("td",null,[t("a",z,[e("TremblingMoeNew/DodocoTales"),a(o)])]),A]),t("tr",null,[t("td",null,[t("a",E,[e("voderl/genshin gacha analyzer"),a(o)])]),Y])])])])}const j=r(c,[["render",C],["__file","UIGF-legacy-v2.2.html.vue"]]);export{j as default};
