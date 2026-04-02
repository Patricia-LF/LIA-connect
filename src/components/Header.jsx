import styles from "./Header.module.css";

export default function Header({ children }) {
  return (
    <header className={styles.header}>
      {children}

      <img
        className={styles.logo}
        src="src/assets/logo/bomarke.svg"
        alt="Logo"
      />
    </header>
  );
}
