import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Updatestudent = () => {
    const [students, setStudents] = useState([]);


    const params = useParams();
    const navigate = useNavigate();

    //  const navigate = useNavigate();
    useEffect(() => {

        const headers = {
            "Content-Type": "application/json",

        };
        //updating post on post id
        const url = `http://localhost:4500/update-student/${params.id}`;

        axios.get(url, { headers }).then((res) => setStudents(res.data[0])
        )
    }, [params.id])
    const updateStudent=(e)=>{
        e.preventDefault();
        const headers = {
            "Content-Type": "application/json",

        };
        //updating api
        axios.put(`http://localhost:4500/update-student/${params.id}`,students,{headers})
           .then((res) => setStudents(res.data))
        //navigate("/Studentlist");
    }
    


    return (<div>
        <br></br>
        <h3>Edit post</h3>
        <br></br>
        <div className="container">
        <form onSubmit={updateStudent}  >


                <b>Name</b> <input type="text" className="form-control m-2"
                    value={students.name} name="name"
                    onChange={e => setStudents({ ...students, name: e.target.value })}
                    required />

                <b>Email</b><input type="text" className="form-control m-2"
                    value={students.email} name="email" onChange={e => setStudents({ ...students, email: e.target.value })}
                    required /> 

                <br></br>
                <b>CNIC</b><input type="number" className="form-control m-2" 
                    value={students.CNIC} name="CNIC" onChange={e => setStudents({ ...students, CNIC: e.target.value })}
                    required /> 

                <br></br>
                <b>Cell No</b><input type="number" className="form-control m-2" 
                    value={students.cell_no} name="cell_no" onChange={e => setStudents({ ...students, cell_no: e.target.value })}
                    required /> 

                <br></br>
                <b>Class</b><input type="number" className="form-control m-2" 
                    value={students.myclass} name="myclass" onChange={e => setStudents({ ...students, myclass: e.target.value })}
                    required /> 

                <br></br>
                <b>Roll Number</b><input type="number" className="form-control m-2" 
                    value={students.roll_no} name="roll_no" onChange={e => setStudents({ ...students, roll_no: e.target.value })}
                    required /> 

                <br></br>
                <button className='btn btn-success'>Update</button></form></div>
    </div>);
}

export default Updatestudent;