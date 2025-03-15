import React, { useState } from 'react'

function Skelton() {
  return (

    <div className='animate-pulse h-72 w-40 rounded-xl flex-grow bg-gray-300'>

    </div>


  )
}
function SkeletonGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <Skelton key={index} />
      ))}
    </div>
  );
}

function SkeletonMovieDetailsLarge() {
  return (

    <div class=" w-full h-screen  gap-2">
      <div class="flex flex-col w-full  h-screen justify-center items-center gap-2">
        <div class="animate-pulse bg-gray-300 w-[80%] h-[70%] rounded-xl"></div>
      </div>
    </div>

  )
}
function SkeletonMovieDetailsmobile(){
  return (

    <div class=" w-full h-screen  gap-2">
      <div class="flex flex-col w-full  h-screen justify-center items-center gap-2 mt-4">
        <div class="animate-pulse bg-gray-300 h-[70%] w-[60%] rounded-xl"></div>
        <div class="animate-pulse bg-gray-300 w-[80%] h-[70%] rounded-xl"></div>
      </div>
    </div>

  )

}
export {
  SkeletonGrid,
  Skelton,
  SkeletonMovieDetailsLarge,
  SkeletonMovieDetailsmobile
}



