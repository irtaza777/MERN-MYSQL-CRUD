import './App.css';
import { Route, Routes } from 'react-router-dom';
import Addstudent from './components/Add-Student/Addstudent';
import Studentlist from './components/Student-List/Studentlist';
import Updatestudent from './components/Update-Student/Updatestudent';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Routes>
    <Route path="/" element={<Addstudent/>} ></Route>
    <Route path="/Studentlist" element={<Studentlist/>} ></Route>
    <Route path="/updatestudent/:id" element={<Updatestudent/>} ></Route>

  </Routes>
  
  
   </div>
  );
}

export default App;
