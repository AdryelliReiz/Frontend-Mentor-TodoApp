import {GlobalStyles, Main} from './styles/global';

const App = () => {
  return(
    <>
      <GlobalStyles/>
      <header>
        <img src='./assets/bg-desktop-dark.jpg' alt="Banner" />
      </header>
      <Main>
        <div>
          <h1>TODO</h1>
          <span>
            <img src='./assets/icon-sun.svg' alt="Sun" />
          </span>
        </div>
      </Main>
    </>
    
  )
  
}

export default App;
