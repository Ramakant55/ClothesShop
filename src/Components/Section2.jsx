import React from 'react';
import { Link } from 'react-router-dom';

// const imgItem=[
//   {Name:'/Image/Group1.png'},{Name:'/Image/zara-logo-1 1.png'},{Name:'/Image/gucci-logo-1 1.png'},{Name:'/Image/prada-logo-1 1.png'},{Name:'/Image/Group2.png'}

// ]
const Section2 = () => {
  return (
   <div>
     <div style={{ backgroundImage: `url('/Image/Rectangle 2.png')`}} className='md:h-[660px]'>
     <img className='md:block hidden absolute right-[600px] top-96 ' src='Image/Vector (1).png'></img>
     <img className='md:block hidden absolute right-20 top-36 ' src='Image/Vector.png'></img>
     <div className='md:ml-16'>
     <h1 className="text-4xl font-extrabold w-80 md:pt-20 pt-10 leading-tight pl-7 md:pl-0 ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p className=" md:w-[550px] w-[350px] mt-7 leading-7 text-sm md:text-base pl-7 md:pl-0 text-gray-600 pb-9">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </p>
      <Link to={"/AllProducts"} className="bg-black text-white py-2 px-6 rounded-3xl w-80 md:mb-10 md:ml-0 ml-5 hover:bg-blue-600">
        Shop Now
      </Link>
      <div className="flex md:gap-28 mt-8 pb-5 text-center">
        <label className='ml-8 md:ml-0'>
          <h1 className="md:text-3xl text-xl font-bold">200+</h1>
          <p className='text-sm text-gray-600'>International Brands</p>
        </label>
        <label className='ml-8 md:ml-0'>
          <h1 className="md:text-3xl text-xl font-bold">2,000+</h1>
          <p className='text-sm text-gray-600'>High-Quality Products</p>
        </label>
        <label className='-ml-52 md:-ml-0'>
          <h1 className="md:text-3xl text-xl font-bold md:mt-0 mt-20">30,000+</h1>
          <p className='text-sm text-gray-600'>Happy Customers</p>
        </label>
        </div>
      <div className='md:hidden flex'>
      <img className='w-10 h-10 absolute -bottom-24 ml-6' src='Image/Vector (1).png'></img>
      <img className='w-[100%] h-[400px]' src='Image/Rectangle.png'></img>
      <img className='w-16 h-16  absolute right-6 -bottom-8' src='Image/Vector.png'></img>
      </div>
     </div>
      </div>
      <div className='bg-black md:flex flex-none'>
       <div className='md:ml-16 ml-6 md:flex-none flex gap-x-8 md:h-24 h-20 md:gap-x-24  items-center'> 
        <img className='w-20 h-5 md:w-40 md:h-8' src='Image/Group1.png'></img>
        <img className='w-20 h-5 md:w-36 md:h-8' src='Image/zara-logo-1 1.png'></img>
        <img className='w-20 h-5 md:w-40 md:h-8' src='Image/gucci-logo-1 1.png'></img></div>
        <div className='md:ml-32 ml-12 md:flex-none flex gap-x-12 md:h-24 h-20 md:gap-x-36 pb-8 md:pb-0  items-center'>
          <img className='w-28 h-5 md:w-40 md:h-8' src='Image/prada-logo-1 1.png'></img>
        <img className='w-24 h-5 md:w-40 md:h-8' src='Image/Group2.png'></img></div>
      </div>
   </div>
    
  );
}

export default Section2;
