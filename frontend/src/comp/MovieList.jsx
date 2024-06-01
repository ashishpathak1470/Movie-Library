import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div
					key={index}
					className='relative flex justify-center m-3'
				>
					<img src={movie.Poster} alt='movie' className='rounded-lg shadow-md'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 cursor-pointer transition-opacity duration-300 rounded-lg'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
