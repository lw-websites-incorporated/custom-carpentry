'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Home,
  ArrowRight,
  Sofa,
  Hammer,
  Wrench,
  Ruler,
  Building2,
  Paintbrush
} from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const iconMap = {
  home: Home,
  sofa: Sofa,
  hammer: Hammer,
  wrench: Wrench,
  ruler: Ruler,
  building: Building2,
  paintbrush: Paintbrush,
};

export default function Services({ limit, showViewAll = true, showCTA = true }) {
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

  const services = limit ? siteConfig.services.items.slice(0, limit) : siteConfig.services.items;

  return (
    <section ref={sectionRef} className="section-padding bg-[#F5F5F5]">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="accent-line-center mb-6" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1E1E1E] mb-4">
            {siteConfig.services.heading}
          </h2>
          {siteConfig.services.subheading && (
            <p className="text-[#666666] max-w-2xl mx-auto">
              {siteConfig.services.subheading}
            </p>
          )}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <div
                key={service.title}
                className={`bg-white rounded-lg p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-transform duration-150 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionProperty: 'transform, box-shadow, opacity',
                  transitionDuration: isVisible ? '150ms, 150ms, 700ms' : '700ms',
                  transitionDelay: isVisible ? '0ms' : `${index * 100}ms`
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#E8F4F8] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#089DC0]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-playfair font-bold text-[#1E1E1E] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center text-[#089DC0] font-medium text-sm hover:gap-3 transition-all duration-300 gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        {showCTA && (
          <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#089DC0] text-white px-8 py-3 rounded font-medium hover:bg-[#067a99] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Enquire Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
