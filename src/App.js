import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Main from "./component/dashboard/Main";
import axiosPrivate from "./api/axios";
import Assets from "./pages/Assets";
import SearchCard from "./component/dashboard/assets/SearchCard";
import ComputerForm from "./component/forms/assets/ComputerForm";
import PrintersForm from "./component/forms/assets/PrintersForm";
import CartridgeForm from "./component/forms/assets/CartridgeForm";
import ConsumablesForm from "./component/forms/assets/ConsumablesForm";
import PassiveDevicesForm from "./component/forms/assets/PassiveDevicesForm";
import PhoneForm from "./component/forms/assets/PhoneForm";



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
        <Route path="/assets" element={<Main content={ <Assets />} />} />
        <Route path="/assets" element={<Main content={ <SearchCard />} />} />
        <Route path="/printers" element={<Main content={ <PrintersForm />} />} />
        <Route path="/computers" element={<Main content={ <ComputerForm />} />} />
        <Route path="/cartridges" element={<Main content={ <CartridgeForm />} />} />
        <Route path="/consumables" element={<Main content={ <ConsumablesForm />} />} />
        <Route path="/passivedevices" element={<Main content={ <PassiveDevicesForm />} />} />
        <Route path="/phone" element={<Main content={ <PhoneForm />} />} />
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
