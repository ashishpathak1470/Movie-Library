import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='w-full text-center my-4'>
			<h1 className='text-3xl font-bold'>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;
