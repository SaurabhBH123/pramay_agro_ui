import React from 'react';
import { useNavigate } from 'react-router-dom';

const CareerCard = ({ career }) => {
    const navigate = useNavigate()

  return (
    <div className="flex justify-between items-center p-6 bg-white shadow-lg rounded-lg mb-4">
      <div className="w-1/2">
        <h2 className="text-xl font-bold text-gray-800">{career.Position}</h2>
        <p className="text-gray-600">{career.Department}</p>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <div className="mr-4 text-right">
          <p className="text-gray-600 font-semibold">{career.State}</p>
          <div className="text-gray-500">
            {career.City.map((city, index) => (
              <span key={index} className="inline-block">
                {city}{index < career.City.length - 1 && ', '}
              </span>
            ))}
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200" onClick={()=>{
            navigate(`/careers/${career._id}`)
        }}>
          More Details
        </button>
      </div>
    </div>
  );
};

export default CareerCard;