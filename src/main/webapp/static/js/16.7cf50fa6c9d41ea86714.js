webpackJsonp([16],{NJEK:function(t,s){},whOr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={data:function(){return{list:[1,2,3,4,5],count:100}},methods:{pageNum:function(t){console.log("选中的页面为",t)},toSelf:function(){this.$router.push("/message/self")}}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"item-content"},t._l(t.list,function(s,i){return e("div",{key:i,staticClass:"userItem"},[e("div",{staticClass:"item-left",on:{click:t.toSelf}},[e("div",{staticClass:"headImg"}),t._v(" "),t._m(1,!0)]),t._v(" "),e("div",{staticClass:"item-right"},[e("span",[t._v("回复时间...")]),t._v(" "),e("Dropdown",{attrs:{trigger:"click",placement:"right-start"}},[e("a",{attrs:{href:"javascript:void(0)"}},[e("b",[t._v("操作"),e("i",{staticClass:"iconfont icon-right"})])]),t._v(" "),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[e("DropdownItem",[e("i",{staticClass:"iconfont icon-delete"}),t._v("删除会话")]),t._v(" "),e("DropdownItem",[e("i",{staticClass:"iconfont icon-stop"}),t._v("加入黑名单")]),t._v(" "),e("DropdownItem",[e("i",{staticClass:"iconfont icon-error"}),t._v("举报用户")])],1)],1)],1)])})),t._v(" "),e("Page",{staticClass:"page",attrs:{total:t.count,"show-elevator":""},on:{"on-change":t.pageNum}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"top-msg"},[s("b",[this._v("全部私信")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"user-about"},[s("b",[this._v("用户名名称")]),this._v(" "),s("p",{staticClass:"aa"},[this._v("回复内容为.....")])])}]};var n=e("VU/8")(i,a,!1,function(t){e("NJEK")},"data-v-a1e2a498",null);s.default=n.exports}});