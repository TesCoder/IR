const ALLOWLIST_PREFIXES = ["/blog/", "/resources/"];
const ALLOWLIST_EXACT = ["/free-consultation"];

export function isAllowlistedDestination(destination) {
  if (!destination || typeof destination !== "string") return false;
  if (ALLOWLIST_EXACT.includes(destination)) return true;
  return ALLOWLIST_PREFIXES.some((prefix) => destination.startsWith(prefix));
}

export function filterAllowlistedLinks(links = []) {
  return links.filter((link) => {
    const href = link?.href || link?.destination || link?.slug;
    return isAllowlistedDestination(href);
  });
}
