import { ChangeEvent, KeyboardEvent, useState } from 'react';
import {GlobalStyles, Main} from './styles/global';

interface IChoresProps {
  choreName: string | undefined;
  isCompleted: boolean;
}

const App = () => {
  const [chores, setChores] = useState<IChoresProps[]>([]);
  const [valueInput, setValueInput] = useState('');
  const [itemList, setItemList] = useState(0);

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setValueInput(event.target.value)
  }

  function handleKeyChange(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      if(valueInput === '') {
        return
      }

      const choreValue = {
        choreName: valueInput,
        isCompleted: false,
      }

      setChores([choreValue,...chores])
      setItemList(chores.length + 1)
      console.log(itemList)
      setValueInput('')
      
    }
  }

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
          <input 
            type="text" 
            placeholder="Create a new todo..." 
            autoFocus
            onKeyDown={handleKeyChange}
            onChange={handleChangeInput}
            value={valueInput}
          />
        </div>

        <div className="todoList" >
          <li>
            {chores.map(chore => (
              <ul >{chore.choreName}</ul>
            ))}
          </li>

          <div className="todoSubtitle">
            <p>{itemList} items left</p>

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
