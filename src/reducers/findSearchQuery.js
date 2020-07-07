import * as Type from  '../actions/types';

const initialState = {
    loading: false,
    error: false,
    results: []
}

export default (state = initialState, action)=>{
    switch(action.type){
        case Type.FIND_QUERY:
            return {...state, results: action.payload};
        case Type.FETCH_SEARCH_REQUEST:
            return { ...state, loading: true};
        case Type.FETCH_SEARCH_SUCCESS:
            return { ...state, loading: false };
        case Type.FETCH_SEARCH_FAIL:
            return { ...state, error: true };
        case 'RESET_SEARCH_RESULT': 
            return {};
        default: 
            return state
    }
}