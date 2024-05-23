import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/assets/img/Green (1).png'; // Ensure you have a logo.png file in your project

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav style={navStyles}>
      <div style={leftContainer}>
        <button style={logoButtonStyles} onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" style={logoImageStyles} />
        </button>
      </div>
      <div style={centerContainer}>
        <button style={navLinkStyles} onClick={() => navigate('/solar')}>
          Solar Power
        </button>
        <button style={navLinkStyles} onClick={() => navigate('/initiatives')}>
          Initiatives
        </button>
        <button style={navLinkStyles} onClick={() => navigate('/hydropower')}>
          Hydro Power
        </button>
        <button style={navLinkStyles} onClick={() => navigate('/windpower')}>
          Wind Power
        </button>
      </div>
      <div style={rightContainer}></div>
    </nav>
  );
}

const navStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'darkgreen', // Light green color
  padding: '10px 20px', // Added some padding on the sides
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const leftContainer = {
  display: 'flex',
  flex: '1',
  justifyContent: 'flex-start',
};

const centerContainer = {
  display: 'flex',
  flex: '2',
  justifyContent: 'center',
  gap: '20px',
  alignItems: 'center',
};

const rightContainer = {
  display: 'flex',
  flex: '1',
  justifyContent: 'flex-end',
};

const logoButtonStyles = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const logoImageStyles = {
  width: '70px',
  height: '50px',
  borderRadius: '50%',
  border: '2px solid green',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const navLinkStyles = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  color: 'white',
  padding: '10px 15px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

navLinkStyles[':hover'] = {
  backgroundColor: '#45a049',
};

export default NavBar;
