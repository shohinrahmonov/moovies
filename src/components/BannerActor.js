import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '../style/Container';
import { Button, Modal, Spin, Carousel } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import {  findActor } from '../actions';
import { BannerActorWrapper } from '../style/BannerActorWrapper'


const BannerActor = ({movieID, findActorWithId, selectedActor, loading }) => {

    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        findActorWithId(movieID);
    }, [findActorWithId, movieID])

    return ( 
        <>
            <BannerActorWrapper className={loading ? 'spinner-height' : null}>
                {loading ? <Spin size="large" /> : ( selectedActor && <div className="movie-preview-container" >
                        <div className="image-backdrop" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedActor.profile_path})`}} />
                        <Container className="custom-class-container">
                            <div className="movie-details">
                                <h1>{selectedActor.name}</h1>
                                <div className="info-badges">
                                    <span>{selectedActor.gender === 1 ? 'Actress' : 'Actor'} -</span>
                                    {selectedActor.birthday && <span>Born on {moment(selectedActor.birthday).format('DD MMMM YYYY')} {`(${ moment().year() - moment(selectedActor.birthday).format('YYYY') } years old)`} </span>}
                                </div>
                                <p className="overview">{selectedActor.biography.length > 600 ? <>{selectedActor.biography.slice(0, 400)} ... </> : selectedActor.biography} {selectedActor.imdb_id && <a href={`https://www.imdb.com/name/${selectedActor.imdb_id}`} target="_blank" rel="noopener noreferrer">Read more</a> }</p>
                                {selectedActor.images && <Button type="primary" disabled={selectedActor.images.profiles.length <= 0 ? true : false } onClick={()=>setVisible(!visible)} icon={<PlayCircleOutlined />}>
                                        More Photos
                                </Button>}
                            </div>
                        </Container>
                    </div>)}
                     {selectedActor && ( selectedActor.images && <Modal 
                                        className="photos-modal"
                                        visible={visible}
                                        onCancel={()=>setVisible(!visible)}
                                        footer={null}
                                        autoplay
                                        destroyOnClose={true}>
                            <Carousel autoplay centerMode={true}>
                                {selectedActor.images.profiles.map(img=><div key={img.aspect_ratio} className="slider-modal">
                                    <img src={`https://image.tmdb.org/t/p/w500${img.file_path}`} alt="ImageDescription"/>
                                </div>
                                )}
                            </Carousel>
                    </Modal>)}
            </BannerActorWrapper>
        </>
     );
}
 

const mapStateToProps = (state)=>{
    return {
        selectedActor: state.people.selectedActor,
        loading: state.people.loading
    }
}

export default connect(mapStateToProps, { findActorWithId: findActor})(BannerActor);
