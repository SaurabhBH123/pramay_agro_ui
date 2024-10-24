import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../config';
import { Link, useLocation, useParams } from 'react-router-dom';
import FilterSidebar from './Components/FilterSidebar';
import { useDispatch, useSelector } from 'react-redux';
import Categoriesection from './Components/CatergorySec';
import { fetchCategoriesById } from '../../redux/slice/CategoriesSlice';

import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        categories: ['Fruit', 'Vegetable', 'Grain'],
        size: ['Small', 'Medium', 'Large'],
        segment: ['Organic', 'Inorganic'],
        specialtyCrops: ['Tomato', 'Corn', 'Wheat'],
    });
    const token = useSelector((state) => state.auth?.user?.token);
    
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const handleFilterChange = (event) => {
        console.log(`${event.target.value} filter changed`);
    };

    const { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        fetchData()
        dispatch(fetchCategoriesById(id))
    }, [id]);

    const fetchData = () => {
        setLoading(true);
        axios.get(`${BaseUrl}/api/get/all/products/?categoryId=${id}`)
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
                // console.log(res.data);
            })

            .catch((err) => {
                console.log("errr", err);
                setLoading(false);
            });
    }


    const handleAddToCart = (product) => {
        if (!token) {
            return toast.error('it seem you are not login please login to continue...', toastOptions);
        }
        axios.post(`${BaseUrl}/api/post/card`, { product: product._id, quantity: 1 }, {
            headers: {
                Authorization: token,
            }
        })
            .then((res) => {
                console.log(res)

                toast.success('product added to cart successfuly', toastOptions);
            })
            .catch((err) => {
                console.log(err);
                toast.error('somthing went wrong !', toastOptions);
            });
    };
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <div className='m-8 mt-28'>
            {/* <div className='mb-8'>
                <Link to="/">Home | </Link>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <span key={name} className='text-[#f97316]'>
                            {!isLast ? (
                                <Link to={routeTo}>{name}</Link>
                            ) : (
                                <span>{name}</span>
                            )}
                            {!isLast && ' / '}
                        </span>
                    );
                })}
            </div> */}
            <Categoriesection />

            <div className="flex flex-col md:flex-row">
                <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
                <div className="flex-grow ">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="loader"></div>
                        </div>
                    ) : products.length === 0 ? (
                        <div className="flex justify-center items-center h-64">
                            <p className="text-xl font-semibold text-gray-500">Sorry, we couldn't find any products matching your criteria.</p>
                        </div>
                    ) : (
                        <section
                            id="Projects"
                            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-8 mt-20 mb-5"
                        >
                            {products.map((product) => (
                                // <div key={product._id} className="w-[290px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-200">
                                //     <a href="#" className="block relative">
                                //         <img
                                //             src={product.banner}
                                //             alt={product.title}
                                //             className="h-60 w-full object-contain mt-2 rounded-t-xl transition-opacity duration-300 hover:opacity-90"
                                //         />
                                        
                                //     </a>
                                //     <div className="px-4 py-3">
                                //         <p className="text-lg font-bold text-black truncate capitalize">{product.title}</p>
                                //         {product.sizes && product.sizes.length > 0 && (
                                //             <div className="mt-2">
                                //                 <p className="text-gray-400 uppercase text-xs">Available Sizes:</p>
                                //                 <ul className="mt-1">
                                //                     {product.sizes.map((size) => (
                                //                         <li key={size._id} className="text-sm text-gray-600">{size.size} - ${size.price.toFixed(2)}</li>
                                //                     ))}
                                //                 </ul>
                                //             </div>
                                //         )}
                                //         <div className="flex justify-between items-center mt-3">
                                //             <p className="text-lg font-semibold text-black cursor-auto">
                                //                 {product.sizes && product.sizes.length > 0 ? `$${product.sizes[0].price.toFixed(2)}` : 'Price not available'}
                                //             </p>
                                //             <button
                                //                 className="text-white font-serif text-[10px] bg-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-colors duration-300"
                                //                 onClick={() => handleAddToCart(product)}
                                //             >
                                //                 ADD TO CART
                                //             </button>
                                //         </div>
                                //     </div>
                                // </div>
                                <Product product={product}/>
                            ))}
                        </section>
                    )}
                </div>
            </div>
            
        </div>
    );
};

export default Products;
