import axios from 'axios';
import React, { useState } from 'react';
import { BaseUrl } from '../../config';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';
import Categoriesection from './Components/CatergorySec';


const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};
const Product = ({ product }) => {
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState(product.sizes[0].size);
    const [price, setPrice] = useState(product.sizes[0].price);

    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        setSelectedSize(newSize);
        const newPrice = product.sizes.find((size) => size.size === newSize).price;
        setPrice(newPrice);
    };

    const token = useSelector((state) => state.auth?.user?.token);

    const handleAddToCart = (product) => {
        if (!token) {
            return toast.error('It seems you are not logged in. Please log in to continue...', toastOptions);
        }
        axios.post(`${BaseUrl}/api/post/cart`, { product: product._id, size: selectedSize, quantity: 1 }, {
            headers: {
                Authorization: token,
            }
        })
            .then((res) => {
                toast.success('Product added to cart successfully', toastOptions);
            })
            .catch((err) => {
                toast.error('Something went wrong!', toastOptions);
            });
    };

    const handleProductDetails = (id) => {
        navigate(`/ProductDetails/${id}`);
    };

    return (
        <div key={product._id} className="w-[290px] bg-white rounded overflow-hidden shadow-sm hover:shadow-lg border border-gray-200">
           
            <div
                className="relative cursor-pointer"
                onClick={() => handleProductDetails(product._id)}
            >
                <img
                    src={product.banner}
                    alt={product.title}
                    className="h-48 w-full object-contain mt-2 rounded-t-xl transition-opacity duration-300 hover:opacity-90"
                />
            </div>
            <div className="px-4 py-3">
                <p className="text-lg font-bold text-[13px] truncate capitalize">{product.title}</p>
                <select id="size" value={selectedSize} onChange={handleSizeChange}>
                    {product.sizes.map((sizeOption) => (
                        <option key={sizeOption.size} value={sizeOption.size}>
                            {sizeOption.size}
                        </option>
                    ))}
                </select>
                <div className="flex justify-between items-center mt-3">
                    <p className="text-[13px] font-semibold text-black cursor-auto">
                        Price: ₹{price}
                    </p>
                    <button
                        className="text-white text-[11px] bg-gray-800 px-2 py-2 rounded font-semibold hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-colors duration-300"
                        onClick={() => handleAddToCart(product)}
                    >
                        
                        ADD TO CART
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Product;
