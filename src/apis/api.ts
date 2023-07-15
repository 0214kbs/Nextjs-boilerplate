import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});
axios.defaults.withCredentials = true; // withCredentials 전역 설정
api.interceptors.response.use(
  // response interceptor
  (response: any) => {
    return response;
  },
  async (error: any) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default api;
