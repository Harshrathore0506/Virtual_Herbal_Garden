import React, { useState } from "react";
import "./Garden.css";
import Garden1 from "../Gardens/Garden1";
import Garden2 from "../Gardens/Garden2";
import Garden3 from "../Gardens/Garden3";
import Garden4 from "../Gardens/Garden4";
import Garden5 from "../Gardens/Garden5";
import Garden6 from "../Gardens/Garden6";

const Garden = () => {
  const [gardenName, setGardenName] = useState("Skin");
  const renderContent = () => {
    switch (gardenName) {
      case "Skin":
        return <Garden1 />;
      case "Digestive":
        return <Garden2 />;
      case "Respiratory":
        return <Garden3 />;
      case "Cardiovascular":
        return <Garden4 />;
      case "Nervous":
        return <Garden5 />;
      default:
        return <Garden6 />;
    }
  };

  return (
    <div className="garden">
      <div className="garden-type">
        <button
          onClick={() => setGardenName("Skin")}
          style={{
            border: gardenName === "Skin" ? "5px solid green" : "none",
          }}
          className="garden-p"
        >
          Skin Care
        </button>
        <button
          onClick={() => setGardenName("Digestive")}
          style={{
            border: gardenName === "Digestive" ? "5px solid green" : "none",
          }}
          className="garden-p"
        >
          Digestive System
        </button>
        <button
          onClick={() => setGardenName("Respiratory")}
          className="garden-p"
          style={{
            border: gardenName === "Respiratory" ? "5px solid green" : "none",
          }}
        >
          Respiratory System
        </button>
        <button
          onClick={() => setGardenName("Cardiovascular")}
          className="garden-p"
          style={{
            border:
              gardenName === "Cardiovascular" ? "5px solid green" : "none",
          }}
        >
          Cardiovascular System
        </button>
        <button
          onClick={() => setGardenName("Nervous")}
          style={{
            border: gardenName === "Nervous" ? "5px solid green" : "none",
          }}
          className="garden-p"
        >
          Nerous System
        </button>
        <button
          onClick={() => setGardenName("")}
          style={{
            border: gardenName === "" ? "5px solid green" : "none",
          }}
          className="garden-p"
        >
          Immune System
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default Garden;
