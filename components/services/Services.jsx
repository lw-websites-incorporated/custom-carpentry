'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Bath, UtensilsCrossed, Grid3X3, Home, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const iconMap = {
  bath: Bath,
  kitchen: UtensilsCrossed,
  grid: Grid3X3,
  home: Home,
};

export default function Services({ limit = 4, showViewAll = true }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = siteConfig.services.items.slice(0, limit);

  return (
    <section ref={sectionRef} className="section-padding bg-[#F5F0E8]">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="copper-line-center mb-6" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#2D2D2D] mb-4">
            {siteConfig.services.heading}
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            {siteConfig.services.subheading}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <div
                key={service.title}
                className={`bg-white rounded-lg p-6 shadow-lg card-hover transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#F5F0E8] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#B8860B]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-playfair font-bold text-[#2D2D2D] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center text-[#B8860B] font-medium text-sm hover:gap-3 transition-all duration-300 gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-8 py-3 rounded font-medium hover:bg-[#9a7209] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
