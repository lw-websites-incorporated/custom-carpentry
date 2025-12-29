import Hero from '@/components/hero/Hero';
import Welcome from '@/components/sections/Welcome';
import Services from '@/components/services/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Gallery from '@/components/gallery/Gallery';
import Testimonials from '@/components/testimonials/Testimonials';
import CTABanner from '@/components/cta/CTABanner';
import ContactPreview from '@/components/contact/ContactPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Services limit={4} showViewAll={true} />
      <WhyChooseUs />
      <Gallery limit={6} />
      <Testimonials />
      <CTABanner />
      <ContactPreview />
    </>
  );
}
