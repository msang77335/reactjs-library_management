import axiosClient from "./axiosClient";
const bookApi = {
   get: (id) => {
      const url = `/books/${id}`;
      return axiosClient.get(url);
   },
   post: (params) => {
      const url = `/books/`;
      return axiosClient.post(url, params);
   },
   put: (params) => {
      const url = `/books/${params.id}`;
      return axiosClient.put(url, params);
   },
   delete: (id) => {
      const url = `/books/${id}`;
      return axiosClient.delete(url);
   },
   getAll: (params) => {
      const url = "/books/";
      return axiosClient.get(url, { params });
   },
};
export default bookApi;
