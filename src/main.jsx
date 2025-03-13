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
import UpcomingMovies from './components/upcoming/UpcomingMovies.jsx'
import MovieDetails from './components/movieDetails/MovieDetails.jsx'
import ErrorPage from './common/ErrorPage.jsx'


const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <LandingPage />

    },
    {
      path: "/currently-playing-movies",
      element: <App />

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
      path: "/upcoming-movies",
      element: <UpcomingMovies />

    },
    {
      path: "/movie-deatails/:id",
      element: <MovieDetails/>

    },
    {
      path : "*",
      element : <ErrorPage/>
    }
  ])
  return <RouterProvider router={router} />
}
createRoot(document.getElementById('root')).render(

  <Provider store={store} >
    <AppRouter />
  </Provider>

)
