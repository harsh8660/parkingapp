import React, { useEffect, useState } from "react";
import Axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
export default function ShowVehicle() {
    const [total,setTotal]=useState(0)
  const [datalist, setDataList] = useState([])
  const getData = async () => {
    const res = await Axios.get("http://localhost:3001/getData");
    console.log(res);
    
    setTotal(res.data.length)
    setDataList(res.data);
    
  };
  const Unparked=async(id)=>{
    console.log(id)
    const res=await Axios.put(`http://localhost:3001/CheckOut/${id}`)
    if(res){
    alert('Vehicle CheckOut Successfull')
    
    }
    else{
        alert('Error Occurred')
    }

  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="VehicleTable">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">SrNo</th>
            <th scope="col">Driver Name</th>
            <th scope="col">Vehicle Number({total})</th>
            <th scope="col">Entry Time</th>
            <th scope="col">Check Out</th>
          </tr>
        </thead>
        <tbody>
          {datalist.map((val,key) => (
            <tr val={val} key={key}>
              <td>{key+1}</td>
              <td>{val.DriverName}</td>
              <td>{val.VehicleNumber}</td>
              <td>{val.EntryTime}</td>
              <td><IconButton onClick={()=>Unparked(val.id)}><DeleteIcon/></IconButton></td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
