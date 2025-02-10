import React from "react";
import peppermint from "../assets/herb images/digestion/peppermint.jpeg";
import "./PlantDetails.css";
const PlantDetails = () => {
  return (
    <div className="Plant-details">
      <div className="Plant-img">
        <img src={peppermint} alt="" />
      </div>
      <div className="Plant-detail">
        <div className="Plants Plant_name">
          <p>Name :</p>
          <p>Peppermint</p>
        </div>
        <div className="Plants">
          <p>Scientific Name :</p>
          <p>Mentha piperita L</p>
        </div>
        <div className="Plants">
          <p>Family :</p>
          <p>LAMIACEAE</p>
        </div>
        <div className="Plants">
          <p>Country :</p>
          <p>India</p>
        </div>
        <div className="Plants">
          <p>Uses :</p>
          <p>
            The plant is having carminative, stimulant and stomachic properties,
            and used for relieving nausea and flatulence. In stomach-ache and
            colicky diarrhoea the hot infusion is given. In cases of rheumatism
            neuralgia, congestive headache, and tooth-ache it is applied
            externally
          </p>
        </div>
        <div className="Plants">
          <p>Nutrients :</p>
          <p>
            Rich in menthol, Vitamin A, Vitamin C, iron, and antioxidants, which
            support digestion and have anti-inflammatory effects.
          </p>
        </div>
        <div className="Plants">
          <p>Climatic Conditions :</p>
          <p>
            Grows best in cool to temperate climates with moist, well-drained
            soil and partial shade. Requires moderate watering and thrives in
            temperatures between 15–25°C.
          </p>
        </div>
        <div className="Btn">Buy Now</div>
      </div>
    </div>
  );
};

export default PlantDetails;
