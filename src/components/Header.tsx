import styled from "styled-components";

export const Header = () => {
    return(
        <HeaderStyled>
          <h1>TODO</h1>
          <span>
            <img src='./assets/icon-sun.svg' alt="Sun" />
          </span>
        </HeaderStyled>
    )
};

const HeaderStyled = styled.header`
    font-size: 1.2rem;
    letter-spacing: 0.6rem;
    display: flex;
    justify-content: space-between;

    @media(max-width: 600px) {
        font-size: 0.8rem;
    }
    
`;