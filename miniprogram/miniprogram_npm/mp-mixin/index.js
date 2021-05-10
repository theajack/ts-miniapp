module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1620478799197, function(require, module, exports) {
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.mpmixin=n():t.mpmixin=n()}(this,(function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){function o(t){var n=t.data,e=t.target,o=t.force,r=void 0!==o&&o,i=[];for(var a in n)r||void 0===e[a]?e[a]=n[a]:i.push(a);return i}var r;e.r(n),e.d(n,"injectStaff",(function(){return _})),e.d(n,"globalMixin",(function(){return p})),e.d(n,"createStore",(function(){return h})),e.d(n,"initGlobalStore",(function(){return g})),e.d(n,"version",(function(){return m}));var i,a=0;function u(t){var n,e,o=++a,r={},i=(n=[],e=null,{onEventReady:function(t){for(var o=[],r=1;r<arguments.length;r++)o[r-1]=arguments[r];n.find((function(n){return n.fn===t}))||n.push({fn:t,args:o}),null!==e&&(0===o.length&&e&&(o=e),t.apply(void 0,o))},eventReady:function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];e=t,n.forEach((function(n){n.fn.apply(n,0===t.length?n.args:t)}))}}),u=i.onEventReady,f=i.eventReady;return{state:t,__:{_id:o,_injectContext:function(t){var n=t.__mixin;n._store[o].inited||(n._context=t,n._store[o].inited=!0,function(t,n){var e=t.setData,o=t.__mixin;o._setDataList||(o._setDataList=[],o._nativeSetData=e,t.setData=function(n,r){return o._setDataList.forEach((function(t){return t(n)})),e.call(t,n,r)});o._setDataList.push((function(t){var e=o._store[n],r=e.store,i=e.ignoreList;for(var a in t)r.__._hitState(a,t[a],i)}))}(t,o),u((function(e){n._nativeSetData.call(t,e)})))},_hitState:function(n,e,o){var i=function(t){return r[t]||(r[t]=t.replace(/\[/g,".").replace(/\]/g,"").split(".")),r[t]}(n),a=i[0];return void 0!==t[a]&&!o.includes(a)&&(function(n,e,o){var r=t,i=n.length-1;n.forEach((function(t,n){var a;if(n===i)r[t]=e,f(((a={})[o]=e,a));else{if(void 0===r[t])throw new Error("Error setData:"+o);r=r[t]}}))}(i,e,n),!0)}}}}function f(t,n){if(n){var e=function(){n.__._injectContext(this)};if(t.onLoad){var o=t.onLoad,r=t.__mixin;r._onLoadList||(r._onLoadList=[],t.onLoad=function(){for(var t=this,n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];r._onLoadList.forEach((function(n){return n.call(t)})),o.apply(this,n)}),r._onLoadList.push(e)}else t.onLoad=e}}function c(t){return r=t.__?t:u(t)}var d=["onLoad","onShow","onReady","onHide","onShow","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onShareTimeline","onAddToFavorites","onPageScroll","onResize","onTabItemTap"];function s(t,n,e){return void 0===e&&(e=!1),void 0===n&&(n=t.mixin),void 0===n||(function(t,n){o({data:function(t,n){void 0===n&&(n=[]);var e={};return n.forEach((function(n){void 0!==t[n]&&(e[n]=t[n])})),e}(n,d),target:t})}(t,n=function t(n){if("object"!=typeof n)return n;if(n instanceof Array)return n.map((function(n){return t(n)}));var e={};for(var o in n)e[o]=t(n[o]);return e}(n)),function(t,n){void 0!==n&&o({data:n,target:t.data})}(t,n.data),function(t,n){n&&o({data:n,target:t})}(t,n.methods),function(t,n,e){void 0===e&&(e=!1);var i=e?r:t.store||n;if(i){var a=t.__mixin;a._store||(a._store={}),a._store[i.__._id]={store:i,ignoreList:o({data:i.state,target:t.data})}}}(t,n.store,e)),t}function l(t){var n;i=t,(n=t.store)&&c(n)}function v(){var t=Page;Page=function(n){n.data||(n.data={}),n.__mixin||(n.__mixin={}),n=function(t){return s(t,i,!0)}(n),function(t){var n=t.__mixin._store;if(n)for(var e in n)f(t,n[e].store)}(n=s(n)),t(n)}}function _(t){t.mixin=l,t.createStore=u,t.initGlobalStore=c,t.mpMixinVersion="0.0.4"}v(),"undefined"!=typeof wx?_(wx):"undefined"!=typeof qq&&_(qq);var p=l,h=u,g=c,m="0.0.4";n.default={globalMixin:p,createStore:h,initGlobalStore:g,version:m,injectStaff:_}}]).default}));
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1620478799197);
})()
//# sourceMappingURL=index.js.map