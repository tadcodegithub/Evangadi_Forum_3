import axios from 'axios';
const axiosBase = axios.create({
    baseURL:'http://localhost:5173/api'
})

export default axiosBase;