import React from 'react';
import MovieThumbnail from './MovieThumbnail';
import { useSelector } from 'react-redux';

const SearchResults = () => {
	const movieList = useSelector(state => state.movieList);
	const { data, error, loading } = movieList;

	return (
		<div>
			<h2>Search Results</h2>

			{error && <h2 stlye={{ color: 'red' }}>Error getting movie data</h2>}

			{loading && <h2>Loading ...</h2>}

			{data &&
				data.length > 0 &&
				data.map((movie, index) => {
					while (index < 5) {
						return <MovieThumbnail movie={movie} key={index} />;
					}
				})}
		</div>
	);
};

export default SearchResults;
