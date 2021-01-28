import React from 'react';
import { getMovieData } from '../actions/movieActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const MovieThumbnail = ({ movie, getMovieData }) => {
	return (
		<div className='movieThumnail' style={{ display: 'flex', margin: '.5rem' }}>
			<div>
				<img src={movie.Poster} alt={`a poster of ${movie.Title}`} style={{ maxWidth: '5rem' }} />
			</div>

			<div className='textContent'>
				<h3>{movie.Title}</h3>
				<p>{movie.Year}</p>
			</div>

			<button onClick={() => getMovieData(movie.imdbID)}>See Movie Details</button>
		</div>
	);
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getMovieData,
		},
		dispatch
	);

export default connect(null, mapDispatchToProps)(MovieThumbnail);
