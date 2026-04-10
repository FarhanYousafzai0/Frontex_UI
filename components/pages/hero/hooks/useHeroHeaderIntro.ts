"use client";

import { useEffect } from "react";
import gsap from "gsap";

type IntroDoneRef = React.MutableRefObject<boolean>;
type HeaderRef = React.RefObject<HTMLElement | null>;

export function useHeroHeaderIntro(headerRef: HeaderRef, introDoneRef: IntroDoneRef) {
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const children = header.querySelectorAll(":scope > *");
    const naturalHeight = header.offsetHeight;

    gsap.set(header, { width: "60px", height: naturalHeight, opacity: 0, overflow: "hidden" });
    gsap.set(children, { opacity: 0, visibility: "hidden" });

    const tl = gsap.timeline({
      delay: 0.3,
      onComplete: () => {
        gsap.set(header, { overflow: "", height: "" });
        introDoneRef.current = true;
      },
    });

    tl.to(header, { opacity: 1, duration: 0.25, ease: "power2.out" });
    tl.to(header, { width: "100%", duration: 0.9, ease: "power3.inOut" });
    tl.set(children, { visibility: "visible" });
    tl.to(children, { opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" });

    return () => tl.kill();
  }, [headerRef, introDoneRef]);
}
