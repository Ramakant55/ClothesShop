import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const CartPage = () => {
return(
  <div>
<Navbar/>
<div className='bg-black text-white max-h-screen border-2 border-black rounded-3xl mt-20'>
<p className=' text-3xl font-bold text-center'>Cart is Empty</p>
</div>
<Footer/>
  </div>
)
}

export default CartPage