import * as Type from  '../actions/types';

const initialState = {
    loading: false,
    error: false
}

export default (state = initialState, action) =>{
    switch(action.type){
        case Type.FETCH_ACTOR_REQUEST:
            return {
                ...state,
                loading: true
            };
            case Type.FETCH_ACTOR_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case Type.FETCH_ACTOR_FAIL:
            return {
                ...state,
                error: false
            };
        case Type.FIND_ACTOR:
            return {...state, selectedActor: action.payload};
        default:
            return state;
    }
}