export const SITE_URL = 'https://lorenmuse.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/loren.muse.model/';

export const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Loren Muse',
  url: SITE_URL,
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
