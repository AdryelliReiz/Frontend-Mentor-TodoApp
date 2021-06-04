import { useContext } from 'react';

import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { InputTodo } from './components/InputTodo';
import { TodoList } from './components/TodoList';

import { ThemeContextLD } from './context/ThemeContext';
import { TodoContextProvider } from './context/TodoContext';

import { ThemeProvider } from 'styled-components';
import {GlobalStyles, Main} from './styles/global';


const App = () => {
  const { theme } = useContext(ThemeContextLD);
  
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Banner />

      <TodoContextProvider>
        <Main>
          
          <Header />
          <InputTodo />

          <TodoList />
          
        </Main>
      </TodoContextProvider>
    </ThemeProvider>
  )
}

export default App;
