
import { getData, patchData, postData } from './api.js';
import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const refs = {
  exercisesList: document.querySelector('.exercises-list'),
  exercisesForm: document.querySelector('.exercises-form'),
  listPhotoCard: document.querySelector('.js-list-cards-photo'),
  listInfoCard: document.querySelector('.js-list-cards-information'),
  mainTitle: document.querySelector('.exercises-span-title'),
  spanTitle: document.querySelector('.exercises-part-title'),
  divInputButton: document.querySelector('.input-button'),
  startCardsPhoto: document.querySelector('.js-btn-body-parts')
};

refs.exercisesList.addEventListener('click', onBtnClick);
let lastSelectedSectionBtn = undefined;
let lastSelectedCardTitle = undefined;
let maxCardOnScreen = 12;
let isMainScreen = true;

startApi(1,"Body parts").then(
  ({ results, page, perPage, totalPages }) => {
    //   console.log(page, perPage, totalPages);
    lastSelectedSectionBtn= refs.startCardsPhoto
    lastSelectedSectionBtn.classList.add('current')
    makePagination(
      Number(page),
      Number(perPage),
      totalPages,
      'Body parts'
    );
    
      refs.listInfoCard.innerHTML= ''
    refs.listPhotoCard.innerHTML = createMarkupCardPhoto(results);
  }
);

function onBtnClick(evt) {
  if (evt.target.tagName !== 'BUTTON') {
    return;
  }
isMainScreen = true;
  refs.mainTitle.textContent = 'Exercises';
  refs.spanTitle.textContent = '';
  refs.exercisesForm.style.display = 'none';

  if (lastSelectedSectionBtn !== undefined) {
    lastSelectedSectionBtn.classList.remove('current');
  }

  lastSelectedSectionBtn = evt.target;
  evt.target.classList.add('current');

  //   console.log(lastSelectedSectionBtn, 'CONSOLE');

  startApi(1, evt.target.textContent).then(
    ({ results, page, perPage, totalPages }) => {
      //   console.log(page, perPage, totalPages);

      makePagination(
        Number(page),
        Number(perPage),
        totalPages,
        evt.target.textContent
      );
        refs.listInfoCard.innerHTML= ''
      refs.listPhotoCard.innerHTML = createMarkupCardPhoto(results);
    }
  );

  refs.listPhotoCard.addEventListener('click', onItemClick);
}

let width =
  window.innerWidth 
  document.documentElement.clientWidth 
  document.body.clientWidth;


if (width === 375) {
  maxCardOnScreen = 9;
  //   console.log(maxCardOnScreen, 'lol');
}
window.addEventListener('resize', onResize);

function onResize() {
  if (width === 375) {
    maxCardOnScreen = 9;
    console.log(maxCardOnScreen, 'lol');
  }
  console.log('Window width:', width);
}

async function startApi(page, text) {
  try {
    const params = {
      endpoint: 'filters',
      page: page,
      limit: maxCardOnScreen,
      filter: text,
    };
    return await getData(params);
  } catch (e) {
    console.log(e);
  }
}

function makePagination(page, perPage, totalPages, text) {
  const pagination = new Pagination('pagination', {
    totalItems: perPage * totalPages, // Total number of items
    itemsPerPage: perPage, // Items per page
    visiblePages: 3, // Visible pages in the pagination bar
    page: page, // Current page
  });
  //   console.log(results);

  pagination.on('afterMove', function (event) {
    if (!isMainScreen) {
      fetchExercisesDetails(
        lastSelectedSectionBtn.dataset.id,
        lastSelectedCardTitle,
        pagination.getCurrentPage()
      ).then(({ results, page, perPage, totalPages }) => {
        console.log(page, perPage, totalPages);

        makePagination(Number(page), Number(perPage), totalPages, text);
        refs.listInfoCard.innerHTML = createMarkupCardInfo(results);
        console.log('helllllo');
      });
      return;
    }
    console.log('Page changed to:', event.page);

    // Do something when the page changes
    startApi(event.page, text).then(
      ({ results, page, perPage, totalPages }) => {
        console.log(page, perPage, totalPages);

        makePagination(Number(page), Number(perPage), totalPages, text);

refs.listPhotoCard.innerHTML = createMarkupCardPhoto(results);
      }
    );
  });
}

