import { useContext } from "react";
import styled from "styled-components"
import { TodoContext } from "../context/TodoContext";
import { SideBar } from "./SideBar";

export const TodoList = () => {
    const {filteredTodo, setFilteredTodo} = useContext(TodoContext);

    function handleIsCompleted(index: number) {
        const todoUpdate = filteredTodo[index];

        if (filteredTodo[index].isCompleted === false) {
            todoUpdate.isCompleted = true;
            const listUpdate = filteredTodo.splice(index, 1, todoUpdate);
            setFilteredTodo(listUpdate)
        } else {
            todoUpdate.isCompleted = false;
            const listUpdate = filteredTodo.splice(index, 1, todoUpdate);
            setFilteredTodo(listUpdate)
        }
    }

    return (
       <TodoListStyled>
        <li>
            {filteredTodo.map((todo, index) => 
                <ul key={todo.keyId} >
                    {todo.isCompleted === false ? (
                        <>
                            <button 
                                onClick={() => handleIsCompleted(index)}
                            >
                            </button>
                            <p>{todo.choreName}</p>
                        </>
                    ) : (
                        <>
                            <button
                            onClick={() => {handleIsCompleted(index)}}
                            >
                                <img src="./assets/icon-check.svg" alt="Icon Check" />
                            </button>
                            <p className="p-completed" >{todo.choreName}</p>
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
    background-color: var(--ColorSecondary);
    border-radius: 0.2rem;
    box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.75);

    li {
        list-style: none;

        ul {
            width: 100%;
            padding: 1.2rem;
            border-bottom: 1px solid var(--ColorFontTwo);
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
                border: 1px solid var(--ColorFontTwo);
                margin-right: 1rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 100%;
                    height: 100%;
                    padding: 3px;
                    border-radius: 50%;
                    background-image: linear-gradient(to bottom right, #0aa5ff, #fd00b1);
                }
            }

            .p-completed {
                color: var(--ColorFontTwo);
                text-decoration: line-through;
            }
        }
    }
`;