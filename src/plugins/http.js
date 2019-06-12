import axios from 'axios';

const myHttpServer = {};
myHttpServer.install = Vue => {
  axios.defaults.baseURL = `https://api.cat-shop.penkuoer.com/api/v1/`;

  Vue.prototype.$http = axios;
};

export default myHttpServer;
