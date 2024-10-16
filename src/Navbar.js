import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 p-4 transition-all ${
        scrolled ? "bg-[rgba(12,43,47,0.7)] backdrop-blur-md" : "bg-transparent"
      } flex items-center justify-between`}
      style={{
        width: '370.5px', // Fixed width
        height: '64px',    // Height Hug
        borderRadius: '48px',  // Radius of 48px
        backgroundColor: 'rgba(12,43,47,0.7)', // Custom background color
        backdropFilter: 'blur(10px)', // Blur effect for background
      }}
    >
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <img src="/another-image.png" alt="Another" className="h-12" />
      </div>
    </nav>
  );
}

export default Navbar;
