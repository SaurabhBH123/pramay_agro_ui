
import React, { useState } from 'react';

// StarRating Component
const StarRating = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (index) => {
    onRatingChange(index);
  };

  return (
    <div className="flex text-2xl cursor-pointer">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`transition-colors duration-200 ${
            index <= (hoveredRating || rating) ? 'text-yellow-400' : 'text-gray-300'
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

// SubmitReview Component
const SubmitReview = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Rating:', rating);
    console.log('Review:', review);
  };

  return (
    <div className='mt-8 md:mt-16 px-4 md:px-8'>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Add a review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="rating" className="block text-lg font-medium mb-2">Rating:</label>
          <StarRating rating={rating} onRatingChange={setRating} />
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-lg font-medium mb-2">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here..."
            rows="4"
            className="w-full md:w-[400px] px-3 py-2 border border-gray-300 rounded-lg resize-none"
          />
        </div>
        <button className="bg-gray-800 text-white py-2 px-6 rounded w-full md:w-auto">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default SubmitReview;
