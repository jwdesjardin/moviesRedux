import {
	FETCH_MOVIE_LIST_FAIL,
	FETCH_MOVIE_LIST_LOADING,
	FETCH_MOVIE_LIST_SUCCESS,
} from '../actions/constants';

const initialState = {
	data: [],
	loading: false,
	error: null,
};

function movieListReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case FETCH_MOVIE_LIST_LOADING:
			return {
				...state,
				loading: true,
			};
		case FETCH_MOVIE_LIST_SUCCESS:
			return {
				...state,
				data: payload,
				loading: false,
			};
		case FETCH_MOVIE_LIST_FAIL:
			return {
				...state,
				error: payload,
				loading: false,
			};
		default:
			return state;
	}
}

export default movieListReducer;
