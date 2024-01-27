import clientAxios from "../../utils/axios/ClientAxios";
import { useState } from 'react';


const useAxios = () => {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);

 const fetchData = async (endpoint,data) => {
    setLoading(true);
    try {
      const response = await clientAxios.get(endpoint, data || {});
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
 };

 const createData = async (endpoint, newData) => {
    setLoading(true);
    try {
      const response = await clientAxios.post(endpoint, newData);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
 };

 const updateData = async (endpoint, updatedData) => {
    setLoading(true);
    try {
      const response = await clientAxios.patch(endpoint, updatedData);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
 };

 const deleteData = async (endpoint) => {
    setLoading(true);
    try {
      await clientAxios.delete(endpoint);
      setData(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
 };

 return { data, loading, error, fetchData, createData, updateData, deleteData };
};

export default useAxios;