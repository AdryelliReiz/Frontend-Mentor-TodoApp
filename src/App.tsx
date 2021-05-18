import {GlobalStyles, Main} from './styles/global';

const App = () => {
  return(
    <>
      <GlobalStyles/>
      <header>
        <img src='./assets/bg-desktop-dark.jpg' alt="Banner" />
      </header>
      <Main>
        <div className="header">
          <h1>TODO</h1>
          <span>
            <img src='./assets/icon-sun.svg' alt="Sun" />
          </span>
        </div>

        <div className="inputAddTodo">
          <input type="text" placeholder="Create a new todo..." />
        </div>

        <div className="todoList" >
          <li>
            <ul>
              <p>Complete online JavaScript course</p>
            </ul>
            <ul>
              <p>20 minutes meditation</p>
            </ul>
            <ul>
              <p>Read for 1 hour</p>
            </ul>
            <ul>
              <p>Complete Todo App on Frontend Mentor</p>
            </ul>
          </li>

          <div className="todoSubtitle">
            <p>4 items left</p>

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
        </div>
        
      </Main>
    </>
    
  )
  
}

export default App;
