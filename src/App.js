import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
