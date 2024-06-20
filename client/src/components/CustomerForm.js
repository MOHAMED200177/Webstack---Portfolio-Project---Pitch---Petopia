// src/components/CustomerForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const CustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        axios.post('http://localhost:5000/api/v1/customers', {
            name,
            email,
            phone
        })
        .then(response => {
            setMessage('Customer added successfully!');
            setName('');
            setEmail('');
            setPhone('');
        })
        .catch(error => {
            setError('Failed to add customer. Please try again.');
            console.error(error);
        });
    };

    return (
        <div className="customer-form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <button type="submit">Add Customer</button>
            </form>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default CustomerForm;

