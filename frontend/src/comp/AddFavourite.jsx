import React, { useState } from 'react';

const AddFavourite = () => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true);
		setTimeout(() => setClicked(false), 200);
	};

	return (
		<>
			<span className='text-red-500'>Add to Favorites</span>
			<svg
				onClick={handleClick}
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				className={`bi bi-heart-fill text-red-500 cursor-pointer transition-transform transform ${clicked ? 'scale-90' : 'hover:scale-110'}`}
				fill='currentColor'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
			</svg>
		</>
	);
};

export default AddFavourite;
