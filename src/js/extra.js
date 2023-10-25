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

function showLoader () {
const loader = document.getElementById("loader");
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