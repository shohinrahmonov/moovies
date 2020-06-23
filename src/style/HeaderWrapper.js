import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background: #fff;
    padding: 1.2rem 0;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title-header{
        display: flex;
        align-items: center;
        h6{
            margin-bottom: 0;
            font-size: 3rem;
            padding-left: 1rem;
            font-family: 'MuseoModerno', cursive;
            letter-spacing: 2px;
            span{
                color: #5f27dd;
            }
        }
    }
    .menu-n-search{
        .anticon-menu{
            padding: 1rem;
            font-size: 2.4rem;
        }
    }
    .menu{
        list-style: none;
        margin-bottom: 0;
        display: flex;
        a{
            color: #626264;
            padding: 1rem;
            transition: all;
            border-radius: 4px;
            &.active{
                background: #8b69d7;
                color: #fff;
            }
            &:not(:last-child){
                margin-right: 1rem;
            }
            &:hover{
                background: #8b69d7;
                color: #fff;
            }
        }
    }
    .moovie-logo{
        font-size: 12px;
        height: 4.6rem;
        fill: #5f27dd;
        animation: beat 3s infinite alternate;
    }
`;