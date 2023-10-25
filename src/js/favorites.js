const refs = {
    list: document.querySelector('.fav-list'),
    text: document.querySelector('.fav-text'),
}
const LS = localStorage.getItem('dataToSave');
    const data = JSON.parse(LS);
    // let localStorageData = JSON.parse(localStorage.getItem('localStorageData') || '{}');
 let infoDetails = [];
refs.list.addEventListener('click', onDeleteItem)
getFavoritesItemFromLS()


function getFavoritesItemFromLS() {
    
      console.log(data)
    const values = Object.values(data);
    for (const value of values) {
        console.log(value);
        
        infoDetails.push(value);

    }
          
        }
        console.log(infoDetails);
        refs.list.innerHTML = createFavoritesMarkup(infoDetails);



function createFavoritesMarkup(arr){ 
    return arr.map(({name,bodyPart,target,time,burnedCalories,_id})=>`
    <li class="fav-item" data-name=${name} data-id="${_id}" id=${_id}>
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
    const titleDetails = itemToDelete.dataset.name;

    console.log(titleDetails)
    if (itemToDelete) {
        removeFavotitesItem(itemToDelete);
        
}
    // checkItem()
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
const btnDelit = document.querySelector(".fav-btn-delete")
btnDelit.addEventListener("click", function(event){
    
    if (event.target.classList.contains('fav-btn-delete')) {
        console.log("ryjgrf pageYOffset;fnf")
        var cardElement = event.target.parentElement;
        var idToDelete = cardElement.getAttribute('data-id');
console.log(idToDelete)
console.log(idToDelete)
        // Получите объекты из Local Storage
        var storedObjectsJSON = localStorage.getItem('dataToSave');
        var storedObjects = storedObjectsJSON ? JSON.parse(storedObjectsJSON) : [];

        // Найдите индекс объекта, который нужно удалить
        var indexToDelete = storedObjects.findIndex(function(obj) {
            return obj._id === idToDelete;
        });

        if (indexToDelete !== -1) {
            
            storedObjects.splice(indexToDelete, 1);

            localStorage.setItem('dataToSave', JSON.stringify(storedObjects));

            
            cardElement.remove();
            alert('Объект с ID ' + idToDelete + ' удален из LocalStorage.');
        } else {
            alert('Объект с ID ' + idToDelete + ' не найден в LocalStorage.');
        }
    }

})

