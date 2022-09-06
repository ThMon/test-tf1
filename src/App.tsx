import React from "react";
import "./App.css";
import Home from "./components/home";
import GlobalStyle from "./style/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
