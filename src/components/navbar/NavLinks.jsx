import { Link } from "react-router-dom";

const NavLinks = ({ links = [], isMobile = false, className = "" }) => {
  const routeMap = {
    Home: "/",
    Shop: "/shop",
    Categories: "/categories",
    About: "/about",
    Contact: "/contact",
  };

  return (
    <div
      className={`${isMobile ? "space-y-2" : "hidden lg:flex space-x-6 items-center"} ${className}`}
    >
      {links.map((link) => (
        <Link
          key={link}
          to={routeMap[link] || "/"}
          className={`border-b-2 rounded px-2 border-white text-[var(--text-primary)] text-lg hover:border-b-2 hover:border-[var(--text-primary)] font-medium transition-colors duration-200 ${
            isMobile ? "block" : ""
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;