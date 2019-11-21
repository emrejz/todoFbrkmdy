import React from "react";
import all from "../../../assets/icons/all.png";
import active from "../../../assets/icons/active.png";
import okeyBig from "../../../assets/icons/okey-big.png";
const Header = ({ actvTab, setActvTab, activeMissions }) => {
  return (
    <div className="header">
      <div
        className="tab"
        style={
          actvTab === 1
            ? {
                backgroundColor: "white",
                borderBottom: "none"
              }
            : {}
        }
        onClick={() => setActvTab(1)}
      >
        <img src={all} alt="all" />
        <div className="allMissionsText">Tüm Görevler</div>
      </div>
      <div
        className="tab"
        style={
          actvTab === 2
            ? {
                backgroundColor: "white",
                borderBottom: "none"
              }
            : {}
        }
        onClick={() => setActvTab(2)}
      >
        <img src={active} alt="active" />
        <div className="actvText">
          Aktif Görevler
          {activeMissions() !== 0 && (
            <div className="info1">{activeMissions()}</div>
          )}
        </div>
      </div>
      <div
        className="tab"
        style={
          actvTab === 3
            ? {
                backgroundColor: "white",
                borderBottom: "none",
                borderRight: "none"
              }
            : {}
        }
        onClick={() => setActvTab(3)}
      >
        <img src={okeyBig} alt="okeyBig" />
        <div>Biten Görevler</div>
      </div>
    </div>
  );
};

export default Header;
