// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SITE_NAME = "SM Junior College and Academy";
const BASE_URL = "https://smjuniorcollegeandacademy.com"; // update when domain is live
const DEFAULT_OG_IMAGE = `${BASE_URL}/sm-logo.png`;

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  structuredData,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Inspiring Minds, Igniting Change`;

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE_NAME} />
      {canonical && <link rel="canonical" href={`${BASE_URL}${canonical}`} />}

      {/* ── Open Graph ── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} logo`} />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonical && <meta property="og:url" content={`${BASE_URL}${canonical}`} />}

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── Structured Data (JSON-LD) ── */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
