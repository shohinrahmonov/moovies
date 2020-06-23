import styled from 'styled-components';

export const BannerWrapper = styled.div`
    padding-top: 6rem;
    .movie-preview-container{
        height: 60rem;
        position: relative;
        &:before{
            content: "";
            position: absolute;
            height: 100%;
            width: 78%;
            left: 0;
            top: 0;
            z-index: 1;
            background: linear-gradient(90deg,rgba(47,26,86,0.9) 32%,rgba(19,19,19,0) 70%);
        }
    }
    .image-backdrop{
        background-position: center;
        background-size: cover;
        height: 100%;
        position: absolute;
        right: 0;
        max-width: 82rem;
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
            margin-left: 10px;
            font-weight: bold;
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
    }
    &.spinner-height{
        height: 60rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;