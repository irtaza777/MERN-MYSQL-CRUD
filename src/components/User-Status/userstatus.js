import React from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useEffect } from 'react';

const Userstatus = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {

        const headers = {
            "Content-Type": "application/json",

        };
        const url = `http://localhost:4500/userstatus`;

        axios.get(url, { headers }).then((res) => setStudents(res.data))




    }, [])

    return (<div className="container" >
        <br></br>
        <h3>Joining three tables(students,student_status,sports)</h3>
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
                    <th>Status id</th>
                    <th>Student status</th>
                    <th>Sports_id</th>

                    <th>Sports name</th>



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
                            <td>{item.status_id}</td>
                            <td>{item.status}</td>
                            <td>{item.student_sports_id}</td>

                            <td>{item.sport_name}</td>



                        </tr>

                    ) : <h1>No Student,s status yet</h1>}
            </tbody>
        </Table>  </div >);
}

export default Userstatus;