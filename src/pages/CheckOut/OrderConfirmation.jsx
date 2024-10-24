// src/components/OrderConfirmation.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const OrderConfirmation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center p-4  rounded  mt-52 mb-52"
      data-aos="fade-up"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-blue-500 mt-14"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Order Placed!
      </h2>
      <p className="mt-2 text-gray-600">
        Thank you for your purchase. Your order has been successfully placed.
      </p>
    </div>
  );
};

export default OrderConfirmation;
