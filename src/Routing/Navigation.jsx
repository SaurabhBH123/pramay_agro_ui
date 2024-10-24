// import React, { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import ErrorPage from "../pages/ErrorPage";
// import Login from "../pages/Login";
// import Contactus from "../pages/Contactus";
// import Home from "../pages/Home";
// import Aboutus from "../pages/Aboutus";
// import Whyus from "../pages/Whyus";
// import Blogs from "../pages/Blogs";


// import Register from "../pages/Register";
// import ForgotPassword from "../pages/ForgotPassword";
// import AccountLayout from "../pages/MyAccount";
// import Dashboard from "../pages/MyAccount/Dashboard";
// import Orders from "../pages/MyAccount/Orders";
// import Addresses from "../pages/MyAccount/Addresses";
// import AccountDetails from "../pages/MyAccount/AccountDetails";
// import Wishlist from "../pages/MyAccount/Wishlist";
// import BillingAddress from "../pages/MyAccount/BillingAddress";
// import Products from "../pages/Products/Products";
// import ProductDetail from "../pages/Products/ProducDetails/ProductDetail";
// import Cart from "../pages/Cart/Cart";
// import Checkout from "../pages/CheckOut";
// import OrderConfirmation from "../pages/CheckOut/OrderConfirmation";



// const Navigation = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="mt-0">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/contactus" element={<Contactus />} />
//         <Route path="/Aboutus" element={<Aboutus />} />
//         <Route path="/Whyus" element={<Whyus />} />
//         <Route path="/Blogs" element={<Blogs />} />
//         <Route path="/Cart" element={<Cart />} />
//         <Route path="/Products/:id" element={<Products />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/ForgotPassword" element={<ForgotPassword />} />
//         <Route path="/ProductDetails/:id" element={<ProductDetail />}/>
//         <Route path="/checkout" element={<Checkout />}></Route>
//         <Route path="/OrderConfirmation" element={<OrderConfirmation />}></Route>
        
//         <Route path="/myaccount" element={<AccountLayout />}>
//                     <Route path="dashboard" element={<Dashboard />} />
//                     <Route path="orders" element={<Orders />} />
//                     <Route path="wishlist" element={<Wishlist />} />
//                     <Route path="addresses" element={<Addresses />} />
//                     <Route path="details" element={<AccountDetails />} />
//                     <Route path="billingAddress" element={<BillingAddress />} />       
//         </Route>
                     
//         <Route path="*" element={<ErrorPage />} />
        

//       </Routes>
//     </div>
//   );
// };

// export default Navigation;


import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Contactus from "../pages/Contactus";
import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus";
import Whyus from "../pages/Whyus";
import Blogs from "../pages/Blogs";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import AccountLayout from "../pages/MyAccount";
import Dashboard from "../pages/MyAccount/Dashboard";
import Orders from "../pages/MyAccount/Orders";
import Addresses from "../pages/MyAccount/Addresses";
import AccountDetails from "../pages/MyAccount/AccountDetails";
import Wishlist from "../pages/MyAccount/Wishlist";
import BillingAddress from "../pages/MyAccount/BillingAddress";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/Products/ProducDetails/ProductDetail";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/CheckOut";
import OrderConfirmation from "../pages/CheckOut/OrderConfirmation";
import BlogPage from "../pages/SingleBlog";
import Careers from "../pages/Careers";
import CareerDetail from "../pages/CareerDetails";

const Navigation = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); 
  return (
    <div className="mt-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetail />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
        <Route path="/blogpage/:id" element={<BlogPage />} />
        
        <Route path="/myaccount" element={<AccountLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="details" element={<AccountDetails />} />
          <Route path="billingaddress" element={<BillingAddress />} />
        </Route>
                     
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Navigation;
