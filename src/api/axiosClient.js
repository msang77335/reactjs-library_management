import axios from "axios";
const axiosClient = axios.create({
   baseURL: process.env.REACT_APP_API_URL,
   headers: {
      "content-Type": "application/json",
   },
});

axiosClient.interceptors.request.use(async (config) => {
   const customHeaders = {};

   const accessToken = localStorage.getItem("accessToken");
   if (accessToken) {
      customHeaders.Authorization = accessToken;
   }

   return {
      ...config,
      headers: {
         ...customHeaders,
         ...config.headers,
      },
   };
});

axiosClient.interceptors.response.use(
   (response) => {
      if (response && response.data) {
         return response.data;
      }
      return response;
   },
   (error) => {
      return error;
   }
);

export default axiosClient;
