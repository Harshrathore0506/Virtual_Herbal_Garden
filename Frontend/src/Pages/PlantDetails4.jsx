import React, { useState, useEffect, useContext } from "react";
import "./PlantDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { toast } from "react-toastify";

const PlantDetails4 = () => {
  const { id } = useParams(); // Get plant name from URL
  const { addToCart, backendUrl } = useContext(ShopContext);
  const [herb, setHerb] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [size, setsize] = useState("M");

  useEffect(() => {
    const fetchHerb = async () => {
      try {
        const response = await axios.get(
          backendUrl + `/api/single/nervous-herbs/${id}`
        );
        setHerb(response.data);
      } catch (err) {
        // console.log({ id }, "error");
      }
    };

    fetchHerb();
  }, [id]);

  if (!herb || herb.length === 0) {
    return <p>Loading...</p>; // Prevents error while data loads
  }

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
        <div className="Btn" onClick={() => addToCart(id, size)}>
          Buy Now
        </div>
      </div>
    </div>
  );
};

export default PlantDetails4;
