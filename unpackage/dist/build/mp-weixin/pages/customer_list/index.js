(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/customer_list/index"],{2931:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("88f9"),r=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("5119"))}.bind(null,n)).catch(n.oe)},u={name:"CustomerList",components:{home:r},data:function(){return{list:[],productId:0,orderId:""}},methods:{getList:function(){var t=this;(0,o.serviceList)().then((function(e){t.list=e.data}))},goPage:function(e){t.navigateTo({url:"/pages/customer_list/chat?uid="+e.uid+"&productId="+this.productId+"&orderId="+this.orderId})}},onLoad:function(t){this.getList(),t.productId&&(this.productId=t.productId),t.orderId&&(this.orderId=t.orderId)}};e.default=u}).call(this,n("543d")["default"])},"58d2":function(t,e,n){},"5bd1":function(t,e,n){"use strict";n.r(e);var o=n("de5f"),r=n("d598");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("9a31");var d,c=n("f0c5"),i=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"4a1599eb",null,!1,o["a"],d);e["default"]=i.exports},"9a31":function(t,e,n){"use strict";var o=n("58d2"),r=n.n(o);r.a},d06f:function(t,e,n){"use strict";(function(t){n("7fec");o(n("66fd"));var e=o(n("5bd1"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},d598:function(t,e,n){"use strict";n.r(e);var o=n("2931"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},de5f:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},u=[]}},[["d06f","common/runtime","common/vendor"]]]);