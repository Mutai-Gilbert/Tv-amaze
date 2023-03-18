import"./style.css";import api from"./modules/api.js";import addLike from"./modules/like.js";import Comment from"./modules/comments.js";const displayMovies=async()=>{const e=document.getElementById("list-of-shows"),t=document.querySelector(".popup-comments"),n=document.querySelector(".count-movies");e.innerHTML="";const o=await fetch(api.moviesApi),i=await o.json();if(!o.ok)return void(e.innerText="Server Down");const s=await fetch(`${api.likesUrl}`),a=await s.json();i.forEach((e=>{a.forEach((t=>{e.id===t.item_id&&(e.likes=t.likes)}))}));const c=document.createElement("span");c.innerHTML=`(${i.length})`,n.append(c),i.forEach((n=>{const o=document.createElement("section");o.classList.add("show_items"),o.setAttribute("id",n.id);const i=document.createElement("div");i.classList.add("show_image");const s=document.createElement("div");s.innerHTML=` <img class="movie_image" src="${n.image.medium}" alt="${n.name}">`;const a=document.createElement("div");a.classList.add("actions_name");const c=document.createElement("p");c.innerHTML=`${n.name}`,c.classList.add("movie");const d=n.likes||0,m=document.createElement("div");m.classList.add("icon");const r=document.createElement("span");r.classList.add("clickable");const l=document.createElement("i");l.innerHTML='<i class="fa-solid fa-heart"></i>';const u=document.createElement("p");u.innerText=`${d} Likes`,l.addEventListener("click",(async()=>{await addLike(n.id)}));const p=document.createElement("div");p.classList.add("comment-button");const v=document.createElement("button");v.innerText="Comments",v.classList.add("button"),p.append(v),m.append(r,l,u),a.append(c,m),i.append(s),o.append(i,a,p),e.append(o),v.addEventListener("click",(()=>{t.innerHTML=`\n        <div class="popIt">\n\n        <div class="pop">\n\n          <span class="close-button">&times;</span>\n\n            <div class="popup_image">\n            <img class="pop_image" src="${n.image.medium}" alt="asdf">\n            </div>\n\n               <p class="pop_meal">Name: ${n.name}</p>\n               <p>Ratings: ${n.rating.average}</p>\n               <p class="instructions">Airdate: ${n.airdate}</p>\n               <p>Runtime: ${n.runtime}</p>\n\n                 <div class="comment_count"></div>\n\n          <button class="view_more">Refresh Comments</button>\n         \n          <div class="pop_comment"></div>\n          <div id="commentList"></div>\n\n          <h3 class="add-comm">Add a comment</h3>\n\n          <div class="inputDiv">\n            <form class="form">\n              <input id="name" type="text" name="user" required placeholder="Your Name"><br>\n              <textarea id="text" type="text" name="text" required placeholder="Your insight"></textarea><br>\n              <div>\n                <button class="submit-btn" type="submit">Comment</button>\n              </div>\n            </form>\n           </div>\n\n        </div>\n\n      </div>\n      `,t.style.display="flex",document.body.style.overflow="hidden",document.querySelector(".close-button").addEventListener("click",(()=>{t.style.display="none",document.body.style.overflow="auto"}));const e=document.querySelector(".comment_count"),o=document.querySelector(".pop_comment"),i=async t=>{const n=await fetch(`${api.commentUrl}?item_id=${t}`),i=await n.json();n.ok&&((async e=>{o.innerHTML="";const t=e.map((e=>` <div class="new_list">\n                                                             <strong> <p> ${e.creation_date} </p> </strong>\n                                                              <div class="comment-initials">\n                                                              <p> ${e.username} </p>\n                                                              <p> ${e.comment} </p>\n                                                              </div>\n                                                            </div>\n        `)).join("");o.innerHTML=t})(i),e.innerHTML=`Comments: ${i.length}`)},s=document.querySelector("#name"),a=document.querySelector("#text"),c=document.querySelector(".form");c.addEventListener("submit",(e=>{e.preventDefault(),(async(e,t)=>{const o=new Comment(e,t,n.id);await fetch(api.commentUrl,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(o)})})(document.querySelector("#name").value,document.querySelector("#text").value),s.value="",a.value="",i(n.id)})),c.addEventListener("focusout",(()=>{i(n.id)})),window.addEventListener("mouseover",(()=>{i(n.id)})),document.querySelector(".view_more").addEventListener("click",(()=>{i(n.id)}))}))}))};export default displayMovies();