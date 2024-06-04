import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Dangnhap from './components/pages/Dangnhap'; // Import component Dangnhap


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dang-Nhap' element={<Dangnhap />} /> {/* Định tuyến cho trang DangNhap */}
      </Routes>
    </Router>
  );
}

export default App;
