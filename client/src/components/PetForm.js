import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const PetForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        breed: '',
        description: '',
        image: null,
        contactEmail: '',
        contactPhone: '',
        location: ''  // Added location field
    });

    const [formError, setFormError] = useState(null);
    const [formSuccess, setFormSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('age', formData.age);
        data.append('breed', formData.breed);
        data.append('description', formData.description);
        data.append('contactEmail', formData.contactEmail);
        data.append('contactPhone', formData.contactPhone);
        data.append('location', formData.location);  // Append location to FormData
        if (formData.image) {
            data.append('imageUrl', formData.image);
        }

        try {
            const response = await axios.post('http://localhost:5000/api/v1/cats', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Pet successfully added:', response.data);
            setFormSuccess(true);
            setFormData({
                name: '',
                age: '',
                breed: '',
                description: '',
                image: null,
                contactEmail: '',
                contactPhone: '',
                location: ''  // Reset location field
            });
            setFormError(null);
        } catch (error) {
            console.error('Error adding pet:', error);
            setFormError('Error adding pet. Please try again later.');
            setFormSuccess(false);
        }
    };

    return (
        <div className="pet-form-container">
            <form onSubmit={handleSubmit} className="pet-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Breed</label>
                    <input
                        type="text"
                        name="breed"
                        value={formData.breed}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contact Email</label>
                    <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contact Phone</label>
                    <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">  {/* Added location input field */}
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add Pet</button>
            </form>
            {formError && <p className="error-message">{formError}</p>}
            {formSuccess && <p className="success-message">Pet successfully added!</p>}
        </div>
    );
};

export default PetForm;