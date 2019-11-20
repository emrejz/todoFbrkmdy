import React from "react";
import "./content.scss";
import Header from "./Header/";
import Main from "./Main/";
const Content = () => {
  return (
    <div className="contentContainer">
      <Header />
      <Main />
    </div>
  );
};
export default Content;
