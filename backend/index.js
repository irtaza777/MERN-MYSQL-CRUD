const con = require("./db/config");
const express = require("express");
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors());


app.post("/Add-Student", (req, resp) => {

    const sql = "INSERT INTO students(`name`,`email`,`CNIC`,`cell_no`,`myclass`,`roll_no`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.CNIC,
        req.body.cell_no,
        req.body.myclass,
        req.body.roll_no

    ]
    con.query(sql, [values], (err, data) => {
        if (err) return resp.json(err);
        return resp.json(data);
    })

})

app.get("/Student-List", (req, resp) => {

    const sql = "SELECT * from students";
    con.query(sql, (err, data) => {
        if (err) return resp.json(err);
        return resp.json(data);
    })
})
app.get("/update-student/:id", (req, resp) => {
    const studentId = req.params.id
    const sql = "SELECT * from students where id=?";
    con.query(sql, [studentId], (err, data) => {
        if (err) return resp.json(err);
        return resp.json(data);
    })
})
app.put("/update-student/:id", (req, resp) => {
    //console.log("updates")

    const studentId = req.params.id
    //console.log(studentId)

    const sql = "UPDATE students SET ? where id=?";
    const changes = [{
        name:req.body.name,
        email:req.body.email,
      CNIC:  req.body.CNIC,
     cell_no:   req.body.cell_no,
      myclass:  req.body.myclass,
       roll_no: req.body.roll_no
}]

    con.query(sql, [...changes, studentId], (err, data) => {
        if (err) return resp.json(err);
        return resp.json(data);
    })
})

app.delete("/Delete-Student/:studentid", (req, resp) => {
    const sql = "DELETE from students where id=?";
    const studentId = req.params.studentid

    con.query(sql, [studentId], (err, data) => {
        if (err) return resp.json(err);
        return resp.json(data);
    })
})
app.get("/userstatus", (req, resp) => {
    //cross join
   // const sql = "SELECT * from students join student_status on students.id=student_status.id";
 //left join
  // const sql = "SELECT students.id, name, status_id,status  from students left join student_status on students.id=student_status.id";
  //const sql = "SELECT students.id, student_status.status_id, student_status.status  from students right join student_status on student_status.status_id=students.status_id";
  const sql = "SELECT * from students join student_status on students.id=student_status.id join sports on student_status.id=sports.id ORDER BY sports.id";

   con.query(sql, (err, data) => {
        if (err) return resp.json(err);
        return resp.json(data);
    })
})
app.listen(4500);