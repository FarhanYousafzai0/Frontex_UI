"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const HOVERABLE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFineMouse = window.matchMedia("(pointer: fine)").matches;
    if (!isFineMouse) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.documentElement.classList.add("has-custom-cursor");
    cursor.style.display = "block";

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.15,
      ease: "power2.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.15,
      ease: "power2.out",
    });

    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        cursor.style.opacity = "1";
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest(HOVERABLE_SELECTOR)) {
        cursor.classList.add("cursor-hovering");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest(HOVERABLE_SELECTOR)) {
        cursor.classList.remove("cursor-hovering");
      }
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    const onMouseEnter = () => {
      if (hasMoved) cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ display: "none", opacity: 0 }}
    />
  );
}
