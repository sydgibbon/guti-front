import { Outlet } from "react-router-dom";
import { axiosPrivate } from "./api/axios";
 

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
    <>
    
      <Outlet />
    </>
  );
};

export default App;
