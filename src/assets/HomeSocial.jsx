import React from "react";

const HomeSocial = () => {
  return (
    <ul className="home-social">
      <li>
        <a href="#0" className="flex items-center space-x-2">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <span>Facebook</span>
        </a>
      </li>
      <li>
        <a href="#0" className="">
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <span>Twitter</span>
        </a>
      </li>
      <li>
        <a href="#0" className="">
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <span>Instagram</span>
        </a>
      </li>
      <li>
        <a href="#0" className="">
          <i className="fa fa-behance" aria-hidden="true"></i>
          <span>Behance</span>
        </a>
      </li>
      <li>
        <a href="#0" className="">
          <i className="fa fa-dribbble" aria-hidden="true"></i>
          <span>Dribbble</span>
        </a>
      </li>
    </ul>
  );
};

export default HomeSocial;
