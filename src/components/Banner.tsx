import styled from 'styled-components';

export const Banner = () => {
    return(
        <BannerStyled>
            <img src='./assets/bg-desktop-dark.jpg' alt="Banner" />
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