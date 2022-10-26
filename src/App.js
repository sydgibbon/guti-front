import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Main from "./component/dashboard/Main";
import AssetsDashboard from "./component/dashboard/AssetsDashboard";
import axiosPrivate from "./api/axios";
import Computers from "./pages/Computers";
import ComputerForm from "./component/forms/assets/ComputerForm";



function App() {
  axiosPrivate
    .get("http://127.0.0.1:8000/api/computers/")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  const postComputer = (e) => {
    e.preventDefault();
    console.log("posting...");
    axiosPrivate({
      method: "POST",
      url: "http://127.0.0.1:8000/api/computers/",
      data: {
        id: 0,
        entities_id: 1,
        name: null,
        serial: null,
        otherserial: null,
        contact: null,
        contact_num: null,
        users_id_tech: 1,
        groups_id_tech: 1,
        comment: "POSTED WITH AXIOS LAST TEST I HOPE",
        date_mod: null,
        autoupdatesystems_id: 11,
        locations_id: 1,
        networks_id: 11,
        computermodels_id: 11,
        computertypes_id: 0,
        is_template: 1,
        template_name: null,
        manufacturers_id: 11,
        is_deleted: 11,
        is_dynamic: 1,
        users_id: 1,
        groups_id: 1,
        states_id: 1,
        ticket_tco: null,
        uuid: null,
        date_creation: null,
        is_recursive: 1,
        last_inventory_update: null,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assets" element={<Main content={ <AssetsDashboard />} />} />
        <Route path="/computer-form" element={<Main content={ <ComputerForm />} />} />
        <Route path="/computers" element={<Main content={ <Computers />} />} />
      </Routes>
      <button
        type="button"
        className="bg-primary text-white rounded-full"
        onClick={postComputer}
      >
        POST WITH AXIOS
      </button>
    </Router>

  );
}

export default App;
