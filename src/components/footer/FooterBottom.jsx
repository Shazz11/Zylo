import React from "react";

const FooterBottom = () => {
  const paymentIcons = [
    {
      name: "Visa",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png",
    },
    {
      name: "Mastercard",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png",
    },
    {
      name: "Stripe",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png",
    },
    {
      name: "PayPal",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png",
    },
  ];

  return (
    <div className="border-t border-gray-300 mt-10 pt-4 pb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm text-center md:text-left">
          © {new Date().getFullYear()} ShoeKart. All rights reserved.
        </p>

        {/* Payment Icons */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          {paymentIcons.map((payment, index) => (
            <img
              key={index}
              src={payment.src}
              alt={payment.name}
              className="h-6 w-auto opacity-80 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
