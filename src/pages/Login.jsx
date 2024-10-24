import axios from 'axios';
import React, { useState } from 'react';
import { BaseUrl } from '../config';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/slice/authSlice';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${BaseUrl}/api/login`, {
                email: formData.email,
                password: formData.password,
            });
            dispatch(loginSuccess(response.data));
            console.log(response.data)
            toast.success(response.data.message, toastOptions);
            navigate("/");
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
                <h1 className="text-4xl font-semibold text-[#ea580c]">Welcome back.</h1>
            </div>
            <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                <form onSubmit={handleLogin}>
                    <input
                        className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                   required
                   />
                    <input
                        className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                  />
                    <div className="flex items-center mb-4">
                        <div className="w-1/2 flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                name="rememberMe"
                                className="mt-1 mr-2"
                                checked={formData.rememberMe}
                                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                            />
                            <label htmlFor="remember-me">Remember me!</label>
                        </div>
                        <button
                            className="ml-auto w-1/2  text-white p-2 bg-gray-900 rounded font-semibold hover:bg-indigo-500"

                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? <p>Signing in...</p> : <p>Sign In</p>}
                        </button>
                    </div>
                </form>
                <Link to='/ForgotPassword' className="text-blue-500 hover:underline cursor-pointer mb-4">Forgot password?</Link>
                <div className="text-center">
                    <p className="mb-2">New User?</p>
                    <p className="mb-4">Create an account in just 1 step to avail exclusive benefits</p>
                    <button
                        className="w-full  bg-gray-900 text-white p-2 rounded font-semibold hover:bg-indigo-500"
                        onClick={() => navigate('/register')}
                    >
                        CREATE ACCOUNT
                    </button>
                </div>
            </div>
            <ToastContainer />
        </main>
    );
};

export default Login;
