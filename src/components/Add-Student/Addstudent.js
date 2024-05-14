import React from 'react';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addstudent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [CNIC, setCnic] = useState('');
    const [cell_no, setCell_no] = useState('');
    const [myclass, setMyclass] = useState('');
    const [roll_no, setRollno] = useState('');
const navigate=useNavigate();
    const addStudent=(e)=>{
        e.preventDefault();
        const data = {
     name,email,CNIC,cell_no,myclass,roll_no,
         };
     console.log(data);
         const headers = {
             "Content-Type": "application/json",
     
         };
         const url = "http://localhost:4500/Add-Student";
         axios.post(url, data, { headers })
             .then((res) => {
                 console.log(res.data)
                     ;
             })
             navigate("/Studentlist");

    }
  

    return (

        <div>
            <br></br>
            <h1>Add Student</h1>

            <Container>
                <form onSubmit={addStudent}>
                    <br></br>
                    <div className="form-group">
                        <input type="TEXT" className="form-control" placeholder="name"
                            value={name} onChange={(e)=>{setName(e.target.value)}} required />

                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="TEXT" className="form-control" placeholder="email"
                            value={email} onChange={(e)=>{setEmail(e.target.value)}} required />

                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="CNIC"
                            value={CNIC} onChange={(e)=>{setCnic(e.target.value)}} required />

                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Contact number"
                            value={cell_no} onChange={(e)=>{setCell_no(e.target.value)}} required />

                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Class"
                            value={myclass} onChange={(e)=>{setMyclass(e.target.value)}} required />

                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Roll no"
                            value={roll_no} onChange={(e)=>{setRollno(e.target.value)}} required />

                    </div>
                    <br></br>
                    <button  type="submit" className="btn btn-success m-2">Add Student</button>

                </form>
            </Container>
        </div>
    );
}

export default Addstudent;