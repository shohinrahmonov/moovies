import React from 'react'
import MovieList from  '../components/MovieList';
import { Container } from '../style/Container';


const Movies = () => {
 
    return (
            <>
                <Container style={{paddingTop: '6rem'}}>
                    <MovieList/>
                </Container>
            </>
    )
}



export default Movies;