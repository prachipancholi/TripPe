import React from "react";
import Navbar from "../Navbar/Navbar";
import "./homepage.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="center">
          <h1>We manage your trips</h1>
          <h3>Keep record of your expenses</h3>
        </div>
      </div>
    </>
  );
};
export default Home;
