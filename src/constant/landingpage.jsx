import { LuTv } from "react-icons/lu";
import { IoReorderThree } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai"
export const header ={
    title: 'Light Camera Search',
    icon: <LuTv/>,
    menu: <IoReorderThree/>,
    close : <AiFillCloseCircle/>
}

export const searchBar  = {
    placeHolder : "What you want to watch today",
    searchIcon : <FaSearch/>
}

export const loadingIcon ={
    icon : <AiOutlineLoading3Quarters/>
}

export const category = [
    {   
        id : 1,
        title : "Currently Playing",
        url : "/"
    },
    {   
        id : 2,
        title : "Popular",
        url : "/popular-movies"
    },
    {   
        id : 3,
        title : "Top Rated ",
        url : "/top-rated-movies"
    },
    {   
        id : 4,
        title : "Upcoming ",
        url : "/upcoming-movies"
    },
    
]

export const movieSearch = {
    title : "Search Result",
    movieSearchError : "OOPS !No Result , Try Another Title "
}

export const errorPage = {
    heading1:"OOPS! Page Not Found",
    code : "404",
    heading2:"We Are Sorry But The Page You Requested Was Not Found",
 
}
