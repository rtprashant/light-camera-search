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

  function SkeletonMovieDetails (){
    return (
       
<div class="flex flex-row gap-2">
  <div class="flex flex-col gap-2">
    <div class="animate-pulse bg-gray-300 w-96 h-96 rounded-xl"></div>
    <div class="animate-pulse bg-gray-300 w-96 h-5 rounded-full"></div>
  </div>
</div>

    )
  }  
  export {
    SkeletonGrid,
    Skelton,
    SkeletonMovieDetails
  } 



