import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = ({ currentTheme }) => {
  return (
    <footer className={`footer-section theme-${currentTheme}`}>
      <div className="container">
        <Row className="align-items-center">
          {/* Text and Button Column */}
          <Col md={8} className="footer-text-col">
            <h2 className="footer-heading">Ready to get started?</h2>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <button className="footer-btn">Get Started</button>
          </Col>

          {/* Links Column */}
          <Col md={4} className="footer-links-col">
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Product</a></li>
              <li><a href="#" className="footer-link">Course</a></li>
              <li><a href="#" className="footer-link">Help/FAQ</a></li>
              <li><a href="#" className="footer-link">Mobile</a></li>
              <li><a href="#" className="footer-link">Career</a></li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;