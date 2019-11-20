import React, { useContext, useState, useEffect } from "react";
import ListItem from "./ListItem";
import { TodoContext } from "../../../store/GlobalState";
import "./main.scss";
import Search from "./Search";
import Header from "./Header";

const Main = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [list, setList] = useState(state.list);
  const [actvTab, setActvTab] = useState(1);

  const activeMissions = () => {
    if (list) return list.filter(item => item && item.checked === false).length;
  };
  useEffect(() => {
    setList(state.list);
  }, [state.list]);
  return (
    <div className="mainCont">
      <Header
        actvTab={actvTab}
        setActvTab={setActvTab}
        activeMissions={activeMissions}
      />
      <div className="contentCont">
        <div className="contentWrapper">
          <div className="contentWrapper1">
            <Search list={state.list} setList={setList} state={state} />
            {actvTab === 1 &&
              list.map(
                item =>
                  item && (
                    <ListItem
                      item={item}
                      dispatch={dispatch}
                      state={state}
                      key={item.id}
                    />
                  )
              )}
            {actvTab === 2 &&
              list.map(
                item =>
                  item &&
                  item.checked === false && (
                    <ListItem
                      item={item}
                      dispatch={dispatch}
                      state={state}
                      key={item.id}
                    />
                  )
              )}
            {actvTab === 3 &&
              list.map(
                item =>
                  item &&
                  item.checked === true && (
                    <ListItem
                      item={item}
                      dispatch={dispatch}
                      state={state}
                      key={item.id}
                    />
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
