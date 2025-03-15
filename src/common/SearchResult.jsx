import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorPage from './ErrorPage'
import { category, errorPage, loadingIcon, movieSearch } from '../constant/landingpage'
import MovieBox from './MovieBox'
import { useNavigate } from 'react-router-dom'
import errorImage from '../assets/error.jpg'
import { incrementPage } from '../redux/features/Searching'

function SearchResult() {
  
    const { searching,
        searchRes,
        searchErr , page } = useSelector(state => state.search)
        const navigate = useNavigate()
    const dispatch  = useDispatch()
    const { loading, error } = useSelector(state => state.api)

    const imagePrifix = "https://image.tmdb.org/t/p/w185"
    const handleDeatailsClick = (id) => {
        navigate(`/movie-deatails/${id}`)
    }
    // useEffect(() => {
    //         if (!searchErr) {
    //             const handleScroll = () => {
    //                 if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
    //                     dispatch(incrementPage())
                        
    //                 }
    //             };
    //             window.addEventListener("scroll", handleScroll);
    //             return () => window.removeEventListener("scroll", handleScroll);
    
    //         }
    //     }, [ searchErr]);
    //     useEffect(()=>{
    //         console.log(page);
    //         console.log( searchRes?.length);
            
            
    //     },[page])
        
    return (
        <div>
            <div>
                <div>
                    <div className='ml-4 lg:ml-9  sm: md: font-semibold font-oswald text-[30px] text-white '>{movieSearch.title}</div>
                    <div className={`p-3 lg:p-5 flex-wrap justify-evenly flex gap-x-4 gap-y-7 w-full ${searching ? "h-screen" : ""}`}>
                        {
                            searchRes.length > 0 ? searchRes.map((i) => (
                                <div key={i.id} onClick={() => handleDeatailsClick(i.id)}>
                                    <MovieBox releaseDate={i.release_date} title={i.title} rating={i.vote_average?.toFixed()} image={i.poster_path ? `${imagePrifix}/${i.poster_path}` : errorImage} className="flex-grow w-full" />

                                </div>

                            )) : (
                                <div>
                                    {movieSearch.movieSearchError}
                                    {searchRes.length}
                                </div>
                            )

                        }

                    </div>
                    {searching && (
                        <div className="w-full flex justify-center items-center animate-spin text-white text-lg mt-4">
                            {loadingIcon.icon}
                        </div>
                    )}
                </div>
            </div>



            {
                searchErr && (
                    <ErrorPage />
                )
            }
        </div>
    )
}

export default SearchResult
