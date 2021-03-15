import { useEffect, useState } from "react";
import axios from "axios";

export function useFetchData() {
  const [response, setResponse] = useState();
  useEffect(() => {
    (async function () {
      const serverResponse = await axios.get("https://swapi.dev/api/people/1/");
      setResponse(() => serverResponse);
    })();
  }, []);
  return response;
}
