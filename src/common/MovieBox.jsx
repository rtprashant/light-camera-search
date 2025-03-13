import React from 'react'
import altImage from '../assets/error.jpg'

function MovieBox({image , rating , title , releaseDate }) {
  return (
    <div className='w-44 relative h- rounded-xl  hover:cursor-pointer  transition-transform duration-200 hover:scale-110'>
      <div className='bg-blue-500 w-full h-[75%] rounded-xl z-10'>
        <img src={image} alt={altImage} className=' rounded-xl z-10 ' />
      </div>
      <div className='absolute w-12 h-12 z-40 rounded-full bg-amber-500 flex justify-center items-center text-white font-bold -mt-6 ml-5 font-oswald'>
        {rating}
      </div>
      <div className='font-oswald text-white mt-5 p-2'>
        <div>{title}</div>
        <div>{releaseDate}</div>
      </div>
    </div>
  )
}

export default MovieBox
