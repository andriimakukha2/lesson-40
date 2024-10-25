import React, { useState } from 'react';
import '../styles/App.scss';

const ControlledForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        agree: false,
        color: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
            </label>
            <label>
                Agree:
                <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                />
                I agree to the terms
            </label>
            <label>
                Favorite Color:
                <select name="color" value={formData.color} onChange={handleChange}>
                    <option value="">Select color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;
