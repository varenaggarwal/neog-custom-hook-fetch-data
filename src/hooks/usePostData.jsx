import { useEffect, useState } from "react";
import axios from "axios";

export function usePostData(serverUrl, postData) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  (async function () {
    setIsLoading(() => true);
    try {
      const serverRes = await axios.post(serverUrl, postData);
      setResponse(() => serverRes);
    } catch (error) {
      console.error(error);
      // setIsError((() => error);
    } finally {
      setIsLoading(() => false);
    }
  })();
  return { response, isLoading };
}
