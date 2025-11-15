import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactCard from '../components/contact/ContactCard';
import ContactForm from '../components/contact/ContactForm';
import FAQGroup from '../components/contact/FAQGroup';
import MapEmbed from '../components/contact/MapEmbed';

const ContactPage = () => {

  const contactInfo = [
    {
      icon: <FaPhone className="text-black text-xl" />,
      title: "Phone Support",
      description: "Call us at (123) 456-7890. Support Mon–Fri."
    },
    {
      icon: <FaEnvelope className="text-black text-xl" />,
      title: "Email Support",
      description: "Email support@example.com. Replies within 24 hrs."
    },
    {
      icon: <FaMapMarkerAlt className="text-black text-xl" />,
      title: "Store Location",
      description: "123 Fashion Street, NY 10001. Open 10am–8pm."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="py-6 md:py-14 text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-1">Contact Us</h1>
        <p className="text-gray-600 text-sm md:text-lg">
          We're always here to help you.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-4 md:py-10">
        <div className="mx-auto max-w-6xl px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-6 md:py-14">
        <div className="mx-auto max-w-4xl px-3">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-xl md:text-3xl font-bold mb-1">Get In Touch</h2>
            <p className="text-gray-600 text-xs md:text-base max-w-xl mx-auto">
              Fill out the form and we'll get back to you soon.
            </p>
          </div>

          {/* FORM becomes smaller on mobile */}
          <div className="scale-95 md:scale-100">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MAP */}
      {/* <section className="py-6 md:py-14">
        <div className="mx-auto max-w-4xl px-3">
          <div className="text-center mb-4 md:mb-10">
            <h2 className="text-xl md:text-3xl font-bold mb-1">Find Our Store</h2>
            <p className="text-gray-600 text-xs md:text-base">
              Visit our flagship store in New York
            </p>
          </div>

          <div className="h-60 md:h-96">
            <MapEmbed />
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-6 md:py-5">
        <div className="mx-auto max-w-4xl px-3">
          <FAQGroup />
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
