import { faqs } from '../components/home/FaqSection';

const BASE_URL = 'https://tambor.ai';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tambor',
  legalName: 'Driver Seat AI Inc.',
  url: BASE_URL,
  logo: `${BASE_URL}/monogram.png`,
  description:
    'AI-powered TikTok cultural intelligence platform. Track communities, trending content, and audience behavior daily.',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '705 Gold Lake Drive, Suite 250',
    addressLocality: 'Folsom',
    addressRegion: 'CA',
    postalCode: '95630',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'legal@tambor.ai',
    contactType: 'customer service',
  },
  sameAs: [
    'https://x.com/heytambor',
    'https://www.linkedin.com/company/tamborai/',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tambor',
  url: BASE_URL,
  description:
    'AI-powered TikTok cultural intelligence. Track communities, trending content, and audience behavior.',
  publisher: {
    '@type': 'Organization',
    name: 'Tambor',
    url: BASE_URL,
  },
};

export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tambor',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: BASE_URL,
  description:
    'AI-powered TikTok cultural intelligence platform that tracks communities daily, providing trending insights, narrative analysis, and audience behavioral data.',
  offers: {
    '@type': 'Offer',
    price: '180.00',
    priceCurrency: 'USD',
    priceValidUntil: '2026-12-31',
    url: 'https://beta.tambor.ai/',
    availability: 'https://schema.org/InStock',
    description: 'Monthly subscription with 14-day free trial. Includes API access, unlimited audience access, and voting access to request new audiences.',
  },
  brand: {
    '@type': 'Organization',
    name: 'Tambor',
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
