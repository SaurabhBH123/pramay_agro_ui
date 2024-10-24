import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BillingAddress from './BillingAddress';
import ShippingAddress from './ShippingAddress';
import { fetchUsers } from '../../redux/slice/userSlice';

const Addresses = () => {
    const [showBilling, setShowBilling] = useState(false);
    const [showShipping, setShowShipping] = useState(false);
    
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.user.token)
    useEffect(() => {
        dispatch(fetchUsers(token))
      }, [])

    const shipping = useSelector((state) => state.user.data?.addresses?.shipping);
    const billing = useSelector((state) => state.user.data?.addresses?.billing);
    return (
        <div className='mt-16'>
            <p className='font-sans'>The following addresses will be used on the checkout page by default.</p>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-11 gap-6'>
                <div>
                    <div className='w-full flex justify-between items-center mt-11 pr-20'>
                        <p className='font-bold text-lg'>Billing address</p>
                        <p className='text-blue-500 cursor-pointer' onClick={() => setShowBilling(!showBilling)}>
                            {showBilling ? 'CLOSE' : billing ? 'EDIT' : 'ADD'}
                        </p>
                    </div>
                    {showBilling ? (
                        <BillingAddress setShowBilling={setShowBilling} />
                    ) : (
                        <p className='mt-5'>
                            {billing ? (
                                <div>
                                    {/* Display billing address details */}
                                    <p className='font-light'>{billing?.firstName} {billing?.lastName}</p>
                                    <p className='font-light'>{billing?.address}</p>
                                    <p className='font-light'>{billing?.phone}</p>
                                    <p className='font-light'>{billing?.zip}</p>
                                    <p className='font-light'>{billing?.state}</p>
                                    <p className='font-light'>{billing?.pincode}</p>
                                    <p className='font-light'>{billing?.companyName}</p>
                                    <p className='font-light'>{billing?.email}</p>
                                </div>
                            ) : (
                                'You have not set up this type of address yet!'
                            )}
                        </p>
                    )}
                </div>

                <div>
                    <div className='w-full flex justify-between items-center mt-11 pr-20'>
                        <p className='font-bold text-lg'>Shipping address</p>
                        <p className='text-blue-500 cursor-pointer' onClick={() => setShowShipping(!showShipping)}>
                            {showShipping ? 'CLOSE' : shipping ? 'EDIT' : 'ADD'}
                        </p>
                    </div>
                    {showShipping ? (
                        <ShippingAddress setShowShipping={setShowShipping}/>
                    ) : (
                        <p className='mt-5'>
                            {shipping ? (
                                <div>
                                    {/* Display shipping address details */}
                                    <p className='font-light'>{shipping?.firstName} {shipping?.lastName}</p>
                                    <p className='font-light'>{shipping?.address}</p>
                                    <p className='font-light'>{shipping?.phone}</p>
                                    <p className='font-light'>{shipping?.zip}</p>
                                    <p className='font-light'>{shipping?.state}</p>
                                    <p className='font-light'>{shipping?.pincode}</p>
                                    <p className='font-light'>{shipping?.companyName}</p>
                                    <p className='font-light'>{shipping?.email}</p>
                                </div>
                            ) : (
                                'You have not set up this type of address yet!'
                            )}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Addresses;
