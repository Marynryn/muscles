import{g as h}from"./background-b6fd06d8.js";const l={list:document.querySelector(".fav-list"),text:document.querySelector(".fav-text")},p=localStorage.getItem("localStorageData"),f=JSON.parse(p);let v=[],m=[],y=!1;l.list.addEventListener("click",C);q();function q(){if(!p)return;const t=Object.keys(f);for(const a of t);const e=Object.values(f);for(const a of e)v.push(a),y=!0}y&&(l.list.innerHTML=w(v),I(),S());function w(t){return t.map(({name:e,bodyPart:a,target:o,time:s,burnedCalories:n,_id:c})=>`
    <li class="fav-item" data-name=${e} id=${c}>
            <div class="fav-box-link">

                <a href="./index.html" class="fav-link">workout</a>

                <button class="fav-btn-delete">
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
                        <span class="fav-text-span">${n} / ${s} min</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label">Body part:
                        <span class="fav-text-span">${a.charAt(0).toUpperCase()+a.slice(1)}</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label text-width-elipses">Target:
                        <span class="fav-text-span">${o.charAt(0).toUpperCase()+o.slice(1)}</span>
                    </p>
                </li>
            </ul>
        </li>
    `).join("")}function C(t){if(!t.target.closest(".fav-btn-delete"))return;const e=t.target.closest(".fav-item");e&&L(e),S()}function L(t){const o=`Exercies-Name: ${t.querySelector(".fav-title-text").textContent.toLowerCase()}`;let s=JSON.parse(localStorage.getItem("localStorageData")||"{}");delete s[o],localStorage.setItem("localStorageData",JSON.stringify(s)),k(t.id)}function k(t){document.getElementById(t).remove()}function S(){l.list.childElementCount===0?l.text.classList.remove("is-hidden"):l.text.classList.add("is-hidden")}function I(){m=document.querySelectorAll(".fav-btn-start"),m.forEach(t=>t.addEventListener("click",J))}const D=document.querySelector("[data-modal-close]"),r=document.querySelector(".modal-section"),E=document.querySelector(".btn-add-to-favorites"),M=document.querySelector(".modal-window"),$=document.querySelector(".name-exercies"),F=document.querySelector(".rating_value"),N=document.querySelector(".target"),O=document.querySelector(".body"),A=document.querySelector(".equipment"),B=document.querySelector(".popular"),W=document.querySelector(".description-of-exercises"),j=document.querySelector(".img-modal"),g=document.body;window.addEventListener("keydown",t=>{t.key==="Escape"&&u()});r.addEventListener("click",t=>{t.target===r&&u()});D.addEventListener("click",u);function u(){r.classList.toggle("is-hidden"),g.style.overflow="visible"}function J(t){t.preventDefault(),E.style.display="none",r.classList.toggle("is-hidden"),g.style.overflow="hidden";async function e(){try{const o={endpoint:`exercises/${t.currentTarget.closest(".fav-item").dataset.id}`};return await h(o)}catch(a){console.log(a)}}e().then(({_id:a,bodyPart:o,description:s,equipment:n,gifUrl:c,name:i,popularity:d,rating:x,target:b})=>{T(a,o,s,n,c,i,d,x,b)})}function T(t,e,a,o,s,n,c,i,d){M.setAttribute("data-id",t),$.textContent=n,F.textContent=Number(i),N.textContent=d,O.textContent=e,A.textContent=o,B.textContent=c,W.textContent=a,j.src=s}const U=document.querySelectorAll(".star"),V=document.querySelector(".rating_value"),_=Math.round(parseFloat(V.textContent));U.forEach((t,e)=>{e<_&&t.classList.add("active-star")});
