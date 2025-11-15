import React from "react";
import FooterNewsletter from "./FooterNewsletter";
import FooterColumn from "./FooterColumn";
import FooterSocialIcons from "./FooterSocialIcons";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  const shopLinks = [
    { name: "Formal Shoes", link: "/" },
    { name: "Sports Shoes", link: "/" },
    { name: "Casual Shoes", link: "/" },
    { name: "Sneakers", link: "/" },
  ];

  const customerServiceLinks = [
    { name: "Contact Us" },
    { name: "FAQ" },
    { name: "Shipping & Returns" },
    { name: "Track Order" },
    { name: "Warranty Policy" },
  ];

  const companyLinks = [
    { name: "About Us" },
    { name: "Careers" },
    { name: "Blog" },
    { name: "Terms & Conditions" },
    { name: "Privacy Policy" },
  ];

  return (
    <footer className="bg-white text-black">
      {/* Newsletter */}
      <FooterNewsletter />

      {/* Main Columns */}
      <div className="py-1 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Responsive Columns */}
          <div
            className="grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      gap-3
                      text-center 
                      md:text-left"
          >
            <FooterColumn title="Shop" links={shopLinks} />
            <FooterColumn
              title="Customer Service"
              links={customerServiceLinks}
            />
            <FooterColumn title="Company" links={companyLinks} />

            {/* Social Icons */}
            <div className="flex flex-col items-center md:items-start">
              <FooterSocialIcons />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
