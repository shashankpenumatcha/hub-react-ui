import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";

function Default() {
  const [wifistatus, setWifiStatus] = useState();
  let history = useHistory();
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://192.168.0.101:3000/api/wifi/status",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.token}`
      }
    })
      .then(response => {
        setWifiStatus(response.data.network.ssid);
        console.log(response);
        redir();
      })
      .catch(error => {
        console.log(error);
        history.push("/notconn");
      });
  });

  console.log(wifistatus);

  const redir = () => {
    if (wifistatus.length > 0) {
      console.log(wifistatus);
      history.push("/connected");
    }
  };

  console.log(wifistatus);

  // return <div>{wifistatus ? <Home /> : <Connected />}</div>;
  return <div>Loading....</div>;
}

export default Default;
