import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import RelativeMovieCarousel from '../components/RelativeMovieCarousel';
import PeopleList from '../components/PeopleList';
import { findMovie } from '../actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Error from '../components/Error'


const MoviePreview = ({ findMovieWithId, error }) => {
    let { id } = useParams();

    useEffect(()=>{
        findMovieWithId(id);
    }, [findMovieWithId, id])
        
    return ( 
        <>
            {error ? (<Error error="Movie not found. Please try again." /> ) : (<div>
                <Banner movieID={id} />
               <RelativeMovieCarousel movieID={id}/>
               <PeopleList movieID={id}/>
            </div> )}
        </>
     );
}
 


const mapStateToProps = (state)=>{
    return {
        error : state.movies.error
    }
}
export default connect(mapStateToProps, { findMovieWithId: findMovie})(MoviePreview);
