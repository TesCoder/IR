// OrbitGlowButton.jsx
import React from "react";
import { Button } from "./Button"; // same Button you already have

/*
Add circular motion
Glow layer (soft, blurred gradient)
      motion-safe:[animation:spin_10s_linear_infinite]
      group-hover:opacity-90 group-hover:motion-safe:[animation:spin_4s_linear_infinite]

Glow layer (hard)
    motion-safe:[animation:spin_8s_linear_infinite]
    group-hover:motion-safe:[animation:spin_3s_linear_infinite]

*/

export function OrbitGlowButton({
  label,
  className = "",
  ringWidth = 2,
  children,
  ...others
}) {
  return (
    <div className="relative inline-flex items-center justify-center group">
      {/* Glow layer (soft, blurred gradient) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-full blur-l opacity-70 
        
                   bg-[conic-gradient(at_50%_50%,#7dd3fc_0deg,#a78bfa_90deg,#f472b6_180deg,#22d3ee_270deg,#7dd3fc_360deg)]
                   
                   "
      />

      {/* Ring layer (crisp orbit stroke) */}
      <span
        aria-hidden
        style={{ padding: ringWidth }}
        className="absolute inset-0 rounded-full box-content
                   
                   bg-[conic-gradient(from_0deg_at_50%_50%,#7dd3fc,#a78bfa,#f472b6,#22d3ee,#7dd3fc)]

                   "
      >
        {/* Mask to show only the ring (hollow center) */}
        <span
          className="block h-full w-full rounded-full bg-transparent"
          style={{
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 1px))",
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 1px))",
          }}
        />
      </span>

      {/* Actual clickable button */}
      <Button
        className={`btn relative z-[1] font-bold
              bg-ivy-red text-white transition
              hover:bg-ivy-blue active:scale-[0.99]
              disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
        {...others}
      >
        {label ?? children}
      </Button>
    </div>
  );
}
