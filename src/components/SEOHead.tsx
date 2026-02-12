import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object[];
}

const SITE_NAME = 'Tambor';
const DEFAULT_TITLE = 'Tambor | AI-Powered TikTok Cultural Intelligence';
const DEFAULT_DESCRIPTION =
  'Tambor tracks TikTok communities daily so you don\'t have to doom-scroll. Get instant cultural intelligence, trending insights, and audience analysis. Daily. Clear. Zero guesswork.';
const BASE_URL = 'https://tambor.ai';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

function SEOHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical = BASE_URL,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  structuredData = [],
}: SEOHeadProps) {
  const fullCanonical = canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@heytambor" />
      <meta name="twitter:creator" content="@heytambor" />

      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEOHead;
