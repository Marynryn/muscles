import { getData, patchData, postData } from './api.js'
import { modalStartBtn } from './body_parth.js'


console.log(modalStartBtn)
// // ! open and close modal window
// const closeModalBtn = document.querySelector('[data-modal-close]');
// const modalWindow = document.querySelector(".modal-section")
// modalStartBtn.forEach( button =>
//     button.addEventListener('click', closeOpenModal))
// closeModalBtn.addEventListener('click', closeOpenModal)
// // modalStartBtn.addEventListener('click', closeOpenModal)

// function closeOpenModal() { console.log("hiiii");
//     modalWindow.classList.toggle('is-hidden');
   
// }


// // ! add exercise in favorites
// const btnFavorites = document.querySelector(".btn-add-to-favorites")
// btnFavorites.addEventListener('click', addToFavorites)

// function isDataInLocalStorage(key) {
//     return localStorage.getItem(key) !== null;
// }

// function addToFavorites() {
//     const dataToSave = 'X';
//     localStorage.setItem('keyX', dataToSave);

//     const keyInLocalStorage = isDataInLocalStorage('keyX');
//     if (keyInLocalStorage) { 
//         btnFavorites.classList.add('on-click-btn');
//         btnFavorites.textContent = 'This exercise in your Favorites';
//     }
// }

// // ! rating stars
// const stars = document.querySelectorAll('.star');
// const ratingStars = document.querySelector('.rating_value');

// const ratingValue = Math.round(parseFloat(ratingStars.textContent));

// stars.forEach((star, index) => {
//     if (index < ratingValue) {
//         star.classList.add('active-star'); 
//     }
// });
