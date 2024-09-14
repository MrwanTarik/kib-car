// AnimatedButtonWrapper.js
import React, { useState, cloneElement } from "react";

function AnimatedButtonWrapper({ children }) {
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    if (loading) return; // Prevent multiple clicks during loading

    // Set loading state to true to trigger animation
    setLoading(true);

    // Remove the loading state after the duration of the animation
    setTimeout(() => {
      // Call the child's onClick handler if it exists
      if (children.props.onClick) {
        children.props.onClick(e);
      }
      setLoading(false);
    }, 2000); // Match the duration in the CSS transition
  };

  // Clone the child to inject additional props
  const childWithProps = cloneElement(children, {
    onClick: handleClick,
    className: `${children.props.className || ""} animated-button ${
      loading ? "btn-loading-state" : ""
    }`.trim(),
    style: {
      position: "relative", // Ensure position is relative
      overflow: "hidden", // Ensure overflow is hidden
      ...children.props.style, // Preserve any existing styles
    },
  });

  return childWithProps;
}

export default AnimatedButtonWrapper;
