const con=require("./db/config");
const express = require("express");
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors());


app.post("/Add-Student", (req, resp) => {
    console.log(con)

const sql="INSERT INTO students(`name`,`email`,`CNIC`,`cell_no`,`myclass`,`roll_no`) VALUES(?)";
const values=[
    req.body.name,
    req.body.email,
    req.body.CNIC,
    req.body.cell_no,
    req.body.myclass,
    req.body.roll_no

]
con.query(sql,[values],(err,data)=>{
    if(err) return resp.json(err);
    return resp.json(data);
})

})

app.listen(4500);