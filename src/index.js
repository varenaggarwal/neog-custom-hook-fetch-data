import { StrictMode } from "react";
import ReactDOM from "react-dom";
import setupMockServer from "./mock-api/mock.server";

import App from "./App";

setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
