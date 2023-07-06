import axios from "axios";

export const BASE_URL = "http://askthechip-endpoint-production.up.railway.app";

export const deletePost = async (id, token) => {
  try {
    const response = await fetch(`http://askthechip-endpoint-production.up.railway.app/api/post/delete-post?postId=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
    if(response.ok) {
      const resData = await response.json();
      console.log(resData);
      console.log(resData.data);
      console.log("Post deleted successfully");
      return resData;
    }
  } catch (error) {
    console.log(error);
  }
}

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
