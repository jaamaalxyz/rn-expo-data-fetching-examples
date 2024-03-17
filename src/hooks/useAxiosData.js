import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxiosData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define an async function that fetches and processes the data with axios
  async function fetchData() {
    try {
      setLoading(true);

      // Use the Axios library to make a GET request to the JSON placeholder API
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );

      // Parse the response as JSON
      const data = response.data;

      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Call the async function
    fetchData();
  }, []);

  return {
    loading,
    data,
    error,
  };
};
