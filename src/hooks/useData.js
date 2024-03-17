import React, { useState, useEffect } from 'react';
import { DataFetchType } from '../constants';

export const useData = (type) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define an async function that fetches and processes the data
  async function fetchData() {
    try {
      setLoading(true);

      // Use the Fetch API to make a GET request to the JSON placeholder API
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );

      // Parse the response as JSON
      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    // Call the async function
    if (type === DataFetchType.FETCH) {
      fetchData();
    }
  }, [type]);

  return {
    loading,
    data,
    error,
  };
};
