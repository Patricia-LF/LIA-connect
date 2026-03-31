import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h3 className={styles.title}>Branschevent 2026</h3>
        <p className={styles.subtitle}>DD x WU</p>
      </div>
      <img
        className={styles.logo}
        src="src/assets/logo/bomarke.svg"
        alt="Logo"
      />
    </header>
  );
}
