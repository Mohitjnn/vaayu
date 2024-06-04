import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "/data.json";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (api) => {
    try {
      const res = await axios.get(api);
      setResponse(res.data);
      // console.log(res.data);
    } catch (error) {
      setError(error.message);
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchData(baseUrl);
  }, []);

  return { response, error };
};

export default useAxios;
