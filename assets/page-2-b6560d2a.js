import{g as x}from"./background-e317a2fb.js";const o={list:document.querySelector(".fav-list"),text:document.querySelector(".fav-text")},v=localStorage.getItem("localStorageData"),p=JSON.parse(v);let m=[],d=!1;o.list.addEventListener("click",b);h();function h(){if(!v)return;console.log(p);const e=Object.values(p);for(const t of e)console.log(t._id),m.push(t),d=!0}d&&(o.list.innerHTML=I(m),u());function I(e){return e.map(({name:t,bodyPart:s,target:a,time:l,burnedCalories:n,_id:i})=>`
    <li class="fav-item" data-name=${t} data-id="${i}" id=${i}>
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
                <span class="fav-title-text">${t.charAt(0).toUpperCase()+t.slice(1)}</span>
            </h3>
            <ul class="fav-list-text">
                <li class="fav-item-text">
                    <p class="fav-label">Burned calories:
                        <span class="fav-text-span">${n} / ${l} min</span>
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
    `).join("")}function b(e){if(!e.target.closest(".fav-btn-delete"))return;async function t(){try{const a=e.target.closest(".fav-item").dataset.id;console.log(a);const l={endpoint:`exercises/${a}`};return await x(l)}catch(a){console.log(a)}}t().then(({_id:a,bodyPart:l,name:n,target:i,burnedCalories:g,time:S})=>{const r={_id:a,name:n,burnedCalories:g,bodyPart:l,target:i,time:S},f=`Exercies-Name: ${n}`;let c=JSON.parse(localStorage.getItem("localStorageData")||"{}");localStorage.getItem(f)!==null?(delete c[f],localStorage.removeItem(f,JSON.stringify(r)),localStorage.setItem("localStorageData",JSON.stringify(c))):(c[nameOfEx]=r,localStorage.setItem(nameOfEx,JSON.stringify(r)),localStorage.setItem("localStorageData",JSON.stringify(c)))});const s=e.target.closest(".fav-item");s&&D(s),u()}function D(e){const t=e.id;document.getElementById(t).remove()}function u(){o.list.childElementCount===0?o.text.classList.remove("is-hidden"):o.text.classList.add("is-hidden")}
