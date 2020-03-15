import axios from 'axios';

export const REPOSITORY_URL = 'https://github.com/KosyanMedia/test-tasks/tree/master/aviasales_frontend';
export const BASE_URL = 'https://front-test.beta.aviasales.ru';

let searchId: string;

export const getSearchId = async () => {
  if (searchId) return searchId;
  try {
    const response = await axios.get(`${BASE_URL}/search`);
    searchId = response.data.searchId;
    return searchId;
  } catch (e) {
    throw new Error(`getSearchId`);
  }
}

export const getTickets = async (searchId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/tickets?searchId=${searchId}`);
    return response.data;
  } catch (e) {
    throw new Error(`getTickets`);
  }
}

export const clearSearchId = () => {
  searchId = '';
}
