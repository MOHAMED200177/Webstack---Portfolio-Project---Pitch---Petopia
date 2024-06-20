import React, { useState, useEffect } from 'react';
import { getAllCustomers } from '../api';
import '../App.css'; // Import the CSS file

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const params = {};
                if (filter) params.name = filter;
                if (sort) params.sort = sort;
                const response = await getAllCustomers(params);
                setCustomers(response.data.data.customers);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };
        fetchCustomers();
    }, [filter, sort]);

    return (
        <div className="customer-list-container">
            <h1>Customer List</h1>
            <div className="filters">
                <div className="filter-item">
                    <label>Filter by name: </label>
                    <input
                        type="text"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        placeholder="Enter name"
                    />
                </div>
                <div className="filter-item">
                    <label>Sort by: </label>
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="">Select</option>
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                        <option value="dateAdded">Date Added</option>
                    </select>
                </div>
            </div>
            <ul className="customer-list">
                {customers.map((customer) => (
                    <li className="customer-card" key={customer._id}>
                        <div className="customer-details">
                            <h3>{customer.name}</h3>
                            <p>Email: {customer.email}</p>
                        </div>
                        <div className="customer-actions">
                            <button>Contact</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;


