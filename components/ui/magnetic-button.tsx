"use client";

import { useRef, useCallback, type ReactNode } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  innerStrength?: number;
}

export function MagneticButton({
  children,
  className,
  strength = 0.4,
  innerStrength = 0.2,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      const maxDisplacement = 12;
      const clampedX = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaX));
      const clampedY = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaY));

      gsap.to(el, {
        x: clampedX,
        y: clampedY,
        duration: 0.35,
        ease: "power3.out",
        overwrite: true,
      });

      const inner = el.firstElementChild as HTMLElement | null;
      if (inner) {
        const innerDeltaX = (e.clientX - centerX) * innerStrength;
        const innerDeltaY = (e.clientY - centerY) * innerStrength;

        gsap.to(inner, {
          x: Math.max(-6, Math.min(6, innerDeltaX)),
          y: Math.max(-6, Math.min(6, innerDeltaY)),
          duration: 0.35,
          ease: "power3.out",
          overwrite: true,
        });
      }
    },
    [strength, innerStrength],
  );

  const handleMouseLeave = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
      overwrite: true,
    });

    const inner = el.firstElementChild as HTMLElement | null;
    if (inner) {
      gsap.to(inner, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
        overwrite: true,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
