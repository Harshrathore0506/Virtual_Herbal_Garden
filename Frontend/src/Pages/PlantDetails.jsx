import React, { useState, useEffect } from "react";
import "./PlantDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const PlantDetails = () => {
  const { id } = useParams(); // Get plant name from URL

  const [herb, setHerb] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(id);
  useEffect(() => {
    const fetchHerb = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cardiovascular-herbs/${id}`
        );
        setHerb(response.data);
        console.log(response.data);
      } catch (err) {
        // console.log({ id }, "error");
      }
    };

    fetchHerb();
  }, [id]);

  if (!herb || herb.length === 0) {
    return <p>Loading...</p>; // Prevents error while data loads
  }
  // console.log(herb);

  return (
    <div className="Plant-details">
      <div className="Plant-img">
        <img src={herb.Image} alt={"Plant Image"} />
      </div>
      <div className="Plant-detail">
        <div className="Plants Plant_name">
          <p>Name :</p>
          <p>{herb.Name}</p>
        </div>
        <div className="Plants">
          <p>Scientific Name :</p>
          <p>{herb.Scientific_Name}</p>
        </div>
        <div className="Plants">
          <p>Family :</p>
          <p>{herb.Family}</p>
        </div>
        <div className="Plants">
          <p>Country :</p>
          <p>{herb.Country}</p>
        </div>
        <div className="Plants">
          <p>Uses :</p>
          <p>{herb.Uses}</p>
        </div>
        <div className="Plants">
          <p>Nutrients :</p>
          <p>{herb.Nutrients}</p>
        </div>
        <div className="Plants">
          <p>Climatic Conditions :</p>
          <p>{herb.Climate_conditions}</p>
        </div>
        <div className="Btn">Buy Now</div>
      </div>
    </div>
  );
};

export default PlantDetails;
