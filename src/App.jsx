import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/LoginPage/Login';
import SignUps from './components/SignUpPage/SignUps';
import ProductDashboard from './components/DashBoard/ProductDashboard/ProductDashboard';
import SignUp from './components/SignUpPage/SignUp';
import ProductView from './components/ProductVIew/ProductView';
import AddProduct from './components/AddProduct/AddProduct';
import Landing from './pages/Landing';
import Sidebar from './components/DashBoard/Sidebar/Sidebar';
import DashBoard from './pages/DashBoard';
import AdminDashboard from './pages/AdminDashboard';
import HomeComponent1 from './components/DashBoard/HomeComponent1/HomeComponent1';
import HomeComponent2 from './components/DashBoard/HomeComponent2/HomeComponent2';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign" element={<SignUps />} />
          <Route exact path="/product-dashboard" element={<ProductDashboard />} />
          <Route exact path="/product-view" element={<ProductView />} />
          <Route exact path="/product-add" element={<AddProduct />} /> 
          <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/side" element={<Sidebar />} />
          <Route exact path="/dash" element={<DashBoard />} />
          <Route path="/cart/:cartId" component={HomeComponent2} />
        </Routes>
      </Router>
    </>
  );
}


export default App
