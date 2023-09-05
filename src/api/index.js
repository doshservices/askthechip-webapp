import axios from "axios";
import { useAuth } from "../contexts/AuthContext/AuthContext";

export const BASE_URL = "https://askthechip-hvp93.ondigitalocean.app/";

export const getUserById = async (userId) => {
  const { token } = useAuth();
  try {
    const res = await fetch(
      `https://askthechip-hvp93.ondigitalocean.app/api/users/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.ok) {
      console.log("Successful!");
      const resData = await res.json();
      return { response: resData.data, loading: false }
    }
    return `Something went wrong ${res}`
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function requestMentorship(data, token) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/api/users/request-mentorship`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log(res.data);
      resolve(res.data);
    })
      .catch((err) => {
        console.log(err);
        reject(new Error(err));
      });
  });
}

export const deletePost = async (id, token) => {
  try {
    const response = await fetch(`https://askthechip-hvp93.ondigitalocean.app/api/post/delete-post?postId=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
    if (response.ok) {
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
