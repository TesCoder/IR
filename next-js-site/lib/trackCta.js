export function trackCtaClick({ location, text, destination }) {
  try {
    if (typeof window === "undefined") return;

    // Ensure dataLayer exists so CTA pushes always fire
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "cta_click",
      location,
      text,
      destination,
    });
  } catch (err) {
    // Do not block UI if tracking fails
    console.warn("dataLayer push failed", err);
  }
}

