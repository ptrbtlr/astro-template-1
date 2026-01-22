// src/data/site.config.ts
export const site = {
  business: {
    name: "Austin Sparkle Cleaning",
    tagline: "Reliable, insured cleaning in Austin, TX",
    phone: "(512) 555-0123",
    email: "hello@austinsparkle.com",
    address: "Austin, TX",
  },

  brand: {
    logoText: "Austin Sparkle",
    // logoUrl: "/logo.svg",
  },

  social: {
    googleReviewUrl: "",
    instagram: "",
    facebook: "",
  },

  hours: [
    { days: "Mon–Fri", hours: "8am–6pm" },
    { days: "Sat", hours: "9am–2pm" },
    { days: "Sun", hours: "Closed" },
  ],

  trust: [
    { title: "Insured & local", desc: "Austin-based team you can trust" },
    { title: "Fast quotes", desc: "Same-day responses when possible" },
    { title: "Flexible scheduling", desc: "Weekly, monthly, or one-time" },
    { title: "Satisfaction first", desc: "We make it right if needed" },
  ],

  cta: {
    primaryText: "Get a Free Quote",
    primaryHref: "/#quote",
    secondaryText: "Call Now",
    secondaryHref: "tel:+15125550123",
  },

  services: [
    { title: "Standard Cleaning", desc: "Weekly, bi-weekly, or monthly maintenance cleanings." },
    { title: "Deep Cleaning", desc: "A top-to-bottom reset for kitchens, baths, and living areas." },
    { title: "Move In / Move Out", desc: "Get the place spotless before keys change hands." },
  ],

  serviceAreas: ["Austin", "Round Rock", "Pflugerville", "Cedar Park"],

  testimonials: [
    { name: "Jamie R.", quote: "Best cleaners we’ve hired. On time and super thorough." },
    { name: "Chris L.", quote: "Easy booking and the place looked brand new." },
  ],

  contact: {
    notificationEmail: "hello@austinsparkle.com",
  },

  seo: {
    title: "Austin Sparkle Cleaning | Home & Apartment Cleaning",
    description: "Insured residential cleaning serving Austin and surrounding areas. Get a free quote today.",
    city: "Austin",
    state: "TX",
    serviceKeyword: "House Cleaning",
  },

  theme: "emerald",
} as const;
