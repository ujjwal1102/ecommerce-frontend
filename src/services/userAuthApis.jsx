import axios from "axios";
import Cookies from "universal-cookie";
import { getAccessToken } from "./LocalStorageService";


const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
  // headers: {
  //   authorization: `Bearer ${localStorage.getItem('access_token')}`,
  // },
  withCredentials:true
});

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  // baseURL: `${process.env.DJANGO_BACKEND_URL}`,
  headers: {
    "Content-type": "application/json",
    
  },
});

const registerUser = async (user) => {
  try {
    const response = await api.post("register/", user);
    
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const loginUser = async (user) => {
  try {
    const response = await api.post("login/", user);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getLoggedUser = async (access_token) => {
  try {
    const response = await api.get("profile/", {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const changeUserPassword = async ({ actualData, access_token }) => {
  try {
    const response = await api.post("changepassword/", actualData, {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const sendPasswordResetEmail = async (user) => {
  try {
    const response = await api.post("send-reset-password-email/", user);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const resetPassword = async ({ actualData, id, token }) => {
  try {
    const response = await api.post(
      `/reset-password/${id}/${token}/`,
      actualData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
// import Cookies from "js-cookie";

const cookies = new Cookies();
console.log(cookies.getAll());
export {
  registerUser,
  loginUser,
  getLoggedUser,
  changeUserPassword,
  sendPasswordResetEmail,
  resetPassword,
};

export { client };
