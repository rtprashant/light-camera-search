Light Camera Search 🎬

Overview

Light Camera Search is a React.js movie search application built with Vite and Tailwind CSS. It fetches movie information using the TMDB API and allows users to search for movies, view details, and save favorite movies using local storage.

Setup Instructions

Follow these steps to set up and run the project locally:

Clone the repository:

git clone https://github.com/rtprashant/light-camera-search

Navigate to the project directory:

cd light-camera-search

Install dependencies:

npm install  # or yarn install

Set up environment variables:

Create a .env file in the root directory.

Add the TMDB API key:

VITE_API_KEY=your_api_key_here

Start the development server:

npm run dev  # or yarn dev

API Documentation/References

This project uses The Movie Database (TMDB) API to fetch movie information.

API Endpoints Used:

GET /search/movie?query={moviename} - Search for movies by name

GET /movie/{id} - Get movie details by ID

GET /movie/now_playing - Get currently playing movies

GET /movie/popular - Get popular movies

GET /movie/top_rated - Get top-rated movies

List of Implemented Features

Search Movies - Users can search for movies by title.

Movie Details Page - Displays detailed information about a selected movie.

Save Favorite Movies - Users can add/remove favorite movies, stored in local storage.

Different Movie Categories - Browse movies based on different categories:

Currently Playing Movies

Popular Movies

Top Rated Movies


Routes Configuration

The application includes the following routes:


"/",
"/movies-search/:moviename",
"/currently-playing-movies",
"/popular-movies",
"/top-rated-movies",
"/favourites-movies",
"/movie-details/:id"  


Future Improvements

Implement authentication to allow users to save favorites across devices.

Add pagination for better browsing of movie lists.

Improve UI/UX with animations and better design elements.

Optimize API calls for better performance.

Add a recommendation system based on user preferences.