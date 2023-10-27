import{g}from"./background-4c853c70.js";const u={list:document.querySelector(".fav-list"),text:document.querySelector(".fav-text")},S=localStorage.getItem("localStorageData"),b=JSON.parse(S);let y=[],v=[],x=!1;u.list.addEventListener("click",D);q();function q(){if(!S)return;const t=Object.values(b);for(const e of t)y.push(e),x=!0}x&&(u.list.innerHTML=w(y),E(),h());function w(t){return t.map(({name:e,bodyPart:a,target:o,time:s,burnedCalories:n,_id:l})=>`
    <li class="fav-item" data-name=${e} data-id="${l}" id=${l}>
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
    `).join("")}function D(t){if(!t.target.closest(".fav-btn-delete"))return;async function e(){try{const s={endpoint:`exercises/${t.target.closest(".fav-item").dataset.id}`};return await g(s)}catch(o){console.log(o)}}e().then(({_id:o,bodyPart:s,name:n,target:l,burnedCalories:c,time:r})=>{const i={_id:o,name:n,burnedCalories:c,bodyPart:s,target:l,time:r},d=`Exercies-Name: ${n}`;let f=JSON.parse(localStorage.getItem("localStorageData")||"{}");localStorage.getItem(d)!==null?(delete f[d],localStorage.removeItem(d,JSON.stringify(i)),localStorage.setItem("localStorageData",JSON.stringify(f))):(f[nameOfEx]=i,localStorage.setItem(nameOfEx,JSON.stringify(i)),localStorage.setItem("localStorageData",JSON.stringify(f)))});const a=t.target.closest(".fav-item");a&&C(a),h()}function C(t){const e=t.id;document.getElementById(e).remove()}function h(){u.list.childElementCount===0?u.text.classList.remove("is-hidden"):u.text.classList.add("is-hidden")}function E(){v=document.querySelectorAll(".fav-btn-start"),v.forEach(t=>t.addEventListener("click",W))}const L=document.querySelector("[data-modal-close]"),m=document.querySelector(".modal-section"),k=document.querySelector(".btn-add-to-favorites"),O=document.querySelector(".modal-window"),$=document.querySelector(".name-exercies"),M=document.querySelector(".rating_value"),N=document.querySelector(".target"),F=document.querySelector(".body"),A=document.querySelector(".equipment"),B=document.querySelector(".popular"),J=document.querySelector(".description-of-exercises"),T=document.querySelector(".img-modal"),I=document.body;window.addEventListener("keydown",t=>{t.key==="Escape"&&p()});m.addEventListener("click",t=>{t.target===m&&p()});L.addEventListener("click",p);function p(){m.classList.toggle("is-hidden"),I.style.overflow="visible"}function W(t){t.preventDefault(),k.style.display="none",m.classList.toggle("is-hidden"),I.style.overflow="hidden";async function e(){try{const o={endpoint:`exercises/${t.currentTarget.closest(".fav-item").dataset.id}`};return await g(o)}catch(a){console.log(a)}}e().then(({_id:a,bodyPart:o,description:s,equipment:n,gifUrl:l,name:c,popularity:r,rating:i,target:d})=>{U(a,o,s,n,l,c,r,i,d)})}function U(t,e,a,o,s,n,l,c,r){O.setAttribute("data-id",t),$.textContent=n,M.textContent=Number(c),N.textContent=r,F.textContent=e,A.textContent=o,B.textContent=l,J.textContent=a,T.src=s}const j=document.querySelectorAll(".star"),V=document.querySelector(".rating_value"),H=Math.round(parseFloat(V.textContent));j.forEach((t,e)=>{e<H&&t.classList.add("active-star")});
