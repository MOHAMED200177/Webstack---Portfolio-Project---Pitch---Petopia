// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <section id="home">
            <h2>Welcome to Petopia</h2>
            <p>Your one-stop destination for adopting a loving pet.</p>
            <Link to="/pets" className="adopt-button">Adopt Now</Link>
        </section>
    );
};

export default Home;

