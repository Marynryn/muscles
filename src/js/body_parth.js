const refs = {
  exercisesList: document.querySelector('.exercises-list'),
  //   btnBodyParts: document.querySelector('.js-btn-body-parts'),
  //   btnMuscles: document.querySelector('.js-btn-muscles'),
  //   btnEquipment: document.querySelector('.js-btn-equipment'),

  inputSearch: document.querySelector('#exercises-input'),
  listPhotoCard: document.querySelector('.js-list-cards-photo'),
  listInfoCard: document.querySelector('.js-list-cards-info'),

  mainTitle: document.querySelector('.exercises-title'),
};

refs.exercisesList.addEventListener('click', onBtnClick);

function onBtnClick(evt) {
  if (!evt.target.tagName === 'BUTTON') {
    return;
  }

  //   // ! Запит
  //   fetch(
  //     'https://your-energy.b.goit.study/api/exercises?bodypart=waist&page=1&limit=10'
  //   )
  //     .then(res => res.json())
  //     .then(
  //       ({ results }) =>
  //         (refs.listInfoCard.innerHTML = createMarkupCardInfo(results))
  //     );

  // Запит 2
  fetch(
    'https://your-energy.b.goit.study/api/filters?filter=Muscles&page=1&limit=12'
  )
    .then(res => res.json())
    .then(
      ({ results }) =>
        (refs.listPhotoCard.innerHTML = createMarkupCardPhoto(results))
    );
}

refs.listInfoCard.addEventListener('click', onItemClick);

// function onItemClick(evt) {
//   if (evt.target.tagName === 'LI') {
//     fetch(
//       'https://your-energy.b.goit.study/api/exercises?bodypart=waist&page=1&limit=10'
//     )
//       .then(res => res.json())
//       .then(({ results }) => {
//         refs.listPhotoCard.innerHTML = '';
//         refs.listInfoCard.innerHTML = createMarkupCardInfo(results);
//       });
//   }
// }
function onItemClick(evt) {
  if (evt.target.tagName === 'LI') {
    return;
  }
  fetch(
    'https://your-energy.b.goit.study/api/exercises?bodypart=waist&page=1&limit=10'
  )
    .then(res => res.json())
    .then(({ results }) => {
      refs.listPhotoCard.innerHTML = '';
      refs.listInfoCard.innerHTML = createMarkupCardInfo(results);
    });
}

function createMarkupCardInfo(arr) {
  return arr
    .map(
      ({ _id, bodyPart, name, burnedCalories, time, rating, target }) => `
      
<li class="card-info-item" data-id="${_id}">
  <div class="div-icon-workout">
    <div class="div-workout-rating">
      <a class="link-workout">workout</a>
      <p class="js-text">
        ${rating}
        <svg class="icon-star" width="18" height="18">
          <use href="../img/icons.svg#icon-star"></use>
        </svg>
      </p>
    </div>
    <button type="button" class="btn-start">
     
      Start
      <svg class="icon-arrow" width="16" height="16">
        <use href="../img/icons.svg#icon-arrow"></use>
      </svg>
    </button>
  </div>
  <h3 class="fav-title">
    <svg class="fav-icon-running" width="24" height="24">
      <use href="../img/icons.svg#icon-running-stick" height="16" y="4"></use>
    </svg>
    ${name}
  </h3>

  <ul class="js-fav-list">
    <li class="fav-list-text">
      <p class="fav-label">
        Burned calories:
        <span class="fav-text-span">
          
          ${burnedCalories}/${time}min
        </span>
      </p>
    </li>
    <li class="fav-list-text">
      <p class="fav-label">
        Body part: <span class="fav-text-span"> ${bodyPart}</span>
      </p>
    </li>
    <li class="fav-list-text">
      <p class="fav-label">
        Target: <span class="fav-text-span"> ${target}</span>
      </p>
    </li>
  </ul>
 </li> `
    )
    .join('');
}

function createMarkupCardPhoto(arr) {
  return arr
    .map(
      ({ filter, name, imgURL }) =>
        `<li class="js-card-photo-item"   style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${imgURL});">
             <div class="js-card-text">
              <button type="button" class="js-title-card-photo" style=" border: none;
                                                                        background-color: transparent;">${
                                                                          name
                                                                            .charAt(
                                                                              0
                                                                            )
                                                                            .toUpperCase() +
                                                                          name.slice(
                                                                            1
                                                                          )
                                                                        }
             </button>
              <p class ="js-text-card-photo">${filter}</p>
             </div>
          </li>`
    )
    .join('');
}
// 2 Функції розмітки
// function createMarkupCardPhoto(arr) {
//   return arr
//     .map(
//       ({ filter, name, imgURL }) =>
//         `<li class="js-card-photo-item" >
//           <img src="${imgURL}" alt="${
//           name.charAt(0).toUpperCase() + name.slice(1)
//         }" width="335" height="225" class="js-card-photo" style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${imgURL})">
//            <div class="js-card-text">
//             <h3 class="js-title-card-photo">${
//               name.charAt(0).toUpperCase() + name.slice(1)
//             }</h3>
//             <p class ="js-text-card-photo">${filter}</p>
//            </div>
//         </li>`
//     )
//     .join('');
// }
