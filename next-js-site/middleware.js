import { NextResponse } from "next/server";

/**
 * Fix clients that percent-encode URL fragments into the path.
 *
 * Example:
 *   /about-us%23james   ->   /about-us#james
 *
 * Some email clients (e.g. Apple Mail) can occasionally encode `#` as `%23`,
 * turning an in-page anchor link into a non-existent route.
 */
export function middleware(request) {
  // Only redirect safe idempotent requests.
  const method = request.method || "GET";
  if (method !== "GET" && method !== "HEAD") {
    return NextResponse.next();
  }

  const url = new URL(request.url);
  const pathname = url.pathname || "/";

  // Handle both single-encoded (%23) and double-encoded (%2523) fragments.
  const normalized = pathname.replace(/%2523/gi, "%23");
  const idx = normalized.toLowerCase().indexOf("%23");
  if (idx === -1) {
    return NextResponse.next();
  }

  const basePath = normalized.slice(0, idx) || "/";
  const fragEncoded = normalized.slice(idx + 3); // after "%23"

  let fragment = fragEncoded;
  try {
    fragment = decodeURIComponent(fragEncoded);
  } catch {
    // If decoding fails, keep raw encoded fragment so we still redirect.
  }

  url.pathname = basePath;
  url.hash = fragment ? `#${fragment}` : "";

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    // Skip Next internals and API routes.
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};

