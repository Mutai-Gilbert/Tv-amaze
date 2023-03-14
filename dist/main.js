"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;700&display=swap);"]),s.push([e.id,".header {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.logo {\n  width: 200px;\n  height: auto;\n}\n\n.nav-bar {\n  display: flex;\n  width: 500px;\n}\n\n.nav-container {\n  display: flex;\n  gap: 50px;\n  text-decoration: none;\n  list-style-type: none;\n}\n\n.nav-items {\n  font-size: 20px;\n  text-decoration: none;\n  font-family: 'poppins', sans-serif;\n  color: #1a2236;\n}\n",""]);const i=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var c=e[i],p=r.base?c[0]+r.base:c[0],u=o[p]||0,l="".concat(p," ").concat(u);o[p]=u+1;var f=t(l),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(d);else{var v=a(d,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:v,references:1})}s.push(l)}return s}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=t(o[s]);n[i].references--}for(var c=r(e,a),p=0;p<o.length;p++){var u=t(o[p]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},987:(e,n,t)=>{var r=t(379),a=t.n(r),o=t(795),s=t.n(o),i=t(569),c=t.n(i),p=t(565),u=t.n(p),l=t(216),f=t.n(l),d=t(589),v=t.n(d),h=t(426),m={};m.styleTagTransform=v(),m.setAttributes=u(),m.insert=c().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=f(),a()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals}},e=>{e(e.s=987)}]);