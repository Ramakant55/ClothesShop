import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Section2 from './Components/Section2';
import Clothes from './Components/Clothes';
import TopCloth from './Components/TopCloth';
import DressStyle from './Components/DressStyle';
import Footer from './Components/Footer';
import CartPage from './Components/CartPage';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
function App() {
  return (
   
    <>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/Home' element={<Home/>}/>
          <Route path='/AllProducts' element={<AllProducts/>}/>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
    </>
  
   
  );
}

export default App;
