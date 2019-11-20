import React from "react";
import refresh from "../../../assets/icons/refresh.png";
import menu from "../../../assets/icons/menu.png";
import "./header.scss";
const Header = () => {
  return (
    <div className="headerCont">
      <div className="refresh">
        <img src={refresh} alt="refresh" />
      </div>
      <div className="panel">Görev Yönetim Paneli</div>
      <div className="hamburgerMenuCont">
        <img className="hamburgerMenu" src={menu} alt="menu" />
        <div className="menuItem">Görevler</div>
        <div className="menuItem">Ayarlar</div>
        <div className="menuItem">Çıkış</div>
      </div>
    </div>
  );
};
export default Header;
