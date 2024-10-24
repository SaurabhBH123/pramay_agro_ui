// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { BaseUrl } from '../../config';

// const App = () => {
//   const token = useSelector(state => state.auth.user.token);
//   const [wishlist, setWishlist] = useState([]);
//   const [loadingItemId, setLoadingItemId] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, [token]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${BaseUrl}/getWishlist`, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//       });
//       setWishlist(response.data);
//       // console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleRemove = async (id) => {
//     try {
//       setLoadingItemId(id);
//       const response = await axios.delete(`${BaseUrl}/deleteWishlist/${id}`, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//       });
//       console.log(response);
//       setLoadingItemId(null);
//       fetchData();
//     } catch (error) {
//       setLoadingItemId(null);
//       console.log(error);
//     }
//   };

//   if (wishlist.length === 0) {
//     return (
//       <p className='mt-20 ml-20 text-[#e11d48]'>NO item for wishlist !</p>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4 mt-20">
//       <table className="min-w-full bg-white border-collapse">
//         <thead className="text-white">
//           <tr>
//             <th className="border font-serif font-normal px-4 py-2 text-black">Item</th>
//             <th className="border font-serif font-normal px-4 py-2 text-black">Product Name</th>
//             <th className="border font-serif font-normal px-4 py-2 text-black">Unit Price</th>
//             <th className="border font-serif font-normal px-4 py-2 text-black">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {wishlist.map((product) => (
//             <tr key={product.id} className="border-t border-gray-300">
//               <td className="border border-gray-300 px-4 py-2">
//                 <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
//               </td>
//               <td className="border border-gray-300 px-4 py-2">{product.name}</td>
//               <td className="border border-gray-300 px-4 py-2">{product.price} .rs</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 <button className="border border-gray-300 bg-[#0f172a] text-white font-normal px-6 py-1 ml-24 rounded mr-2 ">
//                   Add to Cart
//                 </button>
//                 <button
//                   className="border border-gray-300 px-6 py-1 rounded mr-2"
//                   onClick={() => handleRemove(product._id)}
//                   disabled={loadingItemId === product._id}
//                 >
//                   {/* {loadingItemId === product._id ? 'Deleting...' : 'Remove'} */}
//                   Remove
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BaseUrl } from '../../config';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const token = useSelector(state => state.auth.user.token);
  const navigate = useNavigate()
  const [wishlist, setWishlist] = useState([]);
  const [loadingItemId, setLoadingItemId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/getWishlist`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      setWishlist(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleRemove = async () => {
    try {
      setLoadingItemId(selectedItemId);
      console.log(selectedItemId)
      setModalVisible(false);
      const response = await axios.delete(`${BaseUrl}/deleteWishlist/${selectedItemId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      
      setLoadingItemId(null);
      fetchData();
    } catch (error) {
      setLoadingItemId(null);
      console.log(error);
    }
  };

  const showModal = (id) => {
    setSelectedItemId(id);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItemId(null);
  };

  if (wishlist.length === 0) {
    return (
      <p className='mt-20 ml-20 text-[#e11d48]'>NO item for wishlist !</p>
    );
  }

  const handleProductDetails = (id) => {
    console.log(id)
    navigate(`/ProductDetails/${id}`);
};

  return (
    <div className="container mx-auto p-4 mt-20">
      <table className="min-w-full bg-white border-collapse">
        <thead className="text-white">
          <tr>
            <th className="border font-serif font-normal px-4 py-2 text-black">Item</th>
            <th className="border font-serif font-normal px-4 py-2 text-black">Product Name</th>
            <th className="border font-serif font-normal px-4 py-2 text-black">Unit Price</th>
            <th className="border font-serif font-normal px-4 py-2 text-black">Action</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((product) => (
            <tr key={product._id} className="border-t border-gray-300">
              <td className="border border-gray-300 px-4 py-2">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover cursor-pointer" onClick={()=>{handleProductDetails(product.productId)}}/>
              </td>
              <td className="border border-gray-300 px-4 py-2">{product.name}</td>
              <td className="border border-gray-300 px-4 py-2">{product.price} .rs</td>
              
              <td className="border border-gray-300 px-0 py-0 items-center">
                {/* <button className="border border-gray-300 bg-[#0f172a] text-white font-normal px-6 py-1 ml-24 rounded mr-2 ">
                  Add to Cart
                </button> */}
                <button
                  className="border border-gray-300 px-6 py-1 rounded ml-11 "
                  onClick={() => showModal(product._id)}
                  disabled={loadingItemId === product._id}
                >
                  Remove
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Are you sure you want to delete this product from your wishlist?</h2>
            <div className="flex justify-end">
              <button className="border border-gray-300 px-4 py-2 rounded mr-2" onClick={closeModal}>
                Cancel
              </button>
              <button className="border border-red-600 bg-red-600 text-white px-4 py-2 rounded" onClick={handleRemove}>
                {loadingItemId === selectedItemId ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
