import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
            <button > Shop Now</button>
            <button className="secondary-btn">Catogory</button>
        </div>
        <div>
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src="/flipkart.png" alt="flipkart" />
                <img src="/amazon.png" alt="amazon" />
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/shoe_image.png" alt="shoes" />
      </div>
    </main>
  );
};

export default Hero;
