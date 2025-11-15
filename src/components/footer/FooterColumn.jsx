import React from 'react';

const FooterColumn = ({ title, links }) => {
  return (
   <div className="mb-6 md:mb-0">
  <h3 className="text-lg font-semibold mb-4">{title}</h3>
  <ul className="space-y-2">
    {links.map((link, index) => (
      <li key={index}>
        <a
          href={link.href || "#"}
          className="text-gray-600 hover:text-black transition text-sm"
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>

  );
};

export default FooterColumn;