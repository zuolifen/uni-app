(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/live_list/index"],{"078d":function(t,n,e){"use strict";e.r(n);var i=e("ad6b"),c=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=c.a},"1bc7":function(t,n,e){},"344c":function(t,n,e){"use strict";(function(t){e("7fec");i(e("66fd"));var n=i(e("8235"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},3620:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var c=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"4b89":function(t,n,e){"use strict";var i=e("1bc7"),c=e.n(i);c.a},8235:function(t,n,e){"use strict";e.r(n);var i=e("3620"),c=e("078d");for(var a in c)"default"!==a&&function(t){e.d(n,t,(function(){return c[t]}))}(a);e("4b89");var u,o=e("f0c5"),r=Object(o["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=r.exports},ad6b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("d48f"),c={name:"liveBroadcast",props:{dataConfig:{type:Object,default:function(){}}},data:function(){return{page:1,limit:10,listStyle:1,isScroll:!0,liveList:[],custom_params:""}},created:function(){},mounted:function(){this.custom_params=encodeURIComponent(JSON.stringify({spid:this.$store.state.app.uid})),this.getLiveList()},methods:{getLiveList:function(){var t=this;this.$config.LIMIT;this.isScroll&&(0,i.getLiveList)(this.page,this.limit).then((function(n){t.isScroll=n.data.length>=t.limit,t.page++,t.liveList=t.liveList.concat(n.data)})).catch((function(t){}))}},onReachBottom:function(){this.getLiveList()}};n.default=c}},[["344c","common/runtime","common/vendor"]]]);