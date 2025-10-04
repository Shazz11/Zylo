import React from "react";
import { Link } from "react-router-dom";

// Links ko array me define kiya
const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

function NavLinks() {
  return (
    <ul className="flex gap-6">
      {links.map((link, index) => (
        <li key={index}>
          {/* React Router Link use kiya taaki page reload na ho */}
          <Link
            to={link.path}
            className="hover:text-gray-500 transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
