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
  const gardenOptions = [
    { id: "Skin", label: "Skin Care" },
    { id: "Digestive", label: "Digestive System" },
    { id: "Respiratory", label: "Respiratory System" },
    { id: "Cardiovascular", label: "Cardiovascular System" },
    { id: "Nervous", label: "Nervous System" },
    { id: "Immune", label: "Immune System" },
  ];

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
        <div className="slider-container">
          <div className="slider">
            {gardenOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setGardenName(option.id)}
                className={`slider-btn ${
                  gardenName === option.id ? "active" : ""
                }`}
                style={{
                  border: gardenName === option.id ? "5px solid green" : "none",
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {renderContent()}
    </div>
  );
};

export default Garden;
