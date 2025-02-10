import React from "react";
import GardensImage from "../assets/Garden2.png";
import leaf from "../assets/leaf.png";
import { NavLink, Link } from "react-router-dom";

const Garden2 = () => {
  return (
    <div className="garden-area" id="Garden">
      <img className="garden-img " src={GardensImage} alt="" />
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img">
          <img className="small-img" src={leaf} alt="" />
          <div className="hover-text">Chamomile</div>
        </div>
      </NavLink>
      {/* ============================================================================================================= */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img1">
          <img className="small-img1" src={leaf} alt="" />
          <div className="hover-text1">Ginger</div>
        </div>
      </NavLink>
      {/* ==================================================================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img2">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Peppermint</div>
        </div>
      </NavLink>
      {/* =============================================================================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img3">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Amla</div>
        </div>
      </NavLink>
      {/* ========================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img4">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Coriander</div>
        </div>
      </NavLink>
      {/* ============================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img5">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Ganga Tulasi</div>
        </div>
      </NavLink>
      {/* ============================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img6">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Cinnamon</div>
        </div>
      </NavLink>
      {/* ============================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img7">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Psyllium Husk</div>
        </div>
      </NavLink>
    </div>
  );
};

export default Garden2;
