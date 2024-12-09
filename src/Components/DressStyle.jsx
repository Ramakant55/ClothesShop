import React from 'react'

const DressStyle = () => {
  return (
    <div>
        <div className='md:bg-red-50 bg-red-100 md:h-[770px] h-[1090px]  mb-5 md:w-[85%] w-[88%] md:ml-32 ml-5 rounded-3xl pt-10'>
        <h1 className='text-center font-extrabold text-3xl  mb-7'>BROWSE BY DRESS STYLE</h1>
       <div className='md:flex md:gap-5 md:ml-7 ml-3 mt-10 md:space-y-0 space-y-7'>
       <div style={{backgroundImage:`url('Image/image 11.png')`}} className='md:w-[405px]  w-[290px] bg-contain bg-no-repeat md:h-[289px] h-52  rounded-3xl'>
       <p className='font-bold text-2xl p-7'>Casual</p>
        </div>
        <div style={{ backgroundImage: `url('/Image/image 13.png')` }}
  className='md:w-[690px] w-[290px] md:h-[289px] h-[208px] bg-cover bg-center bg-no-repeat rounded-3xl '>
  <p className='font-bold text-2xl p-7'>Formal</p>
</div>

       </div>
       <div className='md:flex md:gap-5 md:mt-5 mt-7 md:ml-7 ml-3 md:space-y-0 space-y-7'>
       <div style={{backgroundImage:`url('Image/image 12.png')`}} className='md:w-[690px] w-[290px] bg-cover bg-center  h-[208px]  md:h-[289px] rounded-3xl'>
       <p className='font-bold text-2xl p-7'>Party</p>
       </div>
       <div style={{backgroundImage:`url('Image/image 14.png')`}} className='md:w-[410px] w-[289px] md:h-[289px] h-[208px]  bg-cover bg-center rounded-3xl'>
       <p className='font-bold text-2xl p-7'>Gym</p>
        </div>
       
       </div>
      </div>
      <div className='mt-14 md:ml-32 ml-5'>
        <h1 className=' text-3xl font-extrabold flex md:gap-96'>OUR HAPPY CUSTOMERS<span className='flex md:ml-[450px] absolute  md:right-24 right-10'><img className='w-6 h-6' src='Image/arrow-l.png'></img><img className='ml-4 w-6 h-6' src='Image/arrow-r.png'></img></span></h1>
     <div className='flex gap-10 mt-5 md:overflow-clip overflow-scroll'>
     <div className='w-[350px] border-2 h-48 rounded-3xl text-sm'>
        <img className='ml-5 mt-6' src='Image/Frame 12.png'></img>
        <h1 className='text-base font-bold ml-5 mt-2 flex'>Sarah M.<span><img src='Image/blue-t.png'></img></span></h1>
        <p className='w-[300px] ml-5 text-gray-600'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
      </div>
      <div className='w-[350px] border-2 h-48 rounded-3xl text-sm'>
        <img className='ml-7 mt-6' src='Image/Frame 12.png'></img>
        <h1 className='text-base font-bold ml-7 mt-2 flex'>Alex K.<span><img src='Image/blue-t.png'></img></span></h1>
        <p className='w-[300px] ml-7 text-gray-600'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
      </div>
      <div className='w-[350px] border-2 h-48 rounded-3xl text-sm'>
        <img className='ml-7 mt-6' src='Image/Frame 12.png'></img>
        <h1 className='text-base font-bold ml-7 mt-2 flex'>James L.<span><img src='Image/blue-t.png'></img></span></h1>
        <p className='w-[300px] ml-7 text-gray-600'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
      </div>
      <div className='w-[350px] border-2 h-48 rounded-3xl text-sm'>
        <img className='ml-7 mt-6' src='Image/Frame 12.png'></img>
        <h1 className='text-base font-bold ml-7 mt-2 flex'>Mooen<span><img src='Image/blue-t.png'></img></span></h1>
        <p className='w-[300px] ml-7 text-gray-600'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
      </div>
     </div>
      </div>
    </div>
  )
}

export default DressStyle;