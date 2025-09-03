import React from 'react';
import ProductCard from './ProductCard';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      title: "Complete Mindfulness Guide",
      description: "A comprehensive 120-page guide to mindfulness practices for daily life, featuring meditation techniques and stress reduction strategies.",
      price: "$29.99",
      originalPrice: "$39.99",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887205674_111a5a20.webp",
      rating: 4.8,
      reviewCount: 234,
      features: ["120 pages of expert content", "Audio meditations included", "Printable worksheets", "Lifetime access"],
      badge: "Bestseller"
    },
    {
      title: "Nutrition After 50 Course",
      description: "Learn evidence-based nutrition strategies tailored for optimal health and vitality in your 50s, 60s, and beyond.",
      price: "$49.99",
      originalPrice: "$69.99",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887207378_5505f063.webp",
      rating: 4.9,
      reviewCount: 156,
      features: ["6 video modules", "Meal planning templates", "Recipe collection", "Expert Q&A sessions"]
    },
    {
      title: "Daily Wellness Planner",
      description: "Beautiful printable planner designed to help you track habits, set intentions, and maintain consistent wellness practices.",
      price: "$19.99",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887209133_26239e28.webp",
      rating: 4.7,
      reviewCount: 89,
      features: ["52 weekly layouts", "Habit tracking pages", "Reflection prompts", "Goal setting templates"],
      badge: "New"
    },
    {
      title: "Sleep Better Tonight",
      description: "Transform your sleep quality with this comprehensive guide featuring relaxation techniques and sleep hygiene practices.",
      price: "$24.99",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887211430_7ec69ad8.webp",
      rating: 4.6,
      reviewCount: 178,
      features: ["Sleep assessment tools", "Guided sleep meditations", "Bedroom optimization guide", "30-day action plan"]
    }
  ];

  return (
    <section id="shop" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Digital Wellness Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertly crafted guides, courses, and tools to support your wellness journey
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Shop CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 shadow-md hover:shadow-lg">
            Browse All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;