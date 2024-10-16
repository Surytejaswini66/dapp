import React from "react";
import "./FeaturesSection.css";

function FeaturesSection() {
  const features = [
    {
      title: "Trade Optimiser",
      description:
        "Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.",
      image: "/trade-optimiser.png", // Add image path
    },
    {
      title: "Market Insight",
      description:
        "Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.",
      image: "/market-insight.png", // Add image path
    },
    {
      title: "Risk Guard",
      description:
        "Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.",
      image: "/risk-guard.png", // Add image path
    },
    {
      title: "Portfolio Sync",
      description:
        "Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's heading.",
      image: "/portfolio-sync.png", // Add image path
    },
    {
      title: "Opportunity Scout",
      description:
        "Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.",
      image: "/opportunity-scout.png", // Add image path
    },
  ];

  return (
    <div className="features-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <img
            src={feature.image}
            alt={feature.title}
            className="feature-image"
          />
          <h2 className="feature-title">{feature.title}</h2>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturesSection;
