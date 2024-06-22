// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import petopiaLogo from '../petopia.jpg'; // Adjust the path as necessary

const Navbar = () => {
    return (
        <nav>
            <div className="nav-left">
                <div className="logo">
                    <img src={petopiaLogo} alt="Petopia Logo" />
                    <span>Petopia</span>
                </div>
                <div className="nav-links">
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/join" activeClassName="active">Join</NavLink>
                    <NavLink to="/pets" activeClassName="active">Pets</NavLink>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    <NavLink to="/customers" activeClassName="active">Our Customers</NavLink>
                </div>
            </div>
            <div className="auth-buttons">
                <button className="login-button">Login</button>
                <button className="register-button">Register</button>
            </div>
        </nav>
    );
};

export default Navbar;

