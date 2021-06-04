import { useContext } from "react";
import styled from "styled-components";
import { ThemeContextLD } from "../context/ThemeContext";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContextLD);
    return(
        <HeaderStyled>
        <h1>TODO</h1>
        {theme.title === 'dark' ? (
          <button onClick={toggleTheme}>
            <span>
              <img src='./assets/icon-sun.svg' alt="Sun" />
            </span>
          </button>
          
        ) : (
          <button onClick={toggleTheme}>
            <span>
              <img src='./assets/icon-moon.svg' alt="Moon" />
            </span>
           </button> 
        )}
          
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

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    
`;