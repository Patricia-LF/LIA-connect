import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./FeaturedCards.module.css";
import close from "../assets/close.png";

export default function FeaturedCards({ selectedInterests = [], isStudent }) {
  const n = selectedInterests.length;
  const PEEK = 45;
  const CARD_H = 160;
  const trackH = n > 0 ? CARD_H + (n - 1) * PEEK : 0;

  const [activeIndex, setActiveIndex] = useState(n - 1);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const viewportRef = useRef(null);
  const scrollVelocity = useRef(0);
  const scrollRaf = useRef(null);
  const touchStartY = useRef(0);

  const SCROLL_FRICTION = 0.82;
  const SCROLL_SENSITIVITY = 0.3;
  const STEP_THRESHOLD = PEEK * 0.4;

  const cardTop = (index) => index * PEEK;

  const tickScroll = useCallback(() => {
    scrollVelocity.current *= SCROLL_FRICTION;
    if (Math.abs(scrollVelocity.current) > STEP_THRESHOLD) {
      const dir = scrollVelocity.current > 0 ? 1 : -1;

      setActiveIndex((prev) => {
        const next = prev + dir;
        if (next < 0 || next > n - 1) {
          scrollVelocity.current = 0;
          if (scrollRaf.current) {
            cancelAnimationFrame(scrollRaf.current);
            scrollRaf.current = null;
          }
          return prev;
        }
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

    e.preventDefault();

    if ((isAtTop && scrollingUp) || (isAtBottom && scrollingDown)) {
      scrollVelocity.current = 0;
      if (scrollRaf.current) {
        cancelAnimationFrame(scrollRaf.current);
        scrollRaf.current = null;
      }
      return;
    }

    const direction = Math.sign(e.deltaY);
    const currentDirection = Math.sign(scrollVelocity.current);
    if (direction !== currentDirection) {
      scrollVelocity.current = 0;
    }

    scrollVelocity.current += e.deltaY * SCROLL_SENSITIVITY;

    if (!scrollRaf.current) {
      scrollRaf.current = requestAnimationFrame(tickScroll);
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (expandedIndex !== null) return;
    e.preventDefault(); // ← blockerar sidscroll
    const dy = touchStartY.current - e.touches[0].clientY;
    if (dy > 40) setActiveIndex((prev) => Math.min(prev + 1, n - 1));
    else if (dy < -40) setActiveIndex((prev) => Math.max(prev - 1, 0));
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
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd);
    el.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [expandedIndex, n, tickScroll, activeIndex]);

  const handleCardClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      return;
    }

    if (activeIndex !== index) {
      setActiveIndex(index);
      return;
    }

    setExpandedIndex(index);
  };

  if (n === 0) {
    return <div className={styles["fc-empty"]}>Inga intressen valda än.</div>;
  }

  const currentInterest = selectedInterests[expandedIndex];

  const questions =
    currentInterest?.[isStudent ? "questions" : "questionsCompany"] ?? [];

  return (
    <div className={styles["fc-root"]}>
      {/* Expanded card */}
      {expandedIndex !== null && selectedInterests[expandedIndex] && (
        <div
          className={styles["fc-expanded"]}
          style={{ background: selectedInterests[expandedIndex].color }}
        >
          <p className={styles.interestOverlay}>
            {selectedInterests[expandedIndex].bigLabel}
          </p>
          <div className={styles["fc-container"]}>
            <div className={styles["fc-label-container"]}>
              <div className={styles["fc-overlay-label-container"]}>
                <span className={styles["fc-overlay-label"]}>
                  {selectedInterests[expandedIndex].label}
                </span>
                <span
                  className={styles["fc-close"]}
                  onClick={() => setExpandedIndex(null)}
                >
                  <img src={close} />
                </span>
              </div>
              <div className={styles.labelLine}></div>
            </div>
            <span className={styles.areas}>
              {selectedInterests[expandedIndex].areas?.join(" ")}
            </span>
          </div>
          <div className={styles.questions}>
            <h3 className={styles["q-title"]}>
              {isStudent
                ? "Bra att prata om"
                : "Frågor att ställa till studenter"}
            </h3>
            <ul className={styles["fc-questions"]}>
              {questions.map((q, i) => (
                <li key={i} className={styles["fc-q"]}>
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.attributes}>
            <p>
              {" "}
              {isStudent
                ? "Det här söker företagen"
                : "Det här kan studenter bidra med"}
            </p>
            <ul className={styles["fc-attributes"]}>
              {selectedInterests[expandedIndex].attributes?.map((a, i) => (
                <li key={i} className={styles["fc-a"]}>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Card stack */}
      {expandedIndex === null && (
        <div className={styles["fc-viewport"]} ref={viewportRef}>
          <div className={styles["fc-track"]} style={{ height: trackH }}>
            {selectedInterests.map((interest, index) => {
              const isActive = index === activeIndex;
              const distance = Math.abs(index - activeIndex);
              const scale = 1 - distance * 0.05;
              const lift = isActive
                ? index === n - 1
                  ? -PEEK * 0.1
                  : -PEEK * 2
                : 0;

              return (
                <div
                  key={interest.id}
                  className={styles["fc-card"]}
                  style={{
                    background: interest.color,
                    top: cardTop(index),
                    zIndex: index + 1,
                    transform: `translateY(${lift}px) scale(${scale})`,
                    filter: isActive ? "none" : "brightness(0.9)",
                    boxShadow: isActive
                      ? "0 16px 40px rgba(0,0,0,0.45)"
                      : "0 4px 16px rgba(0,0,0,0.18)",
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className={styles.labelContainer}>
                    <span className={styles["fc-label"]}>{interest.label}</span>
                    <div className={styles.labelLine}></div>
                    <span className={styles.areas}>{interest.areas}</span>
                  </div>
                  <span
                    className={styles["fc-hint"]}
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    Tryck för att se frågor
                  </span>
                  <p className={styles.interestOverlay}>{interest.bigLabel}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
