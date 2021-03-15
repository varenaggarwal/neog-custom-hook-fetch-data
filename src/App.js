import "./styles.css";
import { useFetchData } from "./useFetchData";

export default function App() {
  const { response } = useFetchData();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {console.log({ response })}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
