//DotText.jsx
//Animation of LIA Connect in hero on StartPage

import { useEffect, useRef } from "react";

export default function DotText() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = initDotText(canvasRef.current, "LIA", "Connect");

    return cleanup;
  }, []);

  return (
    <div className="dt-wrapper">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

const DT_FONT = {
  L: [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  I: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  A: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  C: [
    [0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
  ],
  O: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  E: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  c: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
  ],
  o: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  n: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  e: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
  ],
  t: [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ],
  " ": [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};

//Settings
const COLORS = [
  "#ED8524",
  "#E6513D",
  "#BC3989",
  "#672D6A",
  "#016098",
  "#2C8ABE",
  "#019645",
  "#1F5533",
  "#001a52",
  "#e51536",
  "#fff835",
];

const DT_DOT = 14;
const DT_GAP = 3;
const DT_STEP = DT_DOT + DT_GAP;
const DT_CHAR_W = 5;
const DT_SPACING = 2;
const FINAL_COLOR = { r: 0, g: 26, b: 82 };
const CHAR_SPACING_MAP = {
  c: 0, //Spacing 0 after c to avoid big gap between c and t in Connect
  i: 1,
  l: 1,
};

//Helpers
function lerp(a, b, t) {
  return a + (b - a) * t; //mix colors
}

//Dot build
function dtLineWidth(text) {
  return text.length * (DT_CHAR_W + DT_SPACING) - DT_SPACING;
}

function dtBuildDots(line1, line2) {
  const dots = [];
  const totalCols = Math.max(dtLineWidth(line1), dtLineWidth(line2)) + 2;

  function addLine(text, rowOffset) {
    const startCol = 0;
    let offset = 0;

    text.split("").forEach((ch) => {
      const spacing = CHAR_SPACING_MAP[ch] ?? DT_SPACING;
      const pattern = DT_FONT[ch] || DT_FONT[" "];

      pattern.forEach((row, r) => {
        row.forEach((cell, c) => {
          if (!cell) return;

          const col = startCol + offset + c;

          dots.push({
            x: col * DT_STEP + DT_DOT / 2,
            y: (rowOffset + r) * DT_STEP + DT_DOT / 2,
            col,
          });
        });
      });

      offset += DT_CHAR_W + spacing;
    });
  }

  addLine(line1, 0);
  addLine(line2, 9);

  const canvasW = totalCols * DT_STEP;

  // Canvas height: 9 rows gap between lines + 7 rows per character + dot padding
  const canvasH = (9 + 7) * DT_STEP + DT_DOT * 2;
  return { dots, canvasW, canvasH };
}

//Init
function initDotText(
  canvas,
  line1 = "LIA",
  line2 = "Connect",
  dotColor = "#ffffff",
) {
  const { dots, canvasW, canvasH } = dtBuildDots(line1, line2);
  const dpr = window.devicePixelRatio || 1;
  const parentWidth = canvas.parentElement.offsetWidth;
  const scale = parentWidth / canvasW;

  canvas.width = canvasW * scale * dpr;
  canvas.height = canvasH * scale * dpr;

  canvas.style.width = "100%";
  canvas.style.height = canvasH * scale + "px";

  const ctx = canvas.getContext("2d");
  ctx.scale(dpr * scale, dpr * scale);

  let start = null;
  let frameRef = null;
  const REVEAL = 1400;

  function draw(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    ctx.clearRect(0, 0, canvasW, canvasH);

    // Calculate flickerPhase and blinkSpeed once per frame, not per dot
    const flickerPhase = Math.pow(Math.min(1, elapsed / 8000), 2);
    const blinkSpeed = 1 - flickerPhase;

    dots.forEach(({ x, y }) => {
      const progress = Math.min(1, elapsed / 800);

      // Opacity
      let opacity;
      if (progress < 1) {
        opacity = progress;
      } else if (flickerPhase > 0.99) {
        opacity = 1; // stable opacity when animation is finished
      } else {
        // Seed spreads dots across different animation phases — 13 and 7 are primes
        // chosen to minimize repeating patterns across the grid
        const seed = x * 13 + y * 7;
        const b =
          Math.sin(ts / 700 + seed) *
          Math.sin(ts / 1500 + seed * 0.4) *
          Math.sin(ts / 2300 + seed * 0.9);
        opacity = 0.55 + 0.45 * ((b + 1) / 2);
      }

      // Color
      const seed = x * 13 + y * 7;
      const wave =
        Math.sin((ts * (1 + blinkSpeed * 3)) / 1200 + seed * 0.3) +
        Math.sin((ts * (1 + blinkSpeed * 3)) / 1800 + seed * 0.7) +
        Math.sin((ts * (1 + blinkSpeed * 3)) / 2400 + seed * 1.1);
      const t = (wave / 3 + 1) / 2;

      const colorIndex = Math.floor(t * COLORS.length) % COLORS.length;
      const colorA = COLORS[colorIndex];

      const rA = parseInt(colorA.slice(1, 3), 16);
      const gA = parseInt(colorA.slice(3, 5), 16);
      const bA = parseInt(colorA.slice(5, 7), 16);

      const r =
        flickerPhase > 0.99
          ? FINAL_COLOR.r
          : lerp(rA, FINAL_COLOR.r, flickerPhase);
      const g =
        flickerPhase > 0.99
          ? FINAL_COLOR.g
          : lerp(gA, FINAL_COLOR.g, flickerPhase);
      const b2 =
        flickerPhase > 0.99
          ? FINAL_COLOR.b
          : lerp(bA, FINAL_COLOR.b, flickerPhase);

      // Paint dot
      const radius = (DT_DOT / 2) * (0.4 + 0.6 * progress);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b2},${opacity})`;
      ctx.fill();
    });

    frameRef = requestAnimationFrame(draw);
  }

  frameRef = requestAnimationFrame(draw);

  return () => cancelAnimationFrame(frameRef);
}
