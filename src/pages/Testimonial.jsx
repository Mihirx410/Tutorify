import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import "../styles/Testimonial.css";

const Testimonial = ({ currentTheme }) => {
  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet congue aliquam, fermentum arcu. Pharetra eget duis luctus in nec leo quam vestibulum. Ut quam vulputate turpis tincidunt posuere mor ipsum, dolor sit amet, consectetur adipiscing elit. Aliquet congue aliquam, fermentum arcu. Pharetra eget duis luctus in nec leo quam vestibulum. Ut quam vulputate turpis tincidunt posuere morbi!",
      name: "Rizqi Assegaf",
      role: "Student At Tutorify",
      image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1743244420~exp=1743248020~hmac=c5b8080e4603ba6dc2184e9628420a3cbbed3cbdb641e1fcb67ec080d861e308&w=1060",
    },
    {
      quote: "Another testimonial text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet congue aliquam, fermentum arcu.",
      name: "John Doe",
      role: "Student At Tutorify",
      image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1743244457~exp=1743248057~hmac=ee54d97ad2c66d002546e9be86538988812d106fe70d194823cb2d8d2ffc9865&w=1060",
    },
    {
      quote: "Third testimonial text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet congue aliquam, fermentum arcu.",
      name: "Jane Smith",
      role: "Student At Tutorify",
      image: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1743244543~exp=1743248143~hmac=154c5e130d342fcd7eeeeb97bb5cfb25848a6c58d8f0fe9b366f6cd92f17bab0&w=1060",
    },
    {
      quote: "Fourth testimonial text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet congue aliquam, fermentum arcu.",
      name: "Emily Johnson",
      role: "Student At Tutorify",
      image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?t=st=1743244581~exp=1743248181~hmac=df62640cd6c6d3b49693a5ba39220a5c2a3f47ab9b5a5737981f38dc3065b85f&w=1060",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`testimony-section py-3 theme-${currentTheme}`} id="testimony">
      <div className="container">
        <Row className="align-items-center">
          {/* Text Column */}
          <Col md={6} className="testimony-text-col">
            <div className="testimony-label-wrapper">
              <span className="testimony-label">TESTIMONIALS</span>
            </div>
            <h1 className="testimony-heading">What They Say About Us</h1>
            <p className="testimony-quote">
              "{testimonials[currentIndex].quote}"
            </p>
            <p className="testimony-name">{testimonials[currentIndex].name}</p>
            <p className="testimony-role">{testimonials[currentIndex].role}</p>
          </Col>

          {/* Image Column */}
          <Col md={6} className="testimony-image-col">
            <div className="testimony-image-wrapper">
              <img
                src={testimonials[currentIndex].image}
                alt="Testimonial"
                className="testimony-image"
              />
              <div className="testimony-nav">
                <span className="testimony-nav-counter">
                  {String(currentIndex + 1).padStart(2, '0')}/{String(testimonials.length).padStart(2, '0')}
                </span>
                <button className="testimony-nav-btn testimony-prev-btn" onClick={handlePrev}>
                  &lt;
                </button>
                <button className="testimony-nav-btn testimony-next-btn" onClick={handleNext}>
                  &gt;
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Testimonial;