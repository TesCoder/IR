// MarqueeDisplay.js
import { Fragment } from "react";

const ITEMS = ["Ivy Ready", "Dream it", "Reach it"];

export default function MarqueeDisplay() {
  return (
    <div className="marquee-outer">
      <div className="marquee-track marquee-track--a p-2">
        {ITEMS.map((t, i) => (
          <Fragment key={`a-${i}`}>
            <span className="marquee-item pCentered">{t}</span>
            <span className="marquee-sep" aria-hidden>🎓</span>
          </Fragment>
        ))}
      </div>

      <div className="marquee-track marquee-track--b p-2" aria-hidden="true">
        {ITEMS.map((t, i) => (
          <Fragment key={`b-${i}`}>
            <span className="marquee-item pCentered">{t}</span>
            <span className="marquee-sep" aria-hidden>🎓</span>
          </Fragment>
        ))}
      </div>

      <div className="marquee-track marquee-track--c p-2" aria-hidden="true">
        {ITEMS.map((t, i) => (
          <Fragment key={`c-${i}`}>
            <span className="marquee-item pCentered">{t}</span>
            <span className="marquee-sep" aria-hidden>🎓</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
