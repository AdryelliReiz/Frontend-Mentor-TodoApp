import { useContext } from "react"
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext"


export const SideBar = () => {
    const {chores,setChores, setFilteredTodo} = useContext(TodoContext);


    function filterAll() {
        setFilteredTodo(chores)
    }

    function FilterActive() {
        const data = chores.filter(chore => chore.isCompleted === false)
        setFilteredTodo(data)
    }

    function FilteredCompleted() {
        const data = chores.filter(chore => chore.isCompleted === true)
        setFilteredTodo(data)
    }

    function ClearChores() {
        setChores([])
    }

    return(
        <SideBarStyled>
            <p>{chores.length} items left</p>

            <div className="todoFilters">
            <button
                onClick={filterAll}
            >
                All
            </button>
            <button
                onClick={FilterActive}
            >
                Active
            </button>
            <button
                onClick={FilteredCompleted}
            >
                Completed
            </button>
            </div>

            <button
                onClick={ClearChores}
            >
                Clear Completed
            </button>

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
    button:hover {
        color: #006eff;
    }
`;