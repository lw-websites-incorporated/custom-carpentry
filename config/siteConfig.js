// config/siteConfig.js
export const siteConfig = {
  siteName: 'Bigwood Bathrooms & Kitchens',
  logo: {
    text: 'Bigwood Bathrooms & Kitchens',
    src: '/logo/bigwood-logo.png',
    alt: 'Bigwood Bathrooms & Kitchens Logo',
    height: 50,
  },
  metadata: {
    base: {
      title: 'Bigwood Bathrooms & Kitchens – Quality Bathrooms, Kitchens & Tiling',
      description:
        'Professional bathroom fitting, kitchen installation, and tiling services. Quality craftsmanship with attention to detail. Serving the local area and surroundings.',
      icons: { icon: '/favicon.ico' },
    },
  },

  fonts: {
    base: `'Open Sans', sans-serif`,
    heading: `'Playfair Display', serif`,
    baseClass: 'font-opensans',
    headingClass: 'font-playfair',
    google: { base: 'Open Sans', heading: 'Playfair Display', accent: 'Open Sans' },
  },

  // Warm professional color scheme
  brand: {
    primary: '#B8860B', // warm copper/bronze
    secondary: '#2D2D2D', // dark charcoal
    accent: '#F5F0E8', // warm tan/beige
    background: '#FFFFFF', // clean white
    dark: '#333333', // dark gray text
  },

  styles: {
    bgLight: 'bg-white',
    bgPrimary: 'bg-[#B8860B]',
    bgSecondary: 'bg-[#2D2D2D]',
    bgAccent: 'bg-[#F5F0E8]',
    textPrimary: 'text-[#333333]',
    textMuted: 'text-[#666666]',
    textLight: 'text-white',
    borderLight: 'border-[#F5F0E8]',
    borderDark: 'border-[#B8860B]',
  },

  banner: {
    show: false,
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  footer: {
    copyright: 'Bigwood Bathrooms & Kitchens',
    nav: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      instagram: '',
      facebook: '',
      linkedin: '',
      twitter: '',
      tiktok: '',
      youtube: '',
      tripadvisor: '',
    },
  },

  hero: {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2340&auto=format&fit=crop',
    imageAlt: 'Modern luxury bathroom with elegant fixtures',
    heading: 'Quality Bathrooms, Kitchens & Tiling',
    subheading: 'Transforming your home with expert craftsmanship',
    ctaText: 'Get a Quote',
    ctaHref: '/contact',
    secondaryCtaText: 'View Our Work',
    secondaryCtaHref: '#projects',
  },

  welcome: {
    heading: 'Welcome to Bigwood Bathrooms & Kitchens',
    content: `We are a trusted local business specialising in high-quality bathroom installations, kitchen fitting, and professional tiling services. With years of experience in the trade, we take pride in delivering exceptional results that transform your living spaces.

From complete bathroom renovations to stunning kitchen makeovers and precision tiling work, our skilled team handles every project with meticulous attention to detail. We work closely with our clients to understand their vision and bring it to life, ensuring complete satisfaction every time.`,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2340&auto=format&fit=crop',
    imageAlt: 'Beautiful modern kitchen installation',
  },

  services: {
    heading: 'Our Services',
    subheading: 'Comprehensive solutions for your home improvement needs',
    items: [
      {
        title: 'Bathroom Fitting',
        description: 'Complete bathroom installations from design to completion. We handle everything including plumbing, tiling, and fixtures.',
        icon: 'bath',
        features: [
          'Full bathroom design consultation',
          'Complete installation service',
          'Plumbing and electrical work',
          'High-quality fixtures and fittings',
          'Wet room installations',
          'Accessible bathroom solutions',
        ],
      },
      {
        title: 'Kitchen Installation',
        description: 'Professional kitchen fitting services. Transform your kitchen with our expert installation and attention to detail.',
        icon: 'kitchen',
        features: [
          'Kitchen design and planning',
          'Cabinet and worktop installation',
          'Appliance fitting',
          'Plumbing and electrical connections',
          'Splashback and tiling',
          'Complete project management',
        ],
      },
      {
        title: 'Tiling',
        description: 'Expert wall and floor tiling for bathrooms, kitchens, and throughout your home. Precision cuts and flawless finishes.',
        icon: 'grid',
        features: [
          'Wall and floor tiling',
          'Natural stone installation',
          'Porcelain and ceramic tiles',
          'Mosaic and feature walls',
          'Underfloor heating compatible',
          'Waterproofing and tanking',
        ],
      },
      {
        title: 'Renovations',
        description: 'Full renovation services to modernise and refresh your bathroom or kitchen. Complete transformation guaranteed.',
        icon: 'home',
        features: [
          'Complete room renovations',
          'Structural modifications',
          'Plumbing upgrades',
          'Electrical rewiring',
          'Plastering and finishing',
          'Project coordination',
        ],
      },
      {
        title: 'Repairs & Maintenance',
        description: 'Quick and reliable repair services for all bathroom and kitchen issues. From leaky taps to broken tiles.',
        icon: 'wrench',
        features: [
          'Tap and shower repairs',
          'Toilet and cistern fixes',
          'Tile replacement',
          'Grouting and resealing',
          'Leak detection and repair',
          'General maintenance',
        ],
      },
    ],
  },

  whyChooseUs: {
    heading: 'Why Choose Us',
    subheading: 'Quality workmanship you can trust',
    items: [
      {
        title: 'Expert Craftsmanship',
        description: 'Years of experience delivering exceptional results with attention to every detail.',
        icon: 'award',
      },
      {
        title: 'Quality Materials',
        description: 'We use only premium materials and products from trusted suppliers.',
        icon: 'gem',
      },
      {
        title: 'Fully Insured',
        description: 'Complete peace of mind with full public liability insurance coverage.',
        icon: 'shield',
      },
      {
        title: 'Free Quotes',
        description: 'Transparent pricing with no hidden costs. Get a free, no-obligation quote.',
        icon: 'calculator',
      },
    ],
  },

  about: {
    heading: 'About Bigwood Bathrooms & Kitchens',
    content: `Bigwood Bathrooms & Kitchens is a dedicated team of skilled tradespeople committed to delivering outstanding bathroom, kitchen, and tiling solutions for homeowners across the local area.

With a passion for quality craftsmanship and an eye for detail, we approach every project—big or small—with the same level of care and professionalism. From initial consultation through to final completion, we work closely with our clients to ensure their vision becomes reality.

Our reputation is built on honest communication, reliable service, and workmanship that speaks for itself. We take pride in leaving every customer completely satisfied with their transformed space.`,
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2340&auto=format&fit=crop',
    imageAlt: 'Professional tradesperson at work',
    features: [
      'Experienced professionals',
      'Quality guaranteed',
      'Fully insured',
      'Local business',
    ],
    stats: [
      { value: '10+', label: 'Years Experience' },
      { value: '500+', label: 'Projects Completed' },
      { value: '100%', label: 'Satisfaction Rate' },
    ],
    values: [
      {
        title: 'Quality First',
        description: 'We never compromise on quality. Every project receives our full attention and expertise.',
      },
      {
        title: 'Customer Focused',
        description: 'Your satisfaction is our priority. We listen, advise, and deliver exactly what you need.',
      },
      {
        title: 'Honest & Transparent',
        description: 'Clear communication and fair pricing. No hidden costs or unexpected surprises.',
      },
      {
        title: 'Reliable Service',
        description: 'We turn up when we say we will and complete projects on time and within budget.',
      },
    ],
  },

  gallery: {
    heading: 'Featured Projects',
    subheading: 'A selection of our recent work',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2340&auto=format&fit=crop',
        alt: 'Modern luxury bathroom renovation',
        category: 'bathroom',
      },
      {
        src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2340&auto=format&fit=crop',
        alt: 'Contemporary kitchen installation',
        category: 'kitchen',
      },
      {
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2340&auto=format&fit=crop',
        alt: 'Elegant bathroom with freestanding bath',
        category: 'bathroom',
      },
      {
        src: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2340&auto=format&fit=crop',
        alt: 'Modern white kitchen design',
        category: 'kitchen',
      },
      {
        src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2340&auto=format&fit=crop',
        alt: 'Professional tile work',
        category: 'tiling',
      },
      {
        src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2340&auto=format&fit=crop',
        alt: 'Stylish bathroom renovation',
        category: 'bathroom',
      },
    ],
  },

  testimonials: {
    heading: 'What Our Clients Say',
    subheading: "Don't just take our word for it",
    entries: [
      {
        quote: 'Absolutely delighted with our new bathroom. The team were professional, tidy, and the finished result exceeded our expectations. Would highly recommend to anyone looking for quality workmanship.',
        name: 'Sarah M.',
        location: 'Local Area',
      },
      {
        quote: 'From start to finish, the service was excellent. They helped us design the perfect kitchen and the installation was completed on time and on budget. Fantastic attention to detail.',
        name: 'James & Emma T.',
        location: 'Local Area',
      },
      {
        quote: 'Had our entire bathroom retiled and a new shower installed. The quality of work is outstanding. Very pleased we chose Bigwood Bathrooms & Kitchens for our project.',
        name: 'David C.',
        location: 'Local Area',
      },
    ],
  },

  contact: {
    heading: 'Get in Touch',
    subheading: 'Ready to start your project? Contact us for a free, no-obligation quote.',
    phone: '07853 397359',
    email: 'info@bigwoodbathrooms.co.uk',
    serviceArea: 'Serving the local area and surrounding regions',
    hours: [
      { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
    form: {
      heading: 'Request a Quote',
      fields: {
        name: { label: 'Name', placeholder: 'Your name' },
        email: { label: 'Email', placeholder: 'you@example.com' },
        phone: { label: 'Phone', placeholder: 'Your phone number' },
        service: {
          label: 'Service Interested In',
          options: [
            'Bathroom Installation',
            'Kitchen Fitting',
            'Tiling',
            'Full Renovation',
            'Repairs & Maintenance',
            'Other',
          ],
        },
        message: { label: 'Message', placeholder: 'Tell us about your project...' },
      },
      button: 'Send Message',
    },
  },

  cta: {
    heading: 'Ready to Transform Your Space?',
    subheading: 'Get in touch today for a free, no-obligation quote',
    phone: '07853 397359',
    buttonText: 'Call Us Now',
    buttonHref: 'tel:07853397359',
    secondaryButtonText: 'Request a Quote',
    secondaryButtonHref: '/contact',
  },
};
