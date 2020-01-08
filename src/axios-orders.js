import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://create-your-own-burger.firebaseio.com/'
});

export default instance;
