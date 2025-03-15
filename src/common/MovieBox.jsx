import React, { useEffect, useState } from 'react'
import altImage from '../assets/error.jpg'
import { CiStar } from "react-icons/ci";
import { movieDetails } from '../api/fetchapi';
import { apiFetchError, apiFetchStartReq, apiFetchStop, apiFetchSuccess } from '../redux/features/ApiFetch';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { loadingIcon } from '../constant/landingpage';

function MovieBox({ image, rating, title, releaseDate, id }) {
  const { loading, error } = useSelector(state => state.api)
  const [fav, setFav] = useState(false)
  const dispatch = useDispatch()
  const movieDetail = async () => {
    const movieId = id;
    try {
      dispatch(apiFetchStartReq())
      const existingFavs = JSON.parse(localStorage.getItem("favMovies")) || [];
      const isAlreadyFav = existingFavs.some(movie => movie.id === movieId);
      if (!isAlreadyFav) {
        const res = await movieDetails(movieId);
        const updatedFavs = [...existingFavs, res]
        localStorage.setItem("favMovies", JSON.stringify(updatedFavs))
        setFav(true)
        toast.success("Added in fav")

      } else {
        const updatedFavs = existingFavs.filter(movie => movie.id !== movieId);
        localStorage.setItem("favMovies", JSON.stringify(updatedFavs));
        setFav(false);
        toast.success("Removed from fav")
      }
      dispatch(apiFetchSuccess())
    } catch (error) {
      dispatch(apiFetchError(error.message))
      toast.error()
      console.log(error.message);

    }
  }

  useEffect(() => {
    const existingFavs = JSON.parse(localStorage.getItem("favMovies")) || [];
    setFav(existingFavs.some(movie => movie.id === id));
  }, [id]);

  return (
    <div className='w-44 relative h- rounded-xl  hover:cursor-pointer  transition-transform duration-200 hover:scale-110'>

      <div className=' w-full h-[75%] rounded-xl z-10'>
        <div className='absolute right-1 top-2 '
          onClick={(e) => {
            e.stopPropagation();
            movieDetail()
          }}>
          {
            fav ? <FaStar className='scale-120 text-amber-500 font-extrabold ' /> : <CiStar className='scale-120 text-amber-500 font-extrabold ' />
          }

        </div>
        <img src={image} alt={altImage} className=' rounded-xl z-10 ' />
      </div>
      <div className='absolute w-12 h-12 z-40 rounded-full bg-amber-500 flex justify-center items-center text-white font-bold -mt-6 ml-5 font-oswald'>
        {rating}
      </div>
      <div className='font-oswald text-white mt-5 p-2'>
        <div>{title}</div>
        <div>{releaseDate}</div>
      </div>
      {loading && (
        <div className="w-full flex justify-center items-center animate-spin text-white text-lg mt-4">
          {loadingIcon.icon}
        </div>
      )}
    </div>
  )
}

export default MovieBox
