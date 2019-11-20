import React, { useContext } from "react";
import avatar from "../../assets/icons/avatar.png";
import menu from "../../assets/icons/menu.png";
import settings from "../../assets/icons/settings.png";
import exit from "../../assets/icons/exit.png";
import "./menu.scss";
import { TodoContext } from "../../store/GlobalState";
const LeftMenu = () => {
  const { state } = useContext(TodoContext);
  const activeMissions = () => {
    return state.list.filter(item => {
      if (!item.checked) return item;
    }).length;
  };
  return (
    <div className="menuContainer">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="icons">
        <div className="active"></div>
        <div className="iconGrop">
          {activeMissions() !== 0 && (
            <div className="info">{activeMissions()}</div>
          )}
          <img src={menu} alt="menu" />
          <div className="text">Görevler</div>
        </div>
      </div>
      <div className="icons">
        <div className="iconGrop">
          <img src={settings} alt="settings" />
          <div className="text unActvText">Ayarlar</div>
        </div>
      </div>
      <div className="exit">
        <img src={exit} alt="exit" />
        <div className="text">Kapat</div>
      </div>
    </div>
  );
};
export default LeftMenu;
