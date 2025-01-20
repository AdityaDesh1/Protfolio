import React from "react";
import "./MyWork.css";

const MyWork = () => {
  return (
    <div className="root-section">
      <h2 className="h2-section">ROOTS OF MY WORK</h2>
      <div className="flex-container">
        <div className="root-item">
          <img src="/Assets/images/emp.png" alt="png" className="wrk-img"></img>
          <h3>Empathise</h3>
          <p>
            Transitioning from the structured environment of academia to the
            dynamic and often unpredictable world of work is a significant
            milestone in any student's life. As freshers, you stand at the
            threshold of new opportunities, eager yet understandably anxious
            about what lies ahead. Here’s a reflection on your journey.
          </p>
        </div>
        <div className="root-item">
          <img
            src="/Assets/images/grow.webp"
            alt="png"
            className="wrk-img"
          ></img>
          <h3>Learning and Growth</h3>
          <p>
            The initial phase of your career is a time of immense learning. You
            bring fresh perspectives and new ideas that can invigorate your
            workplace. Embrace this period as an opportunity to expand your
            knowledge and develop skills that will serve you throughout your
            career.
          </p>
        </div>
        <div className="root-item">
          <img
            src="/Assets/images/connection.webp"
            alt="png"
            className="wrk-img"
          ></img>
          <h3>Community and Connection</h3>
          <p>
            Building a network of peers and colleagues can provide a sense of
            community and belonging. Engage in team activities, participate in
            discussions, and take advantage of opportunities to connect with
            others. These relationships can offer support and foster a
            collaborative work environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
