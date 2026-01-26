const TZ_PATTERN = /([+-]\d{2}:?\d{2}|Z)$/;
const PACIFIC_TZ = "America/Los_Angeles";

export function formatIsoWithTimezone(value, { timeZone = PACIFIC_TZ } = {}) {
  if (!value) return undefined;
  const trimmed = typeof value === "string" ? value.trim() : value;
  if (typeof trimmed === "string" && TZ_PATTERN.test(trimmed)) return trimmed;

  const date = new Date(trimmed);
  if (Number.isNaN(date.valueOf())) return undefined;

  const pad = (num) => String(num).padStart(2, "0");

  try {
    const zoned = new Date(
      date.toLocaleString("en-US", {
        timeZone,
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );

    const offsetMinutes = Math.round((date.getTime() - zoned.getTime()) / 60000);
    const sign = offsetMinutes >= 0 ? "-" : "+";
    const absMinutes = Math.abs(offsetMinutes);
    const offsetHours = pad(Math.floor(absMinutes / 60));
    const offsetMins = pad(absMinutes % 60);

    const year = zoned.getFullYear();
    const month = pad(zoned.getMonth() + 1);
    const day = pad(zoned.getDate());
    const hours = pad(zoned.getHours());
    const minutes = pad(zoned.getMinutes());
    const seconds = pad(zoned.getSeconds());

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${sign}${offsetHours}:${offsetMins}`;
  } catch {
    // Fallback to local timezone formatting if Intl time zone fails
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
}

export function buildBlogPostingSchema({ post, site }) {
  const url = `${site.baseUrl}/blog/${post.slug}`;
  const datePublished = formatIsoWithTimezone(post.date) || post.date;
  const dateModified = formatIsoWithTimezone(post.updated) || datePublished;
  const authorName = post.author || site.orgName;
  const authorUrl = post.authorUrl || site.baseUrl;

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
      name: authorName,
      url: authorUrl,
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
    keywords: Array.isArray(post.tags) ? post.tags.join(", ") : undefined,
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
