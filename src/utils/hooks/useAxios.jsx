


import { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = "https://opticalshiledservice.onrender.com/api/v1";
// axios.defaults.baseURL = "http://localhost:3200/api/v1/";
axios.defaults.baseURL = "https://5ff8-186-92-128-224.ngrok-free.app/api/v1";


const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);

    const fetchData = () => {
        setloading(true)
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