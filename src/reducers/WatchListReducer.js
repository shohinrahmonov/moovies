import * as Type from  '../actions/types';

export default (state = [], action)=>{
    switch(action.type){
        case Type.ADD_WATCHLIST: 
            const newItem = [...state, action.payload];
            return newItem.filter((v,i,a)=> a.findIndex(t=> (t.id === v.id)) === i);
        case Type.REMOVE_WATCHLIST: 
            return state.filter(movie=> movie.id !== action.payload)
        default:
            return state;
    }
}