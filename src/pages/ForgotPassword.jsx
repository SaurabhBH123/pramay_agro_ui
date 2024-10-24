import axios from 'axios';
import React, { useState } from 'react';
import { BaseUrl } from '../config';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${BaseUrl}/api/forgot-password`, { email });
            toast.success(response.data.message, toastOptions);
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, toastOptions);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="container mx-auto p-4 mt-32 bg-white flex flex-col items-center justify-center text-gray-700">
            <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                <h1 className="text-4xl font-semibold text-[#ea580c]">Forgot Password</h1>
            </div>
            <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                <form onSubmit={handleForgotPassword}>
                    <input
                        className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        className="w-full bg-indigo-500 text-white p-2 rounded font-semibold hover:bg-gray-900"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? <p>Sending...</p> : <p>Send Reset Link</p>}
                    </button>
                </form>
                <p className="text-blue-500 hover:underline cursor-pointer mt-4" onClick={() => navigate('/login')}>
                    Back to Log In
                </p>
            </div>
            <ToastContainer />
        </main>
    );
};

export default ForgotPassword;
