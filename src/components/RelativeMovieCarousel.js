import React, { useState, useEffect } from 'react';
import { Carousel, Spin } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link, } from 'react-router-dom';
import { Container } from '../style/Container';
import { findSimilar } from '../actions';
import { connect } from 'react-redux';
import { useScreenSize } from '../helpers/useScreenSize';
import { RelativeCarouselWrapper } from '../style/RelativeCarouselWrapper';





function RelativeCarousel({type, movieID, findSimilarWithId, similar, loading }){

    useEffect(()=>{
        findSimilarWithId(type, movieID);
    }, [findSimilarWithId, type, movieID])

    
    const customSlider  = React.useRef()
    
    const [activeSlides, setActiveSlides] = useState({
        activeSlide: 0,
        activeSlide2: 0 
    })


    const screenSize = useScreenSize();
    
   
    const sliderSettings = { 
        dots: false,
        infinite: true,
        speed: 1000,
        swipeToSlide: true,
        slidesToShow: screenSize > 600 ? 4 : 2,
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
        {similar && similar.length > 0 && <RelativeCarouselWrapper>
            { loading ? <Spin size="large"/> : similar.length > 0 && <div className="inner-carousel">
                <Container>
                    <h1>Those who watched this movie also watched the following</h1>
                </Container>
                <Container className="custom-slider-wrapper">
                    <Carousel ref={customSlider} {...sliderSettings}>
                        {similar.map(movie=> <div className="slide" key={movie.id} >
                            <Link to={{pathname: `/movie/${movie.id}`}}>
                                <div className="movie-image-bg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`}}>
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
        similar: state.movies.similar.results
    }
}

export default connect(mapStateToProps, { findSimilarWithId: findSimilar})(RelativeCarousel);
