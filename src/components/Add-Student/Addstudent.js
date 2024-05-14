import React from 'react';
import { Container } from 'react-bootstrap';
const Addstudent = () => {
    return (

        <div>
            <br></br>
            <h1>Add Student</h1>

            <Container>
                <form>
                    <br></br>
                    <div class="form-group">
                        <input type="TEXT" class="form-control" placeholder="name"
                            required />

                    </div>
                    <br></br>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="email"
                            required />

                    </div>
                    <br></br>
                    <div class="form-group">
                        <input type="number" class="form-control" placeholder="CNIC"
                            required />

                    </div>
                    <br></br>
                    <div class="form-group">
                        <input type="number" class="form-control" placeholder="Contact number"
                            required />

                    </div>
                    <br></br>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="class"
                            required />

                    </div>
                    <br></br>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Roll No"
                            required />

                    </div>
                    <br></br>
                    <button onClick type="submit" className="btn btn-success m-2">Add Student</button>

                </form>
            </Container>
        </div>
    );
}

export default Addstudent;