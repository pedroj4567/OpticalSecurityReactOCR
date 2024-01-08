// useAxios hook

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// // const baseURL = process.env.BASE_URL_API_PRODUCTION;

// // axios.defaults.baseURL = "https://opticalshiledservice.onrender.com/api/v1"
// axios.defaults.baseURL = "http://localhost:3200/api/v1/"

// const useAxios = ({ url, method, body = null, headers = null }) => {
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState('');
//     const [loading, setloading] = useState(true);

//     const fetchData = () => {
//         axios[method](url, JSON.parse(headers), JSON.parse(body))
//             .then((res) => {
//                 setResponse(res.data);
//             })
//             .catch((err) => {
//                 setError(err);
//             })
//             .finally(() => {
//                 setloading(false);
//             });
//     };

//     useEffect(() => {
//         fetchData();
//     }, [method, url, body, headers]);

//     return { response, error, loading };
// };

// export default useAxios;
import { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3200/api/v1/";

const useAxios = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const execute = async ({ url, method, body = null, headers = null }) => {
        setLoading(true);
        try {
            const res = await axios({
                method,
                url,
                headers: JSON.parse(headers),
                data: JSON.parse(body)
            });
            setResponse(res.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        response,
        error,
        loading,
        execute
    };
};

export default useAxios;