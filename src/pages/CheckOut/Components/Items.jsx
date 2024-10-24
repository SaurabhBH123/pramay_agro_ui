import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../../../config';

const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
const Items = () => {
  const token = useSelector((state) => state.auth?.user?.token);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartId, setCartId] = useState()
  const [paymentMethod, setPaymentMethod] = useState('cod');
  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/get/cart`, {
        headers: {
          Authorization: `${token}`
        }
      });
      setItems(response.data.items);
      setTotal(response.data.total);
      setCartId(response.data._id)
    } catch (error) {
      console.log(error);
    }
  };
const navigate = useNavigate()
const handleNavigate =()=>{
  navigate('/OrderConfirmation')
}

if (items.length === 0) {
  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <img 
        src='https://cdn.dribbble.com/users/2370289/screenshots/6150406/media/6579b4e1f9a6658157cf653538b25a8b.jpg?resize=800x600&vertical=center'
        alt="No items"
        className='max-w-full max-h-full'
      />
    </div>
  );
}


  return (
    <div className="mt-2">
      <div className="sm:flex my-5">
        <div className="w-full sm:w-3/4 px-0 py-10">
          <div className="flex justify-between border-b pb-8">
            {/* <h1 className="font-semibold text-1xl">Cart</h1> */}
            <h2 className="font-semibold text-1xl">{items.length} Items</h2>
          </div>

          {items?.map((item) => (
            
            <div key={item._id} className="md:flex items-stretch py-10 md:py-10 lg:py-8 border-t ">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img src={item.product.banner} alt={item.product.title} className="h-[150px] object-center object-cover md:block hidden" />
                <img src={item.product.banner} alt={item.product.title} className="md:hidden w-full h-full object-center object-cover" />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800">{item.product.title}</p>
                  {/* <div className="flex items-center">
                    <button onClick={() => decreaseQuantity(item)} className="px-2 py-1 border">-</button>
                    <span className="px-2">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item)} className="px-2 py-1 border">+</button>
                  </div> */}
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">Size: {item.size}</p>
                <p className="text-xs leading-3 text-gray-600 py-4">Price: ₹{item.price.toFixed(2)}</p>
                <div className="flex items-center justify-between pt-5">
                  {/* <div className="flex items-center">
                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer" onClick={() => { handleAddToWishList(item.product._id) }}>Add to favorites</p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={()=>{handleRemoverItem(item._id)}}>Remove</p>
                  </div> */}
                  <p className="text-base font-black leading-none text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
          <h1 className="font-semibold text-1xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {items.length}</span>
            <span className="font-semibold text-sm">₹{total.toFixed(2)}</span>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>₹{(total + 10).toFixed(2)}</span>
            </div>
            <button className="bg-gray-800 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" >
              Place Order
            </button>
          </div>
        </div> */}

<div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
      <h1 className="font-semibold text-xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items {items.length}</span>
        <span className="font-semibold text-sm">₹{total.toFixed(2)}</span>
      </div>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>₹{(total + 10).toFixed(2)}</span>
        </div>
        <div className="mt-6">
          <span className="block text-sm font-semibold mb-2">Choose Payment Method</span>
          <div className="flex items-center mb-4">
            <input
              id="cod"
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="hidden"
            />
            <label
              htmlFor="cod"
              className={`flex items-center cursor-pointer text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                paymentMethod === 'cod' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              <span className="mr-2 block w-4 h-4 border border-gray-400 rounded-full flex-shrink-0 transition-transform transform ${
                paymentMethod === 'cod' ? 'bg-white border-indigo-600' : 'bg-gray-200 border-gray-400'
              }"></span>
              Cash on Delivery
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="online"
              type="radio"
              name="paymentMethod"
              value="online"
              checked={paymentMethod === 'online'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="hidden"
            />
            <label
              htmlFor="online"
              className={`flex items-center cursor-pointer text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                paymentMethod === 'online' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              <span className="mr-2 block w-4 h-4 border border-gray-400 rounded-full flex-shrink-0 transition-transform transform ${
                paymentMethod === 'online' ? 'bg-white border-indigo-600' : 'bg-gray-200 border-gray-400'
              }"></span>
              Online Payment
            </label>
          </div>
        </div>
        <button className="bg-gray-800 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full mt-6" onClick={()=>{handleNavigate()}}>
          Place Order
        </button>
      </div>
    </div>
      </div>

      
      <ToastContainer />
    </div>
  );
};

export default Items;
