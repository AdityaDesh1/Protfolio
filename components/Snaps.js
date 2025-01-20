import React from "react";

import Container from "react-bootstrap/Container";
import "./Snaps.css";

// const myProjects = [
//   {
//     id: 1,
//     image: "/Assets/images/expense.png",
//   },
//   {
//     id: 3,
//     image: "/Assets/images/Shopsy.png",
//   },
//   {
//     id: 2,
//     image: "/Assets/images/password.png",
//   },
// ];

const Snaps = () => {
  return (
    <div className="snaps-section">
      {/* {myProjects.map((snap) => (
          <div
            key={snap.id}
            className={`snap-col ${snap.id === 3 ? "full-height" : ""}`}
          >
            <img src={snap.image} alt="img" className="snap-image" />
          </div>
        ))} */}
      <Container>
        {/* <div class="col-12 heading">Heading</div> */}
        <div class="col-12 row content">
          {/* <div class="col-1 space">ad</div> */}
          <div class="col-10 row content1">
            <div class="col-4 content2">
              <div class="col-4 body">
                <img
                  src="/Assets/images/expense.png"
                  width="400px"
                  alt="img"
                  className="image1"
                />
              </div>
              <div class="col-4 body1">
                <img
                  src="/Assets/images/password.png"
                  width="400px"
                  alt="img"
                  className="image2"
                />
              </div>
            </div>
            <div class="col-6 back">
              <img
                src="\Assets\images\Shopsy.png"
                width="190%"
                height="90%"
                alt="img"
                className="image3"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Snaps;
