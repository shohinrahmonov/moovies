import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import RelativeMovieCarousel from '../components/RelativeMovieCarousel';
import PeopleList from '../components/PeopleList';
import { findMovie } from '../actions';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Error from '../components/Error'


const MoviePreview = ({ findMovieWithId, error }) => {

    let location = useLocation();

    // Get the type of the media
    const type = location.pathname.split('/')[2];
    const id = location.pathname.split('/')[3];
        
    useEffect(()=>{
        findMovieWithId(type, id);
    }, [findMovieWithId, id, type])
        
    return ( 
        <>
            {error ? (<Error error="Movie not found. Please try again." /> ) : (<div>
                <Banner movieID={id} type={type} />
               <RelativeMovieCarousel movieID={id} type={type}/>
               <PeopleList movieID={id} type={type} />
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
