import axios from "axios"
const BASE_URL = import.meta.env.BASE_URL
const instance = axios.create({
  baseURL: "https://evangadiforum.tadetek.com",
})

export default instance
