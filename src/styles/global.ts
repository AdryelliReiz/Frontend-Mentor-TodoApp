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
            width: 100vw;
            min-height: 28vh;
        }
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

    .header {
        font-size: 1.2rem;
        letter-spacing: 0.6rem;
        display: flex;
        justify-content: space-between;

        @media(max-width: 600px) {
            font-size: 0.8rem;
        }
    }

    .inputAddTodo {
        width: 100%;
        height: 3.5rem;
        margin: 2rem 0;
        display: flex;
        flex-direction: row;

        @media(max-width: 600px) {
            height: 3rem;
            margin: 1.5rem 0;
        }

        input {
            width: 100%;
            height: 100%;
            padding: 1rem;
            background-color: var(--VeryDarkDesaturatedBlue);
            border-style: none;
            border-radius: 0.2rem;
            color: var(--LightGrayishBlue);
            font-size: 1rem;
            box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.75);

            ::placeholder {
                font: 18px "Josefin Sans", sans-serif;
            }
        }
    }

    .todoList {
        width: 100%;
        position: relative;
        background-color: var(--VeryDarkDesaturatedBlue);
        border-radius: 0.2rem;
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.75);

        li {
            list-style: none;

            ul {
                width: 100%;
                padding: 1.2rem;
                border-bottom: 1px solid var(--DarkGrayishBlue);
                align-items: center;

                @media(max-width: 600px) {
                    padding: 1rem;
                }

                p {
                    font-size: 1rem;
                }
            }
        }
        .todoSubtitle {
            height: 3rem;
            display: flex;
            justify-content:space-between;
            align-items: center;
            padding: 1rem;
            
            font-size: 0.85rem;
            color: var(--DarkGrayishBlue);

            .todoFilters {
                button {
                    background-color: transparent;
                    color: var(--DarkGrayishBlue);
                    border-style: none;
                    font-size: 0.75rem;
                    cursor: pointer;
                }
                button + button {
                    margin-left: 0.5rem;
                }
            }

            button {
                background-color: transparent;
                color: var(--DarkGrayishBlue);
                border-style: none;
                font-size: 0.75rem;
                cursor: pointer;
            }
        }
        
    }
    
`;
