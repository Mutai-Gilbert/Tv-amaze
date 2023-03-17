"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;700&display=swap);"]),r.push([n.id,".header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: #fff;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n.logo {\n  width: 150px;\n  height: auto;\n}\n\n.nav-bar {\n  display: flex;\n  width: 60%;\n}\n\n.nav-container {\n  display: flex;\n  gap: 30px;\n  text-decoration: none;\n  list-style-type: none;\n}\n\n.nav-items {\n  font-size: 18px;\n  text-decoration: none;\n  font-family: 'Poppins', sans-serif;\n  color: #1a2236;\n}\n\n.search-tv-shows {\n  display: flex;\n  margin: 40px 0;\n  align-items: center;\n  justify-content: center;\n}\n\ninput[type=\"search\"] {\n  height: 35px;\n  width: 70%;\n  border-radius: 8px;\n  border: 2px solid black;\n  padding: 5px;\n  font-size: 16px;\n}\n\n.comment-button {\n  display: flex;\n  align-items: center;\n}\n\nmain {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.link a {\n  color: rgba(206, 205, 205, 0.753);\n  text-decoration: none;\n}\n\n.show_items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n\n#list-of-shows {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 10%;\n}\n\n.actions_name {\n  gap: 50px;\n  display: flex;\n  align-items: center;\n  font-family: 'Poppins', sans-serif;\n}\n\n.icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.movie {\n  font-weight: 500;\n  font-size: 18px;\n  margin-top: 10px;\n}\n\n.button {\n  padding: 5px;\n  font-size: 15px;\n  margin-top: 10px;\n  background-color: #1a2236;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.button:hover {\n  background-color: #354c7d;\n}\n\n.foot-item {\n  display: flex;\n  padding: 30px 60px;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.foot-line {\n  border: 1px solid black;\n  margin-top: 20px;\n}\n\n/*  popup Windows  */\n\n.popIt {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(5px);\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.pop {\n  position: relative;\n  padding: 30px;\n  background-color: white;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  max-width: 600px;\n  max-height: 90%;\n  overflow-y: auto;\n}\n\n.popup_image {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.pop_image {\n  max-width: 100%;\n  max-height: 500px;\n  border-radius: 5px;\n}\n\n.close-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.instructions {\n  margin-top: 20px;\n  font-weight: bold;\n}\n\n.view_more {\n  padding: 5px;\n  font-size: 15px;\n  margin: 12px;\n  background-color: #1a2236;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.pop_comment {\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  background-color: beige;\n  padding: 5px;\n}\n\n.new_list {\n  margin: 0;\n  padding: 0;\n}\n\n.comment-initials {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.add-comm {\n  margin-top: 20px;\n  font-weight: bold;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.form input,\n.form textarea {\n  width: 100%;\n  margin-bottom: 10px;\n  padding: 10px;\n  border-radius: 5px;\n  border: none;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n\n.form input:focus,\n.form textarea:focus {\n  outline: none;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\n}\n\n.submit-btn {\n  margin-top: 20px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #1e90ff;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.submit-btn:hover {\n  background-color: #0071c5;\n}\n",""]);const s=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);o&&r[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var m=t(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=i(u,o);o.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}r.push(l)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=t(a[r]);e[s].references--}for(var c=o(n,i),d=0;d<a.length;d++){var p=t(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},414:(n,e,t)=>{var o=t(379),i=t.n(o),a=t(795),r=t.n(a),s=t(569),c=t.n(s),d=t(565),p=t.n(d),l=t(216),m=t.n(l),u=t(589),f=t.n(u),x=t(426),g={};g.styleTagTransform=f(),g.setAttributes=p(),g.insert=c().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=m(),i()(x.Z,g),x.Z&&x.Z.locals&&x.Z.locals;const v="https://api.tvmaze.com/shows/1/episodes",h="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MMc1FmLd80mPmHV1mx1Z/comments";(async()=>{const n=document.getElementById("list-of-shows"),e=document.querySelector(".popup-comments"),t=document.querySelector(".count-movies");n.innerHTML="";const o=await fetch(v),i=await o.json();if(!o.ok)return void(n.innerText="Server Down");const a=document.createElement("span");a.innerHTML=`(${i.length})`,t.append(a),i.forEach((t=>{const o=document.createElement("section");o.classList.add("show_items");const i=document.createElement("div");i.classList.add("show_image");const a=document.createElement("div");a.innerHTML=` <img class="movie_image" src="${t.image.medium}" alt="${t.name}">`;const r=document.createElement("div");r.classList.add("actions_name");const s=document.createElement("p");s.innerHTML=`${t.name}`,s.classList.add("movie");const c=document.createElement("div");c.classList.add("icon");const d=document.createElement("span");d.classList.add("clickable"),document.createElement("i").innerHTML='<i class="fa-solid fa-heart"></i>';const p=document.createElement("p");p.innerText="2 Likes";const l=document.createElement("div");l.classList.add("comment-button");const m=document.createElement("button");m.innerText="Comments",m.classList.add("button"),l.append(m),c.append(d,p),r.append(s,c),i.append(a),o.append(i,r,l),n.append(o),m.addEventListener("click",(()=>{e.innerHTML=`\n        <div class="popIt">\n\n        <div class="pop">\n\n          <span class="close-button">&times;</span>\n\n            <div class="popup_image">\n            <img class="pop_image" src="${t.image.medium}" alt="asdf">\n            </div>\n\n               <p class="pop_meal">Name: ${t.name}</p>\n               <p>Ratings: ${t.rating.average}</p>\n               <p class="instructions">Airdate: ${t.airdate}</p>\n               <p>Runtime: ${t.runtime}</p>\n\n                 <div class="comment_count"></div>\n\n          <button class="view_more">Refresh Comments</button>\n         \n          <div class="pop_comment"></div>\n          <div id="commentList"></div>\n\n          <h3 class="add-comm">Add a comment</h3>\n\n          <div class="inputDiv">\n            <form class="form">\n              <input id="name" type="text" name="user" required placeholder="Your Name"><br>\n              <textarea id="text" type="text" name="text" required placeholder="Your insight"></textarea><br>\n              <div>\n                <button class="submit-btn" type="submit">Comment</button>\n              </div>\n            </form>\n           </div>\n\n        </div>\n\n      </div>\n      `,e.style.display="flex",document.body.style.overflow="hidden",document.querySelector(".close-button").addEventListener("click",(()=>{e.style.display="none",document.body.style.overflow="auto"}));const n=document.querySelector(".comment_count"),o=document.querySelector(".pop_comment"),i=async e=>{const t=await fetch(`${h}?item_id=${e}`),i=await t.json();t.ok&&((async n=>{o.innerHTML="";const e=n.map((n=>` <div class="new_list">\n                                                             <strong> <p> ${n.creation_date} </p> </strong>\n                                                              <div class="comment-initials">\n                                                              <p> ${n.username} </p>\n                                                              <p> ${n.comment} </p>\n                                                              </div>\n                                                            </div>\n        `)).join("");o.innerHTML=e})(i),n.innerHTML=`Comments: ${i.length}`)},a=document.querySelector("#name"),r=document.querySelector("#text"),s=document.querySelector(".form");s.addEventListener("submit",(n=>{n.preventDefault(),(async(n,e)=>{const o=new class{constructor(n,e,t){this.username=n,this.comment=e,this.item_id=t}}(n,e,t.id);await fetch(h,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(o)})})(document.querySelector("#name").value,document.querySelector("#text").value),a.value="",r.value="",i(t.id)})),s.addEventListener("focusout",(()=>{i(t.id)})),window.addEventListener("mouseover",(()=>{i(t.id)})),document.querySelector(".view_more").addEventListener("click",(()=>{i(t.id)}))}))}))})()}},n=>{n(n.s=414)}]);