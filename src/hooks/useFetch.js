import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setLoading(false);
          setError(true);
          return;
        }
        setData(res.json());
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
