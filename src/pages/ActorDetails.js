import React, { useEffect } from 'react';
import BannerActor from '../components/BannerActor';
import RelativeActorCarousel from '../components/RelativeActorCarousel';
import Error from '../components/Error';
import { useParams } from 'react-router-dom';
import { findMovie } from '../actions';
import { connect } from 'react-redux';

const MoviePreview = ({ findMovieWithId, error }) => {

    let { id } = useParams();

    useEffect(()=>{
        findMovieWithId(id);
    }, [findMovieWithId, id])
        
    return ( 
        <>
            {error ? (<Error error="Actor not found. Please try again." /> ) : (<div>
                <BannerActor movieID={id} />
                <RelativeActorCarousel movieID={id}/>
            </div> )}
        </>
     );
}
 
const mapStateToProps = (state)=>{
    return {
        error : state.people.error
    }
}

export default connect(mapStateToProps, { findMovieWithId: findMovie})(MoviePreview);
