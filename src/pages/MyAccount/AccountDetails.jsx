import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseUrl } from '../../config';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUsers } from '../../redux/slice/userSlice';

const AccountDetails = () => {
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    // const user = useSelector((state) => state.auth.user.user);
    const user = useSelector((state) => state.user.data)
    // console.log(user)
    const token = useSelector((state) => state.auth.user.token);
    console.log(token)
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        username: user?.username || '',
        email: user?.email || '',
        password: '',
        newPassword: '',
        confirmNewPassword: '',
        mobileNo: user?.mobileNo || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.newPassword && formData.newPassword !== formData.confirmNewPassword) {
            toast.error("New password and confirm password do not match!", toastOptions);
            return;
        }
        setIsLoading(true);

        try {
            const response = await axios.put(
                `${BaseUrl}/api/user/status/update`,
                formData,
                {
                    headers: {
                        Authorization: token
                    }
                }
            );
            console.log('Response:', response.data);
            toast.success('Updated successfully!', toastOptions);
            setIsLoading(false);
            dispatch(fetchUsers(token))
        } catch (error) {
            console.log('Error:', error.response ? error.response.data : error.message);
            setIsLoading(false);
            toast.error(error.response.data.message, toastOptions);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full m-10 mx-auto mt-0  md:p-20">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Account Details</h2>
            <div className="mb-4 flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                    <label className="block text-gray-700 mb-2" htmlFor="firstName">
                        First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="w-full p-3 border border-gray-400  rounded text-sm"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-2">
                    <label className="block text-gray-700 mb-2" htmlFor="lastName">
                        Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="w-full p-3 border border-gray-400  rounded text-sm"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="username">
                    User Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="w-full p-3 border border-gray-400  rounded text-sm"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="mobileNo">
                    Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                    type="tel"
                    name="mobileNo"
                    id="mobileNo"
                    className="w-full p-3 border border-gray-400  rounded text-sm"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full p-3 border border-gray-400  rounded text-sm"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Password Change</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">
                        Current Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full p-3 border border-gray-400  rounded text-sm"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="newPassword">
                        New Password
                    </label>
                    <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        className="w-full p-3 border border-gray-400  rounded text-sm"
                        value={formData.newPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="confirmNewPassword">
                        Confirm New Password
                    </label>
                    <input
                        type="password"
                        name="confirmNewPassword"
                        id="confirmNewPassword"
                        className="w-full p-3 border border-gray-400  rounded text-sm"
                        value={formData.confirmNewPassword}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button
                type="submit"
                className="w-[200px] p-2 bg-indigo-600 text-white rounded font-semibold hover:bg-[#1a5bb5] transition-colors duration-300"
                disabled={isLoading}
            >
                {isLoading ? 'Updating...' : 'Save Changes'}
            </button>
            <ToastContainer />
        </form>
    );
};

export default AccountDetails;
