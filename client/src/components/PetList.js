import React, { useState, useEffect } from 'react';
import { getAllCats } from '../api'; // Adjust the import path as needed
import '../App.css';

const CatList = () => {
  const [cats, setCats] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    const fetchCats = async () => {
      const params = {};
      if (filter) params.breed = filter;
      if (sort) params.sort = sort;
      try {
        const response = await getAllCats(params);
        setCats(response.data.data.cats);
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };
    fetchCats();
  }, [filter, sort]);

  return (
    <div className="cat-list-container">
      <h1 className="title">Available Cats for Adoption</h1>
      <div className="filters">
        <div className="filter-item">
          <label htmlFor="filter">Filter by breed:</label>
          <input
            type="text"
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Enter breed"
          />
        </div>
        <div className="filter-item">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Select</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="dateAdded">Date Added</option>
          </select>
        </div>
      </div>
      <ul className="cat-list">
        {cats.map((cat) => (
          <li key={cat._id} className="cat-card">
            <img src={cat.imageUrl[0]} alt={cat.name} className="cat-image" />
            <h3 className="cat-name">{cat.name}</h3>
            <p className="cat-breed">Breed: {cat.breed}</p>
            <p className="cat-age">Age: {cat.age} years</p>
            <p className="cat-description">Description: {cat.description}</p>
            <p className="cat-email">Location: {cat.email}</p>
            <p className="cat-phone">Contact: {cat.phone}</p>
            <p className="cat-location">Location: {cat.location}</p>
            <p className="cat-status">Status: {cat.adoptionStatus}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatList;
