webpackJsonp([7,19],{"2Rdu":function(t,s){},A57B:function(t,s){},BWhR:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Dd8w"),n=a.n(e),i=a("Qt8M"),o=a("NYxO"),r={data:function(){return{isGuan:!1,isMe:!0,userData:{image:"",name:"",sign:"",site:"123"}}},components:{shangchuan:i.default},computed:n()({},Object(o.c)(["userInfo"])),methods:n()({},Object(o.b)(["logOut"]),{qwe:function(t){console.log(this.$route),this.$router.push({name:t})},toModifier:function(){this.$router.push("/user/modifier")},out:function(){var t=this;window.localStorage.removeItem("token"),this.logOut().then(function(s){t.$router.push("/"),t.$Message.info({content:"已经退出.....",duration:3})})}})},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user"},[a("div",{staticClass:"left"},[a("div",{staticClass:"top"},[a("div",{staticClass:"headimg"},[a("img",{attrs:{src:t.$store.state.userInfo.image,alt:""}})]),t._v(" "),a("div",{staticClass:"main"},[a("h3",[t._v(t._s(t.$store.state.userInfo.name?t.$store.state.userInfo.name:t.$store.state.userInfo.username))]),t._v(" "),t.isGuan?a("p",[a("span",[t._v("标签： "+t._s(t.$store.state.userInfo.sign))]),t._v(" "),a("span",[t.isMe?a("ButtonGroup",[a("Button",{attrs:{type:"success",ghost:""},on:{click:t.toModifier}},[t._v("编辑个人资料")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.out}},[t._v("退出登录")])],1):a("span",[t._v("\n                            官方网址："),a("a",{attrs:{href:t.userData.site}},[t._v("{网址}")])])],1)]):a("p",[a("span",[t._v("个性签名： "+t._s(t.$store.state.userInfo.sign?t.$store.state.userInfo.sign:"踏破铁鞋无觅处，得来全不费工夫"))]),t._v(" "),a("span",[t.isMe?a("ButtonGroup",[a("Button",{attrs:{type:"success",ghost:""},on:{click:t.toModifier}},[t._v("编辑个人资料")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.out}},[t._v("退出登录")])],1):t._e()],1)])])]),t._v(" "),t.isGuan?t._e():a("div",{staticClass:"nav"},[a("Tabs",{attrs:{value:this.$route.name},on:{"on-click":t.qwe}},[a("TabPane",{attrs:{label:"动态",name:"user-dongtai"}}),t._v(" "),a("TabPane",{attrs:{label:"提问",name:"user-tiwen"}}),t._v(" "),a("TabPane",{attrs:{label:"回答",name:"user-huida"}}),t._v(" "),a("TabPane",{attrs:{label:"上传",name:"user-shangchuan"}}),t._v(" "),a("TabPane",{attrs:{label:"收藏",name:"user-shoucang"}}),t._v(" "),a("TabPane",{attrs:{label:"关注",name:"user-guanzhu"}})],1)],1),t._v(" "),a("div",{staticClass:"content"},[a("keep-alive",[a("router-view")],1)],1)]),t._v(" "),a("Affix",{staticClass:"right",attrs:{"offset-top":55}},[t.isMe?a("div",{staticClass:"rightTop"},[a("div",{staticClass:"topLeft"},[a("p",[t._v("关注了")]),t._v(" "),a("h3",[t._v("78")])]),t._v(" "),a("Divider",{attrs:{type:"vertical"}}),t._v(" "),a("div",{staticClass:"topRight"},[a("p",[t._v("收获喜欢")]),t._v(" "),a("h3",[t._v("56")])])],1):a("div",{staticClass:"rightTop"},[a("div",{staticClass:"topLeft"},[a("p",[t._v("关注人数")]),t._v(" "),a("h3",[t._v("78")])]),t._v(" "),a("div",{staticClass:"topRigh"},[a("Button",{attrs:{type:"success",ghost:""}},[t._v("关注")])],1)]),t._v(" "),a("div",{staticClass:"rightDown"},[t.isGuan?a("Collapse",[a("Panel",{attrs:{name:"1"}},[t._v("\n                    发布文件"),a("span",[t._v("23")]),t._v(" "),a("p",{attrs:{slot:"content"},slot:"content"},[t._v("史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。")])]),t._v(" "),a("Panel",{attrs:{name:"2"}},[t._v("\n                    官方电话"),a("span",[t._v("23")]),t._v(" "),a("p",{attrs:{slot:"content"},slot:"content"},[t._v("斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。")])]),t._v(" "),a("Panel",{attrs:{name:"3"}},[t._v("\n                    官方地址"),a("span",[t._v("23")]),t._v(" "),a("p",{attrs:{slot:"content"},slot:"content"},[t._v("乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。")])])],1):a("Collapse",[a("Panel",{attrs:{name:"1"}},[t._v("\n                    关注的文件"),a("span",[t._v("23")]),t._v(" "),a("p",{attrs:{slot:"content"},slot:"content"},[t._v("史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。")])]),t._v(" "),a("Panel",{attrs:{name:"2"}},[t._v("\n                    关注的问题"),a("span",[t._v("23")]),t._v(" "),a("p",{attrs:{slot:"content"},slot:"content"},[t._v("斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。")])]),t._v(" "),a("Panel",{attrs:{name:"3"}},[t._v("\n                    关注的话题"),a("span",[t._v("23")]),t._v(" "),a("p",{attrs:{slot:"content"},slot:"content"},[t._v("乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。")])])],1)],1)])],1)},staticRenderFns:[]};var v=a("VU/8")(r,c,!1,function(t){a("2Rdu"),a("XcVf")},"data-v-797c5ef1",null);s.default=v.exports},Qt8M:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Dd8w"),n=a.n(e),i=a("NYxO"),o={data:function(){return{list:[],count:6,isMe:!0}},methods:n()({},Object(i.b)(["setArticle"]),{toArticle:function(t){var s=this;this.$api.api.wenzhang(t).then(function(a){console.log(a),s.setArticle(a.data),s.$router.push({name:"wenzhang",params:{id:t}})})},toPage:function(t){var s=this;this.$api.api.userCenter.shangchuan(this.$store.state.userInfo.id,t).then(function(t){console.log("此处是上传"),console.log(t),s.list=t.data.results,s.count=t.data.count})}}),mounted:function(){var t=this;this.$api.api.userCenter.shangchuan(this.$store.state.userInfo.id,1).then(function(s){console.log("此处是上传"),console.log(s),t.list=s.data.results,t.count=s.data.count})}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"shangchuan"},[a("div",{staticClass:"nav"},[t.isMe?a("Button",[t._v("我的文章")]):t._e()],1),t._v(" "),a("div",{staticClass:"main"},[t.list.length?a("div",{staticClass:"a"},[t._l(t.list,function(s,e){return a("div",{key:e,staticClass:"wenzhang"},[a("div",{staticClass:"wenzahngLeft"},[a("div",{staticClass:"top"},[a("h2",{on:{click:function(a){t.toArticle(s.id)}}},[t._v(t._s(s.title))]),t._v(" "),a("p",[t._v(t._s(s.brief))])]),t._v(" "),a("p",{staticClass:"down"},[a("span",[t._v("#标签："+t._s(s.lable))]),t._v(" "),a("span",[a("i",{staticClass:"iconfont icon-eye"}),t._v(t._s(s.click_nums))]),t._v(" "),a("span",[a("i",{staticClass:"iconfont icon-message"}),t._v(t._s(s.pinglun||23))]),t._v(" "),a("span",[a("i",{staticClass:"iconfont icon-heart"}),t._v(t._s(s.fav_nums))]),t._v(" "),a("span",[t._v("发表于: "+t._s(s.add_time))])])]),t._v(" "),a("div",{staticClass:"wengzhangRight"})])}),t._v(" "),a("Page",{staticClass:"page",attrs:{total:t.count,"show-elevator":""},on:{"on-change":t.toPage}})],2):a("div",{staticClass:"empty"},[a("div",{staticClass:"kong"},[a("div",{staticClass:"tu"}),t._v(" "),a("p",[t._v("还没有文章，开始  "),a("router-link",{staticStyle:{color:"green"},attrs:{to:"/e"}},[t._v("写一篇文章")])],1)])])])])},staticRenderFns:[]};var c=a("VU/8")(o,r,!1,function(t){a("A57B")},"data-v-795d2e4e",null);s.default=c.exports},XcVf:function(t,s){}});