"use client";

import { useEffect } from "react";

type VideoRef = React.RefObject<HTMLVideoElement | null>;

export function useHeroVideoFadeLoop(videoRef: VideoRef) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const fadeDuration = 0.5;
    let rafId = 0;

    const updateOpacity = () => {
      const { currentTime, duration } = video;
      if (duration && Number.isFinite(duration)) {
        let opacity = 1;
        if (currentTime < fadeDuration) opacity = currentTime / fadeDuration;
        else if (duration - currentTime < fadeDuration) {
          opacity = Math.max((duration - currentTime) / fadeDuration, 0);
        }
        video.style.opacity = `${opacity}`;
      }
      rafId = window.requestAnimationFrame(updateOpacity);
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      window.setTimeout(() => {
        video.currentTime = 0;
        void video.play().catch(() => {});
      }, 100);
    };

    video.style.opacity = "0";
    void video.play().catch(() => {});
    rafId = window.requestAnimationFrame(updateOpacity);
    video.addEventListener("ended", handleEnded);

    return () => {
      window.cancelAnimationFrame(rafId);
      video.removeEventListener("ended", handleEnded);
    };
  }, [videoRef]);
}
