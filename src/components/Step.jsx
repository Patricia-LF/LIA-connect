import styles from "./Step.module.css";

export default function Step({ number, title, text }) {
  return (
    <div className={styles["steps-container"]}>
      <div className={styles["steps-number"]}>
        <div className={styles["circle"]}>
          <span>{number}</span>
        </div>
      </div>

      <div className={styles["steps-text"]}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
