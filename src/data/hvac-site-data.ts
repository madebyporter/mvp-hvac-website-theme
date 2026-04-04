export const site = {
  name: 'North Coast Heating & Cooling',
  logoInitials: 'North Coast',
  /** Demo placeholder — replace with your main line. */
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

/** Hero specials carousel — swap copy, links, and images per deployment. */
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
  },
  {
    slug: 'heating',
    name: 'Heating & furnaces',
    summary:
      'Furnace and heat-pump service with clear diagnostics, safety checks, and installs sized for Cleveland winters—without upsells you do not need.',
  },
  {
    slug: 'maintenance',
    name: 'Maintenance',
    summary:
      'Seasonal tune-ups and filter reminders that cut emergency calls, keep warranties valid, and help your system run efficiently year-round.',
  },
  {
    slug: 'commercial-hvac',
    name: 'Commercial HVAC',
    summary:
      'Rooftop units, split systems, and tenant comfort for offices and retail—scheduled service and after-hours options when downtime costs money.',
  },
];

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
