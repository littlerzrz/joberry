import axios from "axios";

const configureInterceptors = () => {
  axios.defaults.timeout = 100000;
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  axios.defaults.headers.common["Content-Type"] =
    "application/json;charset=UTF-8";

  // response 拦截器
  axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
      return Promise.reject(error);
    }
  );
};

const configureAuthHeader = (accessToken) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};
export { configureInterceptors, configureAuthHeader };
