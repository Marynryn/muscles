import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api/';

axios.defaults.baseURL = BASE_URL;

export const getData = async (method, page, limit, filter, txtfilter, bodypart, muscles, equipment, keyword, quote, subscription, exerciseid, url1, rating) => {
    const params = new URLSearchParams({
    bodypart,
    filter,
    muscles,
    equipment,
    keyword,
    page,
    limit,
    subscription,
    exerciseid,
    rating,
    });
    let url = txtfilter + filter + page + limit + quote + exerciseid;
    if (url1 !== undefined) {
        url = url1;
    }
    const req = await axios({
    method: method,
    url: url,
  });
  console.log(req.data);
  return req.data;
};

// getData(method, null, null, quote);

// Пишемо в свій JS Файл
// import { getData } from './api.js';

// 1. Перелік фільтрів (вправ) з урахування назви фільтру, кількості категорій у відповіді на запит та порядкового номеру сторінки:
// https://your-energy.b.goit.study/api/filters?filter=Muscles&page=1&limit=12
// const method = 'get';
// const page = 1;
// const limit = 12;
// const txtfilter = 'filters?'
// const filter = 'Muscles';
// async function startApi() {
//  try{
//       const data = await getData(method, page, limit, filter, txtfilter);
//     }catch(e){
//       console.log(e)
//     }
// };
// startApi();

// 2.Перелік вправ з фільтрацією по категорії та ключовому слову з урахування кількості вправ у запиті та порядкового номеру сторінки
// https://your-energy.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10
// const method = 'get';
// const page = 1;
// const limit = 10;
// const txtfilter = 'exercises?';
// const bodypart = 'back';
// const muscles = 'lats';
// const equipment = 'barbell';
// const keyword = 'pull';

// async function startApi() {
//  try{
//       const data = await getData(method, page, limit, null, txtfilter, bodypart, muscles, equipment, keyword);
//     }catch(e){
//       console.log(e)
//     }
// };
// startApi();

// 3. Детальна інформація про вправу
// https://your-energy.b.goit.study/api/exercises/ exerciseID
// const method = 'get';
// const txtfilter = 'exercises/';
// const exerciseid = '64f389465ae26083f39b17df';
// let url1 = txtfilter + exerciseid;

// async function startApi() {
//  try{
//      const data = await getData(method, null, null, null, txtfilter, null, null, null, null, null, null, exerciseid , url1);
//     }catch(e){
//       console.log(e)
//     }
// };
// startApi();

// 4. Додавання рейтингу окремій вправі
// https://your-energy.b.goit.study/api/exercises/ exerciseID /rating
// https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17df/4.02
// const method = 'patch';
// const txtfilter = 'exercises/';
// const exerciseid = '64f389465ae26083f39b17df/';
// const rating = 'rating';
// let url1 = txtfilter + exerciseid + rating;
// async function startApi() {
//  try{
//      const data = await getData(method, null, null, null, null, null, null, null, null, null, null, exerciseid, url1, rating);
//      console.log(data);
//     }catch(e){
//       console.log(e)
//     }
// };
// startApi();

// 5. Цитата дня:
// https://your-energy.b.goit.study/api/quote 
// const method = 'get';
// const quote = 'quote';
// let url1 = quote;
// async function startApi() {
//  try{
//       const data = await getData(method, null, null, null, null, null, null, null, null, quote, null, null , url1);
//     }catch(e){
//       console.log(e)
//     }
// };
// startApi();

// 6. Оформлення підписки на розсилку нових вправ
//https://your-energy.b.goit.study/api/subscription
// const method = 'post';
// const subscription = 'subscription';
// let url1 = subscription;
// async function startApi() {
//  try{
//      const data = await getData(method, null, null, null, null, null, null, null, null, null, subscription, null, url1);
//      console.log(data);
//     }catch(e){
//       console.log(e)
//     }
// };
// startApi();

