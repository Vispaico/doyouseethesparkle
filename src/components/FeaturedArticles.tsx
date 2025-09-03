import React from 'react';
import ArticleCard from './ArticleCard';

const FeaturedArticles: React.FC = () => {
  const articles = [
    {
      title: "5 Morning Rituals That Transform Your Day After 50",
      excerpt: "Discover simple, science-backed morning practices that boost energy, improve mood, and set a positive tone for your entire day.",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887187778_13808122.webp",
      author: "Dr. Sarah Johnson",
      readTime: "5 min read",
      category: "Wellness",
      href: "#article-1"
    },
    {
      title: "Mindful Eating: Nourish Your Body and Soul",
      excerpt: "Learn how to develop a healthier relationship with food through mindfulness practices that enhance both physical and emotional well-being.",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887196500_d93e022a.webp",
      author: "Maria Rodriguez",
      readTime: "7 min read",
      category: "Nutrition",
      href: "#article-2"
    },
    {
      title: "Building Resilience Through Life Transitions",
      excerpt: "Navigate major life changes with grace and strength. Expert strategies for embracing new chapters with confidence and optimism.",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887189550_58537e27.webp",
      author: "Dr. Michael Chen",
      readTime: "6 min read",
      category: "Personal Growth",
      href: "#article-3"
    },
    {
      title: "The Science of Happiness After 45",
      excerpt: "Explore research-backed methods for cultivating lasting happiness and life satisfaction in your middle years and beyond.",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887191295_8fa825b0.webp",
      author: "Dr. Emily Foster",
      readTime: "8 min read",
      category: "Mental Health",
      href: "#article-4"
    },
    {
      title: "Creating Meaningful Connections in Midlife",
      excerpt: "Strengthen existing relationships and build new ones with practical tips for deeper, more fulfilling social connections.",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887193040_3d745d47.webp",
      author: "Lisa Thompson",
      readTime: "6 min read",
      category: "Relationships",
      href: "#article-5"
    },
    {
      title: "Gentle Movement for Lifelong Vitality",
      excerpt: "Discover low-impact exercises and movement practices that keep your body strong, flexible, and energized at any age.",
      image: "https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887198305_d8c2133d.webp",
      author: "James Wilson",
      readTime: "5 min read",
      category: "Fitness",
      href: "#article-6"
    }
  ];

  return (
    <section id="articles" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights and practical guidance to help you thrive in every aspect of your life
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;