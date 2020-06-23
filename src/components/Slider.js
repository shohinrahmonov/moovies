import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import { RightSquareOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { fetchGenres, findPopular } from '../actions';
import { connect } from 'react-redux';
import { Link,  } from 'react-router-dom';
import moment from 'moment';
import { CarouselWrapper } from '../style/CarouselWrapper'



function Slider({fetchPopular, popularMovies, fetchGenres, allGenres}){

    useEffect(()=>{
        fetchPopular();
        fetchGenres();
    },[fetchPopular, fetchGenres])

    const customSlider  = React.useRef()
    
    const [activeSlides, setActiveSlides] = useState({
        activeSlide: 0,
        activeSlide2: 0 
    })

    const sliderSettings = { 
        dots: false,
        infinite: true,
        swipeToSlide: true,
        autoplay: true,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
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
        <CarouselWrapper>
                <Carousel ref={customSlider} {...sliderSettings} >
                {popularMovies && popularMovies.slice(8, 14).map(movie=> <div key={movie.id}>
                        <div className="movie-image-bg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`}}>
                            <div className="movie-slider-item">
                                <div className="movie-text-container">
                                    <Link to={{pathname: `/movie/${movie.id}`}}><h2>{movie.title}</h2></Link>
                                    <div className="movie-info">
                                        <RightSquareOutlined />
                                        <p>IMDb <b>{movie.vote_average}</b></p>
                                        <div className="genre-section">
                                            <p>Genre:</p>
                                            <ul>
                                            {movie.genre_ids.map((genre, genreIndex)=> <li key={genre}>{allGenres  && allGenres.map(e=> e.id === genre ? genreIndex === movie.genre_ids.length  - 1  ? e.name :`${e.name},` : '')}</li>)}
                                            </ul>
                                        </div>
                                        <p className="release-data">Release Date: <b>{moment(movie.release_date).format("YYYY")}</b></p>
                                    </div>
                                    <div className="movie-desc">
                                        {movie.overview}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
            </Carousel>
            <Button className="prevBtn" type="primary" shape="circle" onClick={gotoPrev} icon={<LeftOutlined />} size="large" />
            <Button className="nextBtn" type="primary" shape="circle" onClick={gotoNext} icon={<RightOutlined />} size="large" />
        </CarouselWrapper>
     );
}
 

const mapStateToProps = (state)=>{
    return {
        popularMovies: state.movies.popular.results,
        allGenres: state.movies.genres.genres
    }
}

export default connect(mapStateToProps, { fetchPopular: findPopular, fetchGenres })(Slider);