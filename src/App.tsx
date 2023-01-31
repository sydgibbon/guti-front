import { RouterProvider } from "react-router-dom";
import { axiosPrivate } from "./api/axios";
import Main from "./migrate/infrastructure/components/dashboard/Main";
import router from "./migrate/infrastructure/routes";

const App = () => {
  axiosPrivate
    .get("http://127.0.0.1:8000/api/assets/computers/")
    .then(function (response: any) {
      // handle success
    })
    .catch(function (error: any) {
      // handle error
    });

  return (
    <div className="app">
      {" "}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
