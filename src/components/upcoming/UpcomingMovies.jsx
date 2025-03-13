import React, { lazy, Suspense } from 'react'
import Header from '../../common/Header'
import SearchBar from '../../common/SearchBar'
import { SkeletonGrid } from '../../common/Skelton'
import { useSelector } from 'react-redux'
import ErrorPage from '../../common/ErrorPage'
import SearchResult from '../../common/SearchResult'
const UpcomingMoviesPage = lazy(() => import('./UpcomingMoviesPage'))
function UpcomingMovies() {
    const { loading, error } = useSelector(state => state.api)
    const { searchRes } = useSelector(state => state.search)
    return (

        <div className='bg-[#353839]  h-min-screen'>
            <Header />
            <SearchBar />
            <Suspense fallback={<SkeletonGrid />}>
            {
                searchRes?.length>0 ? <SearchResult/>:  <UpcomingMoviesPage />
            }
               
            </Suspense>

        </div>


    )




}

export default UpcomingMovies
