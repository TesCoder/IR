import { isAllowlistedDestination } from "./railAllowlist";

/**
 * Select rail items for a given slot.
 *
 * Applies in order:
 *   1. Self-link removal (currentPath)
 *   2. Allowlist + blocklist filtering via railAllowlist
 *   3. Destination deduplication (seen set)
 *   4. Minimum quality bar — returns [] if fewer than minItems qualify
 *      (caller should hide the slot when this returns empty)
 *
 * @param {string} currentPath  — the current page path (e.g. "/blog/holistic-admissions-myths")
 * @param {Array}  candidates   — array of rail item objects from railData or page-level lists
 * @param {Object} opts
 * @param {number} opts.maxItems — max items to return (default 3)
 * @param {number} opts.minItems — minimum to render; return [] if below (default 2)
 */
export function selectRailItems(
  currentPath,
  candidates = [],
  { maxItems = 3, minItems = 2 } = {}
) {
  // Guard: max 1 service CTA per slot render — keep only the first (highest-priority) service item.
  // Applies to every code path including FALLBACK_ITEMS.
  let serviceSeen = false;
  const guardedCandidates = candidates.filter((item) => {
    if (item.type === "service") {
      if (serviceSeen) return false;
      serviceSeen = true;
    }
    return true;
  });

  const seen = new Set([currentPath]);
  const results = [];

  for (const item of guardedCandidates) {
    const dest = item.destination || item.slug || item.href;
    if (!dest || seen.has(dest)) continue;
    if (!isAllowlistedDestination(dest)) continue;
    seen.add(dest);
    results.push(item);
    if (results.length >= maxItems) break;
  }

  return results.length >= minItems ? results : [];
}

/**
 * Filter items from the global rail pool by tag intersection.
 *
 * Items with more matching tags are sorted first.
 * Items with zero matches are excluded.
 * If targetTags is empty, all items pass through unfiltered.
 *
 * Tags are matched case-insensitively using the exact string from each array.
 * Ensure item tags use the same vocabulary as page frontmatter tags.
 *
 * @param {Array}  items       — array of rail item objects (from RAIL_ITEMS)
 * @param {Array}  targetTags  — tags from the current page (frontmatter or page config)
 */
export function filterByTags(items = [], targetTags = []) {
  if (!targetTags.length) return items;

  const tagSet = new Set(targetTags.map((t) => String(t).toLowerCase()));

  return items
    .map((item) => {
      const matchCount = (item.tags || []).filter((t) =>
        tagSet.has(String(t).toLowerCase())
      ).length;
      return { item, matchCount };
    })
    .filter(({ matchCount }) => matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .map(({ item }) => item);
}
