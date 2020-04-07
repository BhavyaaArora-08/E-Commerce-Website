import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ImageCard1.css";
import { MdShoppingCart } from "react-icons/md";

function ImageCard1(props) {
  return (
    <span style={{ position: "relative", padding: "10px" }}>
      <p id="text">{props.text}</p>
      <img
        id="img"
        src={props.src}
        alt="wowo"
        style={{
          boxSizing: "border-box",
          width: "100%",
          height: "400px",
          display: "inline",
          margin: "30px auto",
          marginBottom: "0",
        }}
      ></img>

      <div id="price">
        <span>Price : Rs {props.price}</span>
        <button className="btn btn-outline-secondary">
          <MdShoppingCart />
        </button>
      </div>
    </span>
  );
}

export default ImageCard1;

// style={{
//   position: "absolute",
//   transform: "translate(-50%,-50%)",
//   marginRight: "-50%",
//   top: "50%",
//   left: "50%",
// }}
