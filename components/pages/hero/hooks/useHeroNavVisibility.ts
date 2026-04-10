"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

type IntroDoneRef = React.MutableRefObject<boolean>;

export function useHeroNavVisibility(introDoneRef: IntroDoneRef) {
  const [navHidden, setNavHidden] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!introDoneRef.current) return;

    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous + 5) {
      setScrollDirection("down");
      setNavHidden(true);
      return;
    }

    if (latest < previous - 5) {
      setScrollDirection("up");
      setNavHidden(false);
    }
  });

  return { navHidden, scrollDirection };
}
