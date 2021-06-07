import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContextLD } from '../context/ThemeContext';

export const Banner = () => {
    const {theme} = useContext(ThemeContextLD)
    return(
        <BannerStyled>
            {theme.title === 'light' ? (
                <img src='./assets/bg-desktop-light.jpg' alt="Banner" />
            ) : (
                <img src='./assets/bg-desktop-dark.jpg' alt="Banner" />
            )}
        </BannerStyled>
    )
};

const BannerStyled = styled.div`
    width: 100%;

    img{
        width: 100vw;
        min-height: 28vh;
    }
    
`;