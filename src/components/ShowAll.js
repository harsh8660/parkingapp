import Axios from "axios";
import React, { useEffect, useState } from "react";
export default function AllVehicles() {
    const [total,setTotal]=useState(0)
  const [datalist, setDataList] = useState([]);
  const getData = async () => {
    const res = await Axios.get(`http://localhost:3001/getAll`);
    console.log(res);
    setTotal(res.data.length)
    setDataList(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">SrNo</th>
          <th scope="col">Driver Name</th>
          <th scope="col">Vehicle Number({total})</th>
          <th scope="col">Entry Time</th>
          <th scope="col">Check Out Time</th>
        </tr>
      </thead>
      <tbody>
        {datalist.map((val, key) => (
          <tr val={val} key={key}>
            <td>{key + 1}</td>
            <td>{val.DriverName}</td>
            <td>{val.VehicleNumber}</td>
            <td>{val.EntryTime}</td>
            <td>{val.CheckoutTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
