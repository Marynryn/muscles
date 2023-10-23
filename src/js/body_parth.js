import { getData, patchData, postData } from './api.js';
import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const refs = {
  exercisesList: document.querySelector('.exercises-list'),
  exercisesForm: document.querySelector('.exercises-form'),
  listPhotoCard: document.querySelector('.js-list-cards-photo'),
  mainTitle: document.querySelector('.exercises-title'),
  spanTitle: document.querySelector('.title-span-exercise'),
  divInputButton: document.querySelector('.input-button'),
};

refs.exercisesList.addEventListener('click', onBtnClick);
let lastSelectedSectionBtn = undefined;
let lastSelectedCardTitle = undefined;

let isMainScreen = true;

function onBtnClick(evt) {
  if (evt.target.tagName !== 'BUTTON') {
    return;
  }
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

      refs.listPhotoCard.innerHTML = createMarkupCardPhoto(results);
    }
  );

  refs.listPhotoCard.addEventListener('click', onItemClick);
}

let width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
let maxCardOnScreen = 12;

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
        refs.listPhotoCard.innerHTML = createMarkupCardInfo(results);
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

// if (eventListenerActive) {
//   console.log(eventListenerActive, 'EVENTTTTTT');
refs.listPhotoCard.addEventListener('click', onItemClick);
// }

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
      refs.listPhotoCard.innerHTML = createMarkupCardInfo(results);

      // for Olia ============================================
       modalStartBtn = document.querySelectorAll('.btn-start');
      console.log(modalStartBtn, 'ModalStartBTn11111');
      // modalStartBtn.forEach(button =>
      // button.addEventListener('click', onModalTestBtn));
    }
  );
  refs.listPhotoCard.removeEventListener('click', onItemClick);
}

// // !! TESTTESTEST
// function onModalTestBtn() {
//   console.log('HEELLLLLLLLOooooooooo');
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
    refs.listPhotoCard.innerHTML = createMarkupCardInfo(results);
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
      
 <li class="card-info-item" data-id="${_id}">
  <div class="div-icon-workout">
    <div class="div-workout-rating">
      <a class="link-workout">workout</a>
      <p class="js-text-rating">
        ${rating}
        <svg class="icon-star" width="18" height="18">
          <use href="../img/icons.svg#icon-star"></use>
        </svg>
      </p>
    </div>
    <button type="button" class="btn-start" >
      Start
      <svg class="icon-arrow" width="16" height="16">
        <use href="../img/icons.svg#icon-arrow"></use>
      </svg>
    </button>
  </div>

  <h3 class="exercise-title">
    <svg class="exercise-icon-running" width="24" height="24">
      <use href="../img/icons.svg#icon-running-stick" height="16" y="4"></use>
    </svg>
    ${name}
  </h3>

  <ul class="js-exercise-list">

    <li class="exercise-list-text">
      <p class="exercise-label">
        Burned calories:
        <span class="exercise-text-span">
          
          ${burnedCalories}/${time}min
        </span>
      </p>
    </li>

    <li class="exercise-list-text">
      <p class="exercise-label">
        Body part: <span class="exercise-text-span"> ${bodyPart}</span>
      </p>
    </li>

    <li class="exercise-list-text">
      <p class="exercise-label">
        Target: <span class="exercise-text-span"> ${target}</span>
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