import axiosClient from "./axiosClient";

const userApi = {
   signIn: (params) => {
      // const url = "/user/login";
      // return axiosClient.post(url, params);
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs({
               name: "Nguyễn Minh Sang",
               username: "20424062",
               email: "20424062@student.hcmus.edu.vn",
               img:
                  "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
               phone: "0967272059",
               awaiting: 0,
               created_at: "2021-01-22T13:49:58.279Z",
               update_at: "2021-01-22T13:49:58.279Z",
               role: {
                  value: 1,
                  label: "Admin",
               },
               id: 1,
            });
         }, 2000);
      });
   },
   getMe: () => {
      // const url = "/user/me";
      // return axiosClient.get(url);
      return new Promise((rs, rj) => {
         setTimeout(() => {
            rs({
               name: "Nguyễn Minh Sang",
               username: "20424062",
               email: "20424062@student.hcmus.edu.vn",
               img:
                  "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
               phone: "0967272059",
               awaiting: 0,
               created_at: "2021-01-22T13:49:58.279Z",
               update_at: "2021-01-22T13:49:58.279Z",
               role: {
                  value: 1,
                  label: "Admin",
               },
               id: 1,
            });
         }, 0);
      });
   },
};
export default userApi;
