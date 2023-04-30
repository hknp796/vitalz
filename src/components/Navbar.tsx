import React from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="flex  absolute gap-10 ml-60 mt-10 text-xl font-semibold">
      <Link to="/">Home</Link>
      <FaBeer />
      <Link to="/exercises">Exercise</Link>
    </nav>
  );
}

export default Navbar;
