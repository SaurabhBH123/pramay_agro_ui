// import React from 'react';

// const Reviews = ({ reviews }) => {
//   return (
//     <div >
//       <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
//       <div className="divide-y divide-gray-200">
//         {reviews?.map((review, index) => (
//           <div key={index} className="py-4">
//             <h3 className="text-lg font-semibold text-gray-900">{review.user}</h3>
//             <div className="flex items-center mb-2">
//               <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
//               <span className="text-gray-400">{'★'.repeat(5 - review.rating)}</span>
//             </div>
//             <p className="text-gray-700">{review.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reviews;


import React from 'react';

const Reviews = ({ reviews }) => {
    if(reviews?.lenght === 0) {
return null
    }
  return (
    <div >
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reviews?.map((review, index) => (
          <div key={index} className="p-4 bg-[#fff] shadow-md rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900">{review?.user}</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">{'★'.repeat(review?.rating)}</span>
              <span className="text-gray-400">{'★'.repeat(5 - review?.rating)}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
