import React from 'react';
import { Clock, ArrowRight, User } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  category: string;
  href: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  image,
  author,
  readTime,
  category,
  href
}) => {
  return (
    <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 text-base leading-relaxed">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Read More Link */}
        <a
          href={href}
          className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:translate-x-1 transform duration-200"
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

export default ArticleCard;