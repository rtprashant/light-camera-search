import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/landingpage/LandingPage.jsx'
import TopRatedMovies from './components/toprated/TopRatedMovies.jsx'
import PopularMovies from './components/popular/PopularMovies.jsx'
import MovieDetails from './components/movieDetails/MovieDetails.jsx'
import ErrorPage from './common/ErrorPage.jsx'
import SearchResult from './common/SearchResult.jsx'
import Favourites from './components/favourites/FavouritesMovies.jsx'
import { Toaster } from 'react-hot-toast'


const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />

    },
    {
      path: "/currently-playing-movies",
      element:  <LandingPage />

    },
    {
      path: "/popular-movies",
      element: <PopularMovies />

    },
    {
      path: "/top-rated-movies",
      element: <TopRatedMovies />

    },
    {
      path: "/favourites-movies",
      element: <Favourites/>

    },
    {
      path: "/movie-deatails/:id",
      element: <MovieDetails/>

    },
    {
      path : "*",
      element : <ErrorPage/>
    },
    {
      path: "/moives-search/:moviename",
      element:<SearchResult/>
    }
  ])
  return <RouterProvider router={router} />
}
createRoot(document.getElementById('root')).render(

  <Provider store={store} >
    <AppRouter />
    <Toaster />
  </Provider>

)
