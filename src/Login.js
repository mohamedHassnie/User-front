import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginstatus, setLoginstutus] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/interfaceAdmin`;
    navigate(path);
    window.location.reload();
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        "http://10.10.50.24:3017/login",
        /*(headers = { "X-localization": localStorage.getItem("lan") })*/
        data
      );
      if (response) {
        localStorage.setItem("accessToken", response.data.accessToken);
        Redirect("/interfaceAdmin");
        console.log(response.data);
        setLoginstutus(response.data[0].email);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container">
      <div className="login">
        <form onSubmit={HandleSubmit}>
          <h1>Login</h1>
          <div className=" aa ">
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="toto@exemple.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <br />
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input
            id="envoyer"
            type="submit"
            className="btn btn-primary btn-style mt-4"
          />
        </form>
      </div>
    </div>
  );
}
export default Login;
