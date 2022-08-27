import React from "react";
import Header from "./components/Header";
import Home from "./screens/Home";

import './styles/style.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App