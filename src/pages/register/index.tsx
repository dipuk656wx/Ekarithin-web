import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'
const postData = async (email: string, eventName: string, paymentMode: string, paid: boolean) => {
    try {
        const response = await axios.post('/api/register/registerEvent', {
            email: email,
            eventName: eventName,
            paymentMode: paymentMode,
            paid: false,
        });
        console.log('Response:', response.data);
    } catch (error: any) {
        console.error('Error:', error.message);
    }
};
function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: ''
    });
    const navigate = useNavigate();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, phone, college } = formData;
        postData(email, name, phone, false);
    }
    return (
        <div className="max-w-md mx-auto bg-white rounded p-6">
            <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="form-input w-full" onChange={handleChange} value={formData.name} />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="form-input w-full" onChange={handleChange} value={formData.email} />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                    <input type="text" id="phone" name="phone" className="form-input w-full" onChange={handleChange} value={formData.phone} />
                </div>
                <div className="mb-4">
                    <label htmlFor="college" className="block text-gray-700 font-bold mb-2">College (optional)</label>
                    <input type="text" id="college" name="college" className="form-input w-full" onChange={handleChange} value={formData.college} />
                </div>
                <div className="mt-6">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default Registration;
