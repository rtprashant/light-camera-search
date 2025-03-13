import React from 'react'
import { useSelector } from 'react-redux'
import ErrorPage from './ErrorPage'
import { category, errorPage, loadingIcon, movieSearch } from '../constant/landingpage'
import MovieBox from './MovieBox'
import { useNavigate } from 'react-router-dom'
import errorImage from '../assets/error.jpg'

function SearchResult() {
    const { searching,
        searchRes,
        searchErr } = useSelector(state => state.search)
        const navigate = useNavigate()

    const imagePrifix = "https://image.tmdb.org/t/p/w185"
    const handleDeatailsClick = (id) => {
        navigate(`/movie-deatails/${id}`)
    }
    return (
        <div>
            <div>
                <div>
                    <div className='ml-4 lg:ml-9  sm: md: font-semibold font-oswald text-[30px] text-white '>{movieSearch.title}</div>
                    <div className={`p-3 lg:p-5 flex-wrap justify-evenly flex gap-x-4 gap-y-7 w-full ${searching ? "h-screen" : ""}`}>
                        {
                            searchRes.length > 0 ? searchRes.map((i) => (
                                <div key={i.id} onClick={() => handleDeatailsClick(i.id)}>
                                    <MovieBox releaseDate={i.release_date} title={i.title} rating={i.vote_average} image={imagePrifix + i.poster_path || errorImage} className="flex-grow w-full" />

                                </div>

                            )) : (
                                <div>
                                    {movieSearch.movieSearchError}
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
