import React from 'react'
import ShippingAddress from '../MyAccount/ShippingAddress'
import Addresses from '../MyAccount/Addresses'
import Cart from '../Cart/Cart'
import Items from './Components/Items'

const Checkout = () => {
  return (
    <div className='mt-28 mx-2 md:mx-11 lg:mx-20'>
      <Addresses/>
      <Items/>
    </div>
  )
}

export default Checkout
