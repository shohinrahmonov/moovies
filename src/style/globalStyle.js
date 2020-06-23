import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html{
    ${'' /* 1rem = 10px */}
    font-size: 62.5%; 
  }
  *, *::after, *::before{
    padding: 0;
    margin: 0;
  }
  body {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    background: #0f171e;
  }
  .ant-btn-primary{
    background: #8b69d7;
    border-color: #8b69d7;
    &:hover{
      background: #9d87ce;
      border-color:  #9d87ce;
    }
  }
  .ant-btn-primary:focus{
    background: #8b69d7;
    border-color: #8b69d7;
  }
  .ant-popover-inner{
    width: 300px;
  }
  .ant-modal-close-icon{
      color: #fff;
      font-size: 29px !important;
  }
  .nav-items-mobile{
       display: flex;
       flex-direction: column;
       a{
          color: #000;
          padding: 1rem;
          &:active{
            color: #fff;
          }
          &:not(:last-child){
              padding-bottom: 1rem;
          }
          &.active{
            background: #8b69d7;
            color: #fff;
          }
       }
   }
  .slider-modal{
        img{
            width: 100%;
        }
    }
    .photos-modal{
        .ant-modal-close-icon{
            color: #000;
        }
    }
    ${'' /* Keyframes */}
    @keyframes beat{
	    to { transform: scale(1.2); }
    }
    .slick-track{
      margin: 0 auto;
    }
    @media(max-width: 768px){
      .photos-modal{
        min-width: 90%;
      }
      .slider-modal{
        img{
            height: 100%;
        }
    }
    }
`