import React from "react";
import GardensImage from "../assets/Garden2.png";
import leaf from "../assets/leaf.png";
import { NavLink, Link } from "react-router-dom";

const Garden5 = () => {
  return (
    <div className="garden-area" id="Garden">
      <img className="garden-img " src={GardensImage} alt="" />
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img">
          <img className="small-img" src={leaf} alt="" />
          <div className="hover-text">Shankhpushpi</div>
        </div>
      </NavLink>
      {/* ============================================================================================================= */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img1">
          <img className="small-img1" src={leaf} alt="" />
          <div className="hover-text1">Oat Straw</div>
        </div>
      </NavLink>
      {/* ==================================================================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img2">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Bassant</div>
        </div>
      </NavLink>
      {/* =============================================================================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img3">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Brahmi</div>
        </div>
      </NavLink>
      {/* ========================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img4">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Yerba Mate</div>
        </div>
      </NavLink>
      {/* ============================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img5">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Peppermint</div>
        </div>
      </NavLink>
      {/* ============================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img6">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Ashwagandha</div>
        </div>
      </NavLink>
      {/* ============================================================== */}
      <NavLink to="/PlantDetails" className="nav-name">
        <div className="hover-img7">
          <img className="small-img2" src={leaf} alt="" />
          <div className="hover-text2">Chamomile</div>
        </div>
      </NavLink>
    </div>
  );
};

export default Garden5;
