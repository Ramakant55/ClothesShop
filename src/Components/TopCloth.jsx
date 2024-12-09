import React from 'react'

const TopCloth = () => {
  return (
    <div className='pb-10'>
        <h1 className='text-center font-extrabold text-3xl mt-7 mb-12'>TOP SELLING</h1>
    <div className='flex gap-8  md:ml-32 ml-4 overflow-scroll md:overflow-hidden'>
    <div className=''>
            <img className='' src='Image/Frame 2.png'></img>
            <p className='font-medium w-48'>Vertical Striped Shirt</p>
            <p className='flex'><img className='h-4 mt-1' src='Image/Frame 12.png'></img><span className='ml-3'>5.0/5</span></p>
            <p className='font-medium'>$212<span className='text-gray-500 ml-6'>$232</span><span className='text-red-600  text-xs ml-5 font-normal rounded-3xl bg-gray-200 px-3 py-1'>-20%</span></p>

     </div>
     <div>
     <img src='Image/Frame 3.png'></img>
        <p className='font-medium w-48'>Courage Graphic T-Shirts</p>
        <p className='flex'><img className='h-4 mt-1' src='Image/Frame 13.png'></img><span className='ml-3'>4.0/5</span></p>
        <p className='font-medium'>$145</p>
     </div>  
        <div>
        <img src='Image/Frame 4.png'></img>
        <p className='font-medium w-48'>Loose Fit Bermuda Shorts</p>
        <p className='flex'><img className='h-4 mt-1' src='Image/Frame 14.png'></img><span className='ml-3'>3.0/5</span></p>
        <p className='font-medium'>$80</p>
        </div>
      <div className='pr-8'>
      <img src='Image/Frame 5.png'></img>
        <p className='font-medium w-48'>Faded Skinny Jeans</p>
        <p className='flex'><img className='h-4 mt-1' src='Image/Frame 10.png'></img><span className='ml-3'>4.5/5</span></p>
        <p className='font-medium'>$210</p>
      </div>
    </div>
      <button className='border-2 border-gray-200 md:w-56 w-80 rounded-3xl h-10 md:ml-[640px] ml-5 mt-10'>View All</button>
    </div>
  )
}

export default TopCloth