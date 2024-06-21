// src/components/OurCustomers.js
// src/pages/OurCustomers.js

import React from 'react';
import CustomerForm from '../components/CustomerForm'; 
import CustomerList from '../components/CustomerList'; 

const OurCustomers = () => {
    return (
        <section id="customers">
            <h2>Our Customers</h2>
            <CustomerForm />
            <CustomerList /> 
        </section>
    );
};

export default OurCustomers;

