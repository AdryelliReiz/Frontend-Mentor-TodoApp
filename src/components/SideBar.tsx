import { useContext } from "react"
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext"


export const SideBar = () => {
    const {chores} = useContext(TodoContext);

    return(
        <SideBarStyled>
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

        </SideBarStyled> 
    )
}

const SideBarStyled = styled.div`
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
`;