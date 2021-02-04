import axiosClient from "./axiosClient";
const categoryApi = {
   get: (id) => {
      const url = `/categories/${id}`;
      return axiosClient.get(url);
   },
   post: (params) => {
      const url = `/categories/`;
      return axiosClient.post(url, params);
   },
   put: (params) => {
      const url = `/categories/${params.id}`;
      return axiosClient.put(url, params);
   },
   delete: (id) => {
      const url = `/categories/${id}`;
      return axiosClient.delete(url);
   },
   getAll: (params) => {
      const url = "/categories";
      return axiosClient.get(url, { params });
   },
};
export default categoryApi;
