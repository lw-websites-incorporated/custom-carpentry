import Image from 'next/image';

export default function PageHero({
  title,
  subtitle,
  image = 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2340&auto=format&fit=crop',
  imageAlt = 'Page header background'
}) {
  return (
    <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2D2D2D]/70" />

      {/* Decorative element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-[#B8860B] hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container-custom py-32 text-center">
        {/* Copper accent line */}
        <div className="copper-line-center mb-6" />

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-white mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
