webpackJsonp([0],[,function(e,n,t){"use strict";var o=t(0),r=t.n(o),i=t(8),d=t.n(i);t.d(n,"a",function(){return s});var s=new r.a(d.a)},,,,function(e,n,t){"use strict";n["default"]={data:function(){return{info:{keyCode:"",code:""}}},mounted:function(){var e=this;this.handler=function(n){e.info={keyCode:n.keyCode,code:n.code}},document.addEventListener("keydown",this.handler,!1)},beforeDestroy:function(){document.removeEventListener("keydown",this.handler,!1)}}},function(e,n){},,function(e,n,t){var o,r;t(6),o=t(5);var i=t(9);r=o=o||{},"object"==typeof o["default"]&&(r=o=o["default"]),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=o},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_m(0)," ",_h("p",{attrs:{style:"margin-top: 2rem"}},[info.code?_h("kbd",[_s(info.code)]):void 0," ",info.keyCode?_h("kbd",[_s(info.keyCode)]):void 0])])},staticRenderFns:[function(){with(this)return _h("h1",["Simply press your keyboard to get keyCode ;)"])}]}},,function(e,n,t){"use strict";var o=t(1);o.a.$mount("#app")}],[11]);