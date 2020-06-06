import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import axios from "axios";

const Conncon = () => {
  const [wifiscan, setWifiScan] = useState([]);
  let history = useHistory();

  return (
    <div>
      <div className="networkshead">Networks list</div>
     
      <div className="netconnectbtndiv">
        <button className="netconnectbtn">Connect</button>
        <button
          className="netconnectbackbtn"
        
        >
          Scan
        </button>
      </div>
    </div>
  );
};

export default Conncon;
