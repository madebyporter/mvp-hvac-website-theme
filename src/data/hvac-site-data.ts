export const site = {
  name: 'North Coast Heating & Cooling',
  logoInitials: 'North Coast',
  phoneDisplay: '(216) 555-0142',
  phoneTel: '+12165550142',
  city: 'Cleveland, Ohio',
  tagline: 'Residential and commercial heating and cooling across Greater Cleveland.',
  serviceArea: [
    'Cleveland',
    'Lakewood',
    'Rocky River',
    'Parma',
    'Westlake',
    'North Olmsted',
    'Brecksville',
    'Strongsville',
    'Shaker Heights',
    'Beachwood',
  ],
};

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

/** Homepage section copy and CTAs — landing is code-driven; edit here, not in EmDash PT blocks. */
export const homeLanding = {
  /** Matches Slideshow / hero title tag (`h1` for main page title). */
  slideshowTitleHeadingLevel: 'h1' as 'h1' | 'h2' | 'h3',
  tilesSectionEyebrow: 'Services',
  tilesSectionHeading: 'How we help our customers',
  tilesCtaLabel: 'All services',
  tilesCtaHref: '/services',
  tileCardEyebrow: 'Service',
  blogTeaserEyebrow: 'From the blog',
  blogTeaserHeading:
    'Straight answers on equipment and seasons in Northeast Ohio',
  blogViewAllLabel: 'View all articles →',
};

/** Home hero carousel entries. */
export const heroSpecialSlides = [
  {
    segment: 'Residential',
    title: 'Spring tune-up & safety check',
    blurb:
      'Book before the first heat wave: condenser rinse, electrical and refrigerant checks, and a written summary you can keep for your records.',
    ctaLabel: 'Learn more',
    ctaHref: '/services#maintenance',
    imageSrc:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80',
    imageAlt: 'Bright living space in a modern home',
  },
  {
    segment: 'Commercial',
    title: 'Rooftop unit maintenance agreements',
    blurb:
      'Predictable visits for RTUs and split systems—filter cycles, belt and bearing checks, and priority scheduling when tenants complain.',
    ctaLabel: 'View commercial HVAC',
    ctaHref: '/services#commercial-hvac',
    imageSrc:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80',
    imageAlt: 'Glass office towers downtown',
  },
  {
    segment: 'Industrial',
    title: 'Planned shutdown & startup support',
    blurb:
      'Coordinate with your maintenance window—lockout-ready crews for make-up air, exhaust, and process cooling so you hit production dates.',
    ctaLabel: 'Industrial capabilities',
    ctaHref: '/services#commercial-hvac',
    imageSrc:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&auto=format&fit=crop&q=80',
    imageAlt: 'Technician reviewing equipment in an industrial setting',
  },
  {
    segment: 'Multi-family',
    title: 'Seasonal changeover for common areas',
    blurb:
      'Hallways, amenity spaces, and boiler rooms—batch visits across your portfolio with one point of contact and consistent reporting.',
    ctaLabel: 'Talk to our team',
    ctaHref: '/services',
    imageSrc:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&auto=format&fit=crop&q=80',
    imageAlt: 'Apartment building exterior',
  },
];

export const services = [
  {
    slug: 'air-conditioning',
    name: 'Air conditioning',
    summary:
      'Repairs when your AC quits or struggles in humid weather, tune-ups before peak season, and honest guidance when replacement makes more sense than another fix.',
    imageSrc: '/images/airconditioning.png',
    imageAlt:
      'Residential outdoor AC condenser with technician adjusting service gauges',
  },
  {
    slug: 'heating',
    name: 'Heating & furnaces',
    summary:
      'Furnace and heat-pump service with clear diagnostics, safety checks, and installs sized for Cleveland winters—without upsells you do not need.',
    imageSrc: '/images/heating.png',
    imageAlt: 'Basement furnace with technician performing a safety inspection',
  },
  {
    slug: 'maintenance',
    name: 'Maintenance',
    summary:
      'Seasonal tune-ups and filter reminders that cut emergency calls, keep warranties valid, and help your system run efficiently year-round.',
    imageSrc: '/images/maintenance.png',
    imageAlt: 'HVAC air handler with clean filter and seasonal tune-up checklist',
  },
  {
    slug: 'commercial-hvac',
    name: 'Commercial HVAC',
    summary:
      'Rooftop units, split systems, and tenant comfort for offices and retail—scheduled service and after-hours options when downtime costs money.',
    imageSrc: '/images/commercial.png',
    imageAlt: 'Commercial rooftop HVAC units on a flat building roof',
  },
];

