import "./styles.css";
import { useFetchData } from "./hooks/useFetchData";
import { usePostData } from "./hooks/usePostData";

export default function App() {
  const { response, isLoading, setUrl } = useFetchData("/api/addresses");
  console.log({ response, isLoading });
  // const postRes = usePostData("/api/addresses", { address: "Mars" });

  const refreshHandler = () => {
    setUrl(() => "/api/addresses");
    console.log("refresh:", { response, isLoading });
  };

  if (!response || isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <ul>
        {response.data.addresses.map((address) => (
          <li key={address.id}>{address.city}</li>
        ))}
      </ul>
      <button onClick={refreshHandler}>Refresh</button>
    </div>
  );
}
