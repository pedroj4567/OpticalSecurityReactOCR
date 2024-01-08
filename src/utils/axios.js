// import { Axios } from "axios";

// const axios = new Axios();

// const axiosServices = {
    
//     Get: async (url,request) => {
//         const response = await axios.get();
//     },

// }

// export default axiosServices;

import axios from 'axios';
// const BASE_URL = 'http://localhost:3500';
const BASE_URL = process.env.BASE_URL_API_PRODUCTION;

export default axios.create({
    baseURL: BASE_URL
});

// export const axiosWithHeaders = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true
// });