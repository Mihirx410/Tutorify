import React from 'react'
import { Row, Col } from "react-bootstrap";
import "../styles/Mentors.css";

const Mentors = ({ currentTheme }) => {
  return (
    <section className={`mentor-section py-3 theme-${currentTheme}`} id="mentor">
      <div className="container">
        <Row className="align-items-center justify-content-center">
          {/* Text Column */}
          <Col xs={12} md={6} xl={6} className="mentor-text-col">
            <div className="mentor-label-wrapper">
              <span className="mentor-label">Mentors</span>
            </div>
            <h1 className="mentor-heading">Our Top Mentor At Tutorify</h1>
            <p className="mentor-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Col>

          {/* Image Column */}
          <Col xs={12} md={12} xl={12} className="mb-4 mb-md-0">
            <div className="mentor-image-wrapper" style={{ display: 'flex' }}>
              <div className="mentor-image">
                <img src="./girl-8148749_960_720.jpg" alt="Rizqi Assegaf" className="mentor-image-img img-fluid" />
                <div className='mentor-image-text'>
                <h3 className="mentor-name">Rizqi Assegaf</h3>
                <p className="mentor-title">SD - SMA Mentor</p>
                <p className="mentor-experience">10 Years</p>
                <div className="mentor-rating">★★★★★ (200)</div>
                </div>
              </div>
              <div className="mentor-image">
                <img src="./girl-8148749_960_720.jpg" alt="Rifky Surya" className="mentor-image-img img-fluid" />
                <div className='mentor-image-text'>
                <h3 className="mentor-name">Rizqi Assegaf</h3>
                <p className="mentor-title">SD - SMA Mentor</p>
                <p className="mentor-experience">10 Years</p>
                <div className="mentor-rating">★★★★★ (200)</div>
                </div>
              </div>
              <div className="mentor-image">
                <img src="./girl-8148749_960_720.jpg" alt="Louis Cahya" className="mentor-image-img img-fluid" />
                <div className='mentor-image-text'>
                <h3 className="mentor-name">Rizqi Assegaf</h3>
                <p className="mentor-title">SD - SMA Mentor</p>
                <p className="mentor-experience">10 Years</p>
                <div className="mentor-rating">★★★★★ (200)</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Mentors;