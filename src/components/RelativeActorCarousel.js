import React, { useState, useEffect } from 'react';
import { Carousel, Spin } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Container } from '../style/Container';
import { findActor } from '../actions';
import { connect } from 'react-redux';
import { RelativeCarouselWrapper } from '../style/RelativeCarouselWrapper';
import bg1 from '../static/media/bg.jpg';

function RelativeActorCarousel({type, movieID, findActorWithId, selectedActor, loading }){
    
    const customSlider  = React.useRef();

    useEffect(()=>{
        findActorWithId(type, movieID);
    }, [findActorWithId, type, movieID])
    
    const [activeSlides, setActiveSlides] = useState({
        activeSlide: 0,
        activeSlide2: 0 
    })

    // check the items of releavant movie and set the carousel slide to Show  
    const handleSlideToShow = () =>selectedActor && selectedActor.movie_credits.cast.length < 5 ? 2 : 4;


    const sliderSettings = { 
        dots: false,
        infinite: true,
        speed: 1000,
        swipeToSlide: true,
        slidesToShow: handleSlideToShow(),
        beforeChange: (current, next) => {
            setActiveSlides({...activeSlides, activeSlide: next});
        },
        afterChange: current => {
            setActiveSlides({...activeSlides, activeSlide2: current}) 
        } 
    };
    
      const gotoNext = () => {
          customSlider.current.slick.slickNext();
      }
    
      const gotoPrev = () => {
        customSlider.current.slick.slickPrev();
      }
      
    return ( 
        <>
            {selectedActor && !selectedActor.adult && <RelativeCarouselWrapper>
                {loading ? <Spin size="large"/> : selectedActor.movie_credits.casts !== 0 && <div className="inner-carousel">
                    <Container>
                        <h1>Also known for these movies</h1>
                    </Container>
                    <Container className="custom-slider-wrapper">
                        <Carousel ref={customSlider} {...sliderSettings}>
                            {selectedActor.movie_credits.cast.map(movie=> <div className="slide" key={movie.id} >
                                <Link to={{pathname: `/details/movie/${movie.id}`}}>
                                    <div className="movie-image-bg" style={movie.poster_path ? {backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}`} : {backgroundImage: bg1}}>
                                        <h2>{movie.title}</h2>
                                    </div>
                                </Link>
                            </div>)}
                        </Carousel>
                        <Button className="prevBtn" type="primary" shape="circle" onClick={gotoPrev} icon={<LeftOutlined />} size="large" />
                        <Button className="nextBtn" type="primary" shape="circle" onClick={gotoNext} icon={<RightOutlined />} size="large" />
                    </Container>
                </div>}
            </RelativeCarouselWrapper>}
        </>
     );
}
 
const mapStateToProps = (state)=>{
    return {
        selectedActor: state.people.selectedActor,
        loading: state.people.loading
    }
}

export default connect(mapStateToProps, { findActorWithId: findActor})(RelativeActorCarousel);
