import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, { skip = false } = {}, opt = {}) => {
  const [data, setData] = useState([]);
  const [options] = useState(opt);
  const [loading, setLoading] = useState(false);
  const refetch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (skip) return;
    fetchData();
  }, [skip, url, options]);
  return { data, refetch, loading };
};
