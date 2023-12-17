import { Axios } from "axios";

const axios = new Axios();

const axiosServices = {
    
    Get: async (url,request) => {
        const response = await axios.get();
    },


}

export default axiosServices;