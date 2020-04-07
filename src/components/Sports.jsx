import React, { Component } from "react";
import ImageCard1 from "./ImageCard1";
import img1 from "./img/1.jpg";
import img2 from "./img/5.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/2.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img11 from "./img/10.jpg";
import img10 from "./img/11.jpg";
import img12 from "./img/12.jpg";
import img13 from "./img/13.jpg";

export default function Sports() {
  return (
    <div className="row" style={{ padding: "20px" }}>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img3}
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img2}
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 ">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img1}
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img6}
        ></ImageCard1>
      </div>
      <div className="col-lg-8 col-md-6 ">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img5}
        ></ImageCard1>
      </div>
      <div className="col-lg-12 col-md-12 ">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img4}
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img7}
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img8}
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img9}
        ></ImageCard1>
      </div>
      <div className="col-lg-8 col-md-6 ">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img10}
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img11}
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img12}
        ></ImageCard1>
      </div>
      <div className="col-lg-8 col-md-12 ">
        <ImageCard1
          text="white black tshirt"
          price="1500"
          src={img13}
        ></ImageCard1>
      </div>
    </div>
  );
}
