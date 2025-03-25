import axios from "axios";

const instance = axios.create({
  baseURL: "https://evangadiforum.tadetek.com/",
})

export default instance;
