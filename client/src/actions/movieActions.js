import {
	FETCH_MOVIE_LIST_SUCCESS,
	FETCH_MOVIE_LIST_FAIL,
	FETCH_MOVIE_DATA_SUCCESS,
	FETCH_MOVIE_DATA_FAIL,
} from './constants';
import axios from 'axios';

export function getMoviesList(query) {
	return async function(dispatch) {
		try {
			const { data } = await axios.get(`http://omdbapi.com/?apikey=f68a57c6&s=${query}`);
			return dispatch({
				type: FETCH_MOVIE_LIST_SUCCESS,
				payload: data,
			});
		} catch (error) {
			return dispatch({
				type: FETCH_MOVIE_LIST_FAIL,
				error: error,
			});
		}
	};
}

export function getMoviesData(movieID) {
	return async function(dispatch) {
		try {
			const { data } = await axios.get(`http://omdbapi.com/?apikey=f68a57c6&i=${movieID}`);
			return dispatch({
				type: FETCH_MOVIE_DATA_SUCCESS,
				payload: data,
			});
		} catch (error) {
			return dispatch({
				type: FETCH_MOVIE_DATA_FAIL,
				error: error,
			});
		}
	};
}
