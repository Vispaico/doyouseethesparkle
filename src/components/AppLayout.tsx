import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from './Header';
import Hero from './Hero';
import FeaturedArticles from './FeaturedArticles';
import ProductShowcase from './ProductShowcase';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import TrustBadges from './TrustBadges';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedArticles />
        <ProductShowcase />
        <TrustBadges />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
