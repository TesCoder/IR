// MarqueeDisplay.js
import { Fragment } from "react";

const ITEMS = ["Ivy Ready", "Dream it", "Reach it"];

export default function MarqueeDisplay() {
  return (
    <div className="marquee-outer m-2">
      <div className="marquee-track marquee-track--a my-3">
        {ITEMS.map((t, i) => (
          <Fragment key={`a-${i}`}>
            <span className="marquee-item pCentered">{t}</span>
            <span className="marquee-sep" aria-hidden>🎓</span>
          </Fragment>
        ))}
      </div>

      <div className="marquee-track marquee-track--b my-3" aria-hidden="true">
        {ITEMS.map((t, i) => (
          <Fragment key={`b-${i}`}>
            <span className="marquee-item pCentered">{t}</span>
            <span className="marquee-sep" aria-hidden>🎓</span>
          </Fragment>
        ))}
      </div>

      <div className="marquee-track marquee-track--c my-3" aria-hidden="true">
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
