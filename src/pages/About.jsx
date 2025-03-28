import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/About.css";

const AboutUs = ({ currentTheme }) => {
  return (
    <section className={`about-section py-3 theme-${currentTheme}`} id="about">
      <div className="container">
        <Row className="align-items-center">
          {/* Image Column */}
          <Col xs={12} md={6} xl={5} className="mb-4 mb-md-0">
            <div className="image-wrapper">
              <img src="./girl-8148749_960_720.jpg" alt="Person giving thumbs up" className="about-image img-fluid" />
            </div>
          </Col>

          {/* Text Column */}
          <Col xs={12} md={6} xl={5} className="text-col">
            <div className="label-wrapper">
              <span className="about-label">ABOUT US</span>
            </div>
            <h1 className="about-heading">Ready To Help You Learn English In Private</h1>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus quam sem nec faucibus id sit consequat. Vivamus quam senectus vitae dolor ac.
            </p>
            <div className="d-flex button-group">
              <button className="get-started-btn">Get Started</button>
              <button className="watch-video-btn">
                <span className="play-icon"></span> Watch Video
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutUs;