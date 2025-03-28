import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Text & Milestones */}
          <Col xs={12} md={6} xl={7} className="text-col">
            <h1 id="tagline">
              Start Become Your Best<span className="highlight"> SELF</span>
            </h1>
            <p id="hero-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ruas
              dignissim fusce ut id consequat. Vivamus quam senectus cras amet.
            </p>
            {/* Milestones Section */}
            <Row className="milestones">
              <Col xs={12} md={5} xl={2} sm={5}  className="milestone">
                <h2>100+</h2>
                <p>MENTOR AT TUTORIFY</p>
              </Col>
              <Col xs={12} md={5} xl={2} sm={4} className="milestone">
                <h2>100+</h2>
                <p>STUDENT SUCCESS</p>
              </Col>
              <Col xs={12} md={5} xl={2} sm={4}  className="milestone">
                <h2>100+</h2>
                <p>STUDENT SUCCESS</p>
              </Col>
            </Row>
            <button className="hero-button" onClick={() => console.log("Clicked!")}>
              Let’s Connect
            </button>
          </Col>

          {/* Right Side: Image */}
          <Col xs={12} md={6} xl={5} className="image-container">
            <img
              src="./girl-8148749_960_720.jpg" 
              alt="Hero"
              className="main-image"
            />
            <div className="background-shape"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;