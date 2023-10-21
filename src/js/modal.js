const closeModalBtn = document.querySelector('[data-modal-close]');
const modalWindow = document.querySelector(".modal-section")

const openModalBtn = document.querySelector(".btn-start")

closeModalBtn.addEventListener('click', closeOpenModal )
openModalBtn.addEventListener('click', closeOpenModal )

function closeOpenModal() {
    modalWindow.classList.toggle('is-hidden');
}
 


const ratings = document.querySelectorAll('.rating');

ratings.forEach( rating =>{
  const ratingActive = rating.querySelectorAll('.rating_active')[0];
  const ratingValue = rating.querySelectorAll('.rating_value')[0];
  const ratingActiveWidth = ratingValue.innerHTML/0.05;
  ratingActive.setAttribute('style', `width:${ratingActiveWidth}%`);
});