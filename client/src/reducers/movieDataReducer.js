import {
	FETCH_MOVIE_DATA_SUCCESS,
	FETCH_MOVIE_DATA_LOADING,
	FETCH_MOVIE_DATA_FAIL,
} from './actions';

const initialState = {
	data: {},
	loading: false,
	error: null,
};

function movieDataReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case FETCH_MOVIE_DATA_LOADING:
			return {
				...state,
				loading: true,
			};
		case FETCH_MOVIE_DATA_SUCCESS:
			return {
				...state,
				data: payload,
				loading: false,
			};
		case FETCH_MOVIE_DATA_FAIL:
			return {
				...state,
				error: payload,
				loading: false,
			};
		default:
			return state;
	}
}

export default movieDataReducer;
