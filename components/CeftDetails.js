import React from "react";
import "./CeftDetails.css";

const Details = [
  {
    id: 1,
    image: "/Assets/images/Jsp.png",
    title: "Full Stack Developer",
  },

  {
    id: 2,
    image: "/Assets/images/intern.png",
    title: "Internship Certificate",
  },

  {
    id: 3,
    image: "/Assets/images/Web.png",
    title: "Internship Certificate",
  },
];

const CeftDetails = () => {
  return (
    <div className="details-info">
      <div className="details-container">
        {Details.map((snap) => (
          <div key={snap.id} className="details-item">
            <img src={snap.image} alt="Certification" className="snap-image" />
            <h3 className="snap-title">{snap.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CeftDetails;
