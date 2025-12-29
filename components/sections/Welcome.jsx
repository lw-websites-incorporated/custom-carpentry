'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Copper accent */}
            <div className="copper-line mb-6" />

            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#2D2D2D] mb-6">
              {siteConfig.welcome.heading}
            </h2>

            <div className="space-y-4 text-[#666666] leading-relaxed">
              {siteConfig.welcome.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Decorative element */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-[#B8860B]" />
              <span className="text-[#B8860B] font-medium">Quality you can trust</span>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={siteConfig.welcome.image}
                alt={siteConfig.welcome.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#B8860B] rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
