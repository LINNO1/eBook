webpackJsonp([1],{135:function(t,e,i){"use strict";var n=i(80),s=i(299),o=i(293),a=i.n(o);n.a.use(s.a),e.a=new s.a({routes:[{path:"/",redirect:"/ebook"},{path:"/ebook",name:"Ebook",component:a.a}]})},136:function(t,e){},137:function(t,e,i){i(241);var n=i(38)(i(155),i(295),null,null);t.exports=n.exports},155:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"App",components:{}},document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("html"),e=window.innerWidth/10;e=e>50?50:e,t.style.fontSize=e+"px"})},156:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(292),s=i.n(n);e.default={components:{contentView:s.a},data:function(){return{ifSettingShow:!1,showTag:0,progress:0,ifShowContent:!1}},props:{ifTitleMenuShow:{type:Boolean,default:!1},fontSizeList:Array,defaultFontsize:Number,defaultTheme:Number,themeList:Array,bookAvaiable:Boolean,navigation:Object},methods:{hideSetting:function(){this.ifSettingShow=!1},setFontsize:function(t){this.$emit("setFontSize",t)},setTheme:function(t){this.$emit("setTheme",t)},showSetting:function(t){this.showTag=t,3===this.showTag?(this.ifSettingShow=!1,this.ifShowContent=!0,console.log("222")):this.ifSettingShow=!0},onProgressInput:function(t){this.progress=t,this.$refs.progress.style.backgroundSize="${this.progress}% 100%"},onProgressChange:function(t){this.$emit("onProgressChange",t)},hideContent:function(){this.ifShowContent=!1},jumpTo:function(t){this.$emit("jumpTo",t)}}}},157:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:{ifTitleMenuShow:{type:Boolean,default:!1}}}},158:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{ifShowContent:Boolean,navigation:Object,bookAvaiable:Boolean},methods:{jumpTo:function(t){this.$emit("jumpTo",t)}}}},159:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var n=i(142),s=i(291),o=i.n(s),a=i(290),r=i.n(a);t.ePub=n.a;e.default={name:"App",data:function(){return{ifTitleMenuShow:!0,fontSizeList:[{fontsize:12},{fontsize:14},{fontsize:16},{fontsize:18},{fontsize:20},{fontsize:24}],defaultFontsize:16,themeList:[{name:"default",style:{body:{color:"#000",background:"#fff"}}},{name:"eye",style:{body:{" color":"#000",background:"#cebbaa"}}},{name:"night",style:{body:{color:"#fff",background:"#000"}}},{name:"gold",style:{body:{color:"#000"," background":"rgb(241,236,226)"}}}],defaultTheme:0,bookAvaiable:!1,navigation:{}}},components:{TitleBar:o.a,MenuBar:r.a},methods:{showEpub:function(){var t=this;this.book=new n.a("../static/V358.epub"),this.rendition=this.book.renderTo("read",{width:window.innerWidth,height:window.innerHeight}),this.rendition.display(),this.themes=this.rendition.themes,this.setFontSize(this.defaultFontsize),this.registerTheme(),this.setTheme(this.defaultTheme),this.book.ready.then(function(){return t.navigation=t.book.navigation,t.book.locations.generate()}).then(function(e){t.locations=t.book.locations,t.bookAvaiable=!0,console.log(t.locations)})},prePage:function(){this.rendition&&this.rendition.prev()},nextPage:function(){this.rendition&&this.rendition.next()},toggleTitleMenu:function(){this.ifTitleMenuShow=!this.ifTitleMenuShow,this.ifTitleMenuShow||this.$refs.menuBar.hideSetting()},setFontSize:function(t){this.defaultFontsize=t,this.themes&&this.themes.fontSize(this.defaultFontsize+"px")},registerTheme:function(){var t=this;console.log(this.themeList),this.themeList.forEach(function(e){t.themes.register(e.name,e.style)})},setTheme:function(t){this.themes.select(this.themeList[t].name),this.defaultTheme=t},onProgressChange:function(t){var e=t/100;console.log(this.locations);var i=e>0?this.locations.cfiFromPercentage(e):0;this.rendition.display(i)},jumpTo:function(t){this.rendition.display(t),this.hideTitleMenu()},hideTitleMenu:function(){this.ifTitleMenuShow=!1,this.$refs.menuBar.hideSetting(),this.$refs.menuBar.hideContent()}},mounted:function(){this.showEpub()}}}.call(e,i(19))},160:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(80),s=i(137),o=i.n(s),a=i(136),r=(i.n(a),i(135));n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,render:function(t){return t(o.a)}})},240:function(t,e){},241:function(t,e){},242:function(t,e){},243:function(t,e){},244:function(t,e){},290:function(t,e,i){i(242);var n=i(38)(i(156),i(296),"data-v-86b670d6",null);t.exports=n.exports},291:function(t,e,i){i(244);var n=i(38)(i(157),i(298),"data-v-d1934fec",null);t.exports=n.exports},292:function(t,e,i){i(243);var n=i(38)(i(158),i(297),"data-v-b085a282",null);t.exports=n.exports},293:function(t,e,i){i(240);var n=i(38)(i(159),i(294),"data-v-04382ac4",null);t.exports=n.exports},294:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook"},[i("TitleBar",{attrs:{ifTitleMenuShow:t.ifTitleMenuShow}}),t._v(" "),i("div",{staticClass:"read-wrapper"},[i("div",{attrs:{id:"read"}}),t._v(" "),i("div",{staticClass:"mask"},[i("div",{staticClass:"left",on:{click:t.prePage}}),t._v(" "),i("div",{staticClass:"center",on:{click:t.toggleTitleMenu}}),t._v(" "),i("div",{staticClass:"right",on:{click:t.nextPage}})])]),t._v(" "),i("MenuBar",{ref:"menuBar",attrs:{ifTitleMenuShow:t.ifTitleMenuShow,fontSizeList:t.fontSizeList,defaultFontsize:t.defaultFontsize,themeList:t.themeList,defaultTheme:t.defaultTheme,bookAvaiable:t.bookAvaiable,navigation:t.navigation},on:{setFontSize:t.setFontSize,setTheme:t.setTheme,onProgressChange:t.onProgressChange,jumpTo:t.jumpTo}})],1)},staticRenderFns:[]}},295:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},296:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu-bar"},[i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleMenuShow,expression:"ifTitleMenuShow"}],staticClass:"menu-wrapper",class:{"hide-box-shadow":t.ifSettingShow||!t.ifTitleMenuShow}},[i("div",{staticClass:"icon-wrapper"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true "},on:{click:function(e){t.showSetting(3)}}},[i("use",{attrs:{"xlink:href":"#icon-sanheng"}})])]),t._v(" "),i("div",{staticClass:"icon-wrapper"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(e){t.showSetting(2)}}},[i("use",{attrs:{"xlink:href":"#icon-jindu1"}})])]),t._v(" "),i("div",{staticClass:"icon-wrapper"},[i("svg",{staticClass:"icon icon-bright ",attrs:{"aria-hidden":"true"},on:{click:function(e){t.showSetting(1)}}},[i("use",{attrs:{"xlink:href":"#icon-taiyang"}})])]),t._v(" "),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-a",on:{click:function(e){t.showSetting(0)}}},[t._v("A")])])])]),t._v(" "),i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifSettingShow,expression:"ifSettingShow"}],staticClass:"setting-wrapper"},[0===t.showTag?i("div",{staticClass:"setting-font-size"},[i("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[0].fontsize+"px"}},[t._v("A")]),t._v(" "),t._l(t.fontSizeList,function(e,n){return i("div",{staticClass:"select-wrapper",on:{click:function(i){t.setFontsize(e.fontsize)}}},[i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"point-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.defaultFontsize===e.fontsize,expression:"defaultFontsize===item.fontsize"}],staticClass:"point"},[i("div",{staticClass:"small-point"})])]),t._v(" "),i("div",{staticClass:"line"})])}),t._v(" "),i("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[t.fontSizeList.length-1].fontsize+"px"}},[t._v("A")])],2):1===t.showTag?i("div",{staticClass:"setting-theme"},t._l(t.themeList,function(e,n){return i("div",{staticClass:"theme-item",on:{click:function(e){t.setTheme(n)}}},[i("div",{staticClass:"preview",class:{"no-border":"#fff"!==e.style.body.background},style:{background:e.style.body.background}}),t._v(" "),i("div",{staticClass:"text",class:{selected:n===t.defaultTheme}},[t._v(" "+t._s(e.name)+" ")])])})):2===t.showTag?i("div",{staticClass:"setting-progress"},[i("div",{staticClass:"progress-wrapper"},[i("input",{ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",step:"1",disable:!t.bookAvaiable},domProps:{value:t.progress},on:{change:function(e){t.onProgressChange(e.target.value)},input:function(e){t.onProgressInput(e.target.value)}}})]),t._v(" "),i("div",{staticClass:"text-wrapper"},[i("span",[t._v("  "+t._s(t.bookAvaiable?t.progress+"%":"加载中...")+" ")])])]):t._e()])]),t._v(" "),i("contentView",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],attrs:{ifShowContent:t.ifShowContent,navigation:t.navigation,bookAvaiable:t.bookAvaiable},on:{jumpTo:t.jumpTo}}),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],staticClass:"content-mask",on:{click:t.hideContent}})])],1)},staticRenderFns:[]}},297:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-right"}},[i("div",{staticClass:"content"},[t.bookAvaiable?i("div",{staticClass:"content-wrapper"},t._l(t.navigation.toc,function(e,n){return i("div",{staticClass:"content-item",on:{click:function(i){t.jumpTo(e.href)}}},[i("span",{staticClass:"text"},[t._v(t._s(e.label))])])})):i("div",{staticClass:"empty"},[t._v("加载中...")])])])},staticRenderFns:[]}},298:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-bar"},[i("transition",{attrs:{name:"slide-down"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleMenuShow,expression:"ifTitleMenuShow"}],staticClass:"title-wrapper"},[i("div",{staticClass:"left"},[i("svg",{staticClass:"icon ",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-back"}})])]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"icon-wrapper"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-gouwuche"}})])]),t._v(" "),i("div",{staticClass:"icon-wrapper"},[i("svg",{staticClass:"icon ",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-renbudaiwaiquan"}})])]),t._v(" "),i("div",{staticClass:"icon-wrapper"},[i("svg",{staticClass:"icon ",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-sandian"}})])])])])])],1)},staticRenderFns:[]}}},[160]);
//# sourceMappingURL=app.bcf6f5f0458d2b6f4edc.js.map