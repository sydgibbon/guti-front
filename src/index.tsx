import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserContextProvider } from "./migrate/infrastructure/contexts/userContext";
import App from "./App";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
    <UserContextProvider>
      <App/>
    </UserContextProvider>
  /* </React.StrictMode> */
);

