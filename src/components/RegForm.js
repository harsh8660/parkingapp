import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function RegForm() {
  const [data, setdata] = useState({
    DriverName: "",
    VehicleNumber: "",
  });
  const RegUser = async () => {
    console.log(data.DriverName);
    const res = await Axios.post("http://localhost:3001/RegVehicle", { data });
    if (res) alert("Vehicle Added Successfully");
    console.log(res);
    window.location.reload(false);
  };

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value.toUpperCase();
    setdata(newData);
  };
  return (
    <div className="RegForm">
      <div className="row">
        <div className="col">
          <input
            className="InputBox"
            placeholder="Vehicle Number"
            type="text"
            id="VehicleNumber"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <input
            className="InputBox"
            placeholder="Driver Name"
            type="text"
            id="DriverName"
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="btn btn-danger" id="RegUserBtn" onClick={RegUser}>
        Submit
      </button>
      <div className="row">
        <div className="col">
        <Link to="/ParkedVehicles">
          <button className="btn btn-success" id="RegUserBtn2">
            Show Parked Vehicles
          </button>
        </Link>
        </div>
        <div className="col" >
        <Link to="/ShowAll">
          <button className="btn btn-success" id="RegUserBtn2">
            Show Data
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
