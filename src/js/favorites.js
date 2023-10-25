const refs = {
    list: document.querySelector('.fav-list'),
    text: document.querySelector('.fav-text'),
}

refs.list.addEventListener('click', onDeleteItem)
// getFavoritesItemFromLS()

//  let ids = [];
// function getFavoritesItemFromLS() {
//     const LS = localStorage.getItem('localStorageData');
//     const data = JSON.parse(LS);
//     console.log(data)
//     console.log(data['Exercies-Name: dumbbell burpee'])
//     if (data && data['Exercies-Name: dumbbell burpee']) {
//       const exerciseData = data['Exercies-Name: dumbbell burpee'];
      
  
// //       for (const exerciseName in exerciseData) {
// //         if (exerciseData.hasOwnProperty(exerciseName)) {
        
// //           const exercise = exerciseData[exerciseName];
// //           if (exercise && exercise.id) {
// //             console.log(exercise.id)
// //             ids.push(exercise.id);
// //           }
// //         }
// //       }
// //     }
// //   }

//   console.log(ids)


//   fetch('https://your-energy.b.goit.study/api/exercises?bodypart=waist&page=1&limit=10')
//   .then((res) => res.json())
//   .then(({results}) => {
//       if(true){
//           refs.text.classList.add('is-hidden')
//           refs.list.innerHTML= createFavoritesMarkup(results)

    


function createFavoritesMarkup(arr){ 
    return arr.map(({name,bodyPart,target,time,burnedCalories,_id})=>`
    <li class="fav-item" id='${_id}'>
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
                <span class="fav-title-text">${name.charAt(0).toUpperCase() + name.slice(1)}</span>
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
        return;
    }

    const itemToDelete = e.target.closest('.fav-item')
    if (itemToDelete) {
        removeFavotitesItem(itemToDelete)
    }
    checkItem()
}


function checkFavoritesItems() {
    if (refs.list.childElementCount === 0) {
        refs.text.classList.remove('is-hidden')
    }
}

function removeFavotitesItem(itemToDelete){
        const itemId = itemToDelete.id;
        const item = document.getElementById(itemId)
        item.remove()
}

