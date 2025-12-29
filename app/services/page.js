import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Bath, UtensilsCrossed, Grid3X3, Home, Wrench, Check, ArrowRight } from 'lucide-react';
import PageHero from '@/components/hero/PageHero';
import CTABanner from '@/components/cta/CTABanner';

const iconMap = {
  bath: Bath,
  kitchen: UtensilsCrossed,
  grid: Grid3X3,
  home: Home,
  wrench: Wrench,
};

const serviceImages = {
  'Bathroom Fitting': 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2340&auto=format&fit=crop',
  'Kitchen Installation': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2340&auto=format&fit=crop',
  'Tiling': 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2340&auto=format&fit=crop',
  'Renovations': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2340&auto=format&fit=crop',
  'Repairs & Maintenance': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2340&auto=format&fit=crop',
};

export const metadata = {
  title: 'Our Services | Bigwood Bathrooms & Kitchens',
  description: 'Professional bathroom fitting, kitchen installation, tiling, renovations, and repairs. Quality craftsmanship for your home.',
};

export default function ServicesPage() {
  const { services } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive bathroom, kitchen, and tiling solutions"
        image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2340&auto=format&fit=crop"
        imageAlt="Modern kitchen installation"
      />

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="copper-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#2D2D2D] mb-4">
              {services.heading}
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              {services.subheading}
            </p>
          </div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {services.items.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Home;
        const isEven = index % 2 === 0;
        const imageUrl = serviceImages[service.title] || serviceImages['Bathroom Fitting'];

        return (
          <section
            key={service.title}
            className={`py-16 md:py-24 ${isEven ? 'bg-white' : 'bg-[#F5F0E8]'}`}
          >
            <div className="container-custom">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                !isEven ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Image */}
                <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative frame */}
                  <div className={`absolute -bottom-4 ${isEven ? '-right-4' : '-left-4'} w-full h-full border-2 border-[#B8860B] rounded-lg -z-10 hidden md:block`} />
                </div>

                {/* Content */}
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#B8860B]/10 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-[#B8860B]" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#2D2D2D] mb-4">
                    {service.title}
                  </h2>

                  <p className="text-[#666666] text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  {service.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-[#B8860B] rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-[#333333] text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-6 py-3 rounded font-medium hover:bg-[#9a7209] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <CTABanner />
    </>
  );
}
