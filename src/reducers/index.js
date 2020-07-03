import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import findSearchQuery from './findSearchQuery';
import peopleReducer from './peopleReducer';
import WatchListReducer from './WatchListReducer';

export default combineReducers({
        movies: moviesReducer,
        searchResult: findSearchQuery,
        people: peopleReducer,
        watchList: WatchListReducer
});