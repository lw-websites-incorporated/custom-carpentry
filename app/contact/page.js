import { siteConfig } from '@/config/siteConfig';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHero from '@/components/hero/PageHero';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us | Bigwood Bathrooms & Kitchens',
  description: 'Get in touch for a free quote on bathroom, kitchen, and tiling services. Contact Bigwood Bathrooms & Kitchens today.',
};

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for a free, no-obligation quote"
        image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2340&auto=format&fit=crop"
        imageAlt="Luxury bathroom"
      />

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Details */}
              <div className="bg-[#F5F0E8] rounded-lg p-6">
                <h3 className="text-xl font-playfair font-bold text-[#2D2D2D] mb-6">
                  Contact Details
                </h3>

                <div className="space-y-5">
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#B8860B] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#9a7209] transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#666666] mb-1">Phone</p>
                      <p className="text-lg font-semibold text-[#2D2D2D] group-hover:text-[#B8860B] transition-colors">
                        {contact.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#B8860B] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#9a7209] transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#666666] mb-1">Email</p>
                      <p className="font-semibold text-[#2D2D2D] group-hover:text-[#B8860B] transition-colors break-all">
                        {contact.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#B8860B] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#666666] mb-1">Service Area</p>
                      <p className="font-semibold text-[#2D2D2D]">
                        {contact.serviceArea}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-[#F5F0E8] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#B8860B]" />
                  <h3 className="text-xl font-playfair font-bold text-[#2D2D2D]">
                    Opening Hours
                  </h3>
                </div>
                <ul className="space-y-3">
                  {contact.hours.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span className="text-[#666666]">{item.day}</span>
                      <span className="font-medium text-[#2D2D2D]">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="bg-[#2D2D2D] rounded-lg p-6 text-white">
                <h3 className="text-lg font-playfair font-bold mb-3">
                  Free Quotes
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Get in touch to discuss your project. We offer free, no-obligation quotes and are happy to visit your property to provide accurate estimates.
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-white/80 text-sm">
                    We typically respond within <span className="text-[#B8860B] font-semibold">24 hours</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-[#F5F0E8] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-[#B8860B] mx-auto mb-4" />
            <h3 className="text-xl font-playfair font-bold text-[#2D2D2D] mb-2">
              Service Area Map
            </h3>
            <p className="text-[#666666]">
              Google Maps embed placeholder - {contact.serviceArea}
            </p>
          </div>
        </div>
        {/* In production, replace with: */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        /> */}
      </section>
    </>
  );
}
