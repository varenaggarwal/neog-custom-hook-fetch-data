import { useEffect, useState } from "react";
import axios from "axios";

export function useFetchData(serverUrl) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      setIsLoading(() => true);
      try {
        const serverResponse = await axios.get(serverUrl);
        setResponse(() => serverResponse);
      } catch (error) {
        setError(() => error);
      } finally {
        setIsLoading(() => false);
      }
    })();
  }, []);
  return { response, isLoading, error };
}
