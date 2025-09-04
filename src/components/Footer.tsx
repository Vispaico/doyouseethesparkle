import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src="/Do You See The Sparkle Logo footer.png" alt="Do You See The Sparkle Logo" className="w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Rediscover your spark through wellness and mindfulness, for everyone 45 and up.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61580379446134" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/do_you_see_the_sparkle/" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/channel/UCqIU_TDiBAplqmWJbacWnhg" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#articles" className="text-gray-300 hover:text-white transition-colors">Articles</a></li>
              <li><a href="#shop" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wellness</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nutrition</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mindfulness</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Relationships</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-gray-300">hello@doyouseethesparkle.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-gray-300">1-800-SPARKLE</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-gray-300">Portland, OR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Do You See The Sparkle | doyouseethesparkle.com. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;