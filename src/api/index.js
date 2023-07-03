import axios from "axios";

export const BASE_URL = "http://askthechip-endpoint-production.up.railway.app";


export async function signUp(data) {
  return new Promise((resolve, reject) => {
    axios
      .post(`/api/users/`, data)
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(new Error(err));
        console.log(err);
      });
  });
}
export async function getUsers(data) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/users/`, data)
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(new Error(err));
        console.log(err);
      });
  });
}

export async function login(data) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/api/users/login`, data)
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(new Error(err));
      });
  });
}