// ! на картинку клік - перекидає на карточку з інформацією

refs.listPhotoCard.addEventListener('click', onItemClick);

function onItemClick(evt) {
  if (evt.target.tagName === 'UL') {
    console.log(evt.target.tagName);
    return;
  }

  refs.exercisesForm.style.display = 'block';
  isMainScreen = false;

  refs.mainTitle.textContent = refs.mainTitle.textContent.replace(' / ', '');
  const sectionKey = lastSelectedSectionBtn.dataset.id;

  const sectionValue = evt.target.closest('.js-card-photo-item').dataset.name;

  lastSelectedCardTitle = sectionValue;

  refs.mainTitle.textContent += ' / ';
  refs.spanTitle.textContent = `${sectionValue}`;

  //   async function startApi(key, value) {
  //     try {
  //       let params = {
  //         page: 1,
  //         limit: 12,
  //         endpoint: 'exercises',
  //         // bodypart: 'back',
  //         // muscles: 'lats',
  //         // equipment: 'barbell',
  //         // keyword: 'pull',
  //       };
  //       params[key] = value;

  //       return await getData(params);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  fetchExercisesDetails(sectionKey, sectionValue, 1).then(
    ({ results, page, perPage, totalPages }) => {
      makePagination(
        Number(page),
        Number(perPage),
        totalPages,
        evt.target.textContent
      );
      refs.listPhotoCard.innerHTML = ''
      refs.listInfoCard.innerHTML = createMarkupCardInfo(results);

      // for Olia ============================================
       modalStartBtn = document.querySelectorAll('.btn-start');
      // console.log(modalStartBtn, 'ModalStartBTn11111');
      modalStartBtn.forEach( button =>
        button.addEventListener('click', closeOpenModal))
    }
  );
  refs.listPhotoCard.removeEventListener('click', onItemClick);
}

// function closeOpenModal() { console.log("hiiii");
//     modalWindow.classList.toggle('is-hidden');
   
// }
async function fetchExercisesDetails(key, value, page) {
  try {
    let params = {
      page: page,
      limit: 12,
      endpoint: 'exercises',
      // bodypart: 'back',
      // muscles: 'lats',
      // equipment: 'barbell',
      // keyword: 'pull',
    };
    params[key] = value;

    return await getData(params);
  } catch (e) {
    console.log(e);
  }
}
// ! Інпут
refs.exercisesForm.addEventListener('submit', onInputSearch);

