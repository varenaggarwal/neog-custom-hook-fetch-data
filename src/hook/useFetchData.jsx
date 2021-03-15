import { useEffect, useState } from "react";
import axios from "axios";

export function useFetchData() {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const serverResponse = await axios.get(
          "https://swapi.dev/api/people/1/"
        );
        setResponse(() => serverResponse);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);
  return { response, isLoading, error };
}
