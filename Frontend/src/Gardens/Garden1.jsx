import React from "react";
import GardensImage from "../assets/Garden2.png";
import { NavLink, Link } from "react-router-dom";
import leaf from "../assets/leaf.png";
const Garden1 = () => {
  return (
    <div className="garden-area" id="Garden">
      <img className="garden-img " src={GardensImage} alt="" />
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img">
          <img className="small-img" src={leaf} alt="" />
          <div className="hover-text">Aloe Vera</div>
        </div>
      </NavLink>
      {/* ============================================================================================================= */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img1">
          <img className="small-img1" src={leaf} alt="" />
          <div className="hover-text1">Neem</div>
        </div>
      </NavLink>
      {/* ==================================================================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img2">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Turmeric</div>
        </div>
      </NavLink>
      {/* =============================================================================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img3">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Hibiscus</div>
        </div>
      </NavLink>
      {/* ========================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img4">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Lavender</div>
        </div>
      </NavLink>
      {/* ============================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img5">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Chamomile</div>
        </div>
      </NavLink>
      {/* ============================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img6">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Gotu Kola</div>
        </div>
      </NavLink>
      {/* ============================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img7">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Calendula</div>
        </div>
      </NavLink>
    </div>
  );
};

export default Garden1;
