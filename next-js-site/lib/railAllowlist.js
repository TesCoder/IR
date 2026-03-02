const ALLOWLIST_PREFIXES = ["/blog/", "/resources/", "/services/"];
const ALLOWLIST_EXACT = ["/free-consultation"];
const BLOCKLIST_PREFIXES = ["/packages/"];

export function isAllowlistedDestination(destination) {
  if (!destination || typeof destination !== "string") return false;
  if (BLOCKLIST_PREFIXES.some((p) => destination.startsWith(p))) return false;
  if (ALLOWLIST_EXACT.includes(destination)) return true;
  return ALLOWLIST_PREFIXES.some((prefix) => destination.startsWith(prefix));
}

export function filterAllowlistedLinks(links = []) {
  return links.filter((link) => {
    const href = link?.href || link?.destination || link?.slug;
    return isAllowlistedDestination(href);
  });
}