/** About page: mission, team, reviews, credentials, careers. */
export const aboutContent = {
  heroBlurb: `${site.name} is a Cleveland-area team built around clear diagnostics, fair options, and techs you can recognize from one visit to the next.`,

  mission: {
    label: 'Mission',
    headline: 'Comfort without the runaround',
    body: [
      'We help homeowners and light commercial customers stay comfortable without the runaround: show what failed, explain choices in plain language, and only move forward when you are ready.',
      'Our default is repeat service—right-sized equipment, documented model and serial numbers, and maintenance plans that reduce emergency calls through Ohio humidity and lake-effect cold.',
    ],
  },

  history: {
    title: 'Our story',
    intro:
      'Started as a two-truck crew serving the West Side and inner-ring suburbs, we grew by referral—neighbors telling neighbors the invoice matched the conversation.',
    milestones: [
      { year: '2008', text: 'Founded with a focus on residential service and honest replacement quotes.' },
      { year: '2014', text: 'Added commercial maintenance for retail and office rooftops and splits.' },
      { year: '2020', text: 'Formalized maintenance agreements and same-day priority for plan members in peak season.' },
      { year: 'Today', text: 'Dispatch from Greater Cleveland with stocked trucks and digital summaries after every visit.' },
    ],
  },

  team: [
    {
      name: 'Marcus Webb',
      role: 'Owner & general manager',
      bio: 'Runs scheduling, estimates, and quality checks—still rides along on complex diagnostics.',
      imageSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80',
      imageAlt: 'Portrait of a man in business attire',
    },
    {
      name: 'Elena Ruiz',
      role: 'Service manager',
      bio: 'Coordinates technicians, parts, and callbacks so follow-through does not fall through the cracks.',
      imageSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
      imageAlt: 'Portrait of a woman smiling professionally',
    },
    {
      name: 'James Okonkwo',
      role: 'Lead install technician',
      bio: 'Furnace and AC changeouts, load verification, and clean handoffs to the service team.',
      imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
      imageAlt: 'Portrait of a man in a casual shirt',
    },
    {
      name: 'Sarah Kim',
      role: 'Customer experience lead',
      bio: 'First voice on the phone—windows, reminders, and paperwork so you know what to expect.',
      imageSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80',
      imageAlt: 'Portrait of a woman with a friendly expression',
    },
  ],

  reviews: [
    {
      quote:
        'They explained the capacitor versus the whole condenser, gave a written price for both, and did not push when I chose the repair.',
      attribution: 'Mike R., Lakewood',
      rating: 5,
    },
    {
      quote:
        'We use them for two small retail locations. Invoicing is consistent and they actually show up in the window they quote.',
      attribution: 'Jennifer K., Rocky River',
      rating: 5,
    },
    {
      quote:
        'Furnace died in January. They had the heat running the same day and followed up after the install with filter sizes on the receipt.',
      attribution: 'David P., Parma',
      rating: 5,
    },
  ],

  awards: [
    'Ohio licensed & insured HVAC contractor',
    'EPA Section 608 certified refrigerant handling',
    'Written estimates on system replacements',
    'Permits pulled when municipal code requires',
  ],

  clientCategories: [
    'Multifamily property managers',
    'West Side retail & professional offices',
    'Schools & community buildings',
    'Single-family homes — Lakewood to Strongsville',
  ],

  jobs: [
    {
      title: 'HVAC service technician',
      summary:
        'Diagnose and repair residential and light commercial equipment. Valid driver license and EPA 608 preferred; we support ongoing training.',
    },
    {
      title: 'Install apprentice / helper',
      summary:
        'Assist on changeouts, sheet metal, and startup checks. Ideal if you are early-career and want a path to install lead.',
    },
    {
      title: 'Dispatcher / customer service',
      summary:
        'Coordinate calls, technician routing, and customer updates. Strong phone skills and calm peak-season pacing matter more than HVAC experience.',
    },
  ],
};

export const posts = [
  {
    slug: 'when-ac-repair-vs-replace',
    title: 'When AC repair stops making sense—and what to ask before you replace',
    category: 'Cooling',
    date: 'March 2026',
    excerpt:
      'Age, refrigerant type, and repair cost versus a new efficiency rating: how to decide with a technician you trust.',
  },
  {
    slug: 'spring-hvac-checklist-cleveland',
    title: "A Cleveland homeowner's spring HVAC checklist",
    category: 'Maintenance',
    date: 'March 2026',
    excerpt:
      'Outdoor coil clearance, thermostat settings, and one call that can prevent a summer breakdown.',
  },
  {
    slug: 'furnace-airflow-warning-signs',
    title: 'Signs your furnace airflow is off before it becomes an emergency',
    category: 'Heating',
    date: 'February 2026',
    excerpt:
      'Uneven rooms, long run times, and odd sounds—what they often mean and when to schedule service.',
  },
];
