import React from 'react';
import FAQItem from './FAQItem';

const FAQGroup = () => {
  const faqs = [
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email. You can use this number on our website or the courier's website to track your package."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging. Please visit our Returns page for more information and to initiate a return."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary depending on the destination. You can see the shipping options at checkout."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via email at support@example.com, by phone at (123) 456-7890, or through the live chat feature on our website during business hours."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay for your convenience."
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQGroup;