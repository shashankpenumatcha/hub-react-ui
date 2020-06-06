import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useHistory, Link, Route } from "react-router-dom";

const Connected = () => {
  const [wifistatusinfo, setWifiStatusInfo] = useState([]);

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
        console.log(response);
        setWifiStatusInfo(response.data.network);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <div className="ppp">
        <div className="header">Connected!</div>
        <div></div>
        <div className="connected">
          Your are connected to the following Network
        </div>
        <div className="netinfo">
          <label className="lblkey">SSID</label>
          <input className="lblval" defaultValue={wifistatusinfo.ssid}></input>
          <label className="lblkey">IP Address</label>
          <input
            className="lblval"
            defaultValue={wifistatusinfo.ip_address}
          ></input>
        </div>
        <div className="bckbtndiv">
          <button className="bckbtn" onClick={() => history.push("/connect")}>
            Connect to different network
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connected;
