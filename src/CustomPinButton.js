// src/CustomPinButton.js

import React from 'react';
import './CustomPinButton.css'; // Add custom styles for the button

const CustomPinButton = ({ onClick }) => {
  return (
    <button className="custom-pin-button" onClick={onClick}>
      {/* You can add an icon or text here */}
      📌
    </button>
  );
};

export default CustomPinButton;
