import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/WhyUs.css";

const WhyUs = ({ currentTheme }) => {
  return (
    <section className={`whyus-section py-3 theme-${currentTheme}`} id="whyus">
      <div className="container">
        {/* Main Content: Text and Image */}
        <Row className="align-items-center justify-content-between">
          {/* Text Column */}
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} xl={7} className="text-col">
            <div className="label-wrapper">
              <span className="whyus-label">WHY US</span>
            </div>
            <h1 className="whyus-heading">Why Choose Tutorify</h1>
            <ul className="whyus-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor pellentesque sed.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor pellentesque sed.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor pellentesque sed.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor pellentesque sed.
              </li>
            </ul>
          </Col>

          {/* Image Column */}
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} xl={5} className="mb-4 mb-md-0">
            <div className="image-wrapper">
              <img src="./girl-8148749_960_720.jpg" alt="Person holding books" className="whyus-image img-fluid" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default WhyUs;