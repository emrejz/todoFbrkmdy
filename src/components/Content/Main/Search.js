import React, { useState, useEffect } from "react";
import plus from "../../../assets/icons/plus.png";

const Search = ({ setList, list }) => {
  const [searchText, setSearchText] = useState("");
  const searchedList = () => {
    setList(
      list.filter(item =>
        item.text.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };
  useEffect(() => {
    searchedList();
  }, [searchText]);
  return (
    <div className="search">
      <input
        placeholder="Arama..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <button
        type="button"
        className="newMission"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        onClick={() => setSearchText("")}
      >
        Yeni Görev Ekle <img src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default Search;
