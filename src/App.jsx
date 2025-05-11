import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUsPage from './pages/aboutus';

import './App.css';
import ContactUs from './pages/contactus';
import ServicesPage from './pages/service';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />

        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;