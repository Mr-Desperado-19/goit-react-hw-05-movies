"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[346],{346:function(n,t,r){r.r(t),r.d(t,{default:function(){return f}});var e=r(861),u=r(439),c=r(757),a=r.n(c),i=r(791),o=r(87),s=r(390),p=r(184);var f=function(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),r=t[0],c=t[1];return(0,i.useEffect)((function(){function n(){return(n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Df)();case 2:t=n.sent,c(t.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h1",{className:"title",children:"Trending today"}),(0,p.jsx)("ul",{className:"home-list",children:r.map((function(n){return(0,p.jsx)("li",{className:"home-item",children:(0,p.jsx)(o.rU,{to:"/movies/".concat(n.id),children:(0,p.jsx)("span",{className:"home-text",children:n.title})})},n.id)}))})]})}},390:function(n,t,r){r.d(t,{Df:function(){return s},TP:function(){return l},tx:function(){return w},z1:function(){return f},zv:function(){return m}});var e=r(861),u=r(757),c=r.n(u),a="d9b2a8e4929d31f3c3363f94bf5b0782";function i(n){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(c().mark((function n(t){var r,e,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3".concat(t,"&api_key=").concat(a),n.next=3,fetch(r);case 3:return e=n.sent,n.next=6,e.json();case 6:return u=n.sent,n.abrupt("return",u);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i("/trending/movie/day?"));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i("/search/movie?query=".concat(t,"&")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i("/movie/".concat(t,"?")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i("/movie/".concat(t,"/credits?")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i("/movie/".concat(t,"/reviews?")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},861:function(n,t,r){function e(n,t,r,e,u,c,a){try{var i=n[c](a),o=i.value}catch(s){return void r(s)}i.done?t(o):Promise.resolve(o).then(e,u)}function u(n){return function(){var t=this,r=arguments;return new Promise((function(u,c){var a=n.apply(t,r);function i(n){e(a,u,c,i,o,"next",n)}function o(n){e(a,u,c,i,o,"throw",n)}i(void 0)}))}}r.d(t,{Z:function(){return u}})}}]);
//# sourceMappingURL=346.a3af2cb1.chunk.js.map