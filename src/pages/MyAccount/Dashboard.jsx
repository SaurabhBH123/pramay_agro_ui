import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchUsers } from '../../redux/slice/userSlice';
import Translates from '../../components/Translates';

const Dashboard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  const dispatch = useDispatch()

  const token = useSelector(state => state.auth.user.token)

  useEffect(() => {
    dispatch(fetchUsers(token))
  }, [])
  const user = useSelector((state) => state.user.data)

  
  return (
    <div className='mx-auto mt-16 p-6  ' data-aos="fade-in">
      <p className='mb-6 text-lg sm:text-xl md:text-2xl'>
        Hello <span className='font-bold'>{user?.username}</span>
      </p>
      <p className='text-sm sm:text-base md:text-lg mb-14'>
        From your account dashboard you can view your recent{' '}
        <NavLink to="/myaccount/orders" className="text-[#c026d3] underline">orders</NavLink>,{' '}
        manage your{' '}
        <NavLink to="/myaccount/addresses" className="text-[#c026d3] underline">shipping and billing addresses</NavLink>, and{' '}
        <NavLink to="/myaccount/details" className="text-[#c026d3] underline">edit your password and account details</NavLink>.
      </p>
      {/* <Translates className='mt-9'/> */}
    </div>
  );
}

export default Dashboard;
