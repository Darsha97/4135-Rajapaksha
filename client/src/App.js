import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Branches from './Pages/Branches';
import Packages from './Pages/Packages';
import ContactUs from './Pages/ContactUs';
import Reservation from './Pages/Reservation';
import Login from './Pages/LoginPage';
import SignUp from './Pages/SignUp';
import Create from './Pages/create';
import EditPost from './Pages/editPost'; 
import LoginUser from './Pages/Login'; 
import Admin from './Pages/Admin';
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<Create/>} /> 
        <Route path="/edit/:id" element={<EditPost/>}/>
        <Route path="/loginuser" element={<LoginUser/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
