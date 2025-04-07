import React, { useState, useEffect, useRef, useContext } from "react";
import LoadingBar from "react-top-loading-bar";
import GardensImage from "../assets/Garden2.png";
import leaf from "../assets/leaf.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Garden1 = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoadingPage, setShowLoadingPage] = useState(true);
  const loadingBar = useRef(null);
  // const { backendUrl } = useContext(ShopContext);

  useEffect(() => {
    // Start loading bar and simulate progress
    loadingBar.current.continuousStart();

    // Show loading page for 5 seconds
    const loadingTimeout = setTimeout(() => {
      setShowLoadingPage(false);
      fetchPlants();
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const fetchPlants = async () => {
    try {
      loadingBar.current.continuousStart(); // Restart progress bar
      const response = await axios.get("http://localhost:5000/api/skin-herbs");
      setPlants(response.data);
      loadingBar.current.complete(); // Complete loading bar when data is loaded
    } catch (error) {
      console.error("Error fetching plants:", error);
      setError("Failed to load plants. Please try again later.");
      loadingBar.current.complete();
    } finally {
      setIsLoading(false);
    }
  };

  if (showLoadingPage) {
    return (
      <div className="loading-page">
        <LoadingBar color="#f11946" ref={loadingBar} />
        <h2>Loading your Virtual Herbal Garden...</h2>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="garden-area" id="Garden">
      <img className="garden-img" src={GardensImage} alt="Garden" />

      {plants.map((plant, index) => (
        <NavLink
          key={plant._id}
          to={`/plant1/${plant._id}`}
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

export default Garden1;
