import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --VeryDarkBlue: hsl(235, 21%, 11%);
        --VeryDarkDesaturatedBlue: hsl(235, 24%, 19%);
        --LightGrayishBlue:  hsl(234, 39%, 85%); 
        --DarkGrayishBlue: hsl(234, 11%, 52%);
        --VeryDarkGrayishBlue:  hsl(237, 14%, 26%);
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        width: 100vw;
        height: 100vh;
        font: 18px "Josefin Sans", sans-serif;
    }
    body {
        background-color:  var(--VeryDarkBlue); 
    }
`;

export const Main = styled.main`
    width: 540px;
    margin: 3rem auto;
    margin-top: -12rem;
    color: var(--LightGrayishBlue);
    

    @media(max-width: 600px) {
        width: 85%;
        font-size: 0.8rem;
        margin-top: -9rem;
    }
    
`;
