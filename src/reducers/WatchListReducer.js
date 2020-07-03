
export default (state = [], action)=>{
    switch(action.type){
        case "ADD_WATCHLIST": 
            const newItem = [...state, action.payload];
            return newItem.filter((v,i,a)=> a.findIndex(t=> (t.id === v.id)) === i);
        default:
            return state;
    }
}