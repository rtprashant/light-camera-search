import React, { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { category, searchBar } from '../constant/landingpage';
import { NavLink, useNavigate } from 'react-router-dom';
import { searchMovies } from '../api/fetchapi';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { SkeletonGrid } from './Skelton';
import { searchFailed, searchStop, searchSuccess, startSearch } from '../redux/features/Searching';
import toast from 'react-hot-toast';

const SearchResult = lazy(()=>import('./SearchResult'))
function SearchBar() {
  const [search, setSearch] = useState('')
  const { searching,
    searchRes,
    searchErr , page } = useSelector(state => state.search)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSearch = useCallback(
    debounce(
      async (query  ) => {
        dispatch(startSearch())
        if (!query || query.trim() == "") return;
        try {
          console.log(query);
          const res = await searchMovies(query )
          console.log(res);
          dispatch(searchSuccess(res.results))
        } catch (error) {
          console.log(error?.message);
          toast.error(error.message)
          dispatch(searchFailed(error.message))
        }

      }, 500
    ), []
  )
  const handleClearClick = (e)=>{
    e.preventDefault()
    setSearch("");
    dispatch(searchStop())
  
  }


  const handleChange = (e) => {
    e.preventDefault()
    dispatch(startSearch())
    setSearch(e.target.value)
    handleSearch(e.target.value)

  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate(`/moives-search/${search}`)

  }
  return (
    <div className='w-full flex  flex-col  z-50 justify-center p-4 pt-24 sm:pt-28 md:pt-36'>
      <form action="" 
      onSubmit={handleSubmit}
      className='w-full flex gap- justify-center'>
        <input type="text"
          placeholder={searchBar.placeHolder}
          onChange={handleChange}
          value={search}
          className='bg-white w-[80%] h-16 p-5 font-oswald rounded-l-full outline-none border-none focus:ring-0 focus:border-transparent' />
          <button 
          onClick={handleClearClick}
          className=' flex justify-center items-center text-[20px] hover:cursor-pointer bg-white text-gray-500 rounded-r-full pr-5 '>
            {searchBar.crossIcon}
          </button>
        <button className='text-amber-600 text-[30px] ml-1'>
          {searchBar.searchIcon}
        </button>
      </form>
      <div className='sm:block hidden mt-5'>
        <div className='flex flex-wrap gap-3 justify-center'>
          {category.map((itm , idx) => (
            <NavLink key={idx}
              to={itm.url}
              onClick={() => dispatch(searchStop())}
              className={ ({isActive})=>`font-oswald font-bold text-[20px] text-white border ${isActive ? "bg-gray-700" : ""} px-6 py-3 rounded-full`}>
              {itm.title}
            </NavLink>
          ))}
        </div>
      </div>
     
    </div>
  )
}

export default SearchBar
