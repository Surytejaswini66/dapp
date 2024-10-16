import React from 'react';
import './App.css'; // Importing CSS file

const App = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <img src="path/to/your/logo.png" alt="Logo" className="nav-logo" />
        <div className="nav-links">
          <img src="path/to/your/another/image.png" alt="Nav Image" className="nav-image" />
          <span className="nav-text">When Innovation Meets</span>
          <span className="innovation">Innovation</span>
          <span className="nav-text">Empowering Trading Through Advanced Technology</span>
          <button className="open-dapp">Open dApp</button>
        </div>
      </nav>

      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>

      <h2 className="features-title">Our Features</h2>

      {/* Features Section */}
      <div className="feature-container">
        <div className="feature-box">
          <img src="path/to/your/image1.png" alt="Trade Optimiser" className="feature-image" />
          <h3 className="feature-heading">Trade Optimiser</h3>
          <p className="feature-description">
            Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.
          </p>
        </div>

        <div className="feature-box">
          <h3 className="feature-heading">Market Insight</h3>
          <p className="feature-description">
            Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.
          </p>
        </div>

        <div className="feature-box">
          <h3 className="feature-heading">Risk Guard</h3>
          <p className="feature-description">
            Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.
          </p>
        </div>

        <div className="feature-box">
          <h3 className="feature-heading">Portfolio Sync</h3>
          <p className="feature-description">
            Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed.
          </p>
        </div>

        <div className="feature-box">
          <h3 className="feature-heading">Opportunity Scout</h3>
          <p className="feature-description">
            Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
