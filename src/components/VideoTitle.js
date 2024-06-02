import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-sm w-1/4'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black font-bold md:py-2 px-6  md:px-12 w-18 text-lg rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white py-2 px-12 w-18 text-lg bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle