"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[507],{507:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(861),u=e(439),c=e(757),a=e.n(c),i=e(791),s=e(87),o=e(390),p=e(184);var f=function(){var n=(0,i.useState)(""),t=(0,u.Z)(n,2),e=t[0],c=t[1],f=(0,i.useState)([]),l=(0,u.Z)(f,2),h=l[0],v=l[1],m=function(){var n=(0,r.Z)(a().mark((function n(t){var r,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,(0,o.z1)(e);case 3:r=n.sent,u=r.results,v(u);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"container",children:[(0,p.jsxs)("form",{onSubmit:m,className:"movies-form",children:[(0,p.jsx)("input",{type:"text",value:e,onChange:function(n){return c(n.target.value)},placeholder:"Search movies",className:"movies-input"}),(0,p.jsx)("button",{type:"submit",className:"movies-btn",children:"Search"})]}),h.length>0&&(0,p.jsx)("ul",{className:"movies-list",children:h.map((function(n){return(0,p.jsx)("li",{className:"movies-item",children:(0,p.jsx)(s.rU,{to:"/movies/".concat(n.id),children:(0,p.jsx)("span",{className:"movies-text",children:n.title})})},n.id)}))})]})}},390:function(n,t,e){e.d(t,{Df:function(){return o},TP:function(){return h},tx:function(){return x},z1:function(){return f},zv:function(){return m}});var r=e(861),u=e(757),c=e.n(u),a="d9b2a8e4929d31f3c3363f94bf5b0782";function i(n){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(t){var e,r,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3".concat(t,"&api_key=").concat(a),n.next=3,fetch(e);case 3:return r=n.sent,n.next=6,r.json();case 6:return u=n.sent,n.abrupt("return",u);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i("/trending/movie/day?"));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i("/search/movie?query=".concat(t,"&")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i("/movie/".concat(t,"?")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i("/movie/".concat(t,"/credits?")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i("/movie/".concat(t,"/reviews?")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},861:function(n,t,e){function r(n,t,e,r,u,c,a){try{var i=n[c](a),s=i.value}catch(o){return void e(o)}i.done?t(s):Promise.resolve(s).then(r,u)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(u,c){var a=n.apply(t,e);function i(n){r(a,u,c,i,s,"next",n)}function s(n){r(a,u,c,i,s,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return u}})}}]);
//# sourceMappingURL=507.aedda0ca.chunk.js.map