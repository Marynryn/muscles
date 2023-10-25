import { getData } from "./api";

const refs = {
    list: document.querySelector('.fav-list'),
    text: document.querySelector('.fav-text'),
}
const LS = localStorage.getItem('localStorageData');
const data = JSON.parse(LS);
 let infoDetails = [];

 let isInfoCards = false;

refs.list.addEventListener('click', onDeleteItem)

getFavoritesItemFromLS()



function getFavoritesItemFromLS() {
    if(!LS){
return;
    }
    
      console.log(data)
    const values = Object.values(data);
    for (const value of values) {
        console.log(value._id);
        infoDetails.push(value);
        isInfoCards = true;
    }
          
        }

if (isInfoCards) {
    refs.list.innerHTML = createFavoritesMarkup(infoDetails);
    checkFavoritesItems()
}




function createFavoritesMarkup(arr){ 
    return arr.map(({name, bodyPart, target, time, burnedCalories, _id})=>`
    <li class="fav-item" data-name=${name} data-id="${_id}" id=${_id}>
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


    async function fetchInfoDetails() {
        try {
          const ID = e.target.closest(".fav-item").dataset.id
          console.log(ID)
          const params = {
            endpoint: `exercises/${ID}`,
          };
          return await getData(params);
        } catch (err) {
          console.log(err)
        }
      };
      fetchInfoDetails().then(({ _id, bodyPart, name, target, burnedCalories, time }) => {
        const dataToSave = {
          _id,
          name,
          burnedCalories,
          bodyPart,
          target,
          time
        };
        const nameOfDetails = `Exercies-Name: ${name}`;
        let localStorageData = JSON.parse(localStorage.getItem('localStorageData') || '{}');
        if (localStorage.getItem(nameOfDetails) !== null) {
          delete localStorageData[nameOfDetails];
          localStorage.removeItem(nameOfDetails, JSON.stringify(dataToSave))
          localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
        }else {
            localStorageData[nameOfEx] = dataToSave;
            localStorage.setItem(nameOfEx, JSON.stringify(dataToSave));
            localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
          }

      });

    const itemToDelete = e.target.closest('.fav-item')

    if (itemToDelete) {
        removeFavotitesItem(itemToDelete);
        
}
checkFavoritesItems()
}

function removeFavotitesItem(itemToDelete){
            const itemId = itemToDelete.id;
            const item = document.getElementById(itemId)
            item.remove()
        }

function checkFavoritesItems() {
    if (refs.list.childElementCount === 0) {
        refs.text.classList.remove('is-hidden')
    }else{
        refs.text.classList.add('is-hidden')
    }
}





