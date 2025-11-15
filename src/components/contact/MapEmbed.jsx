import React from 'react';

const MapEmbed = () => {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden h-64 md:h-80">
      <iframe
        title="Store Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-73.9876543!3d40.7489123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAwJzQwLjcxMjM!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;