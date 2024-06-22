import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Join from './pages/Join';
import Contact from './pages/Contact'; // Corrected import
import PetList from './components/PetList';
import OurCustomers from './pages/OurCustomers'; // Corrected import

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/join" element={<Join />} />
                <Route path="/pets" element={<PetList />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/customers" element={<OurCustomers />} />
            </Routes>
        </Router>
    );
}

export default App;








