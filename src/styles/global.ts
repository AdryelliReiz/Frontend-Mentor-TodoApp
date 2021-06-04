import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --VeryDarkBlue: ${props => props.theme.colors.primary};
        --VeryDarkDesaturatedBlue: ${props => props.theme.colors.secondary};
        --LightGrayishBlue:  ${props => props.theme.colors.font}; 
        --DarkGrayishBlue: ${props => props.theme.colors.fontTow};
        --VeryDarkGrayishBlue:  ${props => props.theme.colors.fontThree};
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
