import { useState } from "react";

// Define an array of color options
const COLORS = ["pink", "green", "blue", "yellow", "purple"];

// Create a functional component called BackgroundSet
function BackgroundSet() {
  // Declare a state variable backgroundColor and a function setBackgroundColor
  // The initial background color is set to the first color in the COLORS array
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [backgroundCount, setBackgroundCount] = useState(0);

  // Define a function called onButtonClick, which takes a color parameter
  const onButtonClick = (color) => () => {
    // When a button is clicked, set the backgroundColor to the selected color
    setBackgroundColor(color);
    setBackgroundCount(backgroundCount + 1);
  };

  // Render the component
  return (
    <div
      className="App"
      style={{
        // Set the background color of the div to the current backgroundColor state
        backgroundColor,
        height: "100vh",
        width: "100vw",
      }}
    >
      <div>{backgroundCount}</div>

      {/* Map over the COLORS array to create buttons */}
      {COLORS.map((color) => (
        <>
          <button
            type="button"
            key={color}
            // Attach an onClick event handler to each button
            // When clicked, it calls the onButtonClick function with the selected color
            onClick={onButtonClick(color)}
            // Conditionally add the "selected" class to the button if its color matches the backgroundColor state
            className={backgroundColor === color ? "selected" : ""}
          >
            {/* Display the color text on the button */}
            {color}
          </button>
        </>
      ))}
    </div>
  );
}

// Export the BackgroundSet component for use in other parts of the application
export default BackgroundSet;
