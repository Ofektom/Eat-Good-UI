import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/SignUpPage/Signup';
import Login from './components/LoginPage/Login';
import SignUps from './components/SignUpPage/SignUps';
import ProductDashboard from './components/DashBoard/ProductDashboard/ProductDashboard';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign" element={<SignUps />} />
          <Route exact path="/product-dashboard" element={<ProductDashboard />} />
        </Routes>
      </Router>
    </>
  );
}


export default App
