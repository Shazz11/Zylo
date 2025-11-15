import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <div className={` ${className}`}>
      <h1 className="text-2xl font-bold text-[var(--text-primary)] cursor-pointer">
        ShopMate
      </h1>
    </div>
  );
};

export default Logo;