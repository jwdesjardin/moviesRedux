import React from 'react';
import { connect } from 'react-redux';
import MovieThumbnail from './MovieThumbnail';

const SearchResults = ({ movieList, error }) => {
	console.log(movieList, error);
	return (
		<div>
			<h2>Search Results</h2>

			{error && <h2 stlye={{ color: 'red' }}>Error getting movie data</h2>}

			{movieList &&
				movieList.length > 0 &&
				movieList.map((movie, index) => {
					while (index < 5) {
						return <MovieThumbnail movie={movie} key={index} />;
					}
				})}
		</div>
	);
};

const mapStateToProps = state => ({
	movieList: state.movieList.data,
	error: state.movieList.error,
});

export default connect(mapStateToProps)(SearchResults);
