import axios from "axios";

const absolutPath = "/";

const instance = axios.create({
  baseURL: absolutPath,
  method: "GET",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

const request = async (path, option = {}) => {
  try {
    const response = await instance(path, { ...option });
    return response.data;
  } catch (e) {
    console.log("request error is ", e);
    return Promise.reject(e);
  }
};

export default request;
