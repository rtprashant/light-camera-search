import React from 'react'
import { errorPage } from '../constant/landingpage'

function ErrorPage() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center  text-center'>
       <div className='text-wrap font-oswald text-white uppercase font-bold'>{errorPage.heading1}</div>
       <div className='font-oswald text-white font-extrabold text-[150px]  leading-none '>
         {errorPage.code}
       </div>
       <div className='text-wrap font-oswald text-white uppercase font-bold'>
        {errorPage.heading2}
       </div>
    </div>
  )
}

export default ErrorPage
