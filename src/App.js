import "./styles.css";
import { useFetchData } from "./hook/useFetchData";

export default function App() {
  const { response } = useFetchData();
  if (!response) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{response.data.name}</h2>
      {console.log({ response })}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
