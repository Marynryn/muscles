import{g as S}from"./background-8731d6c9.js";const n={list:document.querySelector(".fav-list"),text:document.querySelector(".fav-text")},p=localStorage.getItem("localStorageData"),x=JSON.parse(p);let v=[],m=!1;n.list.addEventListener("click",D);I();function I(){if(!p)return;const t=Object.values(x);for(const e of t)v.push(e),m=!0}m&&(n.list.innerHTML=h(v),d());function h(t){return t.map(({name:e,bodyPart:s,target:a,time:l,burnedCalories:o,_id:i})=>`
    <li class="fav-item" data-name=${e} data-id="${i}" id=${i}>
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
                        <span class="fav-text-span">${o} / ${l} min</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label">Body part:
                        <span class="fav-text-span">${s.charAt(0).toUpperCase()+s.slice(1)}</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label text-width-elipses">Target:
                        <span class="fav-text-span">${a.charAt(0).toUpperCase()+a.slice(1)}</span>
                    </p>
                </li>
            </ul>
        </li>
    `).join("")}function D(t){if(!t.target.closest(".fav-btn-delete"))return;async function e(){try{const l={endpoint:`exercises/${t.target.closest(".fav-item").dataset.id}`};return await S(l)}catch(a){console.log(a)}}e().then(({_id:a,bodyPart:l,name:o,target:i,burnedCalories:u,time:g})=>{const r={_id:a,name:o,burnedCalories:u,bodyPart:l,target:i,time:g},f=`Exercies-Name: ${o}`;let c=JSON.parse(localStorage.getItem("localStorageData")||"{}");localStorage.getItem(f)!==null?(delete c[f],localStorage.removeItem(f,JSON.stringify(r)),localStorage.setItem("localStorageData",JSON.stringify(c))):(c[nameOfEx]=r,localStorage.setItem(nameOfEx,JSON.stringify(r)),localStorage.setItem("localStorageData",JSON.stringify(c)))});const s=t.target.closest(".fav-item");s&&b(s),d()}function b(t){const e=t.id;document.getElementById(e).remove()}function d(){n.list.childElementCount===0?n.text.classList.remove("is-hidden"):n.text.classList.add("is-hidden")}
