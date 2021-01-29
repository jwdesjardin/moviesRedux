import {
	FETCH_MOVIE_LIST_SUCCESS,
	FETCH_MOVIE_LIST_FAIL,
	FETCH_MOVIE_DATA_SUCCESS,
	FETCH_MOVIE_DATA_FAIL,
	FETCH_MOVIE_DATA_LOADING,
	FETCH_MOVIE_LIST_LOADING,
} from './constants';
import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;

export function getMoviesList(query) {
	return async function(dispatch) {
		dispatch({
			type: FETCH_MOVIE_LIST_LOADING,
		});
		try {
			const { data } = await axios.get(
				`http://omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${query}`
			);
			dispatch({
				type: FETCH_MOVIE_LIST_SUCCESS,
				payload: data.Search,
			});
		} catch (error) {
			dispatch({
				type: FETCH_MOVIE_LIST_FAIL,
				error: error,
			});
		}
	};
}

export function getMovieData(movieID) {
	return async function(dispatch) {
		try {
			dispatch({
				type: FETCH_MOVIE_DATA_LOADING,
			});
			const { data } = await axios.get(
				`http://omdbapi.com/?apikey=${REACT_APP_API_KEY}&i=${movieID}`
			);
			dispatch({
				type: FETCH_MOVIE_DATA_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: FETCH_MOVIE_DATA_FAIL,
				error: error,
			});
		}
	};
}
