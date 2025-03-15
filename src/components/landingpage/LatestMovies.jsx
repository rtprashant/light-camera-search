import React, { useDebugValue, useEffect, useState } from 'react'
import MovieBox from '../../common/MovieBox'
import { nowPlayingMovies } from '../../api/fetchapi'
import errorImage from '../../assets/error.jpg'
import { category, loadingIcon } from '../../constant/landingpage'
import { useDispatch, useSelector } from 'react-redux'
import { apiFetchError, apiFetchStartReq, apiFetchStop, apiFetchSuccess } from '../../redux/features/ApiFetch'
import { useNavigate } from 'react-router-dom'
import { SkeletonGrid } from '../../common/Skelton'
import ErrorPage from '../../common/ErrorPage'
import { searchStop } from '../../redux/features/Searching'

function LatestMovies() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const { loading, error } = useSelector(state => state.api)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {

        const playingMovies = async () => {
            try {
                dispatch(searchStop())
                dispatch(apiFetchStartReq())
                const res = await nowPlayingMovies(page)
                const movieDetails = res.map(({ id, title, release_date, vote_average, poster_path }) => ({
                    id,
                    title,
                    release_date,
                    vote_average: vote_average.toFixed(1),
                    poster_path: poster_path ? `https://image.tmdb.org/t/p/w185${poster_path} ` : errorImage
                }))
                setMovies((pre) => [...pre, ...movieDetails]);
                dispatch(apiFetchSuccess(movieDetails))



            } catch (error) {
                dispatch(apiFetchError(error.message))
                console.log(error.message);


            } finally {
                dispatch(apiFetchStop())
            }


        }
        playingMovies()




    }, [page])
    useEffect(() => {
        if (!error) {
            const handleScroll = () => {
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
                    setPage((prev) => prev + 1);
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);

        }
    }, [error]);

    useEffect(() => {
        console.log(error);

    }, [error])

    const handleDeatailsClick = (id) => {
        navigate(`/movie-deatails/${id}`)
    }

    return (
        <div>
           
                    <div>
                        <div>
                            <div className='ml-4 lg:ml-9  sm: md: font-semibold font-oswald text-[30px] text-white '>{error || loading ? "" : category[0].title}</div>
                            <div className={`p-3 lg:p-5 flex-wrap justify-evenly flex gap-x-4 gap-y-7 w-full ${loading ? "h-screen" : ""}`}>
                                {
                                    movies.map((i) => (
                                        <div key={i.id} onClick={() => handleDeatailsClick(i.id)}>
                                            <MovieBox releaseDate={i.release_date} id={i.id}  title={i.title} rating={i.vote_average} image={i.poster_path} className="flex-grow w-full" />

                                        </div>

                                    ))

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

export default LatestMovies
