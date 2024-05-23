import React from 'react';
import './WindHeaderImage.css';
const windImage = 'https://upload.wikimedia.org/wikipedia/commons/2/28/Evance_R9000_5kW_small_domestic_wind_turbine.JPG';

function HeaderImage() {
  return (
    <div className="header-image-container">
      <img src={windImage} alt="Wind Power" className="header-image" />
      <div className="header-text">Wind Power</div>
    </div>
  );
}

export default HeaderImage;