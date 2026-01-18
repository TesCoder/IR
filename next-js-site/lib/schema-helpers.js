export function buildBlogPostingSchema({ post, site }) {
  const url = `${site.baseUrl}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Organization",
      name: site.orgName,
      url: site.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: site.orgName,
      logo: {
        "@type": "ImageObject",
        url: site.logoUrl,
      },
    },
    image: post.thumbnail ? [post.thumbnail] : undefined,
    url,
  };
}

export function buildBlogCollectionSchema({ site, page }) {
  const url = `${site.baseUrl}/blog`;

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.title,
    description: page.description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: site.siteName,
      url: site.baseUrl,
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: url,
      },
    ],
  };

  return [collection, breadcrumbs];
}
