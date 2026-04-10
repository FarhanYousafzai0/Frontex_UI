"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";

export function SmoothScrollProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.45,
      smoothWheel: true,
      syncTouch: false,
    });

    const update = (time: number) => {
      // GSAP ticker time is in seconds while Lenis expects milliseconds.
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}
