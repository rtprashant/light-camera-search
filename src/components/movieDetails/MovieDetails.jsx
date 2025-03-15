import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { movieDetails } from '../../api/fetchapi'
import { useDispatch, useSelector } from 'react-redux'
import {  SkeletonMovieDetailsLarge, SkeletonMovieDetailsmobile, Skelton } from '../../common/Skelton'
import { apiFetchError, apiFetchStartReq, apiFetchStop, apiFetchSuccess } from '../../redux/features/ApiFetch'
import ErrorPage from '../../common/ErrorPage'
import errorImage from '../../assets/error.jpg'

function MovieDetails() {
    const [movie, setMovie] = useState({})
    const { id } = useParams()
    const { loading, error } = useSelector(state => state.api)
    const dispatch = useDispatch()
    useEffect(() => {
        const movieDetail = async () => {
            const moviedId = id;
            try {
                dispatch(apiFetchStartReq())
                const res = await movieDetails(moviedId);
                setMovie(res)
                dispatch(apiFetchSuccess())
            } catch (error) {
                dispatch(apiFetchError(error.message))
                console.log(error.message);

            } finally {
                dispatch(apiFetchStop())
            }
        }
        movieDetail();

    }, [id])
    const backDropimagePrifix = "https://image.tmdb.org/t/p/w780"
    const posterimagePrifix = "https://image.tmdb.org/t/p/w342"
    return (
        <div className=' w-full '>
            {
                loading || error ? (
                    <div className='w-full h-screen flex justify-center items-center'>
                        <div className='sm:block hidden w-full h-screen'>
                        <SkeletonMovieDetailsLarge className=""/>
                        </div>
                        <div  className="sm:hidden block w-full h-screen">
                        <SkeletonMovieDetailsmobile/>
                        </div>
                       
                    </div>
                ) : (
                    <div className='w-full h-screen flex justify-center items-center'>
                        <div className='lg:w-[80%] sm:w-[95%]  md:h-[65%] lg:h-[70%] sm:h-[60%] sm:block hidden absolute rounded-2xl'>
                            <div className=''>
                                <img src={ movie?.backdrop_path ? backDropimagePrifix + movie?.backdrop_path : errorImage } alt="" className='w-full rounded-2xl sm:block hidden object-cover h-full absolute'
                                />
                            </div>
                            <div className='absolute w-full h-full z-40 flex items-center'>
                                <div className='lg:w-[40%] sm:w-[20%]  sm: h-[80%]  text-center justify-center flex items-center'>
                                    <img src={movie?.poster_path ?posterimagePrifix + movie?.poster_path : errorImage} alt="" className='md:hidden lg:block hidden w-[%] h-[100%] rounded-2xl object-cover  justify-center items-center '
                                    />
                                </div>
                                <div className='lg:w-[60%] md:w-[80%] sm:w-[85%] mt-[130%] sm:ml-10 sm:gap-5 flex-col sm:block hidden realtive overflow-hidden sm:mt-0 h-auto inset-0 '>
                                    <div className='flex flex-col gap-3   text-white'>
                                        <div className='font-bold text-[40px] font-oswald text-white'>{movie.title}</div>
                                        <div className='font-oswald text-white text-wrap -mt-6'>{movie?.tagline}</div>
                                        <div className='flex flex-wrap gap-2 text-white'>
                                            <div >{movie?.runtime} min ,</div>
                                            <div>{movie?.release_date} ,</div>
                                            <div className='flex  gap-2'>
                                                {
                                                    movie?.genres?.map((g) => (
                                                        <div key={g.id} className='flex'>
                                                            <div className='flex'>
                                                                {g.name}
                                                            </div>

                                                        </div>
                                                    ))
                                                }

                                            </div>
                                        </div>
                                        <div className='text-amber-600 text-[20px]  font-bold font-oswald'>
                                            Rating : {movie?.vote_average?.toFixed(1)}
                                        </div>
                                        
                                    </div>
                                    <div className='font-oswald text-white text-wrap w-full relative '>
                                            <h4 className='font-bold text-[20px]'>Overview</h4>
                                            <p className='text-wrap overflow-hidden'>{movie?.overview}</p>
                                        </div>
                                    
                                </div>


                            </div>
                            



                        </div>
                        
                        <div className='sm:hidden block w-full h-screen '>
                            <div className=' h-[60%] w-[]  flex justify-center items-center py-5 '>
                                <img src={posterimagePrifix + movie?.poster_path} alt="" className=' w-[%] h-[100%] rounded-2xl object-cover flex justify-center items-center bsolute'
                                />
                            </div>
                            <div className='lg:w-[60%] md:w-[60%] sm:w-[50%] py-10 flex justify-center sm:mt-0 h-[%] inset-0 '>
                                <div className='flex flex-col gap-3 w-[80%]   text-white'>
                                    <div className='font-bold text-[40px] font-oswald text-white'>{movie.title}</div>
                                    <div className='font-oswald text-white text-wrap -mt-6'>{movie?.tagline}</div>
                                    <div className='flex flex-wrap gap-2 text-white'>
                                        <div >{movie?.runtime} min ,</div>
                                        <div>{movie?.release_date} ,</div>
                                        <div className='flex  gap-2'>
                                            {
                                                movie?.genres?.map((g) => (
                                                    <div key={g.id} className='flex'>
                                                        <div className='flex'>
                                                            {g.name}
                                                        </div>

                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                    <div className='text-amber-600 text-[20px]  font-bold font-oswald'>
                                        Rating : {movie?.vote_average?.toFixed(1)}
                                    </div>
                                    <div className='font-oswald text-white text-wrap'>
                                        <h4 className='font-bold text-[20px]'>Overview</h4>
                                        <p>{movie?.overview}</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        
                    </div>
                    
                )
            }




        </div>
    )
}

export default MovieDetails
