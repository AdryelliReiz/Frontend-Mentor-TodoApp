import { useCallback, useContext, useEffect} from "react";
import styled from "styled-components"
import { TodoContext } from "../context/TodoContext";
import { SideBar } from "./SideBar";

export const TodoList = () => {
    const {filteredTodo, setFilteredTodo, chores, setChores} = useContext(TodoContext);

    function handleIsCompleted(index: number) {
        const todoUpdate = filteredTodo[index];
        const updateChore = chores.indexOf(todoUpdate)

        if (chores[updateChore].isCompleted === false) {
            chores[updateChore].isCompleted = true;
        } else {
            chores[updateChore].isCompleted = false;
        }
        
        const cloneChores = chores;
        cloneChores.splice(updateChore, 1, chores[updateChore]);
        setChores(cloneChores);
    }

    function removeTodo(index: number) {
        const todoRemove = filteredTodo[index];
        const choreRemove = chores.indexOf(todoRemove);
        const cloneChores = chores;

        cloneChores.splice(choreRemove, 1);

        setChores(cloneChores);
    }

    useEffect(() => {
        setFilteredTodo(chores);
    }, [chores])

   
    return (
       <TodoListStyled>
        <ul>
            {filteredTodo.map((todo, index) => 
                <li key={todo.keyId} >
                    {todo.isCompleted === false ? (
                        <>
                            <div>
                                <button className="checkButton"
                                    onClick={() => handleIsCompleted(index)}
                                >
                                </button>
                                <p>{todo.choreName}</p>
                            </div>
                            <button
                                className="crossButton"
                                onClick={() => removeTodo(index)}
                            >
                                <img src="./assets/icon-cross.svg" alt="Cross" />
                            </button>
                        </>
                    ) : (
                        <>
                            <div>
                                <button className="checkButton"
                                onClick={() => {handleIsCompleted(index)}}
                                >
                                    <img src="./assets/icon-check.svg" alt="Icon Check" />
                                </button>
                                <p className="p-completed" >{todo.choreName}</p>
                            </div>
                            <button 
                                    className="crossButton"
                                    onClick={() => removeTodo(index)}
                            >
                                <img src="./assets/icon-cross.svg" alt="Cross" />
                            </button>
                        </>
                    )}
                </li>
            )}
            
        </ul>

        <SideBar />
       </TodoListStyled>
    )
}

const TodoListStyled = styled.div`
    width: 100%;
    position: relative;
    border-radius: 0.2rem;

    ul {
        list-style: none;
        background-color: var(--ColorSecondary);
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.75);

        li {
            width: 100%;
            padding: 1rem;
            border-bottom: 1px solid var(--ColorFontTwo);
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            div {
                display: flex;
                align-items: center;

                .checkButton {
                    width: 1.2rem;
                    height: 1.2rem;
                    border-radius: 50%;
                    background-color: transparent;
                    border: 1px solid var(--ColorFontTwo);
                    margin-right: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

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

            @media(max-width: 600px) {
                padding: 1rem;
            }
            
            .crossButton {
                width: 1.5rem;
                height: 1.5rem;
                background-color: transparent;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
        }
    }
    @media(max-width: 680px) {
            ul {
                margin-bottom: 2rem;
            }
        }
`;