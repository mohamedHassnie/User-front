import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isAuthenticated");
  };
  return (
    <div>
      {!localStorage.getItem("isAuthenticated") ? (
        <nav
          className="navbar navbar-expand bg-secondary<"
          aria-label="Second navbar example"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample02"
              aria-controls="navbarsExample02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item mx_3"></li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className="navbar navbar-expand bg-dark"
          aria-label="Second navbar example"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample02"
              aria-controls="navbarsExample02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item mx_3">
                  <h2 style={{ color: "DodgerBlue" }}>Analyse Génetique</h2>
                </li>
                <li className="nav-item mx_8">
                  <Link
                    style={{
                      position: "relative",
                      left: "200px",
                      color: "white",
                      fontSize: "18px",
                      margin: "15px 16px",
                      padding: "10px , 16px",
                      borderRadius: "99px",
                    }}
                    to="/Dashbord"
                  >
                    Dashbord
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    style={{
                      position: "relative",
                      left: "200px",
                      color: "white",
                      fontSize: "18px",
                      margin: "15px 16px",
                      padding: "10px , 16px",
                      borderRadius: "99px",
                    }}
                    to="/Ajout"
                  >
                    Add-User
                  </Link>
                </li>
                <form>
                  <button
                    style={{
                      position: "relative",
                      left: "550px",
                      color: "white",
                      backgroundColor: "red",
                      width: "100px",
                      boder: "5px",
                      fontSize: "20px",
                      borderRadius: "70%",
                    }}
                    onClick={logout}
                  >
                    Logout
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
export default Navbar;
