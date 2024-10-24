import React, { useState, useEffect, useRef } from 'react';
import DetailsThumb from '../Components/DetailsThumb';
import Colors from '../Components/Colors';
import { useParams } from 'react-router-dom';
import { BaseUrl } from '../../../config';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRating from './components/StarRating';
import TopTab from './components/TopTab';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Reviews from './components/Reviews';
import SubmitReview from './components/SubmitReview';

const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const myRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    Array.from(images).forEach((image, i) => {
      image.classList.toggle('active', i === index);
    });
  };

  useEffect(() => {
    if (myRef.current) {
      myRef.current.children[index].classList.add('active');
    }
  }, [index]);

  const { id } = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/get/product/${id}`);
      setProducts([response.data]);
      
      if (response.data.sizes && response.data.sizes.length > 0) {
        setSelectedSize(response.data.sizes[0].size);
        setPrice(response.data.sizes[0].price);
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSelectedSize(selectedSize);
    const selectedProduct = products[0];
    const selectedPrice = selectedProduct.sizes.find(size => size.size === selectedSize)?.price;
    setPrice(selectedPrice);
  };

  const handleQuantityChange = (type) => {
    setQuantity(prevQuantity => {
      if (type === "increment") return prevQuantity + 1;
      if (type === "decrement" && prevQuantity > 1) return prevQuantity - 1;
      return prevQuantity;
    });
  };

  const token = useSelector((state) => state.auth?.user?.token);

  const handleAddToCart = (product) => {
    if (!token) {
      return toast.error('It seems you are not logged in. Please log in to continue...', toastOptions);
    }
    axios.post(`${BaseUrl}/api/post/cart`, { product: product._id, size: selectedSize, quantity: quantity }, {
        headers: {
          Authorization: token,
        }
      })
      .then((res) => {
        toast.success(`Product added to cart successfully with ${quantity} Quantity`, toastOptions);
      })
      .catch((err) => {
        toast.error('Something went wrong!', toastOptions);
      });
  };

  return (
    <div className='mt-20 m-8'>
      {products.map((item) => (
        <div className="flex flex-wrap justify-around py-8" key={item._id}>
          <div data-aos="fade-up" className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="overflow-hidden">
              <img src={item.images[index]} alt="" className="w-full h-96 object-cover" />
            </div>
          </div>

          <div data-aos="fade-left" className="flex-1 w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="flex justify-between mb-4">
              <h2 className="uppercase tracking-wider text-lg font-bold">{item.title}</h2>
            </div>
            
            {item.description.paragraphs.map((paragraph, index) => (
              <h1 className="block text-[15px] my-1 leading-relaxed " key={index}>{paragraph}</h1>
            ))}
            <div className='flex flex-row items-center gap-5'>
              <select value={selectedSize} onChange={handleSizeChange} className="my-4 p-2 border rounded">
                {item.sizes.map((sizeOption) => (
                  <option key={sizeOption._id} value={sizeOption.size}>
                    {sizeOption.size}
                  </option>
                ))}
              </select>
              <div className="flex items-center">
                <button onClick={() => handleQuantityChange("decrement")} className="px-4 py-2 border text-gray-800 rounded-l">
                  -
                </button>
                <span className="px-4 py-2 border-t border-b">{quantity}</span>
                <button onClick={() => handleQuantityChange("increment")} className="px-4 py-2 border text-gray-800 rounded-r">
                  +
                </button>
              </div>
            </div>
            <div className='flex flex-row items-center gap-5'>
              <h5 className='block text-lg'>₹{price}</h5>
              <StarRating rating={item.averageRating} reviews={item.reviews.length} /> 
            </div>
            
            <DetailsThumb images={item.images} tab={handleTab} myRef={myRef} />
            <div data-aos="fade-up" className='flex flex-row items-center gap-7 mt-10'>
              <p className='block text-lg font-bold'>Total: ₹{(price * quantity).toFixed(2)}</p>

              <button className="bg-gray-800 text-white py-2 px-6  rounded" onClick={() => { handleAddToCart(item) }}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
      <TopTab data={products[0]} />
      <Reviews reviews={products[0]?.reviews}/>
      <SubmitReview/>
    </div>
  );
};

export default ProductDetail;
