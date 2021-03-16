import "./styles.css";
import { useFetchData } from "./hooks/useFetchData";
import { usePostData } from "./hooks/usePostData";

export default function App() {
  const { response, isLoading } = useFetchData(
    "https://swapi.dev/api/people/1/"
  );
  console.log({ response });
  console.log({ isLoading });

  const postReq = usePostData("");

  if (!response) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="App">
      <h1>Star Wars</h1>
      {/* {console.log({ isLoading })} */}
      <h2>{response.data.name}</h2>
      {/* {console.log({ response })} */}
    </div>
  );
}
