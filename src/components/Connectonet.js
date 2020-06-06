import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import axios from "axios";
import "./connectonet.css"

const Connectonet = () => {
  const [wifiscan, setWifiScan] = useState([]);
  let history = useHistory();
  const [selector, setSelector] = useState("");
  const [selclass, setSelClass] = useState("");
  const [password, setPassword] =useState("")
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://192.168.0.101:3000/api/wifi/scan",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.token}`
      }
    })
      .then(response => {
        console.log(response);
        setWifiScan(response.data.networks);
      })
      .catch(error => console.log(error));
  }, []);

  const scan = () => {
    axios({
      method: "GET",
      url: "http://192.168.0.101:3000/api/wifi/scan",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.token}`
      }

    })
      .then(response => {
        console.log(response);
        setWifiScan(response.data.networks);

      })
      .catch(error => console.log(error)); 
    }

    console.log(selector)

    const senddetailstohub =() => {
      axios({
        method: "POST",
        url: "http://192.168.0.101:3000/api/wifi/join",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.token}`
        },
        data: {
          ssid: selector,
          password: password
        }
    
      })
        .then(response => {
          console.log(response);
          setWifiScan(response.data.networks);
    
        })
        .catch(error => console.log(error)); 
      }
    
    
    
    
  
  
  console.log("selector is", selector);
  return (
    <div>
      <div className="networkshead">Networks list</div>
      {wifiscan ? wifiscan.map((i, id) => {
        return (
          <div key={id} onClick={()=> setSelector(i)}>
            <p value={id} className="netlabel">
              {i}
            </p>

            <hr />
          </div> 
        );

        
      }): <div> Hello</div>}
      {selector ? <div className="popup"><div className="apop">
        <div className="inputbox">
          <input className="wifiinput" placeholder="Enter wifi netword" defaultValue={selector} onChange={(e)=> setSelector(e.target.value)}></input>
          <input className="wifiinput" placeholder="Enter wifi netword" onChange={(e)=> setPassword(e.target.value)}></input>
        </div>
        <div className="wifibtns">
          <button onClick={senddetailstohub}>Confirm</button>
          <button>Cancel</button>

        </div>
        </div></div> : ""}
      <div className="netconnectbtndiv">
        <button className="netconnectbtn">Connect</button>
        <button
          className="netconnectbackbtn"
          onClick={scan}
        >
          Scan
        </button>
      </div>
    </div>
  );
};

export default Connectonet;
