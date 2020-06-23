import styled from 'styled-components';

export const BannerActorWrapper = styled.div`
    padding-top: 6rem;
    .movie-preview-container{
        height: 60rem;
        position: relative;
        &:before{
            content: "";
            position: absolute;
            height: 100%;
            width: 78%;
            right: 0;
            top: 0;
            z-index: 1;
            background: linear-gradient(270deg,rgba(47,26,86,0.9) 51%,rgba(19,19,19,0) 88%);
        }
    }
    .image-backdrop{
        background-position: center;
        background-size: cover;
        height: 100%;
        position: absolute;
        left: 0;
        max-width: 48rem;
        width: 100%;
    }
    .movie-details{
        color: #fff;
        z-index: 10;
        position: relative;
        max-width: 50rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        h1{
            color: #fff;
        }
    }
    .info-badges{
        &>span{
            font-weight: bold;
            &:not(:first-child){
                margin-left: 10px;
            }
        }
    }
    .casts-list{
        list-style: none;
        li{
            display: flex;
            span{
                margin-right: 10px;
                font-weight: bold;
            }
            p{
                color: #9d87ce;
                font-weight: bold;
            }
        }
    }
    .overview{
        padding-top: 4px;
    }
    .modal-custom-ui{
        .ant-modal-content{
            border-color: #8b69d7;
        }
    }
    .custom-class-container{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    &.spinner-height{
        height: 60rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ant-carousel .slick-slide img{
        height: 300px !important;
    }
    .slider-modal{
        img{
            min-height: 300px;
            height: -moz-available;
            width: 100%;
        }
    }
   @media(max-width: 512px){
        .custom-class-container{
            align-items: flex-end;
            padding-bottom: 12px;
        }
        .movie-preview-container{
            &:before{
                width: 100%;
                background: linear-gradient(0deg,rgba(47,26,86,0.9) 51%,rgba(19,19,19,0) 88%);
            }
        }
   }
`;
