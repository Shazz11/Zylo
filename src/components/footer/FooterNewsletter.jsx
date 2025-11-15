import React, { useState } from "react";
import Button from "../common/Button";
import { FaBell } from "react-icons/fa";

const FooterNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log("Subscribed with email:", email);
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <div className="py-12 px-4">
  <div className="max-w-3xl mx-auto">

    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated</h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Subscribe to get special offers, free giveaways and updates.
      </p>
    </div>

    <form
      onSubmit={handleSubmit}
      className="flex flex-row sm:flex-row gap-1 sm:gap-4 max-w-xl mx-auto"
    >
      <input
        type="email"
        value={email}
        placeholder="Your email address"
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow px-4 py-3 border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-black"
        required
      />

      <Button
        variant="solid"
        text="Subscribe"
        width="w-auto sm:w-50"
        textSize="text-base"
        // px="px-0 sm:px-5"
        py="py-1.5 sm:py-3"
        type="submit"
        icon={FaBell}
      />
    </form>

  </div>
</div>

  );
};

export default FooterNewsletter;
