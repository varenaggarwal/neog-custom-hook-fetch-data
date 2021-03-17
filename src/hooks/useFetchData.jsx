import { useEffect, useState } from "react";
import axios from "axios";

export function useFetchData(serverUrl) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(serverUrl);
  useEffect(() => {
    console.log("in the custom hook");
    (async function () {
      setIsLoading(() => true);
      try {
        const serverResponse = await axios.get(url);
        setResponse(() => serverResponse);
        setIsLoading(() => false);
      } catch (error) {
        setError(() => error);
        setIsLoading(() => false);
      }
    })();
  }, [url]);
  return { response, isLoading, error, setUrl };
}
