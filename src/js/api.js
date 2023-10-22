import axios from 'axios';
const BASE_URL = 'https://your-energy.b.goit.study/api/';

axios.defaults.baseURL = BASE_URL;

export const getData = async params => {
  let url = '';
  if (params.hasOwnProperty('endpoint')) {
    url = `${params.endpoint}?`;
    delete params.endpoint;
  }

    const paramKeys = Object.keys(params);

   if (paramKeys.length) {
     paramKeys.forEach((param, index) => {
       url += `${param}=${params[param]}`;
       if (index + 1 < paramKeys.length) url += '&';
     });
   }

    const req = await axios.get(url);
    console.log(req.data);
  return req.data;
};

export const patchData = async (endpoint, body) => {
    try { 
    const url = BASE_URL + endpoint;
    const req = await axios.patch(url, body);
    return req.data;
    } catch (e){
        throw new Error(e.response.data.message);
    }
};

export const postData = async (endpoint, body) => {
  try {
    const url = BASE_URL + endpoint;
    const req = await axios.post(url, body);
    console.log(req.data);
    return req.data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

// Пишемо в свій JS Файл
// import { getData, patchData, postData } from './api.js';

// 1. Перелік фільтрів (вправ) з урахування назви фільтру, кількості категорій у відповіді на запит та порядкового номеру сторінки:
// https://your-energy.b.goit.study/api/filters?filter=Muscles&page=1&limit=12
//
// async function startApi() {
//   try {
//     const params = {
//       endpoint: 'filters',
//       page: 1,
//       limit: 12,
//       filter: 'Muscles',
//     };
//     const data = await getData(params);
//   } catch (e) {
//     console.log(e);
//   }
// }
// startApi();

// 2.Перелік вправ з фільтрацією по категорії та ключовому слову з урахування кількості вправ у запиті та порядкового номеру сторінки
// https://your-energy.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10

// async function startApi() {
//     try {
//         const params = {
//             page: 1,
//             limit: 12,
//             endpoint: 'exercises',
//             bodypart: 'back',
//             muscles: 'lats',
//             equipment: 'barbell',
//             keyword: 'pull',
//      }
//       const data = await getData(params);
//     }catch(e){
//       console.log(e)
//     }
// };
// startApi();

// 3. Детальна інформація про вправу
// https://your-energy.b.goit.study/api/exercises/ exerciseID

// async function startApi() {
//     try {
//         const exerciseID = '64f389465ae26083f39b17df';
//         const params = {
//           endpoint: `exercises/${exerciseID}`,
//         };
//      const data = await getData(params);
//     }catch(e){
//       console.log(e)
//     }
// };
// startApi();

// 4. Додавання рейтингу окремій вправі
// https://your-energy.b.goit.study/api/exercises/ exerciseID /rating
// https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17df/4.02

// async function startApi() {
//   try {
//     const exerciseid = '64f389465ae26083f39b17df';
//     const endpoint = `exercises/${exerciseid}/rating`;
//       const body = {
//           rate: 5,
//           email: 'tesdfd@gmail.com',
//           review: 'My best exercise',
//       };

//       const data = await patchData(endpoint, body);
//   } catch (e) {
//      throw new Error(e.message);
//   }
// }
// startApi();

// 5. Цитата дня:
// https://your-energy.b.goit.study/api/quote?

// async function startApi() {
//     try {
//         const params = {
//             endpoint: `quote`,
//       }
//       const data = await getData(params);
//     }catch(e){
//       console.log(e)
//     }
// };
// startApi();

// 6. Оформлення підписки на розсилку нових вправ
//https://your-energy.b.goit.study/api/subscription
// async function startApi() {
//   try {
//     const endpoint = 'subscription';
//     const body = {
//       email: 'tes@gmail.com',
//     };
//     const data = await postData(endpoint, body);
//   } catch (e) {
//     throw new Error(e.message);
//   }
// }
// startApi();

