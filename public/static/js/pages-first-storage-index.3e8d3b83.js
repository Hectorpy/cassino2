(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-first-storage-index"],{"19b1":function(t,e,n){var a=n("ecdc");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("290ecafa",a,!0,{sourceMap:!1,shadowMode:!1})},"19e0":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("7e7c")),r={name:"u-navbar",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},methods:{leftClick:function(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick:function(){this.$emit("rightClick")}}};e.default=r},2698:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.banner=function(){return(0,i.default)({url:"index/getban",method:"POST"})},e.downloadAddress=function(){return(0,i.default)({url:"index/get_c",method:"POST"})},e.enterGame=function(t){return(0,i.default)({url:"index/in_game",method:"POST",data:t})},e.eventDetails=function(t){return(0,i.default)({url:"index/get_contents",method:"POST",data:{type:t}})},e.gameList=function(t){return(0,i.default)({url:"index/game_index",method:"POST",data:t})},e.gameLists=function(t){return(0,i.default)({url:"index/game_detai",method:"POST",data:t})},e.information=function(t){return(0,i.default)({url:"index/get_c",method:"GET"})},e.notice=function(){return(0,i.default)({url:"index/get_msg",method:"POST"})};var i=a(n("a558"))},"286f":function(t,e,n){"use strict";n.r(e);var a=n("9006"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"36c0":function(t,e,n){"use strict";n.r(e);var a=n("796d"),i=n("286f");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("7394");var o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"651e3678",null,!1,a["a"],void 0);e["default"]=u.exports},"39d3":function(t,e,n){"use strict";n.r(e);var a=n("19e0"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},7394:function(t,e,n){"use strict";var a=n("19b1"),i=n.n(a);i.a},"796d":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("ed7b").default,"u-Image":n("c033").default,uParse:n("290c").default,uButton:n("395b").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"first_storage"},[n("u-navbar",{attrs:{title:t.$t("title.text21"),autoBack:!0,bgColor:"#1d1f2b",leftIconColor:"#fff",leftIconSize:"40rpx",titleStyle:{color:"#fff",fontSize:"32rpx"},height:"120rpx"}}),n("v-uni-view",{staticClass:"f_s_head d_border12 d_flex"},[n("v-uni-view",{staticClass:"s_h_fl"},[n("u--image",{attrs:{src:"../../static/images/jogos/ad_1.png",mode:"widthFix",width:"280rpx",height:"315rpx"}})],1),n("v-uni-view",{staticClass:"s_h_fr d_flex"},[n("v-uni-text",[t._v(t._s(t.$t("jogos.fl2")))]),n("v-uni-text",[t._v("+ 20%")])],1)],1),n("v-uni-view",{staticClass:"f_s_con d_bgColor"},[n("v-uni-view",{staticClass:"content"},[n("u-parse",{attrs:{content:t.content}})],1),n("v-uni-view",{staticClass:"f_s_btn"},[n("u-button",{attrs:{type:"primary",text:t.$t("jogos.fl0"),shape:"circle",customStyle:{height:"80rpx"},color:"linear-gradient(to bottom, rgb(247, 201, 112), rgb(235, 88, 46))"}})],1)],1),n("v-uni-view",{staticClass:"tips_text"},[n("v-uni-view",[t._v("Lembrete caloroso, certifique-se de que seu nome, número de telefone celular e número de conta CPF são únicos.")]),n("v-uni-view",[t._v("Se o mesmo usuário registrar várias contas para receber bônus em dinheiro, consideraremos isso uma trapaça.")]),n("v-uni-view",[t._v("Se isso acontecer, a conta relevante será permanentemente congelada.")]),n("v-uni-view",[t._v("Nós não compensará as perdas causadas por trapaça!")])],1)],1)},r=[]},"7e7c":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a={props:{safeAreaInsetTop:{type:Boolean,default:uni.$u.props.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:uni.$u.props.navbar.placeholder},fixed:{type:Boolean,default:uni.$u.props.navbar.fixed},border:{type:Boolean,default:uni.$u.props.navbar.border},leftIcon:{type:String,default:uni.$u.props.navbar.leftIcon},leftText:{type:String,default:uni.$u.props.navbar.leftText},rightText:{type:String,default:uni.$u.props.navbar.rightText},rightIcon:{type:String,default:uni.$u.props.navbar.rightIcon},title:{type:[String,Number],default:uni.$u.props.navbar.title},bgColor:{type:String,default:uni.$u.props.navbar.bgColor},titleWidth:{type:[String,Number],default:uni.$u.props.navbar.titleWidth},height:{type:[String,Number],default:uni.$u.props.navbar.height},leftIconSize:{type:[String,Number],default:uni.$u.props.navbar.leftIconSize},leftIconColor:{type:String,default:uni.$u.props.navbar.leftIconColor},autoBack:{type:Boolean,default:uni.$u.props.navbar.autoBack},titleStyle:{type:[String,Object],default:uni.$u.props.navbar.titleStyle}}};e.default=a},9006:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("c7eb")),r=a(n("1da1")),o=n("2698"),u={data:function(){return{content:"",type:2}},onLoad:function(){this.getEventDetails()},methods:{getEventDetails:function(){var t=this;return(0,r.default)((0,i.default)().mark((function e(){var n,a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.eventDetails)(t.type);case 2:n=e.sent,n.code,a=n.data,t.content=a.content;case 6:case"end":return e.stop()}}),e)})))()}}};e.default=u},b26d:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */uni-view[data-v-5302c461], uni-scroll-view[data-v-5302c461], uni-swiper-item[data-v-5302c461]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-navbar--fixed[data-v-5302c461]{position:fixed;left:0;right:0;top:0;z-index:11}.u-navbar__content[data-v-5302c461]{display:flex;flex-direction:row;align-items:center;height:44px;background-color:#9acafc;position:relative;justify-content:center}.u-navbar__content__left[data-v-5302c461], .u-navbar__content__right[data-v-5302c461]{padding:0 13px;position:absolute;top:0;bottom:0;display:flex;flex-direction:row;align-items:center}.u-navbar__content__left[data-v-5302c461]{left:0}.u-navbar__content__left--hover[data-v-5302c461]{opacity:.7}.u-navbar__content__left__text[data-v-5302c461]{font-size:15px;margin-left:3px}.u-navbar__content__title[data-v-5302c461]{text-align:center;font-size:16px;color:#303133}.u-navbar__content__right[data-v-5302c461]{right:0}.u-navbar__content__right__text[data-v-5302c461]{font-size:15px;margin-left:3px}',""]),t.exports=e},c205:function(t,e,n){"use strict";var a=n("fe98"),i=n.n(a);i.a},d62e:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uStatusBar:n("8b4d").default,uIcon:n("7811").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-navbar"},[t.fixed&&t.placeholder?n("v-uni-view",{staticClass:"u-navbar__placeholder",style:{height:t.$u.addUnit(t.$u.getPx(t.height)+t.$u.sys().statusBarHeight,"px")}}):t._e(),n("v-uni-view",{class:[t.fixed&&"u-navbar--fixed"]},[t.safeAreaInsetTop?n("u-status-bar",{attrs:{bgColor:t.bgColor}}):t._e(),n("v-uni-view",{staticClass:"u-navbar__content",class:[t.border&&"u-border-bottom"],style:{height:t.$u.addUnit(t.height),backgroundColor:t.bgColor}},[n("v-uni-view",{staticClass:"u-navbar__content__left",attrs:{"hover-class":"u-navbar__content__left--hover","hover-start-time":"150"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}},[t._t("left",[t.leftIcon?n("u-icon",{attrs:{name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor}}):t._e(),t.leftText?n("v-uni-text",{staticClass:"u-navbar__content__left__text",style:{color:t.leftIconColor}},[t._v(t._s(t.leftText))]):t._e()])],2),t._t("center",[n("v-uni-text",{staticClass:"u-line-1 u-navbar__content__title",style:[{width:t.$u.addUnit(t.titleWidth)},t.$u.addStyle(t.titleStyle)]},[t._v(t._s(t.title))])]),t.$slots.right||t.rightIcon||t.rightText?n("v-uni-view",{staticClass:"u-navbar__content__right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t._t("right",[t.rightIcon?n("u-icon",{attrs:{name:t.rightIcon,size:"20"}}):t._e(),t.rightText?n("v-uni-text",{staticClass:"u-navbar__content__right__text"},[t._v(t._s(t.rightText))]):t._e()])],2):t._e()],2)],1)],1)},r=[]},ecdc:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */.first_storage[data-v-651e3678]{padding:%?130?% %?20?% %?30?% %?20?%}.first_storage .f_s_head[data-v-651e3678]{width:100%;height:%?300?%;background:linear-gradient(1turn,#ff3f09,#ffd165)}.first_storage .f_s_head .s_h_fl[data-v-651e3678]  .u-image__image{position:relative;top:%?-15?%}.first_storage .f_s_head .s_h_fr[data-v-651e3678]{padding-left:%?20?%;flex-direction:column;font-size:%?35?%;color:#fff;font-style:italic}.first_storage .f_s_head .s_h_fr > uni-text[data-v-651e3678]:nth-child(1){margin:%?50?% 0 %?30?% 0;font-size:%?28?%}.first_storage .f_s_con[data-v-651e3678]{padding:%?20?%;margin:%?20?% 0}.first_storage .f_s_con .content[data-v-651e3678]{padding:%?20?%;margin-bottom:%?20?%;min-height:%?500?%;color:#fff;border:1px dashed rgba(0,0,0,.5)}.first_storage .tips_text[data-v-651e3678]{color:hsla(0,0%,100%,.8);font-size:%?26?%;line-height:1.5}',""]),t.exports=e},ed7b:function(t,e,n){"use strict";n.r(e);var a=n("d62e"),i=n("39d3");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("c205");var o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"5302c461",null,!1,a["a"],void 0);e["default"]=u.exports},fe98:function(t,e,n){var a=n("b26d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("38a06628",a,!0,{sourceMap:!1,shadowMode:!1})}}]);