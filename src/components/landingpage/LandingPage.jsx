import React, { lazy, Suspense } from 'react'
import Header from '../../common/Header'
import SearchBar from '../../common/SearchBar'
import { SkeletonGrid } from '../../common/Skelton'
import { useSelector } from 'react-redux'
import SearchResult from '../../common/SearchResult'
const LatestMovies = lazy(()=>import('./LatestMovies'))

function LandingPage() {
  const { searchRes } = useSelector(state => state.search)
  return (
    <div className='bg-[#353839]  h-min-screen'>
      <Header/>
      <SearchBar/>
      <Suspense fallback={ <SkeletonGrid/>}>
      {
        searchRes?.length>0 ? <SearchResult/> :<LatestMovies/>
      }
      
      </Suspense>
     
    </div>
  )
}

export default LandingPage
