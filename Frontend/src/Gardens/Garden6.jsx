import React, { useState, useEffect } from "react";
import GardensImage from "../assets/Garden2.png";
import leaf from "../assets/leaf.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Garden6 = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/immune-herbs"
        );
        setPlants(response.data);
      } catch (error) {
        console.error("Error fetching plants:", error);
      }
    };

    fetchPlants();
  }, []);

  if (!plants || plants.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="garden-area" id="Garden">
      <img className="garden-img" src={GardensImage} alt="Garden" />

      {plants.map((plant, index) => (
        <NavLink
          key={plant._id}
          to={`/plant5/${plant._id}`}
          className="nav-name"
        >
          <div className={`hover-img${index}`}>
            <img className="small-img" src={leaf} alt="Leaf icon" />
            <div className="hover-text">{plant.Name}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Garden6;
