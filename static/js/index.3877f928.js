(()=>{"use strict";var e={441:function(e,r){var t;let n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,a=(()=>{let e=function(){};return e.prototype=Object.create(null),e})();function f(e,r,t){do{let t=e.charCodeAt(r);if(32!==t&&9!==t)return r}while(++r<t);return t}function l(e,r,t){for(;r>t;){let t=e.charCodeAt(--r);if(32!==t&&9!==t)return r+1}return t}function d(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(r){return e}}},857:function(e,r,t){var n=t("676"),o=t("271"),u=t("751"),i=t("826");let c=()=>(0,i.aj)([{path:"/",element:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.rU,{to:"/",children:"Home Page"}),(0,n.jsx)(i.rU,{to:"/second",children:"Second Page"}),(0,n.jsx)(i.rU,{to:"/third",children:"Third Page"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.j3,{})]}),children:[{index:!0,element:"Home Page"},{path:"/second",element:"Second Page"},{path:"/third",element:"Third Page"}]}],{basename:"/react-setup"}),a=()=>{let e=o.useMemo(()=>c(),[]);return(0,n.jsx)(i.pG,{router:e})};(0,u.createRoot)(document.getElementById("root")).render((0,n.jsx)(o.StrictMode,{children:(0,n.jsx)(function(){return(0,n.jsx)(a,{})},{})}))}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var u=r[n]={exports:{}};return e[n](u,u.exports,t),u.exports}t.m=e,t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},(()=>{var e=[];t.O=function(r,n,o,u){if(n){u=u||0;for(var i=e.length;i>0&&e[i-1][2]>u;i--)e[i]=e[i-1];e[i]=[n,o,u];return}for(var c=1/0,i=0;i<e.length;i++){for(var n=e[i][0],o=e[i][1],u=e[i][2],a=!0,f=0;f<n.length;f++)(!1&u||c>=u)&&Object.keys(t.O).every(function(e){return t.O[e](n[f])})?n.splice(f--,1):(a=!1,u<c&&(c=u));if(a){e.splice(i--,1);var l=o();void 0!==l&&(r=l)}}return r}})(),t.rv=function(){return"1.1.5"},(()=>{var e={980:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o=n[0],u=n[1],i=n[2],c,a,f=0;if(o.some(function(r){return 0!==e[r]})){for(c in u)t.o(u,c)&&(t.m[c]=u[c]);if(i)var l=i(t)}for(r&&r(n);f<o.length;f++)a=o[f],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},n=self.webpackChunkreact_setup=self.webpackChunkreact_setup||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),t.ruid="bundler=rspack@1.1.5";var n=t.O(void 0,["361","118"],function(){return t("857")});n=t.O(n)})();