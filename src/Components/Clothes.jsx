import React from 'react'

const Clothes = () => {
  return (
    <div className='pb-10'>
        <h1 className='text-center font-extrabold text-3xl mt-16 mb-12'>NEW ARRIVALS</h1>
    <div className='flex gap-8  md:ml-32 ml-4 overflow-scroll md:overflow-hidden'>
    <div className=''>
            <img className='' src='Image/Frame 32.png'></img>
            <p className='font-medium w-48'>T-Shirt With Tape Details</p>
            <p className='flex'><img className='h-4 mt-1' src='Image/Frame 10.png'></img><span className='ml-3'>4.5/5</span></p>
            <p className='font-medium'>$120</p>
     </div>
     <div>
     <img src='Image/Frame 33.png'></img>
        <p className='font-medium w-48'>Skinny Fit Jeans</p>
        <p className='flex'><img className='h-4 mt-1' src='Image/Frame 11.png'></img><span className='ml-3'>3.5/5</span></p>
        <p className='font-medium'>$240<span className='text-gray-500 ml-6'>$260</span><span className='text-red-600  text-xs ml-5 font-normal rounded-3xl bg-gray-200 px-3 py-1'>-20%</span></p>
     </div>  
        <div>
        <img src='Image/Frame 34.png'></img>
        <p className='font-medium w-48'>Checkered Shirt</p>
        <p className='flex'><img className='h-4 mt-1' src='Image/Frame 10.png'></img><span className='ml-3'>4.5/5</span></p>
        <p className='font-medium'>$180</p>
        </div>
      <div className='pr-8'>
      <img src='Image/Frame 38.png'></img>
        <p className='font-medium w-48'>Sleeve Striped T-Shirt</p>
        <p className='flex'><img className='h-4 mt-1' src='Image/Frame 10.png'></img><span className='ml-3'>4.5/5</span></p>
        <p className='font-medium'>$130<span className='text-gray-500 ml-6'>$160</span><span className='text-red-600  text-xs ml-5 font-normal  rounded-3xl bg-gray-200 px-3 py-1'>-30%</span></p>
      </div>
    </div>
    <button className='border-2 border-gray-200 md:w-56 w-80 rounded-3xl h-10 md:ml-[640px] ml-5 mt-10'>View All</button>

      <p className='border-b-2 md:w-[82%] w-[85%] md:ml-32 ml-7 mt-10'></p>
    </div>
  )
}

export default Clothes