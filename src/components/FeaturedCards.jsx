import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./FeaturedCards.module.css";

export default function FeaturedCards({ selectedInterests = [] }) {
  const n = selectedInterests.length;
  const PEEK = 68;
  const CARD_H = 160;
  const trackH = n > 0 ? CARD_H + (n - 1) * PEEK : 0;

  const [activeIndex, setActiveIndex] = useState(n - 1); // bottom card active
  const [expandedIndex, setExpandedIndex] = useState(null);

  const viewportRef = useRef(null);
  const scrollVelocity = useRef(0);
  const scrollRaf = useRef(null);
  const touchStartY = useRef(0);

  const SCROLL_FRICTION = 0.88;
  const SCROLL_SENSITIVITY = 0.3;
  const STEP_THRESHOLD = PEEK * 0.6;

  const cardTop = (index) => index * PEEK;

  const getTrackOffset = useCallback(() => {
    const vpH = viewportRef.current?.clientHeight ?? 320;
    const cardMid = cardTop(activeIndex) + CARD_H / 2;
    return vpH / 2 - cardMid;
  }, [activeIndex]);

  const tickScroll = useCallback(() => {
    scrollVelocity.current *= SCROLL_FRICTION;
    if (Math.abs(scrollVelocity.current) > STEP_THRESHOLD) {
      const dir = scrollVelocity.current > 0 ? 1 : -1;

      setActiveIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return 0;
        if (next > n - 1) return n - 1;
        return next;
      });

      scrollVelocity.current -= dir * STEP_THRESHOLD;
    }

    if (Math.abs(scrollVelocity.current) > 2) {
      scrollRaf.current = requestAnimationFrame(tickScroll);
    } else {
      scrollVelocity.current = 0;
      scrollRaf.current = null;
    }
  }, [n]);

  const handleWheel = (e) => {
    if (expandedIndex !== null) return;

    const isAtTop = activeIndex === 0;
    const isAtBottom = activeIndex === n - 1;
    const scrollingUp = e.deltaY < 0;
    const scrollingDown = e.deltaY > 0;

    if ((isAtTop && scrollingUp) || (isAtBottom && scrollingDown)) {
      scrollVelocity.current = 0;
      return;
    }

    e.preventDefault();
    scrollVelocity.current += e.deltaY * SCROLL_SENSITIVITY;

    if (!scrollRaf.current)
      scrollRaf.current = requestAnimationFrame(tickScroll);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (expandedIndex !== null) return;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    if (dy > 40) setActiveIndex((prev) => Math.min(prev + 1, n - 1));
    else if (dy < -40) setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [expandedIndex, n, tickScroll]);

  const handleCardClick = (interest, index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      return;
    } // close card

    if (activeIndex !== index) {
      setActiveIndex(index);
      return;
    } // open card

    setExpandedIndex(index); // scroll to card
  };

  if (n === 0) {
    return <div className={styles["fc-empty"]}>Inga intressen valda än.</div>;
  }

  return (
    <div className={styles["fc-root"]}>
      {/* Expanded card */}
      {expandedIndex !== null && (
        <div
          className={styles["fc-expanded"]}
          style={{
            background: selectedInterests[expandedIndex].color,
          }}
        >
          <span className={styles["fc-overlay-label"]}>
            {selectedInterests[expandedIndex].label}
          </span>

          <div className={styles["fc-overlay-divider"]} />

          <ul className={styles["fc-questions"]}>
            {selectedInterests[expandedIndex].questions.map((q, i) => (
              <li key={i} className={styles["fc-q"]}>
                {q}
              </li>
            ))}
          </ul>

          <span
            className={styles["fc-close"]}
            onClick={() => setExpandedIndex(null)}
          >
            Stäng
          </span>
        </div>
      )}

      {/* Card stack */}
      {expandedIndex === null && (
        <div className={styles["fc-viewport"]} ref={viewportRef}>
          <div
            className={styles["fc-track"]}
            style={{
              height: trackH,
              transform: `translateY(${getTrackOffset()}px)`,
              transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {selectedInterests.map((interest, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={interest.id}
                  className={styles["fc-card"]}
                  style={{
                    background: interest.color,
                    top: cardTop(index),
                    zIndex: index + 1,
                    opacity: isActive ? 1 : 0.42,
                    boxShadow: isActive
                      ? "0 16px 40px rgba(0,0,0,0.45)"
                      : "0 4px 16px rgba(0,0,0,0.18)",
                    transform: isActive ? "scale(1)" : "scale(0.96)",
                    filter: isActive ? "none" : "brightness(0.9)",
                  }}
                  onClick={() => {
                    if (expandedIndex === index) {
                      // Om kortet redan är öppet → stäng
                      setExpandedIndex(null);
                    } else if (activeIndex !== index) {
                      // Klick på ett annat kort → flytta fokus
                      setActiveIndex(index);
                    } else {
                      // Klick på det aktiva kortet → expandera
                      setExpandedIndex(index);
                    }
                  }}
                >
                  <span className={styles["fc-label"]}>{interest.label}</span>
                  <span
                    className={styles["fc-hint"]}
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    Tryck för att se frågor
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
