import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I've been shopping from ShoeKart for 2 years now. The authenticity and quality are unmatched. Highly recommended!",
      name: "Rahul Sharma",
      location: "Mumbai, Maharashtra"
    },
    {
      id: 2,
      text: "Fast delivery and genuine products. The customer support team helped me choose the perfect running shoes for my marathon training.",
      name: "Priya Patel",
      location: "Bangalore, Karnataka"
    },
    {
      id: 3,
      text: "Finally found a store that sells authentic sneakers at reasonable prices. The brand collection is impressive!",
      name: "Amit Singh",
      location: "Delhi, NCR"
    }
  ];

  return (
    <section className="py-10 md:py-8"> 
      <div className="container mx-auto px-4 md:px-6">

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-gray-700 mb-3 md:mb-4 italic text-sm md:text-base">
                "{testimonial.text}"
              </p>

              <div className="mt-3 md:mt-4">
                <p className="font-semibold text-gray-800 text-sm md:text-base">{testimonial.name}</p>
                <p className="text-gray-600 text-xs md:text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
