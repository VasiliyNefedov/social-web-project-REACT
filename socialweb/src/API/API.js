import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "04489b2f-612d-4121-98e8-d37b27a13021"
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export let userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  setUnfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
  setFollow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  getUserProfile(userId) {
    console.warn("obsolete method. please use profileAPI.getUserProfile");
    return profileAPI.getUserProfile(userId);
  }
};

export let authAPI = {
  getAuth() {
    return instance.get(`auth/me`);
  },
  setLogin(loginData) {
    return instance.post(`/auth/login`, loginData);
  },
  setLogout() {
    return instance.delete(`auth/login`);
  }
};

export let profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updatetUserStatus(statusText) {
    return instance.put(`profile/status/`, { status: statusText });
  },
  setUserPhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  updateProfileInfo(info) {
    return instance.put(`profile/`, info);
  }
};

export const securityAPI = {
  getCaptchaURL() {
    return instance.get("security/get-captcha-url/");
  }
};
