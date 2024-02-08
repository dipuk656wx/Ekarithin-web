import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, phone, college } = formData;
        postData(email, name, phone, false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className='flex flex-col items-center justify-center w-full ' style={{
                backgroundImage: "url('/images/img.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh'
            }}>
                <h2 className="text-amber-600 text-2xl font-semibold mb-2">Registration Form</h2>
                <form onSubmit={handleSubmit} className="flex flex-col mt-2 opacity-65">
                    <label htmlFor="name" className="font-bold text-lg text-white">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Name" className="border rounded-lg py-3 px-3 mb-6 bg-black border-amber-500 placeholder-white-500 text-white" onChange={handleChange} value={formData.name} style={{ boxShadow: '#ff7600 5px 5px 15px' }} />

                    <label htmlFor="email" className="font-bold text-lg text-white">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" className="border rounded-lg py-3 px-3 mb-6 bg-black border-amber-500 placeholder-white-500 text-white" onChange={handleChange} value={formData.email} style={{ boxShadow: '#ff7600 5px 5px 15px' }} />

                    <label htmlFor="phone" className="font-bold text-lg text-white">Phone Number:</label>
                    <input type="text" id="phone" name="phone" placeholder="Phone Number" className="border rounded-lg py-3 px-3 mb-6 bg-black border-amber-500 placeholder-white-500 text-white" onChange={handleChange} value={formData.phone} style={{ boxShadow: '#ff7600 5px 5px 15px' }} />

                    <label htmlFor="college" className="font-bold text-lg text-white">College (optional):</label>
                    <input type="text" id="college" name="college" placeholder="College" className="border rounded-lg py-3 px-3 mt-2 mb-6 bg-black border-amber-500 placeholder-white-500 text-white" onChange={handleChange} value={formData.college} style={{ boxShadow: '#ff7600 5px 5px 15px' }} />

                    <button type="submit" className=" hover:bg-purple-500  hover:text-white  border-2   shadow-lg bg-orange-400 text-lg rounded-lg py-3 font-semibold">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Registration;
