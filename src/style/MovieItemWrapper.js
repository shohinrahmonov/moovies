import styled from 'styled-components';

export const MovieItemWrapper = styled.div`
    display: inline-block;
    color: #fff;
    background-color: #8b69d7;
    position: relative;
    border-radius: 6px;
    height: 100%;
    .movie-card{
        height: 340px;
        width: 200px;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: .25s ease-in;
        &:before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        &:hover{
            background: #4113a6;
        }
    }
    .movie-img{
        background-position: center;
        background-size: cover;
        height: 300px;
        width: 100%;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    .movie-info{
        flex: 1;
        align-self: center;
        padding: 8px;
        text-align: center;
        font-size: 12px;
        width: 100%;
    }
    span{
        position: absolute;
        right: 4px;
        top: 4px;
        font-size: 18px;
    }
    .popup-content-custom{
        width: 100px;
    }
    @media(max-width: 512px){
        .movie-self {
            margin-right: 0;
        }
    }
`;

