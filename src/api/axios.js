import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_LOCAL_PORT
});

instance.interceptors.request.use(config => {
  config.headers = {
    "X-Auth-Token": process.env.VUE_APP_API_TOKEN
  };

  return config;
});

export default instance;
