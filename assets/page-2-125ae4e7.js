import{g as w}from"./background-0632ee01.js";const l={list:document.querySelector(".fav-list"),text:document.querySelector(".fav-text")},p=localStorage.getItem("localStorageData"),f=JSON.parse(p);let v=[],m=[],S=!1;l.list.addEventListener("click",I);L();function L(){if(!p)return;const t=Object.keys(f);for(const o of t);const e=Object.values(f);for(const o of e)v.push(o),S=!0}S&&(l.list.innerHTML=C(v),E(),y());function C(t){return t.map(({name:e,bodyPart:o,target:a,time:n,burnedCalories:s,_id:r})=>`
    <li class="fav-item" data-name=${e}  data-id="${r}">
            <div class="fav-box-link">

                <a href="./index.html" class="fav-link">workout</a>

                <button type="button" class="fav-btn-delete">
                <span class="fav-icon-delete"></span>
                </button>
                
            </div>
            <button type="button" class="fav-btn-start"> Start
                <span class="fav-icon-arrow"></span>
            </button>
            <h3 class="fav-title">
                <span class="fav-icon-running"></span>
                <span class="fav-title-text">${e.charAt(0).toUpperCase()+e.slice(1)}</span>
            </h3>
            <ul class="fav-list-text">
                <li class="fav-item-text">
                    <p class="fav-label">Burned calories:
                        <span class="fav-text-span">${s} / ${n} min</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label">Body part:
                        <span class="fav-text-span">${o.charAt(0).toUpperCase()+o.slice(1)}</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label text-width-elipses">Target:
                        <span class="fav-text-span">${a.charAt(0).toUpperCase()+a.slice(1)}</span>
                    </p>
                </li>
            </ul>
        </li>
    `).join("")}function I(t){const e=t.target.closest(".fav-btn-delete");if(!e)return;const o=e.closest(".fav-item");if(!o){console.error("List item not found for delete button:",e);return}const a=o.getAttribute("data-id");if(!a){console.error("Invalid itemToDelete:",o);return}k(a),y()}function k(t){const e=document.querySelector(`[data-id="${t}"]`);if(!e){console.error("List item not found with ID:",t);return}const o=e.querySelector(".fav-title-text");if(!o){console.error("Title span not found inside listItem:",e);return}const n=`Exercies-Name: ${o.textContent.toLowerCase()}`;let s=JSON.parse(localStorage.getItem("localStorageData")||"{}");delete s[n],localStorage.setItem("localStorageData",JSON.stringify(s)),D(t)}function D(t){const e=document.querySelector(`[data-id="${t}"]`);if(!e){console.error("List item not found with ID:",t);return}e.remove()}function y(){l.list.childElementCount===0?l.text.classList.remove("is-hidden"):l.text.classList.add("is-hidden")}function E(){m=document.querySelectorAll(".fav-btn-start"),m.forEach(t=>t.addEventListener("click",J))}const M=document.querySelector("[data-modal-close]"),c=document.querySelector(".modal-section");document.querySelector(".btn-add-to-favorites");const $=document.querySelector(".modal-window"),A=document.querySelector(".name-exercies"),N=document.querySelector(".rating_value"),O=document.querySelector(".target"),B=document.querySelector(".body"),F=document.querySelector(".equipment"),T=document.querySelector(".popular"),W=document.querySelector(".description-of-exercises"),j=document.querySelector(".img-modal"),g=document.body;window.addEventListener("keydown",t=>{t.key==="Escape"&&u()});c.addEventListener("click",t=>{t.target===c&&u()});M.addEventListener("click",u);function u(){c.classList.toggle("is-hidden"),g.style.overflow="visible"}function J(t){t.preventDefault();const e=t.currentTarget.closest(".fav-item");if(!e){console.error("Could not find parent element with class .fav-item");return}const o=e.dataset.id;if(!o){console.error("Missing data-id attribute on .fav-item element");return}c.classList.toggle("is-hidden"),g.style.overflow="hidden";async function a(){try{const n={endpoint:`exercises/${o}`};return await w(n)}catch(n){console.log(n)}}a().then(({_id:n,bodyPart:s,description:r,equipment:i,gifUrl:d,name:x,popularity:b,rating:h,target:q})=>{U(n,s,r,i,d,x,b,h,q)})}function U(t,e,o,a,n,s,r,i,d){$.setAttribute("data-id",t),A.textContent=s,N.textContent=Number(i),O.textContent=d,B.textContent=e,F.textContent=a,T.textContent=r,W.textContent=o,j.src=n}const V=document.querySelectorAll(".star"),_=document.querySelector(".rating_value"),H=Math.round(parseFloat(_.textContent));V.forEach((t,e)=>{e<H&&t.classList.add("active-star")});
