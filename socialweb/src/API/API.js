import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "04489b2f-612d-4121-98e8-d37b27a13021"
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
};

export const setUnfollow = userId => {
  return instance.delete(`follow/${userId}`).then(response => response.data);
};

export const setFollow = userId => {
  return instance.post(`follow/${userId}`).then(response => response.data);
};

export const getUserProfile = userId => {
  return instance.get(`profile/${userId}`);
};

export const getAuth = () => {
    return instance.get(`auth/me`);
}