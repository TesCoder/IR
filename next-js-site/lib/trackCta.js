export function trackCtaClick({ location, text }) {
  try {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "cta_click",
        location,
        text,
      });
    }
  } catch (err) {
    // Do not block UI if tracking fails
    console.warn("dataLayer push failed", err);
  }
}

