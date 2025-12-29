import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Check, ArrowRight } from 'lucide-react';
import PageHero from '@/components/hero/PageHero';
import CTABanner from '@/components/cta/CTABanner';

export const metadata = {
  title: 'About Us | Bigwood Bathrooms & Kitchens',
  description: 'Learn about Bigwood Bathrooms & Kitchens - a trusted local business delivering quality bathroom, kitchen, and tiling services.',
};

export default function AboutPage() {
  const { about, testimonials } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="About Us"
        subtitle="Dedicated to delivering exceptional bathroom, kitchen, and tiling services"
        image="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2340&auto=format&fit=crop"
        imageAlt="Professional tradesperson at work"
      />

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#B8860B] rounded-lg -z-10 hidden md:block" />
            </div>

            {/* Content */}
            <div>
              <div className="copper-line mb-6" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#2D2D2D] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[#666666] leading-relaxed mb-8">
                {about.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {about.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#B8860B] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#2D2D2D] font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-playfair font-bold text-[#B8860B] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#666666] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="copper-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#2D2D2D] mb-4">
              Our Values
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.values.map((value, index) => (
              <div
                key={index}
                className="bg-[#F5F0E8] rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-[#B8860B] rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-[#2D2D2D] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-20 bg-[#2D2D2D] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#B8860B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#B8860B]/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="copper-line-center mb-6" />
            <h2 className="text-3xl font-playfair font-bold text-white mb-8">
              {testimonials.heading}
            </h2>
            <blockquote className="text-xl text-white/90 italic mb-6 leading-relaxed">
              "{testimonials.entries[0].quote}"
            </blockquote>
            <p className="text-[#B8860B] font-medium">
              — {testimonials.entries[0].name}, {testimonials.entries[0].location}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#2D2D2D] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#666666] mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and receive a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-8 py-4 rounded font-medium text-lg hover:bg-[#9a7209] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
