const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "parkingapp",
});
const TableName = "parkinginfo";
app.post("/RegVehicle", (req, res) => {
  console.log(req.body.data.DriverName);
  const Vehicle = req.body.data.VehicleNumber;
  const Name = req.body.data.DriverName;
  const date = new Date();
  const current_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const date_time = current_date + " " + current_time;
  const Query = `INSERT INTO ${TableName} (VehicleNumber,DriverName,parked,EntryTime) VALUES(?,?,?,?)`;
  db.query(Query, [Vehicle, Name, true,date_time], (err, result) => {
    console.log("yes");
    if (err) res.send({ err: err });

    res.send(result);
  });
});
app.get("/getData", (req, res) => {
  const Query = `SELECT * FROM ${TableName} WHERE parked=?`;
  db.query(Query, true, (err, result) => {
    if (err) res.send({ err: err });
    res.send(result);
  });
});
app.get('/getAll',(req,res)=>{
    const Query=`SELECT * FROM ${TableName}`;
    db.query(Query,(err,result)=>{
        if(err)
        res.send({err:err})
        res.send(result);
    })
})
app.put("/CheckOut/:id", (req, res) => {
  const id = req.params.id;
  const date = new Date();
  const current_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const date_time = current_date + " " + current_time;
  console.log(date_time);
  const Query = `UPDATE ${TableName} SET parked=?, CheckoutTime=? WHERE id=?`;
  db.query(Query, [false, date_time, id], (err, result) => {
    if (err) {
      console.log(err);
      res.send({ err: err });
    }
    res.send(result);
  });
});
app.listen(3001, (err) => {
  console.log("Server running 3001");
});
