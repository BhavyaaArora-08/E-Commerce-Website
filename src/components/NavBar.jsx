import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./NavBar.css";
import { FaHamburger } from "react-icons/fa";
import { GiSpotedFlower } from "react-icons/gi";

export default function NavBar() {
  return (
    <header className="navbody">
      <nav
        className="navbar navbar-dark navbar-expand-sm container"
        id="navbody"
      >
        <Link id="brand" className="navbar-brand" to="/">
          <GiSpotedFlower />
          Shopping
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mx-auto" id="list">
            <li className="nav-item" id="listItem">
              <Link className="nav-link" id="listItem" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item" id="listItem">
              <Link className="nav-link" id="listItem" to="/men">
                MEN
              </Link>
            </li>
            <li className="nav-item" id="listItem">
              <Link className="nav-link" id="listItem" to="/women">
                WOMEN
              </Link>
            </li>
            <li className="nav-item" id="listItem">
              <Link className="nav-link" id="listItem" to="/kids">
                KIDS
              </Link>
            </li>
            <li className="nav-item" id="listItem">
              <Link className="nav-link" id="listItem" to="/sports">
                SPORTS
              </Link>
            </li>
          </ul>
        </div>
        <button
          id="navbutt"
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <div style={{ color: "#00bcd4", outline: "none", border: "none" }}>
              <FaHamburger size={32} />
            </div>
          </span>
        </button>
      </nav>
    </header>
  );
}
