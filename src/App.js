import "./App.css";
import React, { useState } from "react";
import ChangePassword from "./Components/ChangePassword";
import Navbar from "./Components/Navbar";
import Instructor from "./Components/Instructor";
import Register from "./Components/Register";
import Admin from "./Components/AdminPage";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddTrainingPlan from "./Components/AddTrainingPlan";
import Statistics from "./Components/Statistics";
import Welcome from "./Components/Welcome";
import Certificate from "./Components/Certificate";
import Certificate2 from "./Components/Certificates2";
import StudentHome from "./Components/StudentHome";
import AddCourse from "./Components/AddCourse";
import AddAdmin from "./Components/AddAdmin";
import AddInstructor from "./Components/AddInstructor";
import ReserveRoom from "./Components/ReserveRoom";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/AddAdmin" element={<AddAdmin />} />
          <Route path="/AddInstructor" element={<AddInstructor />} />
          <Route path="/AddCourse" element={<AddCourse />} />
          <Route path="/Report" element={<Certificate />} />
          <Route path="/Certificate" element={<Certificate2 />} />
          <Route path="/Student" element={<StudentHome />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="/AddTrainingPlan" element={<AddTrainingPlan />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Instructor" element={<Instructor />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/ReserveRoom" element={<ReserveRoom />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
