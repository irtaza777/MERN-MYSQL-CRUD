import './App.css';
import { Route, Routes } from 'react-router-dom';
import Addstudent from './components/Add-Student/Addstudent';

function App() {
  return (
    <div className="App">
  
  <Routes>
    <Route path="/" element={<Addstudent/>} ></Route>
  </Routes>
  
  
   </div>
  );
}

export default App;
