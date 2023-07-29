import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./fonts.css";

function App() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
