import "./styles.css";
import { useFetchData } from "./hooks/useFetchData";
import { usePostData } from "./hooks/usePostData";

export default function App() {
  const { response, isLoading } = useFetchData("/api/addresses");
  console.log({ response, isLoading });
  if (!response || isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      {console.log({ res: response.data.addresses[0] })}
      <ul>
        {response.data.addresses.map((address) => (
          <li key={address.id}>{address.city}</li>
        ))}
      </ul>
    </div>
  );
}
