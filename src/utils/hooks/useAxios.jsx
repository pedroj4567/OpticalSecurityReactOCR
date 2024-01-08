// useAxios hook

import { useState, useEffect } from 'react';
import axios from 'axios';
// const baseURL = process.env.BASE_URL_API_PRODUCTION;

axios.defaults.baseURL = "https://opticalshiledservice.onrender.com/api/v1"

const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        axios({
            method,
            url,
            data: body ? JSON.parse(body) : null,
            headers: headers ? JSON.parse(headers) : {},
            withCredentials: true,  // Try setting this to see if it bypasses CORS
        })
        .then((res) => {
            setResponse(res.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading };
};

export default useAxios;