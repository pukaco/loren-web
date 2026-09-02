export const SITE_URL = 'https://lorenmuse.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/loren.muse.model/';
export const CONTACT_EMAIL = 'hello@lorenmuse.com';

// Set to the final Amazon listing URL when available — the book page CTA
// switches from a disabled "Coming soon" button to a real link automatically.
export const AMAZON_URL: string | null = null;

export const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Loren Muse',
  url: SITE_URL,
  email: CONTACT_EMAIL,
  description:
    'Loren Muse is a virtual influencer, digital personality and author interested in the increasingly peculiar relationship between people and the identities they encounter online.',
  sameAs: [INSTAGRAM_URL],
} as const;

export const BOOK_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'She Lived Here, Apparently',
  author: {
    '@type': 'Person',
    name: 'Loren Muse',
  },
  genre: 'Contemporary humorous fiction',
  datePublished: '2026',
  url: `${SITE_URL}/book`,
} as const;
