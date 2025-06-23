import React from 'react';
import './Presentation.css';
import cake from '../assets/cake.jpg';
import b from '../assets/bisc.jpg';
import co from '../assets/cool.jpg';
import cup from '../assets/cup.jpg';
import i from '../assets/ice.jpg';
import s from '../assets/sn.jpg';

function Presentation() {
  const items = [
    { src: cake, label: 'Cakes' },
    { src: b, label: 'Cookies' },
    { src: co, label: 'Drinks' },
    { src: cup, label: 'Cup Cakes' },
    { src: i, label: 'Ice Cream Scoops' },
    { src: s, label: 'Beverages' },
  ];

  return (
    <section id="presentation" className="presentation-section">
      <p>
        Welcome to Sweet Treats Bakery, where every bite is a masterpiece of homemade love, 
        crafted with the finest ingredients and unmatched passion for quality!
      </p>

      <div className="pop">
        {items.map((item, index) => (
          <div className="pop_con" key={index}>
            <img src={item.src} alt={item.label} />
            <div className="pop_card">
              <div className="pop_card_header">
                <h4></h4>
                <h4></h4>
              </div>
            </div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Presentation;
