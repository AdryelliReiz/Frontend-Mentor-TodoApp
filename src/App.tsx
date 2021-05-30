import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { InputTodo } from './components/InputTodo';
import { TodoList } from './components/TodoList';
import { TodoContextProvider } from './context/TodoContext';

import {GlobalStyles, Main} from './styles/global';


const App = () => {
  return(
    <>
      <GlobalStyles/>
      <Banner />

      <TodoContextProvider>
        <Main>
          
          <Header />
          <InputTodo />

          <TodoList />
          
        </Main>
      </TodoContextProvider>
    </>
  )
}

export default App;
