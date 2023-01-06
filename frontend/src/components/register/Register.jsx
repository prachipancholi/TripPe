import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./register.css";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    pass: "",
    conPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { email, pass, conPass } = data;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        pass: pass,
        conPass: conPass,
      }),
    });

    const val = await res.json();
    console.log(val);
    if (res.status === 422 || !val) {
      window.alert("Registration Failed");
    } else {
      console.log(val);
      window.alert("Registration successful");
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="text-center m-5-auto headLogin">
        <div className="head2">
          <h2 className="sign">Join us</h2>
          <h5>Create your personal account</h5>
          <form method="POST">
            <p>
              <label>Email </label>
              <br />
              <input
                className="regInput"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label>Password</label>
              <br />
              <input
                className="regInput"
                type="password"
                name="pass"
                value={data.pass}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label>Confirm Password</label>
              <br />
              <input
                className="regInput"
                type="password"
                name="conPass"
                value={data.conPass}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <input type="checkbox" name="checkbox" id="checkbox" required />
              <span>
                <a
                  className="terms"
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I agree all statements in terms of service
                </a>
              </span>
              .
            </p>
            <p>
              <button
                id="sub_btn"
                className="btn"
                type="submit"
                onClick={postData}
              >
                Register
              </button>
            </p>
          </form>
          <footer>
            <p>
              <Link className="btn" to="/">
                Back to Homepage
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Register;
