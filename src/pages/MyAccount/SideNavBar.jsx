import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/authSlice';

const SideNavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const [modalVisible, setModalVisible] = useState(false);

    const handleLogoutClick = (e) => {
        e.preventDefault();
        setModalVisible(true);
    };

    const confirmLogout = () => {
        dispatch(logout());
        navigate('/login');
        setModalVisible(false);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:block w-64">
                <nav className="flex flex-col p-4 mt-10">
                    <NavLink
                        to="/myaccount/dashboard"
                        className={({ isActive }) =>
                            isActive || location.pathname === "/myaccount"
                                ? "mb-4 p-2 text-black border-b-2 border-[#2874F0] "
                                : "mb-4 p-2 text-gray-800 border-b-2 border-transparent hover:border-gray-400"
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/myaccount/orders"
                        className={({ isActive }) =>
                            isActive
                                ? "mb-4 p-2 text-black border-b-2 border-[#2874F0] "
                                : "mb-4 p-2 text-gray-800 border-b-2 border-transparent border-gray-400"
                        }
                    >
                        Orders
                    </NavLink>
                    <NavLink
                        to="/myaccount/wishlist"
                        className={({ isActive }) =>
                            isActive
                                ? "mb-4 p-2 text-black border-b-2 border-[#2874F0] "
                                : "mb-4 p-2 text-gray-800 border-b-2 border-transparent border-gray-400"
                        }
                    >
                        Wishlist
                    </NavLink>
                    <NavLink
                        to="/myaccount/addresses"
                        className={({ isActive }) =>
                            isActive
                                ? "mb-4 p-2 text-black border-b-2 border-[#2874F0] "
                                : "mb-4 p-2 text-gray-800 border-b-2 border-transparent border-gray-400"
                        }
                    >
                        Addresses
                    </NavLink>
                    <NavLink
                        to="/myaccount/details"
                        className={({ isActive }) =>
                            isActive
                                ? "mb-4 p-2 text-black border-b-2 border-[#2874F0] "
                                : "mb-4 p-2 text-gray-800 border-b-2 border-transparent border-gray-400"
                        }
                    >
                        Account Details
                    </NavLink>
                    <NavLink
                        to="/logout"
                        onClick={handleLogoutClick}
                        className={({ isActive }) =>
                            isActive
                                ? "mb-4 p-2 text-red-500 border-b-2 border-[#2874F0]"
                                : "mb-4 p-2 text-red-500 border-b-2 border-transparent border-gray-400"
                        }
                    >
                        Logout
                    </NavLink>
                </nav>
            </div>

            {/* Mobile/Tablet Top Navbar */}
            <div className="block md:hidden w-full bg-white shadow-lg border-b fixed top-0 left-0 z-50 overflow-x-auto mt-20">
                <nav className="flex flex-row p-4 justify-start space-x-4">
                    <NavLink
                        to="/myaccount/dashboard"
                        className={({ isActive }) =>
                            isActive || location.pathname === "/myaccount"
                                ? "p-2 text-black border-b-2 border-[#2874F0]"
                                : "p-2 text-gray-800 border-b-2 border-transparent hover:border-gray-400"
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/myaccount/orders"
                        className={({ isActive }) =>
                            isActive
                                ? "p-2 text-black border-b-2 border-[#2874F0]"
                                : "p-2 text-gray-800 border-b-2 border-transparent hover:border-gray-400"
                        }
                    >
                        Orders
                    </NavLink>
                    <NavLink
                        to="/myaccount/wishlist"
                        className={({ isActive }) =>
                            isActive
                                ? "p-2 text-black border-b-2 border-[#2874F0]"
                                : "p-2 text-gray-800 border-b-2 border-transparent hover:border-gray-400"
                        }
                    >
                        Wishlist
                    </NavLink>
                    <NavLink
                        to="/myaccount/addresses"
                        className={({ isActive }) =>
                            isActive
                                ? "p-2 text-black border-b-2 border-[#2874F0]"
                                : "p-2 text-gray-800 border-b-2 border-transparent hover:border-gray-400"
                        }
                    >
                        Addresses
                    </NavLink>
                    <NavLink
                        to="/myaccount/details"
                        className={({ isActive }) =>
                            isActive
                                ? "p-2 text-black border-b-2 border-[#2874F0]"
                                : "p-2 text-gray-800 border-b-2 border-transparent hover:border-gray-400"
                        }
                    >
                        Account Details
                    </NavLink>
                    <NavLink
                        to="/logout"
                        onClick={handleLogoutClick}
                        className={({ isActive }) =>
                            isActive
                                ? "p-2 text-red-500 border-b-2 border-[#2874F0]"
                                : "p-2 text-red-500 border-b-2 border-transparent hover:border-gray-400"
                        }
                    >
                        Logout
                    </NavLink>
                </nav>
            </div>

            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Are you sure you want to logout?</h2>
                        <div className="flex justify-end">
                            <button className="border border-gray-300 px-4 py-2 rounded mr-2" onClick={closeModal}>
                                Cancel
                            </button>
                            <button className="border border-red-600 bg-red-600 text-white px-4 py-2 rounded" onClick={confirmLogout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SideNavBar;
