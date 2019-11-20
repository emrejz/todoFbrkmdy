import React from "react";
import okeySmall from "../../../assets/icons/okey-small.png";
import arrow from "../../../assets/icons/arrow.png";
import deleteDark from "../../../assets/icons/deleteDark.png";

import "./ListItem.scss";

export default function ListItem({ item, dispatch, state }) {
  const downFunc = () => {
    let index = state.list.indexOf(item) + 1;
    let lngth = state.list.length;
    if (index !== lngth) {
      let newList = state.list.filter(it => it !== item);
      newList.splice(index, 0, item);
      dispatch({ type: "DOWN", payload: newList });
    }
  };
  return (
    <div className="itemCont">
      <div
        className="checkBox"
        onClick={() => dispatch({ type: "CHECK", payload: item.id })}
      >
        {item.checked && <img src={okeySmall} alt="okeySmall" />}
      </div>
      <span className={!item.checked ? "itemText" : "itemText checked"}>
        {item.text}
      </span>
      <div
        className="circle"
        onClick={() => dispatch({ type: "DELETE", payload: item.id })}
      >
        <img className="deleteIcon" src={deleteDark} alt="delete" />
      </div>
      <div className="circle" onClick={() => downFunc()}>
        <img className="arrowIcon" src={arrow} alt="arrow" />
      </div>
    </div>
  );
}
