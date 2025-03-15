import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorPage from '../../common/ErrorPage'
import { category } from '../../constant/landingpage'
import MovieBox from '../../common/MovieBox'
import errorImage from '../../assets/error.jpg'

function FavouritesMoviesPage() {
  const [movies, setMovies] = useState([])
  const { loading, error } = useSelector(state => state.api)
  const dispatch = useDispatch()

  useEffect(() => {
    const favMovies = () => {
      const storedMovies  = localStorage.getItem("favMovies")
      const parsedMovies = storedMovies ? JSON.parse(storedMovies) : [];
      console.log(parsedMovies);
      
      setMovies(parsedMovies)

    }
    favMovies()
  }, [movies])
  useEffect(()=>{
    console.log(movies);
    
  },[movies])

  const imagePrifix= "https://image.tmdb.org/t/p/w185"
  return (
    <div className='md:pt-24 sm:pt-20 pt-20 lg:pt-28'>

      <div>
        <div>
          <div className='ml-4 lg:ml-9  sm: md: font-semibold font-oswald text-[30px] text-white '>{error || loading ? "" : category[3].title}</div>
          <div className={`p-3 lg:p-5 flex-wrap justify-evenly flex gap-x-4 gap-y-7 w-full ${loading ? "h-screen" : ""}`}>
            {
              movies?.length > 0 ?
                <div className={`p-3 lg:p-5 flex-wrap justify-evenly flex gap-x-4 gap-y-7 w-full ${loading ? "h-screen" : ""}`}>
                  {

                    movies?.map((i) => (
                      <div key={i.id} onClick={() => handleDeatailsClick(i.id)}>
                        <MovieBox releaseDate={i.release_date} id={i.id} title={i.title} rating={i.vote_average} image={i.poster_path ? `${imagePrifix}/${i.poster_path}` : errorImage}  className="flex-grow w-full" />

                      </div>

                    ))
                  }

                </div> :
                <div className='text-white font-oswald text-wrap'>
                  You Don't have any thing in favourites
                </div>

                                }

          </div>
          {loading && (
            <div className="w-full flex justify-center items-center animate-spin text-white text-lg mt-4">
              {loadingIcon.icon}
            </div>
          )}
        </div>
      </div>



      {
        error && (
          <ErrorPage />
        )
      }
    </div>
  )
}

export default FavouritesMoviesPage
