import {
	FETCH_MOVIE_LIST_LOADING,
	FETCH_MOVIE_LIST_SUCCESS,
	FETCH_MOVIE_LIST_FAIL,
	FETCH_MOVIE_DATA_LOADING,
	FETCH_MOVIE_DATA_SUCCESS,
	FETCH_MOVIE_DATA_FAIL,
} from './constants';
import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;

// export function getMoviesList(query) {
// 	return async function(dispatch) {
// 		try {
// 			const { data } = await axios.get(
// 				`http://omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${query}`
// 			);
// 			return dispatch({
// 				type: FETCH_MOVIE_LIST_SUCCESS,
// 				payload: data.Search,
// 			});
// 		} catch (error) {
// 			return dispatch({
// 				type: FETCH_MOVIE_LIST_FAIL,
// 				error: error,
// 			});
// 		}
// 	};
// }
export const getMoviesList = query => async dispatch => {
	try {
		dispatch({
			type: FETCH_MOVIE_LIST_LOADING,
		});

		const { data } = await axios.get(`http://omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${query}`);

		dispatch({
			type: FETCH_MOVIE_LIST_SUCCESS,
			payload: data.Search,
		});
	} catch (error) {
		dispatch({
			type: FETCH_MOVIE_LIST_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

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
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
}
