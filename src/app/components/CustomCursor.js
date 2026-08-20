"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = -100;
    let mouseY = -100;
    let dotX = -100;
    let dotY = -100;
    let isVisible = false;

    // Stars pool for constellation trail
    const stars = [];
    const maxStars = 14;

    for (let i = 0; i < maxStars; i++) {
      const star = document.createElement("div");
      star.className = "cursor-star";
      star.style.width = "3px";
      star.style.height = "3px";
      star.style.background = i % 3 === 0 ? "var(--primary-light)" : i % 3 === 1 ? "var(--secondary-light)" : "var(--accent-light)";
      star.style.boxShadow = i % 3 === 0 ? "0 0 6px var(--primary)" : "0 0 6px var(--secondary)";
      star.style.opacity = "0";
      document.body.appendChild(star);
      stars.push({ el: star, x: -100, y: -100, life: 0 });
    }

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dot.classList.add("vis");
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.classList.remove("vis");
    };

    const handleHover = () => dot.classList.add("hover");
    const handleUnhover = () => dot.classList.remove("hover");

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, input, textarea, .pill, .skill-card, .project-card, .id-card, .channel-item"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    let starIndex = 0;
    let frameId;

    const render = () => {
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;

      if (isVisible && Math.hypot(mouseX - dotX, mouseY - dotY) > 2) {
        const star = stars[starIndex];
        star.x = mouseX + (Math.random() - 0.5) * 10;
        star.y = mouseY + (Math.random() - 0.5) * 10;
        star.life = 1;
        starIndex = (starIndex + 1) % maxStars;
      }

      stars.forEach((s) => {
        if (s.life > 0) {
          s.life -= 0.04;
          s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) scale(${s.life})`;
          s.el.style.opacity = `${s.life * 0.7}`;
        } else {
          s.el.style.opacity = "0";
        }
      });

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(frameId);
      observer.disconnect();
      stars.forEach((s) => s.el.remove());
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
}
