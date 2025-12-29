'use client';

import { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Testimonials({ showHeading = true, limit }) {
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

  const testimonials = limit
    ? siteConfig.testimonials.entries.slice(0, limit)
    : siteConfig.testimonials.entries;

  return (
    <section ref={sectionRef} className="section-padding bg-[#F5F5F5]">
      <div className="container-custom">
        {/* Header */}
        {showHeading && (
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="accent-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1E1E1E] mb-4">
              {siteConfig.testimonials.heading}
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              {siteConfig.testimonials.subheading}
            </p>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-lg relative transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-[#089DC0] rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#089DC0] fill-[#089DC0]" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-[#666666] leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-[#E8F4F8] pt-4">
                <p className="font-semibold text-[#1E1E1E]">{testimonial.name}</p>
                <p className="text-sm text-[#089DC0]">{testimonial.location}</p>
              </div>

              {/* Google Badge */}
              <div className="mt-3 text-xs text-[#666666]">
                Via Google Reviews
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
