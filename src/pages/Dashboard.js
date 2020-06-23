import React from 'react';
import { Container } from '../style/Container';
import Slider from '../components/Slider';
import MovieList from '../components/MovieList';
import MovieSearchResult from '../components/MovieSearchResult';


const Dashboard = () => {
    return ( 
        <>
            <Slider />
            <Container>
                <MovieSearchResult />
                <MovieList />
            </Container>
        </>
     );
}
 
export default Dashboard;