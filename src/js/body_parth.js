
import { getData, patchData, postData } from './api.js';
import axios from 'axios';
import { Notify } from 'notiflix';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const refs = {
  exerciseSectionsList: document.querySelector('.exercises-list'),
  exercisesForm: document.querySelector('.exercises-form'),
  listPhotoCard: document.querySelector('.js-list-cards-photo'),
  listInfoCard: document.querySelector('.js-list-cards-information'),
  exercisesTitle: document.querySelector('.exercises-title'),
  mainTitle: document.querySelector('.exercises-span-title'),
  spanTitle: document.querySelector('.exercises-part-title'),
  divInputButton: document.querySelector('.input-button'),
  startCardsPhoto: document.querySelector('.js-btn-body-parts')
};

let lastSelectedSectionBtn = undefined;
let lastSelectedCardTitle = undefined;
let lastSectionValue = '';
let lastFetchedData = [];
let lastPaginationOptions = {};
let modalStartBtn = [];

let maxCardOnScreen = 12;
let isMainScreen = true;
const TABLET_WIDTH = 768;
const PAGINATION_VISIBLE_PAGES = 3;

refs.exerciseSectionsList.addEventListener('click', onClickSectionButton);
refs.exercisesTitle.addEventListener('click', onClickExercisesTitle)
window.addEventListener('resize', onResize);
updateMaxCardOnScreen()

function onClickExercisesTitle(evt){
  resetExercisesTitle();

  showSearchInputForm();
  isMainScreen = true;
  console.log(lastPaginationOptions);
  const {itemsPerPage, totalItems} = lastPaginationOptions

  const currentPage = 1;
 
  updatePagination(currentPage, Number(itemsPerPage) , totalItems, lastSectionValue)
  clearListInfoCard()
  updateListPhotoCard(lastFetchedData)
  refs.listPhotoCard.addEventListener('click', onItemClick)
}

function onClickSectionButton(evt) {
  if (evt.target.tagName !== 'BUTTON') {
    return;
  }
isMainScreen = true;

  resetExercisesTitle()

  showSearchInputForm(false)

  if (lastSelectedSectionBtn !== undefined) {
    lastSelectedSectionBtn.classList.remove('current');
  }

  lastSelectedSectionBtn = evt.target;
  evt.target.classList.add('current');

  lastSectionValue = evt.target.textContent

  fetchExercisesSection(1, evt.target.textContent).then(
    ({ results, page, perPage, totalPages }) => {

      lastPaginationOptions = {
      totalItems: perPage * totalPages, 
      itemsPerPage: perPage, 
      visiblePages: PAGINATION_VISIBLE_PAGES, 
      page: page,
      };

      updatePagination(
        Number(page),
        Number(perPage),
        totalPages,
        evt.target.textContent
      );

      lastFetchedData = results;
      clearListInfoCard()
      updateListPhotoCard(results);
    }
  );

  refs.listPhotoCard.addEventListener('click', onItemClick);
}

function resetExercisesTitle() {
  refs.mainTitle.textContent = 'Exercises';
  refs.spanTitle.textContent = '';
}

function showSearchInputForm(isDisplay){
  refs.exercisesForm.style.display = isDisplay ? 'block' : 'none';
}

function updateMaxCardOnScreen() {
  let width = getWindowWidth()
  resetExercisesTitle();
  showSearchInputForm(false)
  maxCardOnScreen = width < TABLET_WIDTH ? 9 : 12;
}

function getWindowWidth() {
  return window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
}

function onResize() {
  clearListInfoCard()
  updateMaxCardOnScreen()

  fetchExercisesSection(1,"Body parts").then(
    ({ results, page, perPage, totalPages }) => {

      if (lastSelectedSectionBtn !== undefined) {
        lastSelectedSectionBtn.classList.remove('current');
      }
      
      updateCurrentSectionButton()

      updatePagination(
        Number(page),
        Number(perPage),
        totalPages,
        'Body parts'
      );
      
        updateListPhotoCard(results);
    }
  );
}

