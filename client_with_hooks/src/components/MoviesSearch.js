import React, { useState } from 'react';
import { getMoviesList } from '../actions/movieActions';
import { useDispatch } from 'react-redux';

const MoviesSearch = () => {
	const dispatch = useDispatch();

	const [ searchQuery, setSearchQuery ] = useState('');

	const submitHandler = e => {
		e.preventDefault();
		console.log('submit');
		dispatch(getMoviesList(searchQuery));
	};

	return (
		<div>
			<h2>Search Movies</h2>
			<form onSubmit={submitHandler}>
				<input
					type='text'
					placeholder='search for a movie...'
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default MoviesSearch;
