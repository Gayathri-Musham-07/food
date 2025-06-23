import React from 'react';
import './About.css';
import teamImage from '../assets/team.jpg';

function About() {
  const testimonials = [
    {
      name: "Arjun",
      image: "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2020/04/edit-Chinmay-Tumbe.jpg",
      text: "The cakes here are absolutely delicious! Every bite feels like heaven. Highly recommended!",
      position: "Customer",
    },
    {
      name: "Hari",
      image: "https://r2.erweima.ai/imgcompressed/img/compressed_6a27743ae08d87119836833f791c69ad.webp",
      text: "Amazing bakery! The quality and taste are unmatched. My family loves it!",
      position: "Food Blogger",
    },
    {
      name: "Sita",
      image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjNfMS5qcGc.jpg",
      text: "I can't get enough of their desserts. They're always fresh, flavorful, and beautiful!",
      position: "Regular Customer",
    },
  ];

  return (
    <>
      <section className="vision-mission-section">
        <div className="vision-mission-container">
          <img src={teamImage} alt="Team Celebration" className="vision-mission-image" />
          <div className="vision-mission-text">
            <h2>About Us</h2>
            <p>
              Freshly baked artisan bread, perfect for any meal.
              A wide variety of decadent cakes, cupcakes, and pastries for all occasions.
              Gluten-free, vegan, and sugar-free options tailored to your preferences.
            </p>

            <h2>Mission:</h2>
            <p>
              Our mission is to create moments of delight with irresistible desserts.
              Crafting with care and quality in every bite, we make each bite a moment to cherish.
              From birthdays to weddings and every occasion in between, we’re here to sprinkle happiness, one dessert at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className="testimonial-image"
              />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-position">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
