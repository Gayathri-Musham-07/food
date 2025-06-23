import React from "react";
import "./Product.css";
import bgg from "../assets/bgg.png";
import cakesImage from "../assets/cc.jpg";
import cookiesImage from "../assets/cook.jpg";
import cakeImage from "../assets/choco.jpg";
import cookieImage from "../assets/bb.jpg";

function Products() {
  const offerings = [
    {
      img: cakesImage,
      title: "Cakes",
      price: "Starts from ₹200 (depends on kgs)",
      desc: "Delicious and beautifully designed cakes for every occasion."
    },
    {
      img: cookiesImage,
      title: "Cookies",
      price: "₹100",
      desc: "Freshly baked cookies with a perfect crunch and flavor."
    },
    {
      img: cakeImage,
      title: "Chocolates",
      price: "₹50",
      desc: "Rich and delightful chocolates made with premium cocoa."
    },
    {
      img: cookieImage,
      title: "Beverages",
      price: "₹75",
      desc: "Cool and refreshing beverages to pair with your treats."
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={bgg} alt="Bakery" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Sweet Treats Bakery</h1>
          <p>
            Indulge in our freshly baked goods, crafted with love and the finest ingredients.
          </p>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="offerings-section">
        <h2>Our Specialties</h2>
        <div className="offerings-grid">
          {offerings.map((item, index) => (
            <div className="offering-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p><strong>Price:</strong> {item.price}</p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;
