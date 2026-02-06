import { createGlobalStyle } from "styled-components";
import RegisterBooks from "./pages/RegisterBooks";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RegisterBooks" element={<RegisterBooks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
