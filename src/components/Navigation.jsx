import React from "react";

const Navigation = () => {
  return (
    <div>
      
      <nav className="container">
        <div className="logo">
          <img src="/brand_logo.png" alt="logo"></img>
        </div>
        <div className="list">
          <ul>
            <li href="#">MENU</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
          </ul>
        </div>
        <div className="btn">
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
