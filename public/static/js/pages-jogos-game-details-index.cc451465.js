(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jogos-game-details-index"],{"19e0":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("7e7c")),r={name:"u-navbar",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},methods:{leftClick:function(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick:function(){this.$emit("rightClick")}}};e.default=r},2698:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.banner=function(){return(0,i.default)({url:"index/getban",method:"POST"})},e.enterGame=function(t){return(0,i.default)({url:"index/in_game",method:"POST",data:t})},e.eventDetails=function(t){return(0,i.default)({url:"index/get_contents",method:"POST",data:{type:t}})},e.gameList=function(t){return(0,i.default)({url:"index/game_index",method:"POST",data:t})},e.gameLists=function(t){return(0,i.default)({url:"index/game_detai",method:"POST",data:t})},e.information=function(t){return(0,i.default)({url:"index/get_c",method:"GET"})},e.notice=function(){return(0,i.default)({url:"index/get_msg",method:"POST"})};var i=n(a("a558"))},"39d3":function(t,e,a){"use strict";a.r(e);var n=a("19e0"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"5fac":function(t,e,a){"use strict";a.r(e);var n=a("da66"),i=a("8719");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("dc78");var u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"71ac4949",null,!1,n["a"],void 0);e["default"]=o.exports},"73c6":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */.game_details[data-v-71ac4949]{padding:%?130?% %?20?% %?20?% %?20?%}.game_details .game_list[data-v-71ac4949]{padding-top:%?20?%;flex-wrap:wrap;justify-content:space-between}.game_details .game_list .d_jl_list_item[data-v-71ac4949]{margin-bottom:%?20?%;width:%?220?%}.game_details .game_list .d_jl_list_item .text[data-v-71ac4949]{margin:%?10?%;color:#838ca0;font-size:%?24?%}',""]),t.exports=e},"7e7c":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{safeAreaInsetTop:{type:Boolean,default:uni.$u.props.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:uni.$u.props.navbar.placeholder},fixed:{type:Boolean,default:uni.$u.props.navbar.fixed},border:{type:Boolean,default:uni.$u.props.navbar.border},leftIcon:{type:String,default:uni.$u.props.navbar.leftIcon},leftText:{type:String,default:uni.$u.props.navbar.leftText},rightText:{type:String,default:uni.$u.props.navbar.rightText},rightIcon:{type:String,default:uni.$u.props.navbar.rightIcon},title:{type:[String,Number],default:uni.$u.props.navbar.title},bgColor:{type:String,default:uni.$u.props.navbar.bgColor},titleWidth:{type:[String,Number],default:uni.$u.props.navbar.titleWidth},height:{type:[String,Number],default:uni.$u.props.navbar.height},leftIconSize:{type:[String,Number],default:uni.$u.props.navbar.leftIconSize},leftIconColor:{type:String,default:uni.$u.props.navbar.leftIconColor},autoBack:{type:Boolean,default:uni.$u.props.navbar.autoBack},titleStyle:{type:[String,Object],default:uni.$u.props.navbar.titleStyle}}};e.default=n},8719:function(t,e,a){"use strict";a.r(e);var n=a("c8b0"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},b26d:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */uni-view[data-v-5302c461], uni-scroll-view[data-v-5302c461], uni-swiper-item[data-v-5302c461]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-navbar--fixed[data-v-5302c461]{position:fixed;left:0;right:0;top:0;z-index:11}.u-navbar__content[data-v-5302c461]{display:flex;flex-direction:row;align-items:center;height:44px;background-color:#9acafc;position:relative;justify-content:center}.u-navbar__content__left[data-v-5302c461], .u-navbar__content__right[data-v-5302c461]{padding:0 13px;position:absolute;top:0;bottom:0;display:flex;flex-direction:row;align-items:center}.u-navbar__content__left[data-v-5302c461]{left:0}.u-navbar__content__left--hover[data-v-5302c461]{opacity:.7}.u-navbar__content__left__text[data-v-5302c461]{font-size:15px;margin-left:3px}.u-navbar__content__title[data-v-5302c461]{text-align:center;font-size:16px;color:#303133}.u-navbar__content__right[data-v-5302c461]{right:0}.u-navbar__content__right__text[data-v-5302c461]{font-size:15px;margin-left:3px}',""]),t.exports=e},c205:function(t,e,a){"use strict";var n=a("fe98"),i=a.n(n);i.a},c8b0:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c7eb")),r=n(a("1da1")),u=a("2698"),o={data:function(){return{gameList:[],gameType:"",platType:""}},onLoad:function(t){var e=t.gameType,a=t.platType;this.gameType=e,this.platType=a,this.getGameList()},methods:{getGameList:function(){var t=this;return(0,r.default)((0,i.default)().mark((function e(){var a,n,r;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading(),e.next=3,(0,u.gameLists)({gameType:t.gameType,platType:t.platType});case 3:a=e.sent,n=a.code,r=a.data,200==n&&(uni.hideLoading(),t.gameList=r.data);case 7:case"end":return e.stop()}}),e)})))()},enterGameBtn:function(t){var e=this;return(0,r.default)((0,i.default)().mark((function a(){var n,r,o,l;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.$isLogin()){a.next=2;break}return a.abrupt("return",!1);case 2:return n={ispc:"device1",back:"/",gameCode:t.gameCode,gameType:t.gameType,platType:t.platType},a.next=5,(0,u.enterGame)(n);case 5:r=a.sent,o=r.code,l=r.data,200==o&&(window.location.href=l);case 9:case"end":return a.stop()}}),a)})))()}}};e.default=o},d62e:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uStatusBar:a("8b4d").default,uIcon:a("7811").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-navbar"},[t.fixed&&t.placeholder?a("v-uni-view",{staticClass:"u-navbar__placeholder",style:{height:t.$u.addUnit(t.$u.getPx(t.height)+t.$u.sys().statusBarHeight,"px")}}):t._e(),a("v-uni-view",{class:[t.fixed&&"u-navbar--fixed"]},[t.safeAreaInsetTop?a("u-status-bar",{attrs:{bgColor:t.bgColor}}):t._e(),a("v-uni-view",{staticClass:"u-navbar__content",class:[t.border&&"u-border-bottom"],style:{height:t.$u.addUnit(t.height),backgroundColor:t.bgColor}},[a("v-uni-view",{staticClass:"u-navbar__content__left",attrs:{"hover-class":"u-navbar__content__left--hover","hover-start-time":"150"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}},[t._t("left",[t.leftIcon?a("u-icon",{attrs:{name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor}}):t._e(),t.leftText?a("v-uni-text",{staticClass:"u-navbar__content__left__text",style:{color:t.leftIconColor}},[t._v(t._s(t.leftText))]):t._e()])],2),t._t("center",[a("v-uni-text",{staticClass:"u-line-1 u-navbar__content__title",style:[{width:t.$u.addUnit(t.titleWidth)},t.$u.addStyle(t.titleStyle)]},[t._v(t._s(t.title))])]),t.$slots.right||t.rightIcon||t.rightText?a("v-uni-view",{staticClass:"u-navbar__content__right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t._t("right",[t.rightIcon?a("u-icon",{attrs:{name:t.rightIcon,size:"20"}}):t._e(),t.rightText?a("v-uni-text",{staticClass:"u-navbar__content__right__text"},[t._v(t._s(t.rightText))]):t._e()])],2):t._e()],2)],1)],1)},r=[]},da66:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uNavbar:a("ed7b").default,"u-Image":a("c033").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"game_details"},[a("u-navbar",{attrs:{title:t.$t("title.text19"),autoBack:!0,bgColor:"#1d1f2b",leftIconColor:"#fff",leftIconSize:"40rpx",titleStyle:{color:"#fff",fontSize:"32rpx"},height:"120rpx"}}),a("v-uni-view",{staticClass:"game_list d_flex"},t._l(t.gameList,(function(e){return a("v-uni-view",{key:e.id,staticClass:"d_jl_list_item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.enterGameBtn(e)}}},[a("u--image",{attrs:{radius:"10rpx",showLoading:!0,src:e.imageUrl,width:"220rpx",height:"150rpx"}}),a("v-uni-view",{staticClass:"text d_ellipsis"},[t._v(t._s(e.gameName))])],1)})),1)],1)},r=[]},dc78:function(t,e,a){"use strict";var n=a("f9ce"),i=a.n(n);i.a},ed7b:function(t,e,a){"use strict";a.r(e);var n=a("d62e"),i=a("39d3");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("c205");var u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"5302c461",null,!1,n["a"],void 0);e["default"]=o.exports},f9ce:function(t,e,a){var n=a("73c6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("13b42ba6",n,!0,{sourceMap:!1,shadowMode:!1})},fe98:function(t,e,a){var n=a("b26d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("38a06628",n,!0,{sourceMap:!1,shadowMode:!1})}}]);