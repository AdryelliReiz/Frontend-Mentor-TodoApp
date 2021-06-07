import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --ColorPrimary: ${props => props.theme.colors.primary};
        --ColorSecondary: ${props => props.theme.colors.secondary};
        --ColorFont:  ${props => props.theme.colors.font}; 
        --ColorFontTwo: ${props => props.theme.colors.fontTow};
        --ColorFontThree:  ${props => props.theme.colors.fontThree};
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
        background-color:  var(--ColorPrimary); 
    }
`;

export const Main = styled.main`
    width: 540px;
    margin: 3rem auto;
    margin-top: -12rem;
    color: var(--ColorFont);
    

    @media(max-width: 600px) {
        width: 85%;
        font-size: 0.8rem;
        margin-top: -9rem;
    }
    
`;
