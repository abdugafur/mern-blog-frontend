import axios from "axios";

const url =
  document.domain === "localhost"
    ? "http://localhost:5555"
    : process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
