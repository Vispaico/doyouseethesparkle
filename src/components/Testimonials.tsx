import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Margaret Thompson",
      age: 62,
      location: "Portland, OR",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887214929_e142aac9.webp",
      rating: 5,
      text: "This platform has completely transformed my approach to wellness. The mindfulness guide helped me find peace during my retirement transition, and I've never felt more centered.",
      product: "Complete Mindfulness Guide"
    },
    {
      name: "Robert Chen",
      age: 58,
      location: "Austin, TX",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887216657_ca9bae12.webp",
      rating: 5,
      text: "The nutrition course was a game-changer for my health. I've lost 20 pounds and have more energy than I've had in years. The meal planning templates make it so easy to stay on track.",
      product: "Nutrition After 50 Course"
    },
    {
      name: "Linda Rodriguez",
      age: 67,
      location: "Miami, FL",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887218411_e8055533.webp",
      rating: 5,
      text: "I love how accessible and practical everything is. The articles are written in a way that's easy to understand, and the wellness planner keeps me motivated every day.",
      product: "Daily Wellness Planner"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people who have transformed their lives with our guidance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative transform hover:-translate-y-2 transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-purple-200" />
              </div>

              {/* Profile */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">Age {testimonial.age} • {testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 leading-relaxed text-base">
                "{testimonial.text}"
              </p>

              {/* Product Reference */}
              <div className="border-t pt-4">
                <p className="text-sm text-purple-600 font-medium">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-lg font-semibold">4.8/5 Average Rating</span>
            </div>
            <div className="text-lg">•</div>
            <div className="text-lg font-semibold">10,000+ Happy Customers</div>
            <div className="text-lg">•</div>
            <div className="text-lg font-semibold">30-Day Money Back Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;