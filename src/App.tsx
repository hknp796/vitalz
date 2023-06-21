import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./fonts.css";

function App() {
  return (
    <div style={{ fontFamily: "main-regular, sans-serif" }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
