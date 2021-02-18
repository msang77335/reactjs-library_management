import axiosClient from "./axiosClient";
const accountApi = {
   get: (id) => {
      const url = `/accounts/${id}`;
      return axiosClient.get(url);
   },
   post: (params) => {
      const url = `/accounts/`;
      return axiosClient.post(url, params);
   },
   put: (params) => {
      const url = `/accounts/${params.id}`;
      return axiosClient.put(url, params);
   },
   delete: (id) => {
      const url = `/accounts/${id}`;
      return axiosClient.delete(url);
   },
   getAll: () => {
      const url = "/accounts/";
      return axiosClient.get(url);
   },
};
export default accountApi;
