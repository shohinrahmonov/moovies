import styled from 'styled-components';

export const MovieSearchWrapper = styled.div`
    padding-top: 20px;
    text-align: center;
    .movie-self{
        margin-right: 18px;
        margin-bottom: 18px;
    }
    .search-container{
        text-align: center;
    }
    .search-movie{
        max-width: 50rem;
        input{
            font-size: 14px;
        }
        .ant-input-group > .ant-input:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
        .ant-input-group-addon ,button{
            border-top-right-radius: 6px !important;
            border-bottom-right-radius: 6px !important;
        }
    }
    .search-result-container{
        padding-top: 30px;
    }
    h3{
        color: #fff;
    }
    .not-found-class{
        color: #fff;
        font-size: 2rem;
        text-align: center;
}
`;