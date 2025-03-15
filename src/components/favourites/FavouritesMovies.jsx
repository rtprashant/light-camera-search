import React, { lazy, Suspense, useState } from 'react'
import Header from '../../common/Header'

import { useDispatch, useSelector } from 'react-redux'
import { SkeletonGrid } from '../../common/Skelton'
const FavouritesMoviesPage = lazy(()=>import('./FavouritesMoviesPage'))
function Favourites() {
  
  return (
    <div>
        <Header/>
        <Suspense fallback={<SkeletonGrid/>}>
        <FavouritesMoviesPage />
        </Suspense>
    </div>
  )
}

export default Favourites
