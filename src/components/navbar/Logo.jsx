import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="text-2xl font-bold text-black">
      {/* Logo click par home page */}
      <Link to="/">LuxuryBrand</Link>
    </div>
  );
}

export default Logo;
