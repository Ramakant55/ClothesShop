import React from 'react'

const Footer = () => {
  return (
    <div className='-mt-14'>
        <div className='md:w-[83%] w-[330px] md:h-[180px] h-80 md:flex relative md:top-24 top-40 bg-black rounded-3xl border-2 border-black md:ml-32 ml-4'>
<p className='text-white font-extrabold text-3xl md:w-96 w-64 md:mt-14 mt-9 ml-11 md:ml-20'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
<div className='mt-12 md:ml-48 ml-5'>
<div className='flex rounded-3xl md:w-96 w-72   bg-gray-200 md:ml-0 '><img className='w-5 h-5  ml-4 mt-3' src='Image/m-icon.png'></img>
<input type='text' placeholder='Enter your email address' className='rounded-3xl md:w-72 w-72 h-10 border-none md:focus:outline-none ml-3  bg-gray-200'></input>
</div>
<button className='rounded-3xl mt-5 md:w-96 w-72  h-10 bg-gray-200'>Subscribe to Newsletter</button>
</div>
        </div>
        <div className='md:bg-red-50 bg-red-200 md:h-[510px] h-[1010px] md:flex '>
          <div className='ml-5 md:ml-32'>
          <h1 className='font-extrabold md:pt-40 pt-52 text-3xl md:text-4xl '>SHOP.CO</h1>
          <p className='md:w-72 w-[315px] text-gray-600 text-sm md:text-base mt-3'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <p className='flex gap-5 mt-7'>
            <img className='w-8 h-8' src='Image/1.png'></img>
            <img className='w-8 h-8' src='Image/2.png'></img>
            <img className='w-8 h-8' src='Image/3.png'></img>
            <img className='w-8 h-8' src='Image/4.png'></img>
          </p>
          </div>
          <div className='text-gray-600 md:flex md:pt-40 pt-10 md:ml-20 ml-5 gap-24 leading-10 text-sm '>
           <div className='flex md:flex-none'>
           <div className=''>
              <h1 className='text-xl font-semibold text-black'>Company</h1>
              <p className='mt-4'>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>
            <div className='md:ml-24 ml-16'>
              <h1 className='text-xl font-semibold text-black'>Help</h1>
              <p className='mt-4'>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
           </div>
          <div className='flex gap-5  mt-8 md:mt-0'>
          <div>
              <h1 className='text-xl font-semibold text-black'>FAQ</h1>
              <p className='mt-4'>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>
            <div className='md:ml-24 ml-3 '>
              <h1 className='text-xl font-semibold text-black '>Resources</h1>
              <p className='mt-4'>Free eBooks</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>
          <div className='md:mt-60 mt-6 border-t-2 border-gray-400 md:left-32 absolute mb-36 md:w-[1135px] w-80'>
           <label className='mt-3 md:flex md:justify-between text-center'>
           <p className=''>Shop.co © 2000-2023, All Rights Reserved</p>
           <img className='w-60 h-10 mt-2 md:ml-0 ml-10' src='Image/Frame 53.png'></img>
           </label>
          </div>
          </div>
        </div>
         
    </div>
  )
}

export default Footer