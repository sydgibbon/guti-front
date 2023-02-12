import { RouterProvider } from "react-router-dom";
import router from "./migrate/infrastructure/routes";

const App = () => {
  
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
