import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { BaseUrl } from '../../config';
import { fetchUsers } from '../../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';

const ShippingAddress = ({setShowShipping}) => {

    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.user.token);
    useEffect(() => {
        dispatch(fetchUsers(token))
      }, [])
    const address = useSelector((state) => state.user.data?.addresses?.shipping);
    // console.log('from billing address: ' + address);

    const [formData, setFormData] = useState({
        firstName: address?.firstName || '',
        lastName: address?.lastName || '',
        companyName: address?.companyName || '',
        address: address?.address || '',
        landmark: address?.landmark || '',
        city: address?.city || '',
        state: address?.state || '',
        pincode: address?.pincode || '',
        phone: address?.phone || '',
        email: address?.email || '',
        addressType: "shipping"
    });

    const [isLoading, setIsLoading] = useState(false);

    
    useEffect(() => {
        
    AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const saveShippingAddress = async (formData, address, token) => {
        const method = address ? 'PUT' : 'POST';
        const url = method === 'PUT' ? `${BaseUrl}/api/update/address/${address._id}` : `${BaseUrl}/api/post/address`;

        try {
            setIsLoading(true);
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            setIsLoading(false);
            dispatch(fetchUsers(token))
            setShowShipping(false)
            return data;
        } catch (error) {
            console.error('Error submitting billing address:', error);
            setIsLoading(false);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Billing Address:', formData);

        try {
            const data = await saveShippingAddress(formData, address, token);
            // Handle the response data as needed
        } catch (error) {
            // Handle error as needed
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-lg" data-aos="fade-up">
            <div className="mb-4 flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0" data-aos="fade-right">
                    <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="w-full p-3 border border-gray-400 rounded text-sm"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-2" data-aos="fade-left">
                    <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="w-full p-3 border border-gray-400 rounded text-sm"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="mb-4" data-aos="fade-right">
                <label className="block text-gray-700 mb-2" htmlFor="companyName">Company Name (optional)</label>
                <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    className="w-full p-3 border border-gray-400 rounded text-sm"
                    value={formData.companyName}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4" data-aos="fade-left">
                <label className="block text-gray-700 mb-2" htmlFor="address">Street Address <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    className="w-full p-3 border border-gray-400 rounded text-sm"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-4" data-aos="fade-right">
                <label className="block text-gray-700 mb-2" htmlFor="landmark">Landmark</label>
                <input
                    type="text"
                    name="landmark"
                    id="landmark"
                    className="w-full p-3 border border-gray-400 rounded text-sm"
                    value={formData.landmark}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4 flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0" data-aos="fade-right">
                    <label className="block text-gray-700 mb-2" htmlFor="city">Town / City <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        className="w-full p-3 border border-gray-400 rounded text-sm"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-2" data-aos="fade-left">
                    <label className="block text-gray-700 mb-2" htmlFor="state">State / County <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="state"
                        id="state"
                        className="w-full p-3 border border-gray-400 rounded text-sm"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="mb-4 flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0" data-aos="fade-right">
                    <label className="block text-gray-700 mb-2" htmlFor="pincode">pincode / ZIP <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="pincode"
                        id="pincode"
                        className="w-full p-3 border border-gray-400 rounded text-sm"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-2" data-aos="fade-left">
                    <label className="block text-gray-700 mb-2" htmlFor="phone">Phone <span className="text-red-500">*</span></label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="w-full p-3 border border-gray-400 rounded text-sm"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="mb-4" data-aos="fade-right">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full p-3 border border-gray-400 rounded text-sm"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <button
                type="submit"
                className="w-[200px] p-2 bg-indigo-600 text-white rounded font-semibold hover:bg-[#1a5bb5] transition-colors duration-300"
                data-aos="fade-up"
                disabled={isLoading}
            >
                {isLoading ? 'Saving..' : 'Save'}
            </button>
        </form>
    );
};

export default ShippingAddress;
