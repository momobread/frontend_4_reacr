import MainPage from "./scheduler/1_page";
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #fafafb;
  }

`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <MainPage/>
    </>
  );
}

export default App;

