import React from 'react';
import './HeaderImage.css';
const solarImage = 'https://i.ytimg.com/vi/B37fEHLVbZs/maxresdefault.jpg';

function HeaderImage() {
  return (
    <div className="header-image-container">
      <img src={solarImage} alt="Solar Power" className="header-image" />
      <div className="header-text">Solar Power</div>
    </div>
  );
}

export default HeaderImage;
