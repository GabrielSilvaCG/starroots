import { useEffect, useRef, useState, type ReactNode } from "react";

export function FadeInSection({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
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

  // Before hydration, show content (SSR). After hydration, use animation.
  const animClass = hydrated
    ? (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")
    : "";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animClass} ${className}`}
    >
      {children}
    </div>
  );
}
