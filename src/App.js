import "./styles.css";
import { useFetchData } from "./hooks/useFetchData";

export default function App() {
  const { response, isLoading } = useFetchData(
    "https://swapi.dev/api/people/1/"
  );
  console.log({ response });
  console.log({ isLoading });
  if (!response) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* {console.log({ isLoading })} */}
      <h2>{response.data.name}</h2>
      {/* {console.log({ response })} */}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
