import React from 'react';
import personSvg from '../img/women-shopping.png';
import starSvg from '../img/icon/star.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <p className="home-hero">Discounts of up to 60% Off</p>

      <div className="home-section">
        <div className="home-img">
          <img src={personSvg} alt="person" />
        </div>

        <div className="home-sub">
          <button className="btn yellow">
            <Link to="products">Go Shopping</Link>
          </button>
          <p>We have just Opened</p>
        </div>
      </div>

      <div className="home-warranties">
        <div className="home-card">
          <img className="icon" src={starSvg} alt="" />
          <div className="home-card-text">
            <p>Worldwide Delivery</p>
            <p>On orders over $250.00</p>
          </div>
        </div>

        <div className="home-card">
          <img className="icon" src={starSvg} alt="" />
          <div className="home-card-text">
            <p>Worldwide Delivery</p>
            <p>On orders over $250.00</p>
          </div>
        </div>

        <div className="home-card">
          <img className="icon" src={starSvg} alt="" />
          <div className="home-card-text">
            <p>Worldwide Delivery</p>
            <p>On orders over $250.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
