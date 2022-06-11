// import React, { UseRaf } from "react";
import { Nav } from "react-bootstrap";
import './App.css';
import Sidebar from './Components/Sidebar';
import { Navbar } from "react-bootstrap";
import { Link, Route, Routes, nav } from "react-router-dom";
// import Home from "./Components/Home";
function App() {
  return (
    <>
      <div className='shanu'>
        <Navbar.Brand>!!! SIMPLE ** PROJECT !!!</Navbar.Brand><br></br>
        <Navbar.Brand>!!! FROM @ tnpLab. !!!</Navbar.Brand>
      </div>
      <div className="App">
        <Sidebar />
      </div>
    </>
  )

    //  < Nav.Link > <Link to="/">Home</Link>
}

<Routes>
  {/* <Route path="/" element={<EmployeeList />} /> */} */
   {/* <Route path="/" element={<Home />} /> */}
  {/* <Route path="/Services" element={<Services />} /> */}
  {/* <Route path="/post" element={<Posts />} /> */}
  {/* <Route path="/contactus" element={<Contactus />} /> */}
 </Routes>

export default App;
