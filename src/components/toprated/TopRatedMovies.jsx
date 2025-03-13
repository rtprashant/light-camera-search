import React, { lazy, Suspense } from 'react'
import Header from '../../common/Header'
import SearchBar from '../../common/SearchBar'
import { SkeletonGrid } from '../../common/Skelton'
import SearchResult from '../../common/SearchResult'
import { useSelector } from 'react-redux'
const TopRatedMoviesPage = lazy(()=>import('./TopRatedMoviesPage'))

function TopRatedMovies() {
  const { searchRes } = useSelector(state => state.search)
  return (
    <div className='bg-[#353839]  h-min-screen'>
      <Header/>
      <SearchBar/>
      <Suspense fallback={ <SkeletonGrid/>}>
      {
         searchRes?.length>0 ? <SearchResult/> :  <TopRatedMoviesPage/>
      }
    
      </Suspense>
     
    </div>
  )
}

export default TopRatedMovies

