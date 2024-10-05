import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCallApi = (url, config) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(url, config);
        console.log(response);

        setData(response.data);
      } catch (err) {
        console.log('in error');

        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, config]);

  return { data, error, loading };
};
