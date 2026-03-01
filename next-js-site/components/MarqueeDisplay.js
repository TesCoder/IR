// MarqueeDisplay.js
import { Fragment } from "react";

const BASE_ITEMS = ["Ivy Ready", "Dream it", "Reach it"];
// Repeat 6× so the first half fills any viewport width; the second half is an
// identical copy — animating translateX(0) → translateX(-50%) creates a
// seamless infinite loop regardless of screen width.
const HALF = [...Array(6)].flatMap(() => BASE_ITEMS);
const ALL_ITEMS = [...HALF, ...HALF];

export default function MarqueeDisplay() {
  return (
    <div className="marquee-outer" aria-label="Marquee">
      <div className="marquee-track">
        {ALL_ITEMS.map((t, i) => (
          <Fragment key={i}>
            <span className="marquee-item">{t}</span>
            <span className="marquee-sep" aria-hidden="true">🎓</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
