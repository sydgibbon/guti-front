import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserContextProvider } from "./migrate/infrastructure/contexts/userContext";
import { RouterProvider } from "react-router-dom";
import router from "./migrate/infrastructure/routes";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);

