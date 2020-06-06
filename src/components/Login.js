import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";

import { Route, Redirect, Switch, useHistory } from "react-router-dom";

function Login() {
  const [wifistatus, setWifiStatus] = useState();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [redir, setRedir] = useState(false);
  let history = useHistory();

  console.log(wifistatus);

  const login = () => {
    axios({
      method: "POST",
      url: "http://192.168.0.101:3000/api/login",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        username: user,
        password: pass
      }
    })
      .then(response => {
        //   localStorage.setItem("token", response.data.user.token);
        // localStorage.token = response.data.user.token
        console.log(response);
        localStorage.setItem("token", response.data.token);
        history.push("/sess");
      })
      .catch(error => {
        console.log(error);
      });
  };

  // return <div>{wifistatus ? <Home /> : <Connected />}</div>;
  return (
    <>
      <div className="login-root">
        <div className="login-head">Login</div>
        <div className="login-body">
          <label className="loginkey">Username</label>
          <input
            className="loginvalue"
            onChange={e => setUser(e.target.value)}
          ></input>
          <label className="loginkey">Password</label>
          <input
            className="loginvalue"
            onChange={e => setPass(e.target.value)}
            type="password"
          ></input>
        </div>
      </div>
      <div className="login-btndiv">
        <button className="login-btn" onClick={login}>
          LOGIN
        </button>
      </div>
    </>
  );
}

export default Login;
