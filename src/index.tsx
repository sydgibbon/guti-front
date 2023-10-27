import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./infrastructure/contexts/userContext";
import i18n from "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <UserContextProvider>
      <App />
  </UserContextProvider>
  /* </React.StrictMode> */
);
