import React, { useState, useEffect } from 'react'
import Movie from './MovieItem';
import { connect } from 'react-redux';
import { findQuery, resetSearchResult } from '../actions';
import { Link } from 'react-router-dom';
import { Input, Spin } from 'antd';
import { MovieSearchWrapper } from '../style/MovieSearchWrapper'
import Error from './Error';

const MovieList = ({movies, fetchMovieQuery, loading, error, resetSearchResult}) => {

    const { Search } = Input;
    
    const [query, setQuery] = useState('');

    useEffect(()=>{
        resetSearchResult();
    },[])
    
    useEffect(()=>{
        fetchMovieQuery(query);
    },[fetchMovieQuery, query])


    const searchMovieHandler = (e)=>{
        setQuery(e.target.value);
    }

   
    return ( 
        <MovieSearchWrapper>
            <div className="search-container">
            <Search className="search-movie" size="middle"
                    value={query} 
                    placeholder="Search for movies, actors, directors" 
                    onChange={searchMovieHandler} 
                    enterButton loading={loading} />
            </div>
                {error ? <Error error="Request is faild on Search" /> : movies && <div className="search-result-container">
                    {query && <h3>Result: {query}</h3>}
                    {loading ? <Spin size="large" /> : <div className="search-movies-container">
                        {movies.results && movies.results.length > 0 ? movies.results.map(movie=> 
                            movie.media_type === 'person' ? null : <Link to={{
                            pathname: `/details/${movie.media_type}/${movie.id}`
                        }} key={movie.id}><Movie type={movie.media_type} movieInfo={movie} image={movie.poster_path ? movie.poster_path : movie.backdrop_path } title={movie.title ? movie.title : movie.name} overview={movie.overview}/>
                        </Link>) 
                            : query && <div className="not-found-class">Not Found</div>}
                    </div>}
                </div>}
        </MovieSearchWrapper>
     );
}

const mapStateToProps =(state)=>{
    return {
        movies: state.searchResult.results,
        loading: state.searchResult.loading,
        error: state.searchResult.error
    }
}

export default connect(mapStateToProps, {fetchMovieQuery: findQuery, resetSearchResult})(MovieList);