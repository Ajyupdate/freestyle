import { useState, useEffect } from "react";
import axios from "axios";

const usePost = (url:any) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (postData: any) => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, postData);
      console.log(response)
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      // setError(error);
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, postData };
};

export default usePost;
