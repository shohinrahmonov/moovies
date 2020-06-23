import * as Type from  '../actions/types';

const initialState = {
    moviesList: [],
    genres: [],
    selectedMovie: [],
    casts: [],
    similar: [],
    popular: [],
    loading: false,
    loadingMore: false,
    error: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Type.FETCH_MOVIE_REQUEST:
            return { ...state, loading: true};
        case Type.FETCH_MOVIE_REQUEST_MORE:
            return { ...state, loadingMore: true};
        case Type.FETCH_MOVIE_SUCCESS_MORE:
            return { ...state, loadingMore: false };
        case Type.FETCH_MOVIE_SUCCESS:
            return { ...state, loading: false };
        case Type.FETCH_MOVIE_FAIL:
            return { ...state, error: true };
        case Type.FETCH_MOVIES:
            return {...state, moviesList: [...state.moviesList, ...action.payload.results]};
        case Type.FETCH_MOVIES_UPDATE:
            return { ...state, moviesList: [...action.payload.results] };
        case Type.FETCH_GENRES:
            return { ...state, genres: action.payload };
        case Type.FIND_MOVIE:
            return { ...state, selectedMovie: action.payload };
        case Type.FIND_POPULAR:
            return { ...state, popular: action.payload };
        case Type.FIND_CAST:
            return { ...state, casts: action.payload };
        case Type.FIND_SIMILAR:
            return { ...state, similar: action.payload };
        default:
            return state;
    }
}