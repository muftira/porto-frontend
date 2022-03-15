import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

function Footer() {
  return (
  <div className='w-screen h-24 bg-secondary flex '>
      <div className='flex items-center pl-6  border-white w-1/2'>

        <p className='text-white'>Copyright 2022 Muftira</p>
      </div>
      <div className='flex items-center justify-end  border-white w-1/2 pr-6'>
        <a href="https://www.instagram.com/muftiram/" target={'_blank'}><div className='flex justify-center items-center w-10 h-10 bg-button rounded-full mr-3'><BsInstagram size='25px'/></div></a>
        <a href="https://api.whatsapp.com/send?phone=6281313201176&text=Hello%20Mufti,%20I%20am%20interesting%20with%20your%20project%20in%20portfolio%20website." target={'_blank'}><div className='flex justify-center items-center w-10 h-10 bg-button rounded-full mr-3'><BsWhatsapp size='25px'/></div></a>
        <a href="https://github.com/muftira/" target={'_blank'}><div className='flex justify-center items-center w-10 h-10 bg-button rounded-full'><AiFillGithub size='25px'/></div></a>
        
        
        
        
        
      </div>
      
  </div>
  );
}

export default Footer;
