(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-settings-index"],{"0e39":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("ed7b").default,uIcon:n("7811").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"d_settings"},[n("u-navbar",{attrs:{title:"个人中心",autoBack:!0,bgColor:"#1d1f2b",leftIconColor:"#fff",leftIconSize:"40rpx",titleStyle:{color:"#fff",fontSize:"32rpx"},height:"120rpx"}}),n("v-uni-view",{staticClass:"form_section d_bgColor d_border12 border_shadow"},[n("v-uni-view",{staticClass:"form_s_item d_flex "},[n("v-uni-view",{staticClass:"label"},[t._v("用户名")]),n("v-uni-view",{staticClass:"name d_flex"},[n("v-uni-text",[t._v(t._s(t.userInfo.username))])],1)],1),n("v-uni-view",{staticClass:"form_s_item d_flex "},[n("v-uni-view",{staticClass:"label"},[t._v("版本号")]),n("v-uni-view",{staticClass:"name"},[t._v("V1.0.0")])],1)],1),n("v-uni-view",{staticClass:"form_section d_bgColor d_border12 border_shadow",staticStyle:{"margin-top":"30rpx"}},[n("v-uni-view",{staticClass:"form_s_item d_flex",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$tab.navigateTo("/pages/mine/privacy/index")}}},[n("v-uni-view",{staticClass:"label"},[t._v("隐私政策")]),n("v-uni-view",{staticClass:"name"},[n("u-icon",{attrs:{name:"arrow-right",color:"#999",size:"32rpx"}})],1)],1)],1)],1)},r=[]},"19e0":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("7e7c")),r={name:"u-navbar",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},methods:{leftClick:function(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick:function(){this.$emit("rightClick")}}};e.default=r},"39d3":function(t,e,n){"use strict";n.r(e);var a=n("19e0"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"5b62":function(t,e,n){"use strict";n.r(e);var a=n("0e39"),i=n("b398");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("7101");var o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"59ee2439",null,!1,a["a"],void 0);e["default"]=u.exports},7101:function(t,e,n){"use strict";var a=n("f3b2"),i=n.n(a);i.a},"7e7c":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a={props:{safeAreaInsetTop:{type:Boolean,default:uni.$u.props.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:uni.$u.props.navbar.placeholder},fixed:{type:Boolean,default:uni.$u.props.navbar.fixed},border:{type:Boolean,default:uni.$u.props.navbar.border},leftIcon:{type:String,default:uni.$u.props.navbar.leftIcon},leftText:{type:String,default:uni.$u.props.navbar.leftText},rightText:{type:String,default:uni.$u.props.navbar.rightText},rightIcon:{type:String,default:uni.$u.props.navbar.rightIcon},title:{type:[String,Number],default:uni.$u.props.navbar.title},bgColor:{type:String,default:uni.$u.props.navbar.bgColor},titleWidth:{type:[String,Number],default:uni.$u.props.navbar.titleWidth},height:{type:[String,Number],default:uni.$u.props.navbar.height},leftIconSize:{type:[String,Number],default:uni.$u.props.navbar.leftIconSize},leftIconColor:{type:String,default:uni.$u.props.navbar.leftIconColor},autoBack:{type:Boolean,default:uni.$u.props.navbar.autoBack},titleStyle:{type:[String,Object],default:uni.$u.props.navbar.titleStyle}}};e.default=a},9326:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=n("26cb"),o={computed:(0,i.default)({},(0,r.mapGetters)(["userInfo"])),onLoad:function(){console.log(this.userInfo)},data:function(){return{}}};e.default=o},a4ff:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */.d_settings[data-v-59ee2439]{padding:%?140?% %?20?% %?20?% %?20?%;color:#858992}.d_settings .form_section[data-v-59ee2439]{padding:0 %?20?%}.d_settings .form_section .form_s_item[data-v-59ee2439]{justify-content:space-between;align-items:center;height:%?90?%;border-bottom:1px solid #444}.d_settings .form_section .form_s_item .name[data-v-59ee2439]{align-items:center}.d_settings .form_section .form_s_item .name > uni-text[data-v-59ee2439]:nth-child(1){margin-right:%?10?%}',""]),t.exports=e},b26d:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni.scss */uni-view[data-v-5302c461], uni-scroll-view[data-v-5302c461], uni-swiper-item[data-v-5302c461]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-navbar--fixed[data-v-5302c461]{position:fixed;left:0;right:0;top:0;z-index:11}.u-navbar__content[data-v-5302c461]{display:flex;flex-direction:row;align-items:center;height:44px;background-color:#9acafc;position:relative;justify-content:center}.u-navbar__content__left[data-v-5302c461], .u-navbar__content__right[data-v-5302c461]{padding:0 13px;position:absolute;top:0;bottom:0;display:flex;flex-direction:row;align-items:center}.u-navbar__content__left[data-v-5302c461]{left:0}.u-navbar__content__left--hover[data-v-5302c461]{opacity:.7}.u-navbar__content__left__text[data-v-5302c461]{font-size:15px;margin-left:3px}.u-navbar__content__title[data-v-5302c461]{text-align:center;font-size:16px;color:#303133}.u-navbar__content__right[data-v-5302c461]{right:0}.u-navbar__content__right__text[data-v-5302c461]{font-size:15px;margin-left:3px}',""]),t.exports=e},b398:function(t,e,n){"use strict";n.r(e);var a=n("9326"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},c205:function(t,e,n){"use strict";var a=n("fe98"),i=n.n(a);i.a},d62e:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uStatusBar:n("8b4d").default,uIcon:n("7811").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-navbar"},[t.fixed&&t.placeholder?n("v-uni-view",{staticClass:"u-navbar__placeholder",style:{height:t.$u.addUnit(t.$u.getPx(t.height)+t.$u.sys().statusBarHeight,"px")}}):t._e(),n("v-uni-view",{class:[t.fixed&&"u-navbar--fixed"]},[t.safeAreaInsetTop?n("u-status-bar",{attrs:{bgColor:t.bgColor}}):t._e(),n("v-uni-view",{staticClass:"u-navbar__content",class:[t.border&&"u-border-bottom"],style:{height:t.$u.addUnit(t.height),backgroundColor:t.bgColor}},[n("v-uni-view",{staticClass:"u-navbar__content__left",attrs:{"hover-class":"u-navbar__content__left--hover","hover-start-time":"150"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}},[t._t("left",[t.leftIcon?n("u-icon",{attrs:{name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor}}):t._e(),t.leftText?n("v-uni-text",{staticClass:"u-navbar__content__left__text",style:{color:t.leftIconColor}},[t._v(t._s(t.leftText))]):t._e()])],2),t._t("center",[n("v-uni-text",{staticClass:"u-line-1 u-navbar__content__title",style:[{width:t.$u.addUnit(t.titleWidth)},t.$u.addStyle(t.titleStyle)]},[t._v(t._s(t.title))])]),t.$slots.right||t.rightIcon||t.rightText?n("v-uni-view",{staticClass:"u-navbar__content__right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t._t("right",[t.rightIcon?n("u-icon",{attrs:{name:t.rightIcon,size:"20"}}):t._e(),t.rightText?n("v-uni-text",{staticClass:"u-navbar__content__right__text"},[t._v(t._s(t.rightText))]):t._e()])],2):t._e()],2)],1)],1)},r=[]},ed7b:function(t,e,n){"use strict";n.r(e);var a=n("d62e"),i=n("39d3");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("c205");var o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"5302c461",null,!1,a["a"],void 0);e["default"]=u.exports},f3b2:function(t,e,n){var a=n("a4ff");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("d720f0ce",a,!0,{sourceMap:!1,shadowMode:!1})},fe98:function(t,e,n){var a=n("b26d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("38a06628",a,!0,{sourceMap:!1,shadowMode:!1})}}]);