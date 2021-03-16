import { useEffect, useState } from "react";
import axios from "axios";

export function usePostData(serverUrl, postData) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(null);

  useEffect(() => {
    (async function () {
      setIsLoading(() => true);
      try {
        const serverRes = await axios.post(serverUrl, postData);
        setResponse(() => serverRes);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(() => false);
      }
    })();
  }, [serverUrl, postData]);

  return { response, isLoading };
}
