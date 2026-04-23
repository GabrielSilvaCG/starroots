import { useEffect, useState } from "react";

/**
 * Folhas flutuantes em SVG, animadas com CSS, posicionadas em camadas atrás
 * do conteúdo. Usadas como atmosfera global — sutis, com baixa opacidade.
 */

type LeafConfig = {
  left: string;
  size: number;
  delay: string;
  duration: string;
  rotate: number;
  opacity: number;
  drift: string;
};

const LEAVES: LeafConfig[] = [
  { left: "6%",  size: 28, delay: "0s",   duration: "22s", rotate: -12, opacity: 0.10, drift: "40px" },
  { left: "18%", size: 18, delay: "-6s",  duration: "28s", rotate: 24,  opacity: 0.07, drift: "-30px" },
  { left: "32%", size: 34, delay: "-12s", duration: "26s", rotate: -30, opacity: 0.09, drift: "55px" },
  { left: "47%", size: 22, delay: "-3s",  duration: "30s", rotate: 14,  opacity: 0.06, drift: "-45px" },
  { left: "61%", size: 30, delay: "-18s", duration: "24s", rotate: -8,  opacity: 0.10, drift: "35px" },
  { left: "74%", size: 20, delay: "-9s",  duration: "32s", rotate: 40,  opacity: 0.07, drift: "-25px" },
  { left: "86%", size: 32, delay: "-15s", duration: "27s", rotate: -22, opacity: 0.09, drift: "50px" },
  { left: "94%", size: 16, delay: "-2s",  duration: "34s", rotate: 18,  opacity: 0.06, drift: "-20px" },
];

function Leaf({ size, rotate }: { size: number; rotate: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M12 2C7 4 4 8 4 13c0 4 3 8 8 9 0-5 2-9 6-12-1-1-3-2-6-2 1-2 3-4 6-5-2-1-4-1-6-1z"
        fill="currentColor"
      />
      <path
        d="M12 11c-2 2-3 5-3 8"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="0.6"
        fill="none"
      />
    </svg>
  );
}

export function FloatingLeaves({ className = "" }: { className?: string }) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden text-primary ${className}`}
      aria-hidden="true"
    >
      {LEAVES.map((l, i) => (
        <span
          key={i}
          className="leaf-float absolute -top-10"
          style={{
            left: l.left,
            opacity: l.opacity,
            animationDelay: l.delay,
            animationDuration: l.duration,
            // custom property used by keyframes for horizontal drift
            ["--drift" as never]: l.drift,
          }}
        >
          <Leaf size={l.size} rotate={l.rotate} />
        </span>
      ))}
    </div>
  );
}
