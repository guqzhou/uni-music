(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-index"],{"003e":function(t,e,n){"use strict";n.r(e);var a=n("c039"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"0232":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hotSearch-container"},[n("p",{staticStyle:{"font-weight":"600","font-size":"28rpx","margin-bottom":"10px"}},[t._v("热搜榜")]),n("div",{staticClass:"hotList"},t._l(t.hotList,(function(e,a){return n("div",{key:a,staticClass:"hot-item flex",class:{topThree:a<=2},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(e.searchWord)}}},[n("span",{staticClass:"index"},[t._v(t._s(a+1))]),n("span",{staticClass:"searchLabel"},[t._v(t._s(e.searchWord))]),e.iconUrl?n("v-uni-image",{staticClass:"iconImg",class:5==e.iconType?"topImg":"hotImg",attrs:{src:e.iconUrl,mode:""}}):t._e()],1)})),0)])},s=[]},1422:function(t,e,n){"use strict";n.r(e);var a=n("551e"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},3103:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tagList.length>0?n("div",{staticClass:"history-container flex"},[n("div",{staticClass:"title-wrapper historyTitle"},[t._v("历史")]),n("v-uni-scroll-view",{staticClass:"historyList",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":"0"}},t._l(t.tagList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"cu-tag round",staticStyle:{padding:"0 24rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(e)}}},[t._v(t._s(e))])})),1),n("v-uni-text",{staticClass:"cuIcon-delete closeIcon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearHistory.apply(void 0,arguments)}}})],1):t._e()},s=[]},"31ff":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content-list[data-v-4562e3ba]{padding:0 15px;box-sizing:border-box;width:100%;margin-top:5px}',""]),t.exports=e},"4ae8":function(t,e,n){var a=n("a865");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0ebf0728",a,!0,{sourceMap:!1,shadowMode:!1})},"551e":function(t,e,n){"use strict";n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("fae8"),i={props:{text:{type:String,default:""}},data:function(){return{keywords:"",defaultKeywords:"",debounceSuggest:null,suggestList:[],suggetShow:!1}},created:function(){var t=this;this.debounceSuggest=(0,a.debounce)((function(){t.getSuggestList()}),250),this.text?this.defaultKeywords=this.text:this.getDefaultSearch()},methods:{getDefaultSearch:function(){var t=this;this.$api.getDefaultSearch().then((function(e){t.defaultKeywords=e.data.realkeyword||""}))},handleClose:function(){this.suggestList=[],this.suggetShow=!1},getSuggestList:function(){var t=this;this.keywords.trim()&&(this.suggetShow=!0,this.$api.getSuggestList({keywords:this.keywords.trim()}).then((function(e){t.suggestList=e.result.allMatch||[]})))},searchMusic:function(t){this.keywords=t,this.suggetShow=!1,this.handleSearch()},handleSearch:function(){this.keywords.trim()||(this.keywords=this.defaultKeywords),this.suggetShow=!1,this.$store.dispatch("addHistoryList",this.keywords),this.$emit("handleSearch",this.keywords)}},watch:{text:function(t){this.keywords=t}}};e.default=i},"616f":function(t,e,n){"use strict";var a=n("67d7"),i=n.n(a);i.a},"61aa":function(t,e,n){"use strict";n.r(e);var a=n("f403"),i=n("003e");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("af18");var o,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"4562e3ba",null,!1,a["a"],o);e["default"]=c.exports},"66cb":function(t,e,n){var a=n("88aa");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("52ce6acf",a,!0,{sourceMap:!1,shadowMode:!1})},"67d7":function(t,e,n){var a=n("e259");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("55a7ade3",a,!0,{sourceMap:!1,shadowMode:!1})},"7ab8":function(t,e,n){"use strict";var a=n("4ae8"),i=n.n(a);i.a},"7e46":function(t,e,n){"use strict";n.r(e);var a=n("d5b8"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"88aa":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.closeIcon[data-v-080c44ba]{position:absolute;right:20px;top:9px;font-size:%?36?%;z-index:20}.suggestList[data-v-080c44ba]{background-color:hsla(0,0%,100%,.1);z-index:25;position:fixed;left:0;right:0;top:%?210?%;bottom:0}.suggestList .suggestMain[data-v-080c44ba]{position:absolute;left:25px;right:25px;top:0;z-index:30;background-color:#fff;border:1px solid #bebebe;border-radius:4px;box-shadow:0 4px 7px #aaa;text-shadow:0 1px 0 hsla(0,0%,100%,.9);box-sizing:border-box;padding:0 %?25?%}.suggestList .suggestMain .suggest-item[data-v-080c44ba]{padding:%?24?% 0;border-bottom:%?1?% solid rgba(0,0,0,.1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;box-sizing:border-box;width:95%}',""]),t.exports=e},"99ae":function(t,e,n){"use strict";n.r(e);var a=n("e885"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},a865:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.hotSearch-container[data-v-a0fc1bea]{width:100%;position:relative;margin-top:%?20?%}.hotSearch-container .hotList[data-v-a0fc1bea]{margin-top:%?15?%;width:100%;flex-wrap:wrap}.hotSearch-container .hotList .hot-item[data-v-a0fc1bea]{width:50%;margin-bottom:%?30?%;display:inline-block}.hotSearch-container .hotList .hot-item.topThree .index[data-v-a0fc1bea]{color:#f84e51}.hotSearch-container .hotList .hot-item.topThree .word[data-v-a0fc1bea]{font-family:Microsoft Yahei,Arial,Helvetica,sans-serif;font-weight:600;color:rgba(0,0,0,.5)}.hotSearch-container .hotList .hot-item .index[data-v-a0fc1bea]{width:%?44?%;display:inline-block}.hotSearch-container .hotList .hot-item .searchLabel[data-v-a0fc1bea]{max-width:calc(100% - %?125?%);display:inline-block;white-space:nowrap;vertical-align:middle;overflow:hidden;text-overflow:ellipsis;color:#000}.hotSearch-container .hotList .hot-item .iconImg[data-v-a0fc1bea]{margin-left:%?15?%;vertical-align:middle}.hotSearch-container .hotList .hot-item .iconImg.topImg[data-v-a0fc1bea]{width:%?30?%;height:%?32?%;vertical-align:text-bottom}.hotSearch-container .hotList .hot-item .iconImg.hotImg[data-v-a0fc1bea]{width:%?60?%;height:%?30?%}',""]),t.exports=e},af18:function(t,e,n){"use strict";var a=n("e82a"),i=n.n(a);i.a},bfee:function(t,e,n){"use strict";n.r(e);var a=n("0232"),i=n("99ae");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("7ab8");var o,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"a0fc1bea",null,!1,a["a"],o);e["default"]=c.exports},c039:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("e748")),s=a(n("c6d6")),o=a(n("bfee")),r=n("26cb"),c={data:function(){return{text:""}},components:{historySearch:s.default,hotSearch:o.default,search:i.default},computed:(0,r.mapState)({playInfo:function(t){return t.playInfo}}),methods:{searchMusic:function(t){uni.navigateTo({url:"../searchList/index?keywords="+t})},chooseMusic:function(t){this.text=t,this.searchMusic(t)}}};e.default=c},c6d6:function(t,e,n){"use strict";n.r(e);var a=n("3103"),i=n("7e46");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("616f");var o,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"785e4124",null,!1,a["a"],o);e["default"]=c.exports},d5b8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},computed:{tagList:function(){return this.$store.state.historyList}},methods:{handleClick:function(t){this.$store.dispatch("addHistoryList",t),this.$emit("chooseMusic",t)},clearHistory:function(){this.$store.dispatch("clearHistoryList")}}};e.default=a},e259:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.history-container[data-v-785e4124]{height:35px;width:100%;position:relative;align-items:center}.history-container .historyTitle[data-v-785e4124]{width:%?85?%;font-size:%?28?%;color:#000}.history-container .historyList[data-v-785e4124]{width:calc(100% - %?160?%);white-space:nowrap}.history-container .closeIcon[data-v-785e4124]{font-size:%?38?%;width:%?75?%;text-align:right}',""]),t.exports=e},e368:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-bar search"},[n("v-uni-view",{staticClass:"search-form round"},[n("v-uni-text",{staticClass:"cuIcon-search"}),n("v-uni-input",{staticClass:"input-wrapper relative",attrs:{type:"text",placeholder:t.defaultKeywords,"confirm-type":"search"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.debounceSuggest.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSearch.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getSuggestList.apply(void 0,arguments)}},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.keywords,expression:"keywords"}],staticClass:"cuIcon-close closeIcon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.keywords=""}}})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.keywords&&t.suggetShow,expression:"keywords&&suggetShow"}],staticClass:"suggestList",on:{click:function(e){if(e.target!==e.currentTarget)return null;arguments[0]=e=t.$handleEvent(e),t.handleClose.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"suggestMain"},[n("v-uni-view",{staticClass:"suggest-item",staticStyle:{color:"rgb(86,124,166)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchMusic(t.keywords)}}},[t._v('搜索 " '+t._s(t.keywords)+' "')]),t._l(t.suggestList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"suggest-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.searchMusic(e.keyword)}}},[n("v-uni-text",{staticClass:"cuIcon-search",staticStyle:{"margin-right":"25rpx"}}),t._v(t._s(e.keyword))],1)}))],2)],1)],1)},s=[]},e748:function(t,e,n){"use strict";n.r(e);var a=n("e368"),i=n("1422");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("fe06");var o,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"080c44ba",null,!1,a["a"],o);e["default"]=c.exports},e82a:function(t,e,n){var a=n("31ff");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0e13052a",a,!0,{sourceMap:!1,shadowMode:!1})},e885:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{hotList:[]}},created:function(){this.getDetailSearch()},methods:{getDetailSearch:function(){var t=this;this.$api.getHotDetailSearch().then((function(e){t.hotList=e.data||[]}))},handleClick:function(t){this.$store.dispatch("addHistoryList",t),this.$emit("chooseMusic",t)}}};e.default=a},f403:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-container"},[n("cu-custom",{attrs:{bgColor:"#fff",isBack:!0}},[n("v-uni-view",{staticStyle:{color:"#000"},attrs:{slot:"content"},slot:"content"},[t._v("搜索")])],1),n("search",{attrs:{text:t.text},on:{handleSearch:function(e){arguments[0]=e=t.$handleEvent(e),t.searchMusic.apply(void 0,arguments)}}}),n("v-uni-scroll-view",{staticClass:"content-list",attrs:{"scroll-y":!0,"scroll-with-animation":!0}},[n("history-search",{on:{chooseMusic:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseMusic.apply(void 0,arguments)}}}),n("hot-search",{on:{chooseMusic:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseMusic.apply(void 0,arguments)}}})],1),t.playInfo.id?n("music-control"):t._e()],1)},s=[]},fae8:function(t,e,n){"use strict";function a(t,e,n){var a,i,s,o,r,c=function c(){var u=+new Date-o;u<e&&u>0?a=setTimeout(c,e-u):(a=null,n||(r=t.apply(s,i),a||(s=i=null)))};return function(){for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];s=this,o=+new Date;var d=n&&!a;return a||(a=setTimeout(c,e)),d&&(r=t.apply(s,u),s=u=null),r}}function i(t){return!t||t<=0?0:t<1e3?t:t>=1e3&&t<1e4?Math.ceil(t/1e3)+"千":t>=1e4&&t<1e8?Math.ceil(t/1e4)+"万":Math.ceil(t/1e8)+"亿"}function s(t){var e="";return t.picUrl?e=t.picUrl:t.album?e=t.album.picUrl:t.al&&(e=t.al.picUrl),e?e+"?param=300y300":null}function o(t){return t.song?t.song.artists[0].name:t.artists?t.artists[0].name:t.ar?t.ar[0].name:void 0}Object.defineProperty(e,"__esModule",{value:!0}),e.debounce=a,e.filterPlayCount=i,e.getImage=s,e.getName=o},fe06:function(t,e,n){"use strict";var a=n("66cb"),i=n.n(a);i.a}}]);