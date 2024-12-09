import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function AllProducts() {
  const [products, setProducts] = useState([]);

  
    const api = async () => {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(response.data);
      // console.log(products);
    }; 
    useEffect(()=>{
      api();
  },[]);

  return (
    (products.length>0)?(
      <div className=' pb-10'>
      <div><Navbar/></div>
      <p className='text-3xl font-bold underline text-center pt-10'>All Products</p>
    <div  className='md:ml-24 flex flex-wrap justify-start '>  
  {
      products.map((data,index) => (
      <div state={{index,products}}  key={data.id} className='bg-slate-200 w-80 md:ml-20 ml-5  rounded-xl mt-10 shadow-xl'>  
       <div className='p-5'>
        <p>Name: {data.title}</p>
        <p>Price: ${data.price}</p>
        </div>
      <img className='h-40 w-40 ml-20 rounded' src={data.images} alt="sorry" />
      </div>
    ))
  }
    </div>
    </div>):(
       <div className="flex items-center justify-center font-bold text-3xl h-[100vh]">
         <p>Loading...</p>
         </div>
    )
  );
}

export default AllProducts;


