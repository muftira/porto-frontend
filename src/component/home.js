import React from 'react';
import Img from '../img/photo-png.png'

function Home() {
  return (
  <div>
      
      <div className='h-[calc(100vh-10rem)] w-screen bg-primary flex justify-center '>
        <div className=' w-1/2  flex justify-center '>
            <div className='mt-32 space-y-4'>
                <h6 className='text-gray-500 text-3xl'>Frontend Developer</h6>
                <h1 className='text-6xl font-bold text-white'>Muhammad Mufti </h1>
                <h1 className='text-6xl font-bold text-white'>Ramadhan</h1>
                <p className='text-white text-lg w-[545px]'>This is my official portofolio website to showcase my all works which relate in web development.</p>
                <a href='https://www.instagram.com/' target={'_blank'}>
                  <button className='w-32 h-10 mt-4 bg-button rounded-lg'>Download CV</button>
                </a>
            </div>
        </div>
        <div className='flex justify-center items-center w-1/2 '>
          <div className='flex justify-center items-center h-[500px] w-[500px] bg-button border-radius overflow-hidden'>
            <img className='h-[500px]' src={Img} alt="" />
          </div>
        </div>
      </div>
      <div className='absolute w-screen flex justify-center'>

        <div className='w-1/2 h-20 bg-icon mt-[-50px] flex justify-center items-center rounded-2xl'>
        
        </div>
      </div>
  </div>
  );
}

export default Home;

