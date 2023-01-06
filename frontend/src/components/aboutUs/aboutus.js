import React from "react";
import Navbar from "../Navbar/Navbar";
import a from "./1c.jpg";
import b from "./2c.jpg";
import c from "./3c.jpg";
import "./aboutus.css";
import boat from "./boat.jpg";
import aero from "./aero.jpg";
import train from "./train.jpg";
import profile from "./profile.jpg";
import track from "./track.png";
import friends from "./friends.jpg";
import contact from "./contact.png";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="row rowCol">
        <div className="col-6 main-content">
          <h3>
            Let the trip be <b style={{ color: "black" }}>stress free</b> with
            us...
          </h3>
          <p>
            Keep track of your shared expenses and balances with housemates,
            trips, groups, friends, and family.
          </p>
          <div>
            <img className="smallimg" src={boat} alt="Boat" />
            <img className="smallimg" src={aero} alt="Aeroplane" />
            <img className="smallimg" src={train} alt="Train" />
          </div>
          <button className="btn">Login</button>
          <button className="btn">Register</button>
        </div>
        <div
          id="carouselExampleControls"
          class="carousel slide col-6"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 cor" src={c} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 cor" src={b} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 cor" src={a} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6 ele1">
          <h3 className="grid">Track Expenses</h3>
          <img src={track} className="gridImg" alt="Track Image" />
        </div>
        <div className="col-6 ele2">
          <h3 className="grid2">View Profile</h3>
          <img src={profile} className="gridImg" alt="Profile Image" />
        </div>
      </div>
      <div className="row">
        <div className="col-6 ele3">
          <h3 className="grid2"> Add Friends</h3>{" "}
          <img src={friends} className="gridImg" alt="Add Friends Image" />
        </div>
        <div className="col-6 ele4">
          {" "}
          <h3 className="grid">Contact Us</h3>
          <img src={contact} className="gridImg" alt="Contact Image" />{" "}
        </div>
      </div>
      <div className="row footer">
        <div className="col-6">
          <h3 className="h3tag">Contact Us</h3>

          <p>
            TripPe <br />
            NH-95, Ludhiana - Chandigarh State Hwy
            <br />
            Chandigarh University
          </p>
        </div>
        <div className="col-6">
          <h3 className="h3tag">Copyrights</h3>
          <p>
            {" "}
            We believe in providing best user experince to our customers, all
            the rights reserved with TripPe. For any discrepancy feel free to
            contact us. <br></br>
          </p>
          <h6>All copyrights reserved &copy;</h6>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
