import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs.sendForm("gmail", "TripPe", e.target, "xClJ7XeWiFD6tSTVi").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setName("");
    setEmail("");
    setMessage("");
    window.alert("Information sent");
  };

  return (
    <>
      <Navbar />
      <form className="elementForm" onSubmit={sendEmail}>
        <h1>Contact Us 🤳</h1>
        <div className="contact-box">
          <label>Name</label>
          <input
            placeholder="Name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <textarea
            placeholder="Message"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <button type="submit" className="btn button1">
            Submit
          </button>
        </div>
      </form>

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
export default Contact;
