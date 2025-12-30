import Head from 'next/head';

export default function SEOHead({ 
  title, 
  description, 
  image = "/images/logo-circle.png",
  url = "",
  type = "website",
  article = null
}) {
  const siteName = "Ivy Ready College Admissions Consulting";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const siteUrl = "https://ivyready.com";
  const fullUrl = `${siteUrl}${url}`;
  const ogImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article-specific (if blog post) */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author || siteName} />
          {article.tags && article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Head>
  );
}

