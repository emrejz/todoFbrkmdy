import React from "react";
import "./App.scss";
import LeftMenu from "./components/LeftMenu/";
import Content from "./components/Content/";
import GlobalState from "./store/GlobalState";
import Modal from "./components/Content/Main/Modal";
function App() {
  return (
    <GlobalState>
      <div className="App">
        <LeftMenu />
        <Content />
        <Modal />
      </div>
    </GlobalState>
  );
}

export default App;
