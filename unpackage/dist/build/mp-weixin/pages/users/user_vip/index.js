(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_vip/index"],{"067a":function(e,t,n){"use strict";n.r(t);var o=n("9a2e"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},3505:function(e,t,n){},"5b2b":function(e,t,n){"use strict";n.r(t);var o=n("b20e"),i=n("067a");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("f83c");var r,l=n("f0c5"),s=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,"06a56c03",null,!1,o["a"],r);t["default"]=s.exports},"6da8":function(e,t,n){"use strict";(function(e){n("7fec");o(n("66fd"));var t=o(n("5b2b"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"9a2e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("88f9"),i=n("4b1e"),a=n("692b"),r=n("26cb"),l=function(){n.e("components/Authorize").then(function(){return resolve(n("dd32"))}.bind(null,n)).catch(n.oe)},s=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("d08a"))}.bind(null,n)).catch(n.oe)},u={components:{recommend:s,authorize:l},data:function(){return{reach_count:0,VipList:[],swiperIndex:0,growthValue:!0,task:[],illustrate:"",level_id:0,hostProduct:[],grade:0,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,level_title:"",level_discount:"",levelInfo:{},task_list:[{real_name:"积分数",number:0},{real_name:"消费金额",number:0},{real_name:"优惠券",number:0}],userInfo:{},taskInfo:{},is_open_member:0}},computed:(0,r.mapGetters)(["isLogin"]),watch:{VipList:function(){var e=this;e.VipList.length>0&&e.VipList.forEach((function(t,n){!1===t.is_clear&&(e.activeIndex=n,e.grade=t.grade)}))},isLogin:{handler:function(e,t){e&&(this.setLeveLComplete(),this.get_host_product())},deep:!0}},onLoad:function(){this.isLogin?(this.setLeveLComplete(),this.get_host_product(),this.getlevelInfo(),this.getUserInfo()):(0,a.toLogin)();var e=this;setTimeout((function(){e.loading=!0}),500)},methods:{getUserInfo:function(){var e=this;(0,o.getUserInfo)().then((function(t){e.is_open_member=t.data.is_open_member,e.task_list=[{real_name:"积分数",number:t.data.integral},{real_name:"消费金额",number:t.data.orderStatusSum},{real_name:"优惠券",number:t.data.couponCount}]}))},getlevelInfo:function(){var e=this;(0,o.getlevelInfo)().then((function(t){var n=t.data,o=n.level_info,i=n.level_list,a=n.task,r=n.user;e.levelInfo=o,e.VipList=i,e.userInfo=r,e.taskInfo=a,e.levelInfo.exp=parseFloat(e.levelInfo.exp),e.levelInfo.rate=Math.floor(e.levelInfo.exp/e.levelInfo.exp_num*100),e.levelInfo.rate>100&&(e.levelInfo.rate=100);var l=i.findIndex((function(e){var t=e.grade;return t===o.grade}));-1!==l&&(e.swiperIndex=l)}))},onLoadFun:function(){this.setLeveLComplete(),this.get_host_product()},authColse:function(e){this.isShowAuth=e},get_host_product:function(){var e=this;(0,i.getProductHot)().then((function(t){var n=e;n.hotScroll||(0,i.getProductHot)(n.hotPage,n.hotLimit).then((function(e){n.hotPage++,n.hotScroll=e.data.length<n.hotLimit,n.hostProduct=n.hostProduct.concat(e.data)}))}))},swiperChange:function(e){var t=e.detail.current;this.swiperIndex=t,this.level_id=this.VipList[t].id||0,this.level_title=this.VipList[t].name||"",this.level_discount=this.VipList[t].discount||""},growthValueClose:function(){this.growthValue=!0},opHelp:function(e){this.growthValue=!1,this.illustrate=this.task[e].illustrate},setLeveLComplete:function(){(0,o.userLevelDetection)().then((function(e){}))},getVipList:function(){var e=this;(0,o.userLevelGrade)().then((function(t){e.$set(e,"VipList",t.data.list),e.task=t.data.task.task,e.reach_count=t.data.task.reach_count,e.level_id=t.data.list[0]?t.data.list[0].id:0,e.level_title=t.data.list[0]?t.data.list[0].name:"",e.level_discount=t.data.list[0]?t.data.list[0].discount:""}))},getTask:function(){var e=this;(0,o.userLevelTask)(e.level_id).then((function(t){e.task=t.data.task,e.reach_count=t.data.reach_count}))}},onReachBottom:function(){this.get_host_product()}};t.default=u},b20e:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.VipList,(function(t,n){var o=e.__get_orig(t),i=t.grade===e.levelInfo.grade?Math.floor(e.levelInfo.exp/t.next_exp_num>1?100:e.levelInfo.exp/t.next_exp_num*100):null,a=!e.levelInfo.grade||t.grade>e.levelInfo.grade?Math.floor(e.levelInfo.exp/t.exp_num*100):null;return{$orig:o,g0:i,g1:a}})));e.$mp.data=Object.assign({},{$root:{l0:n}})},a=[]},f83c:function(e,t,n){"use strict";var o=n("3505"),i=n.n(o);i.a}},[["6da8","common/runtime","common/vendor"]]]);