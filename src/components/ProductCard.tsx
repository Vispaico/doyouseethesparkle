import React from 'react';
import { Star, Download, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviewCount: number;
  features: string[];
  badge?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  features,
  badge
}) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 text-base leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-1 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <Download className="w-4 h-4 mr-2 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {rating} ({reviewCount} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">{price}</span>
            {originalPrice && (
              <span className="ml-2 text-lg text-gray-500 line-through">{originalPrice}</span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;