import { useState, useEffect } from "react";

// Custom hook for handling shape logic
const useShapeLogic = (type, dimensions) => {
  // State for hover effect and color
  const [isHovered, setIsHovered] = useState(false);
  const [color, setColor] = useState("grey");

  //  calculate perimeter based on shape type and dimensions
  const calculatePerimeter = (type, dimensions) => {
    switch (type) {
      case "rectangle":
        return 2 * (dimensions.width + dimensions.height);
      case "triangle":
        return 3 * dimensions.sideLength;
      case "circle":
        return 2 * Math.PI * dimensions.radius;
      default:
        return 0;
    }
  };
  const perimeter = calculatePerimeter(type, dimensions);

  //  color based on perimeter value
  const getColorByPerimeter = (perimeterValue) => {
    if (perimeterValue <= 300) return "lightblue";
    if (perimeterValue <= 350) return "blue";
    if (perimeterValue <= 750) return "red";
    return "darkblue";
  };

  // Styles for the different shape types
  const shapeStyles = {
    rectangle: {
      height: `${dimensions.height}px`,
      width: `${dimensions.width}px`,
      backgroundColor: isHovered ? color : "grey",
    },
    triangle: {
      width: "0",
      height: "0",
      borderLeft: `${dimensions.sideLength / 2}px solid transparent`,
      borderRight: `${dimensions.sideLength / 2}px solid transparent`,
      borderBottom: `${dimensions.sideLength}px solid ${isHovered ? color : "gray"}`,
    },
    circle: {
      height: `${2 * dimensions.radius}px`,
      width: `${2 * dimensions.radius}px`,
      borderRadius: "50%",
      backgroundColor: isHovered ? color : "grey",
    },
  };

  // initial color set
  useEffect(() => {
    setColor(getColorByPerimeter(perimeter));
  }, [perimeter]);

  // Event handler for mouse events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Event handler for input change
  const handleInputChange = (event) => {
    setColor(event.target.value.toLowerCase() || getColorByPerimeter(perimeter));
  };

  // Return values and functions for use in the Shape component
  return {
    shapeStyles: shapeStyles[type],
    perimeter: perimeter,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleInputChange,
    color,
  };
};

export default useShapeLogic;