'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Hero({
  image,
  imageAlt,
  heading,
  subheading,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  showScrollIndicator = true,
  overlay = true,
  minHeight = 'min-h-screen'
}) {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallax = heroRef.current.querySelector('.parallax-bg');
        if (parallax) {
          parallax.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroData = {
    image: image || siteConfig.hero.image,
    imageAlt: imageAlt || siteConfig.hero.imageAlt,
    heading: heading || siteConfig.hero.heading,
    subheading: subheading || siteConfig.hero.subheading,
    ctaText: ctaText || siteConfig.hero.ctaText,
    ctaHref: ctaHref || siteConfig.hero.ctaHref,
    secondaryCtaText: secondaryCtaText || siteConfig.hero.secondaryCtaText,
    secondaryCtaHref: secondaryCtaHref || siteConfig.hero.secondaryCtaHref,
  };

  return (
    <section ref={heroRef} className={`relative ${minHeight} flex items-center overflow-hidden`}>
      {/* Background Image */}
      <div className="parallax-bg absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src={heroData.image}
          alt={heroData.imageAlt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D]/80 via-[#2D2D2D]/60 to-transparent" />
      )}

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-[#B8860B] hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container-custom py-32">
        <div className="max-w-2xl">
          {/* Copper accent line */}
          <div className="w-20 h-1 bg-[#B8860B] mb-8 animate-fade-in-up" />

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-white mb-6 animate-fade-in-up animation-delay-100">
            {heroData.heading}
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-in-up animation-delay-200">
            {heroData.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <Link
              href={heroData.ctaHref}
              className="inline-flex items-center justify-center bg-[#B8860B] text-white px-8 py-4 font-medium text-lg rounded hover:bg-[#9a7209] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {heroData.ctaText}
            </Link>
            {heroData.secondaryCtaText && (
              <Link
                href={heroData.secondaryCtaHref}
                className="inline-flex items-center justify-center bg-white text-[#2D2D2D] px-8 py-4 font-medium text-lg rounded hover:bg-[#F5F0E8] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {heroData.secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      )}
    </section>
  );
}
