(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/admin_order_detail/index"],{"48c8":function(t,e,n){"use strict";(function(t){n("7fec");a(n("66fd"));var e=a(n("727f"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"5b0c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("ba2c"),r={name:"AdminOrder",data:function(){return{order:!1,change:!1,order_id:"",orderInfo:{_status:{}},status:"",title:"",payType:"",types:"",clickNum:1,goname:""}},watch:{"$route.params.oid":function(t){var e=this;void 0!=t&&(e.order_id=t,e.getIndex())}},onLoad:function(t){this.order_id=t.id,this.goname=t.goname,this.getIndex()},methods:{getIndex:function(){var t=this;(0,a.getAdminOrderDetail)(t.order_id).then((function(e){t.orderInfo=e.data,t.types=e.data._status._type,t.title=e.data._status._title,t.payType=e.data._status._payType}),(function(e){t.$util.Tips({title:e},{tab:3,url:1})}))}}};e.default=r},6777:function(t,e,n){"use strict";n.r(e);var a=n("5b0c"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},"727f":function(t,e,n){"use strict";n.r(e);var a=n("cc7b"),r=n("6777");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("8e41");var i,o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=c.exports},"8e41":function(t,e,n){"use strict";var a=n("944d"),r=n.n(a);r.a},"944d":function(t,e,n){},cc7b:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c},u=[]}},[["48c8","common/runtime","common/vendor"]]]);