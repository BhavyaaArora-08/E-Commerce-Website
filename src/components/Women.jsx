import React, { Component } from "react";
import ImageCard1 from "./ImageCard1";
import img1 from "./img/yellow1.jpeg";
import img2 from "./img/summ2.jpg";
import img3 from "./img/pink1.jpeg";
import img4 from "./img/cover.jpeg";
import img5 from "./img/jewels.jpeg";
import img6 from "./img/shoes.jpeg";
import img7 from "./img/glam.jpeg";
import img8 from "./img/makeup.jpeg";
import img9 from "./img/yellow2.jpeg";
import img10 from "./img/sumwom.jpeg";
import img11 from "./img/winwomen.jpeg";
import img12 from "./img/partywom.jpeg";
import img13 from "./img/2193.jpg";

export default function Women() {
  return (
    <div className="row" style={{ padding: "20px" }}>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1
          text="pink floral dress"
          price="1500"
          src={img3}
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <ImageCard1 text="blue shorts" price="700" src={img2}></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-4 ">
        <ImageCard1 text="yellow jumpsuit" price="1500" src={img1}></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1 text="silver boots" price="4500" src={img6}></ImageCard1>
      </div>
      <div className="col-lg-8 col-md-6 ">
        <ImageCard1 text="silver earings" price="1600" src={img5}></ImageCard1>
      </div>
      <div className="col-lg-12 col-md-12 ">
        <ImageCard1
          text="plain gray tshirt"
          price="700"
          src={img4}
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1 text="maroon dress" price="2100" src={img7}></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1 text="pink lipstick" price="2300" src={img8}></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1 text="blue tshirt" price="1200" src={img9}></ImageCard1>
      </div>
      <div className="col-lg-8 col-md-6 ">
        <ImageCard1
          text="black round glasses"
          price="1200"
          src={img10}
        ></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1 text="pink coat" price="5000" src={img11}></ImageCard1>
      </div>
      <div className="col-lg-4 col-md-6 ">
        <ImageCard1
          text="black off-shoulder top"
          price="1200"
          src={img12}
        ></ImageCard1>
      </div>
      <div className="col-lg-8 col-md-12 ">
        <ImageCard1 text="brown hat" price="600" src={img13}></ImageCard1>
      </div>
    </div>
  );
}
