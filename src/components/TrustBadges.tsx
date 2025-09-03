import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: "Secure Checkout",
      description: "SSL encrypted payments"
    },
    {
      icon: Award,
      title: "Expert Approved",
      description: "Content by certified professionals"
    },
    {
      icon: Users,
      title: "10,000+ Members",
      description: "Join our thriving community"
    },
    {
      icon: Clock,
      title: "30-Day Guarantee",
      description: "Money back if not satisfied"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <IconComponent className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;