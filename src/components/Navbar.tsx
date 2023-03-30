import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex  absolute gap-10 ml-60 mt-10 text-xl font-semibold">
      <Link to="/">Home</Link>
      <Link to="/exercises">Exercise</Link>
    </nav>
  );
}

export default Navbar;
