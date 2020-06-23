import styled from 'styled-components';

export const RelativeCarouselWrapper = styled.div`
    padding: 10rem 0;
    text-align: center;
    .movie-image-bg{
        background-size: cover;
        background-position: top;
        width: 100%;
        height: 102%;
        position: relative;
        border-radius: 6px;
        &:before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            background: linear-gradient(0deg, rgba(0,0,0,.9) 4%, rgba(0,0,0,0) 70%);
        }
        h2{
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            position: absolute;
            bottom: 10px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 94%;
            margin-bottom: 0;
            padding-left: 10px;
        }
    }
    h1{
        color: #fff;
        font-size: 2rem;
        text-align: center;
    }
    .slide{
        height: 37rem;
        padding: 0 4px;
    }
    .nextBtn{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        right: 0;
        border-radius: unset;
        height: 100%;
    }
    .prevBtn{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        left: 0;
        height: 100%;
        border-radius: unset;
    }
    .custom-slider-wrapper{
        position: relative;
    }
`;

