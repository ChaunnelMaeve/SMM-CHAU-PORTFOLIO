import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  author?: string;
  structuredData?: any;
  noindex?: boolean;
}

const defaultTitle = 'Chaunnel Maeve Cruz - Digital Marketing Strategist & Analytics Specialist';
const defaultDescription = 'Award-winning Digital Marketing Strategist & Analytics Specialist with 7+ years of experience in data-driven marketing, creative design, and technical solutions.';
const defaultKeywords = 'digital marketing, marketing strategist, analytics specialist, SEO expert, social media marketing, data-driven marketing, creative design, web development, business growth, Chaunnel Cruz, marketing consultant';
const defaultOgImage = 'https://chaunnelcruz.xyz/og-image.jpg';
const siteUrl = 'https://chaunnelcruz.xyz';

export default function SEO({
  title,
  description = defaultDescription,
  keywords = defaultKeywords,
  ogImage = defaultOgImage,
  ogType = 'website',
  canonicalUrl,
  author = 'Chaunnel Maeve Cruz',
  structuredData,
  noindex = false,
}: SEOProps) {
  const pageTitle = title ? `${title} | Chaunnel Cruz` : defaultTitle;
  const canonical = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : siteUrl);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Chaunnel Cruz Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@chaunnel" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}