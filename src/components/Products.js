
import React from "react";
import "./Product.css";
import heroImage from "../assets/ii.jpg"; // Replace with your image
import bakeryImage from "../assets/cup.jpg"; // Replace with your image
import cakesImage from "../assets/cc.jpg"; // Replace with your image
import cakeImage from "../assets/choco.jpg"; // Replace with your image
import cookiesImage from "../assets/cook.jpg"; // Replace with your image
import cookieImage from "../assets/bb.jpg";
import bgg from "../assets/bgg.png";

function Products() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={bgg} alt="Bakery" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Sweet Treats Bakery</h1>
          <p>
            Indulge in our freshly baked goods, crafted with love and the finest
            ingredients.
          </p>
        </div>
      </section>



      {/* Offerings Section */}
      <section className="offerings-section">
        <h2>Our Specialties</h2>
        <br>
        </br>
        <br>
        </br>
        <div className="offerings-grid">
          <div className="offering-card">
            <img src={cakesImage} alt="Cakes" />
            <h3>Cakes</h3>
            <p> Price: starts from 200rs .
              Depends on kgs!
            </p>
            <p>Delicious and beautifully designed cakes for every occasion.</p>
          </div>
          <div className="offering-card">
            <img src={cookiesImage} alt="Cookies" />
            <h3>Cookies</h3>
            <p> Price:100rs.</p>
            <p>Freshly baked cookies with a perfect crunch and flavor.</p>
          </div>
        </div>
        <div className="offerings-grid">
          <div className="offering-card">
            <img src={cakeImage} alt="Cakes" />
            <h3>Chocolates</h3>
            <p> Price:50rs</p>
            <p>Delicious and beautifully designed cakes for every occasion.</p>
          </div>
          <div className="offering-card">
            <img src={cookieImage} alt="Cookies" />
            <h3>Beverages</h3>
            <p> Price: 75rs.</p>
            <p>Freshly baked cookies with a perfect crunch and flavor.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      
    </div>
  );
}

export default Products;
