import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FiStar } from "react-icons/fi";

const StarRating = ({ rating ,reviews }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = totalStars - fullStars - halfStar;

  return (
    <div className="star-rating text-[#fbbf24] flex items-center">
      {Array(fullStars).fill(<TiStarFullOutline size={25} />)}
      {halfStar === 1 && <FaRegStarHalfStroke size={25} />}
      {Array(emptyStars).fill(<FiStar size={20} />)}
      <p className='block text-1xl ml-2 text-black text-gray-500'>({reviews} customer reviews)</p>
    </div>
  );
};

export default StarRating;
