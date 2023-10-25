const currentPage = localStorage.getItem('activePage');

const home = document.querySelector(".pg-home");
const page2 = document.querySelector(".pg-favorites");
const linkHome = document.querySelector(".header-item-link");
const linkPage2 = document.querySelector(".header-pages-item-link");

if (currentPage === 'home') {
    linkHome.classList.add("header-pages-active");
    linkPage2.classList.remove("header-pages-active2");
} else if (currentPage === 'page2') {
    linkHome.classList.remove("header-pages-active");
    linkPage2.classList.add("header-pages-active2");
}

home.addEventListener("click", OnclickHome);
page2.addEventListener("click", OnclickPage2);

function OnclickHome() {
    linkHome.classList.add("header-pages-active");
    linkPage2.classList.remove("header-pages-active2");
 
    localStorage.setItem('activePage', 'home');
}

function OnclickPage2() {
    linkHome.classList.remove("header-pages-active");
    linkPage2.classList.add("header-pages-active2");
   
    localStorage.setItem('activePage', 'page2');
}