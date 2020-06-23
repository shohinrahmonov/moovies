import React from 'react';
import bg1 from '../static/media/bg.jpg';
import { Popover } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { MovieItemWrapper } from '../style/MovieItemWrapper';

const MovieItem = ({image, title, overview}) => {
    
    const content = (
        <div className="popup-content-custom">
            <div className="rating-info">
                <p><b>Overview</b>: {overview}</p>
            </div>
        </div>
      );
   
    return (
        <MovieItemWrapper className="movie-self">
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
 
export default MovieItem;