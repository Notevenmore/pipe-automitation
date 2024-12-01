import axios from "axios";
import nProgress from "nprogress";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 0
});

api.interceptors.request.use(
  (config) => {
    nProgress.start();
    return config;
  },
  (error) => {
    nProgress.done();
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    nProgress.done();
    return response;
  },
  (error) => {
    nProgress.done();
    return Promise.reject(error);
  }
);

export default api;