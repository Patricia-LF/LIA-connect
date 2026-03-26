import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./FeaturedCards.module.css";

/**
 * FeaturedCards
 * Props:
 *   selectedInterests — array av intresse-objekt från interests.js
 *                       (de som användaren valt i ProfileForm)
 * Exempel:
 *   <FeaturedCards selectedInterests={[interests[2], interests[4]]} />
 */
export default function FeaturedCards({ selectedInterests = [] }) {
  const n = selectedInterests.length;
  const PEEK = 68; // px som varje bakkort sticker upp ovanför nästa
  const CARD_H = 160;
  const trackH = n > 0 ? CARD_H + (n - 1) * PEEK : 0;

  const [activeIndex, setActiveIndex] = useState(n - 1); // nedersta kortet (längst fram) aktivt från start
  const [overlayInterest, setOverlayInterest] = useState(null);

  const viewportRef = useRef(null);
  const scrollVelocity = useRef(0);
  const scrollRaf = useRef(null);
  const touchStartY = useRef(0);

  const SCROLL_FRICTION = 0.82;
  const SCROLL_SENSITIVITY = 0.3;
  const STEP_THRESHOLD = 28;

  // ── Beräkna position ──────────────────────────────────────────
  // Kort 0 = längst bak (överst i stacken), kort n-1 = längst fram (underst)
  // zIndex ökar med index → högre index = längre fram
  const cardTop = (index) => index * PEEK;

  const getTrackOffset = useCallback(() => {
    const vpH = viewportRef.current?.clientHeight ?? 320;
    const cardMid = cardTop(activeIndex) + CARD_H / 2;
    return vpH / 2 - cardMid;
  }, [activeIndex]);

  // ── Scroll-momentum ───────────────────────────────────────────
  const tickScroll = useCallback(() => {
    scrollVelocity.current *= SCROLL_FRICTION;
    if (Math.abs(scrollVelocity.current) > STEP_THRESHOLD) {
      const dir = scrollVelocity.current > 0 ? 1 : -1;
      setActiveIndex((prev) => {
        const next = prev + dir;
        return next >= 0 && next < n ? next : prev;
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

  /* useEffect(() => { */
  const handleWheel = (e) => {
    e.preventDefault();
    if (overlayInterest) return;
    scrollVelocity.current += e.deltaY * SCROLL_SENSITIVITY;
    if (!scrollRaf.current)
      scrollRaf.current = requestAnimationFrame(tickScroll);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (overlayInterest) return;
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
  }, [overlayInterest, n, tickScroll]);

  // ── Klick på kort ─────────────────────────────────────────────
  const handleCardClick = (interest, index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      return;
    }
    setOverlayInterest(interest);
  };

  if (n === 0) {
    return (
      <div className={styles["fc-empty"]}>
        <p>Inga intressen valda än.</p>
      </div>
    );
  }

  return (
    <div className={styles["fc-root"]}>
      {/* ── Kortstack ─────────────────────────────────── */}
      <div className={styles["fc-viewport"]} ref={viewportRef}>
        <div
          className={styles["fc-track"]}
          style={{
            height: trackH,
            transform: `translateY(${getTrackOffset()}px)`,
            transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
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
                }}
                onClick={() => handleCardClick(interest, index)}
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

      {/* ── Dots + scroll-hint ────────────────────────── */}
      <div className={styles["fc-bottom"]}>
        <div className={styles["fc-dots"]}>
          {selectedInterests.map((_, i) => (
            <div
              key={i}
              className={`${styles["fc-dot"]}${i === activeIndex ? ` ${styles["fc-dot--active"]}` : ""}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
        <p className={styles["fc-scroll-hint"]}>Scrolla för att välja kort</p>
      </div>

      {/* ── Overlay ───────────────────────────────────── */}
      <div
        className={`${styles["fc-overlay"]}${overlayInterest ? " open" : ""}`}
      >
        <div
          className={styles["fc-overlay-bg"]}
          onClick={() => setOverlayInterest(null)}
        />
        <div
          className={styles["fc-overlay-card"]}
          style={{ background: overlayInterest?.color }}
        >
          <span className={styles["fc-overlay-label"]}>
            {overlayInterest?.label}
          </span>
          <div className={styles["fc-overlay-divider"]} />
          <ul className={styles["fc-questions"]}>
            {overlayInterest?.questions.map((q, i) => (
              <li key={i} className={styles["fc-q"]}>
                {q}
              </li>
            ))}
          </ul>
          <span
            className={styles["fc-close"]}
            onClick={() => setOverlayInterest(null)}
          >
            Stäng
          </span>
        </div>
      </div>
    </div>
  );
}
