import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchCategories } from '../redux/slice/CategoriesSlice';

const Navbar = () => {
    const token = useSelector((state) => state.auth?.user?.token);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const categories = useSelector((state) => state.categories.data);

    useEffect(() => {
        dispatch(fetchCategories(token));
    }, [dispatch]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProductsDropdown = () => {
        setIsProductsDropdownOpen(!isProductsDropdownOpen);
    };

    const handleCategoryClick = (categoryId) => {
        navigate(`/Products/${categoryId}`);
        setIsProductsDropdownOpen(false); // Close the dropdown after selection
    };

    return (
        <div>
            <nav className="flex justify-between bg-white text-gray-900 shadow-md fixed w-full z-10 top-0">
                <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                    <Link to="/" className="text-3xl font-bold font-heading">
                        <img src={logo} className="h-10" alt="logo" />
                    </Link>

                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
                        <li className="relative">
                            <div
                                className="flex items-center cursor-pointer hover:text-gray-700"
                                onClick={toggleProductsDropdown}
                            >
                                Products
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            {isProductsDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                                    {categories?.map((category) => (
                                        <li key={category._id}>
                                            <a
                                                className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() => handleCategoryClick(category._id)}
                                            >
                                                {category.category}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li><Link to="/Aboutus" className="hover:text-gray-700">About Us</Link></li>
                        <li><Link to="/Whyus" className="hover:text-gray-700">Why Us</Link></li>
                        <li><Link to="/Blogs" className="hover:text-gray-700">Blogs</Link></li>
                        <li><Link to="/careers" className="hover:text-gray-700">Careers</Link></li>
                        <li><Link to="/contactus" className="hover:text-gray-700">Contact Us</Link></li>
                    </ul>

                    <div className="hidden xl:flex space-x-5 items-center">
                        <Link to={isAuthenticated ? '/myaccount/wishlist' : '/login'} className="hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </Link>

                        <Link to={isAuthenticated ? '/cart' : '/login'} className="flex items-center hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="flex absolute -mt-5 ml-4">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                            </span>
                        </Link>

                        <Link to={isAuthenticated ? '/myaccount/dashboard' : '/login'} className="flex items-center hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <button className="xl:hidden flex items-center mr-6" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {isMenuOpen && (
                <div className="xl:hidden bg-white shadow-md fixed w-full z-10 top-16">
                    <ul className="font-semibold font-heading space-y-4 py-4">
                        <li className="text-center"><Link to="/" className="hover:text-gray-700">Home</Link></li>
                        <li className="text-center relative">
                            <div
                                className="flex items-center justify-center cursor-pointer hover:text-gray-700"
                                onClick={toggleProductsDropdown}
                            >
                                Products
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            {isProductsDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                                    {categories.map((category) => (
                                        <li key={category._id}>
                                            <a
                                                className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() => handleCategoryClick(category._id)}
                                            >
                                                {category.category}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li className="text-center"><Link to="/Aboutus" className="hover:text-gray-700">About Us</Link></li>
                        <li className="text-center"><Link to="/Whyus" className="hover:text-gray-700">Why Us</Link></li>
                        <li className="text-center"><Link to="/Blogs" className="hover:text-gray-700">Blogs</Link></li>
                        <li className="text-center"><Link to="#" className="hover:text-gray-700">Careers</Link></li>
                        <li className="text-center"><Link to="/contactus" className="hover:text-gray-700">Contact Us</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
