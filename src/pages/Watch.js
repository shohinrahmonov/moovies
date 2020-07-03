import React from 'react';
import styled from 'styled-components';
import { Container } from '../style/Container';
import Movie from '../components/MovieItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MovieListWrapper } from '../style/MovieListWrapper';


const WatchListWrapper = styled.div`
    color: #fff;
    padding-top: 8rem;
`;

const WatchList = ({movies}) => {
    return ( 
        <WatchListWrapper>
        <Container>
                <MovieListWrapper>
                  {movies.length > 0 ? movies.map(movie=> <Link to={{pathname: `/details/movie/${movie.id}`}} key={movie.id}>
                    <Movie image={movie.poster_path} title={movie.title ? movie.title : movie.name} overview={movie.overview}/></Link>) : <h1>Watch List is empty</h1>}
                </MovieListWrapper>
        </Container>
        </WatchListWrapper>
     );
}
 
const mapStateToProps = (state)=>{
    return {
        movies: state.watchList
    }
}

export default connect(mapStateToProps)(WatchList);