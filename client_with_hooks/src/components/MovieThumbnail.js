import React from 'react';
import { useDispatch } from 'react-redux';
import { getMovieData } from '../actions/movieActions';

const MovieThumbnail = ({ movie }) => {
	const dispatch = useDispatch();

	return (
		<div className='movieThumnail' style={{ display: 'flex', margin: '.5rem' }}>
			<div>
				<img src={movie.Poster} alt={`a poster of ${movie.Title}`} style={{ maxWidth: '5rem' }} />
			</div>

			<div className='textContent'>
				<h3>{movie.Title}</h3>
				<p>{movie.Year}</p>
			</div>

			<button onClick={() => dispatch(getMovieData(movie.imdbID))}>See Movie Details</button>
		</div>
	);
};

export default MovieThumbnail;
