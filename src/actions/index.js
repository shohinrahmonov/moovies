import movieDbApi, { API_KEY } from '../apis/movieDB';
import * as Type from  '../actions/types';


export const fetchMovies = (loadNextPage) =>{
    return  async dispatch =>{
        try{
            if(loadNextPage === null){
                dispatch({ type: Type.FETCH_MOVIE_REQUEST});
    
                const response = await movieDbApi.get(`/3/trending/all/day?api_key=${API_KEY}&page=1`);

                dispatch({type: Type.FETCH_MOVIES_UPDATE, payload: response.data});

                setTimeout(() => {
                    dispatch({type: Type.FETCH_MOVIE_SUCCESS});
                }, 1000);
    
            } else{
                dispatch({ type: Type.FETCH_MOVIE_REQUEST_MORE});
    
                const response = await movieDbApi.get(`/3/trending/all/day?api_key=${API_KEY}&page=${loadNextPage ? loadNextPage + 1 : 2 }`);
    
                dispatch({type: Type.FETCH_MOVIES, payload: response.data});

                setTimeout(() => {
                    dispatch({type: Type.FETCH_MOVIE_SUCCESS_MORE});
                }, 1000)
            }
        }catch(error){
            dispatch({type: Type.FETCH_MOVIE_FAIL});

            console.log(new Error(error));
        }

    }
}
export const fetchGenres = () =>{
    return  async dispatch =>{
        try{
            const response = await movieDbApi.get(`/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);

            await dispatch({type: Type.FETCH_GENRES, payload: response.data});

        }catch(error){
            dispatch({type: Type.FETCH_MOVIE_FAIL});

            console.log(new Error(error));
        }
    }
}

export const findMovie = (type, id )=>{
    
    return async dispatch => {
        try{
            dispatch({ type: Type.FETCH_MOVIE_REQUEST});
            
            const response = await movieDbApi.get(`/3/${type}/${id}?api_key=${API_KEY}&append_to_response=videos,images`);
            
            await dispatch({type: Type.FIND_MOVIE, payload: response.data});
            
            setTimeout(() => {
                dispatch({type: Type.FETCH_MOVIE_SUCCESS});
            }, 1000);
            
        }catch(error){

            console.log(new Error(error));
        }
        
    }
}
export const findActor = (id)=>{
    
    return async dispatch => {
        try{
            dispatch({ type: Type.FETCH_ACTOR_REQUEST});
            const response = await movieDbApi.get(`3/person/${id}?api_key=${API_KEY}&append_to_response=movie_credits,images`);
            
            dispatch({type: Type.FIND_ACTOR, payload: response.data});

            setTimeout(() => {
                dispatch({type: Type.FETCH_ACTOR_SUCCESS});
            }, 1000);

        }catch(error){
            dispatch({type: Type.FETCH_ACTOR_FAIL});

            console.log(new Error(error));
        }
        
    }
}


export const findSimilar = (type, id)=>{
    return async dispatch => {
        try{
            dispatch({ type: Type.FETCH_MOVIE_REQUEST});
            const response = await movieDbApi.get(`/3/${type}/${id}/similar?api_key=${API_KEY}`);
            
            dispatch({type: Type.FIND_SIMILAR, payload: response.data})

            setTimeout(()=>{
                dispatch({type: Type.FETCH_MOVIE_SUCCESS});
            }, 1000)
            
        }catch(error){
            dispatch({type: Type.FETCH_MOVIE_FAIL});

            console.log(new Error(error));
        }
        
    }
}
export const findTrailer = (id)=>{
    return async dispatch => {
        try{
            const response = await movieDbApi.get(`/3/movie/${id}?/videos/api_key=${API_KEY}`);
            
            dispatch({type: Type.FIND_TRAILER, payload: response.data});

        }catch(error){
            dispatch({type: Type.FIND_TRAILER, payload: {error: true}});

            console.log(new Error(error));
        }
        
    }
}
export const findCast = (type, id)=>{
    return async dispatch => {
        try{
            const response = await movieDbApi.get(`/3/${type}/${id}/credits?api_key=${API_KEY}`);

            dispatch({type: Type.FIND_CAST, payload: response.data});

        }catch(error){
            dispatch({type: Type.FETCH_MOVIE_FAIL});

            console.log(new Error(error));
        }
        
    }
}
export const findPopular = ()=>{
    return async dispatch => {
        try{
            const response = await movieDbApi.get(`/3/movie/popular?api_key=${API_KEY}`);

            dispatch({type: Type.FIND_POPULAR, payload: response.data});

        }catch(error){
            dispatch({type: Type.FIND_POPULAR, payload: {error: true}});

            console.log(new Error(error));
            
        }
    }
}

export const findQuery = (query)=>{
    return async dispatch => {
        try{
            if(query.length === 0) return;
            dispatch({ type: Type.FETCH_SEARCH_REQUEST});

            const response = await movieDbApi.get(`/3/search/multi?api_key=${API_KEY}&query=${query}`);

            dispatch({type: Type.FIND_QUERY, payload: response.data});

            setTimeout(() => {
                dispatch({type: Type.FETCH_SEARCH_SUCCESS});
            }, 1000);

        }catch(error){
            dispatch({type: Type.FETCH_SEARCH_FAIL});

            console.log(new Error(error));

        }
        
    }
}

export const addWatchList = (id)=>{
    return {
        type: Type.ADD_WATCHLIST, payload: id
    }
}
export const removeWatchList = (id)=>{
    return {
        type: Type.REMOVE_WATCHLIST, payload: id
    }
}