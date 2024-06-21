import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/join" activeClassName="active">Join</NavLink>
            <NavLink to="/pets" activeClassName="active">Pets</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <NavLink to="/our customers" activeClassName="active">Our Customers</NavLink>
        </nav>
    );
};

export default Navbar;
