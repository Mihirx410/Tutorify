import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import "../styles/Price.css";


const Price = ({ currentTheme }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  return (
    <section className={`price-section py-3 theme-${currentTheme}`} id="price">
      <div className="container">
        <Row className="align-items-center justify-content-center">
          {/* Text Column */}
          <Col xs={12} className="price-text-col">
            <div className="price-label-wrapper">
              <span className="price-label">PRICING</span>
            </div>
            <h1 className="price-heading">How Much Do I Have To Pay</h1>
            <p className="price-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Col>

          {/* Pricing Cards */}
          <Col xs={12} className="mb-4 mb-md-0">
            <div className="price-card-wrapper" style={{ display: 'flex' }}>
              {/* Beginner Card */}
              <div
                className={`price-card ${selectedCard === 0 ? 'price-card-highlighted' : ''}`}
                onClick={() => handleCardClick(0)}
              >
                <h3 className="price-card-title">Beginner</h3>
                <p className="price-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <ul className="price-card-features">
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                </ul>
                <p className="price-card-price">$20 /month</p>
                <button className="price-select-btn">Select Plan</button>
              </div>

              {/* Intermediate Card */}
              <div
                className={`price-card ${selectedCard === 1 ? 'price-card-highlighted' : ''}`}
                onClick={() => handleCardClick(1)}
              >
                <h3 className="price-card-title">Intermediate</h3>
                <p className="price-card-description">
                  For most businesses that want to optimize web queries.
                </p>
                <ul className="price-card-features">
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                </ul>
                <p className="price-card-price">$20 /month</p>
                <button className="price-select-btn">Select Plan</button>
              </div>

              {/* Pro Card */}
              <div
                className={`price-card ${selectedCard === 2 ? 'price-card-highlighted' : ''}`}
                onClick={() => handleCardClick(2)}
              >
                <h3 className="price-card-title">Pro</h3>
                <p className="price-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <ul className="price-card-features">
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                </ul>
                <p className="price-card-price">$20 /month</p>
                <button className="price-select-btn">Select Plan</button>
              </div>

              {/* Expert Card */}
              <div
                className={`price-card ${selectedCard === 3 ? 'price-card-highlighted' : ''}`}
                onClick={() => handleCardClick(3)}
              >
                <h3 className="price-card-title">Expert</h3>
                <p className="price-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <ul className="price-card-features">
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                  <li>Lectus quis quisque.</li>
                </ul>
                <p className="price-card-price">$20 /month</p>
                <button className="price-select-btn">Select Plan</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Price;