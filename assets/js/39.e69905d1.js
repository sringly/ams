(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1001:function(o,e,n){"use strict";n.r(e);var t=n(126),i={defaultDropdown:{type:"dropdown",options:{menu:"下拉菜单一",menuItems:["黄金糕","狮子头","螺蛳粉","双皮奶","蚵仔煎"]},style:{"margin-bottom":"50px"}},dropdown2:{type:"dropdown",options:{menu:"下拉菜单二",menuItems:["黄金糕","狮子头","螺蛳粉",{text:"双皮奶",props:{disabled:!0}},{text:"蚵仔煎",props:{divided:!0}}]},props:{type:"primary","split-button":!0},style:{"margin-bottom":"50px"}},dropdown3:{type:"dropdown",options:{menu:"点击触发下拉",menuItems:[{text:"黄金糕",props:{command:"a",icon:"el-icon-plus"}},{text:"狮子头",props:{command:"b",icon:"el-icon-circle-plus"}},{text:"螺蛳粉",props:{command:"c",icon:"el-icon-circle-plus-outline"}},{text:"双皮奶",props:{command:"d",icon:"el-icon-check"}},{text:"蚵仔煎",props:{command:"e",icon:"el-icon-circle-check-outline"}}]},props:{trigger:"click"},on:{command:function(o){this.$message("click on item "+o)}},style:{"margin-bottom":"50px"}},dropdown4:{type:"dropdown",options:{menu:"下拉菜单",menuItems:[{text:"黄金糕",props:{command:"a",icon:"el-icon-plus"}},{text:"狮子头",props:{command:"b",icon:"el-icon-circle-plus"}},{text:"螺蛳粉",props:{command:"c",icon:"el-icon-circle-plus-outline"}},{text:"双皮奶",props:{command:"d",icon:"el-icon-check",disabled:!0}},{text:"蚵仔煎",props:{command:"e",icon:"el-icon-circle-check-outline"}}]},props:{"hide-on-click":!1},style:{"margin-bottom":"50px"}}},c=n(138),s=n.n(c),a=n(137),l=n.n(a),p={mixins:[t.a],mounted:function(){var o=s()(i[this.blockName]);this.configCode=l()(o,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,i[this.blockName]),this.init=!0)}},d=n(1),r=Object(d.a)(p,(function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[o.init?n("ams-block",{staticClass:"demo-card-preview",attrs:{name:o.blockName}}):o._e(),o._v(" "),n("div",{class:"demo-card-config "+(o.showConfig?"open":"")},[n("highlight-code",{attrs:{lang:"javascript"}},[o._v("\n            "+o._s(o.configCode)+"\n        ")])],1),o._v(" "),n("div",{staticClass:"demo-card-config-btn",on:{click:o.toggleDemoCofig}},[n("i",{class:"el-icon-caret-"+(o.showConfig?"top":"bottom")}),o._v("\n         "+o._s(o.showConfig?"隐藏":"显示")+"配置\n        "),o.onlineDemo?n("el-link",{attrs:{href:o.onlineDemo,target:"_blank",type:"success"}},[o._v("在线运行")]):o._e()],1)],1)}),[],!1,null,null,null);e.default=r.exports},125:function(o,e,n){"use strict";var t=n(0),i=(n(131),n(130)),c=n.n(i),s=n(128),a=n.n(s),l=n(136),p=n(132),d=n.n(p),r=(n(133),n(134)),m=n.n(r),u=n(135),f=n.n(u);t.default.use(c.a),t.default.use(a.a),console.log("ams init config"),t.default.use(m.a),t.default.use(f.a),"undefined"!=typeof window&&(window.Vue=t.default),t.default.use(l.a,{languages:{javascript:d.a}}),a.a.config({resource:{api:{withCredentials:!1}}})},126:function(o,e,n){"use strict";n(125);e.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(o){"el-link--inner"!==o.target.className&&(this.showConfig=!this.showConfig)}}}}}]);