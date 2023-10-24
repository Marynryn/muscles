const refs = {
    list: document.querySelector('.fav-list'),
    text: document.querySelector('.fav-text'),
}

refs.list.addEventListener('click', onDeleteItem)


fetch('https://your-energy.b.goit.study/api/exercises?bodypart=waist&page=1&limit=10')
.then((res) => res.json())
.then(({results}) => {
    if(true){
        refs.text.classList.add('is-hidden')
        refs.list.innerHTML= createFavoritesMarkup(results)
    }
}) 

function createFavoritesMarkup(arr){ 
    return arr.map(({name,bodyPart,target,time,burnedCalories,_id})=>`
    <li class="fav-item" id='${_id}'>
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
                <span>${name.charAt(0).toUpperCase() + name.slice(1)}</span>
            </h3>
            <ul class="fav-list-text">
                <li class="fav-item-text">
                    <p class="fav-label">Burned calories:
                        <span class="fav-text-span">${burnedCalories} / ${time} min</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label">Body part:
                        <span class="fav-text-span">${bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label text-width-elipses">Target:
                        <span class="fav-text-span">${target.charAt(0).toUpperCase() + target.slice(1)}</span>
                    </p>
                </li>
            </ul>
        </li>
    `).join('')
}

function onDeleteItem(e){
    if (!e.target.closest('.fav-btn-delete')) {
        // console.log(123)
        return;
    }

    const itemToDelete = e.target.closest('.fav-item')
    if (itemToDelete) {
        const itemId = itemToDelete.id;
        const item = document.getElementById(itemId)
        item.remove()
    }
    checkItem()
}


function checkItem() {
    if (refs.list.childElementCount === 0) {
        refs.text.classList.remove('is-hidden')
    }
}

