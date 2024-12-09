import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbtn=[
        {id:1,name:'Shop'},
        {id:2,name:'On Sale'},
        {id:3, name:'New Arrivals'},
        {id:4,name:'Brands'}
    ];
  return (
<div>
   <div className='h-20 border-b-2'>

    {/*for desktop*/}
   
     <div className='flex md:justify-around  items-center pt-5 md:ml-0 ml-5'> <img src='Image/menu.png' className='md:hidden h-5 w-5 cursor-pointer'></img>
<Link to="/Home"><h1 className='font-extrabold  text-2xl md:text-4xl md:ml-0 ml-7'>SHOP.CO</h1>
</Link>
<ul className='md:flex hidden md:gap-10 md:cursor-pointer md:font-normal  md:text-gray-800'>
    {navbtn.map((item)=>(
        <li key={item.id}>
            <p className=''>{item.name}</p>
        </li>
    ))}
</ul>
<div className='md:flex md:rounded-3xl   md:bg-gray-200 md:ml-0 ml-16'><img className='w-5 h-5 md:mt-2 md:ml-4' src='Image/icons8-search-50.png'></img>
<input type='text' placeholder='Search for products' className='md:rounded-3xl hidden md:block md:w-96 md:h-9 md:border-none md:focus:outline-none md:ml-3 md:text-xl md:bg-gray-200'></input>
</div>
<div className='flex gap-4 md:ml-0 ml-5'>
<Link to="/cart">
<img className=' w-7 h-7 cursor-pointer' src='Image/cart-icon.png' alt='cart'></img>
</Link>
    <img className='w-7 h-7 cursor-pointer' src='Image/user-icon.png' alt='login'></img>
</div>

    </div>
   </div>
   </div>
  )
}

export default Navbar