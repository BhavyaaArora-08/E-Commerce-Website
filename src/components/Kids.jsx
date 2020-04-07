import React, { Component } from "react";
import ImageCard1 from "./ImageCard1";
import img1 from "./img/1s.jpg";
import img2 from "./img/5s.jpg";
import img3 from "./img/3s.jpg";
import img4 from "./img/4s.jpg";
import img5 from "./img/2s.jpg";
import img6 from "./img/6s.jpg";
import img7 from "./img/7s.jpg";
import img8 from "./img/8s.jpg";
import img9 from "./img/9s.jpg";
import img11 from "./img/10s.jpg";
import img10 from "./img/11s.jpg";
import img12 from "./img/12s.jpg";
import img13 from "./img/13s.jpg";
import img14 from "./img/14s.jpg";
import img15 from "./img/15s.jpg";

export default function Kids() {
  return (
    <div className="row" style={{ padding: "20px" }}>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1
          src={img1}
          text="pink netted dress"
          price="1099"
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1 src={img2} text="white black top " price="700"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 ">
        <ImageCard1 src={img3} text="deer outfit" price="1000"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1 src={img4} text="black shrug" price="2000"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1 src={img5} text="denim dress" price="1500"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 ">
        <ImageCard1 src={img6} text="yellow jumpsuit" price="900"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1 src={img7} text="pink skirt" price="3000"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1 src={img8} text="red Tshirt" price="1600"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 ">
        <ImageCard1 src={img9} text="yellow dress" price="1080"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1 src={img10} text="golden crown" price="1000"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1 src={img11} text="yellow shirt" price="1000"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 ">
        <ImageCard1 src={img12} text="pink skirt" price="1000"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1 src={img13} text="pink skirt" price="1000"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1 src={img14} text="blue shirt" price="1000"></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 ">
        <ImageCard1 src={img15} text="rainbow outfit" price="1000"></ImageCard1>
      </div>
    </div>
  );
}
