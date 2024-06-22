// src/components/Join.js

import React from 'react';
import PetForm from '../components/PetForm';
import './Join.css';

const Join = () => {
    return (
        <section id="join" className="join-container">
            <h2 className="join-heading">Add a Pet</h2>
            <div className="join-form">
                <PetForm />
            </div>
        </section>
    );
};

export default Join;

