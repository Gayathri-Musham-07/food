import React from 'react';
import './Presentation.css';
import cake from '../assets/cake.jpg';
import b from '../assets/bisc.jpg';
import co from '../assets/cool.jpg';
import cup from '../assets/cup.jpg';
import i from '../assets/ice.jpg';
import s from '../assets/sn.jpg';
import bgg from '../assets/bgg.png';
function Presentation() {
  return (
    <section id="presentation" style={{ padding: '20px', textAlign: 'center' }}>
    <p> Welcome to Sweet Treats Bakery, where every bite is a masterpiece of homemade love, 
    crafted with the finest ingredients and unmatched passion for quality!</p>
    <div className="pop">
      <div className="pop_con">
        <img src={cake} alt="Cakes" />
        <div className="pop_card">
          <div className="pop_card_header">
            <h4></h4>
            <h4></h4>
          </div>
        </div>
        <p>Cakes</p>
      </div>
    </div>
    <div className="pop">
      <div className="pop_con">
        <img src={b} alt="Disney Channel" />
        <div className="pop_card">
          <div className="pop_card_header">
            <h4></h4>
            <h4></h4>
          </div>
        </div>
        <p>Cookies</p>
      </div>
    </div>
    <div className="pop">
      <div className="pop_con">
        <img src={co}alt="Disney Channel" />
        <div className="pop_card">
          <div className="pop_card_header">
            <h4></h4>
            <h4></h4>
          </div>
        </div>
        <p>Drinks</p>
      </div>
    </div>
    <div className="pop">
      <div className="pop_con">
        <img src={cup} alt="Disney Channel" />
        <div className="pop_card">
          <div className="pop_card_header">
            <h4></h4>
            <h4></h4>
          </div>
        </div>
        <p>Cup Cakes</p>
      </div>
    </div>
    <div className="pop">
      <div className="pop_con">
        <img src={i} alt="Disney Channel" />
        <div className="pop_card">
          <div className="pop_card_header">
            <h4></h4>
            <h4></h4>
          </div>
        </div>
        <p>Ice Cream Scoops</p>
      </div>
    </div>
    <div className="pop">
      <div className="pop_con">
        <img src={s}alt="Disney Channel" />
        <div className="pop_card">
          <div className="pop_card_header">
            <h4></h4>
            <h4></h4>
          </div>
        </div>
        <p>Beverages </p>
      </div>
    </div>
    </section>
  );
}

export default Presentation;
