import React, { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  // Predefined colors
  const predefinedColors = ["#FF5733", "#33FF57", "#5733FF", "#FFC300", "#DAF7A6"];

  // Generate a random color
  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "87vh",
        textAlign: "center",
        padding: "50px",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        transition: "background-color 0.5s ease",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          padding: "30px",
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Change Background Color</h1>

        {/* Picker */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="colorPicker"
            style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
          >
            Pick a Color:
          </label>
          <input
            type="color"
            id="colorPicker"
            onChange={(e) => setBgColor(e.target.value)}
            value={bgColor}
            style={{
              width: "10%",
              height: "40px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "20px"
            }}
          />
        </div>

        {/* Predefined */}
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Choose a Predefined Color:</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {predefinedColors.map((color) => (
              <button
                key={color}
                onClick={() => setBgColor(color)}
                style={{
                  backgroundColor: color,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  cursor: "pointer",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(2)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              ></button>
            ))}
          </div>
        </div>

        {/* Random */}
        <button
          onClick={generateRandomColor}
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px" ,
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
        >
          Random Color
        </button>
      </div>
    </div>
  );
};

export default App;
