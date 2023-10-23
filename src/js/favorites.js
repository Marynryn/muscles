const refs = {
    list: document.querySelector('.fav-list'),
    text: document.querySelector('.fav-text'),
}

refs.list.addEventListener('click', onDeleteItem)
refs.list.addEventListener('click', onOpenModal)

fetch('https://your-energy.b.goit.study/api/exercises?bodypart=waist&page=1&limit=10')
.then((res) => res.json())
.then(({results}) => {
    if(true){
        refs.text.classList.add('is-hidden')
        refs.list.innerHTML= createFavoritesMarkup(results)
    }
}) 


// fetch(
//     'https://your-energy.b.goit.study/api/filters?filter=Muscles&page=1&limit=12'
//   )
//     .then(res => res.json())
//     .then(
//       ({ results }) =>
//         (refs.list.innerHTML = createMarkupCardPhoto(results))
//     );

// function createMarkupCardPhoto(arr) {
//     return arr
//       .map(
//         ({ filter, name, imgURL }) =>
//           `<li class="js-card-photo-item"   style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${imgURL});">
//              <div class="js-card-text">
//               <h3 class="js-title-card-photo">${name}</h3>
//               <p class ="js-text-card-photo">${filter}</p>
//              </div>
//           </li>`
//       )
//       .join('');
//   }

function createFavoritesMarkup(arr){ 
    return arr.map(({name,bodyPart,target,time,burnedCalories,_id})=>`
    <li class="fav-item" id='${_id}'>
            <div class="fav-box-link">
                <a href="./index.html" class="fav-link">WORKOUT</a>
                <button class="fav-btn-delete">
                <svg  width="16" height="16">
                    <use class="fav-icon-trach" href="./img/icons.svg#icon-trash"></use>
                </svg>
                </button>
                
            </div>
            <button type="button" class="fav-btn"> Start
                <svg class="fav-icon-arrow" width="16" height="16">
                    <use  href="./img/icons.svg#icon-arrow"></use>
                </svg>
            </button>
            <h3 class="fav-title">
                <svg class="fav-icon-running" width="24" height="24">
                    <use href="./img/icons.svg#icon-running-stick" y="4" height="16" ></use>
                </svg>
                ${name.charAt(0).toUpperCase() + name.slice(1)}
            </h3>
            <ul class="fav-list-text">
                <li class="fav-item-text">
                    <p class="fav-label">Burned calories:
                        <span class="fav-text-span">${burnedCalories} / ${time}</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label">Body part:
                        <span class="fav-text-span">${bodyPart}</span>
                    </p>
                </li>
                <li class="fav-item-text">
                    <p class="fav-label">Target:
                        <span class="fav-text-span">${target}</span>
                    </p>
                </li>
            </ul>
        </li>
    `).join('')
}

function onDeleteItem(e){
    if (!e.target.classList.contains('fav-icon-trach')) {
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

function onOpenModal(){

}

1440>856