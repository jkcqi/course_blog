webpackJsonp([15],{"Zc+C":function(e,t){},ptcf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=n.n(r),s=n("Dp90"),a=n("NYxO"),i=document.getElementsByClassName("ivu-input"),l=(document.getElementsByClassName("ivu-cascader-label"),{data:function(){return{send:!1,lineTime:60,provinceList:s.a,formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:"用户名错误",trigger:"blur"},{type:"string",pattern:/[^\u4E00-\u9FA5]/g,message:"用户名错误"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{type:"string",min:6,message:"长度不足",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"},{type:"string",max:20,message:"用户名过长",trigger:"blur"}],nickname:[{required:!0,message:"请输入昵称",trigger:"blur"},{type:"string",min:2,message:"昵称过短",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}]}}},beforeCreate:function(){var e=document.getElementById("app");console.log("可视区大小为"+document.documentElement.clientHeight),e.style.height=document.documentElement.clientHeight+"px",e.style.backgroundImage='url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590858276072&di=7372ea7c7b548c1ccafaade7018b70fa&imgtype=0&src=http%3A%2F%2Fijblog.cn%2Fwp-content%2Fuploads%2F2018%2F10%2F2018102604365727.jpg")'},beforeDestroy:function(){document.getElementById("app").style.backgroundImage=""},methods:o()({},Object(a.b)(["setUserInfo"]),{regist:function(){var e=this,t={username:i[3].value,email:i[4].value,nicename:i[5].value,password:i[6].value},n=this.$qs.stringify(t);this.$api.api.registe(n).then(function(t){if(console.log(t),t.data.token){var n="JWT "+t.data.token;window.localStorage.setItem("token",n),e.$api.api.autoLogin().then(function(n){console.log(n);var r=t.data;e.setUserInfo(r),e.$router.push("/")})}})},format:function(e,t){var n=e.length-1,r=t[n]||!1;return r&&r.code?e[n]+" - "+r.code:e[n]},login:function(){var e=this,t={username:i[1].value,password:i[2].value},n=this.$qs.stringify(t);this.$api.api.login(n).then(function(t){console.log(n),console.log(t);var r=t.data;console.log(r),e.setUserInfo(r),e.$router.push("/")})},identify:function(){var e=this,t={mobile:i[4].value};console.log("---------------------手机号码--------------------"),console.log(t),this.$api.api.identify(t).then(function(t){if(t.data){e.send=!0;var n=setInterval(function(){e.lineTime--},1e3);setTimeout(function(){clearInterval(n),console.log("定时器已经移除"),e.send=!1,e.lineTime=60},6e4),console.log(t)}})}})}),p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("br"),e._v(" "),n("Tabs",{attrs:{id:"tab"}},[n("TabPane",{attrs:{label:"登录",name:"name1"}},[n("Form",{ref:"formInline",staticStyle:{"margin-top":"15%"},attrs:{model:e.formInline,rules:e.ruleInline,inline:""}},[n("FormItem",{attrs:{prop:"user"}},[n("Input",{attrs:{type:"text",placeholder:"手机号或邮箱"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-contact"},slot:"prepend"})],1)],1),n("FormItem",{attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-unlock-outline"},slot:"prepend"})],1)],1)],1),e._v(" "),n("Checkbox",{attrs:{size:"large",id:"remember"}},[e._v("记住我")]),e._v(" "),n("a",{attrs:{href:"“”",id:"forget"}},[e._v("登录失败?")]),e._v(" "),n("br"),e._v(" "),n("Button",{staticStyle:{width:"70%","margin-top":"10%","font-size":"1.4em"},attrs:{type:"primary",shape:"circle",size:"large"},on:{click:e.login}},[e._v("登  录")])],1),e._v(" "),n("TabPane",{attrs:{label:"注册",name:"name2"}},[n("Form",{ref:"formInline",staticStyle:{"margin-top":"15%"},attrs:{model:e.formInline,rules:e.ruleInline,inline:""}},[n("FormItem",{attrs:{prop:"username"}},[n("Input",{attrs:{type:"text",placeholder:"你的用户名"},model:{value:e.formInline.username,callback:function(t){e.$set(e.formInline,"username",t)},expression:"formInline.username"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-contact"},slot:"prepend"})],1)],1),n("FormItem",{attrs:{prop:"email"}},[n("Input",{attrs:{type:"text",placeholder:"邮箱"},model:{value:e.formInline.email,callback:function(t){e.$set(e.formInline,"email",t)},expression:"formInline.email"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-mail-open"},slot:"prepend"})],1)],1),n("FormItem",{attrs:{prop:"nickname"}},[n("Input",{attrs:{type:"text",placeholder:"昵称"},model:{value:e.formInline.nickname,callback:function(t){e.$set(e.formInline,"nickname",t)},expression:"formInline.nickname"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-contact"},slot:"prepend"})],1)],1),n("FormItem",{attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-unlock-outline"},slot:"prepend"})],1)],1),n("FormItem",{attrs:{prop:"password"}})],1),e._v(" "),n("Button",{staticStyle:{width:"70%","margin-top":"10%","font-size":"1.4em",background:"rgb(72 , 102, 94)","border-color":"rgb(72 , 102, 94)"},attrs:{type:"primary",shape:"circle",size:"large"},on:{click:e.regist}},[e._v("注 册")])],1)],1),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br")],1)},staticRenderFns:[]};var m=n("VU/8")(l,p,!1,function(e){n("Zc+C")},null,null);t.default=m.exports}});