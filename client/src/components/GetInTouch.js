import React, { useState } from 'react';
import axios from 'axios';

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    // const sumitButton = document.querySelector('.submitButton');
    // const contactForm = document.querySelector('#contactForm');
    const submitButtonClass = loading ? 'submitButton sendingStyle' : 'submitButton';


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // contactForm.addEventListener('submit', () => {
    //     if (loading) {
    //         sumitButton.classList.add('sendingStyle');
    //     } else {
    //         sumitButton.classList.remove('sendingStyle');
    //     }
    // })

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields.');
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post('/submit', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                alert(response.data.message);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                console.log("The form has been submitted!", formData);
            } else {
                alert(response.data.message);
                console.error('form submission failed.');
            }
        } catch (e) {
            console.error("Error", e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="getInTouch" className="main_content getInTouch">
            <h3>Get in touch</h3>
            <p className='thanks'>Thanks for exploring my portfolio! </p>
            <p>
                Have a project in mind or any questions about my work? I'd love to
                hear from you! Please reach out via email or use the form
                if you'd like to connect.
            </p>
            <form method='POST' onSubmit={handleSubmit} id='contactForm' className="contactForm">
                <label htmlFor="name">Name</label>
                <input
                    name='name'
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    name='email'
                    type="email"
                    id="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    name='message'
                    rows="12"
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type='submit' className={submitButtonClass}>{loading ? 'Sending...' : 'Send'}</button>
            </form>
        </div>
    )
}

export default GetInTouch;