import React, { Component } from "react";
import img7 from "./img/cover7.jpg";
import "./HomePage.css";

import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <div>
      <div id="imgbox">
        <img id="center-fit" src={img7}></img>
      </div>
    </div>
  );
}

export default HomePage;
