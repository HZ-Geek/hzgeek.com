(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{348:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{logoImg:"/imgs/logo-zhang.png",subtitle:"衡水中学一群热爱计算机技术的极客们",contents:[{title:"我们是谁？",text:"我们是来自河北衡水中学四个校区、初高中两个学段的一群热爱计算机技术、有创新精神、有担当理想的学生。"},{title:"我们做啥？",text:"我们主要涉及编程开发、计算机技巧、软件分享、数码设备、智能硬件、视频影像、平面设计、音乐制作等各个方面。"},{title:"加入我们！",text:"我们欢迎任何衡中在校学生，只要你对计算机、数码有兴趣，无论你是小白还是大佬，点击网页底部链接加入我们！"}],buttons:[{icon:"mdi-github",title:"GitHub",link:"https://github.com/HZ-Geek",type:"href"},{icon:"mdi-blogger",title:"博客动态",link:"/blog",type:"to"},{icon:"mdi-account-plus-outline",title:"加入我们",link:"https://joinus.hzgeek.com",type:"href"}]}},computed:{nameImg:function(){return this.$vuetify.theme.dark?"/imgs/name-dark.svg":"/imgs/name.svg"}},head:function(){return{title:"首页"}}},r=n(81),l=n(114),c=n.n(l),v=n(345),d=n(339),m=(n(15),n(13),n(63),n(29),n(230),n(158),n(78),n(77),n(0));var f,y=n(82),_=(f="container",m.a.extend({name:"v-".concat(f),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,o=e.children;data.staticClass="".concat(f," ").concat(data.staticClass||"").trim();var r=data.attrs;if(r){data.attrs={};var l=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,r=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(y.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}}),h=n(341),k=n(229),C=n(343),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.$vuetify.breakpoint.mdAndUp?n("v-row",{staticClass:"my-16"},[n("v-col",{attrs:{cols:"2",offset:"3"}},[n("v-img",{attrs:{src:t.logoImg}})],1),t._v(" "),n("v-col",{attrs:{cols:"4","align-self":"center"}},[n("div",{staticClass:"my-4 ml-4"},[n("img",{attrs:{src:t.nameImg}})]),t._v(" "),n("p",{staticClass:"text-h6 text-secondery my-4 ml-4 text-no-wrap"},[t._v("\n        "+t._s(t.subtitle)+"\n      ")])])],1):n("div",{staticClass:"my-16"},[n("v-row",{staticClass:"my-4"},[n("v-col",{attrs:{cols:"6",offset:"3"}},[n("v-img",{attrs:{src:t.logoImg}})],1)],1),t._v(" "),n("v-row",{staticClass:"my-4"},[n("v-col",{attrs:{cols:"8",offset:"2"}},[n("v-img",{attrs:{src:t.nameImg}})],1)],1),t._v(" "),n("v-row",{staticClass:"my-4"},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"text-center text-h6 text-secondery"},[t._v("\n          "+t._s(t.subtitle)+"\n        ")])])],1)],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("v-row",{staticClass:"my-8"},t._l(t.contents,(function(e){return n("v-col",{key:e.title,attrs:{cols:"4"}},[n("p",{staticClass:"text-h4"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"text-body-1"},[t._v(t._s(e.text))])])})),1):n("div",{staticClass:"my-8"},t._l(t.contents,(function(e){return n("v-row",{key:e.title},[n("v-col",{attrs:{cols:"10",offset:"1"}},[n("p",{staticClass:"text-h4"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"text-body-1"},[t._v(t._s(e.text))])])],1)})),1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("v-row",{staticClass:"my-8"},[n("v-col",{attrs:{cols:"6",offset:"3"}},[n("v-row",t._l(t.buttons,(function(e){return n("v-col",{key:e.title,attrs:{cols:"4"}},[n("v-btn",t._b({attrs:{block:"","x-large":"",color:"primary"}},"v-btn",t._d({},[e.type,e.link])),[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(t._s(e.title))],1)],1)})),1)],1)],1):n("div",{staticClass:"my-8"},[n("v-row",t._l(t.buttons,(function(e){return n("v-col",{key:e.title,attrs:{cols:"8",offset:"2"}},[n("v-btn",t._b({attrs:{block:"","x-large":"",color:"primary"}},"v-btn",t._d({},[e.type,e.link])),[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(t._s(e.title))],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCol:d.a,VContainer:_,VIcon:h.a,VImg:k.a,VRow:C.a})}}]);