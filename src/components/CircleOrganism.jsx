import { useEffect, useRef } from "react";
import styles from "./CircleOrganism.module.css";

// --- Tweak these constants to adjust the animation ---
const COLS = 4; // number of columns in the grid
const ROWS = 4; // number of rows in the grid
const SPACING_X = 28.8; // horizontal spacing between circles (px) // 72 * 0.40 ≈ 28.8

const GAP_MIN = 8.8; // minimum vertical gap between rows (px) — when circles are smallest // 22 * 0.40 ≈ 8.8
const GAP_MAX = 38; // maximum vertical gap between rows (px) — when circles are largest // 95 * 0.40 ≈ 38

const SCALE_MIN = 0.3; // smallest scale a circle reaches during its pulse
const SCALE_MAX = 1.5; // largest scale a circle reaches during its pulse

const PERIOD = 3; // duration of one full pulse cycle in seconds
const ROW_OFFSET = 0.5; // time offset in seconds between each row — creates the wave effect

const FALLBACK_COLORS = [
  "#ED8524",
  "#1F5533",
  "#2C8ABE",
  "#019645",
  "#E6513D",
  "#BC3989",
  "#672D6A",
  "#016098",
];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initCircleOrganism(gridEl, rafRef, colors) {
  const gW = (COLS - 1) * SPACING_X;
  const rows = [];

  // Build the grid: create one wrapper + circle element per cell,
  // assign a random radius and color, and store the x offset as a data attribute
  for (let row = 0; row < ROWS; row++) {
    const rowWraps = [];
    for (let col = 0; col < COLS; col++) {
      const baseR = random(4, 8); // const baseR = random(7, 14); 7–14 * 0.55 ≈ 4–8
      const color = colors[Math.floor(Math.random() * colors.length)];
      // Center the grid horizontally by offsetting from the grid's total width
      const x = col * SPACING_X - gW / 2;

      const wrap = document.createElement("div");
      wrap.className = styles["co-wrap"];
      wrap.dataset.x = x; // store x so the animation loop can read it

      const circle = document.createElement("div");
      circle.className = styles["co-circle"];
      circle.style.width = baseR * 2 + "px";
      circle.style.height = baseR * 2 + "px";
      circle.style.background = color;

      wrap.appendChild(circle);
      gridEl.appendChild(wrap);
      rowWraps.push(wrap);
    }
    rows.push(rowWraps);
  }

  // Animation loop using requestAnimationFrame
  let startTime = null;

  function animate(ts) {
    if (!startTime) startTime = ts;
    const t = (ts - startTime) / 1000; // elapsed time in seconds

    // Compute a continuous pulse value (0→1→0→1...) for each row using a sine wave.
    // Each row is offset in time by ROW_OFFSET seconds, which creates the wave effect
    // where neighboring rows pulse one after another rather than all at once.
    // (sin + 1) / 2 maps the sine output from [-1, 1] to [0, 1] with no abrupt jumps.
    const pulses = rows.map((_, row) => {
      const offset = row * ROW_OFFSET;
      return (Math.sin(((t - offset) / PERIOD) * Math.PI * 2) + 1) / 2;
    });

    // Calculate the Y position of each row.
    // The vertical gap between two rows is driven by the pulse of the row above —
    // large circles push the next row further away, small circles bring it closer.
    const rowY = [0];
    for (let row = 1; row < ROWS; row++) {
      const gap = GAP_MIN + pulses[row - 1] * (GAP_MAX - GAP_MIN);
      rowY.push(rowY[row - 1] + gap);
    }

    // Center the whole grid vertically
    const totalH = rowY[ROWS - 1];

    // Apply transform to each wrapper: translate to its (x, y) position and scale
    // based on the row's current pulse value
    rows.forEach((rowWraps, row) => {
      const y = rowY[row] - totalH / 2;
      const s = SCALE_MIN + pulses[row] * (SCALE_MAX - SCALE_MIN);
      rowWraps.forEach((wrap) => {
        const x = wrap.dataset.x;
        wrap.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
      });
    });

    rafRef.current = requestAnimationFrame(animate);
  }

  rafRef.current = requestAnimationFrame(animate);

  // Cleanup on unmount
  return () => {
    cancelAnimationFrame(rafRef.current);
    gridEl.innerHTML = "";
  };
}

export default function CircleOrganism({ colors }) {
  const gridRef = useRef(null);
  const rafRef = useRef(null);

  const activeColors = colors?.length > 0 ? colors : FALLBACK_COLORS;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cleanup = initCircleOrganism(grid, rafRef, activeColors);
    return cleanup;
  }, [activeColors]);

  return (
    <div className={styles.coScene}>
      <div className={styles.coGrid} ref={gridRef} />
    </div>
  );
}
