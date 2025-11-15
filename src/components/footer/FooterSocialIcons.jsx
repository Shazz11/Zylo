import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const FooterSocialIcons = () => {
  const socialIcons = [
    { icon: <FaFacebookF />, label: 'Facebook' },
    { icon: <FaInstagram />, label: 'Instagram' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaYoutube />, label: 'YouTube' }
  ];

  return (
    <div className="text-center md:text-left">
  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

  <div className="flex justify-center md:justify-start gap-4">
    {socialIcons.map((social, index) => (
      <a
        key={index}
        href="#"
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center 
                   justify-center transition hover:bg-black hover:text-white hover:scale-110"
      >
        {social.icon}
      </a>
    ))}
  </div>
</div>

  );
};

export default FooterSocialIcons;