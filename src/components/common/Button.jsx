import React from "react";

function Button({
  variant = "outline",   // "outline" or "solid"
  text,
  icon: Icon,
  width = "auto",        // default width auto
  textSize = "text-base",// Tailwind text size class
  gap = "gap-2",         // space between icon and text
  px,
}) {
  // Base style
  const baseClasses = `
    flex items-center justify-center  
    py-1.5 rounded 
    cursor-pointer select-none
    transition-all duration-300 ease-in-out
    active:scale-85              
    ${gap}
    ${px}
  `;

  // Variant styles
  const variantClasses =
    variant === "outline"
      ? `
        bg-white text-black border border-black
      `
      : `
        bg-black text-white border border-transparent
      `;

  return (
    <div className={`${baseClasses} ${variantClasses} ${width} ${textSize} px-${px}`}>
      {Icon && <Icon className="text-lg" />} 
      <span>{text}</span>
    </div>
  );
}

export default Button;
