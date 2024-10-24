// import React from 'react';

// const DetailsThumb = ({ images, tab, myRef }) => {
//   return (
//     <div ref={myRef} className="flex overflow-x-auto space-x-2 py-2">
//       {images?.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Thumbnail ${index + 1}`}
//           onClick={() => tab(index)}
//           className="w-24 h-24 object-cover cursor-pointer opacity-70 hover:opacity-100 border border-gray-300 rounded"
//         />
//       ))}
//     </div>
//   );
// };

// export default DetailsThumb;


import React from 'react';

const DetailsThumb = ({ images, tab, myRef, activeIndex }) => {
  return (
    <div ref={myRef} className="flex overflow-x-auto space-x-2 py-2">
      {images?.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          onClick={() => tab(index)}
          className={`w-24 h-24 object-cover cursor-pointer opacity-70 hover:opacity-100 rounded ${
            index === activeIndex ? 'border-black' : 'border-gray-300'
          } border`}
        />
      ))}
    </div>
  );
};

export default DetailsThumb;
