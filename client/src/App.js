import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import all the necessary components
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Services from './screens/Services';
import Packages from './screens/Packages';
import ContactUs from './screens/ContactUs';
import Reservation from './screens/Reservation';
import Login from './screens/LoginPage';
import SignUp from './screens/SignUp';
import Create from './screens/Create';
import EditPost from './screens/EditPost';
import LoginUser from './screens/LoginUser';
import Admin from './screens/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/loginuser" element={<LoginUser />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
