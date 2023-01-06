import React from "react";
import Home from "./components/homepage/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ErrorPage from "./components/Error/Error";
import Contact from "./components/contact/Contact";
import Profile from "./components/Profile/Profile";
import Landing from "./components/homepage/landing";
import AboutUs from "./components/aboutUs/aboutus";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AboutUs />} />{" "}
          <Route exact path="/aboutUs" element={<AboutUs />} />{" "}
          <Route exact path="/homepage" element={<Home />} />{" "}
          <Route exact path="/login" element={<Login />} />{" "}
          <Route exact path="/register" element={<Register />} />{" "}
          <Route exact path="/lan" element={<Landing />} />{" "}
          <Route exact path="/contact" element={<Contact />} />{" "}
          <Route exact path="/profile" element={<Profile />} />{" "}
          <Route path="*" element={<ErrorPage />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}
export default App;
