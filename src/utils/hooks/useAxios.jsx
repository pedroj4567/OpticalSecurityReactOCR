


import { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = "https://opticalshiledservice.onrender.com/api/v1";
axios.defaults.baseURL = "http://localhost:3200/api/v1/";
// axios.defaults.baseURL = "https://558f-186-92-40-5.ngrok-free.app/api/v1/";


const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios[method](url, headers, JSON.parse(body))
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

   

    return { response, error, loading, fetchData };
};

export default useAxios;