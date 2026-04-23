import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "left" | "right" | "scale" | "blur";

export function FadeInSection({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hydrated, setHydrated] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000);
          observer.unobserve(el);
        }
      },
      { rootMargin: "-40px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initialMap: Record<Variant, string> = {
    up: "opacity-0 translate-y-10",
    left: "opacity-0 -translate-x-10",
    right: "opacity-0 translate-x-10",
    scale: "opacity-0 scale-[0.96]",
    blur: "opacity-0 blur-[6px] translate-y-6",
  };
  const finalCls = "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0";

  // Before hydration, show content (SSR). After hydration, animate.
  const animClass = hydrated ? (visible ? finalCls : initialMap[variant]) : "";

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] ${animClass} ${className}`}
    >
      {children}
    </div>
  );
}
