import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BaseUrl } from '../config';

const Contactus = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        newsletter: false
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: val
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await axios.post(`${BaseUrl}/api/contactus/post`, {
                Name: `${formData.firstName} +${formData.lastName}`,
                Email: formData.email,
                Message:formData.message
            })
            
            setIsLoading(false);
            setIsSubmitted(true);
            setFormData({ firstName: '',
            lastName: '',
            email: '',
            message: '',
            newsletter: false})
        } catch (error) {
            setIsLoading(false);
            console.log(error)
        }

    };

    return (
        <div className=" p-5 mt-20">
            <div>
                <Link to="/">Home | </Link>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <span key={name} className='text-[#f97316]'>
                            {!isLast ? (
                                <Link to={routeTo}>{name}</Link>
                            ) : (
                                <span>{name}</span>
                            )}
                            {!isLast && ' / '}
                        </span>
                    );
                })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 border mt-5">
                <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                    <p className="mt-4 text-sm leading-7 font-regular uppercase">
                        Contact
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                        Contact<span className="text-indigo-600"> Us</span>
                        {/* Contact Us */}
                    </h3>
                    <p className="mt-4 leading-7 text-gray-200">
                    Office Address
Kay Bee Bio Organics Pvt. Ltd., Office No. 208, 209 & 210. 2nd Floor, SPRINT Antaaya, Opposite Balewadi Stadium, Near Marvel Cascada, Balewadi, Pune, Maharashtra 411045.
                    </p>

                    <p className="mt-4 leading-7 text-gray-200">
                    Sales Enquiry – Reach Us 24X7
Phone : 18005322612
E-mail : enquiry@kaybeebio.com</p>
                    
                    {/* More contact info */}
                </div>
                <form onSubmit={handleSubmit} className="md:col-span-8 p-10">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="firstName" type="text" name="firstName" placeholder="Jane"
                                value={formData.firstName} onChange={handleChange} required />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="lastName" type="text" name="lastName" placeholder="Doe"
                                value={formData.lastName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email" type="email" name="email" placeholder="********@*****.**"
                                value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="message" name="message" rows="10"
                                value={formData.message} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="flex justify-between w-full px-3">
                        <div className="md:flex md:items-center">
                            <label className="block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox" name="newsletter"
                                    checked={formData.newsletter} onChange={handleChange} />
                                <span className="text-sm">
                                    Send me your newsletter!
                                </span>
                            </label>
                        </div>
                        <button
                            className={`shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                    {isSubmitted && (
                        <p className="mt-3 text-green-600">
                            Message sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contactus;
