import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/SignUpPage/Signup';
import Login from './components/LoginPage/Login';
import CartSection from './components/DashBoard/CartSection/CartSection';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<CartSection />} />
        </Routes>
      </Router>
    </>
  );
}


export default App