fetchExercisesSection(1,"Body parts")
.then(
  ({ results, page, perPage, totalPages }) => {
   
    updateCurrentSectionButton()
    updatePagination(
      Number(page),
      Number(perPage),
      totalPages,
      'Body parts'
    );

    lastFetchedData = results;
    
    updateListPhotoCard(results);
  }
);

function clearListInfoCard() {
  refs.listInfoCard.innerHTML = ''
}

function clearListPhotoCard() {
  refs.listPhotoCard.innerHTML = ''
  
}

function updateListPhotoCard(data) {
  refs.listPhotoCard.innerHTML = createMarkupCardPhoto(data);
}

function updateListInfoCard(data) {
  refs.listPhotoCard.innerHTML = ''
  refs.listInfoCard.innerHTML = createMarkupCardInfo(data)
}

function updateCurrentSectionButton(){
  lastSelectedSectionBtn= refs.startCardsPhoto
  lastSelectedSectionBtn.classList.add('current')
}

async function fetchExercisesSection(page, text) {
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

function updatePagination(page, perPage, totalPages, sectionTextValue) {
  const paginationOptions = {
    totalItems: perPage * totalPages, 
    itemsPerPage: perPage, 
    visiblePages: PAGINATION_VISIBLE_PAGES, 
    page: page,
  }
  const pagination = new Pagination('pagination', paginationOptions);

   const scrollToEx = document.querySelector(".exercises-title");
  pagination.on('afterMove', function (event) {
    
    if (!isMainScreen) {
      fetchExercisesDetails(
        lastSelectedSectionBtn.dataset.id,
        lastSelectedCardTitle,
        pagination.getCurrentPage()
      ).then(({ results, page, perPage, totalPages }) => {
        updatePagination(Number(page), Number(perPage), totalPages, sectionTextValue);
        updateListInfoCard(results);
        setupListInfoCardStartButtons();
       
        if(scrollToEx){
          console.log(1)
          scrollToEx.scrollIntoView({behavior: 'smooth'});
        }
      });
      return;
    }

    fetchExercisesSection(event.page, sectionTextValue).then(
      ({ results, page, perPage, totalPages }) => {
        updatePagination(Number(page), Number(perPage), totalPages, sectionTextValue);
        updateListPhotoCard(results);
        if(scrollToEx){
          console.log(2)
          scrollToEx.scrollIntoView({behavior: 'smooth'});
        }
      }
    );
  });
}

function setupListInfoCardStartButtons() {
  modalStartBtn = document.querySelectorAll('.btn-start');
  modalStartBtn.forEach( button =>
    button.addEventListener('click', onOpenModal))
  
}

// ! на картинку клік - перекидає на карточку з інформацією

refs.listPhotoCard.addEventListener('click', onItemClick);

function onItemClick(evt) {
  if (evt.target.tagName === 'UL') {
   
    return;
  }

  showSearchInputForm(true)

  isMainScreen = false;

 

  const sectionKey = lastSelectedSectionBtn.dataset.id;

  const sectionValue = evt.target.closest('.js-card-photo-item').dataset.name;

  lastSelectedCardTitle = sectionValue;

  addDetailsTextForExercisesTitle(sectionValue)
  
  fetchExercisesDetails(sectionKey, sectionValue, 1).then(
    ({ results, page, perPage, totalPages }) => {
      

      updatePagination(
        Number(page),
        Number(perPage),
        totalPages,
        evt.target.textContent
      );

      clearListPhotoCard()
      updateListInfoCard(results);

      setupListInfoCardStartButtons()
    }
  );
 
}

function addDetailsTextForExercisesTitle(detailText) {
  refs.mainTitle.textContent += ' / ';
  refs.spanTitle.textContent = detailText;
}

async function fetchExercisesDetails(key, value, page) {
  try {
    let params = {
      page: page,
      limit: 12,
      endpoint: 'exercises',
      
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

  fetchExercisesByKeyword(inputValue).then(({ results }) => {

    if (results.length === 0) {
      throw new Error(error.message)
      return;
    }

    updateListInfoCard(results);
    refs.exercisesForm.reset();
  })
  .catch(err => {
    
    Notify.failure(`not found, try again 🔎`)
  })
  
}
// ! API
async function fetchExercisesByKeyword(inputValue) {
  try {
    let params = {
      page: 1,
      limit: 12,
      endpoint: 'exercises',
      keyword: `${inputValue}`,
    };
 
    params[lastSelectedSectionBtn.dataset.id] = lastSelectedCardTitle;
  
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
        <span class="ex-icon-star" width="18" height="18"></span>
      </p>
    </div>
    <button type="button" class="btn-start" >
      Start
      <span class="ex-icon-arrow"></span>
      
    </button>
  <h3 class="exercise-title">
  <span class="ex-icon-running"></span>
    <span class="ex-title-span">${name.charAt(0).toUpperCase() + name.slice(1)}</span>
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
const imgModal = document.querySelector('.img-modal');
const overflow = document.body;
// ! open and close modal window
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    onCloseModal();
  }
});

// 
modalWindow.addEventListener('click', (event) => {
  if (event.target === modalWindow) {
    onCloseModal();
  }
});

closeModalBtn.addEventListener('click', onCloseModal)
function onCloseModal() {
modalWindow.classList.toggle('is-hidden');
  overflow.style.overflow = 'visible';
}
function onOpenModal(evt) {
  evt.preventDefault();
  modalWindow.classList.toggle('is-hidden');
  overflow.style.overflow = 'hidden';
  async function updateInfoInModalWindow() {
    try {
      const ID = evt.currentTarget.closest(".card-info-item-ex").dataset.id;
      
      const params = {
        endpoint:`exercises/${ID}`,
      };
      return await getData(params);
    } catch (err) {
      console.log(err)
    }
  };
  updateInfoInModalWindow().then(({ _id, bodyPart, description, equipment, gifUrl, name, popularity, rating, target }) => {
    createMarkupModalWindow(_id, bodyPart, description, equipment, gifUrl, name, popularity, rating, target);
    if (localStorage.getItem(`Exercies-Name: ${name}`) !== null) {
      btnFavorites.classList.add('on-click-btn');
      btnFavorites.textContent = 'Remove from favorites';
    } else {
      btnFavorites.classList.remove('on-click-btn');
      btnFavorites.innerHTML = `Add to favorites
      <svg class="star" width="16" height="16">
          <use href="./img/icons.svg#icon-heart"></use>
      </svg>`
    }
  })
}
function createMarkupModalWindow(_id, bodyPart, description, equipment, gifUrl, name, popularity, rating, target) {
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
btnFavorites.addEventListener('click', onClickFavoritesBtn)

function onClickFavoritesBtn(evt) {
  async function updateInfoForModalWindow() {
    try {
      const ID = evt.currentTarget.parentNode.parentNode.dataset.id
      const params = {
        endpoint: `exercises/${ID}`,
      };
      return await getData(params);
    } catch (err) {
      console.log(err)
    }
  };
  updateInfoForModalWindow().then(({ _id, bodyPart, name, target, burnedCalories, time }) => {
    const dataToSave = {
      _id,
      name,
      burnedCalories,
      bodyPart,
      target,
      time
    };
    const nameOfEx = `Exercies-Name: ${name}`;
    let localStorageData = JSON.parse(localStorage.getItem('localStorageData') || '{}');
    if (localStorage.getItem(nameOfEx) !== null) {
      btnFavorites.classList.remove('on-click-btn');
      btnFavorites.textContent = 'Add to favorites';
      
      delete localStorageData[nameOfEx];
      localStorage.removeItem(nameOfEx, JSON.stringify(dataToSave))
      localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
    } else {
      btnFavorites.classList.add('on-click-btn');
      btnFavorites.textContent = 'Remove from favorites';
      localStorageData[nameOfEx] = dataToSave;
      localStorage.setItem(nameOfEx, JSON.stringify(dataToSave));
      localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
    }
  });
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