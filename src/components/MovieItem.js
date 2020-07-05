import React from 'react';
import bg1 from '../static/media/bg.jpg';
import { Popover, Button, message } from 'antd';
import { PlayCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { MovieItemWrapper } from '../style/MovieItemWrapper';
import { connect } from 'react-redux';
import { addWatchList, removeWatchList } from '../actions';


const MovieItem = ({movieInfo, type, image, title, overview, watchList, addWatchList, removeMovie, removeWatchList}) => {
    
    const content = (
        <div className="popup-content-custom">
            <div className="rating-info">
                <p><b>Overview</b>: {overview}</p>
            </div>
        </div>
      );

      const addToWatchListHandler = (e, movie)=>{
        e.preventDefault();
        addWatchList({mediaType: type, ...movie});
        message.success(`${movie.name ? movie.name : movie.title} is added on Watch List`);
    }
    
    const removeFromWatchListHandler = (e, id)=>{
        e.preventDefault();
        removeWatchList(id);
    }
    
   
    return (
        <MovieItemWrapper className="movie-self">
            {movieInfo &&  <Button disabled={watchList.filter(e => e.id === movieInfo.id).length > 0} onClick={(e)=>addToWatchListHandler(e, movieInfo)} type="primary" shape="circle" icon={<PlusOutlined  />} size="large" />}
            {removeMovie && <Button onClick={(e)=>removeFromWatchListHandler(e, removeMovie)} type="primary" shape="circle" icon={<DeleteOutlined />} size="large" /> }
            <Popover content={content} title={title} placement="right" >
                <div className="movie-card">
                    {image === null? <div className="movie-img" style={{backgroundImage: `url(${bg1})`}}/> : <div className="movie-img" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${image})`}}/> }
                    <div className="movie-info" style={title.length > 12 ? {textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'} : {} }>
                        {title}
                    </div>
                    <PlayCircleOutlined />
                </div>
            </Popover>
        </MovieItemWrapper>
     );
}

const mapStateToProps = (state)=>{
    return {
        watchList: state.watchList
    }
}

export default connect(mapStateToProps, {removeWatchList, addWatchList})(MovieItem);