import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <div className='flex justify-between items-center h-16 w-screen bg-primary font-roboto' >
        <h1 className='ml-20 text-button font-extrabold text-2xl'>MUFTIRA.</h1>
        <ul className='flex mr-20 text-white cursor-pointer font-bold'>
          <li className='hover:text-button'><Link to='/'>Home</Link></li>
          <li className='mx-14 hover:text-button'><Link to='/porto'>Portofolio</Link></li>    
          <li className='hover:text-button' ><Link to='/about'>About</Link></li>     
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
