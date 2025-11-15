import React from "react";

function Button({
  variant = "outline",
  text,
  icon: Icon,
  width = "w-auto",
  textSize = "text-base",
  gap = "gap-2",
  px = "px-5",
  py = "py-2",
  type = "button",  // <-- IMPORTANT
  onClick,
}) {
  const wrapperClasses = `
    flex items-center justify-center  
    rounded 
    cursor-pointer select-none
    transition-all duration-300 ease-in-out
    active:scale-95
    ${gap}
    ${px}
    ${py}
  `;

  const variantClasses =
    variant === "outline"
      ? `bg-white text-black border border-black`
      : `bg-black text-white border border-transparent`;

  return (
    <div className={`${wrapperClasses} ${variantClasses} ${width} ${textSize}`}>
      <button
        type={type}
        onClick={onClick}
        className="w-full h-full flex items-center justify-center focus:outline-none"
      >
        {Icon && <Icon className="text-lg mr-1" />}
        {text}
      </button>
    </div>
  );
}

export default Button;
