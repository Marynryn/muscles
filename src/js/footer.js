import { getData, patchData, postData } from './api.js';
import Notiflix from 'notiflix';

let form = document.querySelector('.footer-form');
let input = document.querySelector('.footer-input');

form.addEventListener('submit', function (event) { 
  event.preventDefault()
  
    const emailInput = document.getElementById("email-input").value;
    async function startApi() {
      try {
        const endpoint = 'subscription';
        const body = {
          email: emailInput,
        };
        const data = await postData(endpoint, body);
        Notiflix.Notify.success('The subscription order for the newsletter of new exercises has been sent', {
          position: 'center-center',
          width: '400px',
          height:'500px',
          fontSize: '24px'
        })
        input.value = '';
      } catch (e) {
        Notiflix.Notify.failure('Error sending subscription.', {
          position: 'center-center',
        width: '400px',
        height:'500px',
        fontSize: '24px'});
         input.value = '';
          throw new Error(e.message)
      }
    }
    startApi();
    })