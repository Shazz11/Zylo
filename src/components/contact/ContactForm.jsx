import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const ContactForm = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Send actual request to Formspree
    const response = await fetch("https://formspree.io/f/xpwkrzjz", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setIsSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheck className="text-green-600 text-2xl" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
          <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} action="https://formspree.io/f/xpwkrzjz" method='POST'>
          {/* NAME  */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="username"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          
          {/* E-MAIL  */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-Mail</label>
            <input
              type="email"
              id="email"
              name="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-6">
            <label htmlFor="msg" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              type="text-area"
              id="msg"
              name="Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold rounded-lg px-6 py-3 transition-all hover:bg-gray-800 active:scale-95"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;