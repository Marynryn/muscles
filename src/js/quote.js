import { getData } from './api.js';

async function startApi() {
  try {
    const params = {
      endpoint: `quote`,
    };
    const data = await getData(params);

    markapQuote(data);
  } catch (e) {
    console.log(e);
  }
}

const pageId = 'page1';
const quoteEl = document.querySelector('.js-quote-container');
function markapQuote({ author, quote }) {
  const markap = `<p class="js-quote-text">${quote}</p>
            <h2 class="js-quote-autor">${author}</h2>`;

  quoteEl.insertAdjacentHTML('beforeend', markap);

  const currentDate = new Date().toLocaleDateString();
  console.log(currentDate);
  localStorage.setItem(currentDate, JSON.stringify({ author, quote }));
}

document.addEventListener('DOMContentLoaded', () => {
  const currentDate = new Date().toLocaleDateString();
  const storedData = localStorage.getItem(currentDate);
  if (storedData) {
    const data = JSON.parse(storedData);
    markapQuote(data);
  } else {
    startApi();
  }
});
