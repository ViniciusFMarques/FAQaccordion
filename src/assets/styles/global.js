import { createGlobalStyle } from 'styled-components';
import backgroundImageDesktop from '../images/background-pattern-desktop.svg';
import backgroundImageMobile from '../images/background-pattern-mobile.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }

  body{
    background: no-repeat;
    background-image: url(${backgroundImageDesktop});
    background-color: ${({ theme }) => theme.colors.lightPink};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkPurple};
  }

  html{
    font-size: 16px;
  }

  button{
    cursor: pointer;
  }

  @media (max-width: 375px){
    html{
      font-size: 12px;
    }
    body{
      background-image: url(${backgroundImageMobile});
    }
  }
`;