function onInputSearch(evt) {
  evt.preventDefault();

  const inputValue = evt.currentTarget.elements.target.value;
  //   console.log(inputValue);

  fetchExercisesByKeyword(inputValue).then(({ results }) => {
    if (results.length === 0) {
      console.log('За вашим запитом нічого не знайдено :( Спробуйте ще раз!');
    }
    refs.listInfoCard.innerHTML = createMarkupCardInfo(results);
    refs.exercisesForm.reset();
  });
}
// ! API
async function fetchExercisesByKeyword(inputValue) {
  try {
    let params = {
      page: 1,
      limit: 12,
      endpoint: 'exercises',
      // bodypart: 'back',
      // muscles: 'lats',
      // equipment: 'barbell',
      keyword: `${inputValue}`,
    };
    console.log(lastSelectedSectionBtn.dataset.id, 'LOooooool');
    params[lastSelectedSectionBtn.dataset.id] = lastSelectedCardTitle;
    console.log(params, 'params');
    return await getData(params);
  } catch (e) {
    console.log(e);
  }
}
// ! 2 Функції розмітки
function createMarkupCardInfo(arr) {
  return arr
    .map(
      ({ _id, bodyPart, name, burnedCalories, time, rating, target }) => `
      
 <li class="card-info-item-ex" data-id="${_id}">
    <div class="div-workout-rating">
      <a class="link-workout">workout</a>
      <p class="js-text-rating">
        ${rating}
        <svg class="icon-star" width="18" height="18">
          <use href="./img/icons.svg#icon-star"></use>
        </svg>
      </p>
    </div>
    <button type="button" class="btn-start" >
      Start
      <svg class="icon-arrow" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
      </svg>
    </button>
  <h3 class="exercise-title">
    <svg class="exercise-icon-running" width="24" height="24">
      <use href="./img/icons.svg#icon-running-stick" height="16" y="4"></use>
    </svg>
    <span>${name.charAt(0).toUpperCase() + name.slice(1)}</span>
  </h3>

  <ul class="js-exercise-list">

    <li class="exercise-list-text">
      <p class="exercise-label">
        Burned calories:
        <span class="exercise-text-span">${burnedCalories} / ${time} min</span>
      </p>
    </li>

    <li class="exercise-list-text">
      <p class="exercise-label label-width-bodypart">
        Body part: <span class="exercise-text-span">${bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}</span>
      </p>
    </li>

    <li class="exercise-list-text">
      <p class="exercise-label label-width-target">
        Target: <span class="exercise-text-span">${target.charAt(0).toUpperCase() + target.slice(1)}</span>
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
        `<li class="js-card-photo-item"  data-name="${name}"  style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${imgURL});">
             <div class="js-card-text">
                <p class="js-title-card-photo" style=" border: none;
                    background-color: transparent;">${
                      name.charAt(0).toUpperCase() + name.slice(1)
                    }
               </p>
               <p class ="js-text-card-photo">${filter}</p>
             </div>
          </li>`
    )
    .join('');
}

 export let modalStartBtn = [];
console.log(modalStartBtn)













//! --------------------------------------------MODAL--------------------------------------------
const closeModalBtn = document.querySelector('[data-modal-close]');
const modalWindow = document.querySelector(".modal-section")
const btnFavorites = document.querySelector(".btn-add-to-favorites")
const modalWindows = document.querySelector('.modal-window')
const nameExercies = document.querySelector('.name-exercies')
const ratingValues = document.querySelector('.rating_value')
const targets = document.querySelector('.target')
const body = document.querySelector('.body')
const equipments = document.querySelector('.equipment')
const popular = document.querySelector('.popular')
const descriptions = document.querySelector('.description-of-exercises')
const imgModal = document.querySelector('.img-modal')
// ! open and close modal window

closeModalBtn.addEventListener('click', closeModal)

function closeModal() {
modalWindow.classList.toggle('is-hidden');
  btnFavorites.classList.toggle('on-click-btn');
  btnFavorites.disabled = false
}

function closeOpenModal(evt) {
  evt.preventDefault();

  modalWindow.classList.toggle('is-hidden');


  async function infoInModal() {
    try {
      const ID = evt.currentTarget.parentNode.parentNode.dataset.id;
      const params = {
        endpoint: `exercises/${ID}`,
      };
      return await getData(params);
    } catch (e) {
      console.log(e)
    }
  };

  infoInModal().then(({ _id, bodyPart, description, equipment, gifUrl, name, popularity, rating, target }) => {
    marcupA(_id, bodyPart, description, equipment, gifUrl, name, popularity, rating, target);
    if (localStorage.getItem(`Name-Exercies: ${_id}`) !== null) {
      btnFavorites.disabled = true
  btnFavorites.classList.toggle('on-click-btn');
    }
  })
}
 
function marcupA(_id, bodyPart, description, equipment, gifUrl, name, popularity, rating, target) {
  modalWindows.setAttribute("data-id", _id );
  nameExercies.textContent = name;
  ratingValues.textContent = Number(rating);
  targets.textContent = target;
  body.textContent = bodyPart;
  equipments.textContent = equipment;
  popular.textContent = popularity;
  descriptions.textContent = description;
  imgModal.src = gifUrl;
}

// ! add exercise in favorites

btnFavorites.addEventListener('click', addToFavorites)

function isDataInLocalStorage(key) {
    return localStorage.getItem(key) !== null;
}



function addToFavorites(evt) {
const dataToSave = evt.currentTarget.parentNode.dataset.id;
const nameOfEx = `Name-Exercies: ${dataToSave}`
localStorage.setItem(nameOfEx, dataToSave);
  if (isDataInLocalStorage(nameOfEx)) {
    btnFavorites.classList.toggle('on-click-btn');
  }
  btnFavorites.disabled = true
}

// ! rating stars
const stars = document.querySelectorAll('.star');
const ratingStars = document.querySelector('.rating_value');
const ratingValue = Math.round(parseFloat(ratingStars.textContent));

stars.forEach((star, index) => {
    if (index < ratingValue) {
        star.classList.add('active-star'); 
    }
});