import { createGlobalStyle } from "styled-components";

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
    </>
  );
}

export default App;
