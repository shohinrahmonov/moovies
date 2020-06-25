import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    position: relative;
    padding-top: 6rem;
    .movie-image-bg{
        background-size: cover;
        background-position: top;
        width: 100%;
        height: 60vh;
        position: relative;
        &:before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            background: linear-gradient(0deg, rgba(0,0,0,.9) -10%, rgba(0,0,0,0) 70%);
        }
    }
    .movie-slider-item{
        max-width: 1250px;
        margin: 0 auto;
        padding: 0 30px;
        position: relative;
        height: 100%;
    }
    .movie-text-container{
        max-width: 60rem;
        color: #eae6e6;
        position: absolute;
        bottom: 60px;
        h2{
            color: #eae6e6;
            transition: .25s all;
            display: inline-block;
            &:hover{
                color: #eae6e685;
            }
        }
    }
    .movie-info{
        display: flex;
        align-items: center;
        padding-bottom: 8px;
        p{
            margin-bottom: 0;
        }
        span{
            padding-right: 10px;
        }
        .genre-section{
            padding-left: 10px;
            padding-right: 10px;
            display: flex;
            align-items: center;
            ul{
                margin-bottom: 0;
                list-style: none;
                display: flex;
                li{
                    font-weight: bold;
                    margin-left: 6px;
                }
            }
        }
    }
    .movie-desc{
        font-size: 14px;
        letter-spacing: .7px;
    }
    .nextBtn{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
    .prevBtn{
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
    @media(max-width: 768px){
        .nextBtn, .prevBtn{
            top: 35%;
        }
        
    }
    @media(max-width: 512px){
        .movie-text-container{
            width: auto;
        }
        .movie-slider-item{
            padding: 0 15px;
        }
        .movie-info{
            font-size: 10px;
        }
        .movie-desc{
            font-size: 12px;
        }
        .nextBtn, .prevBtn{
            top: unset;
            bottom: 4%;
            transform: unset;
        }
        .prevBtn{
            left: 36%;
        }
        .nextBtn{
            right: 36%;
        }
    }
    @media(max-width: 375px){
        .release-data{
            display: none;
        }
    }
`;