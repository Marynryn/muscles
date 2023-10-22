import { getData } from './api.js';
async function startApi() {
  try {
    const params = {
      endpoint: `quote`,
    };
    const data = await getData(params);
  } catch (e) {
    console.log(e);
  }
}
startApi();
