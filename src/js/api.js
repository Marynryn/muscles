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
    return req.data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};