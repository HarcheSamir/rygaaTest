import React from "react";
import useShapeLogic from "../hooks/useShapeLogic";

// Shape component takes props: type and dimensions
const Shape = ({ type, dimensions }) => {
  // Destructure values from the custom hook
  const {
    shapeStyles,           // Styles for the shape element
    perimeter,             // Perimeter value calculated based on type and dimensions
    handleMouseEnter,       // Event handler for mouse enter
    handleMouseLeave,       // Event handler for mouse leave
    handleInputChange,      // Event handler for input change
    color,                  // Current color value
  } = useShapeLogic(type, dimensions); // Custom hook to handle shape logic

  // Return JSX for the Shape component
  return (
    <div className="sub-container">
      {/* Shape element with dynamic styles and event handlers */}
      <div
        className="shape"
        style={{
            ...shapeStyles,
            transition: 'transform 0.3s ease-in-out', // Add a smooth transition effect
          }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Display the perimeter with a custom text style */}
      <p className="custom-text">
        Perimeter: <span className="perimeter-number">{perimeter.toFixed(2)} px</span>
      </p>

      {/* Input container for color manipulation */}
      <div className="input-container">
        {/* Input element with custom style */}
        <input
          className="custom-input"
          placeholder={`Current color is: ${color}`}
          onChange={handleInputChange}
        />
        {/* Color circle element with dynamic background color */}
        <div className="color-circle" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default Shape;