const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})
con.connect((err) => {
    if (err) {
        console.warn(err)
    }
    else {
        console.log("ok")
    }
})