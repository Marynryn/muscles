import"./background-36665fce.js";const s={list:document.querySelector(".fav-list"),text:document.querySelector(".fav-text")};s.list.addEventListener("click",r);fetch("https://your-energy.b.goit.study/api/exercises?bodypart=waist&page=1&limit=10").then(t=>t.json()).then(({results:t})=>{s.text.classList.add("is-hidden"),s.list.innerHTML=o(t)});function o(t){return t.map(({name:e,bodyPart:i,target:a,time:n,burnedCalories:l,_id:c})=>`
    <li class="fav-item" id='${c}'>
            <div class="fav-box-link">

                <a href="./index.html" class="fav-link">workout</a>

                <button class="fav-btn-delete">
                <svg  width="16" height="16">
                    <use class="fav-icon-trach" href="../img/icons.svg#icon-trash"></use>
                </svg>
                </button>
                
            </div>
            <button type="button" class="fav-btn"> Start
                <svg class="fav-icon-arrow" width="16" height="16">
                    <use  href="../img/icons.svg#icon-arrow"></use>
                </svg>
            </button>
            <h3 class="fav-title">
                <svg class="fav-icon-running" width="24" height="24">
                    <use href="../img/icons.svg#icon-running-stick" y="4" height="16" ></use>
                </svg>
                <span>${e.charAt(0).toUpperCase()+e.slice(1)}</span>
            </h3>
            <ul class="fav-list-text">
                <li class="fav-item-text">
                    <p class="fav-label">Burned calories:
                        <span class="fav-text-span">${l} / ${n} min</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label">Body part:
                        <span class="fav-text-span">${i.charAt(0).toUpperCase()+i.slice(1)}</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label text-width-elipses">Target:
                        <span class="fav-text-span">${a.charAt(0).toUpperCase()+a.slice(1)}</span>
                    </p>
                </li>
            </ul>
        </li>
    `).join("")}function r(t){if(!t.target.closest(".fav-btn-delete"))return;const e=t.target.closest(".fav-item");if(e){const i=e.id;document.getElementById(i).remove()}v()}function v(){s.list.childElementCount===0&&s.text.classList.remove("is-hidden")}
