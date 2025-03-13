import { api } from "./api";

const api_key = import.meta.env.VITE_API_KEY
console.log(api_key);

const nowPlayingMovies = async (page)=>{
    const res = await api.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=${page}?append_to_response=videos,images`)
    return res.data.results
    
}
const popularMovies = async (page)=>{
    const res = await api.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`)
    return res.data.results
}

const topRated = async (page)=>{
    const res = await api.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${page}`)
    return res.data.results
}

const upComingMovies = async(page)=>{
    const res = await api.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${page}`)
    return res.data.results
}

const movieDetails = async(id)=>{
    const res = await api.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
    return res.data
}

const searchMovies = async(movieName)=>{
    const res = await api.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movieName}`)
    return res.data
}
export {
    nowPlayingMovies,
    popularMovies,
    topRated,
    upComingMovies,
    movieDetails,
    searchMovies
}