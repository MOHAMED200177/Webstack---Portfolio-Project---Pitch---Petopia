// src/components/Home.js

import React from 'react';

const Home = () => {
    const scrollToPets = () => {
        const petsSection = document.getElementById('pets');
        petsSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home">
            <h2>Welcome to Petopia</h2>
            <p>Your one-stop destination for adopting a loving pet.</p>
            <button onClick={scrollToPets}>Adopt Now</button>
        </section>
    );
};

export default Home;
