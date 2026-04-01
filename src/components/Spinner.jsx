import styles from "./Spinner.module.css";

const COLORS = [
  "#ED8524",
  "#E6513D",
  "#BC3989",
  "#672D6A",
  "#016098",
  "#2C8ABE",
  "#019645",
  "#1F5533",
];

export default function Spinner() {
  return (
    <div className={styles.loader}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className={styles.dot}
          style={{
            "--i": i,
            "--dot-color": COLORS[i % COLORS.length],
          }}
        />
      ))}
    </div>
  );
}
