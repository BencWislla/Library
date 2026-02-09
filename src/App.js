import { createGlobalStyle } from "styled-components";
import { EmptyBooks } from "./components/EmptyBooks";


const GlobalStyle = createGlobalStyle`
body, * {
margin: 0;
box-sizing: border-box;
font-family: sans-serif;}
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <EmptyBooks />

    </>
  );
}

export default App;
