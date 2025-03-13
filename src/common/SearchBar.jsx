import React, { lazy, Suspense, useCallback, useState } from 'react'
import { category, searchBar } from '../constant/landingpage';
import { NavLink } from 'react-router-dom';
import { searchMovies } from '../api/fetchapi';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { SkeletonGrid } from './Skelton';
import { searchFailed, searchStop, searchSuccess, startSearch } from '../redux/features/Searching';

const SearchResult = lazy(()=>import('./SearchResult'))
function SearchBar() {
  const [search, setSearch] = useState('')
  const { searching,
    searchRes,
    searchErr } = useSelector(state => state.search)
  const dispatch = useDispatch()
  const handleSearch = useCallback(
    debounce(
      async (query) => {
        dispatch(startSearch())
        if (!query || query.trim() == "") return;
        try {
          console.log(query);
          const res = await searchMovies(query)
          console.log(res);
          dispatch(searchSuccess(res.results))
        } catch (error) {
          console.log(error);
          dispatch(searchFailed(error.message))
        }

      }, 1000
    ), []
  )

  const handleChange = (e) => {
    e.preventDefault()
    dispatch(startSearch())
    setSearch(e.target.value)
    handleSearch(e.target.value)

  }
  return (
    <div className='w-full flex  flex-col  z-50 justify-center p-4 pt-24 sm:pt-28 md:pt-36'>
      <form action="" className='w-full flex gap-2 justify-center'>
        <input type="text"
          placeholder={searchBar.placeHolder}
          onChange={handleChange}
          value={search}
          className='bg-white w-[80%] h-16 p-5 font-oswald rounded-full ' />
        <button className='text-amber-600 text-[30px]'>
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
