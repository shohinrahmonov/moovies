import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '../style/Container';
import { Rate, Button, Modal, Badge, Spin, message } from 'antd';
import { PlayCircleOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';
import bg1 from '../static/media/bg.jpg';
import moment from 'moment';
import momentDuration from 'moment-duration-format';
import { findCast, findMovie, addWatchList} from '../actions';
import { BannerWrapper } from '../style/BannerWrapper';



const Banner = ({movieID, type, selectedMovie, casts, findMovieWithId, findCastWithId, addWatchList, watchList, loading }) => {

    const [visible, setVisible] = useState(false);
    const [add, setAdd] = useState(false);


    const addToWatchListHandler = (e)=>{
        addWatchList(e);
        setAdd(true);
        message.success(`${e.name ? e.name : e.title} is added on Watch List`);
    }
    
    useEffect(()=>{
        findMovieWithId(type, movieID);
        findCastWithId(type, movieID);
    }, [findMovieWithId, type, findCastWithId, movieID])

    const description = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];
    return ( 
        <>
            <BannerWrapper className={loading ? 'spinner-height' : null}>
                {loading ? <Spin size="large" /> :
                <div className="movie-preview-container" >
                    {selectedMovie.backdrop_path !== null ? <div className="image-backdrop" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`}} /> : <div className="image-backdrop" style={{backgroundImage: `url(${bg1})`}} />}
                        <Container className="custom-class-container">
                            <div className="movie-details">
                                <h1>{selectedMovie.title ?selectedMovie.title : selectedMovie.name}</h1>
                                <div className="info-badges">
                                    <Rate tooltips={description} allowHalf disabled value={selectedMovie.vote_average/2} />
                                    <Badge count={selectedMovie.vote_count} title="Number of votes" className="site-badge-count-4" style={{ backgroundColor: 'transparent' }} />
                                    <span>IMDb {selectedMovie.vote_average} </span>
                                    <span>{selectedMovie.runtime ?  moment.duration(selectedMovie.runtime, "minutes").format("h[h] mm[min]") : `${selectedMovie.number_of_seasons} seasons`}</span>
                                    <span>{moment(selectedMovie.release_date).format('YYYY')}</span>
                                </div>
                                <p className="overview">{selectedMovie.overview}</p>
                                <ul className="casts-list">
                                    {casts.crew && casts.crew.slice(0, 3).map(person=> <li key={person.credit_id}>
                                        <span>{person.job}</span>
                                        <p>{person.name}</p>
                                    </li>)}
                                </ul>
                                {selectedMovie.videos && <Button type="primary" disabled={selectedMovie.videos.results.length <= 0 ? true : false } onClick={()=>setVisible(!visible)} icon={<PlayCircleOutlined />}>
                                    Watch Trailer
                                </Button>}
                                <Button type="primary" style={{marginTop: '10px'}} disabled={watchList.filter(e => e.id === selectedMovie.id).length > 0} icon={add ? <CheckOutlined /> : <PlusOutlined />} onClick={()=>addToWatchListHandler(selectedMovie)} >Add to watch list</Button>
                            </div>
                        </Container>
                    </div>}
                    {selectedMovie.videos && <Modal width={"70%"}
                                                    visible={visible}
                                                    onCancel={()=>setVisible(!visible)}
                                                    bodyStyle={{height: '600px'}}
                                                    className="modal-custom-ui"
                                                    footer={null}
                                                    centered
                                                    destroyOnClose={true}>
                    <iframe title="sas"  style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                        }} src={`https://www.youtube.com/embed/${selectedMovie.videos.results ? (selectedMovie.videos.results >= 0 ? null : selectedMovie.videos.results[0].key) : ''}`}/>
                    </Modal>}
            </BannerWrapper>
        </>
     );
}
 

const mapStateToProps = (state)=>{
    return {
        selectedMovie: state.movies.selectedMovie,
        casts: state.movies.casts,
        loading: state.movies.loading,
        watchList: state.watchList
    }
}

export default connect(mapStateToProps, { findMovieWithId: findMovie, findCastWithId: findCast, addWatchList})(Banner);
