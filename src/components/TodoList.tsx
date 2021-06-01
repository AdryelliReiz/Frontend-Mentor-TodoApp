import { useContext } from "react";
import styled from "styled-components"
import { TodoContext } from "../context/TodoContext";
import { SideBar } from "./SideBar";

export const TodoList = () => {
    const {chores} = useContext(TodoContext);

    function handleIsCompleted(index: number) {
        if (chores[index].isCompleted === false) {
            chores[index].isCompleted = true
        } else {
            chores[index].isCompleted = false
        }
    }

    return (
       <TodoListStyled>
        <li>
            {chores.map((chore, index) => 
                <ul key={chore.keyId} >
                    {chore.isCompleted === false ? (
                        <>
                            <button 
                                onClick={() => handleIsCompleted(index)}
                            >
                            </button>
                            <p>{chore.choreName}</p>
                        </>
                    ) : (
                        <>
                            <button
                            onClick={() => {handleIsCompleted(index)}}
                            >
                                <img src="./assets/icon-check.svg" alt="Icon Check" />
                            </button>
                            <p className="p-completed" >{chore.choreName}</p>
                        </>
                    )}
                </ul>
            )}
            
        </li>

        <SideBar />
       </TodoListStyled>
    )
}

const TodoListStyled = styled.div`
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
            display: flex;
            align-items: center;
            

            @media(max-width: 600px) {
                padding: 1rem;
            }

            button {
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 50%;
                background-color: transparent;
                border: 1px solid var(--DarkGrayishBlue);
                margin-right: 1rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 100%;
                    height: 100%;
                    padding: 2px;
                    border-radius: 50%;
                    background-image: linear-gradient(to bottom right, #0098fd, #fd00b1);
                }
            }

            .p-completed {
                color: var(--DarkGrayishBlue);
                text-decoration: line-through;
            }
        }
    }
`;