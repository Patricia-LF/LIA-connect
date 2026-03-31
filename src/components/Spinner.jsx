import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.loader}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className={styles.dot} style={{ "--i": i }} />
      ))}
    </div>
  );
}
