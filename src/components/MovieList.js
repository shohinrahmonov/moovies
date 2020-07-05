import React, { useState, useEffect } from 'react'
import Movie from './MovieItem';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import { Link, useLocation } from 'react-router-dom';
import { Button, Spin } from 'antd';
import { MovieListWrapper } from '../style/MovieListWrapper';
import  Error from './Error'

const MovieList = ({movies, fetchMoviesFromAPI, loading, loadingMorePages, error}) => {
    
    const [loadNextPage, setLoadNextPage] = useState(null);
    const params = useLocation(); 
    
    // RESET MOVIE LIST
    useEffect(()=>{
        setLoadNextPage(null);
    },[params])
    
    useEffect(()=>{
        fetchMoviesFromAPI(loadNextPage);
    },[fetchMoviesFromAPI,loadNextPage]);

    const updatePageHandler = ()=>{
        setLoadNextPage(loadNextPage + 1)
    }

    return ( 
        <MovieListWrapper>
            { loading && (<Spin  size="large"/>) && error ? (<Error error="Failed to load Trending Movies" />) :  <> <div className="movies-list">
                            <h1>Trending Movies</h1>
                            {movies && movies.map(movie=> <Link to={{pathname: `/details/${movie.media_type}/${movie.id}`}} key={movie.id}><Movie type={movie.media_type} movieInfo={movie} image={movie.poster_path} title={movie.title ? movie.title : movie.name} overview={movie.overview}/></Link>)}
                        </div>
                        <Button type="primary" size="large"  loading={loadingMorePages ? 1 : 0} onClick={updatePageHandler}>Load More</Button>
            </>}
        </MovieListWrapper>
     );
}

const mapStateToProps =(state)=>{
    return  {
        movies: state.movies.moviesList,
        loading: state.movies.loading,
        loadingMorePages: state.movies.loadingMore,
        error: state.movies.error
    }
}

export default connect(mapStateToProps, {fetchMoviesFromAPI: fetchMovies})(MovieList);