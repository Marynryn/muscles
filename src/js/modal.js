// ! open and close modal window
const closeModalBtn = document.querySelector('[data-modal-close]');
const modalWindow = document.querySelector(".modal-section")
const openModalBtn = document.querySelector(".btn-start")

closeModalBtn.addEventListener('click', closeModal )
openModalBtn.addEventListener('click', openModal)

function closeOpenModal() {
    modalWindow.classList.toggle('is-hidden');
}

function openModal () {
    closeOpenModal()
}

function closeModal() {
    closeOpenModal()
}

// ! add exercise in favorites
const btnFavorites = document.querySelector(".btn-add-to-favorites")
btnFavorites.addEventListener('click', addToFavorites)

function isDataInLocalStorage(key) {
    return localStorage.getItem(key) !== null;
}

function addToFavorites() {
    const dataToSave = 'X';
    localStorage.setItem('keyX', dataToSave);

    const keyInLocalStorage = isDataInLocalStorage('keyX');
    if (keyInLocalStorage) { 
        btnFavorites.classList.add('on-click-btn');
        btnFavorites.textContent = 'This exercise in your Favorites';
    }
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