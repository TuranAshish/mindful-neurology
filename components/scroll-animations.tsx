"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animatedElements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));

    if (prefersReducedMotion) {
      animatedElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    animatedElements.forEach((element) => revealObserver.observe(element));

    const tiltCards = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt-card]"));

    function handlePointerMove(event: PointerEvent) {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
      card.style.setProperty("--shine-x", `${((x + 0.5) * 100).toFixed(2)}%`);
      card.style.setProperty("--shine-y", `${((y + 0.5) * 100).toFixed(2)}%`);
    }

    function handlePointerLeave(event: PointerEvent) {
      const card = event.currentTarget as HTMLElement;
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--shine-x", "50%");
      card.style.setProperty("--shine-y", "50%");
    }

    tiltCards.forEach((card) => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--shine-x", "50%");
      card.style.setProperty("--shine-y", "50%");
      card.addEventListener("pointermove", handlePointerMove);
      card.addEventListener("pointerleave", handlePointerLeave);
    });

    return () => {
      revealObserver.disconnect();
      root.classList.remove("motion-ready");
      tiltCards.forEach((card) => {
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
      });
    };
  }, []);

  return null;
}
