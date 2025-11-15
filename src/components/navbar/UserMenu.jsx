import React, { useState } from "react";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonClass =
    "text-[var(--text-primary)] p-0 bg-red-500 rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-pointer";

  const menuItems = [
    { label: "Profile", href: "/profile" },
    { label: "Orders", href: "/orders" },
    { label: "Logout", href: "#logout" },  
  ];

  return (
    <div className="relative flex items-center" >
      <Link to={"/wishlist"}>
        <button className="flex items-center justify-center">
          <FiHeart size={24} />
        </button>
      </Link>

      <Link to={"/addtocart"}>
        <button className="flex items-center justify-center">
          <FiShoppingCart size={24} />
        </button>
      </Link>

      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <FiUser size={24} />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[var(--bg-section)] border-gray-200 shadow-lg rounded-md py-2 z-[999]">
            {menuItems.map((item) => (
              <Link to={item.href}>
                <li
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-[var(--text-primary)] hover:bg-gray-100 transition-colors duration-200"
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
