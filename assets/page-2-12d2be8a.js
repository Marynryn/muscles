import"./background-cdcefff0.js";const r={list:document.querySelector(".fav-list"),text:document.querySelector(".fav-text")},f=localStorage.getItem("dataToSave"),i=JSON.parse(f);let c=[];r.list.addEventListener("click",u);v();function v(){console.log(i);const a=Object.values(i);for(const t of a)console.log(t),c.push(t)}console.log(c);r.list.innerHTML=p(c);function p(a){return a.map(({name:t,bodyPart:e,target:s,time:l,burnedCalories:n,_id:o})=>`
    <li class="fav-item" data-name=${t} data-id="${o}" id=${o}>
            <div class="fav-box-link">

                <a href="./index.html" class="fav-link">workout</a>

                <button class="fav-btn-delete">
                <span class="fav-icon-delete"></span>
                </button>
                
            </div>
            <button type="button" class="fav-btn"> Start
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
                        <span class="fav-text-span">${e.charAt(0).toUpperCase()+e.slice(1)}</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label text-width-elipses">Target:
                        <span class="fav-text-span">${s.charAt(0).toUpperCase()+s.slice(1)}</span>
                    </p>
                </li>
            </ul>
        </li>
    `).join("")}function u(a){if(!a.target.closest(".fav-btn-delete"))return;const t=a.target.closest(".fav-item"),e=t.dataset.name;console.log(e),t&&m(t)}function m(a){const t=a.id;document.getElementById(t).remove()}const d=document.querySelector(".fav-btn-delete");d.addEventListener("click",function(a){if(a.target.classList.contains("fav-btn-delete")){console.log("ryjgrf pageYOffset;fnf");var t=a.target.parentElement,e=t.getAttribute("data-id");console.log(e),console.log(e);var s=localStorage.getItem("dataToSave"),l=s?JSON.parse(s):[],n=l.findIndex(function(o){return o._id===e});n!==-1?(l.splice(n,1),localStorage.setItem("dataToSave",JSON.stringify(l)),t.remove(),alert("Объект с ID "+e+" удален из LocalStorage.")):alert("Объект с ID "+e+" не найден в LocalStorage.")}});
