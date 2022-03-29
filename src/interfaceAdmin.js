import React from "react";
import { Navigate } from "react-router-dom";
import Ajout from "./Ajout";

function interfaceAdmin() {
  // protected Route
  if (!localStorage.getItem("isAuthenticated")) {
    return <Navigate to="/login" />;
  } else return <Ajout />;
}
export default interfaceAdmin;
