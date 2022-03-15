import React from 'react'

function Project() {
  return (
    <div className='h-[calc(100vh-10rem)] w-screen bg-primary flex justify-center items-center absolute bg-opacity-90'>
        <div className='w-[1270px] h-[570px] bg-secondary rounded-2xl flex'>
            <div className='w-1/2 h-full bg-neutral-500 rounded-tl-2xl rounded-bl-2xl'>

            </div>
            <div className='w-1/2 h-full'>
                <p className='w-full h-[150px] border-2 border-white flex justify-center items-center'>Title</p>
                <p className='w-full h-[220px] flex justify-center items-center border-2 border-white'>Description</p>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Project