// src/components/CombinedSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CombinedSlider.css"; // Custom styles for the slider

const clients = [
  { id: 1, logo: "path/to/logo1.png" },
  { id: 2, logo: "path/to/logo2.png" },
  { id: 3, logo: "path/to/logo3.png" },
  { id: 4, logo: "path/to/logo4.png" },
  { id: 5, logo: "path/to/logo5.png" },
  { id: 6, logo: "path/to/logo6.png" },
];

const reviews = [
  {
    id: 1,
    text: "This is a fantastic service!",
    author: "John Doe",
    position: "CEO, Company",
    avatar: "path/to/avatar1.png",
  },
  {
    id: 2,
    text: "Excellent support and great value!",
    author: "Jane Smith",
    position: "CTO, Another Company",
    avatar: "path/to/avatar2.png",
  },
];

const MySlider = () => {
  const clientSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const reviewSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="combined-slider-container bg-gray-300">
      <h2 className="text-center text-xl font-bold mb-4">Our Clients</h2>
      <div className="client-slider-container mb-8">
        <Slider {...clientSettings}>
          {clients.map((client) => (
            <div key={client.id}>
              <img
                src={client.logo}
                alt={`Client ${client.id}`}
                className="client-logo mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
      <h2 className="text-center text-xl font-bold mb-4 pt-40">Reviews</h2>
      <div className="review-slider-container">
        <Slider {...reviewSettings}>
          {reviews.map((review) => (
            <div key={review.id} className="review-slide text-center">
              <p className="review-text mb-4">{review.text}</p>
              <div className="review-author flex justify-center items-center">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="review-avatar rounded-full mr-4"
                />
                <div>
                  <p className="author-name font-bold">{review.author}</p>
                  <p className="author-position text-gray-500">
                    {review.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MySlider;
