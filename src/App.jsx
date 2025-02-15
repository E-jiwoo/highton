import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Chat from "./pages/Chat/chat";
import Data from "./pages/Data/data";
import Complete from "./pages/Complete/complete";
import Choose from "./pages/Choose/choose";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Data />}></Route>
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/complete" element={<Complete />}></Route>
          <Route path="/choose" element={<Choose />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Pretendard-R";
    line-height: normal;
    font-style: normal;
    white-space: nowrap;
  }
  
`;

export default App;
