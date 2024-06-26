// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import image from './background.png'; // Correctly import the image with its file extension

const Home = () => {
    return (
        <section id="home" style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <h2>Welcome to Petopia</h2>
            <p>Your one-stop destination for adopting a loving pet.</p>
            <Link to="/pets" className="adopt-button">Adopt Now</Link>
        </section>
    );
};

export default Home;

