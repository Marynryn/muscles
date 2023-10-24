
function toggleScrollToTopButton() {
    const button = document.getElementById("scrollToTopButton");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         button.style.display = "block";
    } else {
        button.style.display = "none";
    }
  }
  
  document.getElementById("scrollToTopButton").addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  });
 
  window.onscroll = toggleScrollToTopButton;


  //?======================


//   const loader = document.querySelector('.loader');


// function showLoader() {
//   loader.style.display = 'block';
// }

// function hideLoader() {
//   loader.style.display = 'none';
// }


// axios.get('')
//   .then(function (response) {
//     hideLoader(); 
//     const data = response.data;
//   })
//   .catch(function (error) {
 
//     hideLoader(); 
//     console.error('Помилка запиту', error);
//   });

// showLoader();


function showLoader () {
const loader = document. getElementById("loader");
loader.style.display = "block";
}
function hideLoader () {
const loader = document.getElementById("loader");
loader.style.display = "none";
}

function fetchData() {
showLoader ();

fetch('https://your-energy.b.goit.study/api-docs')
.then (response => response.json())
.then(data => {
    hideLoader ()
    console.log(data)}

)
.catch(error => {
hideLoader ()
console.log('Помилка запиту', error);});
}