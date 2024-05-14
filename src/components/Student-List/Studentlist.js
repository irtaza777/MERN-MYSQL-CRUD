import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useEffect } from 'react';
const Studentlist = () => {
    const [students, setStudents] = useState([]);
    const [studentupdate, setStudentupdate] = useState(false);


    useEffect(() => {

        const headers = {
            "Content-Type": "application/json",

        };
        const url = `http://localhost:4500/Student-List`;

        axios.get(url, { headers }).then((res) => setStudents(res.data))




    }, [studentupdate])
    const Deletestudent = async (uid) => {
        const headers = {
            "Content-Type": "application/json",

        };

        axios.delete(`http://localhost:4500/Delete-Student/${uid}`, { headers })
            .then((res) => setStudentupdate(!studentupdate))

    }

    return (<div className="container" >
        <br></br>
        <h3>Students</h3>
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Student id</th>
                    <th>Student Name</th>
                    <th>Student Email</th>
                    <th>Student CNIC</th>
                    <th>Student Cell_no</th>
                    <th>Student Class</th>
                    <th>Student ROll_no</th>
                    <th>Operations</th>



                </tr>
            </thead>


            <tbody>


                {
                    students.length > 0 ? students.map((item, index) =>
                        <tr>


                            <td>{index + 1} </td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>

                            <td>{item.CNIC}</td>
                            <td>{item.cell_no}</td>
                            <td>{item.myclass}</td>
                            <td>{item.roll_no}</td>
                            <td><Link to={"/updatestudent/" + item.id}><button className="btn btn-success">Edit</button></Link>
                            <button class="btn btn-danger m-2" onClick={() => Deletestudent(item.id)}>Delete</button>
                            </td>

                        </tr>

                    ) : <h1>No Student,s yet</h1>}
            </tbody>
        </Table>  </div >);
}

export default Studentlist;