import React, { useState } from 'react'
import Header from '../../common/Header'
import FavouritesMoviesPage from './FavouritesMoviesPage'
import { useDispatch, useSelector } from 'react-redux'

function Favourites() {
  
  return (
    <div>
        <Header/>
        <FavouritesMoviesPage />
    </div>
  )
}

export default Favourites
