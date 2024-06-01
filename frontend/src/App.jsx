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
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e1446db8`;
		const response = await axiosInstance.get(url);
		const responseJson = await response.data;

		if (responseJson.Search) {
			setMovies(responseJson.Search);
			console.log(responseJson.Search);
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
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
		setMessage(`${movie.Title} added to favourites!`);
		setTimeout(() => setMessage(''), 3000); 
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
		setMessage(`${movie.Title} removed from favourites!`);
		setTimeout(() => setMessage(''), 3000); 
	};

	return (
		<>
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
		</>
	);
};

export default App;
