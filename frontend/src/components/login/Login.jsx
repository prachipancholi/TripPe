import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    pass: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { email, pass } = data;

    const res = await fetch("https://trippe1.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        pass: pass,
      }),
    });

    const val = await res.json();
    console.log(val);
    if (res.status === 400 || !val) {
      window.alert("Login Failed");
    } else {
      console.log(val);
      window.alert("Login successful");
      navigate("/lan");
    }
  };

  return (
    <>
      <Navbar />
      <div className="text-center m-5-auto headLogin ">
        <div className="head2">
          <h2 className="styles.sign">Sign In</h2>
          <form method="POST" className="styles.inputForm">
            <p>
              <label>Username or email address</label>
              <br />
              <input
                className="logInput"
                type="text"
                value={data.email}
                onChange={handleChange}
                name="email"
                required
              />
            </p>
            <p>
              <label>Password</label>
              <br />
              <input
                className="logInput"
                type="password"
                value={data.pass}
                onChange={handleChange}
                name="pass"
                required
              />
              <br />
              <Link to="/forget-password">
                <label className="right-label">Forget password?</label>
              </Link>
            </p>
            <p>
              <button
                id="sub_btn"
                className="btn  "
                onClick={postData}
                type="submit"
              >
                Login
              </button>
            </p>
          </form>
          <footer>
            <p>
              Visiting us first time!!
              <br />
              <Link className="link" to="/register">
                Create an account
              </Link>
            </p>
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

export default Login;
