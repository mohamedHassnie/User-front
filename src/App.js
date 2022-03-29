import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import Dashbord from "./Dashbord";
import Sideebar from "./Sideebar";
import Ajout from "./Ajout";
import InterfaceAdmin from "./InterfaceAdmin";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Dashbord" element={<Dashbord />}></Route>
        <Route path="/Sideebar" element={<Sideebar />}></Route>
        <Route path="/Ajout" element={<Ajout />}></Route>
        {/* <ProtectedRoute
          path="/interfaceAdmin"
          element={interfaceAdmin}
        ></ProtectedRoute> */}
        <Route path="/interfaceAdmin" element={<InterfaceAdmin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
