import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {


    return ( <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">

      <ul className="navbar-nav nav-ul">
        <li className="nav-item nav-link">        
         <Link to="/">Add Student</Link>
        </li>
        <li className="nav-item nav-link">        

          <Link to="/Studentlist">All Students</Link>
        </li>
          <li className="nav-item nav-link">        

          <Link to="/userstatus">All Students status</Link>
        </li>
    
      </ul>
    </nav>
    </div> );
}
 
export default Navbar;