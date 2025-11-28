// Schema.org structured data helpers
// All schemas use data found from your existing site

export function OrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ivy Ready",
    "legalName": "Ivy Ready LLC",
    "url": "https://ivyready.com",
    "logo": "https://ivyready.com/images/logo-white.png",
    "description": "Ivy Ready's team is made up of former admission officers and graduates from top schools who have extensive experience in supporting students with college planning and admission. Our mission is to provide a personalized admission strategy for each student.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-650-383-0352",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/ivyready"
    ]
  };
}

export function ServiceSchema({ serviceName, description, priceRange }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Ivy Ready"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    ...(priceRange && {
      "offers": {
        "@type": "Offer",
        "priceRange": priceRange
      }
    })
  };
}

export function ArticleSchema({ title, description, author, datePublished, dateModified, image }) {
  const siteUrl = "https://ivyready.com";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/images/logo-circle.png`,
    "author": {
      "@type": "Organization",
      "name": author || "Ivy Ready"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ivy Ready",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/logo-white.png`
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished
  };
}

export function FAQSchema({ faqs }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function BreadcrumbSchema({ items }) {
  const siteUrl = "https://ivyready.com";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteUrl}${item.url}`
    }))
  };
}

// Component to inject schema
export function SchemaScript({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

