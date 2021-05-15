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
    header {
        width: 100%;

        img{
            flex: 1;
            width: 100vw;
            min-height: 27vh;
        }
    }
`;

export const Main = styled.main`
    width: 540px;
    padding: 1rem;
    margin: 3rem auto;
    margin-top: -14rem;
    
    color: var(--LightGrayishBlue);
    div {
        font-size: 1.2rem;
        letter-spacing: 0.6rem;
        display: flex;
        justify-content: space-between;
    }
`;
