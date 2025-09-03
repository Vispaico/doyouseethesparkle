import React from 'react';
import { ArrowRight, Sparkles, Heart, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d64gsuwffb70l.cloudfront.net/68b7f8650ec342353cbb04be_1756887184170_b84eeae6.webp"
          alt="Serene nature background with morning light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-purple-900/30 to-blue-900/40"></div>
      </div>

      {/* Floating Sparkle Elements */}
      <div className="absolute inset-0 z-10">
        <Sparkles className="absolute top-1/4 left-1/4 text-yellow-300 w-6 h-6 animate-pulse" />
        <Star className="absolute top-1/3 right-1/3 text-yellow-200 w-4 h-4 animate-bounce" />
        <Heart className="absolute bottom-1/3 left-1/5 text-pink-200 w-5 h-5 animate-pulse" />
        <Sparkles className="absolute bottom-1/4 right-1/4 text-yellow-300 w-5 h-5 animate-bounce" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white font-medium text-lg">Well-Being for Life After 45</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Rediscover Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              Sparkle
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Embrace vibrant living with expert guidance on wellness, mindfulness, and personal growth 
            tailored for your journey beyond 45.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center">
              Get Your Free Sparkle Guide
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 backdrop-blur-sm">
              Explore Articles
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-lg">10,000+ Happy Readers</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-pink-300 mr-2" />
              <span className="text-lg">Expert-Backed Content</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-lg">Science-Based Approach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;