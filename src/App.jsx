import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import "./App.css";
import HomeSocial from "./assets/HomeSocial";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./assets/About";
import Services from "./assets/Services";
import Works from "./assets/Works";
import Clients from "./assets/Clients";
import Contact from "./assets/Contact";
import Footer from "./assets/Footer";
import BillGenerator from "./assets/BillGenerator";


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <HomeSocial />

      <div className="">
        <img className="" src="src/assets/images/logo (3).png" alt="" />
      </div>
      <div>
        <div className="home-content ">
          <div className="row home-content__main ">
            <div className="text-yellow-800">
              <h3 className="main_text">Welcome to Xeven Solutions</h3>
            </div>
            <h2 className="text-black">
              We are a creative group of people who design influential brands{" "}
              <br /> and digital experiences.
            </h2>
            <div className="home-content__buttons">
              <a href="#contact" className="smoothscroll btn btn--stroke">
                Start a Project
              </a>
              <a href="#about" className="smoothscroll btn btn--stroke">
                More About Us
              </a>
            </div>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="flex">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <FaBars size={25} />
          </div>
        </div>

        {/* Overlay Menu */}
        <div className={`overlay-menu ${menuOpen ? "active" : ""}`}>
          <div className="overlay-header">
            <h2 className="text-green-500">Navigation</h2>
            <FaTimes size={25} onClick={toggleMenu} className="close-icon" />
          </div>
          <ul className="menu-items">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#works" onClick={toggleMenu}>
                Works
              </a>
            </li>
            {/* <li>
              <a href="#clients" onClick={toggleMenu}>
                Clients
              </a>
            </li> */}
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
          <div className="overlay-footer">
            <p>
              At Xeven Solutions, we specialize in digital marketing, customer
              support, and tech solutions, including web and app development.
              Our mission is to drive your business success through innovative
              strategies and exceptional service.
            </p>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaBehance />
              <FaDribbble />
            </div>
          </div>
        </div>
      </div>
      <div className="p-14">
        <div className="home-content__scroll">
          <a href="#about" className="scroll-link smoothscroll">
            <span>Scroll Down</span>
          </a>
        </div>
        <div className="home-content__line"></div>
      </div>
      <About />
      <Services />
      <Works />

      <Contact />
      <Footer />
    </>
  );
};


const BillG = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <HomeSocial />

      <div className="">
        <img className="" src="src/assets/images/logo (3).png" alt="" />
      </div>
      <div>
        <div className="home-content ">
          <div className="row home-content__main ">
            <div className="text-yellow-800">
              <h3 className="main_text">Welcome to Xeven Solutions</h3>
            </div>
            <h2 className="text-black">
              We are a creative group of people who design influential brands{" "}
              <br /> and digital experiences.
            </h2>
            <div className="home-content__buttons">
              <a href="#contact" className="smoothscroll btn btn--stroke">
                Start a Project
              </a>
              <a href="#about" className="smoothscroll btn btn--stroke">
                More About Us
              </a>
            </div>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="flex">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <FaBars size={25} />
          </div>
        </div>

        {/* Overlay Menu */}
        <div className={`overlay-menu ${menuOpen ? "active" : ""}`}>
          <div className="overlay-header">
            <h2 className="text-green-500">Navigation</h2>
            <FaTimes size={25} onClick={toggleMenu} className="close-icon" />
          </div>
          <ul className="menu-items">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#works" onClick={toggleMenu}>
                Works
              </a>
            </li>
            {/* <li>
              <a href="#clients" onClick={toggleMenu}>
                Clients
              </a>
            </li> */}
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
          <div className="overlay-footer">
            <p>
              At Xeven Solutions, we specialize in digital marketing, customer
              support, and tech solutions, including web and app development.
              Our mission is to drive your business success through innovative
              strategies and exceptional service.
            </p>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaBehance />
              <FaDribbble />
            </div>
          </div>
        </div>
      </div>
      <div className="p-14">
        <div className="home-content__scroll">
          <a href="#about" className="scroll-link smoothscroll">
            <span>Scroll Down</span>
          </a>
        </div>
        <div className="home-content__line"></div>
      </div>
      <BillGenerator />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bill-generator" element={<BillG />} />
      </Routes>
    </Router>
  )
};


export default App;
