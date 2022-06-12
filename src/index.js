import reactDom from "react-dom";
import App from "./App";
import "./index.css";

import { ContextProvider } from "./context/ContextProvider";
reactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
