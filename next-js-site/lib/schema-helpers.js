const TZ_PATTERN = /([+-]\d{2}:?\d{2}|Z)$/;

export function formatIsoWithTimezone(value) {
  if (!value) return undefined;
  const trimmed = typeof value === "string" ? value.trim() : value;
  if (typeof trimmed === "string" && TZ_PATTERN.test(trimmed)) return trimmed;

  const date = new Date(trimmed);
  if (Number.isNaN(date.valueOf())) return undefined;

  const pad = (num) => String(num).padStart(2, "0");
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  const offsetMinutes = -date.getTimezoneOffset();
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const absMinutes = Math.abs(offsetMinutes);
  const offsetHours = pad(Math.floor(absMinutes / 60));
  const offsetMins = pad(absMinutes % 60);

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${sign}${offsetHours}:${offsetMins}`;
}

export function buildBlogPostingSchema({ post, site }) {
  const url = `${site.baseUrl}/blog/${post.slug}`;
  const datePublished = formatIsoWithTimezone(post.date) || post.date;
  const dateModified = formatIsoWithTimezone(post.updated) || datePublished;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description: post.description,
    datePublished,
    dateModified,
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
