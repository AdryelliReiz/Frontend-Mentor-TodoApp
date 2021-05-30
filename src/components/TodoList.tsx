import { useContext } from "react";
import styled from "styled-components"
import { TodoContext } from "../context/TodoContext";

export const TodoList = () => {
    const {chores} = useContext(TodoContext);
    return (
       <TodoListStyled>
        <li>
            {chores.map(chore => 
                <ul key={chore.keyId} >{chore.choreName}</ul>
            )}
            
        </li>

        <div className="todoSubtitle">
            <p>{chores.length} items left</p>

            <div className="todoFilters">
            <button>
                All
            </button>
            <button>
                Active
            </button>
            <button>
                Completed
            </button>
            </div>

            <button>Clear Completed</button>

        </div> 
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
    
`;