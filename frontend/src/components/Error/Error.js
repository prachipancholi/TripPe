import React from "react";
import Navbar from "../Navbar/Navbar";
import "./error.css";
import { NavLink } from "react-router-dom";
import error from "./download.png";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <img className="ops" alt="Error 404" src={error} /> <br />
        <h3>
          Cannot find the page <br /> Either it is lost or not available
          currently{" "}
        </h3>{" "}
        <br />
        <NavLink className="btn" to="/">
          Back to home{" "}
        </NavLink>{" "}
      </div>{" "}
    </>
  );
};
export default ErrorPage;
