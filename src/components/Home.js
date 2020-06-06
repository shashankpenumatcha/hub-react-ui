import React, { useEffect, useState } from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import logo from "./nonet2.png";

const Home = () => {
  let history = useHistory();
  return (
    <div>
      <div className="ppp">
        <div className="header">No Network!</div>
        <div className="nointlogo">
          <img src={logo}></img>
        </div>
        <div className="notconnected">
          Looks like the hub if not connected to your Wifi.. Click on connect to
          connect to hub
        </div>
        <div className="connbtndiv">
          <button className="connbtn" onClick={() => history.push("/connect")}>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
