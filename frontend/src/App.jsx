import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance';
import MovieList from './comp/MovieList';
import MovieListHeading from './comp/MovieListHeading';
import SearchBox from './comp/SearchBox';
import AddFavourites from './comp/AddFavourite';
import RemoveFavourites from './comp/RemoveFavourites';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [message, setMessage] = useState('');

  const defaultSearchTerms = ['batman', 'superman', 'spiderman', 'avengers', 'star wars'];

  const getMovieRequest = async (searchValue) => {
    try {
      const response = await axiosInstance.get(`/movies?s=${searchValue}`);
      const responseJson = response.data;
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    if (searchValue) {
      getMovieRequest(searchValue);
    } else {
      const randomSearchTerm = defaultSearchTerms[Math.floor(Math.random() * defaultSearchTerms.length)];
      getMovieRequest(randomSearchTerm);
    }
  }, [searchValue]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await axiosInstance.get('/favourites');
        setFavourites(response.data);
      } catch (error) {
        console.error('Error fetching favourites:', error);
      }
    };

    fetchFavourites();
  }, []); // Fetch favourites only once on component mount

  const addFavouriteMovie = async (movie) => {
    try {
      const response = await axiosInstance.post('/favourites', { movie });
      if (response.status === 201) {
        const newFavourites = [...favourites, movie];
        setFavourites(newFavourites);
        setMessage(`${movie.Title} added to favourites!`);
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error adding favourite:', error);
    }
  };

  const removeFavouriteMovie = async (movie) => {
    try {
      const response = await axiosInstance.delete('/favourites', { data: { movieId: movie.imdbID } });
      if (response.status === 200) {
        const newFavourites = favourites.filter(favMovie => favMovie.imdbID !== movie.imdbID);
        setFavourites(newFavourites);
        setMessage(`${movie.Title} removed from favourites!`);
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error removing favourite:', error);
    }
  };

  return (
    <div className='app-container'>
      <div className='container mx-auto px-4 py-8 relative'>
        <div className='flex flex-col items-center'>
          <MovieListHeading heading='Movies' />
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='flex flex-wrap justify-center'>
          <MovieList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourites}
          />
        </div>
        <div className='flex flex-col items-center mt-8'>
          <MovieListHeading heading='Favourites' />
        </div>
        <div className='flex flex-wrap justify-center'>
          <MovieList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
      {message && (
        <div className='popup-message'>
          {message}
        </div>
      )}
    </div>
  );
};

export default App;
