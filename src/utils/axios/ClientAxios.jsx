import axios from 'axios'
const BASE_URL_API = import.meta.env.VITE_API_URL;
const tokenAuth = import.meta.env.VITE_API_TOKEN

const clientAxios = axios.create({
    baseURL:`${BASE_URL_API}/api/v1`, 
    headers:{
        Authorization : Bearer `${tokenAuth}`
    }
})

export default clientAxios;