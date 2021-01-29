import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import movieDataReducer from './reducers/movieDataReducer';
import movieListReducer from './reducers/movieListReducers';

const middleware = [ logger, thunk ];

const rootReducer = combineReducers({
	movieList: movieListReducer,
	selectedMovie: movieDataReducer,
});

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
