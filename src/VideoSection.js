import React from "react";
import "./VideoSection.css";

function VideoSection() {
  return (
    <div className="video-section">
      <video
        className="background-video"
        src="/background-video.mp4" // Add your video file here
        autoPlay
        muted
        loop
      />
      <div className="video-overlay">
        <p className="headline-text">When innovation meets</p>
        <span className="highlight-box">Innovation</span>
        <p className="sub-text">
          Empowering Trading Through Advanced Technology
        </p>
        <button className="open-dapp-button">Open dApp</button>
      </div>
    </div>
  );
}

export default VideoSection;
