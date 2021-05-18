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
            min-height: 27vh;
        }
    }
`;

export const Main = styled.main`
    width: 540px;
    margin: 3rem auto;
    margin-top: -14rem;
    
    color: var(--LightGrayishBlue);
    .header {
        font-size: 1.2rem;
        letter-spacing: 0.6rem;
        display: flex;
        justify-content: space-between;
    }

    .inputAddTodo {
        width: 100%;
        height: 3.5rem;
        margin: 2rem 0;
        display: flex;
        flex-direction: row;

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
        width: 540px;
        position: absolute;
        background-color: var(--VeryDarkDesaturatedBlue);
        border-radius: 0.2rem;
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.75);

        li {
            list-style: none;

            ul {
                width: 100%;
                text-decoration-style:none;
                height: 3.5rem;
                padding: 1rem;
                border-bottom: 1px solid var(--DarkGrayishBlue);
                align-items: center;
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
