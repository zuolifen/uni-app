(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_invoice_form/index"],{1827:function(e,t,n){"use strict";n.r(t);var i=n("5076"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"45ce":function(e,t,n){"use strict";n.r(t);var i=n("b068"),o=n("1827");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("5feb");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"594addf0",null,!1,i["a"],r);t["default"]=c.exports},5076:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("88f9"),o=a(n("7e9b"));function a(e){return e&&e.__esModule?e:{default:e}}var r=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("5119"))}.bind(null,n)).catch(n.oe)},s={components:{home:r},mixins:[o.default],data:function(){return{invoiceTypeList:[{name:"增值税电子普通发票",value:"1",info:"纸质发票开出后将以邮寄形式交付"},{name:"增值税电子专用发票",value:"2",info:"纸质发票开出后将以邮寄形式交付"}],id:"",header_type:"1",type:"1",drawer_phone:"",name:"",duty_number:"",tell:"",address:"",bank:"",card_number:"",is_default:[],email:"",popupType:!1,typeName:"",urlQuery:"",from:"",specialInvoice:!0,order_id:""}},computed:{backUrl:function(){switch(this.from){case"order_confirm":return"/pages/users/order_confirm/index".concat(this.urlQuery);default:return"/pages/users/user_invoice_list/index?from=invoice_form"}}},onLoad:function(e){var t=this;for(var n in e)switch(n){case"couponTitle":case"new":case"cartId":case"pinkId":case"couponId":case"addressId":this.urlQuery+="".concat(this.urlQuery?"&":"?").concat(n,"=").concat(e[n]);break;case"from":this.from=e[n];break;case"header_type":this.header_type=e[n];break;case"id":this.id=e[n],this.getInvoiceDetail();break;case"specialInvoice":"false"===e[n]&&(this.specialInvoice=!1);break}e.order_id&&(this.order_id=e.order_id);var i=this.invoiceTypeList.find((function(e){return e.value===t.type}));this.typeName=i.name},methods:{getInvoiceDetail:function(){var t=this;e.showLoading({title:"加载中"}),(0,i.invoiceDetail)(this.id).then((function(n){e.hideLoading(),t.header_type=n.data.header_type.toString(),t.type=n.data.type.toString();var i=t.invoiceTypeList.find((function(e){return e.value===t.type}));t.typeName=i.name,t.name=n.data.name,t.drawer_phone=n.data.drawer_phone,t.email=n.data.email,t.duty_number=n.data.duty_number,t.bank=n.data.bank,t.card_number=n.data.card_number,t.address=n.data.address,t.tell=n.data.tell,t.is_default=n.data.is_default?[""]:[]})).catch((function(t){e.showToast({title:t,icon:"none"})}))},formSubmit:function(t){var n=this,o=t.detail.value;if(o.type=this.type,"1"===o.header_type){if(!o.name)return e.showToast({title:"请输入需要开具发票的姓名",icon:"none"});if(!o.drawer_phone)return e.showToast({title:"请输入您的手机号",icon:"none"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(o.drawer_phone))return e.showToast({title:"请正确输入您的手机号",icon:"none"});if(!o.email)return e.showToast({title:"请输入您的联系邮箱",icon:"none"});if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(o.email))return e.showToast({title:"请正确输入您的联系邮箱",icon:"none"})}if("2"===o.header_type){if("1"===o.type){if(!o.name)return e.showToast({title:"请输入需要开具发票的企业名称",icon:"none"});if(!o.duty_number)return e.showToast({title:"请输入纳税人识别号",icon:"none"});if(!/[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/.test(o.duty_number))return e.showToast({title:"请正确输入纳税人识别号",icon:"none"});if(!o.drawer_phone)return e.showToast({title:"请输入您的手机号",icon:"none"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(o.drawer_phone))return e.showToast({title:"请正确输入您的手机号",icon:"none"});if(!o.email)return e.showToast({title:"请输入您的联系邮箱",icon:"none"});if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(o.email))return e.showToast({title:"请正确输入您的联系邮箱",icon:"none"})}if("2"===o.type){if(!o.name)return e.showToast({title:"请输入需要开具发票的企业名称",icon:"none"});if(!o.duty_number)return e.showToast({title:"请输入纳税人识别号",icon:"none"});if(!/[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/.test(o.duty_number))return e.showToast({title:"请正确输入纳税人识别号",icon:"none"});if(!o.drawer_phone)return e.showToast({title:"请输入您的手机号",icon:"none"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(o.drawer_phone))return e.showToast({title:"请正确输入您的手机号",icon:"none"});if(!o.email)return e.showToast({title:"请输入您的联系邮箱",icon:"none"});if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(o.email))return e.showToast({title:"请正确输入您的联系邮箱",icon:"none"});if(!o.bank)return e.showToast({title:"请输入您的开户银行",icon:"none"});if(!o.card_number)return e.showToast({title:"请输入您的银行账号",icon:"none"});if(!/^\d{16}|\d{19}$/.test(o.card_number))return e.showToast({title:"请正确输入您的银行账号",icon:"none"});if(!o.address)return e.showToast({title:"请输入您所在的企业地址",icon:"none"});if(!o.tell)return e.showToast({title:"请输入您的企业电话",icon:"none"})}}o.is_default=o.is_default.length,o.id=this.id,e.showLoading({title:"保存中"}),(0,i.invoiceSave)(o).then((function(t){var i=n;e.showToast({title:t.msg,icon:"success",success:function(){switch(i.from){case"order_confirm":i.id?e.navigateTo({url:"/pages/users/order_confirm/index".concat(i.urlQuery,"&invoice_id=").concat(i.id,"&invoice_type=").concat(o.type)}):e.navigateTo({url:"/pages/users/order_confirm/index".concat(i.urlQuery,"&invoice_id=").concat(t.data.id,"&invoice_type=").concat(o.type)});break;case"order_details":i.id?e.navigateTo({url:"/pages/users/order_details/index?order_id=".concat(i.order_id,"&invoice_id=").concat(i.id)}):e.navigateTo({url:"/pages/users/order_details/index?order_id=".concat(i.order_id,"&invoice_id=").concat(t.data.id)});break;default:e.navigateTo({url:"/pages/users/user_invoice_list/index?from=invoice_form"});break}}})})).catch((function(t){e.showToast({title:t,icon:"none"})}))},callType:function(){this.popupType=!0},changeType:function(e){var t=e.detail.value,n=this.invoiceTypeList.find((function(e){return e.value===t}));"2"===t&&"1"===this.header_type&&(this.header_type="2"),this.typeName=n.name,this.type=t,this.popupType=!1},closeType:function(){this.popupType=!1},changeTitleType:function(e){this.header_type=e.detail.value,this.type="1"}}};t.default=s}).call(this,n("543d")["default"])},"542c":function(e,t,n){"use strict";(function(e){n("7fec");i(n("66fd"));var t=i(n("45ce"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"5feb":function(e,t,n){"use strict";var i=n("6d5a"),o=n.n(i);o.a},"6d5a":function(e,t,n){},b068:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement;e._self._c},a=[]}},[["542c","common/runtime","common/vendor"]]]);