import React, { useRef } from 'react';
import '../styles/App.scss';

const UncontrolledForm = () => {
    const nameRef = useRef(null);
    const agreeRef = useRef(null);
    const colorRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            agree: agreeRef.current.checked,
            color: colorRef.current.value
        };
        console.log('Uncontrolled form data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={nameRef} />
            </label>
            <label>
                Agree:
                <input type="checkbox" ref={agreeRef} />
            </label>
            <label>
                Favorite Color:
                <select ref={colorRef}>
                    <option value="">Select color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UncontrolledForm;
